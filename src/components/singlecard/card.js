import React, { useEffect, useState } from "react";
import "./card.css";
import image from "./be.png";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons/faThumbsUp';
import {faEye} from '@fortawesome/free-solid-svg-icons/faEye';
import {faFolderOpen} from '@fortawesome/free-solid-svg-icons/faFolderOpen';
import {faXmark} from '@fortawesome/free-solid-svg-icons/faXmark' ;
function Card(props){
  
    const { img ,  productname ,descripition , likes , views} = props;
    

    const [locked, setLocked] = useState(false);
    const [clicked, setClicked] = useState(false);
    const[liked,setLiked]=useState(false);
    function funLike(event){
        // console.("event : ", event);
        event.stopPropagation();
        setLiked(!liked);
        
    }

    useEffect(() => {
        console.log("clicked : ", clicked);
    }, [clicked]);
  
 
    return(
        <>
            <div className="product" onClick={()=>{setClicked(true)}} onMouseEnter={() => setLocked(true)} onMouseLeave={() => setLocked(false)} >
                <div className="imgpart">
                    <img src={img} alt=" "/>
                </div>
                <div className="product-description">
                    <div className="product-des1">
                        <p className="productname">{productname}</p>
                        <div className="icons">
                            <p className="like"><FontAwesomeIcon icon={faThumbsUp} onClick={(e) => funLike(e)} color={liked?"#f20a0":"#959595"}/>{likes}</p>
                            <p className="view"><FontAwesomeIcon icon={faEye} color="#959595" />{views}</p>
                        </div>
                     
                        </div>
                    <div>
                    <p className="descripition">{descripition}</p>
                    </div>
                </div>
                { locked && <div className="locked-product">
                  <div className="product-hover">
                  <div className="saveicon"><FontAwesomeIcon icon={faFolderOpen} color="#fff"/><p>save</p></div>
                  <div id='blue-icon'><img src={image} alt=''/></div>
                  </div>
                </div>}
            </div>
        {
            clicked && 
            <div className="viewModal">
              <div className="cross">  <FontAwesomeIcon icon={faXmark} color="#fff" size="xl" onClick={()=>{
         
                    setClicked(false)
                }}/></div>
             
                <div id='modalimg'><img src={img} alt=""/></div>
            </div>
        }
        
        </>
    )
}
export default Card