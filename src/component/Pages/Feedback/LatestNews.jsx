import React from 'react';

const LatestNews = () => {
    return (
        <div className='bg-blue-100'>
            <div className='w-11/12 pb-9 m-auto '>
                <div className='w-10/12 md:w-8/12 text-center m-auto py-9'>
                    <h1 className="text-3xl md:text-5xl font-bold">Latest news from our blog</h1>
                    <p>It won’t be a bigger problem to find one video game lover in your neighbor. Since the introduction of Virtual Game.</p>
                </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
               <div className="flex flex-col max-w-md p-6 space-y-6 overflow-hidden rounded-lg shadow-2xl bg-blue-50 m-auto">
                    <div>
                        <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw8ohIROTWCRU68XZwk4IwTT1XyRKxEUjJwQ&usqp=CAU" alt="" className="object-cover w-full mb-4 h-60 dark:bg-gray-500" />
                        </div>
                        <div className="flex space-x-4">
                            <img alt="" src="https://themewagon.github.io/chiropractic/images/person_1.jpg" className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                            <div className="flex flex-col space-y-1 font-bold">
                                <a rel="noopener noreferrer" href="#" className="text-sm ">Posted by John doe</a>
                                <span className="text-xs dark:text-gray-400 ">07 Feb 2023</span>
                            </div>
                        </div>
                        <h2 className="mb-1 text-xl font-bold">What Every Athlete Needs To Know About Injury Recovery</h2>
                    </div>

                </div>
               <div className="flex flex-col max-w-md p-6 space-y-6 overflow-hidden rounded-lg rounded-lg shadow-2xl bg-blue-50 m-auto">
                    <div>
                        <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhHvpZ0vAXUrRB7rGSJ9DC8K_m-eCdaHe6Sw&usqp=CAU" alt="" className="object-cover w-full mb-4 h-60 dark:bg-gray-500" />
                        </div>
                        <div className="flex space-x-4">
                            <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8J1vZp6TEiqy5hIf7GixH0J9s-ciz6R3qTJVSHpdQQw&s" className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                            <div className="flex flex-col space-y-1 font-bold">
                                <a rel="noopener noreferrer" href="#" className="text-sm ">Posted by John doe</a>
                                <span className="text-xs dark:text-gray-400 ">08 Feb 2023</span>
                            </div>
                        </div>
                        <h2 className="mb-1 text-xl font-bold">What Every Athlete Needs To Know About Injury Recovery</h2>
                    </div>

                </div>
               <div className="flex flex-col max-w-md p-6 space-y-6 overflow-hidden rounded-lg shadow-2xl bg-blue-50 m-auto">
                    <div>
                        <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi4YYT1KCRNQLb6IGjdckmlsUApGPXKEOm_g&usqp=CAU" alt="" className="object-cover w-full mb-4 h-60 dark:bg-gray-500" />
                        </div>
                        <div className="flex space-x-4">
                            <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQznkGX2Yn2A27Xy3SClVDZhBvUpDC6rO3ExA&usqp=CAU" className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                            <div className="flex flex-col space-y-1 font-bold">
                                <a rel="noopener noreferrer" href="#" className="text-sm ">Posted by John doe</a>
                                <span className="text-xs dark:text-gray-400 ">10 Feb 2023</span>
                            </div>
                        </div>
                        <h2 className="mb-1 text-xl font-bold">What Every Athlete Needs To Know About Injury Recovery</h2>
                    </div>

                </div>
               </div>
            </div>
        </div>
    );
};

export default LatestNews;