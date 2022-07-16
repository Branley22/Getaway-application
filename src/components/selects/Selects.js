import React from 'react'
import './Selects.css'
import BoraBora from '../../assets/bora-bora.jpg'
import BoraBora2 from '../../assets/bora-bora2.jpg'
import Hawaii from '../../assets/hawaii.jpg'
import Hawaii2 from '../../assets/hawaii2.jpg'
import Hawaii3 from '../../assets/hawaii3.jpg'
import Keywest from '../../assets/keywest.jpg'

import SelectsImg from '../SelectsImg/SelectsImg'

const Selects = () => {
  return (
    <div name='views' className='selects'>
      <div className='container'>
        <SelectsImg bgImg={BoraBora} text='Bora Bora' />
        <SelectsImg bgImg={BoraBora2} text='Bora Bora 2' />
        <SelectsImg bgImg={Hawaii} text='Hawaii' />
        <SelectsImg bgImg={Hawaii2} text='Hawaii2' />
        <SelectsImg bgImg={Hawaii3} text='Hawaii3' />
        <SelectsImg bgImg={Keywest} text='Keywest' />
      </div>
    </div>
  )
}

export default Selects