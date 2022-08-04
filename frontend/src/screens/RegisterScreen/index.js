import React from "react";
import { Text, View } from "react-native";
import CridentialsFrom from "../../components/CridentialsForm";
import { register } from "./controller";

export default function RegisterScreen() {
  return <CridentialsFrom type="register" onPressHandler={register} />;
}
