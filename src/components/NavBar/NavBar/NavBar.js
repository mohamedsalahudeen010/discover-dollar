import React, { useEffect, useRef, useState } from "react";
import "./NavBar.css";

import Dot from "@iconscout/react-unicons/icons/uil-bars";
import Cart from "@iconscout/react-unicons/icons/uil-shopping-cart";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "tippy.js/animations/perspective.css";
import "tippy.js/animations/scale.css";

import {
  Box,
  FormControlLabel,
  Paper,
  Slide,
  Switch,
  Zoom,
} from "@mui/material";
import SearchBar from "../../searchBar/SearchBar";
import LoginMore from "../../Login/LoginMore";
import More from "../../More/More";

function NavBar() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const showvalue = setTimeout(() => {
      setShow(false);
    }, 2000);

    return () => {
      clearTimeout(showvalue);
    };
  }, [show]);

  const handleOpen = () => {
    setOpen(true);
  };

  const ShowLogin = () => {
    return (
      <>
        <div className="showLogin">
          <div className="showLogin__button">
            <button>LOGIN</button>
          </div>
          <div className="showLogin__info">
            <div>
              <p>New customer?</p>
            </div>
            <div>
              <p style={{ color: "#2874f0" }}>Sign Up</p>
            </div>
          </div>
        </div>
      </>
    );
  };

 
  const [checked, setChecked] = useState(false);
  const containerRef = useRef(null);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className="nav-wrapper">
      <div className="nav-left">
        <div className="nav-left-1">
          <img
            src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_4ee2f9.png"
            alt="Flipkart"
          />
          <div className="nav-left-2">
            <span
              style={{
                fontSize: "11px",
                paddingRight: "2px",
                color: "white",
                fontStyle: "italic",
              }}
            >
              Explore
            </span>
            <span
              style={{
                color: "#F9E107",
                fontSize: "11px",
                fontStyle: "italic",
              }}
            >
              Plus
            </span>
            <span>
              <img
                width="10"
                className="logo"
                src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_b13a8b.png"
                alt=""
              />
            </span>
          </div>
        </div>
      </div>
      <div className="nav-centre">
        <SearchBar />
      </div>
      <div className="nav-right">
        <div className="nav-list">
          <ul>
            <div className="nav-right-1">
             {!show ? (
          <button onClick={handleOpen}>
            <Tippy
              content={<LoginMore></LoginMore>}
              interactive={true}
              offset={[5, 20]}
              theme="light"
              animation="scale"
            >
              <span>Login</span>
            </Tippy>
          </button>
        ) : (
          <Tippy
            content={<ShowLogin></ShowLogin>}
            interactive={true}
            theme="light"
            animation="perspective"
            visible={show}
          >
            <button>Login</button>
          </Tippy>
        )}
            </div>

            <div className="nav-right-2">
       
            <Tippy
          content={<More></More>}
          interactive={true}
          theme="light"
          offset={[5, 18]}
          animation="perspective"
        >
          <p className="tp">More</p>
        </Tippy>
        <ExpandMoreIcon />
      </div>
      <div onClick={() =>{}} className="nav-right-3">
      <Cart size={"2rem"} color={"white"}/>
        <p style={{ color: "white", fontWeight: "600" }}>Cart</p>
      </div>

      
            {/* <li onClick={()=>{}}>
                          <Cart size={"2rem"} color={"white"}/><sup
                           style={{color:"green",fontSize:"1rem"}}>2</sup>
                        </li> */}
          </ul>
        </div>
      </div>
      <div className="nav-check">
        <input
          type="checkbox"
          id="check-land"
          name=""
          value=""
          style={{ display: "none" }}
        ></input>
        <label
          htmlFor="check-land"
          className="check-label"
          style={
            checked
              ? { transform: "rotate(90deg)", transition: "all 0.6s" }
              : { transform: "rotate(0deg)", transition: "all 0.6s" }
          }
        >
          <Dot onClick={() => handleChange()} size={"2.5rem"} />
        </label>
      </div>

      <div
        className="land-dot-list"
        in={checked}
        container={containerRef.current}
      >
        <Zoom
          in={checked}
          container={containerRef.current}
          style={{ zIndex: "5" }}
        >
          <Paper
            sx={{ m: 1, width: 100, height: 100 }}
            elevation={1}
            style={{ zIndex: "5" }}
          >

<li>
            <div className="nav-right-2">
       
       <Tippy
     content={<More></More>}
     interactive={true}
     theme="light"
     offset={[5, 18]}
     animation="perspective"
   >
     <p className="tp">More</p>
   </Tippy>
   <ExpandMoreIcon />
 </div>
            </li>
            <li>
            <div className="nav-right-2">
       
       <Tippy
     content={<More></More>}
     interactive={true}
     theme="light"
     offset={[5, 18]}
     animation="perspective"
   >
     <p className="tp">More</p>
   </Tippy>
   <ExpandMoreIcon />
 </div>
            </li>
            <li>
            <div className="nav-right-1">
             {!show ? (
          <button onClick={handleOpen}>
            <Tippy
              content={<LoginMore></LoginMore>}
              interactive={true}
              offset={[5, 20]}
              theme="light"
              animation="scale"
            >
              <span>Login</span>
            </Tippy>
          </button>
        ) : (
          <Tippy
            content={<ShowLogin></ShowLogin>}
            interactive={true}
            theme="light"
            animation="perspective"
            visible={show}
          >
            <button>Login</button>
          </Tippy>
        )}
            </div>
            </li>

            <li>
            <div onClick={() =>{}} className="nav-right-3">
      <Cart size={"2rem"} color={"white"}/>
        <p style={{ color: "white", fontWeight: "600" }}>Cart</p>
      </div>
            </li>
          </Paper>
        </Zoom>
      </div>
    </div>
  );
}

export default NavBar;
