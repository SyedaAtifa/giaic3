import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div className="container  h-24 max-w-screen-2xl bg-[#c86f1ddf] flex justify-evenly text-white font-serif text-lg">
        <img className="logo rounded-full p-2" src="./images/image.jpg"/>
        
        <div className="search flex pt-8 w-[600px]">
                <select className="select text-black  bg-white h-[40px] w-[50px] border- rounded-l-[20px]">
                    <option>All</option>
                             <option value="Earrings">Earrings</option>
                             <option value="Bracelets">Bracelets</option>
                             <option value="Necklace">Necklace</option>
                             <option value="Keychains">Keychains</option>
                </select>
                <input className="h-[40px] w-[400px] bg-white" placeholder="Search Products"></input>
                <FontAwesomeIcon className="h-[40px] w-[24px] pr-[5px]  text-black bg-white rounded-r-[20px]" icon={faMagnifyingGlass} />
                </div>
        <button className=" h-16 hover:border-b-2 pt-6 border-white">Buy Now</button>
        <div className="">
          <button className="flex justify-evenly w-24 h-16 pt-[28px] hover:border-b-2 ">Cart
          <FontAwesomeIcon className="w-[30px] h-[30px] " icon={faCartShopping} />
        </button>
        </div>
    </div>
  )
}

export default Navbar