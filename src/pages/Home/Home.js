import React, { useEffect, useState } from "react";
import ServicesHomePage from "../Services/ServicesHomePage";
import imgae1 from "../../assets/images/hero1.png";
import imgae2 from "../../assets/images/pic2.png";
import imgae3 from "../../assets/images/pic3.jpg";
import imgae4 from "../../assets/images/pic4.jpg";
import useTitle from "../../hooks/useTitle";
import HomeDetails from "./HomeDetails";
import { useContext } from "react";
import { DoctorsContext } from "../../Context/DoctorsContext/DoctorsProvider";
import Carosoul from "./Carosoul";
import DoctorIntro from "./DoctorIntro";
import Team from "./Team";
import Help from "./Help";
import Blog from "./Blog";
import Communication from "./Communication";

const Home = () => {
  const [services, setServices] = useState([]);
  const { loader } = useContext(DoctorsContext);
  useTitle("Home");

  useEffect(() => {
    fetch("https://cardiologists-master-server.vercel.app/services-home")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  if (loader) {
    return (
      <div
        className="w-16 h-16 my-5 mx-auto border-4 border-dashed rounded-full animate-spin dark:border-violet-400"
        bis_skin_checked="1"
      ></div>
    );
  }

  return (
    <>
      {/* <div className='carousel w-full mb-5 mt-6'>
        <div id='slide1' className='carousel-item relative w-full'>
          <img
            alt=''
            src='https://placeimg.com/800/200/arch'
            className='w-full'
          />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide4' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide2' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide2' className='carousel-item relative w-full'>
          <img
            alt=''
            src='https://placeimg.com/800/200/arch'
            className='w-full'
          />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide1' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide3' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide3' className='carousel-item relative w-full'>
          <img
            alt=''
            src='https://placeimg.com/800/200/arch'
            className='w-full'
          />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide2' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide4' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide4' className='carousel-item relative w-full'>
          <img
            alt=''
            src='https://placeimg.com/800/200/arch'
            className='w-full'
          />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide3' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide1' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
      </div> */}
      <div>
        <img src={imgae1} alt="" />
      </div>
      {/* Carosoule */}
      <Carosoul />
      <div className="grid lg:grid-cols-3 grid-cols-1">
        {services.map((service) => (
          <ServicesHomePage
            key={service._id}
            service={service}
          ></ServicesHomePage>
        ))}
      </div>
      <DoctorIntro />
      <Team />
      <Help />
      <HomeDetails></HomeDetails>
      <Blog />
      <Communication />
    </>
  );
};

export default Home;
