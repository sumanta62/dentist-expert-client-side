import React from 'react';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import useTitle from '../../hooks/useTitle';

const Gallery = () => {
    useTitle('Home')
    return (
        <div className='bg-light'>
            <section className="py-6 sm:py-12 ">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold pb-2">Gallery</h2>
                        <p className="font-serif text-sm dark:text-gray-400">Intra-oral photos are photos that are taken of your teeth, gums and oral tissue. <br /> These photos may be of a single tooth, a group of teeth, or any area of your mouth.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        <article className="flex flex-col cursor-zoom-in overflow-hidden">
                            <PhotoProvider>
                                <PhotoView src="https://images.pexels.com/photos/6812520/pexels-photo-6812520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                                    <figure><img className='w-full h-52 transform hover:scale-105' src="https://images.pexels.com/photos/6812520/pexels-photo-6812520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></figure>
                                </PhotoView>
                            </PhotoProvider>
                        </article>
                        <article className="flex flex-col  cursor-zoom-in overflow-hidden ">
                            <PhotoProvider>
                                <PhotoView src=" https://images.pexels.com/photos/4687360/pexels-photo-4687360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                                    <figure><img className='w-full h-52 transform hover:scale-105' src=" https://images.pexels.com/photos/4687360/pexels-photo-4687360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></figure>
                                </PhotoView>
                            </PhotoProvider>
                        </article>
                        <article className="flex flex-col  cursor-zoom-in overflow-hidden">
                            <PhotoProvider>
                                <PhotoView src="https://images.pexels.com/photos/287237/pexels-photo-287237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ">
                                    <figure><img className='w-full h-52 transform hover:scale-105' src="https://images.pexels.com/photos/287237/pexels-photo-287237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 " alt="" /></figure>
                                </PhotoView>
                            </PhotoProvider>
                        </article>
                        <article className="flex flex-col  cursor-zoom-in overflow-hidden">
                            <PhotoProvider>
                                <PhotoView src="https://images.pexels.com/photos/3663999/pexels-photo-3663999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ">
                                    <figure><img className='w-full h-52 transform hover:scale-105' src="https://images.pexels.com/photos/3663999/pexels-photo-3663999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 " alt="" /></figure>
                                </PhotoView>
                            </PhotoProvider>
                        </article>
                        <article className="flex flex-col  cursor-zoom-in overflow-hidden">
                            <PhotoProvider>
                                <PhotoView src="https://images.pexels.com/photos/3845806/pexels-photo-3845806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ">
                                    <figure><img className='w-full h-52 transform hover:scale-105' src="https://images.pexels.com/photos/3845806/pexels-photo-3845806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 " alt="" /></figure>
                                </PhotoView>
                            </PhotoProvider>
                        </article>
                        <article className="flex flex-col  cursor-zoom-in overflow-hidden">
                            <PhotoProvider>
                                <PhotoView src="https://images.pexels.com/photos/3845735/pexels-photo-3845735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ">
                                    <figure><img className='w-full h-52 transform hover:scale-105' src="https://images.pexels.com/photos/3845735/pexels-photo-3845735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 " alt="" /></figure>
                                </PhotoView>
                            </PhotoProvider>
                        </article>
                        <article className="flex flex-col  cursor-zoom-in overflow-hidden">
                            <PhotoProvider>
                                <PhotoView src=" https://images.pexels.com/photos/6528907/pexels-photo-6528907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                                    <figure><img className='w-full h-52 transform hover:scale-105' src="https://images.pexels.com/photos/6528907/pexels-photo-6528907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 " alt="" /></figure>
                                </PhotoView>
                            </PhotoProvider>
                        </article>
                        <article className="flex flex-col  cursor-zoom-in overflow-hidden">
                            <PhotoProvider>
                                <PhotoView src=" https://images.pexels.com/photos/5355704/pexels-photo-5355704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ">
                                    <figure><img className='w-full h-52 transform hover:scale-105' src="https://images.pexels.com/photos/5355704/pexels-photo-5355704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 " alt="" /></figure>
                                </PhotoView>
                            </PhotoProvider>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;