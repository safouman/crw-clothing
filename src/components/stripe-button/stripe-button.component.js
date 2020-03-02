import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey = 'pk_live_drFkViZmzOkgGtqIJLGMvphp';

  const ontoken = token => {
    console.log(token);
    // eslint-disable-next-line no-alert
    alert('Payment Successfull');
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd"
      billingAddress
      shippingAddress
      image="http://svgshare.com/i/CUz.svg"
      description={`Your Total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={ontoken}
      stripeKey={publishablekey}
    />
  );
};

export default StripeCheckoutButton;
