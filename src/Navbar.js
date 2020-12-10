import React ,{useState} from 'react'
import {Button} from './Button'
import {Link} from 'react-router-dom'
import './Navbar.css'
import Dropdown from './Dropdown.js'
function Navbar(){
const [click,setClick] = useState(false);
const [dropdown, setDropdown] = useState(false);

const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false); 

const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
    return(
        
        <>
        <nav className="navbar">
            {/*ハンバーガーメニュー */}
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item" onClick={closeMobileMenu}   onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
                    個人お客様
                    {dropdown && <Dropdown />}
                </li>
                <li className="nav-item" onClick={closeMobileMenu}>
                    法人お客様
                </li>
                <li className="nav-item" onClick={closeMobileMenu}>
                    株主・投資家の皆様
                </li>
                <li className="nav-item" onClick={closeMobileMenu}>
                    採用情報
                </li>
                <li className="nav-item" onClick={closeMobileMenu}>
                    せらく銀行について
                </li>
            </ul>
        </nav>
        </>
    );
}
export default Navbar;