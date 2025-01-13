import React from 'react'
import Image from 'next/image'
import'../../../categories/Loading.css'
import pic from '../../../assets/images/pngtree-creative-burger-exaggerated-delicious-food-photography-png-image_6687052.png'


export default function loader() {
  return (
    <div className='loader position-fixed top-0 bottom-0 end-0 start-0 bg-dark d-flex justify-content-center align-items-center'>
              <Image className='pulse' src={pic} alt='pic' style={{width:'200px', height:'200px'}}/>

    </div>
  )
}
