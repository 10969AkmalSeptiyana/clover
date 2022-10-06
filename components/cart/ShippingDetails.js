import Image from "next/image";

import {
  StyledShippingDetails,
  Card,
  Heading,
  InputGroup,
  Select,
  Wrapper,
  ButtonWrapper,
} from "../styles/ShippingDetails.styled";
import Button from "../ui/Button";

export default function ShippingDetails({ meta }) {
  return (
    <StyledShippingDetails>
      <Card>
        <form>
          <Heading>
            <h3>Shipping Details</h3>
          </Heading>

          <InputGroup>
            <label htmlFor="completeName">Complete Name</label>
            <input
              type="text"
              name="completeName"
              placeholder="Input your name"
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="emailAddress">Email Address</label>
            <input
              type="email"
              name="emailAddress"
              placeholder="Input your email address"
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Input your address"
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Input your phone number"
            />
          </InputGroup>

          <Select>
            <label htmlFor="complete-name">Choose Courier</label>

            <Wrapper>
              {meta?.couriers.map((item) => {
                return (
                  <div key={item.id}>
                    <button type="button">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        width={item.width}
                        height={item.height}
                        objectFit="contain"
                      />
                    </button>
                  </div>
                );
              })}
            </Wrapper>
          </Select>
          <Select>
            <label htmlFor="complete-name">Choose Payment</label>

            <Wrapper>
              {meta?.payments.map((item) => {
                return (
                  <div key={item.id}>
                    <button type="button">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        width={item.width}
                        height={item.height}
                        objectFit="contain"
                      />
                    </button>
                  </div>
                );
              })}
            </Wrapper>
          </Select>

          <ButtonWrapper>
            <Button
              isSubmit
              padding="13px 0"
              width="100%"
              radius="57px"
              fontSize="18px"
            >
              Checkout Now
            </Button>
          </ButtonWrapper>
        </form>
      </Card>
    </StyledShippingDetails>
  );
}
