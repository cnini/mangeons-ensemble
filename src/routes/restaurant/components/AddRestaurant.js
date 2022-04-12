import React from "react";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore"; 
import db from '../../../db';

const AddRestaurant = () => {
  
  const restaurantsCollectionRef = collection(db, "restaurant")

  const [nom, setNom] = useState("")
  const [numero, setNumero] = useState("")
  const [localisation, setLocalisation] = useState("")
  const [type, setType] = useState("")
  const [modePaiements, setModePaiements] = useState([])
  const [options, setOptions] = useState([])

  // Création d'un document restaurant
  const createRestaurant = async () => {
    await addDoc(restaurantsCollectionRef, {
      nom: nom,
      numero: numero,
      localisation: localisation,
      type: type,
      modePaiements: modePaiements,
      options: options
    } )
  }

  // onChange: type de restaurant
  const handleType = type => {
    setType(type)
  }

  // onChange: mode paiement
  const handleModePaiement = mode => {
    if(modePaiements.indexOf(mode) == -1) {
      setModePaiements([...modePaiements, mode])
    } else {
      setModePaiements(modePaiements.filter(m => m !== mode))
    }
  }

  // onChange: option
  const handleOption = option => {
    if(options.indexOf(option) == -1) {
      setOptions([...options, option])
    } else {
      setOptions(options.filter(o => o !== option))
    }
  }


  return (
    <div className="#">
      <header className="#-header">
        <p>AddRestaurant formulaire</p>
        <form>
            <label><b>Nom du restaurant</b></label><br/>
            <input
              type="text"
              name="nom_restaurant"
              placeholder="Nom du restaurant"
              onChange={ e => {setNom(e.target.value)} }
            /><br/><br/>

            <label><b>N° de téléphone</b></label><br/>
            <input
              type="text"
              name="num_restaurant"
              placeholder="01 40 85 64 33"
              onChange={ e => {setNumero(e.target.value)} }
            /><br/><br/>

            <label><b>Localisation</b></label><br/>
            <input
              type="text"
              name="localisation_restaurant"
              onChange={ e => setLocalisation(e.target.value) }
            /><br/><br/>

            <label><b>Type de restaurant</b></label><br/>
            <input type="radio" name="type_restaurant" value="Restauration classique" onChange={e => handleType(e.target.value) } /> <label>Restauration classique</label>
            <input type="radio" name="type_restaurant" value="Restauration rapide" onChange={e => handleType(e.target.value) } /> <label>Restauration rapide</label><br/><br/>

            <label><b>Type de paiement accepté</b></label><br/>
            <input type="checkbox" name="paiement_restaurant" value="CB" onChange={e => handleModePaiement(e.target.value) } /> <label>CB</label>
            <input type="checkbox" name="paiement_restaurant" value="Espèces" onChange={e => handleModePaiement(e.target.value) } /> <label>Espèces</label>
            <input type="checkbox" name="paiement_restaurant" value="Tickets restaurant" onChange={e => handleModePaiement(e.target.value) } /> <label>Tickets restaurant</label>
            <input type="checkbox" name="paiement_restaurant" value="Cartes tickets restaurant" onChange={e => handleModePaiement(e.target.value) } /> <label>Cartes tickets restaurant</label><br/><br/>

            <label><b>Options...</b></label><br/>
            <input type="checkbox" name="option_restaurant" value="Sans gluten" onChange={e => handleOption(e.target.value) } /> <label>Sans gluten</label>
            <input type="checkbox" name="option_restaurant" value="Végétarien" onChange={e => handleOption(e.target.value) } /> <label>Végétarien</label>
            <input type="checkbox" name="option_restaurant" value="Vegan" onChange={e => handleOption(e.target.value) } /> <label>Vegan</label><br/><br/>


            <button onClick={createRestaurant}>Ajouter</button>
        </form>
      </header>
    </div>
  );
};

export default AddRestaurant;
