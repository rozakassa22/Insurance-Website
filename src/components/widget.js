import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ReorderIcon from '@mui/icons-material/Reorder';
import PolicyIcon from '@mui/icons-material/Policy';

export const Widget = ({type}) => {
    let data;
    const amount= 10000;
        switch (type) {
            case "user":
                data = {
                    title:"Total Users",
                    isUser: true,
                    icons:<PeopleAltIcon  style={{ color:"goldenrod",fontSize:"60px"}}/>
                };
                break;
            case "agent": 
                data = {
                    title:"Active Agents",
                    isUser: true,
                    icons:<SupportAgentIcon style={{ color:"green", fontSize:"60px"}} />,
                };
                break;
            case "form":
                data = {
                    title:"Pending Forms",
                    isUser: true,
                    icons:<ReorderIcon  style={{ color:"blue", fontSize:"60px"}} />
                };
                break;
            case "policy":
                data = {
                    title:"Active Policies",
                    isUser: true,
                    icons:<PolicyIcon style={{ color:"rgb(216, 33, 133)", fontSize:"60px"}} />
                };
                break;
                case "pending":
                    data = {
                        title:"Pending users",
                        isUser: true,
                        icons:<PeopleAltIcon  style={{color:"purple", fontSize:"60px"}} />
                       
                    };
                    break;
                    case "pendinga":
                    data = {
                        title:"Pending gents",
                        isUser: true,
                        icons:<SupportAgentIcon  style={{color:"purple", fontSize:"60px"}} />,
                        
                    };
                    break;
                    case "deactivated":
                    data = {
                        title:"Deactivated Users",
                        isUser: true,
                        icons:<PeopleAltIcon   style={{color:"crimson", fontSize:"60px"}} />
                    };
                    break;
                    case "deactivateda":
                        data = {
                            title:"Deactivated Agents",
                            isUser: true,
                            icons:<SupportAgentIcon  style={{color:"crimson", fontSize:"60px"}}/>,
                        };
                        break;
    

            default:
                break; 

        }

    return(<div className= "widget">
            <div className="left" >
            <span className="icons">{data.icons}</span>
            </div>
            <div className="right" >
                <span className="title">{data.title}</span>
                <span className="counter">{data.isUser && ""} {amount }</span> 
            </div>

    
    </div>
    );
}