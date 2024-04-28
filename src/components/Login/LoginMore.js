import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import StoreIcon from "@mui/icons-material/Store";
import "./LoginMore.css";

const LoginMore = () => {
  return (
    <div className="logint">
      <div className="logint__i">
        <h2>New customer</h2>
        <p>Signup</p>
      </div>
      <hr />
      <div className="logint__in">
        <AccountCircleIcon style={{width:"2rem"}}/>
        <p>My Profile</p>
      </div>
      <hr />
      <div className="logint__in">
        <img
          width="30"
          src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_b13a8b.png"
          alt=""
        />
        <p>Flipkart Plus</p>
      </div>
      <hr />
      <div className="logint__in">
        <StoreIcon style={{width:"2rem"}} />
        <p>Orders</p>
      </div>
      <hr />
      <div className="logint__in">
        <FavoriteIcon style={{width:"2rem"}}/>
        <p>Wishlist</p>
      </div>
      <hr />
      <div className="logint__in">
        <ConfirmationNumberIcon style={{width:"2rem"}}/>
        <p>Rewards</p>
      </div>
      <hr />
      <div className="logint__in">
        <CardGiftcardIcon style={{width:"2rem"}}/>
        <p>Gift Cards</p>
      </div>
    </div>
  );
};

export default LoginMore;