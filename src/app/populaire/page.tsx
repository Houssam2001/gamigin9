'use client'
import Advertisement from '@/components/organism/advertisement/Advertisement'
import PostOverlayCard from '@/components/molecules/card/PostOverlayCard'
import PostCard from '@/components/molecules/card/PostCard'
import React from 'react'

const Populaire = () => {

   const gamesData = [
      {
        id: 1,
        title: 'Dying Light 2 Stay Human',
        image_url: 'https://cdn.akamai.steamstatic.com/steam/apps/534380/header.jpg?t=1659436785',
      },
      {
        id: 2,
        title: 'ASSASSINS CREED VALHALLA',
        image_url: 'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fassassins-creed-valhalla%2Fgold-edition%2FAC-KINGDOM-PREORDER_GOLD-EDITION_EPIC_Edition_Capsule_1920x1080-1920x1080-636d5ccf372c0addd369d43ba13741ba7ba456e5.jpg?h=215&resize=1&w=460',
      },
      {
        id: 3,
        title: 'GOD OF WAR-FLT',
        image_url: 'https://cdn.akamai.steamstatic.com/steam/apps/1593500/header.jpg?t=1642175986',
      },
      {
        id: 4,
        title: 'Red Dead Redemption 2',
        image_url: 'https://steamcdn-a.akamaihd.net/steam/apps/1174180/header.jpg?t=1597419522',
      },
      {
        id: 5,
        title: 'IMMORTALS FENYX RISING',
        image_url: 'https://cdn2.unrealengine.com/ifr-epic-std-store-landscape-2560x1440-uk-2560x1440-952059624.jpg?h=215&resize=1&w=460',
      },
      {
        id: 6,
        title: 'STAR WARS JEDI FALLEN ORDER-CODEX',
        image_url: 'https://steamcdn-a.akamaihd.net/steam/apps/1172380/header.jpg?t=1573959140',
      },
      {
        id: 7,
        title: 'GHOSTRUNNER 2-P2P',
        image_url: 'https://cdn.akamai.steamstatic.com/steam/apps/2144740/header.jpg?t=1698355344',
      },
      {
        id: 8,
        title: 'CYBERPUNK 2077 V1.2-CODEX',
        image_url: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg?t=1615811936',
      },
      {
        id: 9,
        title: 'DOOM ETERNAL-CODEX',
        image_url: 'https://steamcdn-a.akamaihd.net/steam/apps/782330/header.jpg?t=1584739240',
      },
    ];

   return (
      <main>
         <div className="container mx-auto">
            {/* Page title info */}
            {/* <section>
               <PageInfo title="Popular" section="Popular" sub=""/>
            </section> */}

            {/* Banner */}
            <section className="my-12">
               <PostOverlayCard />
            </section>

            {/* All posts component */}
            <section className="my-20">
               <>
                  <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                     {gamesData.map((game,index) => (
                        <div>
                           <PostCard
                           crack_only=''
                              About_the_Game_Title='' Comments_Count='' Image_URL={game.image_url}
                              Magnet_URL=''
                              key={game.id}
                              Minimum_Requirements='' Post_Details='' Post_URL=''
                              Recommended_Requirements='' Release_Date='' Torrent_URL=''
                              Category={'pc Games'} Date='' Developer='' Genre='Adventure,Action,shoots' NFO='' Publisher='' Size='' Title={game.title} id={undefined} />
                        </div>
                     ))}
                  </div>
               </>


            </section>

            {/* Advertisement component */}
            <section className="mb-24">
               <Advertisement />
            </section>
         </div>
      </main>
   )
}

export default Populaire
