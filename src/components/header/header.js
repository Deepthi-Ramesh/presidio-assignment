import  { useEffect } from 'react';
import "./header.css"
import image  from  './adobe.png';
import mainlogo from './mainlogo.png';
import createcloud from './creativecloud.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell} from '@fortawesome/free-solid-svg-icons/faBell';
import { useState } from 'react';
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {faArrowRight} from '@fortawesome/free-solid-svg-icons/faArrowRight'
import {faUserLock} from '@fortawesome/free-solid-svg-icons/faUserLock';
import DropDown from '../dropdown/dropdown';
import {faFileSignature} from '@fortawesome/free-solid-svg-icons/faFileSignature';
import {faFileImage} from '@fortawesome/free-solid-svg-icons/faFileImage';
import {faUserGroup} from '@fortawesome/free-solid-svg-icons/faUserGroup';
import {faCirclePlay}from '@fortawesome/free-solid-svg-icons/faCirclePlay';
import {faFile} from '@fortawesome/free-solid-svg-icons/faFile';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {faScrewdriverWrench} from '@fortawesome/free-solid-svg-icons/faScrewdriverWrench'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons/faGraduationCap';
import {faPaperclip} from '@fortawesome/free-solid-svg-icons/faPaperclip';
import {faShapes}from '@fortawesome/free-solid-svg-icons/faShapes';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons/faCaretDown'
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
function Header({sortCategories, selectedCategory, setSelectedCategory,media}){
    const subNavigationItems = ["Projects", "Assets", "Images", "Prototypes", "Streams", "People", "Moodbrands"]
    const freetraiItems = ["Creative cloud","Photoshop","illustrator","Indesign","Express","premeire"];
    const [selectedSubNavigation, setselectedSubNavigation] = useState("Projects");
    const headerNavigationItems = ["For You", "Discover", "Hire", "Assets", "Jobs"];
    const [locked, setLocked] = useState(false);
    const [lockedadobe, setLockedadobe] = useState(false);
    const [openDropDown, setOpenDropDown] = useState(false);
    const [search,setSearch] = useState(null);
    const [projects, setProjects] = useState(["design", "development", "design", "development", "design", "development", "graphic", "art", "paint", "flowers", "icons", "templates", "ui-ux", "coding", "fashion", "Adobe", "Agency", "Artist", "Brand" ,"Client", "Color", "Concepts", "Creative", "Design", "Detail", "Digital", "Graphic", "Illustrator", "InDesign", "Layout", "Marketing", "Media", "Photoshop", "Portfolio", "Print", "Production", "Strategy", "Typography", "Visual", "Web" ]);

    const [filteredProjects, setFilteredProjects] = useState([]);


    const handleSubNavigation = (item) => {
        setselectedSubNavigation(item);
    }

    const [showSort, setShowSort] = useState(false);

    useEffect(() => {
        if(search) {
            let stringLength = search?.length;
            if(stringLength) {
                const filteredProj = projects.filter((project) => project.slice(0, stringLength).toLowerCase() === search.toLowerCase()).slice(0,5);
                console.log(filteredProj);
                setFilteredProjects(filteredProj);
            }
        }
        else {
            setFilteredProjects(projects.slice(0,5));
        }
        
    }, [search]);

    const handleSelectedCategory = (category) => {
        setSelectedCategory(category);
        setShowSort(false);
    }
    console.log(media);
    return (
        <>
        <div className='main_container'>
         <div className='nav-bar'>
            <div className='nav_items1'>
                
                <img src={ mainlogo}  alt=" " id="logo"/>
               { headerNavigationItems ?.length > 0 && headerNavigationItems.map((item)=>(
                <div id='each-nav'>{item}</div>
               ))
}
            </div>
            <div className='nav_items2'>
                 <FontAwesomeIcon icon={faBell} size='1.5rem' cursor={'pointer'}/>
                 <div className='cred'>
                {!media ?  <button id='login'>Log In</button> : null}
                
                 <button id='signup'>{!media? "Sign Up":"Use App"}</button>
                 </div>
                
                {!media?<p>|</p>:null } 
                 
                 <div id='freetrail' onMouseEnter={() => setLocked(true)} onMouseLeave={() => setLocked(false)}><img src={createcloud} alt=''/>Free Trail</div>
                 {!media ? <img src={image} alt='' id='adobe' onMouseEnter={() => setLockedadobe(true)} onMouseLeave={() => setLockedadobe(false)}/> : <FontAwesomeIcon icon={faSearch}/>}
                 
            </div>
         </div>
         <div className='search-bar' style={{borderBottomLeftRadius: openDropDown && 0}}>
            <div id="search-bar" style={{background : openDropDown && "white" }}>
                <FontAwesomeIcon icon={faSearch} size='xl'/>
                <input type="text" placeholder="Search the creative world at work" onFocus={() => setOpenDropDown(true)} onBlur={() => setOpenDropDown(false)} onChange={(e) => setSearch(e.target.value)} style={{background : openDropDown && "white" }}/>
                {openDropDown && 
                    <div className='search-auto-complete'>
                        <div className='projects-title'>
                            {search ? "PROJECTS" : "Suggested Searhes"}
                        </div>
                        <div className='project-list'>
                            {filteredProjects?.length > 0 && filteredProjects.map((project) => (
                                <div className='project'>{project}</div>
                            )) }
                        </div>
                        {search && <div className='search-for'>
                            Search for {search} in
                        </div>}
                        <p>SORT & FILTER ALL</p>
                        <div className='search-categories'>
                         
                            <div id='categories'>
                                <FontAwesomeIcon icon={faFileSignature} />
                                <p>Projects</p>
                                <KeyboardArrowRightIcon/>
                            </div>
                            <div id='categories'>
                                <FontAwesomeIcon icon={faFileImage} />
                                <p>Images</p>
                                <KeyboardArrowRightIcon/>
                            </div>
                            <div id='categories'>
                                <FontAwesomeIcon icon={faCirclePlay} />
                                <p>Prototypes</p>
                                <KeyboardArrowRightIcon/>
                            </div>
                            <div id='categories'>
                                <FontAwesomeIcon icon={faUserGroup} />
                                <p>People</p>
                                <KeyboardArrowRightIcon/>
                            </div>
                            <div id='categories'>
                                <FontAwesomeIcon icon={faFile} />
                                <p>Assets</p>
                                <KeyboardArrowRightIcon/>
                            </div>
                            <div id='categories'>
                                <FontAwesomeIcon icon={faUser} />
                                <p>People to hire</p>
                                <KeyboardArrowRightIcon/>
                            </div>
                            
                            
                        </div>
                    </div>
                }
            </div>
            {subNavigationItems?.length > 0 && subNavigationItems.map((item) => (
                <div id={selectedSubNavigation !== item ? 'clickbg' : 'black'} onClick={(e) => handleSubNavigation(item)} >{item}</div>
            ))}
         </div>
         {media?<div className='tools-bar'>
            <div className='subscriptions'>
                 <FontAwesomeIcon icon={faShapes} /><p>creative Fields</p>
            </div>
            <div className='subscriptions'>
                 <FontAwesomeIcon icon={faScrewdriverWrench} /><p>Tools</p>
            </div>
 
            <div className='subscriptions'>
              <ColorLensOutlinedIcon/><p>Color</p>
            </div>
            <div className='subscriptions'>
                <FontAwesomeIcon icon={faLocationDot} /><p>Location</p>
            </div>
            <div className='subscriptions'>
                 <FontAwesomeIcon icon={faGraduationCap} /><p>schools</p>
            </div>
            <div className='subscriptions'>
                 <FontAwesomeIcon icon={faPaperclip} /><p>Assets</p>
            </div>
            <div className='subscriptions'>
                 <FontAwesomeIcon icon={faUserLock} /><p>Subscriptions</p>
            </div>
            <div className='sort' onClick={()=> setShowSort(!showSort)}>
                <p>Sort</p>
                <p>{selectedCategory}<FontAwesomeIcon icon={faCaretDown}/></p>
            </div>
          </div> : null}
         
         
        </div>
        {showSort && <div><DropDown sortCategories={sortCategories} handleSelectedCategory={handleSelectedCategory}/></div>}
         {
            locked && 
            // <div className='main-modal'>
                <div className="Modal ">
                    <h3>Created for creatives</h3>
                    <p id='para'>Apps, fonts, tutorials, stock images, and more for your creative journey.</p>
                    <div className='trail-grid'>
                        {freetraiItems?.length > 0 && freetraiItems.map((item)=>(
                            <div id='each-trail'><img src={createcloud} id='trail-icon' alt=''
                            /><p>{item}</p></div>
                        ))}
                    </div>
                    <button id='adobebtn'>See more at Adobe.com</button>
                </div>
            // </div>
        }
         {
            lockedadobe && 
                <div className="Modal-adobe">
                     <div className='adobe-items'>
                        <img src={createcloud} alt='' id='trail-icon'/>
                        <div>
                            <h4>Go to adobe.com</h4>
                            <p>Access your services,files,and more.</p>
                            
                            </div>
                            <FontAwesomeIcon icon={faArrowRight} size='xl' color='#0057ff'/>
                        </div>
                       
                    <div className='adobe-items'>
                        <img src={createcloud} alt='' id='trail-icon'/>
                        <div>
                           <h4>Go to adobe.com</h4>
                           <p>Access your services,files,and more.</p>
                         </div>
                         <FontAwesomeIcon icon={faArrowRight} size='xl' color='#0057ff'/>
                     </div>
                        <div className='adobe-items'>
                            <img src={createcloud} alt='' id='trail-icon'/>
                         <div>
                           <h4>Go to adobe.com</h4>
                           <p>Access your services,files,and more.</p>
                         </div>
                         <FontAwesomeIcon icon={faArrowRight} size='xl' color='#0057ff'/>
                       </div>
                </div>
        }

        </>
    )
}
export default Header;
