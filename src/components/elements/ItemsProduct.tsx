import { useState } from "react";
import { GroceryItemsProps } from "../../features/product/GroceryItems";

type GroceryItemProductProps = {
    items: GroceryItemsProps[];
    onDeleteItem: (id: number) => void;
    onToggleItem: (id: number) => void;
};

const ProductItems = ({ items, onDeleteItem, onToggleItem }: GroceryItemProductProps) => {
    const [sortBy, setSortBy] = useState('input');

    let sortedItems = items;
    if (sortBy === 'name') {
        sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'checked') {
        sortedItems = items.slice().sort((a, b) => Number(b.checked) - Number(a.checked));
    }

    return (
        <div>
            <div className="list">
                <ul>
                    {sortedItems.map((item) => (
                        <li key={item.id}>
                            <input onChange={() => onToggleItem(item.id)} type="checkbox" checked={item.checked} />
                            <span style={item.checked ? { textDecoration: "line-through" } : {}}>
                                {item.quantity} {item.name}
                            </span>
                            <button onClick={() => onDeleteItem(item.id)}>&times;</button>
                        </li>
                    ))}
                </ul>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">Urutkan berdasarkan urutan input</option>
                    <option value="name">Urutkan berdasarkan nama barang</option>
                    <option value="checked">Urutkan berdasarkan ceklis</option>
                </select>
            </div>
        </div>
    );
};

export default ProductItems;
