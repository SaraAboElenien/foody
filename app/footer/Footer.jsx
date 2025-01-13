import React from 'react'
import  '../footer/Footer.css'
import Link from 'next/link'

export default function Footer() {
  return (<>
    <div className="footer  text-white ">
      <div className="container">
        <div className="row mb-5">
          <div className='col-md-6 col-lg-3'>
            <h6 className='heading h2'>FOODY</h6>
            <p>Get all your favorite  food from your favourite restaurant, book your table now.</p>
            <div className="icons d-flex py-4 ">
              <div className="rounded-circle  icon d-flex justify-content-center align-items-center "><i className="fa-brands fa-facebook-f"></i></div>
              <div className="rounded-circle  icon  d-flex justify-content-center align-items-center"><i className="fa-brands fa-x-twitter"></i></div>
              <div className="rounded-circle  icon  d-flex justify-content-center align-items-center"><i className="fa-brands fa-instagram"></i></div>
              <div className="rounded-circle  icon  d-flex justify-content-center align-items-center"><i class="fa-solid fa-globe"></i></div>
              <div className="rounded-circle  icon  d-flex justify-content-center align-items-center"><i class="fa-brands fa-pinterest-p"></i></div>
            </div>
          </div>
          <div className='col-md-6 col-lg-3'>
            <h6 className='heading h2'>OPEN HOURS</h6>
            <ul className='open-hours list-unstyled mt-4'>
              <li className='d-flex'>
                <span className='w-100 first-child' >Monday</span>
                <span style={{color:"gray"}}  className='w-100'>9:00 - 24:00</span>
              </li>
              <li className='d-flex'>
                <span className='w-100 first-child'>Monday</span>
                <span style={{color:"gray"}}  className='w-100'>9:00 - 24:00</span>
              </li>
              <li className='d-flex'>
                <span className='w-100 first-child'>Tuesday</span>
                <span style={{color:"gray"}}  className='w-100'>9:00 - 24:00</span>
              </li>
              <li className='d-flex'>
                <span className='w-100 first-child'>Wednesday</span>
                <span style={{color:"gray"}}  className='w-100'>9:00 - 24:00</span>
              </li>
              <li className='d-flex'>
                <span className='w-100 first-child' >Thursday</span>
                <span style={{color:"gray"}}  className='w-100'>9:00 - 24:00</span>
              </li>
              <li className='d-flex'>
                <span className='w-100 first-child'>Thursday</span>
                <span style={{color:"gray"}}  className='w-100'>9:00 - 24:00</span>
              </li>
              <li className='d-flex'>
                <span className='w-100 first-child'>Saturday</span>
                <span style={{color:"gray"}}  className='w-100'>9:00 - 24:00</span>
              </li>
              <li className='d-flex'>
                <span className='w-100 first-child'>Sunday</span>
                <span style={{color:"gray"}} className='w-100 '>Closed</span>
              </li>
            </ul>
          </div>
          <div className='col-md-6 col-lg-3'>
            <h6 className='heading h2'>OUR BEST FOODY</h6>
            <div className="thum d-flex justify-content-center align-items-center mt-4">
              <Link className="thumb-menu img" href="#" ></Link>
            </div>
          </div>
          <div className='col-md-6 col-lg-3'>
            <h6 className='heading h2'>NEWSELTTER </h6>
            <p >Want your table to be ready for you as soon as you arrive? Let us know!</p>
            <form className='subscribe-form' action="">
              <div className="form-group">
                <input className="form-control mb-2 text-center" type="text" placeholder="Enter email address" />
                <input className="form-control submit px-3" type="submit" value="Subscribe" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  </>

  )
}
