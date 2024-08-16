import { GroceryItemsProps } from "../../features/product/GroceryItems";

type GroceryItemProductProps = {
    items: GroceryItemsProps[];
};

export default function Footer( {items}: GroceryItemProductProps) {
    if(items.length === 0) return <footer className="stats">Ada 0 barang di daftar belanjaan</footer>
    const totalItems = items.length;
    const checkedItems = items.filter((item) => item.checked).length;
    const precentage = Math.round((checkedItems / totalItems) * 100);
    return (
        <div>
            <footer className="stats">Ada {totalItems} barang di daftar belanjaan, {checkedItems} barang sudah dibeli ({precentage}%)</footer>
        </div>
    )
}
