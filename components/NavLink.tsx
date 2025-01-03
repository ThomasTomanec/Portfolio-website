import Link from "next/link";

interface NavLinkProps {
  href: string;
  title: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
  return (
    <Link href={href}>
      <div className="block py-2 pl-3 pr-4 text-[#c4c4c4] sm:text-xl rounded md:p-0 hover:text-white transition duration-500 hover:scale-105 justify-center items-center">
        {title}
      </div>
    </Link>
  );
};

export default NavLink;