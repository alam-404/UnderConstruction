import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCamera  } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin , faFacebook} from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
  <div className="mt-6 absolute bottom-0 w-full flex flex-col items-center justify-center p-6  space-y-3 ">
        <p className='text-slate-100 font-thin text-lg text-center'>Get in touch with us now !</p>
    <div className='w-80 flex justify-around gap-2 '>
         <FontAwesomeIcon className='w-12 h-12 text-cyan-950 cursor-pointer  bg-slate-100 drop-shadow-md p-2 rounded-full' icon={faCamera}/>
         <FontAwesomeIcon className='w-12 h-12 text-cyan-950 cursor-pointer  bg-slate-100 drop-shadow-md p-2 rounded-full ' icon={faFacebook}/>
         <FontAwesomeIcon className='w-12 h-12 text-cyan-950 cursor-pointer  bg-slate-100 drop-shadow-md p-2 rounded-full' icon={faLinkedin}/>
    </div>
    
  </div>)
};
export default Footer;