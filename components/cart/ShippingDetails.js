import Image from "next/image";
import { useRouter } from "next/router";

import { useGlobalContext } from "../../lib/hooks/useGlobalContext";
import useForm from "../../lib/hooks/useForm";
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
  const router = useRouter();
  const { state, dispatch } = useGlobalContext();

  const { state: payload, fnUpdateState } = useForm({
    completeName: "",
    emailAddress: "",
    address: "",
    phoneNumber: "",
    courier: "",
    payment: "",
  });

  const isSubmitDisabled =
    Object.keys(payload).filter((key) => {
      return payload[key] !== "";
    }).length === Object.keys(payload).length;

  async function fnSubmit(event) {
    event.preventDefault();
    try {
      const res = await fetch(`/api/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          cart: Object.keys(state.cart).map((key) => state.cart[key]),
        }),
      });

      if (res) {
        router.push("/success");
        dispatch({ type: "RESET_CART" });
      }
    } catch (error) {
      alert(error);
    }
  }

  return (
    <StyledShippingDetails>
      <Card>
        <form onSubmit={fnSubmit}>
          <Heading>
            <h3>Shipping Details</h3>
          </Heading>

          <InputGroup>
            <label htmlFor="completeName">Complete Name</label>
            <input
              type="text"
              name="completeName"
              placeholder="Input your name"
              onChange={fnUpdateState}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="emailAddress">Email Address</label>
            <input
              type="email"
              name="emailAddress"
              placeholder="Input your email address"
              onChange={fnUpdateState}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Input your address"
              onChange={fnUpdateState}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Input your phone number"
              onChange={fnUpdateState}
            />
          </InputGroup>

          <Select>
            <label htmlFor="complete-name">Choose Courier</label>

            <Wrapper>
              {meta?.couriers.map((item) => {
                return (
                  <div key={item.id}>
                    <label>
                      <input
                        type="radio"
                        name="courier"
                        value={item.name}
                        onChange={fnUpdateState}
                      />
                      <div>
                        <Image
                          src={item.imageUrl}
                          alt={item.name}
                          width={item.width}
                          height={item.height}
                          objectFit="contain"
                        />
                      </div>
                    </label>
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
                    <label>
                      <input
                        type="radio"
                        name="payment"
                        value={item.name}
                        onChange={fnUpdateState}
                      />
                      <div>
                        <Image
                          src={item.imageUrl}
                          alt={item.name}
                          width={item.width}
                          height={item.height}
                          objectFit="contain"
                        />
                      </div>
                    </label>
                  </div>
                );
              })}
            </Wrapper>
          </Select>

          <ButtonWrapper>
            <Button
              padding="13px 0"
              width="100%"
              radius="57px"
              fontSize="18px"
              type="submit"
              disabled={!isSubmitDisabled}
            >
              Checkout Now
            </Button>
          </ButtonWrapper>
        </form>
      </Card>
    </StyledShippingDetails>
  );
}
