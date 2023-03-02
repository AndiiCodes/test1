import React from 'react'
import { Button, Navbar } from 'flowbite-react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='p-[10px]'>
        <Navbar
  fluid={true}
  rounded={true}
  className="bg"
>
  <Navbar.Brand >
    <Link to="/">

    <span className="self-center whitespace-nowrap text-xl font-semibold font-['poppins'] dark:text-white">
      ManooGawra 📸
    </span>
    </Link>
  </Navbar.Brand>
  <div className="flex md:order-2">
  <Link to={"/contact"}>

    <Button className=' hidden sm:block hover:bg-[#2b5c42] text-white font-bold font-["poppins"] btn  '>
      Contact
    </Button>
  </Link>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      href="/"
      active={false}
      className="txt font-['poppins'] font-medium"
      
    >
      Home
    </Navbar.Link >
    <Navbar.Link className='txt' href="/about">
      About
    </Navbar.Link>
    <Navbar.Link className='txt' href="/gallery">
      Gallery
    </Navbar.Link>
    <Navbar.Link className='txt' href="/Links">
      Links
    </Navbar.Link>
    <Navbar.Link className='txt block sm:hidden' href="/contact">
      contact
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>

    </div>
  )
}
