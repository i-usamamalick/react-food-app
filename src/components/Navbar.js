import React, { useState } from 'react'
import { Sidebar } from './Sidebar'
import { faHome , faList , faCog } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'react-router-dom'
const links = [
    {
        name: "Home",
        path: "/",
        icon: faHome
    },
    {
        name: "Recipes",
        path: "/recipes",
        icon: faList
    },
    {
        name: "Settings",
        path: "/settings",
        icon: faCog
    }
]
export const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const closeSidebar = () => {
        setShowSidebar(false)
   }
   const location = useLocation()
  return (
    <>
        <div className='navbar container'>
            <Link to={'/'} className='logo'>F<span>oo</span>diesHub</Link>
            <div className='nav-links'>
                {links.map((link)=>{
                    return <Link className={location.pathname===link.path?'active':''} to={link.path} key={link.name}>{link.name}</Link>
                })}
            </div>
            <div onClick={()=>{setShowSidebar(true)}} className={showSidebar?'sidebar-btn active':'sidebar-btn'}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
        </div>
        {showSidebar && <Sidebar close={closeSidebar} links={links}/>}
    </>
  )
}
