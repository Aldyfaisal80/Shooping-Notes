import { useState } from "react";

export default function Form() {

    const [name, setName] = useState<string>("");
    const [quantity, setQuantity] = useState<number>(1);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (!name) return;

        const newItem = {
            name: name,
            quantity: quantity,
            checked: false,
            id: Date.now(),
        };

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
                    <select
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                    >
                        {quantityNum}
                    </select>
                    <input
                        type="text"
                        placeholder="nama barang..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <button type="submit">Tambah</button>
            </form>
        </>
    );
}
