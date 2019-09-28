import data from "../../data.json";

export default (req, res) => {
  const models = data.models;
  res.status(200).json({ models });
};
