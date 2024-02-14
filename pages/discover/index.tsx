import React from 'react';
import Image from 'next/image';

const index = () => {
  return (
    <div>
        <section className="mt-24 mx-12">
            <div className="grid grid-cols-4 ">
                <div className="vid_div">
                    <div className="vid_profile">
                        <div className="_vidThumb bg-transparent">
                            <Image alt="discover talent video" src="/vid_th.jpeg" width={350} height={195} />
                        </div>
                    </div>
                </div>
                <div className="vid_div">
                    <div className="vid_profile">
                        <div className="_vidThumb bg-transparent">
                            <Image alt="discover talent video" src="/sam_pic.webp" width={350} height={195} />
                        </div>
                    </div>
                </div>
                <div className="vid_div">
                    <div className="vid_profile">
                        <div className="_vidThumb bg-transparent">
                            <Image alt="discover talent video" src="/vid_th.jpeg" width={350} height={195} />


                            
                        </div>
                    </div>
                </div>
                <div className="vid_div">
                    <div className="vid_profile">
                        <div className="_vidThumb bg-transparent">
                            <Image alt="discover talent video" src="/sam_pic.webp" width={350} height={195} />
                        </div>
                    </div>
                </div>
                <div className="vid_div">
                    <div className="vid_profile">
                        <div className="_vidThumb bg-transparent">
                            <Image alt="discover talent video" src="/vid_th.jpeg" width={350} height={195} />
                        </div>
                    </div>
                </div>
                <div className="vid_div">
                    <div className="vid_profile">
                        <div className="_vidThumb bg-transparent">
                            <Image alt="discover talent video" src="/sam_pic.webp" width={350} height={195} />
                        </div>
                    </div>
                </div>

            </div>

        </section>
      
    </div>
  )
}

export default index

