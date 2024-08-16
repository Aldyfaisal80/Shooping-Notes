// import  GroceryItemsProps  from "../../features/product/GroceryItems";
import { useState } from "react";
import ItemsProductsBadge from "../elements/ItemsProductBadge";
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
            <ItemsProductsBadge>
                <ItemsProductsBadge.ProductItems
                    items={sortedItems}
                    onDeleteItem={onDeleteItem}
                    onToggleItem={onToggleItem}
                />
                <ItemsProductsBadge.ItemsActions
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                    onClearItem={onClearItem}
                />
            </ItemsProductsBadge>
        </div>
    )
}


