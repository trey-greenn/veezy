// CollapsibleSidebar.tsx
import CollapsibleSidebar from '@/components/SideBar';
import Image from 'next/image';
import React, { useState } from 'react';

const index = () => {
  

  return (
    <div className="flex flex-row">
        <CollapsibleSidebar/>
        <section className="trueBody">
        <div className="flex flex-row"> 
        <section className=" bg-black rounded-xl flex flex-col m-8">
            <div className="border-b border-white">
                <div className="flex flex-row p-8 items-center ">
                    <div className="flex flex-col ">
                        <div className="profile_pic p-2 rounded-xl h-fit">
                            <Image src="/batman.jpeg" alt="profile pic" width={250} height={500} className="rounded-lg"/>
                        </div>
                        <div>
                        <div className="grid grids-row-3 gap-2">
                            <h4 className="bg-gray-400 w-fit mt-6 rounded-full px-2">Location</h4>
                            <h4 className="bg-gray-400 w-fit mt-6 rounded-full px-2">Age</h4>
                              
                            <h4 className="bg-gray-400 w-fit mt-6 rounded-full px-2">Experience Level</h4>

                        </div>

                        </div>
                        
                    </div>
                    <div className="phDIV flex justify-center w-full ">
                    <div className="profileHeader  rounded-lg text-white w-fit p-4">
                        <h2 className="w-full text-6xl text-center">
                            William Trey Green
                        </h2>
                        <ul>
                            <li className="profileBio text-white text-sm mt-4 ">
                            Having collaborated with a myriad of professionals across diverse projects, [Editor's Name] has honed their skills to perfection, transforming raw footage into cinematic masterpieces. Their portfolio is a testament to the versatility and artistry embedded in every frame, showcasing a keen eye for detail and a deep understanding of the nuances that make a story come alive.

                                From corporate videos to feature films, [Editor's Name] has left an indelible mark on the projects they have touched, elevating the visual experience and exceeding the expectations of clients and collaborators alike. The ability to seamlessly blend technical prowess with creative intuition sets [Editor's Name] apart, making them a sought-after talent in the industry.

                                In an ever-evolving landscape, [Editor's Name] remains at the forefront, embracing new technologies and trends while staying true to the timeless principles of storytelling. Their commitment to excellence has not only earned the trust of clients but has also garnered accolades and recognition within the professional community.

                                With a passion for pushing creative boundaries and a dedication to delivering unparalleled quality, [Editor's Name] stands as a luminary in the world of video editing, continuously shaping the visual narratives that captivate audiences and leave a lasting impact.
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 p-12">
                <div className="vid_div flex flex-col">
                    <div className="vid_profile ">
                        <div className="_vidThumb bg-transparent relative">
                            <Image alt="discover talent video" fill src="/vid_th.jpeg"  className="profileImages overflow-hidden " />
                        </div>
                    </div>
                    <div className="vid_title flex flex-row ">
                        <div className="vid_discover_profile_pic">
                            <Image src="/sam_pic.webp" alt="vid_profile_image" className="rounded-full" width={48} height={48}/>
                        </div>
                        <div className="">
                            <h2 className="text-white font-bold text-xs ">
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
        </section>
    </div>
  );
};

export default index;


