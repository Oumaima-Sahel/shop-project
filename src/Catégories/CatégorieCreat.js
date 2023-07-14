import { useState } from "react";

function CatégorieCreat() {

  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");

  const ChangeTitle = (e) => {
    setTitle(e.target.value);
  }

  const ChangeColor = (e) => {
    setColor(e.target.value);
  }


  const create = (e)=>{
    e.preventDefault();
    fetch("http://localhost:5000/categories",{
    method: "POST",
    headers: {"Content-Type" : "application/json"},
    body: JSON.stringify({title,color})
  })
  }

  return (
   <div className="row pl-5" id="creat">
      <h1 className="col-12">Nouvelle Catégorie</h1>
      <form onSubmit={create} className="bg-light row w-75 mx-5 mt-5 mb-5 p-5">
        
        <div className="col-12 mt-5 mb-5">
          <label/>Nom <br/>
          <input placeholder="Saisir le nom de la catégorie" value={title} onChange={ChangeTitle} className="w-75 border-light" type='text'></input><br/>
        </div>

        <div className="col-12">
          <label />Couler<br/>
          <input type='color' value={color}  onChange={ChangeColor}></input><br/>
        </div>
        
        <div className="col-12 row justify-content-end">
          <button className="col-2 mb-4" type="submit"  style={{ border:"none",backgroundColor:'rgb(1, 30, 36)',color:"rgb(248, 252, 252)"}}>Créer</button>
        </div>
      </form>
      <hr/>
   </div>
  );
}

export default CatégorieCreat;
