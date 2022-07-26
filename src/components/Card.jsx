import { AnimatePresence, motion } from "framer-motion";

export function Card({ img, title, link }) {
return (
  <a href={link} className={`no w-[28rem] flex flex-col items-center my-7 bg-lightGray rounded-md cursor-pointer transition hover:scale-110`}>
      <figure className="no w-[95%] mt-3">
        <img src={img} alt={title} className="no w-full shadow-[0_0_7px_-3px_black]" />
      </figure>
      <div className="no w-[95%] my-2 flex justify-between items-center text-lightRed">
        <h1 className="no text-2xl font-bold">{title}</h1>
      </div>
  </a>
)
}
