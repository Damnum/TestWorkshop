import _ from "lodash";

export const validateMe = (weather, temperature) =>
  validate(weather, temperature) ? "Oh Yeah" : "No way!";

const validate = (weather, temperature) => {
  switch (_.lowerCase(weather)) {
    case "sunny":
      return true;
    case "storm":
      return false;
    default:
      return evalTemperature(temperature);
  }
};

const evalTemperature = temperature => {
  return temperature > 23;
};
