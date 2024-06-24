import { Card } from "../Card";
import Carousel, { ResponsiveType } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive: ResponsiveType = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  },

};

export function Projects() {
  return (
    <main id="projects" className="gd-carousel-wrapper dark:bg-black bg-white pb-12  max-w-5xl mx-auto sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 ">
      <h1 className="dark:text-white text-black font-bold text-4xl text-center mb-12">Projects</h1>
      <Carousel 
        responsive={responsive}
        infinite
        className="gd-carousel"
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Carousel>
    </main>
  )
}