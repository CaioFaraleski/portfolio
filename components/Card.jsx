import linkImage from "../assets/images/link.png";

export function Card({ img, title, link }) {
return (
  <a href={link} className={`no w-[28rem] flex flex-col items-center my-7 mx-5 rounded-md cursor-pointer transition hover:scale-110`}>
      <figure className="no w-[95%] flex justify-center mt-3 bg-[#161616]">
        <img src={img} alt={title} className="no w-[90%] py-[2rem] shadow-[0_0_7px_-3px_black]" />
      </figure>
      <div className="no w-[95%] mt-3 flex justify-between items-center text-white text-2xl font-bold">
        {title}
      </div>
      <div className="no w-[95%] flex justify-start items-center text-lightRed text-md">
        See work <img src={linkImage.src} className="no h-3 mx-2" alt="link" />
      </div>
  </a>
)
}
