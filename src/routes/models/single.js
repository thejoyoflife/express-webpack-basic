import data from "../../data.json";

export default (req, res) => {
  const model = req.model;
  res.status(200).json({ model });
};
