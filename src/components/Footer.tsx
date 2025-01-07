import Link from "next/link";
import { BsTelephoneFill } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Footer() {
    return (
      <footer className="bg-gradient-to-r from-blue-800 to-blue-900 text-white p-4 sm:p-6 mt-8">
        <div className="container mx-auto text-center">
          <p className="text-sm sm:text-base">&copy; 2023 Farwa&#39;s Travel Blog. All rights reserved.</p>
          <p className="mt-2 text-sm sm:text-base">Exploring the world, one adventure at a time.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <Link href="#" className="hover:text-blue-200 transition duration-300 text-2xl "><FaFacebookF /></Link>
            <Link href="#" className="hover:text-blue-200 transition duration-300 text-2xl"><FaInstagram /></Link>
            <Link href="#" className="hover:text-blue-200 transition duration-300 text-2xl"><FaTwitter /></Link>
            <Link href="#" className="hover:text-blue-200 transition duration-300 text-2xl"><MdOutlineMailOutline /></Link>
            <Link href="#" className="hover:text-blue-200 transition duration-300 text-2xl"><BsTelephoneFill /></Link>
          </div>
        </div>
      </footer>
    )
  }
  
  