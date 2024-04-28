import { useContext, useEffect, useState } from "react";
import "./Home.css";

import ProductBar from "../../components/ProductBar/ProductBar";
import MainBase from "../../components/NavBar/NavBar/Base";
import Dot from "@iconscout/react-unicons/icons/uil-bars"
import Card from "../../components/Card/Card";
import Sidebar from "../../components/SideBar/SideBar";
import { StoreContext } from "../../Context";
import Corousal from "../../components/Corousal/Corousal";
import Corousal2 from "../../components/Corousal/Corousal2";

// import { Spinner } from 'react-bootstrap'

function Home() {
  const { product,corousalImage } = useContext(StoreContext);
  const [checked, setChecked] =useState(false);
  useEffect(() => {}, []);

  const handleChange = () => {
    console.log("Handle Cahnge");
  };

  return (
    <MainBase>
      <div className=" productPage-land">
        <div className="sideBar-land">
          <ProductBar />
        </div>

        <div className="home-body">
          <div className="home-body-left">
            
          <div className='nav-check'>
          <input type="checkbox" id="check-land" name="" value="" style={{display:"none"}}></input>
          <label htmlFor='check-land' className='check-label'
          style={checked?{transform:"rotate(90deg)",transition:"all 0.6s"}:
          {transform:"rotate(0deg)",transition:"all 0.6s"}}><Dot
          onClick={()=>handleChange()} size={"2.5rem"}/></label>
        </div>
            <div>

            <Sidebar handleChange={handleChange} />
            </div>
          </div>
          <div className="home-body-right">
          <Corousal corousalImage={corousalImage}/>
            <Corousal2 corousalImage={product}/>
              
            
            {product &&
              product.map((prod) => (
                <div className="card-land">
                  <Card
                    offerPrice={2000}
                    image={prod.image}
                    name={prod.name}
                    rating={4.2}
                    actualPrice={2200}
                  />
                </div>
              ))}
          </div>
        </div>

        {/* {  loading? 
      <div className="row justify-content-center b "> 
      <Spinner animation="border" variant="dark" size='xl' /></div>
     
      :
      <div className="row justify-content-center b ">
            
        {product &&
          product.map((prod) => (
            <div className="col-xl-2 col-md-3 col-sm-4 col-xs-5 card-land" key={prod._id}>
              <ProductCardMain product={prod} />
              
              </div>
          ))}
          </div>
} */}
      </div>
    </MainBase>
  );
}

export default Home;
