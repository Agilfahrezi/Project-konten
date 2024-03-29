import { Carousel } from "react-bootstrap";
import Bg1 from'./../assets/Bg.jpg';
import Bg2 from'./../assets/Bg(2).jpg';
import Bg3 from'./../assets/Bg(3).jpg';

const Hero =()=>{
    return(
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Bg3}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>SMK NUSANTARA INDONESIA</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Bg2}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>SMK NUSANTARA INDONESIA</h3>
                        </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Bg1}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>SMK NUSANTARA INDONESIA</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
             </Carousel>
        
    );
}

export default Hero;