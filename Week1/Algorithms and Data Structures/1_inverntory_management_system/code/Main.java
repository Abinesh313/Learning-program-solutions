public class Main {
    public static void main(String[] args) {
        InventoryManager manager = new InventoryManager();

        Product p1 = new Product(101, "Laptop", 10, 65000);
        Product p2 = new Product(102, "Mouse", 40, 500);
        Product p3 = new Product(103, "Keyboard", 30, 1000);

        manager.addProduct(p1);
        manager.addProduct(p2);
        manager.addProduct(p3);

        System.out.println("Initial Inventory:");
        manager.displayInventory();

        manager.updateProduct(102, "Wireless Mouse", 60, 700);
        System.out.println("\nAfter Update:");
        manager.displayInventory();

        manager.deleteProduct(103);
        System.out.println("\nAfter Deletion:");
        manager.displayInventory();
    }
}
