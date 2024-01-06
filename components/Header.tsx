import Image from "next/image";
import Link from "next/link";
import { IoHome } from "react-icons/io5";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center md:px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="hidden md:flex flex-row justify-between items-center gap-y-6 py-8">
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              width={220}
              height={48}
              alt=""
              priority={true}
            />
          </Link>

          <div className="flex gap-x-4">
            <Link
              className="hover:text-blue-400 transition-all duration-300"
              href={"/products"}
            >
              Products
            </Link>
            <Link
              className="hover:text-blue-400 transition-all duration-300"
              href={"/about"}
            >
              About Us
            </Link>
            <Link
              className="hover:text-blue-400 transition-all duration-300"
              href={"/contact"}
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="md:hidden flex justify-center py-3">
          <div className="flex gap-x-3 bg-gray-400/70 py-4 px-8 sm:px-12 rounded-full items-center">
            <Link
              className="hover:text-blue-400 transition-all duration-300"
              href={"/products"}
            >
              <IoHome style={{fontSize: '16px'}} />
            </Link>
            |
            <Link
              className="hover:text-blue-400 transition-all duration-300"
              href={"/products"}
            >
              <p className="text-[12px] sm:text-[16px]">Products</p>
            </Link>
            |
            <Link
              className="hover:text-blue-400 transition-all duration-300"
              href={"/about"}
            >
              <p className="text-[12px] sm:text-[16px]">About us</p>
            </Link>
            |
            <Link
              className="hover:text-blue-400 transition-all duration-300"
              href={"/contact"}
            >
              <p className="text-[12px] sm:text-[16px]">Contact</p>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
