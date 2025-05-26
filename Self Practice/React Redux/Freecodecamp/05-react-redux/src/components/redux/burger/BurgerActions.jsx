import { ORDER_BURGER } from "./BurgerTypes";

// export const orderBurger = () => {
//   return {
//     type: ORDER_BURGER,
//   };
// };

export const orderBurger = (numberOfBurger = 1) => {
  return {
    type: ORDER_BURGER,
    payload: numberOfBurger,
  };
};
