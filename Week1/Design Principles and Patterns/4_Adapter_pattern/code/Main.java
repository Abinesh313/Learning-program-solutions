public class Main {
    public static void main(String[] args) {

        // Use PayPal through adapter
        PaymentProcessor payPalProcessor = new PayPalAdapter(new PayPalGateway());
        payPalProcessor.processPayment(150.5);

        // Use Stripe through adapter
        PaymentProcessor stripeProcessor = new StripeAdapter(new StripeGateway());
        stripeProcessor.processPayment(301.00);
    }
}
