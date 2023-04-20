import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import "./App.css"
import { useState,useEffect} from 'react';
import axios from 'axios';
import Home from './components/Home';
import Form from './components/Form';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import React from 'react';
import Favorites from './components/favorites/Favorites';
import Basket from './components/basket/Basket';
import Description from './components/Description';


export const AppContext = React.createContext({})

function App() {
//хранения данных туров
const [tyrs, setTyrs] = useState([])
//для хранения избранных
const [favorites, setFavorites] = useState([])
//для хранения объектов корзины
const [overlayItems, setOverlayItems] = useState([])

useEffect (()=>{
  async function axiosData(){
    const tyrsData = await axios.get('https://6421e8f134d6cd4ebd7e9d11.mockapi.io/tyrs')
    const favoritesData = await axios.get('https://637f91ca2f8f56e28e904e7d.mockapi.io/favorites')
    const cartData = await axios.get('https://6421e8f134d6cd4ebd7e9d11.mockapi.io/cart')
    
    setTyrs(tyrsData.data)
    setFavorites(favoritesData.data)
    setOverlayItems(cartData.data)   
  }
  axiosData();
},[])


const deleteItems=(id)=>{
  axios.delete(`https://6421e8f134d6cd4ebd7e9d11.mockapi.io/cart/${id}`)
  setOverlayItems((objDelete)=> objDelete.filter(item=> item.id !==id))
}

const isAdded=(myId)=>{
  return overlayItems.some((objIsAdded)=> objIsAdded.myId === myId)
}

const isFav=(myId)=>{
  return favorites.some((objIsFav)=> objIsFav.myId === myId)
}


  return (
    <AppContext.Provider
    value={
      {
      tyrs,
      setTyrs,
      overlayItems,
      setOverlayItems,
      favorites,
      setFavorites,
      isAdded,
      isFav
      }
    }>
    <div>

      <Router>
        <Header/>
          <Routes>

            <Route path='/favorites'
              element={
                <Favorites
                favorites = {favorites}
                setFavorites={setFavorites}
                item={tyrs}
                overlayItems={overlayItems}
                setOverlayItems={setOverlayItems}
                />
              }
            />
          
          <Route path='/'
              element={
                <Home
                  item={tyrs}
                  overlayItems={overlayItems}
                  setOverlayItems={setOverlayItems}
                  favorites = {favorites}
                  setFavorites={setFavorites}
                />
              }
            />

          <Route path='/form'
              element={
                <Form/>
              }
            />

          <Route path='/cart'
                        element={
                          <Basket
                          totalPrice={
                            overlayItems.reduce((element = overlayItems.length, obj)=>
                            element+obj.price, 0
                            )
                          }
                          overlayProp={overlayItems}
                          deleteItems={deleteItems}
                          />
                        }
                      />

          <Route path='/description'
             element={
               <Description/>
             }
           />

        </Routes>
      </Router> 

      <Footer/>
    </div>

    </AppContext.Provider>
  );
}

export default App;


