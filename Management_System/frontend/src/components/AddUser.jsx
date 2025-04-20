import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    position: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3006/user/addUser", user)
      .then(() => {
        navigate("/admin/users");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container mt-5" style={styles.container}>
      <h2 className="text-center mb-4" style={styles.heading}>
        Add User
      </h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-lg border-0" style={styles.card}>
              <div className="card-body p-5" style={styles.cardBody}>
                <div className="mb-4" style={styles.formGroup}>
                  <label
                    htmlFor="name"
                    className="form-label fw-bold"
                    style={styles.label}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="name"
                    name="name"
                    value={user.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter UserName"
                    style={styles.input}
                  />
                </div>

                <div className="mb-4" style={styles.formGroup}>
                  <label
                    htmlFor="email"
                    className="form-label fw-bold"
                    style={styles.label}
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter Email"
                    style={styles.input}
                  />
                </div>

                <div className="mb-4" style={styles.formGroup}>
                  <label
                    htmlFor="position"
                    className="form-label fw-bold"
                    style={styles.label}
                  >
                    Position
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="position"
                    name="position"
                    value={user.position}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter Job Role of User"
                    style={styles.input}
                  />
                </div>

                <div className="d-grid gap-2 mt-4">
                  <button
                    type="submit"
                    className="btn"
                    style={styles.submitButton}
                  >
                    Add
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
    padding: "8px",
    borderRadius: "10px",
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

export default AddUser;
