import { createContext, useContext, useReducer } from "react";

const Context = createContext();

const initialState = {
  cart: {},
};

export function useGlobalContext() {
  const [state, dispatch] = useContext(Context);

  if (!state || !dispatch) {
    throw new Error("useGlobalContext must be used within a Provider");
  }

  return { state, dispatch };
}

function Reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: state.cart
          ? { ...state.cart, [action.item.id]: action.item }
          : { [action.item.id]: action.item },
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: Object.keys(state.cart)
          .filter((key) => +key !== +action.id)
          .reduce((acc, key) => {
            const item = state.cart[key];
            acc[item.id] = item;
            return acc;
          }, {}),
      };

    case "INCREMENT":
      let incQuantity = Object.keys(state.cart).map((key) => {
        const item = state.cart[key];
        if (item.id === action.id) {
          return { ...item, quantity: item.quantity + 1 };
        }

        return item;
      });

      return { ...state, cart: incQuantity };

    case "DECREMENT":
      let decQuantity = Object.keys(state.cart).map((key) => {
        const item = state.cart[key];
        if (item.id === action.id) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
        }

        return item;
      });

      return { ...state, cart: decQuantity };

    case "RESET_CART":
      return {
        ...state,
        cart: initialState.cart,
      };

    default: {
      throw new Error(`Unhandled action type ${action.type}`);
    }
  }
}

export default function Provider(props) {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return <Context.Provider value={[state, dispatch]} {...props} />;
}
