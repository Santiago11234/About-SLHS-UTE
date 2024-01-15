import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

const ProgramCard = ({ title, description, courses, FaIcon }) => {
 return (
   <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-200 ease-in-out hover:border-2 hover:border-red-500">
     <FontAwesomeIcon icon={FaIcon} size="2x" className="float-right ml-4" style={{color: "rgb(239 68 68)"}}/>
     <h3 className="text-xl font-semibold mb-2 text-red-500">
       {title}
     </h3>
     <p className="mb-4 text-red-500">
       {description}
     </p>
     <div className="flex justify-between">
       <div>
         <p className="font-semibold text-red-500">Example Courses:</p>
         <ul className="list-disc pl-5 text-red-500">
           {courses.map((course, index) => (
             <li key={index}>{course}</li>
           ))}
         </ul>
       </div>
     </div>
   </div>
 );
};

export default ProgramCard;