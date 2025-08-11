import React from 'react'

const Footer = () => {
  return (
    <>
          <footer className="bg-gray-800 text-white py-8 px-6 sm:px-8 lg:px-12 mt-auto rounded-t-xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Copyright Information */}
        <div className="mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} AbacusPro. All rights reserved.</p>
        </div>

        {/* Placeholder Footer Links (can be expanded later) */}
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition duration-200">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-200">Terms of Service</a>
          {/* Example Social Media Icons (replace with actual links/icons) */}
          <a href="#" className="text-gray-400 hover:text-white transition duration-200">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22H12c5.523 0 10-4.477 10-10z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-200">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.445 2.478c.227-.333.64-.425 1.056-.246l.24.103.224.238c.613.626 1.262 1.155 1.956 1.583a.75.75 0 01.12.112c.079.088.136.177.172.249.03.062.054.123.074.18.02.055.034.113.045.167l.024.107.013.064c.005.02.008.036.011.053l.006.03a.75.75 0 01-.019.267c-.015.068-.035.132-.058.192-.023.06-.048.118-.076.173l-.067.126a1.532 1.532 0 00-.096.178c-.019.03-.039.059-.06.088a20.402 20.402 0 01-1.343 1.58C16.808 9.404 15 12 15 12.375c0 1.025-1.185 2.05-2.75 2.05-1.571 0-2.936-1.025-2.936-2.05 0-.375-1.808-2.971-2.956-4.636a20.401 20.401 0 01-1.343-1.58c-.021-.029-.041-.058-.06-.088a1.532 1.532 0 00-.096-.178l-.067-.126a2.031 2.031 0 01-.076-.173 2.637 2.637 0 01-.058-.192c-.015-.06-.035-.124-.05-.192a.75.75 0 01-.019-.267l.006-.03a.573.573 0 01.011-.053l.024-.107c.01-.054.03-.112.045-.167.02-.057.044-.118.074-.18a.75.75 0 01.172-.249c.036-.072.093-.161.172-.249a.75.75 0 01.12-.112c.694-.428 1.343-.957 1.956-1.583l.224-.238.24-.103c.416-.179.829-.087 1.056.246l.205.305c.013.02.028.043.04.062.067.1.139.198.217.291.139.167.29.324.449.467.3.275.632.513.999.704.095.05.187.094.272.13.087.036.17.062.247.078.074.015.143.023.208.023.065 0 .134-.008.208-.023a1.44 1.44 0 00.247-.078c.085-.036.177-.08.272-.13.367-.191.699-.429.999-.704.16-.143.31-.3.449-.467.078-.093.15-.19.217-.291.012-.019.027-.042.04-.062l.205-.305zM12 21a9 9 0 100-18 9 9 0 000 18z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
    </>
  );
}

export default Footer