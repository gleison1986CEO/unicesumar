import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import data from '../utils/selecionados.json';

const dataSelecionados = data.selecionados
const dataSelecionados_email = data.selecionados_emails
const picsSelecionados = "/images/selecionados/SELECIONADO-"

export default function CarouselComponent() {

    return (

        <div className="carousel-wrapper" id="selecionados_carrocel">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                {dataSelecionados.map((item, index) => (
                    <div key={index}>
                        <img id="img_id" src={picsSelecionados + index + ".png"} />
                        <center><h2 id="selecionados">{item} <i className="fa fa-envelope-o" aria-hidden="true"></i>
                        </h2></center>
                    </div>
                ))}

            </Carousel>
        </div>
    );
}