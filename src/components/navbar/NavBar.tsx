import {motion} from "framer-motion"
import "./navbar.scss"
import SideBar from "../sidebar/SideBare";
function NavBar() {
    return ( 
        <div className="navbar">
            {/* sideBar */}
                <SideBar/>            <div className="wrapper">
                <motion.span
                   initial={{scale: 0.5,opacity: 0}}
                   animate={{scale: 1, opacity: 1}}
                   transition={{ duration: 0.5}}
                >   
                    AYEL
                </motion.span>
                <div className="socials">
                    <a href="#"><img src="/facebook.png" alt="" /></a>
                    <a href="#"><img src="/instagram.png" alt="" /></a>
                    <a href="#"><img src="/youtube.png" alt="" /></a>
                    <a href="#"><img src="/dribbble.png" alt="" /></a>
                </div>
            </div>
        </div>
     );
}

export default NavBar;