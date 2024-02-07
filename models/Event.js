const { Schema, model } = require("mongoose");

const EventSchema = new Schema({
  name: {
    type: String,
    required: [true, "Event name is required"],
  },
  link: {
    type: String,
    required: [true, "Link is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  date: {
    type: Date,
    required: [true, "Date is required"],
  },
  location: {
    type: String,
    required: [true, "Location is required"],
  },
  organizer: {
    type: String,
    required: [true, "Organizer is required"],
  },

});

const Event = model("Event", EventSchema);

module.exports = Event;