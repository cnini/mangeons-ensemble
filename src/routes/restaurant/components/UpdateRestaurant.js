import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore"; 
import db from '../../../db';

const UpdateRestaurant = () => {

    // Récupération de l'id dans l'URL
    const { id } = useParams()

    // Récupération des informations sur le document restaurant
    const restaurantRef = doc(db, "restaurant", id)

    // Initialisation des hooks
    const [nom, setNom] = useState("")
    const [numero, setNumero] = useState("")
    const [localisation, setLocalisation] = useState("")
    const [type, setType] = useState("")
    const [modePaiements, setModePaiements] = useState([])
    const [options, setOptions] = useState([])

    useEffect( () => {

        const getRestaurantById = async () => {
            const data = await getDoc(restaurantRef)

            setNom(data.data().nom)
            setNumero(data.data().numero)
            setLocalisation(data.data().localisation)
            setType(data.data().type)
            setModePaiements(data.data().modePaiements)
            setOptions(data.data().options)
        }

        getRestaurantById()

    }, [])

    // Modification d'un document restaurant
    const updateRestaurant = async () => {
        await updateDoc(restaurantRef, {
            nom: nom,
            numero: numero,
            localisation: localisation,
            type: type,
            modePaiements: modePaiements,
            options: options
        })
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
            <p>UpdateRestaurant formulaire</p>
            <form>
                <label><b>Nom du restaurant</b></label><br/>
                <input
                type="text"
                name="nom_restaurant"
                placeholder="Nom du restaurant"
                value={nom}
                onChange={ e => setNom(e.target.value) }
                /><br/><br/>

                <label><b>N° de téléphone</b></label><br/>
                <input
                type="text"
                name="num_restaurant"
                placeholder="01 40 85 64 33"
                value={numero}
                onChange={ e => setNumero(e.target.value) }
                /><br/><br/>

                <label><b>Localisation</b></label><br/>
                <input
                type="text"
                name="localisation_restaurant"
                value={localisation}
                onChange={ e => setLocalisation(e.target.value) }
                /><br/><br/>

                <label><b>Type de restaurant</b></label><br/>
                <input type="radio" name="type_restaurant" value="Restauration classique"
                    checked={ type == "Restauration classique" ? true : false }
                    onChange={e => handleType(e.target.value) }
                 /> <label>Restauration classique</label>
                <input type="radio" name="type_restaurant" value="Restauration rapide"
                    checked={ type == "Restauration rapide" ? true : false }
                    onChange={e => handleType(e.target.value) }
                /> <label>Restauration rapide</label><br/><br/>

                <label><b>Type de paiement accepté</b></label><br/>
                <input type="checkbox" name="paiement_restaurant" value="CB"
                    checked={ modePaiements.find(mode => mode === "CB") ? true : false }
                    onChange={e => handleModePaiement(e.target.value) }
                /> <label>CB</label>
                <input type="checkbox" name="paiement_restaurant" value="Espèces"
                    checked={ modePaiements.find(mode => mode === "Espèces") ? true : false }
                    onChange={e => handleModePaiement(e.target.value) }
                /> <label>Espèces</label>
                <input type="checkbox" name="paiement_restaurant" value="Tickets restaurant"
                    checked={ modePaiements.find(mode => mode === "Tickets restaurant") ? true : false }
                    onChange={e => handleModePaiement(e.target.value) }
                /> <label>Tickets restaurant</label>
                <input type="checkbox" name="paiement_restaurant" value="Cartes tickets restaurant"
                    checked={ modePaiements.find(mode => mode === "Cartes tickets restaurant") ? true : false }
                    onChange={e => handleModePaiement(e.target.value) }
                /> <label>Cartes tickets restaurant</label><br/><br/>

                <label><b>Options...</b></label><br/>
                <input type="checkbox" name="option_restaurant" value="Sans gluten"
                    checked={ options.find(option => option === "Sans gluten") ? true : false }
                    onChange={e => handleOption(e.target.value) }
                /> <label>Sans gluten</label>
                <input type="checkbox" name="option_restaurant" value="Végétarien"
                    checked={ options.find(option => option === "Végétarien") ? true : false }
                    onChange={e => handleOption(e.target.value) }
                /> <label>Végétarien</label>
                <input type="checkbox" name="option_restaurant" value="Vegan"
                    checked={ options.find(option => option === "Vegan") ? true : false }
                    onChange={e => handleOption(e.target.value) }
                /> <label>Vegan</label><br/><br/>


                <button onClick={updateRestaurant}>Modifier</button>
            </form>
        </header>
        </div>
    );
};

export default UpdateRestaurant;
