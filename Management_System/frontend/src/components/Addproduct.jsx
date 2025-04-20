import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3006/product/addProduct", product)
      .then(() => {
        navigate("/admin/products");
      })
      .catch((err) => {});
  };

  return (
    <div className="container mt-5" style={styles.container}>
      <h2 className="text-center mb-4" style={styles.heading}>
        Add New Product
      </h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div className="row mb-3 justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-sm" style={styles.card}>
              <div className="card-body" style={styles.cardBody}>
                <div className="mb-3" style={styles.formGroup}>
                  <label
                    htmlFor="productName"
                    className="form-label"
                    style={styles.label}
                  >
                    Product Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="productName"
                    name="name"
                    value={product.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter product name"
                    style={styles.input}
                  />
                </div>

                <div className="mb-3" style={styles.formGroup}>
                  <label
                    htmlFor="productPrice"
                    className="form-label"
                    style={styles.label}
                  >
                    Product Price (₹)
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="productPrice"
                    name="price"
                    value={product.price}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter product price"
                    style={styles.input}
                  />
                </div>

                <div className="d-flex justify-content-center mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary btn-sm"
                    style={styles.submitButton}
                  >
                    Add Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

const styles = {
  heading: {
    color: "rgba(0, 0, 0, 0.65)",
    fontWeight: "bold",
  },
  form: {
    maxWidth: "1000px",
    margin: "0 auto",
  },
  card: {
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
    borderRadius: "8px",
    border: "1px solid #e0e0e0",
    backgroundColor: "rgba(243, 255, 239, 0.49)",
  },
  cardBody: {
    padding: "25px",
  },
  formGroup: {
    marginBottom: "20px",
  },
  label: {
    fontWeight: "bold",
    color: "#333",
  },
  input: {
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ced4da",
  },
  submitButton: {
    backgroundColor: "rgb(246, 31, 156)",
    color: "#fff",
    padding: "15px 30px",
    borderRadius: "8px",
    border: "none",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
};
export default AddProduct;
