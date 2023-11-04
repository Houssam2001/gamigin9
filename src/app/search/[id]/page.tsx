'use client'
import Advertisement from '@/components/organism/advertisement/Advertisement'
import PostCard from '@/components/molecules/card/PostCard'
import React from 'react'
import { GameData } from '../../models/Game'
import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'
import Banner from '@/components/ads/Ads'

const Searching = ({ params }: {
   params: {
      id: String
   }
}) => {
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
      queryFn: async ({ pageParam }:any) => {
         const res = await axios.get(`https://gamigin-api.vercel.app/api/search/${params.id}/` + pageParam)
         return res.data
      },

      initialPageParam: 1,
      getPreviousPageParam: (firstPage:any) => firstPage.previousId ?? undefined,
      getNextPageParam: (lastPage:any, allPages:any, lastPageParam:any, allPageParams:any) => {

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
            {/* Banner */}
            {/* <section className="my-12">
               <PostOverlayCard />
            </section> */}
            {/* All posts component */}
            <section className="my-20">
               {status === 'pending' ? (
                  <p>Loading...</p>
               ) : status === 'error' ? (
                  <span>Error: {error.message}</span>
               ) : (
                  <>
                     <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {data.pages.map((page:any) => (
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
                     </div>
                  </>
               )}
               <div className="flex items-center justify-center w-full mt-8">
                  {(
                     <button
                        onClick={() => fetchNextPage()}
                        disabled={!hasNextPage || isFetchingNextPage}
                        className="btn btn-outline btn-secondary font-work px-5 text-base font-medium"
                     >
                        Load More
                     </button>
                  )}
               </div>
            </section>

            {/* Advertisement component */}
            <section className="mb-24">
               {/* <Advertisement /> */}
               <Banner/>
            </section>
         </div>
      </main>
   )
}

export default Searching
