// 액션 타입 지정
export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";

// 액션 타입을 받아서 함수를 만듦.
export function increaseNumber() {
  return {
    type: INCREASE
  };
}

export function decreaseNumber() {
  return {
    type: DECREASE
  };
}
