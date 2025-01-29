import Menubar from "./Menubar"
import {Link,useNavigate} from "react-router-dom";
import logo from "../assets/Logo.png";
//Importing customized button
import Button from "./Button";

//Header component
const Header = () => {


  //creating variable for navigate
  const navigate = useNavigate();
  return (
    <header className="header flex justify-between items-center text-gray-300 py-[1rem] px-[0.8rem]">
        <Link className="logo" to="/">
        <img src={logo} alt="nft logo" />
        </Link>
        <Menubar />
        <div className="call-to-action-btns flex gap-4">
            <Button text="Contact" onClick={() => navigate('/contact')} className="contact-btn border-[1px] border-gray-400"/>
            <Button text="My Account" onClick={() => navigate('/account')} className="account-btn text-gray-300 bg-[#2A27C9] border-[1px] border-[#2A27C9]"/>
        </div>
    </header>
  )
}

export default Header