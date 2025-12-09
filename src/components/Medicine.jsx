import { useState } from "react";

const Medicine = () => {
  const [search, setSearch] = useState("");

  const [medicines, setMedicines] = useState([
    { name: "Paracetamol 500mg", price: 20, qty: 120, rack: "A1" },
    { name: "Amoxicillin 250mg", price: 85, qty: 60, rack: "A2" },
    { name: "Cetirizine", price: 10, qty: 100, rack: "B1" },
    { name: "Vitamin C Tablets", price: 50, qty: 40, rack: "B3" },
    { name: "Azithromycin", price: 120, qty: 30, rack: "C1" },
    { name: "Ibuprofen", price: 40, qty: 75, rack: "C2" },
    { name: "Cough Syrup", price: 95, qty: 25, rack: "D1" },
    { name: "ORS Powder", price: 15, qty: 200, rack: "D3" },
  ]);

  const [form, setForm] = useState({
    name: "",
    price: "",
    qty: "",
    rack: "",
  });

  const addMedicine = () => {
    if (!form.name || !form.price) return;
    setMedicines([...medicines, {
      ...form,
      qty: Number(form.qty),
      price: Number(form.price),
    }]);
    setForm({ name: "", price: "", qty: "", rack: "" });
  };

  const filtered = medicines.filter(m =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <h2>Medicine Stock</h2>

      
      <input
        className="search"
        placeholder="Search medicine name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      
      <div className="form">
        <input placeholder="Medicine Name"
          value={form.name}
          onChange={(e) => setForm({...form, name: e.target.value})}
        />
        <input placeholder="Price (₹)"
          value={form.price}
          onChange={(e) => setForm({...form, price: e.target.value})}
        />
        <input placeholder="Quantity"
          value={form.qty}
          onChange={(e) => setForm({...form, qty: e.target.value})}
        />
        <input placeholder="Rack No"
          value={form.rack}
          onChange={(e) => setForm({...form, rack: e.target.value})}
        />
        <button onClick={addMedicine}>Add Medicine</button>
      </div>

     
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Medicine</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Rack</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((m, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{m.name}</td>
              <td>₹{m.price}</td>
              <td>{m.qty}</td>
              <td>{m.rack}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Medicine;
