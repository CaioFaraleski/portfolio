import { Content } from "../components/Content";

export function Home() {

  return (
    <div className="home h-screen w-screen bg-black flex flex-col lg:flex-row justify-between items-center relative">
      <Content />
      <div className="lg:h-60 lg:max-h-60 lg:max-w-[4%] w-60 max-h-[4%] flex lg:flex-col flex-row justify-evenly items-center text-lightGray mb-4 lg:mr-4 lg:mb-0">
        <a
          className="h-10 w-10 mx-3 bg-lightGray rounded-full flex justify-center items-center group transition-transform hover:scale-150 hover:m-0"
          href="https://github.com/CaioFaraleski"
        >
          <img className="h-3/5" src="https://caiofaraleski.github.io/portfolio/src/assets/images/github.png" alt="" />
        </a>
        <a
          className="h-10 w-10 mx-3 bg-lightGray rounded-full flex justify-center items-center group transition-transform hover:scale-150 hover:m-0"
          href="https://www.linkedin.com/in/caio-faraleski/"
        >
          <img className="h-3/5" src="https://caiofaraleski.github.io/portfolio/src/assets/images/linkedin.png" alt="" />
        </a>
        <a
          className="h-10 w-10 mx-3 bg-lightGray rounded-full flex justify-center items-center group transition-transform hover:scale-150 hover:m-0"
          href="https://www.instagram.com/caiotsfd/"
        >
          <img className="h-3/5" src="https://caiofaraleski.github.io/portfolio/src/assets/images/instagram.png" alt="" />
        </a>
      </div>
    </div>
  )
}
