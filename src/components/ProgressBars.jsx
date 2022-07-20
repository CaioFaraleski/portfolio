import { AnimatePresence, motion } from "framer-motion";


export function ProgressBars({ text, percent }) {
  return (
    <div className="w-[25%]">
      <h1 className="text-lightGray text-3xl font-bold mb-3">{text}</h1>
      <div class="w-full bg-gray-200 rounded-full border border-lightRed">
        <AnimatePresence>
          <motion.div
            className="transition bg-lightRed py-5 rounded-full"
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

