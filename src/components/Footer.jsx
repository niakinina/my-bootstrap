import React from 'react'

const Footer = () => {
  return (
    <div className='container'>
        <footer className='row row-col-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top'>
          <div className='col mb-3'>
            <a className=''>
              <img src='img/logo1.jpg' className='bi me-2' width={180} height={180}>
              </img>
            </a>
            <p>
              Котопёс - счастливый нос!
            </p>

            </div>
              <div className='col mb-3'>

              </div>

            <div className='col mb-6'>
              <h5>Наши контакты:</h5>
              <ul className='nav flex-column'>
                <li className='nav-item mb-4'>
                  <a className='nav-link p-0 text-muted'>Администратор магазина: 
                  <li>8 (888) 888-88-88</li></a>
                </li>
                <li className='nav-item mb-3'>
                <a className='nav-link p-0 text-muted'>Администратор вет-клиники: 
                <li>8 (888) 888-88-88</li></a>
                </li>
              </ul>
            </div>

            <div className='col mb-6'>
              <h5>Наш адрес:</h5>
              <ul className='nav flex-column'>
                <li className='nav-item mb-4'>
                  <a className='nav-link p-0 text-muted'>Магазин: 
                  <li>ул.Ленина, 1</li></a>
                </li>
                <li className='nav-item mb-3'>
                <a className='nav-link p-0 text-muted'>Вет-клиника: 
                <li>ул.Ленина, 2</li></a>
                </li>
              </ul>
            </div>
          
        </footer>
    </div>
  )
}

export default Footer