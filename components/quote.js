'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeftAlt } from "@fortawesome/free-solid-svg-icons";

const Quote = () => {

  const getQuote = async () => {
  }

  return (
    <div className="mb-3 mt-10 w-full px-2 flex justify-center">
      <button className="wavy-bg drop-shadow-lg rounded-xl p-4 flex justify-evenly items-center gap-3" onClick={getQuote}>
        <div className="text-center text-lg font-semibold text-cyan-950">
          <p>Get a quote!</p>
        </div>
        <div className="hover:bg-sky-400 w-9 h-9 hover:text-slate-100 transition ease-out duration-75 p-2 rounded-full cursor-pointer">
          <FontAwesomeIcon className="w-full h-full text-cyan-950 hover:text-slate-100" icon={faQuoteLeftAlt} />
        </div>
      </button>
    </div>
  )
};
export default Quote;