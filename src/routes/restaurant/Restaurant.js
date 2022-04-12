import React from "react";
import { useState, useEffect } from "react";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import "./Restaurant.css";
import db from "../../db";
import { Link } from 'react-router-dom';

const Restaurant = () => {
  
  const restaurantsCollectionRef = collection(db, "restaurant")
  
  const [restaurants,setRestaurants] = useState([])

  useEffect( () => {

    const getRestaurants = async () => {
      const data = await getDocs(restaurantsCollectionRef)
      setRestaurants(data.docs.map( doc => ({ id: doc.id, ...doc.data() }) ))
    }

    getRestaurants()

  }, [])

  // Suppression d'un restaurant
  const deleteRestaurant = async id => {
    const restaurantRef = doc(db, "restaurant", id)
    await deleteDoc(restaurantRef)
    window.location.reload(false)
  }


  return (
    <div className="Restaurant">
      <header className="Restaurant-header">
        <p>Restaurant page</p>
        <div>
        {
          restaurants.map( r => {
            return(
              <div>
                <ul>
                  <li>Nom: {r.nom}</li>
                  <li>Téléphone: {r.numero}</li>
                  <li>Localisation: {r.localisation}</li>
                  <li>{r.type}</li>
                  <li>Modes de paiment acceptés:</li>
                    <ul>
                    {
                      r.modePaiements.map(mode => {
                        return(
                          <li>{mode}</li>
                        )
                      })
                    }
                    </ul>
                  <li>Options:</li>
                    <ul>
                      {
                        r.options.map(option => {
                          return(
                            <li>{option}</li>
                          )
                        })
                      }
                    </ul>
                </ul>
                <Link to={"/restaurants/modifier-restaurant/" + r.id}>
                    <button>Modifier</button>
                </Link>
                <button onClick={ () => deleteRestaurant(r.id) }>Supprimer</button>
              </div>
            )
          })
        }
        </div>
        <Link to="/restaurants/nouveau-restaurant">Ajouter un restaurant</Link>
      </header>
    </div>
  );
};

export default Restaurant;
