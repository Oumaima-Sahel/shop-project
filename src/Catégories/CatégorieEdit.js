import { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { useParams } from "react-router-dom";

function CatégorieCreat() {
  
  const { id } = useParams()

  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const onColorChange = (e) => {
    setColor(e.target.value);
  }

  useEffect(()=>{
    fetch(`http://localhost:5000/categories/${id}`)
    .then(res => res.json())
    .then(data => {
        setTitle(data.title)
        setColor(data.color)
      })
  },[])

  const edit = ()=>{
    fetch(`http://localhost:5000/categories/${id}`,{
    method: "PUT",
    headers: {"Content-Type" : "application/json"},
    body: JSON.stringify({title,color})
  })
  }

    return (
     <div className="row pl-5" id="creat">
        <h1 className="col-12 " style={{marginTop:"-75px"}}><BiEdit className="text-dark "/>Modifier Catégorie</h1>
        <form onSubmit={edit} className="bg-light row w-75 mx-5 mt-5 mb-5 p-5">
          
          <div className="col-12 mt-5 mb-5">
            <label/>title <br/>
            <input placeholder="title" value={title}  onChange={onTitleChange} className="w-75 border-light" type='text'></input><br/>
          </div>
  
          <div className="col-12">
            <label />Couler<br/>
            <input type='color' value={color} onChange={onColorChange} ></input><br/>
          </div>
          
          <div className="col-12 row justify-content-end">
            <button className="col-2 mb-4" type="submit" style={{border:"none",backgroundColor:'rgb(1, 30, 36)',color:"rgb(248, 252, 252)"}}>Créer</button>
          </div>
        </form>
        <hr />
     </div>
    );
  }
  
  export default CatégorieCreat;
  