
import "./sticky.css";
import adobe from './adobe-black8153.jpg';
function Sticky(){
    return(
        <div className='main-container'>
            <div className='container-1'>
               <div id='more'>More Balance</div>
               <div id='more' >English</div>
               <div>TOU</div>
               <div>Privacy</div>
               <div>Community</div>
               <div>Help</div>
               <div>Cookie preferences</div>
               <div>Do not sell or share my personal Information</div>
            </div>
            <div className='container-2'>
                <img src={adobe} alt=''/>
            </div>
        </div>

    )
}
export default Sticky;