import React from 'react';
import Aboute from '../../Pages/Aboute/Aboute';
import AddService from '../../Pages/AddService/AddService';
import BookApporment from '../../Pages/BookApporment/BookApporment';
import Cuntect from '../../Pages/Cuntect/Cuntect';
import Feedback from '../../Pages/Feedback/Feedback';
import LatestNews from '../../Pages/Feedback/LatestNews';
import Gallery from '../../Pages/Gallery/Gallery';
import GoogleMap from '../../Pages/GoogleMap/GoogleMap';
import Home from '../../Pages/Home/Home';
import Services from '../../Pages/Services/Services';
import TestMonial from '../../Pages/TestMonial/TestMonial';

const Main = () => {
    return (
        <div>
            <Home></Home>
            <Aboute></Aboute>
            <Services></Services>
            {/* <AddService/> */}
            <Feedback/>
            <Gallery></Gallery>
            <TestMonial></TestMonial>
            <BookApporment/>
            <LatestNews/>
            {/* <Cuntect></Cuntect> */}
            {/* <GoogleMap></GoogleMap> */}
        </div>
    );
};

export default Main;