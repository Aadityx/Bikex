import { useState } from "react";

const Admin = ({ products, setProducts }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result);
    reader.readAsDataURL(file);
  };

  const addProduct = (e) => {
    e.preventDefault();
    setProducts([
      ...products,
      { id: Date.now(), name, price, image }
    ]);
    setName("");
    setPrice("");
    setImage(null);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className="page">
      <form className="admin-form" onSubmit={addProduct}>
        <h2>Add Product</h2>
        <input placeholder="Product name" value={name} onChange={e => setName(e.target.value)} required />
        <input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} required />
        <input type="file" onChange={handleImage} required />
        <button>Add</button>
      </form>

      <div className="card-grid">
        {products.map(p => (
          <div className="card" key={p.id}>
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <button className="delete" onClick={() => deleteProduct(p.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
