import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Home() {
  return (
    <div className="h-screen w-screen bg-black flex justify-end relative">
      <figure className="p-0 m-0 h-full">
        <img className="h-full" src="./src/assets/images/test3.png" alt="" />
      </figure>
      <div className="h-60 flex flex-col justify-evenly items-center absolute top-[calc(50%-6rem)] text-white mr-4">
        <a
          className="h-10 w-10 mx-3 bg-white rounded-full flex justify-center items-center group hover:h-16 hover:w-16 hover:m-0 shadow"
          href="https://github.com/CaioFaraleski"
        >
          <img className="h-3/5" src="./src/assets/images/github.png" alt="" />
        </a>
        <a
          className="h-10 w-10 mx-3 bg-white rounded-full flex justify-center items-center group hover:h-16 hover:w-16 hover:m-0"
          href="https://www.linkedin.com/in/caio-faraleski/"
        >
          <img className="h-3/5" src="./src/assets/images/linkedin.png" alt="" />
        </a>
        <a
          className="h-10 w-10 mx-3 bg-white rounded-full flex justify-center items-center group hover:h-16 hover:w-16 hover:m-0"
          href="https://www.instagram.com/caiotsfd/"
        >
          <img className="h-3/5" src="./src/assets/images/instagram.png" alt="" />
        </a>
      </div>
    </div>
  )
}
