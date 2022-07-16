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
        <SelectsImg bgImg={BoraBora} text='Bora Bora' text2='Deluxe Package' />
        <SelectsImg bgImg={BoraBora2} text='Bora Bora ' text2='Standard Package' />
        <SelectsImg bgImg={Hawaii} text='Hawaii' text2='Deluxe Package' />
        <SelectsImg bgImg={Hawaii2} text='Hawaii' text2='Standard Package' />
        <SelectsImg bgImg={Hawaii3} text='Hawaii' text2='Expedition Package' />
        <SelectsImg bgImg={Keywest} text='Keywest' text2='Deluxe Package' />
      </div>
    </div>
  )
}

export default Selects