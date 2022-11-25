import React from 'react';
import style from './Header.module.css';
import profileIcon from '../../assets/Icons/user.png';
import { useDispatch, useSelector } from 'react-redux';
import { mainActions } from '../../store/Slices/mainSlice';

const Header = () => {

    const dispatch = useDispatch();
    const isAdmin = useSelector(state => state.main.isAdmin);

    return <div className={style.mainHeader}>
    <nav className={style.Header}>
        <a onClick={() => {
            dispatch(mainActions.setIsAdmin({isAdmin: false}));
        }}>Home</a>
        <a onClick={() => {
            dispatch(mainActions.setIsAdmin({isAdmin: true}));
        }}>Admin</a>
        <a href='https://github.com/Aryakoste/searchShopsApp'>My Github</a>
        <div className={style.headerProfile}>
            <img src={profileIcon} style={{width: 37, height: 37}}/>
            <div>{!isAdmin ? 'User': 'Admin'}</div>
        </div>
    </nav>
    </div>
}

export default Header;