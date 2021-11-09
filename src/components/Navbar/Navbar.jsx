import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

/*let s = {
'nav': 'Navbar_nav__3VT01',
'item': 'Navbar_item__1Raqz'

}*/

/*let c1 = 'item';
let c2 = 'active';

let classes = c1 + " " + c2;
let classesNew = `${s.item} ${s.active}`; */

const Navbar = () => {
return <nav className={s.nav}>
    <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
    </div>
    <div className={s.item}>
        <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
    </div>
    <div className={s.item}>
        <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
    </div>
    <div className={s.item}>
        <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
    </div>
    <div className={s.item}>
        <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
    </div>
    <div className={s.item}>
        <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
    </div>
</nav>


}

export default Navbar;