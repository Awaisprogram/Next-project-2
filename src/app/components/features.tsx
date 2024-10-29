import React from 'react'
import { FaStar } from "react-icons/fa";
import Card from "../components/Cards";

function Component() {
  return (
    <div>
      <div className="p-10 flex flex-wrap gap-6 justify-center">
      <Card
        icon={FaStar}
        title="Marketing Consulting"
        details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at"
        link="#"
      />
      <Card
        icon={FaStar}
        title="Market Analysis"
        details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at"
        link="#"
      />
       <Card
        icon={FaStar}
        title="Easy Purchase"
        details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at"
        link="#"
      />
      <Card
        icon={FaStar}
        title="Free Updates"
        details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at"
        link="#"
      />
      <Card
        icon={FaStar}
        title="100% Satistified"
        details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at"
        link="#"
      />
      <Card
        icon={FaStar}
        title="Easy Plugin"
        details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at"
        link="#"
      />
    </div>
    </div>
  )
}

export default Component
