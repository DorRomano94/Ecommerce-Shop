import './slider.css';
import React from "react";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Slider = () => {


    return (
        <>
            <div id="carouselExample1" className="carousel slide touch z-depth-1-half" data-ride="carousel">
                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img src="https://res.cloudinary.com/dorromano/image/upload/v1629287678/ezgif.com-gif-maker_2_qbunza.webp" width="100%" height="500px" className="responsiveImage" alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://res.cloudinary.com/dorromano/image/upload/v1629287413/ezgif.com-gif-maker_1_aktq1o.webp" className="responsiveImage" width="100%" height="500px" alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://res.cloudinary.com/dorromano/image/upload/v1629287133/ezgif.com-gif-maker_1_fp47wb.webp" width="100%" height="500px" className="responsiveImage" alt="Third slide" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Slider;

