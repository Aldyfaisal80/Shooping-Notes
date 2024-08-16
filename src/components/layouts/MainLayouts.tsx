import { useState } from 'react';
import Footer from "../fragments/Footer";
import Form from "../fragments/Form";
import GroceryItemProduct from "../fragments/GroceryProduct";
import Header from "../fragments/Header";
import groceryItems, { GroceryItemsProps } from "../../features/product/GroceryItems";

export default function MainLayouts() {
    const [items, setItems] = useState<GroceryItemsProps[]>(groceryItems);

    function HandleAddItem(item: GroceryItemsProps) {
        setItems([...items, item]);
    }

    function HandleDeleteItem(id: number) {
        setItems((items) => items.filter((item) => item.id !== id));
    }

    function HandleCheckedItem(id: number) {
        setItems((items) => items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)));
    }

    function HandleClearItem() {
        setItems([]);
    }

    return (
        <>
            <Header />
            <Form onAddItem={HandleAddItem} />
            <GroceryItemProduct items={items} onDeleteItem={HandleDeleteItem} onToggleItem={HandleCheckedItem} onClearItem={HandleClearItem}/> 
            <Footer items={items} />
        </>
    );
}
