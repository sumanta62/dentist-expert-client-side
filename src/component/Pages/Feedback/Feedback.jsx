import React from 'react';

const Feedback = () => {
    return (
      <div className='bg-blue-100'>
          <div className='w-11/12 m-auto pb-12'>
                <div className='w-10/12 md:w-8/12 text-center m-auto py-9'>
                    <h1 className="text-3xl md:text-5xl font-bold">Feedback from our real clients</h1>
                    <p>It won’t be a bigger problem to find one video game lover in your neighbor. Since the introduction of Virtual Game.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    <div className="hover:bg-blue-200 bg-white max-w-xs p-6 rounded-md shadow-md  text-center m-auto ">
                        <div className=' w-20 h-20  m-auto'>
                            <img alt="" src="https://themewagon.github.io/dentist/img/t3.png" className="object-cover rounded-full shadow dark:bg-gray-500" />
                        </div>
                        <div className="mt-6 mb-2">
                            <p className="dark:text-gray-100">Periodontics is the dental specialty focusing exclusively in the inflammatory disease that destroys the gums </p>
                            <h2 className="text-xl font-bold tracking-wide mt-3">Mark Alviro Wiens</h2>
                            <span className="block text-xs font-medium tracking-widest uppercase text-gray-500">Periondontics</span>
                        </div>
                    </div>
                    <div className="hover:bg-blue-200 bg-white max-w-xs p-6 rounded-md shadow-md  text-center m-auto">
                        <div className=' w-20 h-20  m-auto'>
                            <img alt="" src="https://themewagon.github.io/dentist/img/t2.png" className="object-cover rounded-full shadow dark:bg-gray-500" />
                        </div>
                        <div className="mt-6 mb-2">
                            <p className="dark:text-gray-100">Dental calculus, both supra- and subgingival occurs in the majority of adults worldwide. Dental calculus </p>
                            <h2 className="text-xl font-bold tracking-wide mt-3">Andy Florence</h2>
                            <span className="block text-xs font-medium tracking-widest uppercase text-gray-500">Dental Calculus</span>
                        </div>
                    </div>
                    <div className="hover:bg-blue-200 bg-white max-w-xs p-6 rounded-md shadow-md  text-center m-auto">
                        <div className=' w-20 h-20  m-auto'>
                        <img alt="" src="https://themewagon.github.io/dentist/img/blog/user-info.png" className="object-cover rounded-full shadow dark:bg-gray-500" />
                          
                        </div>
                        <div className="mt-6 mb-2">
                            <p className="dark:text-gray-100">Everyone notices a bright, white, glowing smile. And everyone notices how confident you feel when you have tha </p>
                            <h2 className="text-xl font-bold tracking-wide mt-3">Charlie Barber</h2>
                            <span className="block text-xs font-medium tracking-widest uppercase text-gray-500">Teeth Whitening</span>
                        </div>
                    </div>
                    <div className="hover:bg-blue-200 bg-white max-w-xs p-6 rounded-md shadow-md  text-center m-auto">
                        <div className=' w-20 h-20  m-auto'>
                        <img alt="" src="https://themewagon.github.io/dentist/img/t1.png" className="object-cover rounded-full shadow dark:bg-gray-500" />
                        </div>
                        <div className="mt-6 mb-2">
                            <p className="dark:text-gray-100">MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend  </p>
                            <h2 className="text-xl font-bold tracking-wide mt-3">Mark Alviro Wiens</h2>
                            <span className="block text-xs font-medium tracking-widest uppercase text-gray-500">Periondontics</span>
                        </div>
                    </div>
                </div>
        </div>
      </div>
    );
};

export default Feedback;