import {motion} from "framer-motion";
import "./services.scss"

const allVariants = {
    initial : {
        x:"-100%",
        opacity:0
    },
    animate : {
        x:0,
        opacity:1,
        transition:{
            duration:1.5,
        }
    }
}
const Services = () => {

    
    return (
        <motion.div className="services" >
            <motion.div className="textContainer"  initial="initial"  variants={allVariants} whileInView={"animate"}>
                <p>I focus on helping your brand grow <br /> and more forward</p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" >
                <motion.div className="title" initial="initial"  variants={allVariants} whileInView={"animate"}>
                    <motion.img src="/people.webp" alt="" />
                    <motion.h1>
                        <motion.b whileHover={{color:"orange"}}>
                            Unique
                        </motion.b> Ideas
                    </motion.h1>
                </motion.div>
                <motion.div className="title" initial="initial"  variants={allVariants} whileInView={"animate"}>
                    <motion.h1>
                        <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
                    </motion.h1>
                    <motion.button>WHAT WE DO?</motion.button>
                </motion.div>
                
            </motion.div>
            <motion.div className="listContainer" initial="initial"  variants={allVariants} whileInView={"animate"}>
                <div className="box">
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis corporis dicta enim repellendus repellat! Dolore debitis quae facilis sunt nulla fuga? Doloribus sit laboriosam consequatur necessitatibus dolorum sint, fugit voluptas!
                    </p>
                    <button>Go</button>
                </div>
                <div className="box">
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis corporis dicta enim repellendus repellat! Dolore debitis quae facilis sunt nulla fuga? Doloribus sit laboriosam consequatur necessitatibus dolorum sint, fugit voluptas!
                    </p>
                    <button>Go</button>
                </div>
                <div className="box">
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis corporis dicta enim repellendus repellat! Dolore debitis quae facilis sunt nulla fuga? Doloribus sit laboriosam consequatur necessitatibus dolorum sint, fugit voluptas!
                    </p>
                    <button>Go</button>
                </div>
                <div className="box">
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis corporis dicta enim repellendus repellat! Dolore debitis quae facilis sunt nulla fuga? Doloribus sit laboriosam consequatur necessitatibus dolorum sint, fugit voluptas!
                    </p>
                    <button>Go</button>
                </div>
            </motion.div>
        </motion.div>
    )
}
export default Services;