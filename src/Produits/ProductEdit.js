import { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";


function ProductEdit() {

  const { id } = useParams()
  const navigate = useNavigate()

  const [file, setFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [idP, setIdP] = useState("");
  const [descript, setDescript] = useState("");

  const fileChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]))
    setThumbnail(e.target.files[0])
  }

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  }
  const onPriceChange = (e) => {
    setPrice(e.target.value);
  }
  const onStockChange = (e) => {
    setStock(e.target.value);
  }
  const onCategoryIdChange = (e) => {
    setIdP(e.target.value);
  }
  const onDescriptChange = (e) => {
    setDescript(e.target.value)
  }

  const [catgories, setCategories] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/categories')
      .then(re => re.json())
      .then(data => setCategories(data))
  }, [])

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setTitle(data.title)
        setPrice(data.price)
        setStock(data.stock)
        setIdP(data.categoryId)
        setDescript(data.description)
        setFile(data.thumbnail)
      })
  }, [])

  const [img, setImg] = useState(null);

  useEffect(() => {
    const formData = new FormData()
    formData.append('file', thumbnail)
    fetch("http://localhost:5000/files/upload", {
      method: "POST",
      body: formData,
    })
      .then(re => re.json())
      .then(data => setImg(data.file))
  }, [thumbnail])

  const edit = () => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        price,
        stock,
        categoryId: idP,
        description: descript,
        thumbnail: `/files/download/${img}`
      })
    })
    navigate("/ProductList")
  }

  return (
    <div className="row m-5">
      <h1 className="col-12"><BiEdit className="text-dark " />Nouveau Product</h1>

      <form onSubmit={edit}>
        <div className="row m-4">
          <div className="col-3">
            <img src={ !thumbnail ? `http://localhost:5000${file}`: file }
              width={220}
              height={200}
            /><br />
            <input type='file' onChange={fileChange} />
            <label htmlfor="image"></label>
          </div>

          <div className="col-9 row">

            <div className="col-12">
              <label htmlFor="title">Titre(*)</label>  <br />
              <input className="col-12 border-light shadow mb-4" value={title} onChange={onTitleChange} type='text' placeholder="Saisir le titre du produit" />
            </div><br />

            <div className="col-6">
              <label className="" > Prix(*)</label><br />
              <input className="col-6 border-light shadow w-100  mb-4" type="number" value={price} onChange={onPriceChange} placeholder="Saisir le prix" />
            </div>

            <div className="col-6">
              <label> Stock(*)</label><br />
              <input className="col-6 border-light shadow w-100  mb-4" value={stock} onChange={onStockChange} type="number" placeholder="Saisir la quantité du stock" />
            </div><br />

            <div className="col-12">
              <label />Catégorie(*)<br />
              <select value={idP} onChange={onCategoryIdChange}>
                {
                  catgories.map(c => <option value={c.id}>{c.title}</option>)
                }
              </select>
            </div>

          </div>

        </div>

        <div className="col-11 p-4 row">
          <label /> Description <br />
          <textarea className="col-12  border shadow" value={descript} onChange={onDescriptChange} type="textarea" placeholder="Saisir la description" />
        </div>

        <div className="col-11 row mt-3 justify-content-end">
          <button className="col-1 text-light" type="submit" style={{ border: "none", backgroundColor: "rgb(1, 30, 36)", color: "rgb(248, 252, 252)", }}>Créer</button>
        </div>

      </form>

    </div>
  );
}

export default ProductEdit;
