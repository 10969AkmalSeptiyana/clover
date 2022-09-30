import Image from "next/image";

import { Container } from "../styles/Container.styled";
import {
  CardBody,
  CardGrid,
  CardProduct,
  ProductPrice,
  ProductTitle,
  Title,
} from "../styles/NewArrivals.styled";

export default function NewArrivals() {
  return (
    <section>
      <Container>
        <Title>New Arrivals</Title>
        <CardGrid>
          <CardProduct>
            <Image
              src="/images/image-product-1.png"
              alt="Image Product 1"
              width={402}
              height={519}
              quality={100}
            />
            <CardBody>
              <div>
                <ProductTitle>High Quality T-Shirt</ProductTitle>
                <ProductPrice>$40.00</ProductPrice>
              </div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_7_3)">
                  <path
                    d="M16.5 3C19.538 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.36 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.934 18.604C13.815 18.048 14.61 17.495 15.354 16.903C18.335 14.533 20 11.943 20 9C20 6.64 18.463 5 16.5 5C15.424 5 14.26 5.57 13.414 6.414L12 7.828L10.586 6.414C9.74 5.57 8.576 5 7.5 5C5.56 5 4 6.656 4 9C4 11.944 5.666 14.533 8.645 16.903C9.39 17.495 10.185 18.048 11.066 18.603C11.365 18.792 11.661 18.973 12 19.175C12.339 18.973 12.635 18.792 12.934 18.604Z"
                    fill="#707070"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_7_3">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </CardBody>
          </CardProduct>
          <CardProduct>
            <Image
              src="/images/image-product-2.png"
              alt="Image Product 2"
              width={402}
              height={519}
              quality={100}
            />
            <CardBody>
              <div>
                <ProductTitle>Technical T-shirt</ProductTitle>
                <ProductPrice>$39.00</ProductPrice>
              </div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_7_3)">
                  <path
                    d="M16.5 3C19.538 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.36 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.934 18.604C13.815 18.048 14.61 17.495 15.354 16.903C18.335 14.533 20 11.943 20 9C20 6.64 18.463 5 16.5 5C15.424 5 14.26 5.57 13.414 6.414L12 7.828L10.586 6.414C9.74 5.57 8.576 5 7.5 5C5.56 5 4 6.656 4 9C4 11.944 5.666 14.533 8.645 16.903C9.39 17.495 10.185 18.048 11.066 18.603C11.365 18.792 11.661 18.973 12 19.175C12.339 18.973 12.635 18.792 12.934 18.604Z"
                    fill="#707070"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_7_3">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </CardBody>
          </CardProduct>
          <CardProduct>
            <Image
              src="/images/image-product-3.png"
              alt="Image Product 3"
              width={402}
              height={519}
              quality={100}
            />
            <CardBody>
              <div>
                <ProductTitle>Men's Cotton T-shirt</ProductTitle>
                <ProductPrice>$35.00</ProductPrice>
              </div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_7_3)">
                  <path
                    d="M16.5 3C19.538 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.36 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.934 18.604C13.815 18.048 14.61 17.495 15.354 16.903C18.335 14.533 20 11.943 20 9C20 6.64 18.463 5 16.5 5C15.424 5 14.26 5.57 13.414 6.414L12 7.828L10.586 6.414C9.74 5.57 8.576 5 7.5 5C5.56 5 4 6.656 4 9C4 11.944 5.666 14.533 8.645 16.903C9.39 17.495 10.185 18.048 11.066 18.603C11.365 18.792 11.661 18.973 12 19.175C12.339 18.973 12.635 18.792 12.934 18.604Z"
                    fill="#707070"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_7_3">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </CardBody>
          </CardProduct>
          <CardProduct>
            <Image
              src="/images/image-product-4.png"
              alt="Image Product 4"
              width={402}
              height={519}
              quality={100}
            />
            <CardBody>
              <div>
                <ProductTitle>Men's Solid Regular</ProductTitle>
                <ProductPrice>$25.00</ProductPrice>
              </div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_7_3)">
                  <path
                    d="M16.5 3C19.538 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.36 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.934 18.604C13.815 18.048 14.61 17.495 15.354 16.903C18.335 14.533 20 11.943 20 9C20 6.64 18.463 5 16.5 5C15.424 5 14.26 5.57 13.414 6.414L12 7.828L10.586 6.414C9.74 5.57 8.576 5 7.5 5C5.56 5 4 6.656 4 9C4 11.944 5.666 14.533 8.645 16.903C9.39 17.495 10.185 18.048 11.066 18.603C11.365 18.792 11.661 18.973 12 19.175C12.339 18.973 12.635 18.792 12.934 18.604Z"
                    fill="#707070"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_7_3">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </CardBody>
          </CardProduct>
          <CardProduct>
            <Image
              src="/images/image-product-5.png"
              alt="Image Product 5"
              width={402}
              height={519}
              quality={100}
            />
            <CardBody>
              <div>
                <ProductTitle>Shirts Isolated</ProductTitle>
                <ProductPrice>$50.00</ProductPrice>
              </div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_7_3)">
                  <path
                    d="M16.5 3C19.538 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.36 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.934 18.604C13.815 18.048 14.61 17.495 15.354 16.903C18.335 14.533 20 11.943 20 9C20 6.64 18.463 5 16.5 5C15.424 5 14.26 5.57 13.414 6.414L12 7.828L10.586 6.414C9.74 5.57 8.576 5 7.5 5C5.56 5 4 6.656 4 9C4 11.944 5.666 14.533 8.645 16.903C9.39 17.495 10.185 18.048 11.066 18.603C11.365 18.792 11.661 18.973 12 19.175C12.339 18.973 12.635 18.792 12.934 18.604Z"
                    fill="#707070"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_7_3">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </CardBody>
          </CardProduct>
          <CardProduct>
            <Image
              src="/images/image-product-6.png"
              alt="Image Product 6"
              width={402}
              height={519}
              quality={100}
            />
            <CardBody>
              <div>
                <ProductTitle>High Quality T-Shirt Zara</ProductTitle>
                <ProductPrice>$45.00</ProductPrice>
              </div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_7_3)">
                  <path
                    d="M16.5 3C19.538 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.36 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.934 18.604C13.815 18.048 14.61 17.495 15.354 16.903C18.335 14.533 20 11.943 20 9C20 6.64 18.463 5 16.5 5C15.424 5 14.26 5.57 13.414 6.414L12 7.828L10.586 6.414C9.74 5.57 8.576 5 7.5 5C5.56 5 4 6.656 4 9C4 11.944 5.666 14.533 8.645 16.903C9.39 17.495 10.185 18.048 11.066 18.603C11.365 18.792 11.661 18.973 12 19.175C12.339 18.973 12.635 18.792 12.934 18.604Z"
                    fill="#707070"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_7_3">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </CardBody>
          </CardProduct>
        </CardGrid>
      </Container>
    </section>
  );
}
