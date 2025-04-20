import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [users, setUser] = useState([]);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    await axios
      .get("http://localhost:3006/user/getUsers")
      .then((result) => {
        setUser(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = (userId) => {
    axios
      .delete(`http://localhost:3006/user/deleteUser/${userId}`)
      .then(() => {
        fetchUsers();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = (userId) => {
    navigate(`edit/${userId}`);
  };

  return (
    <div className="container" style={styles.container}>
      <button
        style={styles.addButton}
        className="btn btn-primary mx-3 my-3"
        onClick={() => navigate("add")}
      >
        Add New User
      </button>

      <div className="table-responsive" style={styles.tableResponsive}>
        <div className="card shadow-sm" style={styles.card}>
          <div className="card-body" style={styles.cardBody}>
            <table
              className="table table-striped table-bordered table-hover"
              style={styles.table}
            >
              <thead className="table-dark text-white" style={styles.thead}>
                <tr>
                  <th scope="col" style={styles.th}>
                    ID
                  </th>
                  <th scope="col" style={styles.th}>
                    Name
                  </th>
                  <th scope="col" style={styles.th}>
                    Email
                  </th>
                  <th scope="col" style={styles.th}>
                    Job Role
                  </th>
                  <th scope="col" style={styles.th}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody style={styles.tbody}>
                {users.length === 0 ? (
                  <tr>
                    <td
                      colSpan="5"
                      className="text-center text-muted"
                      style={styles.emptyTable}
                    >
                      No users available.
                    </td>
                  </tr>
                ) : (
                  users.map((user, index) => (
                    <tr key={user._id} style={styles.tr}>
                      <th scope="row" style={styles.th}>
                        {index + 1}
                      </th>
                      <td style={styles.td}>{user.name}</td>
                      <td style={styles.td}>{user.email}</td>
                      <td style={styles.td}>{user.position}</td>
                      <td style={styles.actionsTd}>
                        {/* Action Buttons */}
                        <button
                          className="btn btn-warning btn-sm me-2"
                          onClick={() => handleEdit(user._id)}
                          title="Edit"
                          style={styles.editButton}
                        >
                           Edit
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(user._id)}
                          title="Delete"
                          style={styles.deleteButton}
                        >
                        Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  addButton: {
    color: "#fff",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    marginBottom: "20px",
    marginLeft: "20px",
  },

  tableResponsive: {
    overflowX: "auto",
  },
  card: {
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
    borderRadius: "8px",
    marginBottom: "20px",
    border: "1px solid #e0e0e0",
  },
  cardBody: {
    padding: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#fff",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
  },
  thead: {
    backgroundColor: "#343a40",
    color: "#fff",
  },
  th: {
    padding: "15px 20px",
    textAlign: "center",
    fontWeight: "bold",
    borderBottom: "2px solid #dee2e6",
  },
  tbody: {},
  tr: {
    transition: "background-color 0.3s ease",
    "&:nth-child(even)": {
      backgroundColor: "#f8f9fa", 
    },
    "&:hover": {
      backgroundColor: "#e9ecef",
    },
  },
  td: {
    padding: "15px 20px",
    textAlign: "left",
    borderBottom: "1px solid #eee",
  },
  actionsTd: {
    padding: "15px 20px",
    textAlign: "center",
  },
  editButton: {
    backgroundColor: "#ffc107", // Warning yellow
    color: "#212529",
    border: "none",
    padding: "10px 15px",
    borderRadius: "6px",
    marginRight: "8px",
    cursor: "pointer",
  
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#e0a800",
    },
  },
  deleteButton: {
    backgroundColor: "#dc3545", // Danger red
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "6px",
    marginLeft: "8px",
    cursor: "pointer",
    fontSize: "0.9rem",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#c82333",
    },
  },
  emptyTable: {
    padding: "20px",
    textAlign: "center",
    color: "#6c757d", // Muted gray
  },
};
export default Users;
