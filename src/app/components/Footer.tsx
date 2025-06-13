import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-indigo-500 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Contact Info */}
        <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Contact Us</h3>
          <p><a href="mailto:syedbabarali640@gmail.com" className="hover:text-black">Send Email to Babar</a></p>
          <p>Email: syedbabarali640@gmail.com</p>
          <p>Number: +923052374486</p>
        </div>

        {/* Quick Links */}
        <div className="flex-1 text-center md:text-center mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Quick Links</h3>
          <ul className="list-none pl-0 space-y-2">
            <li><Link href="/" className="hover:text-black">Home</Link></li>
            <li><Link href="/governor-sindh-it-course" className="hover:text-black">Governor Sindh IT Course</Link></li>
            <li><Link href="/giaic-python-mcqs" className="hover:text-black">Python Exams</Link></li>
            <li><Link href="/jobs" className="hover:text-black">Jobs</Link></li>  
                      <li><Link href="./sitemap.xml" className="hover:text-black">Sitemap</Link></li>


          </ul>
        </div>

        {/* Social Links */}
        <div className="flex-1 text-center md:text-right">
          <h3 className="text-xl font-bold mb-2">Follow Us</h3>
          <ul className="social-icons  space-x-4 justify-center md:justify-end">
            <li>
              <Link href="https://m.facebook.com/groups/962710811500396/" className="hover:text-black">
              <FaFacebook className="inline-block h-5 w-5 ml-1" /> Facebook 
              </Link>
            </li>
            <li>
              <Link href="https://github.com/BABARSHAH786/" className="hover:text-black">
              <FaGithub className="inline-block h-5 w-5 ml-1" /> Github 
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/syed-babar-ali-024b431b0/" className="hover:text-black">
              <FaLinkedin className="inline-block h-5 w-5 ml-1" /> LinkedIn 
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/channel/UCui0H-71f2AUmkMoMc6wofg" className="hover:text-black">
              <FaYoutube className="inline-block h-5 w-5 ml-1" /> Youtube 
              </Link>
            </li>
            <li>
              <Link href="https://wa.me/+923052374486" className="hover:text-black">
              <FaWhatsapp className="inline-block h-5 w-5 ml-1" /> Whatsapp 
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-indigo-600 py-2 text-center">
        <p className="text-white">© 2025 techkl All Rights Reserved</p>
        <div className="mt-2 flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4">
          <Link href="/terms-conditions" className="text-white hover:text-black">Terms & Conditions</Link>
          <Link href="/privacy-policy" className="text-white hover:text-black">Privacy Policy</Link>
          <Link href="/contact" className="text-white hover:text-black">Contact</Link>
          <Link href="/about-us" className="text-white hover:text-black">About</Link>

        </div>
      </div>
    </footer>
  );
}