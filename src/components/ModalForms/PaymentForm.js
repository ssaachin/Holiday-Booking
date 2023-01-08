import StripeCheckout from 'react-stripe-checkout';

export default function PaymentForm() {

    const onToken = (token) => {
        console.log(token);
    };

    return (
        <StripeCheckout style={{margin:"1rem", backgroundColor:"teal"}}
            token={onToken}
            stripeKey="pk_test_51L0PHxFNr24zc5Cse45iNcU3rf7z9qlAEyzIInpTVKbVO7z6WxZbSOvXKGdsTMm3Kv2Rm0cGWcBzJ6v7E81echGs00jhZYcZn1"
        />
    );

} 