import ProductItems from "../elements/ItemsProduct";
export default function GroceryItemProduct() {
    return (
        <div>
            <div className="list">
                <ProductItems {...{children: null}}/>
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


