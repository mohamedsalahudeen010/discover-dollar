
import Category from "./Catagory/Catagory";
import Colors from "./Colors/Colors";
import Price from "./Price/Price";
import "./SideBar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <div className="sidebar">
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </div>
    </>
  );
};

export default Sidebar;