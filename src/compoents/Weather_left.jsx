import React from 'react'
import './Weather_left.css'
import tourimg from './assest/lefttside.png'
import { CgLoadbar } from 'react-icons/cg'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { AiOutlinePlus } from 'react-icons/ai'
import { FiNavigation } from 'react-icons/fi'
import { GiPlainCircle } from 'react-icons/gi'
import { WiDayFog } from 'react-icons/wi'

function Weather_left() {
  return (
    <div className="leftside">
      <div className="icon">
        <div className="plus">
          <AiOutlinePlus size={20} color="#b5d8ff" />
        </div>
        <span className="circle">
          <CgLoadbar size={30} />
          <GiPlainCircle size={9} color="white" />
          <GiPlainCircle size={9} color="white" />
        </span>
        <div className="switch">
          °C{' '}
          <i
            className="fa fa-toggle-off"
            aria-hidden="true"
            style={{ fontSize: '22px' }}
          ></i>
          °F
        </div>
      </div>
      <div className="newtext">
        <div className="new">
          <h4>
            <FiNavigation size={22} style={{ paddingTop: '7px' }} /> York,USA
          </h4>
          <p>Today 28 sept</p>
        </div>
        <div className="tem">
          <p>
            <WiDayFog size={25} style={{ paddingTop: '8px' }} /> 07.19
          </p>
          <p>
            <WiDayFog size={25} style={{ paddingTop: '8px' }} /> 19.32
          </p>
        </div>
      </div>
      <div className="temp">
        <h1>
          <MdKeyboardArrowLeft
            size={40}
            style={{
              color: ' rgb(224, 222, 222)',
              paddingBottom: '5px',
            }}
          />{' '}
          27°{' '}
          <MdKeyboardArrowRight
            size={40}
            style={{ color: ' rgb(224, 222, 222)', paddingBottom: '5px' }}
          />
        </h1>
      </div>
      <div className="img">
        <img src={tourimg} alt={tourimg} height={414} width={300} />
      </div>
    </div>
  )
}

export default Weather_left
