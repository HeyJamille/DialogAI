import React from 'react'

// Icon
import { IoMenuOutline } from "react-icons/io5";
import { IoLogoWechat } from "react-icons/io5";

const Header = () => {
  return (
    <section > 
      <div class="flex flex-row justify-between items-center p-5 text-white lg:px-[200px]"> 
        <IoMenuOutline class="text-[40px] md:hidden"/>
        <h1 class="text-[20px]">DialogAI</h1>
        <IoLogoWechat class="text-[35px]"/> 
      </div>
    </section>
  )
}

export default Header