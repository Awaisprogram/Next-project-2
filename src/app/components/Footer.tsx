import Button from "./Button";

// components/Footer.js
export default function Footer() {
  return (
    <footer className="py-12 bg-slate-50 mt-4">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col md:flex-row justify-evenly space-y-8 md:space-y-0">
          {/* About Section */}
          <div className="md:w-1/3">
            <h2 className="text-lg font-bold  mb-4">About Me</h2>
            <p className="text-gray-700">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="md:w-1/3">
            <h2 className="text-lg font-bold  mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-700 hover:text-blue-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-blue-500">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className=" text-gray-700 hover:text-blue-500">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-blue-500">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-blue-500">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="md:w-1/3">
            <h2 className="text-lg font-bold  mb-4">Newsletter</h2>
            <p className="text-gray-700 mb-4">
              Sign up to receive the latest updates and offers.
            </p>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              />
              <Button click="Subscribe"/>
            </form>
          </div>
        </div>

        {/* Social Media & Copyright Section */}
        <div className="mt-8 border-t border-gray-700 pt-8 ">
         
          <div className="text-center text-gray-500 flex items-center justify-center text-sm">
            <p>
              Copyright © 2024 All rights reserved | Made with
              <span className="text-blue-500"> ❤ </span>
              by Awais Mehmood
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
