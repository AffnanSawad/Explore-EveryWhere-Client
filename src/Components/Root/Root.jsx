import { Outlet } from "react-router-dom";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";


const Root = () => {
    return (
        <div className="max-w-7xl mx-auto gap-10 ">
            
    

    <Nav> </Nav>
       <Outlet>  </Outlet>
    

    <div className="mt-10">

    <Footer> </Footer>

    
    </div>


        </div>
    );
};

export default Root;