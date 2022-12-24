import React from 'react';
import Aboute from '../../Pages/Aboute/Aboute';
import Cuntect from '../../Pages/Cuntect/Cuntect';
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
            <Gallery></Gallery>
            <TestMonial></TestMonial>
            <Cuntect></Cuntect>
            {/* <GoogleMap></GoogleMap> */}
        </div>
    );
};

export default Main;