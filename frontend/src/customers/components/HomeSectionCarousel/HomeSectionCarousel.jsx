import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function HomeSectionCarousel({data , sectionName}) {

    const [activeIndex , setActiveIndex] = useState(0);

    const responsive = {
        0: { items: 1 },
        568: { items: 3 },
        1024: { items: 5.5 },
    }

    const slidePrev = () => setActiveIndex(activeIndex-1)
    const slideNext = () => setActiveIndex(activeIndex+ 1)

    const syncActiveIndex = ({item}) => setActiveIndex(item) //scan you explain this line of code 

    const items = data.slice(0, 10).map((item) => <HomeSectionCard product={item} />)

    return (
        <div className='border'>
            <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
            <div className='relative p-5 '>

                <AliceCarousel
                    items={items}
                    responsive={responsive}
                    // disableButtonsControls 
                    // infinite
                    disableDotsControls
                    onSlideChange={syncActiveIndex}
                    activeIndex={activeIndex}
                />

           { activeIndex !== items.length - 5 && <button variant="contained" onClick={slideNext} className='p-1 rounded-lg  px-4 z-50 shadow-xl hover:bg-blue-500 absolute top-32 right-0'
                    style={{ transform: "translateX(50%) rotate(90deg)" }} aria-label='next'>
                    <ArrowBackIosNewIcon style={{ transform: "rotate(-90deg)" }} />
                </button>}

                { activeIndex !== 0 && <button onClick={slidePrev}  className='p-1 rounded-lg  px-4 z-50 shadow-xl hover:bg-blue-500 absolute top-32 left-0'
                    style={{ transform: "translateX(-50%) rotate(-90deg)" }} aria-label='next'>
                    <ArrowBackIosNewIcon style={{ transform: "rotate(-90deg)" }} />
                </button>}

            </div>
        </div>
    )
}
