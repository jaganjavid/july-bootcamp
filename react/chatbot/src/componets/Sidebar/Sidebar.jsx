import { useState } from "react";
import { assets } from "../../assets/assets"
import "./Sidebar.css";

const Sidebar = () => {


  const [extented, setExtended] = useState(false);


  return (
    <div className='sidebar'>
        <div className="top">
          <assets.IoMdMenu size={30} color="black" className="menu"
          onClick={() => setExtended(prev => !prev)}/>

          <div className="new-chat">
              <assets.FiPlus size={20} color="grey"/>
             {extented && <p>New Chat</p> } 
          </div>
          
          {extented && (<div className="recent">
            <div className="recent-title">
              Recent
            </div>
            <div className="recent-entry">
              <assets.FiMessageSquare size={20} color="black"/>
              <p>What is react...</p>
            </div>
          </div>)}

        </div>
        <div className="bottom">

            <div className="bottom-item recent-entry">
               <assets.IoHelpCircleOutline size={20} color="black"/>
               {extented && <p>Help</p>}
            </div>

            <div className="bottom-item recent-entry">
               <assets.IoTimerOutline size={20} color="black"/>
               {extented && <p>Activity</p>}
            </div>

            <div className="bottom-item recent-entry">
               <assets.IoSettingsOutline size={20} color="black"/>
               {extented && <p>Settings</p>}
            </div>

        </div>
    </div>
  )
}

export default Sidebar