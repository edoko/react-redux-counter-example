// 액션의 타입을 가져옴
import { INCREASE, DECREASE } from "../actions";

// 초기 state를 만듦.
const initialState = {
  number: 0
};

// 특정 액션 타입이 오면 거기에 맞게 state를 조작해서 반환.
export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1
      };
    case DECREASE:
      return {
        number: state.number - 1
      };
    default:
      return state;
  }
}
