import { useState } from "react";

export default function Form() {
    
    const [name , setName] = useState<string>("");

    const handleSubmit = (e) => {
        console.log(name);
    }
    
    const quantityNum = [...Array(5)].map((_, i) => (
        <option value={i + 1} key={i + 1}>
            {i + 1}
        </option>
    ));

    return (
        <>
            <form className="add-form" onSubmit={handleSubmit}>
                <h3>Hari ini belanja apa kita?</h3>
                <div>
                    <select>
                        {quantityNum}
                    </select>
                    <input type="text" placeholder="nama barang..." />
                </div>
                <button>Tambah</button>
            </form>
        </>
    );
}
