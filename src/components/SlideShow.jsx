import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class extends React.Component {
    constructor(props) {
        super(props);



    }
    render() {
        return (
            <div className='bg-night sm:w-[75vw] rounded-xl '>
                <CarouselProvider
                    naturalSlideWidth={500}
                    naturalSlideHeight={250}
                    totalSlides={this.props.images.length}
                    infinite
                    isPlaying
                    interval={2000}
                >
                    <Slider>
                        {this.props.images.map((image, index) => (
                            <Slide key={index} className='flex w-[100%] h-[100%] items-center justify-center'>
                                <div className='h-[100%] w-[100%] flex items-center justify-center'>
                                    <Image src={image} style={{ objectFit: 'cover' }} className='w-[80%] h-auto  rounded-xl' />

                                </div>

                            </Slide>
                        ))}
                    </Slider>

                </CarouselProvider>

            </div>

        );
    }
}