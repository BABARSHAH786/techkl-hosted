import React from 'react'
import { Metadata}  from "next"

export const metadata: Metadata = {
    title: {
      default: "Saylani SMIT  ",
      template: "%s -CodewithSpeed"
    }
  };

export default function Jdc() {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-purple-800 to-indigo-900 min-h-screen text-white p-6">
      <div className="max-w-5xl mx-auto">
        

  

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <iframe className="rounded-lg shadow-lg" width="100%" height="300" src="https://www.youtube.com/embed/eDGQqh-4Ehs" allowFullScreen></iframe>
          <iframe className="rounded-lg shadow-lg" width="100%" height="300" src="https://www.youtube.com/embed/Ib6cwbFsQSY" allowFullScreen></iframe>
        </div>

        <div className="mt-6 flex justify-center">
          <iframe className="rounded-lg shadow-lg" width="80%" height="400" src="https://www.youtube.com/embed/J5skKrWmbqY" allowFullScreen></iframe>
        </div>

        {/* BANO QABIL Section */}
        <hr className="border-gray-400 my-8" />
        <h2 className="text-center font-extrabold text-4xl mb-4">Saylani SMIT</h2>
        <hr className="border-gray-400 my-4" />

        <p className="text-center text-lg leading-relaxed">
          Saylani is an educational initiative by Foundation, aiming to equip Pakistani youth with IT skills for better employment opportunities.
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