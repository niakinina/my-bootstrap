import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

const Slider = () => {
  return (
    <div>
    <Carousel >
    <Carousel.Item interval={1000}>
      <img width={'100%'} height={800}
        className="d-block w-100"
        src="./img/first.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>КотоПёс</h3>
        <p><b>Чтобы был счатливым нос, Вам поможет КотоПёс!</b></p>
        <Link exact to={'/form'}>
        <Button variant="warning">
          Обратная связь
        </Button></Link>

      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img width={'100%'} height={800}
        className="d-block w-100"
        src="./img/second.jpg"
        alt="Second slide"
      />
      <Carousel.Caption>
      <h3>Классные игрушки</h3>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img  width={'100%'}height={800}
        className="d-block w-100"
        src="./img/three.jpeg"
        alt="Third slide"
      />
      <Carousel.Caption>
      <h3>Замечательные аквариумы</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img  width={'100%'}height={800}
        className="d-block w-100"
        src="./img/four.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Полезные корма</h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default Slider