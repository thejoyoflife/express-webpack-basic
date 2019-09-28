import data from "../../data.json";

export default (req, res) => {
  const car = req.car;
  res.status(200).json({ car });
};
