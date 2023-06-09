import React from 'react';
import doctor1 from '../../assets/images/doctor1.png'
import sign from '../../assets/images/sign.png'

const DoctorIntro = () => {
    return (
      <div>
        <div className="bg-gray-100">
          {/* Intro section */}
          <div className="lg:flex lg:mx-24 lg:ml-0 ml-6">
            <img src={doctor1} alt="" className="lg:h-42 lg:w-42" />
            <div className="text-[#121111] mt-10 lg:ml-12">
              <p className="lg:text-[16px] font-semibold uppercase">
                INTRODUCING OUR TEAM
              </p>
              <h1 className="text-[36px] font-bold mt-3">
                Great passion for healing
              </h1>
              <p className="text-[18px] mt-3">
                Some up and coming trends are healthcare consolidation for
                independent healthcare centers that see a cut in unforeseen
                payouts. High deductible health plans are also expected to
                transpire along with a growth of independent practices.
              </p>
              <img src={sign} alt=""  className='mt-3'/>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DoctorIntro;