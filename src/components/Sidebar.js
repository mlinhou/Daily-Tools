import { useState } from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { IconContext } from 'react-icons';

function Sidebar() {
    const [sidebar, setSideBar] = useState(false)

    const showSideBar = () => setSideBar(!sidebar)

  return (
    
    <div className='nav'>
        <IconContext.Provider value={{ color: '#fff' }}>
        <div className='sidebar'>
            <Link to="#" className='menu-bars'>
                <FaIcons.FaBars onClick={showSideBar}/>
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSideBar}>
                <li className='sidebar-toggle'>
                    <Link to="#" className='menu-bars'>
                        <AiIcons.AiOutlineClose />
                    </Link>
                </li>
                <li>
                    <Link to="/Daily-Tools">
                        <button className="home">Home</button>
                    </Link>
                </li>
                <li>
                    <Link to="/Todo">
                        <button className="todo">Todo</button>
                    </Link>
                </li>
                <li>
                    <Link to="/Calculator">
                        <button className="calc">Calculator</button>
                    </Link>
                </li>
                <li>
                    <Link to="/Timer">
                        <button className="time">Timer</button>
                    </Link>
                </li>
            </ul>
        </nav>
        </IconContext.Provider>
    </div>

  )
}

export default Sidebar