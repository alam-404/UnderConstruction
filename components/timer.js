"use client"

import { timerfunc } from "@/lib/timerfunc";

const Timer = () => {
     
    const {days , hours , minutes , seconds } = timerfunc()

    console.log(days)

  return (
<div className="w-full mt-[10%]  overflow-hidden  flex flex-col justify-center items-center">
        <div className="mx-auto text-center flex flex-col justify-center items-center gap-3">
        <h2 className="typewriter py-3 text-5xl font-bold text-slate-100">We are still working on the project ! </h2>
        <p className="text-large text-slate-100 font-thin">Thanks for being with us, Please stay in touch</p>
        </div>
    
<div className="w-full  p-6 text-6xl font-bold text-cyan-950 dark:text-slate-100 text-center">
    <h2>
        <span> {days}</span> : 
        <span> {hours}</span> : 
        <span> {minutes}</span> : 
        <span> {seconds}</span>
    </h2>
</div>
</div>
)
};
export default Timer;