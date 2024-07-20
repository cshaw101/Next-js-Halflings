"use client";
import { useState } from "react";
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";
import { submitPayment } from "./actions/actions";
import Navbar from "./components/nav";

export default function Home() {
  const [isPaymentFormVisible, setPaymentFormVisible] = useState(false);

  const togglePaymentForm = () => {
    setPaymentFormVisible(!isPaymentFormVisible);
  };

  const appId = "sandbox-sq0idb-ZzwSnAg_JxodGMK-gnK-gw";
  const locationId = "LN8TP2PP4XFBR";

  return (
    <>
      <Navbar togglePaymentForm={togglePaymentForm} />
      {isPaymentFormVisible && (
        <PaymentForm
          applicationId={appId}
          locationId={locationId}
          cardTokenizeResponseReceived={async (token) => {
            const result = await submitPayment(token.token);
            console.log(result);
          }}
        >
          <CreditCard />
        </PaymentForm>
      )}
    </>
  );
}
