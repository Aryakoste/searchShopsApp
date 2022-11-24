import React from 'react';
import style from './Header.module.css';
import profileIcon from '../../assets/Icons/user.png';

const Header = () => {
    return <div className={style.mainHeader}>
    <nav className={style.Header}>
        <a>Home</a>
        <a>Admin</a>
        <div className={style.headerProfile}>
            <img src={profileIcon} style={{width: 37, height: 37}}/>
            <div>User</div>
        </div>
    </nav>
    </div>
}

export default Header;