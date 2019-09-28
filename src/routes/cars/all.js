import data from "../../data.json";

export default (req, res) => {
  const cars = data.cars;
  res.status(200).json({ cars });
};
