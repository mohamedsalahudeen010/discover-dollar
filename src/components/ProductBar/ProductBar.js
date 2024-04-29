import React, { useContext } from "react";
import "./ProductBar.css";
import { StoreContext } from "../../Context";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "tippy.js/animations/perspective.css";
import "tippy.js/animations/scale.css";

import productImage from "./Products.png";

import { appliances, electronics, fashion, home, mobile } from "../../data";
import NestedList1 from "../NestedList/NestedList1";

function ProductBar() {
  const { filteredData,setFilteredData } = useContext(StoreContext);

 

  return (
    <div className="sideBar">
     
      <div className="sidebar-title">
        <img
          src="https://rukminim2.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100"
          alt="fashion"
          // onClick={()=>{dispatch(fetchProductsWithQuery("fashion"))}}
        />
        <div className="product-toy">
          <Tippy
            content={<NestedList1 items={mobile} prod="mobile"></NestedList1>}
            interactive={true}
            theme="light"
            offset={[5, 18]}
            animation="perspective"
          >
            <p>Mobile</p>
          </Tippy>
          <ExpandMoreIcon />
        </div>
      </div>

      <div className="sidebar-title">
        <img
          src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100"
          alt="fashion"
          // onClick={()=>{dispatch(fetchProductsWithQuery("fashion"))}}
        />
        <div className="product-toy">
          <Tippy
            content={<NestedList1 items={fashion} prod="fashion"></NestedList1>}
            interactive={true}
            theme="light"
            offset={[5, 18]}
            animation="perspective"
          >
            <p>Fashion</p>
          </Tippy>
          <ExpandMoreIcon />
        </div>
      </div>

      <div className="sidebar-title">
        <img
          src="https://rukminim1.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100"
          alt="electronics"
          //  onClick={()=>{dispatch(fetchProductsWithQuery("electronics"))}}
        />
        <div className="product-toy">
          <Tippy
            content={<NestedList1 items={electronics} prod="electronics"></NestedList1>}
            interactive={true}
            theme="light"
            offset={[5, 18]}
            animation="perspective"
          >
            <p>Electronics</p>
          </Tippy>
          <ExpandMoreIcon />
        </div>
      </div>

      <div className="sidebar-title">
        <img
          src="https://rukminim1.flixcart.com/flap/80/80/image/0ff199d1bd27eb98.png?q=100"
          alt="appliances"
          //  onClick={()=>{dispatch(fetchProductsWithQuery("appliances"))}}
        />
        <div className="product-toy">
          <Tippy
            content={<NestedList1 items={appliances} prod="appliances"></NestedList1>}
            interactive={true}
            theme="light"
            offset={[5, 18]}
            animation="perspective"
          >
            <p>Appliances</p>
          </Tippy>
          <ExpandMoreIcon />
        </div>
      </div>
      <div className="sidebar-title">
        <img
          src="https://rukminim1.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100"
          alt="furniture"
          //  onClick={()=>{dispatch(fetchProductsWithQuery("furniture"))}}
        />
        <div className="product-toy">
          <Tippy
            content={<NestedList1 items={home} prod="mobile"></NestedList1>}
            interactive={true}
            theme="light"
            offset={[5, 18]}
            animation="perspective"
          >
            <p>Home</p>
          </Tippy>
          <ExpandMoreIcon />
        </div>
      </div>
      <div className="sidebar-title">
        <img
          src="https://rukminim1.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100"
          alt="toys"
          //  onClick={()=>{dispatch(fetchProductsWithQuery("toys"))}}
        />
        <div className="product-toy">
          <Tippy
            content={<NestedList1 items={home} prod="mobile"></NestedList1>}
            interactive={true}
            theme="light"
            offset={[5, 18]}
            animation="perspective"
          >
            <p >Beauty and Toys</p>
          </Tippy>
          <ExpandMoreIcon />
        </div>
      </div>

      <div className="sidebar-title">
        <img
          src="https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100"
          alt="grocery"
          //  onClick={()=>{dispatch(fetchProductsWithQuery("grocery"))}}
        />
        <div className="product-toy">
          <p>Grocery</p>
        </div>
      </div>

      <div className="sidebar-title">
        <img
          src="https://rukminim2.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100"
          alt="toys"
          //  onClick={()=>{dispatch(fetchProductsWithQuery("toys"))}}
        />
        <div className="product-toy">
          <p>Travel</p>
        </div>
      </div>

      <div className="sidebar-title">
        <img
          src={productImage}
          alt="products"
          style={{ width: "4rem", borderRadius: "1rem", margin: "0.6rem" }}
        />
        <h6> Products</h6>
      </div>

    </div>
  );
}

export default ProductBar;
