import { Nav } from "../components/nav";
import { Sidebar } from "../components/sidebar";
import { Tablepolicy } from "../components/tablepolicy";


export const Policy = () => {
    return(
        
        <div className="list">
            <Sidebar/>
            
            <div className="container">
           
                <Nav/>
                <div className="listContainer">
                    <Tablepolicy/>
                </div>
            </div>
            

        </div>
    );
}