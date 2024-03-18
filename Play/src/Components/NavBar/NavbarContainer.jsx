// eslint-disable-next-line no-unused-vars
import React from 'react'
import Logo from '../Logo/Logo.component'
import SearchBox from '../SearchBox/SearchBox.component'
import GreenBtn from '../Buttons/GreenBtn.component'
import './NavBar.style.css'
const NavbarContainer = () => {

  const handelFeedBackClick =()=>{
    console.log("Handel FeedBack event")
  }

  return (
    <>
      <nav className="navbar-container">
        <Logo/>
        <SearchBox/>
        <GreenBtn handelFeedBackClick= {handelFeedBackClick} btnText="Give Feedback"/>
      </nav>
    </>
  )
}

export default NavbarContainer
