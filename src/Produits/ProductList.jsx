import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";

function ProductList() {

  // Create, Read, Update, Delete

  
  // chargw products  Read:
  const [product, setproduct] = useState([]);
  useEffect(() => {
    fetch(" http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setproduct(data));
  }, []);

  // function for delet categors:
  function deletUser(id) {
    fetch(`http://localhost:5000/products/${id}`, {
      method: 'DELETE'
    }).then((res) => res.json())
      .then((product) => window.location.reload())
  }

  return (
    <div className="">
      <div className="row mt-5">
        <h1 className="col-9 mx-3 ">Liste de Produits</h1>
        <Link to="/ProductCreate" className="col-2 justify-content-end">
          <button style={{ border: "none", backgroundColor: "rgb(1, 30, 36)", color: "rgb(248, 252, 252)" }}> Nouveau Produit</button></Link>
      </div>

      <div className="col-12 border row  p-4 m-3 w-auto">
        <h3>Liste de Produits</h3>
        <table className="table">

          <thead>
            <tr>
              <th></th>
              <th>title</th>
              <th>price</th>
              <th>Stock</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {product.map((c) => (
              <tr key={c.id}>
                <td>
                  <img src={`http://localhost:5000${c.thumbnail}`} alt={`img${c.id}`} width="100" />
                </td>
                <td><Link style={{ textDecoration: "none", color: "rgb(1, 30, 36)" }} to={`/ProductDetails/${c.id}`}>{c.title}</Link></td>
                <td>{c.price}</td>
                <td>{c.stock}</td>
                <td>
                  <Link to={`/ProductEdit/${c.id}`} className="text-dark text-decoration-none">
                    <BiEdit className="text-dark" />
                    modifier
                  </Link>
                </td>
                <td>
                  <button className="text-dark" onClick={() => deletUser(c.id)} style={{ border: "none", backgroundColor: "white", color: "rgb(1, 30, 36)" }}>
                    <MdDelete className="text-danger" />
                    surprimer
                  </button>
                </td>
              </tr>

            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductList;
