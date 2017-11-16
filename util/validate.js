import _ from "lodash";
import RNFS from "react-native-fs";

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
  if (RNFS.readDir() === true) {
    return temperature > 23;
  }
  throw "Duh! Could not read file!";
};
