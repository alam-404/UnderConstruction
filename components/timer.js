"use client"

import { timerfunc } from "@/lib/timerfunc";

const Timer = () => {

    const { days, hours, minutes, seconds } = timerfunc()

    return (
        <div className="w-full mt-[10%] flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <h2 className="typewriter text-lg md:text-4xl lg:text-5xl py-3 font-bold text-cyan-950 dark:text-slate-100 px-1 lg:mb-3">
                    We are still working on the project!
                </h2>
                <p className="dark:text-slate-100 text-cyan-950 font-thin text-xs md:text-lg">Thanks for being with us, Please stay in touch</p>
            </div>

            <div className="w-full p-6 text-3xl lg:text-6xl font-bold text-cyan-950 dark:text-slate-100 text-center">
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