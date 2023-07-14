import { Link} from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";

function CatégorieList() {

  const [catégorie, setcatégorie] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);
  // function for red the categore:
  function getUsers(){
    fetch(" http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setcatégorie(data));
  }
  // function for delet categors:
  function deletUser(id)
  {
    fetch(`http://localhost:5000/categories/${id}`,{
      method:'DELETE'
    }).then((res)=>res.json())
      .then((catégorie)=>{
      console.warn(catégorie)
      getUsers()
    })
  }

  return (
    <div className="" style={{Color:"#F5F5F5",height:"100%",marginTop:"20%"}}>
      <div className="row ">
        <h1 className="col-8 mx-3">Catégories des Produits</h1>
        <Link to={`/CatégorieCreat`} className="col-3 justify-content-end">
          <button className="w-75" style={{ border: "none", backgroundColor: "rgb(1, 30, 36)", color: "rgb(248, 252, 252)",}}> Nouvelle Catégorie</button>
        </Link>
      </div>
      <div className="col-12 border p-4 w-auto" >
        <table className="table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Couler</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {catégorie.map((c) => (
              <tr>
                <td><Link style={{ textDecoration: "none",color:"rgb(1, 30, 36)"}} to={`/CatégorieDetails/${c.id}`}>{c.title}</Link></td>
                <td><input type="color" value={c.color} /></td>
                <td>{<Link to={`/CatégorieEdit/${c.id}`} className="text-dark text-decoration-none"><BiEdit className="text-dark"/>modifier</Link>}</td>
                <td>{<button className="text-dark" onClick={()=>deletUser(c.id)} style={{border:"none",backgroundColor:"white" ,color:"rgb(1, 30, 36)"}}><MdDelete className="text-danger" />surprimer</button>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CatégorieList;
