'use client'
import Advertisement from '@/components/organism/advertisement/Advertisement'
import PostOverlayCard from '@/components/molecules/card/PostOverlayCard'
import PostCard from '@/components/molecules/card/PostCard'
import PageInfo from '@/components/organism/pageInfo/PageInfo'
import React from 'react'
import { GameData } from '../models/Game'
import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'
import Banner from '@/components/ads/Ads'
import Banner2 from '@/components/ads/Banner2'
import { useRouter } from 'next/navigation'

const BlogListing = () => {
   const router = useRouter()
   const {
      status,
      data,
      error,
      isFetching,
      isFetchingNextPage,
      isFetchingPreviousPage,
      fetchNextPage,
      fetchPreviousPage,
      hasNextPage,
      hasPreviousPage,
   } = useInfiniteQuery({
      queryKey: ['games'],
      queryFn: async ({ pageParam }: any) => {
         const res = await axios.get('https://gamigin-api.vercel.app/api/scraped_data/' + pageParam)
         return res.data
      },
      initialPageParam: 1,
      getPreviousPageParam: (firstPage: any) => firstPage.previousId ?? undefined,
      getNextPageParam: (lastPage: any, allPages: any, lastPageParam: number, allPageParams: any) => {
         return lastPageParam + 1;
      },
   })

   return (
      <main>
         <div className="container mx-auto">
            {/* Page title info */}
            {/* <section>
               <PageInfo />
            </section> */}
            <div className="flex items-center justify-center my-8 font-work">
               <Banner />

            </div>
            {/* Banner */}
            <section className="my-12">
               <PostOverlayCard />
            </section>
            <div className="flex items-center justify-center my-8 font-work">
               <Banner2 />

            </div>
            <div className="flex items-center justify-center my-8 font-work">
               <Banner />

            </div>
            {/* All posts component */}
            <section className="my-20">
               {status === 'pending' ? (
                  <p>Loading...</p>
               ) : status === 'error' ? (
                  <span>Error: {error.message}</span>
               ) : (
                  <>
                     <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                        {data.pages.map((page: { nextId: React.Key | null | undefined; data: GameData[] }) => (
                           <React.Fragment key={page.nextId}>
                              {page.data.map((games: GameData) => (

                                 <PostCard
                                    crack_only=''
                                    About_the_Game_Title={games.About_the_Game_Title} Comments_Count={games.Comments_Count} Image_URL={games.Image_URL}
                                    Magnet_URL={games.Magnet_URL}
                                    Minimum_Requirements={games.Minimum_Requirements} Post_Details={games.Post_Details} Post_URL={games.Post_URL}
                                    Recommended_Requirements={games.Recommended_Requirements} Release_Date={games.Release_Date} Torrent_URL='' key={games.id}
                                    Category={games.Category} Date={games.Date} Developer={games.Developer} Genre={games.Genre ? games.Genre : ''} NFO={games.NFO} Publisher={games.Publisher} Size={games.Size} Title={games.Title} id={undefined} />
                              ))}
                           </React.Fragment>
                        ))}
                        <div className="flex items-center justify-center my-8 font-work">
                           <Banner2 />

                        </div>
                     </div>
                  </>
               )}
               <div className="flex items-center justify-center w-full mt-8">
                  {(
                     <a href='https://lifeboatlegalalleviate.com/q0uaegvh?key=5a13b3ac7d349450e6d36d9a5a948b89' target='_blank'>
                        <button
                           onClick={() => {

                              fetchNextPage()
                           }}
                           disabled={!hasNextPage || isFetchingNextPage}
                           className="btn btn-outline btn-secondary font-work px-5 text-base font-medium"
                        >
                           Load More
                        </button>
                     </a>

                  )}
               </div>
            </section>

            {/* Advertisement component */}
            <section className="mb-24">
               {/* <Advertisement /> */}
               <Banner />
            </section>
         </div>
      </main>
   )
}

export default BlogListing
