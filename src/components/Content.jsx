import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Card } from "./Card";
import { ProgressBars } from "./ProgressBars";

export function Content() {
  const [page, setPage] = useState(0);
  const [toLeft, setToLeft] = useState(false);


  useEffect(() => {
    let lastScroll = 0;
    document.addEventListener('mousewheel', (e) => {
      if(e.target.classList[0] !== "no") {
        console.log(e.target)
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
    });
    document.addEventListener("mousewheel", () => {
      setPage(window.scrollY)
    })
  }, []);

  return (
    <div className="h-full w-[94%] text-white flex flex-col flex-wrap items-center ml-[4%]">
      <div className="flex justify-center items-center h-[10%]">
        <div className="flex justify-center items-center">
          <span className={`rounded-full ${page === 0 ? "bg-lightGray p-2 mx-2" : "bg-zinc-800 p-1 mx-3"}`}></span>
          <span className={`rounded-full ${page === 1 ? "bg-lightGray p-2 mx-2" : "bg-zinc-800 p-1 mx-3"}`}></span>
          <span className={`rounded-full ${page === 2 ? "bg-lightGray p-2 mx-2" : "bg-zinc-800 p-1 mx-3"}`}></span>
          <span className={`rounded-full ${page === 3 ? "bg-lightGray p-2 mx-2" : "bg-zinc-800 p-1 mx-3"}`}></span>
        </div>
      </div>
      <section className="h-[90%] w-full flex justify-start items-center">
      <AnimatePresence>
            <motion.div
              className="absolute h-3/4 w-3/4"
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
                in: {x: 50, opacity: 1},
                exit: {opacity: 0},
              }}
              >
              {page === 0 ? (
                <div className="h-full flex flex-col ml-10 mt-10">
                  <h2 className="text-5xl font-extralight pl-1">
                    Meu nome é
                  </h2>
                  <h1 className="text-lightRed text-9xl font-semibold mt-4">Caio Faraleski</h1>
                  <h2 className="text-6xl mt-10 pl-1">Desenvolvedor Front-end</h2>
                  <a
                    href="https://caiofaraleski.github.io/portfolio/src/assets/Caio_Faraleski.pdf"
                    class="w-fit mt-20 relative border py-[1.4rem] px-[4.2rem] text-3xl text-lightRed tt cursor-pointer before:content-[''] before:absolute before:-z-10 before:top-0 before:left-1/2 before:h-full before:w-0 before:border before:border-x-0 after:content-[''] after:absolute after:-z-10 after:bottom-0 after:left-0 after:h-0 after:w-full after:bg-lightRed hover:text-lightGray hover:delay-500 hover:before:delay-[0s] hover:before:left-0 hover:before:w-full hover:after:bg-lightRed hover:after:delay-[.35s] hover:after:top-0 hover:after:h-full"
                    download
                  >
                    Currículo
                  </a>
                </div>
              ) : null}
              {page === 1 ? (
                <div className="flex justify-evenly items-center flex-wrap gap-x-36 gap-y-9 w-[70%]">
                  <ProgressBars text="JavaScript" percent="88" />
                  <ProgressBars text="HTML/CSS" percent="92" />
                  <ProgressBars text="ReactJs" percent="60" />
                  <ProgressBars text="TypeScript" percent="30" />
                  <ProgressBars text="Sass" percent="85" />
                  <ProgressBars text="Bootstrap || Tailwind" percent="78" />
                </div>
              ) : null}
              {page === 2 ? (
                <div id="cards" className="no flex justify-evenly items-center flex-wrap h-[85%] w-[70%] overflow-scroll overflow-x-hidden">
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </div>
              ) : null}
              {page === 3 ? (
                <div>
                  ijaojhusihuas
                </div>
              ) : null}
            </motion.div>
      </AnimatePresence>
      </section>
    </div>
  )
}
