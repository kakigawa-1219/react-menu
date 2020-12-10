import React , {Component} from 'react'

class Nav extends Component{
    render(){
        return(
         <>
         <nav>
        <ul id="menu">
            <li className="menu-list"><div className="menu-list-text">個人のお客様</div></li>
            <li className="menu-list"><div className="menu-list-text">法人お客様</div></li>
            <li className="menu-list"><div className="menu-list-text">株主・投資家の皆様</div></li>
            <li className="menu-list"><div className="menu-list-text">採用情報</div></li>
            <li className="menu-list"><div className="menu-list-text">せらく銀行について</div></li>
        </ul>
        </nav>
         </>
        )
    }
 
}
export default Nav