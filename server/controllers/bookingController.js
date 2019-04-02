const Booking = require("../models/Booking");
const Rental = require("../models/Rental");

exports.PostBooking = async (req, res) => {
  const { startAt, endAt, days, guests, rental } = req.body;

  const user = res.locals.user;

  try {
    const booking = new Booking({ startAt, endAt, days, guests });

    const foundrental = await Rental.findById(rental._id)
      .populate("user")
      .populate("bookings");
    
    if (foundrental.user._id == user.id)
      return res
        .status(422)
        .json({
          errors: [
            {
              title: "Invalid User!",
              desc: "Can not create booking of your own rental"
            }
          ]
        });

    res.status(200).json({title: "Created booking", desc: booking, foundrental});
  } catch (err) {
   console.log(err)
    res.status(500).json({ title: "Error", desc: err });
  }
};
