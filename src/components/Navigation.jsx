import React, { useRef, useState } from 'react'
import Logo from './Logo'
import {FaBars, FaBell, FaInstagram, FaTwitter, FaFacebook, FaMedium} from 'react-icons/fa'
import { BsBellSlashFill} from 'react-icons/bs'
import Sound from './music.wav'


const Navigation = () => {
  const [notify, setNotify] = React.useState(false);
  const [isActive, setActive] = useState(false);
  const audioRef = useRef(null);
  const handleClick = () => {
    console.log('handleClick');
    setActive(!isActive);
  }
  const notifyClick = () => {
    setNotify(!notify);
    audioRef.current.play();
  }
  return (
    <nav>
      <section>
        <header className="header">
          <div className="menu">
            <button  onClick={handleClick}>
              <FaBars />
            </button>
          </div>
          <Logo />
          <div className="profile">
            <button onClick={notifyClick}>
              {
                notify ? <FaBell>
                  <audio src={Sound} ref={audioRef}></audio>
                </FaBell> : <BsBellSlashFill />
              }
            </button>
          </div>
        </header>
        <div className={`nav-links ${isActive ? 'show' : 'none'}`}>
          <ul>
            <li onClick={handleClick}>contact</li>
            <li onClick={handleClick}>subscription</li>
            <li onClick={handleClick}>about</li>
          </ul>
          <ul className='social'>
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaMedium />
            </li>
          </ul>
        </div>
      </section>
    </nav>
  )
}

export default Navigation