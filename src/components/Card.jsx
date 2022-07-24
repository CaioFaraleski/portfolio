import { AnimatePresence, motion } from "framer-motion";

export function Card({ img, title }) {
return (
  <div className={`no h-[40%] w-[40%] flex flex-col items-center my-7 bg-lightGray cursor-pointer transition hover:scale-125`}>
      <figure className="no w-[95%] mt-3">
        <img src={img} alt={title} className="no w-full" />
      </figure>
      <div className="w-[95%] flex justify-between text-lightRed">
        <h1 className="text-lg">{title}</h1>
        <figure className="h-5">
          <img src="https://caiofaraleski.github.io/portfolio/src/assets/images/link.png" alt={`link to ${title} project`} className="h-full" />
        </figure>
      </div>
  </div>
)
}
