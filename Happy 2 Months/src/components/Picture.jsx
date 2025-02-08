import React from 'react'
import { picture,meet,selfie,hypno,hangout,sleep,naughty,yours,boom,art} from '../assets'
import Carousel from './Carousel'
import { ImageCard } from './ImageCard'
import {ArrowLeft } from './icons'
import { useNavigate } from 'react-router-dom'

function Picture() {
  const navigate = useNavigate();

  const pictures = [
    { Image: hangout, title: 'First Time Meeting!!!', description: "Our first meeting. I remember stealing a glance at you and asking myself, 'Woah, who’s that pretty girl again?' From a simple curiosity, my feelings eventually turned into love and now I'm completely yours."},   
    { Image: meet, title: 'Counselors // May 28, 2024', description: "Our first time hanging out."},
    { Image: boom, title: '💥 // October 25, 2024', description: "Our first date. I've seen this movie a hundred times but I can only remember watching it with you now."},
    { Image: art, title: 'Mona Lisa // October 26, 2024', description: "First art piece I made for you. I hope this helped you deal with your cramps that day:>"},
    { Image: selfie, title: 'Ethereal // October 26, 2024', description: "First selfie you ever sent me."},
    { Image: hypno, title: 'Melt for me // October 26, 2024', description: "First Time Getting Hypnotized"},   
    { Image: picture, title: '"I Love You" // October 27, 2024', description: "This moment will forever be engraved in my heart. One minute we’re sexting, then we're having a deep talk, go back to sexting, the start goofing around, and then *boom* you say THAT and I’m like AHHHHHH! I’M IN NIRVANA."},
    { Image: naughty, title: 'Naughty Naughty 😏 // October 27, 2024', description: "Sexting for the first time. Yes, I intentionally chose this part of the convo to embarrass you 😋"},   
    { Image: selfie, title: '📸 // October 27, 2024', description: "First selfie you ever sent me."},   
    { Image: sleep, title: 'Moonlit // September 29, 2024', description: "First ever sleep call with you. This night meant a lot to me since it was the first time I felt at peace at night in Estonia. But I do remember panicking every time Yuta would show up and dragging him to private HAHAHA."},
    { Image: yours, title: 'Officially Yours // December 14, 2024', description: "I'm all yours ♡"},   
  ]
  return (
  
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">

      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
            Our Memories
          </h1>
        <Carousel>
          {pictures.map(({Image,title,description,index}) => (
            <ImageCard
              key={index}
              imageUrl={Image}
              altText="Placeholder image"
              title={title}
              description={description}
            />
          ))}
        </Carousel>

        <div className="flex justify-center w-full mt-12">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
            onClick={() => navigate('/recap')}
          >
            <ArrowLeft /> Previous page
          </button>

        </div>
      </div>
    </div>


  )
}

export default Picture