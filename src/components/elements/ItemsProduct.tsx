import groceryItems from "../../features/product/GroceryItems";

type GroceryItem = {
    id: number;
    name: string;
    quantity: number;
    checked: boolean;
};

type ProductItemsProps = {
    items?: GroceryItem[];
};

const ProductItems = ({ items = groceryItems }: ProductItemsProps) => {
    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    <input type="checkbox" checked={item.checked} readOnly />
                    <span style={item.checked ? { textDecoration: "line-through" } : {}}>
                        {item.quantity} {item.name}
                    </span>
                    <button>&times;</button>
                </li>
            ))}
        </ul>
    );
};

export default ProductItems;
