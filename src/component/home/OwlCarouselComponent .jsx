import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import image1 from '../../assets/Insights.jpg';
import { Button } from 'react-bootstrap';
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi';

const OwlCarouselComponent = () => {

    
      return (
        <>
        <OwlCarousel className='owl-theme ' loop margin={10} nav  items={1} center={true}>
        <div className='item card rounded-4 '>
          <img src={image1} alt='Image 1' />
          <div style={{color:"#ffff", background: "linear-gradient(173deg, rgb(240 78 18), rgb(245 114 29))"}}>
            <div className="row my-3 text-center">
                <div className="col-4">
                    <div>
                    1 of 7
                    </div>
                    <HiOutlineArrowNarrowLeft style={{fontSize:25}} /> <HiOutlineArrowNarrowRight style={{fontSize:25}}/>
                </div>
                <div className="col-4">
                    <h5>
                    We track your vessels to deliver at earliest part of call
                    </h5>
                    </div>
                <div className="col-4">
                    <Button style={{border:"none",borderRadius:20,backgroundColor:"#ffff",color:"rgb(240 78 18)"}}>Visit The Page</Button>
                </div>
            </div>
          </div>
        </div>
        <div className='item card rounded-4'>
          <img src={image1} alt='Image 2' />
          <div style={{color:"#ffff", background: "linear-gradient(173deg, rgb(240 78 18), rgb(245 114 29))"}}>
            <div className="row my-3 text-center">
                <div className="col-4">
                    <div>
                    2 of 7
                    </div>
                    <HiOutlineArrowNarrowLeft style={{fontSize:25}} /> <HiOutlineArrowNarrowRight style={{fontSize:25}}/>
                </div>
                <div className="col-4">
                    <h5>
                    We track your vessels to deliver at earliest part of call
                    </h5>
                    </div>
                <div className="col-4">
                    <Button style={{border:"none",borderRadius:20,backgroundColor:"#ffff",color:"rgb(240 78 18)"}}>Visit The Page</Button>
                </div>
            </div>
          </div>
          
        </div>
        <div className='item card rounded-4'>
          <img src={image1} alt='Image 3' />
          <div style={{color:"#ffff", background: "linear-gradient(173deg, rgb(240 78 18), rgb(245 114 29))"}}>
            <div className="row my-3 text-center">
                <div className="col-4">
                    <div>
                    3 of 7
                    </div>
                    <HiOutlineArrowNarrowLeft style={{fontSize:25}} /> <HiOutlineArrowNarrowRight style={{fontSize:25}}/>
                </div>
                <div className="col-4">
                    <h5>
                    We track your vessels to deliver at earliest part of call
                    </h5>
                    </div>
                <div className="col-4">
                    <Button style={{border:"none",borderRadius:20,backgroundColor:"#ffff",color:"rgb(240 78 18)"}}>Visit The Page</Button>
                </div>
            </div>
          </div>
        </div>
</OwlCarousel>;
        </>
      );
    }

export default OwlCarouselComponent;
