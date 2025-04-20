import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    name: '',
    price: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3006/product/showOneProduct/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const editProduct = () => {
    axios
      .patch(`http://localhost:3006/product/updateProduct/${id}`, product)
      .then((res) => navigate("/admin/products"))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div class="container">
        <div class="row justify-content-center align-items-center g-2">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    name="formId1"
                    id="formId1"
                    placeholder=""
                    value={product.name}
                    onChange={(e) =>
                      setProduct({ ...product, name: e.target.value })
                    }
                  />
                  <label for="formId1">Product Name</label>
                </div>

                <div class="form-floating mb-3">
                  <input
                    type="number"
                    class="form-control"
                    name="formId1"
                    id="formId1"
                    placeholder=""
                    value={product.price}
                    onChange={(e) =>
                      setProduct({ ...product, price: e.target.value })
                    }
                  />
                  <label for="formId1">Price</label>
                </div>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => editProduct()}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
