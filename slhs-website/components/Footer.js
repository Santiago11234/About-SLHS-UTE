import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-red-500 p-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full sm:w-auto mb-6 sm:mb-0">
            <h2 className="text-2xl font-bold mb-2">Seven Lakes High School</h2>
            <p>9251 S Fry Rd, Katy, TX 77494, United States</p>
            <p>Phone: (281) 237-2800</p>
          </div>
          <div className="w-full sm:w-auto">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul>
              <li><a href="https://www.katyisd.org/SLHS" target="_blank" rel="noopener noreferrer" className="hover:underline">Official SLHS Website</a></li>

              <li><a href="https://app.schoolinks.com/course-catalog/katy-isd/career-focus-area" target="_blank" rel="noopener noreferrer" className="hover:underline">Programs Of Study</a></li>

              {/* <li><a href="https://www.usnews.com/education/best-high-schools/texas/districts/katy-independent-school-district/seven-lakes-high-school-19349" target="_blank" rel="noopener noreferrer" className="hover:underline">Data On SLHS</a></li> */}

              {/* <li><a href="https://en.wikipedia.org/wiki/Seven_Lakes_High_School" target="_blank" rel="noopener noreferrer" className="hover:underline">SLHS Wikipedia</a></li> */}

     
            </ul>
          </div>
          <div className="w-full sm:w-auto">
            <h3 className="text-xl font-semibold mb-2">Resources</h3>
            <ul>
              <li><a href="#about" className="hover:underline">Timeline</a></li>
              <li><a href="#awards" className="hover:underline">Awards</a></li>
              <li><a href="#programs" className="hover:underline">Courses</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-10 border-t border-red-300 pt-6">
          <p>&copy; {new Date().getFullYear()} Fake Seven Lakes High School Page. All rights reserved To No One.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;