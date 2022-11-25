import React, {  useEffect, useRef, useState } from "react";
import styles from './Shops.module.css';
import { data, areas, category } from '../../data/shopsData';
import sIcon from '../../assets/Icons/searchIcon.png';
import closeIcon from '../../assets/Icons/close.png';
import Modal from 'react-modal';
import './dropdown.css';
import Dropdown from 'react-dropdown';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import useDidMountEffect from "../../Custom Hook/useDidMountEffect";
import useOnClickOutside from "../../Custom Hook/useOnClickOutside";
import { useSelector } from "react-redux";
import { useMediaQuery } from 'react-responsive';


const Shops = () => {

    const [firstRender, setFirstRender] = useState(false);
    const [shopName, setShopName] = useState('');
    const [openingTime, setOpeningTime] = useState();
    const [closingTime, setClosingTime] = useState();
    const [ openingStatus, setOpeningStatus ] = useState();
    const [area, setArea] = useState();
    const [sCategory, setSCategory] = useState();
    const [addModal, setAddModal] = useState(false);
    const [filterInput, setFilterInput ] = useState('');
    const [filterData, setFilterData] = useState(data);
    const [showFilters, setShowFilters] = useState(false);
    const [showAreaFilter, setShowAreaFilter] = useState(false);
    const [selectedArea, setSelectedArea] = useState('Select Area');
    const [showCategoryFilter, setShowCategoryFilter] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('Select Category');
    const isAdmin = useSelector(state => state.main.isAdmin);

    const isMobile = useMediaQuery({
        query: '(max-width: 600px)'
    });

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: !isMobile ? '40%': 'auto',
          height: 'auto'
        },
      };

      const filterRef = useRef();

      useOnClickOutside(filterRef, () => {
            setShowFilters(false);
      })

      useEffect(() => {
        if(firstRender == false){
            setFirstRender(true);
            return;
        }
        if(selectedArea !== 'Select Area')
        setFilterData(data.filter((data) => {
            return data.area === selectedArea;
        }));
        console.log(filterData);

        if(selectedCategory !== 'Select Category')
        setFilterData(data.filter((data) => {
            return data.category === selectedCategory;
        }));

        if(openingStatus){
            const todayDate = new Date();
            const date = new Date();
            date.setHours(parseInt(data[0].openingTime.split(':')[0]));
            date.setMinutes(parseInt(data[0].openingTime.split(':')[1]));
            if(!date.getTime() - todayDate.getTime() < 0){
                console.log(date.getTime() - todayDate.getTime());
            }  
        }
      }, [selectedArea, openingStatus, selectedCategory])   
        

    const itemList = (items , func) => {
        const list = items.map((item) => (
          <div
            onClick={() => {
                func(item);
            }}
            className="dropdown__item"
            key={item.toString()}>
            {item}
          </div>
        ));
    
        return (
          <div className="dropdown__items"> { list } </div>
        )
      }

    const handleChange = (e) => {
        setFilterInput(e.target.value);
        let filters = data.filter((val) => {
          const regex = new RegExp(`${e.target.value}`, 'gi');
          return val.name.match(regex);
        });
        console.log(filters);
        setFilterData(filters);
    };

    return <div className={styles.main}>
        <Modal 
            isOpen={addModal}
            onRequestClose={() => {
                setAddModal(false);
            }}
            style={customStyles}
        >
        <div>
            <div style={{textAlign: 'center'}}><h2>Add Shop</h2></div>
        <TextField style={{width: '100%'}} 
        id="outlined-basic" 
        label="Enter Shop Name" 
        variant="outlined"
        value={shopName} 
        onChange={(e) => {
            setShopName(e.target.value);
        }}/>
            <div className={styles.areaDropDown}>
                <div>Select Area</div>
                <Dropdown 
                options={areas}
                className={`${styles.drpDown} ${area && styles.drpDownR}`}
                menuClassName={styles.drp__menu}
                onChange={(e) =>{
                    setArea(e.label);
                }}
                value=''
                placeholder='Select Area'
                >
                </Dropdown>
            </div>
            <div className={styles.areaDropDown}>
                <div>Select Category</div>
                <Dropdown 
                options={category}
                className={`${styles.drpDown} ${area && styles.drpDownR}`}
                menuClassName={styles.drp__menu}
                onChange={(e) =>{
                    setSCategory(e.label);
                }}
                value=''
                placeholder='Select Category'
                >
                </Dropdown>
            </div>
            <div className={styles.areaDropDown}>
                <div>Opening Time: </div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                    label="Opening Time"
                     value={openingTime}
                     onChange={(newValue) => {
                    setOpeningTime(newValue);
                    console.log(openingTime);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                     />
                </LocalizationProvider>
            </div>
            <div className={styles.areaDropDown}>
                <div>Closing Time: </div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                     <TimePicker
                    label="Closing Time"
                     value={closingTime}
                     onChange={(newValue) => {
                    setClosingTime(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                     />
                </LocalizationProvider>
            </div>
            <div className={styles.addShopButton}>
                <button>Add Shop</button>
            </div>
        </div>
    </Modal>
    <div className={styles.searchMain}>
        <button className={styles.filterButton} onClick={() =>{
            setShowFilters(true);
        }}>Filters</button>
        <div className={styles.shopSearch}>
            <img src={sIcon} style={{width: 40, height: 40}}/>
            <input
            value={filterInput}
            onChange={(e) => {
               handleChange(e);
            }}
            placeholder="Search by name"
            >
            </input>
        </div>
    </div>
    {isAdmin && <div className={styles.adminButton}>
        <button onClick={() => {
            setAddModal(true);
        }}>Add Shop</button>
    </div>}
    <div className={styles.shopsMain}>
        {showFilters && <div className={styles.shopsFilter} ref={filterRef}>
            <div className={styles.filterHeading}>
                Filters
                <span onClick={() => {
                    setShowFilters(false);
                }}>
                    <img src={closeIcon} style={{width: 20, height: 20}}/>
                </span>
            </div>
            <div className={styles.filterList}>
                <div
                    className={showAreaFilter ? "dropdown active" : "dropdown"}
                    onClick={() => {
                        setShowAreaFilter(prevState => {
                            return !prevState;
                        });
                    }} >
                    <div className="dropdown__text">
                         {!selectedArea ? "Select Race" : selectedArea}
                    </div>
                        {itemList(areas, setSelectedArea)}
                </div>
                <div
                    className={showCategoryFilter ? "dropdown active" : "dropdown"}
                    onClick={() => {
                        setShowCategoryFilter(prevState => {
                            return !prevState;
                        });
                    }} >
                    <div className="dropdown__text">
                         {!selectedCategory ? "Select Race" : selectedCategory}
                    </div>
                        {itemList(category, setSelectedCategory)}
                </div>
                <div className={styles.openCheck}>
                    Open Status: <input type="checkbox" onChange={(e) => {
                        setOpeningStatus(e.target.checked);
                    }}/>
                </div>
            </div>
        </div>}
        <div className={styles.mainShops}>
    {
        filterData.map(data => {
            return <div className={styles.shopsCard}>
                    <div className={styles.cardHeadArea}>
                        <h2>{data.name}</h2>
                    </div>
                    <div className={styles.cardDetails}>
                        <div><span>Category : </span> {data.category}</div>
                        <div><span>Area : </span> {data.area}</div>
                        <div><span>Opening Time : </span> {data.openingTime}</div>
                        <div><span>Closing Time : </span> {data.closingTime}</div>
                    </div>
                    {isAdmin && <div className={styles.cardButton}>
                        <button style={{
                            backgroundColor: 'green'
                        }}>Edit</button>
                        <button style={{
                            backgroundColor: 'red'
                        }} onClick={() => {
                                let newData = filterData.filter((d) => {
                                    return d !== data
                                })
                                setFilterData(newData);
                        }}>Delete</button>
                    </div>}
            </div>
        
        })
    }
    </div>
    </div>
    </div>
}

export default Shops;