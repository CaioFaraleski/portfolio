import { useEffect } from "react";
import { Content } from "../components/Content";

export function Home() {

  return (
    <div className="home h-screen w-screen bg-black flex justify-between items-center relative">
      <Content />
      {/* <figure className="p-0 m-0 w-[60%] self-end">
        <img className="w-full" src="./src/assets/images/test4.png" alt="" />
      </figure> */}
      <div className="h-60 flex flex-col justify-evenly items-center text-white mr-4">
        <a
          className="h-10 w-10 mx-3 bg-white rounded-full flex justify-center items-center group transition-transform hover:scale-150 hover:m-0"
          href="https://github.com/CaioFaraleski"
        >
          <img className="h-3/5" src="./src/assets/images/github.png" alt="" />
        </a>
        <a
          className="h-10 w-10 mx-3 bg-white rounded-full flex justify-center items-center group transition-transform hover:scale-150 hover:m-0"
          href="https://www.linkedin.com/in/caio-faraleski/"
        >
          <img className="h-3/5" src="./src/assets/images/linkedin.png" alt="" />
        </a>
        <a
          className="h-10 w-10 mx-3 bg-white rounded-full flex justify-center items-center group transition-transform hover:scale-150 hover:m-0"
          href="https://www.instagram.com/caiotsfd/"
        >
          <img className="h-3/5" src="./src/assets/images/instagram.png" alt="" />
        </a>
      </div>
    </div>
  )
}
