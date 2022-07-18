import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ProgressBars } from "./ProgressBars";

export function Content() {
  const [page, setPage] = useState(0);
  const [toLeft, setToLeft] = useState(false);


  useEffect(() => {
    let lastScroll = 0;
    document.addEventListener('mousewheel', (e) => {
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
                  <h2 className="text-5xl font-extralight">
                    Meu nome é
                  </h2>
                  <h1 className="text-lightRed text-9xl font-semibold mt-4">Caio Faraleski</h1>
                  <h2 className="text-6xl mt-10">Desenvolvedor Front-end</h2>
                  <a href="./src/assets/Caio_Faraleski.pdf" class="btn from-center" download>Currículo</a>
                </div>
              ) : null}
              {page === 1 ? (
                <div className="flex justify-evenly items-center flex-wrap gap-x-36 gap-y-9 w-[70%]">
                  <ProgressBars text="JavaScript" percent={88} />
                  <ProgressBars text="HTML/CSS" percent={92} />
                  <ProgressBars text="ReactJs" percent={60} />
                  <ProgressBars text="TypeScript" percent={30} />
                  <ProgressBars text="Sass" percent={85} />
                  <ProgressBars text="Bootstrap || Tailwind" percent={78} />
                </div>
              ) : null}
              {page === 2 ? (
                <div>
                  sahuauhsua
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
