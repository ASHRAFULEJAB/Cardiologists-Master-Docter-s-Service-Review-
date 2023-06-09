
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
const Carosoul = () => {
    const slides = [
      {
        url: "https://www.shutterstock.com/image-vector/cardiology-concept-banner-wireframe-low-260nw-2050916399.jpg",
      },
      {
        url: "https://t3.ftcdn.net/jpg/01/67/02/42/360_F_167024278_QQuWDKy7k0FPBIKaNEJrs34gilFhXb6n.jpg",
      },
      {
        url: "https://img.freepik.com/premium-vector/cardiologist-web-banner-landing-page-female-doctor-smiling-holding-poster-with-picture-heart_101969-2668.jpg",
      },

      {
        url: "https://www.medibrandox.com/MediBrandBackEndImages/BlogImage/cardiologist-web-design-development-digital-marketing-l.jpg",
      },
      {
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2019/10/cardiacDocs-1125401691-770x553.jpg",
      },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };
    return (
      <div>
        <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          ></div>
          {/* Left Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className="flex top-4 justify-center py-2">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer"
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Carosoul;