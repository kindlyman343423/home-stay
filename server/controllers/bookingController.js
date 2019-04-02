const Booking = require("../models/Booking");
const Rental = require("../models/Rental");
const moment = require("moment");

exports.PostBooking = async (req, res) => {
  const { startAt, endAt, days, guests, rental } = req.body;

  const user = res.locals.user;

  try {
    const booking = new Booking({ startAt, endAt, days, guests });

    const foundrental = await Rental.findById(rental._id)
      .populate("user")
      .populate("bookings");

    if (foundrental.user._id == user.id)
      return res.status(422).json({
        errors: [
          {
            title: "Invalid User!",
            desc: "Can not create booking of your own rental"
          }
        ]
      });

    if (!validBooking(booking, foundrental)) {
      return res.status(422).json({
        errors: [
          {
            title: "Invalid Booking!",
            desc: "Dates are already taken"
          }
        ]
      });
    }

    foundrental.bookings.push(booking);
    foundrental.save();
    await booking.save();

    res
      .status(200)
      .json({ title: "Created booking", desc: booking });
  } catch (err) {
    console.log(err);
    res.status(500).json({ title: "Error", desc: err });
  }
};

const validBooking = (proposedBooking, rental) => {
 console.log(rental.bookings, proposedBooking)
  if (rental.bookings && rental.bookings.length > 0) {
    rental.bookings.every(booking => {
      const proposedStart = moment(proposedBooking.startAt);
      const proposedEnd = moment(proposedBooking.endAt);

      const actualStart = moment(booking.startAt);
      const actualEnd = moment(booking.endAt);

      console.log(proposedStart, proposedEnd, actualStart, actualEnd)

      console.log((
       (proposedStart > actualStart && proposedStart > actualEnd) ||
       (proposedEnd < actualStart && proposedEnd < actualEnd)
     ))

      //Check if booking is for free date available
      return (
        (proposedStart > actualStart && proposedStart > actualEnd) ||
        (proposedEnd < actualStart && proposedEnd < actualEnd)
      )
     
    });
  }
  return true;
};
