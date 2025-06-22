public class Main {
    public static void main(String[] args) {
        PaymentContext context = new PaymentContext();

        // Use Credit Card
        context.setPaymentStrategy(new CreditCardPayment("1234-5678-9012-3456"));
        context.makePayment(2000.00);

        System.out.println();

        // Use PayPal
        context.setPaymentStrategy(new PayPalPayment("user@example.com"));
        context.makePayment(700.50);
    }
}
