import { Link, useNavigate, useParams } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import image from "./Asus.jpg";
import { useEffect, useState } from "react";

function ProductDetails() {

  const { id } = useParams()
  const navigate = useNavigate();
  
  // prducts ======> 
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then(data => data.json())
      .then(data => setProduct(data))
  }, [])
  // categories ======>
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/categories`)
      .then(data => data.json())
      .then(data => setCategories(data))
  }, [])

  
  return (
    <div
      className="row justify-content-center w-auto"
      style={{ Color: "#F5F5F5", marginTop: "75px", width: "100%" }}>
      <div className="row">
        <div className="col-10"></div>
        <div className="col-2">
          <Link to="/CatégorieEdit" className="text-dark text-decoration-none">
            <BiEdit className="text-dark " />
            modifier
          </Link>
          <Link className="text-dark text-decoration-none">
            <MdDelete className="text-danger" />
            surprimer
          </Link>
        </div>
      </div>

      <div className="col-12 row border w-5" style={{ height: "80%", width: "100%" }}>
        <div className="col-3 row w-5">
        <img src={`http://localhost:5000${product.thumbnail}`} alt={`img${product.id}`} width="100" />
        </div>
        <div className="col-9 row w-5">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <div className="col-9 row mb-5">
            <div className="col-4">
              <h6>Prix</h6>
              <h5>{product.price} MAD</h5>
            </div>
            <div className="col-4">
              <h6>Stock</h6>
              <h5>{product.stock} unités</h5>
            </div>
            <div className="col-4">
              <h6>Catégorie</h6>
              <h5>
                <Link to="/CatégorieDetails" className="text-decoration-none">
                  {
                    categories.map(c => (
                      c.id == product.categoryId ? c.title : null
                    ))
                  }
                </Link>
              </h5>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ProductDetails;
