import { Link, useParams } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";

function CatégorieCreat() {

    const { id } = useParams()
    
    // function for red the categore:
    const [categories, setcategories] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/categories/${id}`)
            .then((res) => res.json())
            .then((data) => setcategories(data));
    }, []);


    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);


    return (
        <div className="row justify-content-center w-auto" style={{ Color: "#F5F5F5", marginTop:"45px"}}>
            <div className="row">
                <div className="col-10">
                    <div> 
                        <input type="color" value={categories.color}/>
                        <h1 className="col-9" style={{ marginLeft: "90px",marginTop:"-40px"}}>Catégorie:{categories.title}</h1>
                    </div>
                </div>
                <div className="col-2">
                    <Link to='/CatégorieEdit' className="text-dark text-decoration-none"><BiEdit className="text-dark " />modifier</Link>
                    <Link className="text-dark text-decoration-none"><MdDelete className="text-danger" />surprimer</Link>
                </div>
            </div>
            <div className='col-12 border row w-5 mt-5' style={{ height: "80%", width: "100%" }}>
                <h3>Liste de Produits</h3>
                <table className='table mb-4'>
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Titre</th>
                            <th>Prix</th>
                            <th>Stock</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.map((c) => (
                            c.categoryId == id ?  
                            <tr>
                                <td><img src={`http://localhost:5000${c.thumbnail}`} width="100" /></td>
                                <td>{c.title}</td>
                                <td>{c.price}</td>
                                <td>{c.stock}</td>
                                <td><button className="text-dark" style={{ border: "none", backgroundColor: "white", color: "rgb(1, 30, 36)" }}><MdDelete className="text-danger" />surprimer</button></td>
                            </tr>
                            : null
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CatégorieCreat;
