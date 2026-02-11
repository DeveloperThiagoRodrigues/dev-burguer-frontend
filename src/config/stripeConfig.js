import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
    'pk_test_51SmDYKQEkBzT1Rk9GGjgiyEqWfJVb5Drf3EpXAHN77Bf5bVSTKVCjYXPGRcQTcKH9PUEOtUr5QJYRj2qUDkmBEGc00QXRwV5TS'
  );
  
  export default stripePromise;