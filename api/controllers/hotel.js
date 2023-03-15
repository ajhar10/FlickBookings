import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const saveHotel = await newHotel.save();
    res.status(200).json(saveHotel);
  } catch (err) {
    next(err);
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err);
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedHotel);
  } catch (err) {
    next(err);
  }
};

export const getHotel = async (req, res, next) => {
  try {
    const getHotel = await Hotel.findById(req.params.id);
    res.status(200).json(getHotel);
  } catch (err) {
    next(err);
  }
};
export const getAllHotel = async (req, res, next) => {
  const { min, max, limit, ...others } = req.query;
  try {
    const getHotel = await Hotel.find({
      ...others,
      cheapestPrice: { $gt: min, $lt: max },
    }).limit(limit);
    res.status(200).json(getHotel);
  } catch (err) {
    next(err);
  }
};

//Count By CITY
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

//Count By TYPE
export const countByType = async (req, res, next) => {
  try {
    const countByHotel = await Hotel.countDocuments({ type: "hotel" });
    const countByApartment = await Hotel.countDocuments({
      type: "apartment",
    });
    const countByResort = await Hotel.countDocuments({ type: "resort" });
    const countByVilla = await Hotel.countDocuments({ type: "villa" });
    const countByCabin = await Hotel.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "hotel", count: countByHotel },
      { type: "apartment", count: countByApartment },
      { type: "resort", count: countByResort },
      { type: "villa", count: countByVilla },
      { type: "cabin", count: countByCabin },
    ]);
  } catch (err) {
    next(err);
  }
};

export const getHotelRoom = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
