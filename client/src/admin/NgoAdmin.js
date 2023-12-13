// import Header from './Header';
//  import {GoOrganization} from 'react-icons/go';

// import Sidebar from "../Sidebar";
import SidebarNGO from "./SidebarNGO";
import updateProfileNGO from "../UpdateProfileNGO";
import NGODashboard from "../NGODashboard";

// import { Link } from "react-router-dom";
// import NgoPage from "./NgoPage";


export default function NgoAdmin() {
    return (<>
        {/* <Header/> */}
        <div className="flex w-full">

            <SidebarNGO/>
            {/* <updateProfileNGO/> */}
            <NGODashboard/>
        </div>


    </>)
}