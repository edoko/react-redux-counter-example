export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";

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
