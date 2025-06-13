import Link from "next/link";
import { Metadata}  from "next"
import Image from "next/image";

export const metadata: Metadata = {
    title: {
      default: "  JDC IT CITY",
      template: "%s -CodewithSpeed"
    }
  };

export default function Jdc() {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-purple-800 to-indigo-900 min-h-screen text-white p-6">
      <div className="max-w-5xl mx-auto">
        <hr className="border-gray-400 my-4" />
        <h2 className="text-center font-extrabold text-4xl mb-4">JDC IT CITY</h2>
        <hr className="border-gray-400 my-4" />
        <Image
          src="/gsit.jpeg"
          alt="Responsive image"
          width={340}
          height={330}
          objectFit="cover" 
        />
         <Image
          src="/smit.jpeg"
          alt="Responsive image"
          width={340}
          height={330}
          objectFit="cover" 
        />
        <Image
          src="/jdc.jpeg"
          alt="Responsive image"
          width={340}
          height={330}
          objectFit="cover" 
        />
        <Image
          src="/banoqabil.jpeg"
          alt="Responsive image"
          width={340}
          height={330}
          objectFit="cover" 
        />
      
        <div className="w-full sm:w-[350px] h-[45px] flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 transition-all rounded-lg shadow-lg mx-auto">
          <Link
            className="font-bold text-lg text-white"
            href="https://jdcitcity.softologics.com/registration"
          >
            JDC REGISTRATION 2024 - Click Here
          </Link>
        </div>

        <p className="text-center mt-6 text-lg leading-relaxed">
          JDC IT City offers free IT courses for Pakistani residents, aiming to enhance employability and freelancing skills.
        </p>

        <h3 className="text-center font-bold text-2xl mt-6">Courses Offered:</h3>
        <ul className="list-disc pl-10 text-lg mt-4 space-y-2">
          <li>Web Development</li>
          <li>Mobile App Development</li>
          <li>Graphic Design</li>
          <li>Digital Marketing</li>
          <li>Programming (Python, Java, etc.)</li>
          <li>Computer Networking</li>
          <li>Amazon & Power BI</li>
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <iframe className="rounded-lg shadow-lg" width="100%" height="300" src="https://www.youtube.com/embed/eDGQqh-4Ehs" allowFullScreen></iframe>
          <iframe className="rounded-lg shadow-lg" width="100%" height="300" src="https://www.youtube.com/embed/Ib6cwbFsQSY" allowFullScreen></iframe>
        </div>

        <div className="mt-6 flex justify-center">
          <iframe className="rounded-lg shadow-lg" width="80%" height="400" src="https://www.youtube.com/embed/J5skKrWmbqY" allowFullScreen></iframe>
        </div>

        {/* BANO QABIL Section */}
        <hr className="border-gray-400 my-8" />
        <h2 className="text-center font-extrabold text-4xl mb-4">BANO QABIL</h2>
        <hr className="border-gray-400 my-4" />

        <p className="text-center text-lg leading-relaxed">
          Bano Qabil is an educational initiative by Alkhidmat Foundation, aiming to equip Pakistani youth with IT skills for better employment opportunities.
        </p>

        <h3 className="text-center font-bold text-2xl mt-6">Courses Offered:</h3>
        <ul className="list-disc pl-10 text-lg mt-4 space-y-2">
          <li>Frontend Web Development</li>
          <li>Backend Web Development</li>
          <li>Mobile App Development</li>
          <li>Digital Marketing</li>
          <li>Graphic Design</li>
          <li>Freelancing & Amazon FBA</li>
        </ul>
        <Image
          src="/digiskill.jpeg"
          alt="Responsive image"
          width={340}
          height={330}
          objectFit="cover" 
        />
        <Image
          src="/banoqabil.jpeg"
          alt="Responsive image"
          width={340}
          height={330}
          objectFit="cover" 
        />
        <video width="640" height="360" controls>
        <source src="./newrec.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <iframe className="rounded-lg shadow-lg" width="100%" height="300" src="https://www.youtube.com/embed/MH7N7CzAmpM" allowFullScreen></iframe>
          <iframe className="rounded-lg shadow-lg" width="100%" height="300" src="https://www.youtube.com/embed/Mji08aT9Deo" allowFullScreen></iframe>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <iframe className="rounded-lg shadow-lg" width="100%" height="300" src="https://www.youtube.com/embed/clRLmSVLf7E" allowFullScreen></iframe>
          <iframe className="rounded-lg shadow-lg" width="100%" height="300" src="https://www.youtube.com/embed/rkF8cLF1MWA" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  );
}
