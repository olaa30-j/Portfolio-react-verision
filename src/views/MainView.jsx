import { Outlet } from "react-router-dom"
import Aside from "../components/aside/Aside"

const MainView = () => {

    return (
        <div className="row" style={{minHeight: '100vh'}}>
            <Aside/>
            <Outlet/>
        </div>
    )
}

export default MainView