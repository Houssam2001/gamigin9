import { GameData } from '@/app/models/Game'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

/**
 * Our PostCard is a reusable UI component used to display a post as a card format.
 *
 * @property featured image, category name, a heading, author image, author name, and publication date.
 *
 * @returns React component that can be easily integrated into any web application.
 */

const PostCard = (children: GameData) => {
   return (
      <div className="card w-fit p-4 border border-base-content/10 rounded-xl font-work">
         <figure>
            <Image
               src={children.Image_URL}
               alt="email"
               className={`rounded-xl`}
               width={360}
               height={240}
            />
         </figure>
         <div className="card-body py-6 px-2">
            <span className="btn no-animation hover:bg-primary hover:text-primary-content bg-primary/5 border-0 text-primary text-sm px-3 py-2 min-h-fit h-fit rounded-md w-fit capitalize font-medium">
               {children.Category}
            </span>
            <h3 className='overflow-x-hidden'>
               <Link
                  href={`/blog/${children.Title.replaceAll(' ', '-').toLowerCase()}`}
                  className="text-base-content hover:text-primary  transition-all duration-300 ease-in-out font-semibold text-lg md:text-xl lg:text-2xl mt-2"
               >
                  {children.Title.length > 20 ? children.Title.substring(0, 25) : children.Title}
               </Link>
            </h3>
            <div className="mt-5 flex items-center gap-5 text-base-content/60 ">
               <div className=" flex items-center gap-3">
                  {/* <div className="avatar">
                     <div className="w-9 rounded-full">
                        <img src="https://placehold.it/100x100" alt="avatar" />
                     </div>
                  </div> */}
                  <h5>
                     {children.Genre.split(',').map((e: any, index) => {
                        return (
                           <span key={index} className="btn no-animation hover:bg-primary hover:text-primary-content bg-primary/5 border-0 text-primary text-sm px-3 py-2 mx-2 my-1 min-h-fit h-fit rounded-md w-fit capitalize font-medium">
                              {e}
                           </span>
                        );
                     })}

                  </h5>
               </div>
               <p className="text-base">{children.Date}</p>
            </div>
         </div>
      </div>
   )
}

export default PostCard
