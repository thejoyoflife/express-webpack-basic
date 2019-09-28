import data from "../../../data.json";

export default (req, res) => {
  const modelId = req.params.modelId * 1;
  const cars = data.cars.filter(c => c.modelId === modelId);
  res.status(200).json({ cars });
};
