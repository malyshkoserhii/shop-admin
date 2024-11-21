import { CharacterInfroParams } from "./screen-params.type";

export enum NAVIGATION_KEYS {
  LOGIN = "LOGIN",
  CHARACTER_INFO = "CHARACTER_INFO",
}

export type RootStackParamList = {
  [NAVIGATION_KEYS.LOGIN]: undefined;
  [NAVIGATION_KEYS.CHARACTER_INFO]: CharacterInfroParams;
};
