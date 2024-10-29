import React from 'react'
import Image from "next/image";
import about from "../images/about.svg";
import Button from "../components/Button";
import { TiTick } from "react-icons/ti";
function Comp() {
  return (
    <div>
      
      <div>
        <div className="flex lg:flex-row flex-col p-10 justify-between items-center">
          <div className="mt-5">
            <Image src={about} alt=""></Image>
          </div>
          <div className="lg:w-3/5 w-full">
            <h1 className="lg:text-6xl mt-3 text-4xl font-semibold">
              Our Mission
            </h1>
            <p className="mt-3 text-[#6c757d]">
              Eos cumque optio dolores excepturi rerum temporibus magni
              recusandae eveniet, totam omnis consectetur maxime quibusdam
              expedita dolorem dolor nobis dicta labore quaerat esse magnam
              unde, aperiam delectus! At maiores, itaque.
            </p>
            <ul className="text-[#6c757d] leading-10 mt-3 ">
              <span className="flex items-center gap-1">
                <TiTick className="text-green-500"/>
                <li>Laborum enim quasi at modi</li>
              </span>
              <span className="flex items-center gap-1">
                <TiTick className="text-green-500" />
                <li>Ad at tempore</li>
              </span>
              <span className="flex items-center gap-1">
                <TiTick className="text-green-500"/>
                <li>Labore quaerat esse</li>
              </span>
            </ul>
            <Button click="Get Started" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comp
