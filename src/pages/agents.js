import { Nav } from "../components/nav";
import { Sidebar } from "../components/sidebar";
import { Table } from "../components/table";
import { Widget } from "../components/widget";

export const Agent = () => {
    return(
        
        <div className="list">
            <Sidebar/>
            
            <div className="container">
                <Nav/>
             <div className="widgets">
                <Widget type="agent"/>
                <Widget type="pendinga"/>
                <Widget type="deactivateda"/>
             </div>
                
                <div className="listContainer">
                    <Table/>
                </div>
            </div>
            

        </div>
    );
}