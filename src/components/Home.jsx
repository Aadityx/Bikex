import { useState } from "react";

const initialProducts = [
  { id: 1, name: "Product 1", price: 100, image: "https://via.placeholder.com/180" },
  { id: 2, name: "Product 2", price: 150, image: "https://via.placeholder.com/180" }
];

const Admin = () => {
  const [products, setProducts] = useState(initialProducts);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImageFile(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const addProduct = (e) => {
    e.preventDefault();
    const newProduct = { id: Date.now(), name, price: Number(price), image: imageFile };
    setProducts([...products, newProduct]);
    setName("");
    setPrice("");
    setImageFile(null);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div>
      <h2>Admin Panel</h2>

      {/* Form */}
      <form onSubmit={addProduct}>
        <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input placeholder="Price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <input type="file" onChange={handleFileChange} required />
        {imageFile && <img src={imageFile} alt="Preview" style={{ width: "100%", margin: "10px 0" }} />}
        <button type="submit">Add Product</button>
      </form>

      {/* Product Cards */}
      <div className="admin-product-list-cards">
        {products.map((p) => (
          <div className="admin-product-card" key={p.id}>
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <button onClick={() => deleteProduct(p.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
