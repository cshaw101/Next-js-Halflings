"use client";
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";

export default function Home() {
  const appId = "sandbox-sq0idb-ZzwSnAg_JxodGMK-gnK-gw";
  const locationId = "LN8TP2PP4XFBR";

  return (
    <PaymentForm
      applicationId={appId}
      locationId={locationId}
      cardTokenizeResponseReceived={async (token) => {
        // we’ll come back to this soon
        console.log(token);
      }}
    >
      <CreditCard />
    </PaymentForm>
  );
}