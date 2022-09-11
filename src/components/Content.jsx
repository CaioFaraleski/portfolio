import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Card } from "./Card";
import { ContactForm } from "./ContactForm";
import { ProgressBars } from "./ProgressBars";
import resume from "../assets/Caio_Faraleski.pdf";
import download from "../assets/images/download.png";

export function Content() {
  const [page, setPage] = useState(0);
  const [toLeft, setToLeft] = useState(false);


  useEffect(() => {
    let lastScroll = 0;
    let touch = 0;

    document.addEventListener('mousewheel', (e) => {
      if(e.target.classList[0] !== "no") {
        if (e.deltaY > 0) {
          setToLeft(true)
          if(lastScroll <= 2) {
            lastScroll++
            window.scrollY = lastScroll
          }
        }
        else {
          setToLeft(false)
          if(lastScroll > 0) {
            lastScroll--
            window.scrollY = lastScroll
          }
        }
      }
      setPage(window.scrollY)
    });
    document.addEventListener('touchstart', (e) => {
      touch = e.changedTouches[0].clientX;
    });
    document.addEventListener('touchend', (e) => {
      if(e.changedTouches[0].clientX > touch) {
        setToLeft(false)
          if(lastScroll > 0) {
            lastScroll--
            window.scrollY = lastScroll
          }
      }
      else if(e.changedTouches[0].clientX < touch) {
        setToLeft(true)
          if(lastScroll <= 2) {
            lastScroll++
            window.scrollY = lastScroll
          }
      }
      setPage(window.scrollY)
    });
  }, []);

  const handleChangePage = (num) => {
    if(page < num) {
      setToLeft(true)
      window.scrollY = num
      setPage(window.scrollY)
    }
    else {
      setToLeft(false)
      window.scrollY = num
      setPage(window.scrollY)
    }
  }

  return (
    <div className="h-full lg:w-[94%] w-full text-white flex flex-col flex-wrap items-center justify-center lg:ml-[4%]">
      <div className="flex justify-center items-center h-[10%]">
        <div className="flex justify-center items-center">
          <span onClick={() => handleChangePage(0)} className={`rounded-full cursor-pointer ${page === 0 ? "bg-lightGray p-2 mx-2" : "bg-zinc-800 p-1 mx-3"}`}></span>
          <span onClick={() => handleChangePage(1)} className={`rounded-full cursor-pointer ${page === 1 ? "bg-lightGray p-2 mx-2" : "bg-zinc-800 p-1 mx-3"}`}></span>
          <span onClick={() => handleChangePage(2)} className={`rounded-full cursor-pointer ${page === 2 ? "bg-lightGray p-2 mx-2" : "bg-zinc-800 p-1 mx-3"}`}></span>
          <span onClick={() => handleChangePage(3)} className={`rounded-full cursor-pointer ${page === 3 ? "bg-lightGray p-2 mx-2" : "bg-zinc-800 p-1 mx-3"}`}></span>
        </div>
      </div>
      <section className="h-[90%] w-full flex justify-start items-center">
      <AnimatePresence>
            <motion.div
              className="absolute lg:h-3/4 h-2/4 lg:w-3/4 w-full lg:text-start text-center"
              key={page}
              initial="enter"
              animate="in"
              exit="exit"
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 50,
                opacity: {
                  duration: 0.1
                }
              }}
              variants={{
                enter: {x: toLeft ? 150 : -150, opacity: 0},
                in: {x: window.screen.width >= 1024 ? 50 : 0, opacity: 1},
                exit: {opacity: 0},
              }}
              >
              {page === 0 ? (
                <div className="h-full flex flex-col ml-10 mt-10">
                  <h2 className="text-5xl font-extralight pl-1">
                    Hi, i'm
                  </h2>
                  <h1 className="text-lightRed text-9xl font-semibold mt-4">Caio Faraleski</h1>
                  <h2 className="text-6xl mt-10 pl-1">Front-end Developer</h2>
                  <a
                    href={resume}
                    class="w-fit flex items-center self-center lg:self-start mt-20 relative border py-[1.4rem] px-[4.2rem] text-3xl text-lightRed tt cursor-pointer before:content-[''] before:absolute before:-z-10 before:top-0 before:left-1/2 before:h-full before:w-0 before:border before:border-x-0 after:content-[''] after:absolute after:-z-10 after:bottom-0 after:left-0 after:h-0 after:w-full after:bg-lightRed hover:text-lightGray hover:delay-500 hover:before:delay-[0s] hover:before:left-0 hover:before:w-full hover:after:bg-lightRed hover:after:delay-[.35s] hover:after:top-0 hover:after:h-full group"
                    download
                  >
                    Resume
                    <img src={download} className="downimg filter group-hover:brightness-0 group-hover:invert h-7 ml-5 group-hover:delay-500" />
                  </a>
                </div>
              ) : null}
              {page === 1 ? (
                <div className="flex justify-evenly items-center flex-wrap gap-x-36 gap-y-9 lg:w-[70%] w-full">
                  <h1 className="w-full text-5xl text-lightRed font-bold my-5 ml-10">Some of my main skills:</h1>
                  <ProgressBars text="JavaScript" percent="88" />
                  <ProgressBars text="HTML/CSS" percent="92" />
                  <ProgressBars text="ReactJs" percent="60" />
                  <ProgressBars text="TypeScript" percent="30" />
                  <ProgressBars text="Sass" percent="85" />
                  <ProgressBars text="Bootstrap || Tailwind" percent="78" />
                </div>
              ) : null}
              {page === 2 ? (
                  <div className="w-full h-full lg:px-0 px-20">
                  <h1 className="w-full text-5xl text-lightRed font-bold my-5 ml-10">My works...</h1>
                    <div id="cards" className="no flex justify-evenly items-center flex-wrap h-[85%] w-full lg:w-[70%] overflow-scroll overflow-x-hidden">
                      <Card img="https://caiofaraleski.github.io/portfolio/src/assets/images/ongjp.png" title="ONG JP" link="https://ong-jp.vercel.app/" />
                      <Card img="https://caiofaraleski.github.io/portfolio/src/assets/images/setvet.PNG" title="Setvet" link="https://setvet-96c51.web.app/" />
                      <Card img="https://caiofaraleski.github.io/portfolio/src/assets/images/sudoku.PNG" title="Sudoku" link="https://caiofaraleski.github.io/Sudoku/" />
                      <Card img="https://caiofaraleski.github.io/portfolio/src/assets/images/bombinhas.PNG" title="Hotel Bombinhas" link="https://caiofaraleski.github.io/Hotel-Bombinhas/" />
                      <Card img="https://caiofaraleski.github.io/portfolio/src/assets/images/pokedex.PNG" title="Pokedex" link="https://pokedex-caio.herokuapp.com/" />
                      <Card img="https://caiofaraleski.github.io/portfolio/src/assets/images/ignitelab.PNG" title="Classes Platform" link="https://caiofaraleski.github.io/Classes-Platform/" />
                      <Card img="https://caiofaraleski.github.io/portfolio/src/assets/images/snakegame.PNG" title="Snake Game" link="https://caiofaraleski.github.io/SnakeGame/" />
                    </div>
                  </div>
              ) : null}
              {page === 3 ? (
                <ContactForm />
              ) : null}
            </motion.div>
      </AnimatePresence>
      </section>
    </div>
  )
}
