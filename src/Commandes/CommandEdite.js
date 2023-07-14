import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

function CommandEdite() {
    return ( 
        <div style={{ marginLeft: "5px" }}>

            <h1 className="col-12" style={{ marginTop: "-25px" }}>Commande :#123</h1>
            
            <div className="col-12 row shadow ml-3 mb-3" style={{marginLeft:"5px",width:"90%"}}>

                <div className="col-6">
                    <label htmlFor="title">Nom Client (*)</label><br/>
                    <input className="col-6 border-light shadow w-75  mb-4" type='text' value='Mohamed Alami'/>
                </div><br />

                <div className="col-6">
                    <label htmlFor="number">Téléphone (*)</label>  <br/>
                    <input className="col-6 border-light shadow w-75  mb-4" type='number' value="+21260101010"/>
                </div><br/>

                <div className="col-12">
                    <label htmlFor="number">Adresse Livraison (*)</label>  <br/>
                    <input className="col-6 border-light shadow w-75  mb-4" type='text' value="Avenu 1,N 1 Casablanka"/>
                </div><br/>

            </div>
            
            <div className="col-12 row border-light shadow ml-3" style={{marginLeft:"5px",width:"90%"}}>
                <h3>Produits</h3>

               <div className="row mb-4">
                    <div className="col-4">
                        <label htmlFor="title">Produit (*)</label><br/>
                        <select placeholder="PC ASUS 1" className="col-4 border-light shadow" style={{width:"90%"}}></select>
                    </div><br />

                    <div className="col-4">
                        <label htmlFor="title">Quantité (*)</label><br/>
                        <input placeholder="PC ASUS 1" className="col-4 border-light shadow" style={{width:"90%"}}/>
                    </div><br />

                    <div className="col-4 mt-4">
                        <Link className="text-dark text-decoration-none"><MdDelete className="text-danger" />surprimer</Link>
                    </div>
               </div>

               <div className="row mb-4">
                    <div className="col-4">
                        <label htmlFor="title">Produit (*)</label><br/>
                        <select placeholder="PC ASUS 1" style={{width:"90%"}} className="col-4 border-light shadow"></select>
                    </div><br />

                    <div className="col-4">
                        <label htmlFor="title">Quantité (*)</label><br/>
                        <input placeholder="PC ASUS 1" style={{width:"90%"}} className="col-4 border-light shadow"/>
                    </div><br />

                    <div className="col-4 mt-4">
                        <Link className="text-dark text-decoration-none"><MdDelete className="text-danger" />surprimer</Link>
                    </div>
               </div>

               <div className="row mb-4">
                    <div className="col-4">
                        <label htmlFor="title">Produit (*)</label><br/>
                        <select placeholder="Choisir une catégorie" style={{width:"90%"}} className="col-4 border-light shadow"></select>
                    </div><br />

                    <div className="col-4">
                        <label htmlFor="title">Quantité (*)</label><br/>
                        <input placeholder="PC ASUS 1" style={{width:"90%"}} className="col-4 border-light shadow"/>
                    </div><br />

                    <div className="col-4 mt-4">
                        <button className="text-dark border none w-25">Ajouter</button>
                    </div>
               </div>

            </div>

            <div className="row mt-3 justify-content-end border-light shadow ml-3" style={{marginLeft:"10px",marginRight:"110px"}}>
                <button className="col-2 text-light mt-3 mb-3 " style={{border: "none",backgroundColor: "rgb(1, 30, 36)",color: "rgb(248, 252, 252)",marginRight:"20px"}}>Sauvegarder</button>
            </div>

        </div>
     );
}

export default CommandEdite;