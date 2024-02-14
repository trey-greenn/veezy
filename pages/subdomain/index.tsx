import Image from 'next/image';
import React from 'react';


const index = () => {
  return (
    <div>
        <section className="m-16">
            <div className="grid grid-cols-5 px-8">
                <div className="profile_card flex flex-col p-4 w-fit">
                    <div className="profile_img">
                        <Image src="/batman.jpeg" alt="profile pic" width={320} height={250}/>
                    </div>
                    <div className="flex flex-col">
                        <h4 className="profile_name text-white text-2xl text-center">Trey Green</h4>
                    </div>
                    <div className="vid_cat flex flex-row flex-wrap overflow-x-auto gap-2 mt-1 place-content-center align-items">
                        <span className="vid_cat rounded-2xl bg-white/30 px-1 "> Vlogs</span>
                        <span className="vid_cat rounded-2xl bg-white/30 px-1 "> Vlogs</span>
                        <span className="vid_cat rounded-2xl bg-white/30 px-1 "> Vlogs</span>
                        <span className="vid_cat rounded-2xl bg-white/30 px-1 "> Vlogs</span>
                        <span className="vid_cat rounded-2xl bg-white/30 px-1 "> Vlogs</span>
                        <span className="vid_cat rounded-2xl bg-white/30 px-1 "> Vlogs</span>
                    </div>
                    <div className="flex flex-row gap-4 mt-1">
                    <span className="material-symbols-outlined text-white">star_rate_half</span> 
                    <h6 className="text-white">(4.3)</h6>
                        <h5 className="text-white">7k+</h5>
                    </div>
                    <div className="flex flex-row text-white gap-0.5 mt-0.5">
                        <h5>Starting @ </h5>
                        <h6>$$</h6>
                        <h6>45</h6>

                    </div>
                </div>

            </div>
        </section>
      
    </div>
  )
}

export default index
