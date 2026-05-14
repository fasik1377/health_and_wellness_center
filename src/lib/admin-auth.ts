import { NextRequest } from "next/server"

export const ADMIN_COOKIE_NAME = "admin-auth"
const SESSION_TTL_SECONDS = 60 * 60 * 8

async function hmacSha256(value: string, secret: string) {
  const encoder = new TextEncoder()
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  )
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    encoder.encode(value)
  )

  return Array.from(new Uint8Array(signature))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("")
}

function getSessionSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET

  if (!secret || secret.length < 32) {
    throw new Error(
      "ADMIN_SESSION_SECRET must be set to at least 32 characters"
    )
  }

  return secret
}

function getPasswordSecret() {
  const secret = process.env.ADMIN_PASSWORD_SECRET || getSessionSecret()

  if (secret.length < 32) {
    throw new Error(
      "ADMIN_PASSWORD_SECRET must be at least 32 characters"
    )
  }

  return secret
}

export async function hashAdminPassword(password: string) {
  return hmacSha256(password, getPasswordSecret())
}

export async function verifyAdminCredentials(email: string, password: string) {
  const expectedEmail = process.env.ADMIN_EMAIL
  const expectedPasswordHash = process.env.ADMIN_PASSWORD_HASH
  const expectedPassword = process.env.ADMIN_PASSWORD

  if (!expectedEmail || (!expectedPasswordHash && !expectedPassword)) {
    throw new Error(
      "ADMIN_EMAIL and ADMIN_PASSWORD_HASH must be set for admin login"
    )
  }

  const submittedHash = await hashAdminPassword(password)
  const passwordMatches = expectedPasswordHash
    ? submittedHash === expectedPasswordHash
    : password === expectedPassword

  return email === expectedEmail && passwordMatches
}

export async function createAdminSessionCookie() {
  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS
  const signature = await hmacSha256(String(expiresAt), getSessionSecret())

  return {
    value: `${expiresAt}.${signature}`,
    maxAge: SESSION_TTL_SECONDS,
  }
}

export async function isAdminRequest(request: NextRequest) {
  const cookieValue = request.cookies.get(ADMIN_COOKIE_NAME)?.value

  if (!cookieValue) {
    return false
  }

  const [expiresAt, signature] = cookieValue.split(".")
  const expiresAtNumber = Number(expiresAt)

  if (
    !expiresAt ||
    !signature ||
    !Number.isFinite(expiresAtNumber) ||
    expiresAtNumber <= Math.floor(Date.now() / 1000)
  ) {
    return false
  }

  let expectedSignature = ""

  try {
    expectedSignature = await hmacSha256(
      expiresAt,
      getSessionSecret()
    )
  } catch {
    return false
  }

  return signature === expectedSignature
}

export function getAdminCredentials() {
  return {
    email: process.env.ADMIN_EMAIL || "",
    hasPassword:
      Boolean(process.env.ADMIN_PASSWORD_HASH) ||
      Boolean(process.env.ADMIN_PASSWORD),
  }
}
