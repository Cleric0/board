import {useContext} from "react";
import {Context} from "./context";

export function useRootStore() {
  return useContext(Context)
}