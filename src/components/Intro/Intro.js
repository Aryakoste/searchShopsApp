import React from 'react';
import classes from './Intro.module.css';
import Image from '../../assets/Images/1.jpg';

const Intro = () => {
    return (
        <div className={classes.mainIntro}>
            <div className={classes.introText}>
                <div>Find Shops Instantly</div>
                <p>This App Lets you find shops faster with quicker search and filters</p>
            </div>
            <div className={classes.introImage}>
            <img src={Image}/>
            </div>
        </div>
    );
}

export default Intro;