import { combineReducers } from "redux";
import counter from "./counter";

// reducer를 합쳐주는 역할, 여기선 1개라 1개만 적음. 여러개 적어서 합칠 수 있음.
const index = combineReducers({
  counter
});

export default index;
