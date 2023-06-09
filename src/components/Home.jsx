import React from 'react'
import Slider from './Slider';
import CardItem from './cart/CartItem';

const Home = (props) => {
  return (
    <div3>
        <Slider/>
        <CardItem item={props.item}
        overlayItems={props.overlayItems}
        setOverlayItems={props.setOverlayItems}
        favorites={props.favorites}
        setFavorites={props.setFavorites}/>
    </div3>
  )
}

export default Home