import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3006/product/showProduct")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  });

  const deleteProduct = (id) => {
    axios
      .delete(`http://localhost:3006/product/deleteProduct/${id}`)
      .then((res) => navigate("/admin/products"))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <NavLink
        className="btn btn-primary mx-3 my-3  "
        role="button"
        to="add"
        style={styles.addButton}
      >
        Add Product
      </NavLink>

      <div className="table-responsive m-3" style={styles.tableResponsive}>
        <table className="table table-striped table-hover" style={styles.table}>
          <thead style={styles.thead}>
            <tr>
              <th scope="col" style={styles.th}>
                Product Name
              </th>
              <th scope="col" style={styles.th}>
                Price
              </th>
              <th scope="col" style={styles.th}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} style={styles.tr}>
                <td scope="row" style={styles.td}>
                  {product.name}
                </td>
                <td style={styles.td}>₹{product.price}</td>
                <td style={styles.td}>
                  <NavLink
                    className="btn btn-sm"
                    to={`edit/${product._id}`}
                    role="button"
                    style={styles.editButton}
                  >
                    Edit
                  </NavLink>
                  <button
                    type="button"
                    className="btn btn-sm"
                    onClick={() => deleteProduct(product._id)}
                    style={styles.deleteButton}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

const styles = {
  
  addButton: {
    marginBottom: "20px",
    marginLeft: "20px",
  },
  tableResponsive: {
    margin: "0 20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    overflow: "hidden",
  },
  table: {
    backgroundColor: "#fff",
    marginBottom: "0",
    borderRadius: "8px",
  },
  thead: {
    backgroundColor: "#007bff",
    color: "#fff",
  },
  th: {
    padding: "12px 15px",
    textAlign: "left",
    borderBottom: "1px solid #dee2e6",
  },
  tr: {
    "&:nth-child(even)": {
      backgroundColor: "#f8f9fa",
    },
  },
  td: {
    padding: "12px 15px",
    textAlign: "left",
    borderBottom: "1px solid #dee2e6",
  },
  editButton: {
    marginRight: "5px",
    color: "white",
    backgroundColor: "rgba(34, 187, 214, 0.89)",
  },
  deleteButton: {
    marginLeft: "5px",
    color: "white",
    backgroundColor: "rgba(255, 0, 0, 0.87)",
  },
};

export default Products;
