import Footer from "../fragments/Footer";
import Form from "../fragments/Form";
import GroceryItemProduct from "../fragments/GroceryProduct";
import Header from "../fragments/Header";

export default function MainLayouts() {
    return (
        <>
            <Header />
            <Form />
            <GroceryItemProduct items={groceryItems} />
            <Footer />
        </>
    )
}
