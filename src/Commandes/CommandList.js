import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";
import { MdOutlineGppGood } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { GiSandsOfTime } from "react-icons/gi";

function CommandList() {
  const [order, setOrder] = useState([]);

  const [produit, setProduit] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((re) => re.json())
      .then((data) => setProduit(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);
  const remove = (id, title) => {
    fetch(`http://localhost:5000/orders/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((res) => {
        alert(title);
        window.location.reload();
      });
  };
  let prix = [];

  return (
    <div>
      <div className="row " style={{  }}>
        <h1 className="col-8 mx-3">Liste de Commandes</h1>
        <Link to="/CommandCreate" className="col-3 justify-content-end">
          <button
            className="w-75"
            style={{
              border: "none",
              backgroundColor: "rgb(1, 30, 36)",
              color: "rgb(248, 252, 252)",
            }}
          >
            Nouvelle Commande
          </button>
        </Link>
      </div>

      <div className="col-12 border p-4 m-3 w-auto" style={{ height: "60%" }}>
        <table className="table">
          <thead>
            <tr>
              <th>Numéro</th>
              <th>Numbre Produits</th>
              <th>Prix Total</th>
              <th>Statut</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {order.map((C) => {
              return (
                <tr key={C.id}>
                  <td className="text-center">{C.id}</td>
                  <td>
                    <Link
                      id="file"
                      className="text-decoration-none"
                      to={`/Command/Details/${C.id}`}
                    >
                      {C.products.length} Produits
                    </Link>
                  </td>
                  <td>
                    {C.products.map((T) => {
                      produit.map((P) =>
                        P.id == T.productId
                          ? prix.push(P.price * T.quantity)
                          : null
                      );
                      if (prix.length == C.products.length) {
                        let price = prix.reduce((a, b) => a + b, 0);
                        prix = [];
                        return price;
                      }
                    })}
                    MAD
                  </td>
                  {C.is_shipped === true ? (
                    <td className="text-success">
                      <MdOutlineGppGood />
                      Traitée
                    </td>
                  ) : C.is_shipped === false ? (
                    <td className="text-success">
                      <GiSandsOfTime />
                      En attente
                    </td>
                  ) : (
                    <td className="text-danger">
                      <TiDeleteOutline />
                      Annulee
                    </td>
                  )}
                  <td>
                    <Button variant="contained">
                      <Link
                        className="text-warning"
                        to={`/Command/Edit/${C.id}`}
                      >
                        <AiFillEdit />
                        Modifier
                      </Link>
                    </Button>
                    <Button
                      variant="outlined"
                      className="text-danger"
                      onClick={remove}
                    >
                      <RiDeleteBin2Fill />
                      Supprimer
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CommandList;
