import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <nav className="Nav w-full  backdrop-blur-xl bg-black/30">
        <div className="gNavb">
        <h2 className="text-white flex-start text-4xl  left-10">Veezy</h2>
        <div className="flex flex-row border-2 rounded-full items-center p-6 gap-6 text-white">
            <a>Blog</a>
            <a>*</a>
            <a>About</a>
            <a>*</a>
            <a>Pricing</a>
            <a>*</a>
            <a>Discord</a>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <Link href="#" className="rounded-full p-4 text-white border border-white">For Hire</Link>
          <Link href="#" className="rounded-full p-4 text-white border border-white">For Business</Link>

        </div>

        </div>
        

    </nav>
  )
}

export default Header
