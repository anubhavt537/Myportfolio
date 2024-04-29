import React, { useState } from 'react'
import './Navbar.css'
import logo from '../assests/logo.svg'
import underline from '../assests/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
export default function () {
  const [menu,setMenu]=useState('home')
  return (
    <div className='Navbar'>
        
        <ul className="nav-menu">
           <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>setMenu('home')}>Home</p></AnchorLink> {menu==='home'?<img src={underline} alt=''/>:<></>}</li>
           <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu('about')}>About Me</p></AnchorLink> {menu==='about'?<img src={underline} alt=''/>:<></>}</li>
           <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu('work')}>PortFolio</p></AnchorLink> {menu==='work'?<img src={underline} alt=''/>:<></>}</li>
           <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu('contact')}>Contact</p></AnchorLink> {menu==='contact'?<img src={underline} alt=''/>:<></>}</li>

        </ul>
        <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
        </div>
    </div>
  )
}
