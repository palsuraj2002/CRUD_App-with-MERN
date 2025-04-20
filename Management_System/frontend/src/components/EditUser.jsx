import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    position: "",
  });
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3006/user/getOneUser/${id}`)
      .then((result) => {
        setUser(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser(() => ({
      ...user,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:3006/user/updateUser/${id}`, user)
      .then((res) => {
        navigate("/admin/users");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container mt-5" >
      <h2 className="text-center mb-4 text-primary">Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="row justify-content-center" >
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-lg border-0">
              <div className="card-body p-5">
                {/* Name Input */}
                <div className="mb-4">
                  <label htmlFor="productName" className="form-label fw-bold">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="productName"
                    name="name"
                    value={user.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter product name"
                  />
                </div>

                {/* Email Input */}
                <div className="mb-4">
                  <label htmlFor="email" className="form-label fw-bold">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter product email"
                  />
                </div>

                {/* Position Input */}
                <div className="mb-4">
                  <label htmlFor="position" className="form-label fw-bold">
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
                    placeholder="Enter product position"
                  />
                </div>

                {/* Save Changes Button */}
                <div className="d-grid gap-2 mt-4">
                  <button type="submit" className="btn btn-success btn-lg">
                    Save Changes
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

export default EditUser;
