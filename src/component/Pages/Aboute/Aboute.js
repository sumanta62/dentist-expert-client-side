import React from 'react';
import abouteImg from '../../../images/about.png'

const Aboute = () => {
    return (
        <div className=''>
            <section className="bg-indigo-100">
                {/* <div className=" hero" style={{ backgroundImage: `url(${bgImage})`, backgroundPosition: 'center center', minWidth: '100%', backgroundSize: 'cover'}}> */}
                    <div className="">
                        <div className=" hero" >
                            <div className="container flex items-center flex-col md:flex-col-2 justify-center mx-auto py-10 md:flex-row lg:justify-start">
                                <div className="flex w-full md:w-3/6 lg:2/5">
                                    <img src={abouteImg} alt="" className="object-contain w-3/5 m-auto rounded-lg" />
                                </div>
                                <div className=" justify-center items-center w-11/12 md:w-3/6  lg:text-left  md:mx-10">
                                    <h1 className="text-3xl md:text-4xl font-bold leading-none text-center lg:text-left mt-5 md:mt-0">Aboute Us</h1>
                                    <p className="mt-6 mb-2 text-sm text-justify leading-5">I am passionate about helping patients improve their oral health and achieve a beautiful smile. When people ask me why I enjoy being a dentist, I explain that I love to build personal relationships with my patients and treat the person, not just the tooth. I have been involved in dentistry most of my life.</p>
                                    <p className=" mb-3 text-sm sm:mb-12  text-justify leading-5">A dentist, also known as a dental surgeon, is a health care professional who specializes in dentistry. These negative aspects seem to stem from the nature of a dentist's clinical practice and the personality traits that are common amongst those who pursue the profession.</p>
                                    <div className="flex space-y-4 sm:items-center justify-center  sm:justify-center md:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                        <button rel="noopener noreferrer" href="#" className="px-6 py-2 text-sm  font-semibold rounded bg-gradient-to-r from-green-300 to-blue-300 text-gray-900 transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring ">Aboute Me</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </section>
        </div>
    );
};

export default Aboute;