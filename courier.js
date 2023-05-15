const { CourierClient } = require("@trycourier/courier");

const courier = CourierClient({ authorizationToken: "<AUTH_TOKEN>" });
courier.send({
  eventId: "<EVENT ID>", // your Notification ID
    recipientId: "<RECIPIENT_ID", // usually your system's User ID
    profile: {
      email: "<EMAIL_ADDRESS>"
    },
  data: {} *// optional variables for merging into templates }).then((resp) => {
    console.log('Email sent', resp)
})
  .catch((error) => {
    console.error(error)
  });