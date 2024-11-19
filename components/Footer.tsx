import { HiOutlineMail } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";



const Footer: React.FC = () => {
  return (
    <footer className="bg-midnight-gray font shadow py-20">
      <div className="flex flex-col container gap-8 mx-auto w-[50%]">
        <h3 className="font-bold text-2xl text-white">Contact</h3>
        <div className=" flex flex-col gap-2 text-neutral-400">
          <p>Junior developer focused on creating and managing websites, e-shops, and various applications.
            Skilled in a wide range of technologies, including both front-end and back-end development.</p>
          <div className="flex gap-2 items-center font-bold">
            <HiOutlineMail />
            <p>tomasttomanec@gmail.com</p>
          </div>
        </div>
        <div className="flex gap-3 text-white text-lg">
          <a
            href="https://www.instagram.com/thomastomanec/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.instagram.com/thomastomanec/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
