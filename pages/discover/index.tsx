import React from 'react';
import Image from 'next/image';

const index = () => {
  return (
    <div>
        <section className="mt-24 mx-12">
            <div className="grid grid-cols-4 gap-4">
                <div className="vid_div">
                    <div className="vid_profile">
                        <div className="_vidThumb bg-transparent">
                            <Image alt="discover talent video" src="/vid_th.jpeg" width={350} height={195} />
                        </div>
                    </div>
                    <div className="vid_title flex flex-row">
                        <a className="vid_discover_profile_pic">
                            <Image src="/sam_pic.webp" alt="vid_profile_image rounded-full" width={48} height={48} />
                        </a>
                        <div className="flex flex-col">
                            <h2 className="vid_title text-white font-bold text-sm flex overflow-x">
                            Tr3yway6k Ft Fat Meech “50’s to Da 100’s” (Official Video) Shot by @LewisYouNasty
                            </h2>

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

