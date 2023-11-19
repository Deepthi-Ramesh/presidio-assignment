import React from "react";
import "./footer.css";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
function Footer(){
    return(
        <div className="maincontainer">
           <div className="con1">
         
           <span id='under'>Sign up</span>or <span id='under'>Sign in</span>  to your account to view more work personalized to your preferences.
            
           </div>
           <div className="con2">
            <button >Sign Up with Email</button>
           
           <p>or</p><div className="icons-div">
            <p id='icon' ><AppleIcon size='1.2rem'/></p>
            <FacebookRoundedIcon sx={{
                fontSize: "2.8rem",
                color:"#0057ff"
            }}/>
            <p id='icon'><GoogleIcon/></p>
            </div>
           
          

            
           </div>
        </div>
    )
}
export default Footer;