'use client'
import { GameData } from '@/app/models/Game'
import Banner from '@/components/ads/Ads';
import TabbedContent from '@/components/tabs/TabsContents';
import Image from 'next/image';
import React, { useState, useEffect } from 'react'

const SinglePost = ({ params }: {
   params: {
      id: String
   }
}) => {


   const [postData, setPostData] = useState<GameData | null>(null);
   useEffect(() => {
      const fetchPostData = async () => {
         try {
            const response = await fetch(`https://gamigin-api.vercel.app
/api/post/${params.id}`);
            const data = await response.json();
            if (data.success) {
               setPostData(data.data); // Set the retrieved post data to the state
            } else {
               console.error('Post not found');
            }
         } catch (error) {
            console.error('Error fetching post data:', error);
         }
      };

      if (params) {
         fetchPostData(); // Fetch post data when the postTitle parameter is available
      }
   }, [params]);

   if (!postData) {
      return <div>Loading...</div>; // Display loading message while fetching data
   }

   return (
      <main>
         <section>
            <div className="container mx-auto px-5 md:px-0 w-full md:w-10/12 lg:w-5/12 font-work">
               <div className="py-5">
                  <div className="w-fit text-white px-2.5 py-1 bg-primary text-xs md:text-sm rounded-md mb-2 md:mb-4 font-medium">
                     {postData.Category}
                  </div>
                  <h3 className="text-base-content font-semibold text-xl md:text-2xl lg:text-4xl leading-5 md:leading-10 ">
                     {postData?.Title}
                  </h3>
                  <div className="mt-3 md:mt-6 flex items-center gap-5 text-base-content/60">
                     <div className=" flex items-center gap-3">
                        <div className="avatar">
                           <div className="w-9 rounded-full">
                              <Image
                                 src="https://placehold.it/100x100"
                                 alt="avatar"
                                 width={100}
                                 height={100}
                              />
                           </div>
                        </div>
                        <a
                           href="/"
                           className=" text-xs md:text-sm font-medium hover:text-primary transition hover:duration-300"
                        >
                           {postData.Developer}
                        </a>
                     </div>
                     <p className="text-xs md:text-sm">{postData.Release_Date}</p>
                  </div>
               </div>
               <div className="mt-8">
                  <Image
                     width="800"
                     height="462"
                     alt={`blog_image`}
                     className={`rounded-xl`}
                     src={postData.Image_URL}
                  />
               </div>

               {/* article section start  */}
               <div className="font-serif">
                  <div className="mt-8">
                     <h5 className="text-2xl leading-7 text-base-content font-semibold mt-8 mb-4">
                        Description of The Game
                     </h5>
                     <p className="text-xl leading-8 text-base-content/80">
                        {postData.About_the_Game_Title}
                     </p>

                     <h5 className="text-2xl leading-7 text-base-content font-semibold mt-8 mb-4">
                        Plan Your Itinerary
                     </h5>

                     <TabbedContent
                        crack_only={postData.crack_only}
                        About_the_Game_Title={postData.About_the_Game_Title} Comments_Count={postData.Comments_Count} Image_URL={postData.Image_URL}
                        Magnet_URL={postData.Magnet_URL}
                        Minimum_Requirements={postData.Minimum_Requirements} Post_Details={postData.Post_Details} Post_URL={postData.Post_URL}
                        Recommended_Requirements={postData.Recommended_Requirements} Release_Date={postData.Release_Date} Torrent_URL='' key={postData.id}
                        Category={postData.Category} Date={postData.Date} Developer={postData.Developer} Genre={postData.Genre} NFO={postData.NFO} Publisher={postData.Publisher} Size={postData.Size} Title={postData.Title} id={undefined}
                     />

                  </div>
                  <div className="mt-8">
                     <Image
                        width="800"
                        height="462"
                        alt={`blog_image`}
                        className={`rounded-xl`}
                        src="https://placehold.it/800x462"
                     />
                  </div>
                  <div className="flex items-center justify-center my-8 font-work">
                  <Banner/>

                  </div>
                  <div className="mb-20">
                     {postData.Torrent_URL == '' || postData.Torrent_URL == null ? (
                        <></>
                     ) : (
                        <>
                           <h5 className="text-2xl leading-7 text-base-content font-semibold mb-4">
                              Torrent Download
                           </h5>
                           <div className='flex items-center justify-center my-8'>

                              <a className="rounded-lg text-center border-base-content/10 border-4 w-11/12 py-4 duration-300 hover:bg-base-200 text-base-content text-lg"
                                 href={postData.Torrent_URL}>
                                 Games.{postData.Title.replaceAll(' ', '-')}.Torrent
                              </a>
                           </div>
                        </>
                     )
                     }
                     {postData.crack_only == '' || postData.crack_only == null ? (
                        <>

                        </>
                     ) : (
                        <>
                           <h5 className="text-2xl leading-7 text-base-content font-semibold mb-4">
                              Game File
                           </h5>
                           <div className='flex items-center justify-center my-8'>

                              <a className="rounded-lg text-center border-base-content/10 border-4 w-11/12 py-4 duration-300 hover:bg-base-200 text-base-content text-lg"
                                 href={postData.Torrent_URL}>
                                 Games.{postData.Title.replaceAll(' ', '-')}.file
                              </a>
                           </div>
                        </>)}

                     {postData.Magnet_URL == '' || postData.Magnet_URL == null ? (
                        <>

                        </>
                     ) : (
                        <>
                           <h5 className="text-2xl leading-7 text-base-content font-semibold mb-4">
                              Magnet Download
                           </h5>
                           <div className='flex items-center justify-center my-8'>

                              <a className="rounded-lg text-center border-base-content/10 border-4 w-11/12 py-4 duration-300 hover:bg-base-200 text-base-content text-lg"
                                 href={postData.Magnet_URL}>
                                 Games.{postData.Title.replaceAll(' ', '-')}.Magnet
                              </a>
                           </div>
                        </>)
                     }
                  </div>
               </div>
            </div>
         </section>
      </main>
   )
}

export default SinglePost
