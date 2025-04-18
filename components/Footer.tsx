import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaLinkedin,
    FaGithub,
    FaInstagram,
    FaTwitter,
  } from "react-icons/fa";
  
  export default function Footer() {
    return (
      <footer className="bg-[#1e1e1e] text-gray-300 py-10 mt-10 border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-sm">
  
          {/* Contact Section */}
          <div>
            <h3 className="text-emerald-500 font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <FaEnvelope />
                <a href="mailto:indrajithsomaiah2310@gmail.com" className="hover:text-emerald-400 transition">
                  indrajithsomaiah2310@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone />
                <a href="tel:9740027186" className="hover:text-emerald-400 transition">
                  9740027186
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <a href="https://www.google.com/maps/place/Tumakuru,+Karnataka,+India" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
                  Tumakuru, India
                </a>
              </div>
            </div>
          </div>
  
          {/* Social Section */}
          <div>
            <h3 className="text-emerald-500 font-semibold text-lg mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/indrajith-somaiah-r-m-33a567234/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
                <FaLinkedin size={20} />
              </a>
              <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
                <FaGithub size={20} />
              </a>
              <a href="https://github.com/indrajith3110/indrajith3110/blob/main" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
                <FaInstagram size={20} />
              </a>
              <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="md:text-right text-sm mt-6 md:mt-0">
            <p>&copy; {new Date().getFullYear()} Indrajith Somaiah R M</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  