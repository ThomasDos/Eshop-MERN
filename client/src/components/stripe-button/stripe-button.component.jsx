import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripheCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51ImF5vJalqDgRUAn3ewHxKjORGb5Dz1s2aljAEM4lCfDgHVZrGFLGhLgZCJaguG8UKjCrcSrMz9Zt2YzP6SvZemB0056ENqged";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        alert("succesful payment");
      })
      .catch((error) => {
        console.log("Payment Error: ", error);
        alert(
          "There was an issue with your payment! Please make sure you use the provided credit card."
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing"
      billingAddress
      shippingAddress
      image="https://m.media-amazon.com/images/I/31Sy2HGtAcL._AC_SS450_.jpg"
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripheCheckoutButton;
