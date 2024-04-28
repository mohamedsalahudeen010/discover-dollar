import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GetAppIcon from "@mui/icons-material/GetApp";

const More = () => {
  return (
    <div className="moret">
      <div className="moret__in">
        <NotificationsIcon  style={{width:"2rem",zIndex:"3"}}/>
        <p>Notification Preferences</p>
      </div>
      <hr />
      <div className="moret__in">
        <MonetizationOnIcon style={{width:"2rem"}}/>
        <p>Sell on Flipkart</p>
      </div>
      <hr />
      <div className="moret__in">
        <LiveHelpIcon style={{width:"2rem"}}/>
        <p>24*7 Customer Care</p>
      </div>
      <hr />
      <div className="moret__in">
        <TrendingUpIcon style={{width:"2rem"}}/>
        <p>Advertise</p>
      </div>
      <hr />
      <div className="moret__in">
        <GetAppIcon style={{width:"2rem"}}/>
        <p>Download app</p>
      </div>
    </div>
  );
};

export default More;