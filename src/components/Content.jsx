import { useEffect, useState } from "react";

export function Content() {
  const [page, setPage] = useState(0);

  useEffect(() => {
    let lastScroll = 0;
    document.addEventListener('mousewheel', (e) => {
        if (e.deltaY > 0) {
          if(lastScroll <= 2) {
            lastScroll++
            window.scrollY = lastScroll
            console.log(window.scrollY)
          }
        }
        else {
          if(lastScroll > 0) {
            lastScroll--
            window.scrollY = lastScroll
            console.log(window.scrollY)
          }
        }
    });
    document.addEventListener("mousewheel", () => {
      setPage(window.scrollY)
    })
  }, []);

  return (
    <div className="h-[60%] text-white flex flex-col flex-wrap items-center">
      <div className="flex justify-center items-center h-[10%]">
        <div className="flex justify-evenly gap-x-6">
          <span className={`rounded-full p-2 border border-white ${page === 0 ? "bg-orange-400" : ""}`}></span>
          <span className={`rounded-full p-2 border border-white ${page === 1 ? "bg-orange-400" : ""}`}></span>
          <span className={`rounded-full p-2 border border-white ${page === 2 ? "bg-orange-400" : ""}`}></span>
          <span className={`rounded-full p-2 border border-white ${page === 3 ? "bg-orange-400" : ""}`}></span>
        </div>
      </div>
      <div className="h-[90%] d">
        {page === 0 ? (<div>test 111111</div>) : null}
        {page === 1 ? (<div>test 22222222</div>) : null}
        {page === 2 ? (<div>test 333333333333</div>) : null}
        {page === 3 ? (<div>test 4444444444</div>) : null}
      </div>
    </div>
  )
}
