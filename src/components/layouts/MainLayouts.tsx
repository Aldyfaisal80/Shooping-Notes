import Footer from "../fragments/Footer";
import Form from "../fragments/Form";
import GroceryItemProduct from "../fragments/GroceryProduct";
import Header from "../fragments/Header";
import groceryItems, { GroceryItemsProps } from "../../features/product/GroceryItems";
import { useState } from "react";
export default function MainLayouts() {
    const [items , setItems] = useState(groceryItems);
    
    function HandleAddItem(item: GroceryItemsProps) {
        setItems([...items, item]);
    }
    return (
        <>
            <Header />
            <Form onAddItem={HandleAddItem}/>
            <GroceryItemProduct items={items}/>
            <Footer />
        </>
    )
}
