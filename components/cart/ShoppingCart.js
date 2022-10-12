import Image from "next/image";

import "../../lib/format/currency";
import { useGlobalContext } from "../../lib/hooks/useGlobalContext";
import {
  CartTable,
  Counter,
  Delete,
  Heading,
  ImageItem,
  Item,
  Price,
  ProductItem,
  ProductWrapper,
  StyledShoppingCart,
  TableHeading,
} from "../styles/ShoppingCart.styled";

export default function ShoppingCart() {
  const { state, dispatch } = useGlobalContext();

  return (
    <StyledShoppingCart>
      <Heading>
        <h3>Shopping Cart</h3>
      </Heading>

      <CartTable>
        <div>
          <TableHeading width="90px">
            <h4>Photo</h4>
          </TableHeading>
          <TableHeading width="33%">
            <h4>Product</h4>
          </TableHeading>
          <TableHeading width="24%">
            <h4>Price</h4>
          </TableHeading>
          <TableHeading width="24%">
            <h4>Item</h4>
          </TableHeading>
          <TableHeading width="16%">
            <h4>Delete</h4>
          </TableHeading>
        </div>
      </CartTable>

      {Object.keys(state.cart).map((key) => {
        const item = state.cart[key];
        return (
          <ProductWrapper key={key}>
            <ImageItem>
              <Image
                src={item.imageUrls[item.imageUrls.length - 1]}
                width={90}
                height={90}
                alt={item.title}
                objectFit="cover"
              />

              <div>
                <Counter
                  onClick={() => dispatch({ type: "DECREMENT", id: item.id })}
                >
                  -
                </Counter>
                <span>{item.quantity}</span>
                <Counter
                  onClick={() => dispatch({ type: "INCREMENT", id: item.id })}
                >
                  +
                </Counter>
              </div>
            </ImageItem>
            <ProductItem>
              <div>
                <h3>{item.title}</h3>
                <span>{item.category.title}</span>
                <h4>{(item.price * item.quantity).currency()}</h4>
              </div>
            </ProductItem>
            <Price>
              <h4>{(item.price * item.quantity).currency()}</h4>
            </Price>
            <Item>
              <div>
                <Counter
                  onClick={() => dispatch({ type: "DECREMENT", id: item.id })}
                >
                  -
                </Counter>
                <span>{item.quantity}</span>
                <Counter
                  onClick={() => dispatch({ type: "INCREMENT", id: item.id })}
                >
                  +
                </Counter>
              </div>
            </Item>
            <Delete
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", id: item.id })
              }
            >
              <div>
                <button>X</button>
              </div>
            </Delete>
          </ProductWrapper>
        );
      })}
    </StyledShoppingCart>
  );
}
