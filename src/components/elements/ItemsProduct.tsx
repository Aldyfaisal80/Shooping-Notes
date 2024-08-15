import groceryItems from "../../features/product/GroceryItems"

const ProductItems = ({ children }: { children: React.ReactNode }) => {
    return (
        <ul>
            {groceryItems.map((item) => (
                <li key={item.id}>
                    <input type="checkbox" />
                    <span style={item.checked ? { textDecoration: "line-through" } : {}}>{item.quantity} {item.name}</span>
                    <button>&times;</button>
                </li>
            ))}
            {children}
        </ul>
    )
}

export default ProductItems