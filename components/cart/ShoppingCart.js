import Image from "next/image";

import {
  StyledShoppingCart,
  Heading,
  CartTable,
  TableHeading,
  ProductWrapper,
  ImageItem,
  Item,
  ProductItem,
  Price,
  Delete,
} from "../styles/ShoppingCart.styled";

export default function ShoppingCart() {
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

      <ProductWrapper>
        <ImageItem>
          <Image
            src="/images/details-image.png"
            width={90}
            height={90}
            alt="product image"
            objectFit="cover"
          />

          <div>
            <button> - </button>
            <span>1</span>
            <button> + </button>
          </div>
        </ImageItem>
        <ProductItem>
          <div>
            <h3>Shirt Isolated</h3>
            <span>Shirt</span>
            <h4>$50.00</h4>
          </div>
        </ProductItem>
        <Price>
          <h4>$50.00</h4>
        </Price>
        <Item>
          <div>
            <button> - </button>
            <span>1</span>
            <button> + </button>
          </div>
        </Item>
        <Delete>
          <div>
            <button>X</button>
          </div>
        </Delete>
      </ProductWrapper>
      <ProductWrapper>
        <ImageItem>
          <Image
            src="/images/image-product-1.png"
            width={90}
            height={90}
            alt="product image"
            objectFit="cover"
          />

          <div>
            <button> - </button>
            <span>1</span>
            <button> + </button>
          </div>
        </ImageItem>
        <ProductItem>
          <div>
            <h3>High Quality T-Shirt</h3>
            <span>T-Shirt</span>
            <h4>$35.00</h4>
          </div>
        </ProductItem>
        <Price>
          <h4>$35.00</h4>
        </Price>
        <Item>
          <div>
            <button> - </button>
            <span>1</span>
            <button> + </button>
          </div>
        </Item>
        <Delete>
          <div>
            <button>X</button>
          </div>
        </Delete>
      </ProductWrapper>
      <ProductWrapper>
        <ImageItem>
          <Image
            src="/images/image-product-3.png"
            width={90}
            height={90}
            alt="product image"
            objectFit="cover"
          />

          <div>
            <button> - </button>
            <span>1</span>
            <button> + </button>
          </div>
        </ImageItem>
        <ProductItem>
          <div>
            <h3>Men’s Cotton T-Shirt</h3>
            <span>T-Shirt</span>
            <h4>$40.00</h4>
          </div>
        </ProductItem>
        <Price>
          <h4>$40.00</h4>
        </Price>
        <Item>
          <div>
            <button> - </button>
            <span>1</span>
            <button> + </button>
          </div>
        </Item>
        <Delete>
          <div>
            <button>X</button>
          </div>
        </Delete>
      </ProductWrapper>
    </StyledShoppingCart>
  );
}
