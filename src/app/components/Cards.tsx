import { IconType } from "react-icons";

interface CardProps {
  icon: IconType;
  title: string;
  details: string;
  link: string;
}

function Card({ icon: Icon, title, details, link }:CardProps){
  return (
    <div className="relative  mt-20 p-6 rounded-xl transition-transform  bg-white shadow-lg bg-gray-100 w-96">
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#4285f4] text-white  rounded-full p-4 ">
        
        <div className="text-4xl">
          <Icon />
        </div>
      </div>

      {/* Card Content */}
      <div className="pt-12 text-center ">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600  mb-4">{details}</p>
        <a href={link} className="font-bold text-[#4285f4]">
          Learn more
        </a>
      </div>
    </div>
  );
};

export default Card;
