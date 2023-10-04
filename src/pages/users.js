import { Datatable } from "../components/datatable";
import { Nav } from "../components/nav";
import { Sidebar } from "../components/sidebar";
import { Widget } from "../components/widget";

export const User = () => {
    return(
        
        <div className="list">
            <Sidebar/>
            
            <div className="container">
                <Nav/>
               <div className="widgets">
                    <Widget type="user"/>
                    <Widget type="pending"/>
                    <Widget type="deactivated"/>
                </div>
               
                <div className="listContainer">
                    <Datatable/>
                </div>
            </div>
            

        </div>
    );
}