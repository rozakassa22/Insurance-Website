import {Link} from "react-router-dom";

export const Sidebar = () => {
    return (
        <>
        <input type="checkbox" id="icon"/>
        <div className="sidebar">
           <div className = "body">  
                <ul>
                    <li>
                        <Link className = "underline" to = "/"><span>Dashboard</span></Link>
                    </li>     
                    <li>   
                    <Link className = "underline" to = "/agents"><span>Agents</span></Link>
                    </li>
                    <li>      
                    <Link className = "underline" to = "/forms"><span>Forms</span></Link>
                    </li>
                    <li>      
                    <Link className = "underline" to = "/policy"> <span>Policies</span></Link>
                    </li>
                    <li>  
                    <Link className = "underline" to = "/users"><span>Users</span></Link>
                    </li>
                    <li className="bot">  
                    <Link className = "underline" to = "/settings"> <span>Settings</span></Link>
                    </li>
                </ul>
            </div>
        
        </div>
    </>
    );
}