import { motion } from "framer-motion"
const LoadingScreen = ({ loading }) => {
    return <motion.div
        variants={{
            open: { opacity: 1, x: 0 },
            closed: { opacity: 0, x: "-100%" }
        }} animate={loading ? "open" : "closed"}
        transition={{ duration: 0.75, type: "spring" }}
        className="flex justify-center items-center fixed top-0 left-0 h-screen w-screen z-30 bg-white">

        <div className=" flex items-center justify-center text-3xl animate-bounce"><img src="/icon.jpg" alt="" width={"45px"} height={"45px"} /> Loading...</div>
    </motion.div>
}

export default LoadingScreen