const name = require("../country/state/city/index");
const fname = require("../utilities/utils/index");

const getPeopleInCity = () => {
  return fname(name);
};
module.exports = getPeopleInCity;
