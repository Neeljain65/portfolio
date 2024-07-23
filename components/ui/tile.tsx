import {motion} from 'framer-motion';
const Tile = () => {
    return (
        <motion.div whileHover={{zIndex:1,backgroundColor:"#7c3aed"}} transition={{duration:1,ease:"easeOut"}} className="aspect-square bg-black-100 border-neutral-900 " />
    )
}
export default Tile;