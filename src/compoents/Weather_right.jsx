import React from 'react'
import './Weather_right.css'
import { FiWind } from 'react-icons/fi'
import picture from './assest/pic.png'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { AiOutlineRight, AiOutlineDown } from 'react-icons/ai'
import { LuCloudRain } from 'react-icons/lu'
import barimg from './assest/bar.png'
import { BsCloudRain } from 'react-icons/bs'
import { WiDaySunny, WiHumidity, WiThermometer } from 'react-icons/wi'
import { CiCloud } from 'react-icons/ci'
import humimg from './assest/hum.png'
import windimg from './assest/wind.png'
import preimg from './assest/pre.png'

function Weather_right() {
  return (
    <div className="rightside">
      <div className="right_text">
        <div className="text">
          <h3>Welcome back Iasbella!</h3>
          <h4>Check out today's weather information</h4>
        </div>
        <div className="right_img">
          <BiDotsHorizontalRounded size={30} />
          <img src={picture} alt={picture} />
        </div>
      </div>
      <div className="upcoming_hours">
        <div className="up_hours">
          <p>Upcoming Hours</p>
          <div className="hours_right">
            <button>
              Rain Precipition <AiOutlineDown color=" rgb(48, 47, 47)" />
            </button>
            <button className="next">
              Next Days <AiOutlineRight />
            </button>
          </div>
        </div>
        <div className="daily_hours">
          <div className="hours_data">
            <div className="hours">
              <span>Now</span>
              <span>
                <WiDaySunny size={25} />
              </span>
              <span>27°</span>
            </div>
            <div className="hours">
              <span>11.00</span>
              <span>
                <WiDaySunny size={25} />
              </span>
              <span>28°</span>
            </div>
            <div className="hours">
              <span>12.00</span>
              <span>
                <CiCloud size={25} />
              </span>
              <span>28°</span>
            </div>
            <div className="hours">
              <span>13.00</span>
              <span>
                <CiCloud size={25} />
              </span>
              <span>29°</span>
            </div>
            <div className="hours">
              <span>14.00</span>
              <span>
                <WiDaySunny size={25} />
              </span>
              <span>30°</span>
            </div>
            <div className="hours">
              <span>15.00</span>
              <span>
                <CiCloud size={25} />
              </span>
              <span>29°</span>
            </div>
            <div className="hours">
              <span>16.00</span>
              <span>
                <CiCloud size={25} />
              </span>
              <span>29°</span>
            </div>
            <div className="hours">
              <span>17.00</span>
              <span>
                <WiDaySunny size={25} />
              </span>
              <span>28°</span>
            </div>
          </div>

          <img src={barimg} alt={barimg} width={860} height="70" />
        </div>
      </div>
      <div>
        <p>More details of today's weather</p>
        <div className="weather_cards">
          <div className="weather_card">
            <div className="wea_cards">
              <div className="humi">
                <span>Humidity</span>
                <span className="wet_icon">
                  <h3>
                    <WiHumidity size={25} />
                  </h3>
                </span>
                <p>
                  82% <span>bad</span>
                </p>
                <img src={humimg} alt={humimg} height="25" />
              </div>
            </div>
          </div>
          <div className="weather_card">
            <div className="wea_cards">
              <div className="humi">
                <span>Wind</span>
                <span className="wet_icon">
                  <span>
                    <FiWind size={22} style={{ paddingTop: '5px' }} />
                  </span>
                </span>
                <img src={windimg} alt={windimg} height="90" />
              </div>
            </div>
          </div>
          <div className="weather_card">
            <div className="wea_cards">
              <div className="humi">
                <span>Precepitation</span>
                <span className="wet_icon">
                  <span>
                    <LuCloudRain size={25} style={{ paddingTop: '5px' }} />
                  </span>
                </span>
                <p>1.4 cm</p>
                <img src={preimg} alt={preimg} />
              </div>
            </div>
          </div>
          <div className="weather_card">
            <div className="wea_cards">
              <div className="humi">
                <span>UV index</span>
                <span className="wet_icon">
                  <span>
                    <WiDaySunny size={25} style={{ paddingTop: '3px' }} />
                  </span>
                </span>
                <p>
                  4 <span>medium</span>
                </p>
                <img src={preimg} alt={preimg} />
              </div>
            </div>
          </div>
          <div className="weather_card">
            <div className="wea_cards">
              <div className="humi">
                <span>Feel like</span>
                <span className="wet_icon">
                  <span>
                    <WiThermometer size={27} style={{ paddingTop: '5px' }} />
                  </span>
                </span>
                <p>30</p>
                <img src={preimg} alt={preimg} />
              </div>
            </div>
          </div>
          <div className="weather_card">
            <div className="wea_cards">
              <div className="humi">
                <span>Chance of rain</span>
                <span className="wet_icon">
                  <span>
                    <BsCloudRain size={25} style={{ paddingTop: '5px' }} />
                  </span>
                </span>
                <p>1.4 cm</p>
                <img src={preimg} alt={preimg} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather_right
