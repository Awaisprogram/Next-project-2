import Image from "next/image";
import person from '../images/person_4.jpg'

interface dive {
  name :string
}

 function TestimonialCard({name}:dive) {
  return (
    
    <div className="flex items-center p-6 rounded-lg my-10  shadow-md relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-blue-500"></div>

      <Image
        src={person} 
        alt="Kimberly Gush"
        width={64}
        height={64}
        className="rounded-full mr-4"
      />

      <div>
      <p className="font-bold mt-2">{name}</p>
      <p className="text-gray-500 text-sm">Co-Founder, XYZ Inc.</p>
        <p className="italic text-gray-600 mt-3">
          “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          vitae ipsa asperiores inventore aperiam iure?”
        </p>
        
      </div>
    </div>
  );
}
export default TestimonialCard