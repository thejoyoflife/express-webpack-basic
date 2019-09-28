import data from "../data.json";
import logger from "../winston";

export default type => (req, res, next, value) => {
  const typePlural = `${type}s`;
  const obj = data[typePlural].find(t => t.id === value * 1);
  if (obj) {
    req[type] = obj;
    next();
  } else {
    logger.warn(`${type} with id ${value} doesn't exist`);
    res.status(400).send(`Invalie ${type} ID`);
  }
};
