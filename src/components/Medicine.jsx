import { useState } from "react";

const Medicine = () => {

  const [medicines, setMedicines] = useState([
    { name: "Paracetamol 500mg", price: 20, qty: 120, rack: "A1" },
    { name: "DOLO 250mg", price: 85, qty: 60, rack: "A2" },
    { name: "ORS", price: 10, qty: 100, rack: "B1" },
  ]);

  const [form, setForm] = useState({
    name: "",
    price: "",
    qty: "",
    rack: "",
  });


  const addMedicine = () => {
    setMedicines([
      ...medicines,
      {
        name: form.name,
        price: Number(form.price),
        qty: Number(form.qty),
        rack: form.rack,
      },
    ]);

    setForm({ name: "", price: "", qty: "", rack: "" });
  };

  return (
    <div className="page">
      <h2>Add Medicine</h2>

      <div className="form">
        <input
          placeholder="Medicine Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Price (₹)"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <input
          placeholder="Quantity"
          value={form.qty}
          onChange={(e) => setForm({ ...form, qty: e.target.value })}
        />
        <input
          placeholder="Rack No"
          value={form.rack}
          onChange={(e) => setForm({ ...form, rack: e.target.value })}
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
          {medicines.map((m, i) => (
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
