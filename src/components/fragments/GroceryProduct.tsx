import { useState } from "react";
import ProductItems from "../elements/ItemsProduct";
import groceryItems from "../../features/product/GroceryItems";
export default function GroceryProduct() {
    
    return (
        <div>
            <div className="list">
                <ProductItems/>
            </div>
            <div className="actions">
                <select>
                    <option value="input">Urutkan berdasarkan urutan input</option>
                    <option value="name">Urutkan berdasarkan nama barang</option>
                    <option value="checked">Urutkan berdasarkan ceklis</option>
                </select>
                <button>Bersihkan Daftar</button>
            </div>
        </div>
    )
}


