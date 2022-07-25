import { AnimatePresence, motion } from "framer-motion";

export function Card({ img, title, link }) {
return (
  <div className={`no w-[28rem] flex flex-col items-center my-7 bg-lightGray cursor-pointer transition hover:scale-110`}>
      <figure className="no w-[95%] mt-3">
        <img src={img} alt={title} className="no w-full shadow-[0_0_7px_-3px_black]" />
      </figure>
      <div className="no w-[95%] my-2 flex justify-between items-center text-lightRed">
        <h1 className="no text-2xl font-bold">{title}</h1>
        <a href={link} className="no h-6 group" target="_blank">
          <img src="https://caiofaraleski.github.io/portfolio/src/assets/images/link.png" alt={`link to ${title} project`} className="no h-full group-hover:brightness-50" />
        </a>
      </div>
  </div>
)
}
