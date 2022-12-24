import ReactDOM from "react-dom/client";
import React, { useState } from 'react'
import './index.css'



function CalculMensualite(montant,apport,taux,annee){
    capital = montant -apport
    duree = (12 * annee)
    mensualite = (capital*(taux/100/12))/(1-(Math.pow(1+(taux/100/12),- duree)))
    interet = (((mensualite * duree ) - capital) / duree) 
    mensualite = Math.round(mensualite * 100.0) / 100
    interet = Math.round(interet * 100.0) / 100
}




 function App(){
    const [montant, setMontant] = useState(100000);
    const [apport, setApport] = useState(20000);
    const [taux, setTaux] = useState(1.65);
    const [annee, setAnnee] = useState(25);

    const calcul = CalculMensualite(montant,apport,taux,annee) ; 
  
    const handleChangeMontant = function (e) {
        e.preventDefault()
        value = parseInt(e.target.value)
        if (!isNaN(value))
        {
            setMontant(value)
            setApport(0)
        }    
    }    

    const handleChangeApport = function (e) {
        e.preventDefault()
        setApport(e.target.value)
    }    

    const handleChangeTaux = function (e) {
        e.preventDefault()
        setTaux(e.target.value)
    }    

    const handleChangeAnnee = function (e) {
        e.preventDefault()
        setAnnee(e.target.value)
    }    

    return <div id="container" className="container">

    
      <div className="py-5 text-center">
        <h2>Calculez vos mensualités</h2>
        <p className="lead">Calculez rapidement le montant de vos mensualités de remboursement de votre investissement locatif. Vous retrouverez en détails le montant du remboursement dû à votre emprunt ainsi que le coût des intérêts.</p>
      </div>

      <div className="row">
        <div className="col-md-6 order-md-2 mb-6">
        <label htmlFor="montant" className="form-label">Montant du bien </label>
            <div className="input-group ">
            <span className="input-group-text" id="addon-wrapping">€</span>
            <input type="text" pattern="[0-9]*" id="montant" onChange={handleChangeMontant} value={montant}  name="montant" className="form-control" placeholder="Montant"  aria-describedby="addon-wrapping"/>
            </div>
        </div>
        <div className="col-md-6 order-md-2 mb-6">
            <label htmlFor="apport" className="form-label">Montant de l'apport</label>
            <input type="range" id="apport" name="apport"  min="0" max={montant} step="1000" onChange={handleChangeApport} className="form-range" value={apport}/>
            <div className="text-center"><button type="button" className="btn btn-light w-40" disabled>{apport} € - { Math.round(apport * 100/montant) }% prix </button></div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 order-md-2 mb-6">
             <img></img>
        </div>
        <div className="col-md-6 order-md-2 mb-6">
            <label htmlFor="annee" className="form-label">Durée de</label>
            <input type="range" id="annee" name="annee"  min="2" max="30" onChange={handleChangeAnnee} className="form-range"  value={annee}/>
            <div className="text-center"><button type="button" className="btn btn-light w-40" disabled>Durée {annee} ans</button></div>
        </div>
      </div>

      
      <div className="row">
        <div className="col-md-6 order-md-2 mb-6">
             <div className="card">
                <ul>
                    <li className="list-group-item">Mensualité : {mensualite} € / Mois</li>
                    <li className="list-group-item">Coût des intérêts : {interet} € / Mois</li>
                </ul>
            </div>
        </div>
        <div className="col-md-6 order-md-2 mb-6">
             <label htmlFor="taux" className="form-label">Taux d'intérêt</label>
             <input type="range" id="taux" name="taux"  min="0.01" max="5" step="0.01" onChange={handleChangeTaux} className="form-range"  value={taux}/>
             <div className="text-center "><button type="button" className="btn btn-light w-40" disabled>{taux}%</button></div>
        </div>
      </div>

         
    </div>
}



const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
    <div><App/></div>
);
