import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function Sidebar() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      <div className="bg-[#2b2b2b] fixed top-6 left-6 bottom-6 w-92 rounded-2xl p-6 text-center shadow-lg overflow-y-auto z-10">
        <div className="flex flex-col items-center">
          {/* Avatar */}
          <div
            onClick={() => setShowProfile(true)}
            className="bg-gray-800 p-4 rounded-xl mb-4 cursor-pointer hover:scale-105 transition"
          >
            <img
              src="/MY_photo.jpg"
              alt="Avatar"
              className="w-20 h-20 rounded-full"
            />
          </div>

          {/* Name + Role */}
          <h2 className="text-xl font-semibold text-emerald-500">
            Indrajith Somaiah R M
          </h2>
          <p className="text-gray-400 text-sm">Fullstack AI Web Developer</p>

          {/* Contact Info */}
          <h3 className="text-lg font-semibold mt-6 mb-3">Contact</h3>
          <div className="flex flex-col gap-2 mb-6 items-center">
            <a
              href="mailto:indrajithsomaiah2310@gmail.com"
              className="bg-[#1e1e1e] rounded-xl p-2 w-60 text-center shadow-md hover:bg-[#333] transition"
            >
              <h4 className="text-emerald-400 font-bold text-sm flex items-center justify-center gap-1">
                <FaEnvelope /> Email
              </h4>
              <p className="text-xs text-gray-300 break-all">
                indrajithsomaiah2310@gmail.com
              </p>
            </a>

            <a
              href="tel:9740027186"
              className="bg-[#1e1e1e] rounded-xl p-2 w-60 text-center shadow-md hover:bg-[#333] transition"
            >
              <h4 className="text-emerald-400 font-bold text-sm flex items-center justify-center gap-1">
                <FaPhone /> Phone
              </h4>
              <p className="text-xs text-gray-300">9740027186</p>
            </a>

            <a
              href="https://www.google.com/maps/place/Tumakuru,+Karnataka,+India"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1e1e1e] rounded-xl p-2 w-60 text-center shadow-md hover:bg-[#333] transition"
            >
              <h4 className="text-emerald-400 font-bold text-sm flex items-center justify-center gap-1">
                <FaMapMarkerAlt /> Location
              </h4>
              <p className="text-xs text-gray-300">Tumakuru, India</p>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-3 mt-2">
            <a
              href="https://www.linkedin.com/in/indrajith-somaiah-r-m-33a567234/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 p-2 rounded-full hover:bg-emerald-600 transition"
            >
              <FaLinkedin className="text-[#1e1e1e] text-base" />
            </a>
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 p-2 rounded-full hover:bg-emerald-600 transition"
            >
              <FaGithub className="text-[#1e1e1e] text-base" />
            </a>
            <a
              href="https://github.com/indrajith3110/indrajith3110/blob/main"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 p-2 rounded-full hover:bg-emerald-600 transition"
            >
              <FaInstagram className="text-[#1e1e1e] text-base" />
            </a>
            <a
              href="https://twitter.com/your-handle"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 p-2 rounded-full hover:bg-emerald-600 transition"
            >
              <FaTwitter className="text-[#1e1e1e] text-base" />
            </a>
          </div>
        </div>
      </div>

      {/* Profile Modal */}
      {showProfile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setShowProfile(false)}
        >
          <img
            src="/profile.jpg"
            alt="Full Profile"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl border-4 border-yellow-500"
          />
        </div>
      )}
    </>
  );
}
