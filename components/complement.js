import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons';


const Complement = () => {
  return(
  <div className="mb-3 w-full flex justify-center">
    <div className='wavy-bg  drop-shadow-lg rounded-xl w-80 p-4 flex justify-evenly items-center'>
        <div className='text-center text-lg font-semibold text-cyan-950'>
            <p>Get a complement !</p>
        </div>
        <div className='hover:bg-sky-400 w-9 h-9 hover:text-slate-100 transition ease-out duration-75 p-2 rounded-full cursor-pointer'>
          <FontAwesomeIcon className='w-full h-full text-cyan-950  hover:text-slate-100  ' icon={faArrowUpLong} />
        </div>
    </div>
  </div>
  )
};
export default Complement;