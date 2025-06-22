public class Main {
    public static void main(String[] args) {
        

        // Reinitialize and use Quick Sort
        Order[] orders2 = {
            new Order(1, "Abi", 200.00),
            new Order(2, "Bala", 101.99),
            new Order(3, "Chandru", 150.50)
        };

        OrderSorter.quickSort(orders2, 0, orders2.length - 1);
        System.out.println("Sorted by Quick Sort:");
        for (Order o : orders2) System.out.println(o);
    }
}
