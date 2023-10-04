import { Chart1 } from "../components/chart1";
import { Chart2 } from "../components/chart2";
import { Nav } from "../components/nav";
import { Sidebar } from "../components/sidebar"
import { Widget } from "../components/widget";

export const Home = () => {
    return (
    <div className = "home">
     <Sidebar/>
     <div className="container">
        <Nav/>
        <div className="widgets">
            <Widget type="user"/>
            <Widget type="agent"/>
            <Widget type="form"/>
            <Widget type="policy"/>
        </div>
        <div className="charts">
             <Chart1/>
              <Chart2/>
        </div>
     </div>
    </div>
    );
}