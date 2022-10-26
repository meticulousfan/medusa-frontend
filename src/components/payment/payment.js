import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { useCart } from "medusa-react"
import React, { useMemo } from "react"
import PaymentForm from "./payment-form"

const STRIPE_KEY = process.env.NEXT_PUBLIC_STRIPE_API_KEY || ""
const stripePromise = loadStripe(
  "pk_test_51GzsAWCZrJ5XDKMLza824WsFaw4z50FQtjSlykRoHVDV7Ej2dTkLmCxLb70036H6izFTXxEDNui8fhj3qcitCFbS00G7galx4r"
)

const Payment = ({ handleSubmit, setLoading }) => {
  const { cart } = useCart()

  const stripeSession = useMemo(() => {
    if (cart.payment_sessions) {
      return cart.payment_sessions.find(s => s.provider_id === "manual")
    }

    return null
  }, [cart.payment_sessions])

  if (!stripeSession) {
    return null
  }

  const options = {
    client_secret:
      "pi_3Lx2P4CZrJ5XDKML0RAnt9VM_secret_jJbwcR561jlJj6hMZ2JFrYqf2",
  }

  return (
    <Elements stripe={stripePromise} options={options}>
      <PaymentForm
        session={stripeSession}
        handleSubmit={handleSubmit}
        setLoading={setLoading}
      />
    </Elements>
  )
}

export default Payment
