import { useEffect } from "react";
import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function ProductCreate() {

  const navigate = useNavigate()

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, [])

  const [file, setFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const [categoryId, setCategoryId] = useState("");
  const [descript, setDescript] = useState("");

  const fileChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]))
    setThumbnail(e.target.files[0])
  }

  const TitleChange = (e) => {
    setTitle(e.target.value);
  };

  const PriceChange = (e) => {
    setPrice(e.target.value);
  };

  const StockChange = (e) => {
    setStock(e.target.value);
  };

  const CategoryIdChange = (e) => {
    setCategoryId(e.target.value);
  };

  const DescriptChange = (e) => {
    setDescript(e.target.value);
  }

  const [img, setImg] = useState(null);
  useEffect(() => { 
    const formData = new FormData()
    formData.append('file', thumbnail)
    fetch("http://localhost:5000/files/upload", {
      method:"POST",
      body: formData,
    })
    .then(re => re.json())
    .then(data => setImg(data.file))
  }, [thumbnail])

  
  const create = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        price: Number(price),
        stock: Number(stock),
        categoryId: Number(categoryId),
        description: descript,
        thumbnail: `/files/download/${img}`
      })
    })
    navigate("/ProductList")
  }

  return (
    <div className="row m-5" id="creat">
      <h1 className="col-12"><BiEdit className="text-dark " />Nouveau Product</h1>

      <form onSubmit={create}>
        <div className="row m-4" style={{ width: "90%", height: "50%" }}>
          <div className="col-3">
            <img src={!file ? require("./Mac.jpg"): file} width={100} /><br />
            <input type='file' onChange={fileChange} />
            <label htmlfor="image"></label>
          </div>

          <div className="col-9 row">

            <div className="col-12">
              <label >Titre(*)</label>  <br />
              <input className="col-12 border-light shadow mb-4" value={title} onChange={TitleChange} type='text' placeholder="Saisir le titre du produit" />
            </div><br />

            <div className="col-6">
              <label className="" > Prix(*)</label><br />
              <input className="col-6 border-light shadow w-100  mb-4" type="number" value={price} onChange={PriceChange} placeholder="Saisir le prix" />
            </div>

            <div className="col-6">
              <label> Stock(*)</label><br />
              <input className="col-6 border-light shadow w-100  mb-4" value={stock} onChange={StockChange} type="number" placeholder="Saisir la quantité du stock" />
            </div><br />

            <div className="row">
              <label />Catégorie(*)<br />
              <select value={categoryId} onChange={CategoryIdChange}>
                {
                  categories.map(c => <option value={c.id}>{c.title}</option>)
                }
              </select>
            </div>

          </div>

        </div>

        <div className="col-11 p-4 row">
          <label htmlFor=""> Description</label> <br />
          <textarea className="col-12  border shadow" value={descript} onChange={DescriptChange} type="textarea" placeholder="Saisir la description" />
        </div>

        <div className="col-11 row mt-3 justify-content-end">
          <button className="col-1 text-light" type="submit" style={{ border: "none", backgroundColor: "rgb(1, 30, 36)", color: "rgb(248, 252, 252)", }}>Créer</button>
        </div>

      </form>

    </div>
  );
}

export default ProductCreate;

