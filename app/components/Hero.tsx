import React from 'react'

const Hero = () => {
  return (
    <div className="">
      <p className="mt-2 text-[18px] justify-self-center">Customization available</p>
      <div className="h-[500px] w-screen text-center mt-2 bg-center bg-cover bg-[url('/images/back.avif')]">
       <div className="text-white pt-12 font-serif">
        <h1 className="text-[5.5rem]">Glam by Zahra</h1>
        <p className="text-[3rem]">The best handcrafted <br/> products.</p>
       </div>
      </div>
      <div className="">
        <h2 className="pt-7 flex justify-center text-[18px]">SHOP BY CATEGORY</h2>
        <div className="mb-6 mt-10 flex justify-evenly text-[20px] font-sans font-normal">
        <div className="border-[1px] rounded-b-[20px]">
          <div className="w-[230px] h-[300px] bg-cover bg-center text-center bg-[url('/images/earr.png')]"></div>
          <button className="pl-[80px] pt-3 pb-3">Earrings</button>
        </div>
        <div className="border-[1px] rounded-b-[20px]">
          <div className="w-[230px] h-[300px] bg-cover text-center bg-center bg-[url('/images/brace.jpg')]"></div>
          <button className="pl-[80px] pt-3">Bracelets</button>
        </div>
        <div className="border-[1px] rounded-b-[20px]">
          <div className="w-[230px] h-[300px] bg-cover text-center bg-center bg-[url('/images/chain.jpg')]"></div>
          <button className="pl-[80px] pt-3">Keychains</button>
        </div>
        </div>
      </div>    
    </div>
  )
}

export default Hero