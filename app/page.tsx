// app/page.tsx
"use client";
import { useState } from "react";
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";
import { submitPayment } from "./actions/actions";

export default function Home() {
  const [isPaymentFormVisible, setPaymentFormVisible] = useState(false);

  const togglePaymentForm = () => {
    setPaymentFormVisible(!isPaymentFormVisible);
  };

  const appId = "sandbox-sq0idb-ZzwSnAg_JxodGMK-gnK-gw";
  const locationId = "LN8TP2PP4XFBR";

  return (
    <main>
      <h1>Home Page</h1>
      <button onClick={togglePaymentForm}>Toggle Payment Form</button>
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
    </main>
  );
}
