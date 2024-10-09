import {motion} from "framer-motion"

type vari = {
    open : any,
    closed : any
    }

const variants:vari = {
    open : {
        transition : {
            staggerChildren : 0.1,
        }
    },
    closed : { 
        transition : {
            staggerChildren : 0.05,
            staggerDirection : -1
        }
    }
}

const itemsVariants:vari = {
    open : {
        y:0,
        opacity:1,
    },
    closed : { 
        y:50,
       opacity:0,
    }
}
function Links() {

    const items:string[] = ["HomePage","Services","Portfolio","Contact","About"];

    return ( 
        <motion.div className="links" variants={variants}>
            {
                items.map((item:string,id:number)=>{
                     return <motion.a href={`#${item}`} key={id} variants={itemsVariants}
                     whileHover={{scale:1.1}}
                     whileTap={{scale:0.95}}>
                                {item}
                        </motion.a>
                })
            }
        </motion.div>
     );
}

export default Links;