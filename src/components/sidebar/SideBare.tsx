import { useState } from "react";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";
import {motion} from "framer-motion";
import "./sidebar.scss"

const SideBar:React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const variants = {
        open : {
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 20,
            }
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 450  ,
                delay : 0.35,
                damping : 50,
            }
        }
    }
    return ( 
        <motion.div className="sidebar" animate={open ? "open" : "closed"} >
            <motion.div className="bg" variants={variants}>
                <Links/>
            </motion.div>
            <ToggleButton setOpen={setOpen} />
        </motion.div>
     );
}

export default SideBar;