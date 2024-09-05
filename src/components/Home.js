import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    { id: 1, content: 'Slide 1', link: '/page1' },
    { id: 2, content: 'Slide 2', link: '/page2' },
    { id: 3, content: 'Slide 3', link: '/page3' },
    { id: 4, content: 'Slide 4', link: '/page4' },
    { id: 5, content: 'Slide 5', link: '/page5' },
    { id: 6, content: 'Slide 6', link: '/page6' },
    { id: 7, content: 'Slide 7', link: '/page7' },
    { id: 8, content: 'Slide 8', link: '/page8' },
    { id: 9, content: 'Slide 9', link: '/page9' },
    { id: 10, content: 'Slide 10', link: '/page10' }
  ];

  const itemsPerSlide = 5;
  const totalSlides = Math.ceil(items.length / itemsPerSlide);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-indigo-600 mb-6">Hello There</h1>

      {/* Carousel Container */}
      <div className="relative w-full max-w-screen-lg">
        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl text-indigo-600 hover:text-indigo-800 transition duration-300 z-10"
        >
          &lt;
        </button>

        {/* Carousel Slides */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
              width: `${items.length * (100 / itemsPerSlide)}%`,
            }}
          >
            {items.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className="bg-indigo-50 rounded-2xl h-72 flex justify-center items-center w-1/5 m-2"
              >
                <span className="text-2xl font-semibold text-indigo-600">
                  {item.content}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-3xl text-indigo-600 hover:text-indigo-800 transition duration-300 z-10"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Home;
