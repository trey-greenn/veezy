import React from 'react';
import Image from 'next/image';
import { text } from 'stream/consumers';

const index = () => {
  return (
    <div>
        <div className="flex justify-center mt-24">
            <h1 className="discover_h1 text-7xl">
                    Discover the world's best <br/>
                   <span>video editrs & creators!</span>
            </h1>
        </div>
        <div className="discoverSearch mt-12 flex justify-center ">
            <form className="discoverForm w-fit bg-black px-8 py-6 rounded-xl text-white">
            <input placeholder='Search for your criteria.' type='text' name='discover search' className="px-8 py-2 bg-gray-200 rounded-lg text-white text-2xl w-full">
            </input>
            </form>

        </div>
        <div className='flex flex-row mx-28 gap-6 mt-8 text-2xl'>
            <div>
                <button type= "button" title="filter_button" className="bg-black p-2 rounded-lg text-white">
                    Animation
                </button>
            </div>
            <div>
                <button type= "button" title="filter_button" className="bg-black p-2 rounded-lg text-white">
                    Animation
                </button>
            </div>
            <div>
                <button type= "button" title="filter_button" className="bg-black p-2 rounded-lg text-white">
                    Animation
                </button>
            </div>
            <div>
                <button type= "button" title="filter_button" className="bg-black p-2 rounded-lg text-white">
                    Animation
                </button>
            </div>
            <div>
                <button type= "button" title="filter_button" className="bg-black p-2 rounded-lg text-white">
                    Animation
                </button>
            </div>
            <div>
                <button type= "button" title="filter_button" className="bg-black p-2 rounded-lg text-white">
                    Animation
                </button>
            </div>
            <div>
                <button type= "button" title="filter_button" className="bg-black p-2 rounded-lg text-white">
                    Animation
                </button>
            </div>
            <div>
                <button type= "button" title="filter_button" className="bg-black p-2 rounded-lg text-white">
                    Animation
                </button>
            </div>
        </div>
        
        <section className="discover_back mt-24 mx-12">
            <div className="grid grid-cols-4 gap-4">
                <div className="vid_div">
                    <div className="vid_profile relative">
                        <div className="_vidThumb bg-transparent w-full">
                            <Image alt="discover talent video" fill src="/vid_th.jpeg" className="nextImage"  />
                        </div>
                    </div>
                    <div className="vid_title flex flex-row">
                        <div className="vid_discover_profile_pic">
                            <Image src="/sam_pic.webp" alt="vid_profile_image" className="rounded-full" width={100} height={100} />
                        </div>
                        <div className="">
                            <h2 className=" flex text-white font-bold text-sm ">
                            Tr3yway6k Ft Fat Meech “50’s to Da 100’s” (Official Video) Shot by @LewisYouNasty
                            </h2>

                        </div>

                    </div>
                </div>
                <div className="vid_div">
                    <div className="vid_profile">
                        <div className="_vidThumb bg-transparent">
                            <Image alt="discover talent video"  src="/sam_pic.webp" fill />
                        </div>
                    </div>
                </div>
                <div className="vid_div">
                    <div className="vid_profile">
                        <div className="_vidThumb bg-transparent">
                            <Image alt="discover talent video" fill src="/vid_th.jpeg"  />

                        </div>
                    </div>
                </div>
                <div className="vid_div">
                    <div className="vid_profile">
                        <div className="_vidThumb bg-transparent">
                            <Image alt="discover talent video" src="/sam_pic.webp" fill />
                        </div>
                    </div>
                </div>
                <div className="vid_div">
                    <div className="vid_profile">
                        <div className="_vidThumb bg-transparent">
                            <Image alt="discover talent video" fill src="/vid_th.jpeg" />
                        </div>
                    </div>
                </div>
                <div className="vid_div">
                    <div className="vid_profile">
                        <div className="_vidThumb bg-transparent">
                            <Image alt="discover talent video" fill src="/sam_pic.webp"  />
                        </div>
                    </div>
                </div>

            </div>

        </section>
      
    </div>
  )
}

export default index

