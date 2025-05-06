import { Outlet } from "react-router-dom";
import TopNav from "./component/TopNav";
import Footer from "./component/Footer";


const Layout = ()=>{
    return(
        <>
        <TopNav/>
        <main style={{margin:"50px"}} >
            <Outlet/>
        </main>

        <Footer/>
        </>
    )
}

export default Layout;