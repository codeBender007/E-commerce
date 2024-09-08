import React from 'react'
// import MainCarousel from '../HomeCarousel/MainCarousel'
// import HomeSectionCarousel from '../HomeSectionCarousel/HomeSectionCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import MainCarousel from "../../components/HomeCarousel/MainCarousel"
import { mens_kurta } from '../../data/mens_kurta';


export default function HomaPage() {
  return (
    <div>
        
        <MainCarousel  />

        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>

          <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"} />
          <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoes"} />
          <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirt"} />
          <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Saree"} />
          <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Dress"} />

        </div>

    </div>
  )
}
