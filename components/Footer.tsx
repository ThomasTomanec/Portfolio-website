import { HiOutlineMail } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";




const Footer: React.FC = () => {
  return (
    <footer className="bg-midnight-gray font shadow pt-20 pb-5">
      <div className="container flex flex-col container gap-8 mx-auto">
        <div className="flex gap-3 text-white text-lg">
          <div>
            <a
                href="https://www.instagram.com/thomastomanec/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 content-center items-center"
            >
              <FaInstagram size={32} className="p-[4px] rounded bg-gradient-to-b from-cyan-300 to-sky-600"/>
              <h3>@thomastomanec</h3>
            </a>
          </div>
          <div>
            <a
                href="https://www.instagram.com/thomastomanec/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 content-center items-center"
            >
              <HiOutlineMailOpen size={32} className="p-[6px] rounded bg-gradient-to-b from-cyan-300 to-sky-600"/>
              <h3>tomasttomanec@gmail.com</h3>
            </a>
          </div>
        </div>
        <div className=" flex flex-col gap-2 text-neutral-400 w-[500px]">
          <p>Junior developer focused on creating and managing websites, e-shops, and various applications.
            Skilled in a wide range of technologies, including both front-end and back-end development.</p>

        </div>

        <div className="flex justify-between text-white pt-10">
          <p>© All rights reserved 2024. ThomasTomanec</p>
          <p className="underline">Create by @ThomasTomanec</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
