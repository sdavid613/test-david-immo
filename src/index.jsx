import ReactDOM from "react-dom/client";
import React, { useState } from 'react'
import './index.css'
import InputRange from "./components/inputRange/inputRange";
import { Donut } from "./components/donut";



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

    CalculMensualite(montant,apport,taux,annee) ; 
  
    const handleChangeMontant = function (e) {
        e.preventDefault()
        value = parseInt(e.target.value)
        if (!isNaN(value))
        {
            setMontant(value)
            setApport(0)
        }    
    }    

    const labelButtonApport =  apport + " € - " + Math.round(apport  * 100/montant) + " % prix"
    const labelButtonAnnee = "Durée " + annee + " ans"
    const labelButtonTaux = taux + "%"

    
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
            <InputRange   
                inputName={apport} 
                label = "Montant de l'apport" 
                min = "0" 
                max = {montant} 
                step="1000"
                functionHandle = {handleChangeApport} 
                labelButton = {labelButtonApport}  /> 
        </div>
      </div>

      <div className="row align-items-center">
        <div className="col-md-6 order-md-2 mb-6">
            <Donut />
        </div>
        <div className="col-md-6 order-md-2 mb-6 ">
        <InputRange 
            inputName={annee} 
            label = "Durée de" 
            min = "2" 
            max = "30" 
            step= "1"
            functionHandle = {handleChangeAnnee} 
            labelButton = {labelButtonAnnee}  /> 
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
             <InputRange 
                inputName={taux} 
                label = "Taux d'intérêt" 
                min = "0.01" 
                max = "5" 
                step="0.01"
                functionHandle = {handleChangeTaux} 
                labelButton = {labelButtonTaux}  /> 
        </div>
      </div>

         
    </div>
}



const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
    <div><App/></div>
);

