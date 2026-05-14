import mongoose, { Schema, models, model } from "mongoose"

const ServiceRequestSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    relationship: {
      type: String,
    },

    topics: {
      type: [String],
      default: [],
    },

    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const ServiceRequest =
  models.ServiceRequest ||
  model("ServiceRequest", ServiceRequestSchema)

export default ServiceRequest