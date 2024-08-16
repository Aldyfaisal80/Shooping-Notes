import { GroceryItemsProps } from "../../features/product/GroceryItems";
import { useState } from "react";
type GroceryItemProductProps = {
    items: GroceryItemsProps[];
    onDeleteItem: (id: number) => void;
    onToggleItem: (id: number) => void;
    onClearItem: () => void;
};
export default function GroceryProduct({ items, onDeleteItem, onToggleItem, onClearItem }: GroceryItemProductProps) {
    const [sortBy, setSortBy] = useState('input');

    let sortedItems;

    switch (sortBy) {
        case 'name':
            sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
            break;

        case 'checked':
            sortedItems = items.slice().sort((a, b) => b.checked - a.checked);
            break;
        default:
            sortedItems = items;
    }

    return (
        <div>
                {/* <ProductItems/> */}
            <div className="list">
                <ul>
                    {sortedItems.map((item) => (
                        <li key={item.id}>
                            <input onChange={() => onToggleItem(item.id)} type="checkbox" checked={item.checked} readOnly />
                            <span style={item.checked ? { textDecoration: "line-through" } : {}}>
                                {item.quantity} {item.name}
                            </span>
                            <button onClick={() => onDeleteItem(item.id)}>&times;</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="actions">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">Urutkan berdasarkan urutan input</option>
                    <option value="name">Urutkan berdasarkan nama barang</option>
                    <option value="checked">Urutkan berdasarkan ceklis</option>
                </select>
                <button onClick={onClearItem}>Bersihkan Daftar</button>
            </div>
        </div>
    )
}


