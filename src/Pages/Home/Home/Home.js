import React from 'react';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import About from '../About/About'; 
import Services from '../../Shared/Services/Services';


const Home = ({datasize}) => {
    return (
        <div>
            <div className="container-fuild mx-auto">
                 <HeaderBanner></HeaderBanner>
            </div>
            <div className="container mx-auto">
                <About></About>
                <Services datasize={datasize}></Services>
            </div>
        </div>
    );
};

export default Home;