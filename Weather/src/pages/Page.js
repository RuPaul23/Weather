import "bootstrap/dist/css/bootstrap.min.css";
import "./Page.css";
import React, { useState } from 'react';
import ToggleSwitch from '../components/ToggleSwitch';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


  
const Page = () => {
        
    const data = [
      {
        name: '20°',
        value: 20
      },
      {
        name: '28°',
        value: 28
      },
      {
        name: '21°',
        value: 21
      },
      {
        name: '22°',
        value: 22
      },
      {
        name: '27°',
        value: 27
      },
      {
        name: '25°',
        value: 25
      },
      {
        name: '27°',
        value: 27
      },
      {
        name: '23°',
        value: 23
      },
    ];


  const [location, setLocation] = useState('New York, USA'); // Initialize with default location

  // Function to handle location input change
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleAddButtonClick = () => {
    // This function will be executed when the image is clicked
    // Add your desired functionality here
    console.log("Add button clicked!");
    // You can replace the console.log with your desired action
  };
  
  const [menuOpen, setMenuOpen] = useState(false); // State to track menu open/close

  const handleMenuClick = () => {
    // Toggle the menu open/close state
    setMenuOpen(!menuOpen);
  };

  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownClick = () => {
  setShowDropdown(!showDropdown);
  };
  
  const [humidityValue, setHumidityValue] = useState(83);


  return (


    <div className="page">

      {/*-------------BlueBox Starts--------------- */}

      {/* Background Blue Box  */}
      <div className="backgroundbluebox">
        <div className="bluebox" />
        <img className="building-icon" src ={require('../Images/building.png')} alt="" />
      </div>
      
      {/*BlueBox Part */}
      
      <img className="compass-icon" src ={require('../Images/compass.png')} alt="" />
      
      <div className="location-search">
        <input
          type="text"
          className="location-input"
          value={location}
          onChange={handleLocationChange}
          placeholder="Enter location"
        />
      </div>

         
      <div className="F">°F</div>
      <ToggleSwitch />
      <div className="C">°C</div>

      <img className="light-icon" src ={require('../Images/light.png')} alt="" />
      <img className="light-icon1" src ={require('../Images/light.png')} alt="" />
      <div className="div7">07:45</div>
      <div className="div8">09:15</div>
      <div className="div9">27°</div>
      <div className="sunny">Sunny</div>
      <img className="right-arrow-icon" src ={require('../Images/right-arrow.png')} alt="" />
      <img className="left-arrow-icon" src ={require('../Images/left-arrow.png')} alt="" />
      <img className="sun-icon" src ={require('../Images/sun.png')} alt="" />

      
      {/*BlueBox Part */}

      {/*-------------Blue Box Ends-------------- */}






      {/* ---------------White Box Ends----------------- */}


      <div className="whitebox" />
      <div className="largebox" />
      <div className="welcome-back-isabella">Welcome back Isabella!</div>

      <div className="check-out-todays">
        Check out today's weather information
      </div>

      {/* Menu Container */}
      <div className="menu-container">
        {/* Menu Button */}
        <button className="menu" onClick={handleMenuClick}>
          <img className="menu-icon" src={require('../Images/Menu.png')} alt="Menu" />
        </button>

        {/* Dropdown Content */}
        {menuOpen && (
          <div className="dropdown-content">
            <div className="dropdown-item">Profile</div>
            <div className="dropdown-item">Sign In</div>
            <div className="dropdown-item">About Us</div>
            <div className="dropdown-item">Contact Us</div>
          </div>
        )}
      </div>

      {/* User*/}    
      <img className="user-icon" src ={require('../Images/User.png')} alt="" />
      <div className="addbtn-group">
        {/* Adding an onClick event to the image */}
        <img
          className="addbtn-icon"
          src={require('../Images/AddBtn.png')}
          alt=""
          onClick={handleAddButtonClick}
          style={{ cursor: "pointer" }} // Change cursor to pointer on hover
        />
      </div>  

      

      {/*Upcoming hours */}
      <div className="upcoming-hours">Upcoming hours</div>

      {/*Rain Prediction*/}
      <div className="rain-prediction-grp">
        <div className="rectangle" />
        <div className="rain-precipitation">Rain precipitation</div>
        <img className="arrow-icon" src ={require('../Images/ArrowR.png')} alt="" />
      </div>


      {/*Next Day*/}
        <div className="next-day-grp">
          <div className="next-day-grp-child" onClick={handleDropdownClick}>
            <div className="next-days">Next days</div>
            <img className="arrow-icon1" src={require('../Images/ArrowD.png')} alt="" />
            </div>
            {showDropdown && (
              <div className="dropdown">
                <div className="dropdown-item">Monday</div>
                <div className="dropdown-item">Tuesday</div>
                <div className="dropdown-item">Wednesday</div>
                <div className="dropdown-item">Thursday</div>
                <div className="dropdown-item">Friday</div>
                <div className="dropdown-item">Saturday</div>
                <div className="dropdown-item">Sunday</div>
              </div>
            )}
        </div>

      {/*Now Time: 11:00, 12:00 , 13:00, 14:00, 15:00, 16:00, 17:00*/}
      
      <div className="Container"> 
        <div>
          <div className="now">Now</div>
          <div className="div">11:00</div>
          <div className="div1">12:00</div>
          <div className="div2">13:00</div>
          <div className="div3">14:00</div>
          <div className="div4">15:00</div>
          <div className="div5">16:00</div>
          <div className="div6">17:00</div>
        </div>

        <div className="image">    
          <img className="sunny-day-icon"  src ={require('../Images/Sunny Day.png')} alt="" />
          <img className="sunny-day-icon1" src ={require('../Images/Sunny Day.png')} alt="" />
          <img className="sunny-day-icon2" src ={require('../Images/Sunny Day.png')} alt="" />
          <img className="sunny-day-icon3" src ={require('../Images/Sunny Day.png')} alt="" />

          <img className="cloud-icon" src ={require('../Images/Cloud.png')} alt="" />
          <img className="cloud-icon1" src ={require('../Images/Cloud.png')}  alt="" />
          <img className="cloud-icon2" src ={require('../Images/Cloud.png')}   alt="" />
          <img className="cloud-icon3"  src ={require('../Images/Cloud.png')}  alt="" />
        </div> 
          
        {/*Graph ReCharts */}
              
        {/* Area Chart */}
          <div className="Graph">
            <ResponsiveContainer height={170} width={885} >
              <AreaChart
                width={400}
                height={100}
                data={data}
                margin={{
                  top: 30,
                  right: 30,
                  left: 10,
                  bottom: 0,
                }}>

                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                {/* Use 'value' as dataKey instead of 'uv' */}
                <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
              </AreaChart>
            </ResponsiveContainer>
            </div>
      </div>
      
      
      {/*More details of today's weather*/}
      <b className="more-details-of">More details of today's weather</b>

      
      
      {/*MiniBox Start */}
      
         {/*Humidity */}
         <div className="Humidity">
            <div className="humidity-group">
              <div className="minibox-5" />
              <div className="humidity">Humidity</div>
              <div className="humidity1">
                <div className="recbex" />
                <img className="water-icon" src={require('../Images/Water.png')} alt="" />
              </div>
              <div className="progress-text-humidity"><h2>83%</h2></div>
              <div className="progress-bar">
                <div className="progress" style={{ width: '83%' }}></div>
              </div>
            </div>
          </div>

        {/*Wind */} 
        <div className="wind-group">
        <div className="minibox-5" />
        <div className="wind">Wind</div>
        <div className="humidity1">
          <div className="recbex" />
          <img className="hot-icon"  src ={require('../Images/Wind.png')} alt="" />
        </div>
        <div className="progress-text-wind"><h2>8Km/hr</h2></div>
              <div className="progress-bar">
                <div className="progress" style={{ width: '8%' }}></div>
              </div>
      </div>

      {/*Precipitation */}
      <div className="precipitation-group">
        <div className="minibox-5" />
        <div className="precipitation">Precipitation</div>
        <div className="precipitation1">
          <div className="recbex" />
          <img className="hot-icon"  src ={require('../Images/Rain.png')} alt="" />
        </div>
        <div className="progress-text-precipitation"><h2>1.4cm</h2></div>
              <div className="progress-bar">
                <div className="progress" style={{ width: '1.4%' }}></div>
              </div>
      </div>
      


      {/*UV index */}
      <div className="uv-index-group">
        <div className="minibox-5" />
        <div className="uv-index">UV index</div>
        <div className="feels-like1">
          <div className="recbex" />
          <img className="hot-icon" src ={require('../Images/Weather.png')} alt="" />
        </div>
        <div className="progress-text-medium"><h2>4medium</h2></div>
              <div className="progress-bar">
                <div className="progress" style={{ width: '4%' }}></div>
              </div>
      </div>

      {/*Feels like */}
      <div className="feels-like-group">
        <div className="minibox-5" />
        <div className="feels-like">Feels like</div>
        <div className="feels-like1">
          <div className="recbex" />
          <img className="hot-icon" src ={require('../Images/Hot.png')}   alt="" />
        </div>
        <div className="progress-text-feelslike"><h2>30%</h2></div>
              <div className="progress-bar">
                <div className="progress" style={{ width: '30%' }}></div>
              </div>
      </div>

      {/*Chance of rain */}
      <div className="chance-of-rain-group">
        <div className="minibox-5" />
        <div className="chance-of-rain">Chance of rain</div>
        <div className="chance-of-rain1">
          <div className="recbex" />
          <img className="hot-icon" src ={require('../Images/Umbrella.png')}  alt="" />
        </div>
        <div className="progress-text-chanceofrain"><h2>42%</h2></div>
              <div className="progress-bar">
                <div className="progress" style={{ width: '42%' }}></div>
              </div>
      </div>
      
      {/*MiniBox Ends */}
      
    </div>
  );
};

export default Page;
