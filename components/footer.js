import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div className="absolute bottom-0 py-4 flex flex-col justify-center items-center gap-3">
      <p className='text-cyan-950 dark:text-slate-100 font-thin text-lg'>Get in touch with us now !</p>
      <div className="flex gap-2 justify-center items-center">
        <FontAwesomeIcon className='w-12 h-12 text-cyan-950 cursor-pointer bg-slate-100 drop-shadow-md p-2 rounded-md' icon={faCamera} />
        <FontAwesomeIcon className='w-12 h-12 text-cyan-950 cursor-pointer bg-slate-100 drop-shadow-md p-2 rounded-md ' icon={faFacebook} />
        <FontAwesomeIcon className='w-12 h-12 text-cyan-950 cursor-pointer bg-slate-100 drop-shadow-md p-2 rounded-md' icon={faLinkedin} />
      </div>

    </div>)
};
export default Footer;