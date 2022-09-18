import { AnimatePresence, motion } from "framer-motion";


export function ProgressBars({ text, percent }) {
  return (
    <div className="w-[55%] lg:w-[45%]">
      <h1 className="text-lightGray text-lg font-bold mb-1">{text}</h1>
      <div className="w-full bg-gray-200 rounded-full bg-[#323232]">
        <AnimatePresence>
          <motion.div
            className="transition bg-lightRed py-1 rounded-full"
            style={{width: `${percent}%`}}
            initial="enter"
            animate="in"
            exit="exit"
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 50,
              width: {
                duration: 1
              }
            }}
            variants={{
              enter: {width:"0%", opacity: 0},
              in: {width:`${percent}%`, opacity: 1},
              exit: {opacity: 0},
            }}
          >
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

