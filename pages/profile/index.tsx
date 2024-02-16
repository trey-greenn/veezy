import Image from 'next/image'
import React from 'react'

const index = () => {
  return (
    <div>
        <section className=" mt-12">
            <div className="border-b border-white">
                <div className="flex flex-row">
                    <div className="profile_pic ml-36 mb-12">
                        <Image src="/batman.jpeg" alt="profile pic" width={250} height={500}/>

                    </div>

                </div>

            </div>

        </section>
      
    </div>
  )
}

export default index
