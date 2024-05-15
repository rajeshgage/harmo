import React from 'react'
import './Footer.css'
import { Button } from 'react-bootstrap'
import whatsapp from '../../assets/whatsapp.png'
import shmstore from '../../assets/ShmStore-logo-feeter.svg'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
    <div>
    <footer class="footer">
      <svg class="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path class="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
      </svg>
      <div className=" text-center mt-5">
        <h5>Get Your Products Delivered In</h5>
        <h4 className='mb-4'>Your Preffered City Or The Next Port Of Call </h4>
        <Button className='mb-5' style={{border:"none",borderRadius:20,backgroundColor:"#ffff",color:"rgb(240 78 18)"}}>
        Contact Us
        <img src={whatsapp} alt="WhatsApp Icon" style={{ marginLeft: '10px', width: '30px', height: '30px' }} />
             </Button>
      </div>
      </footer>
      <div className='container-fluid footer-upper-content'>
        <div className="row px-4">
            <div className="col-md-3" style={{marginTop:"-60px"}}>
                <div className="card mb-3" style={{ borderTopRightRadius: '50px' }}>
                    <div className="px-2 my-5">
                    <img src={shmstore} alt='' />
                    {/* <div className='mt-3' style={{ borderBottom: '6px solid #ea6e08', width: '30%', position: 'absolute', bottom: 14, right: '35%' }}></div> */}
        <div className='mt-3' style={{ borderBottom: '2px solid gray', width: '100%' }}></div>
        <div className='text-center mt-3 mb-3'>We give complete control of your shipments. Delivered on time with no hassle.</div>
        <div className="footer-icons ">
                <div className="footer-icon">
                <FaFacebookF />
                 </div>
                <div className="footer-icon">
                <FaTwitter />
                </div>
                <div className="footer-icon">
                <FaLinkedinIn />
                </div>
                <div className="footer-icon">
                  <FaYoutube /></div>
            </div>

                    </div>
                </div>
            </div>
            <div className="col-md-3 mt-3">
            <div class="footer-col">
  	 			<h4>Usefull Links</h4>
  	 			<ul>
  	 				<li><a href="#">Blog</a></li>
  	 				<li><a href="#">SHM Store</a></li>
  	 				<li><a href="#">Register</a></li>
  	 			</ul>
  	 		</div>
            </div>
            <div className="col-md-3 mt-3">
            <div class="footer-col">
  	 			<h4>Company</h4>
  	 			<ul>
  	 				<li><a href="#">SHM Group</a></li>
  	 				<li><a href="#">SHM Fire Sefty</a></li>
  	 				<li><a href="#">SHM Shipcare</a></li>
  	 				<li><a href="#">SHM Products</a></li>
  	 			</ul>
  	 		</div>
            </div>
            <div className="col-md-3 mt-3">
            <div class="footer-col">
  	 			<h4>Company</h4>
  	 			<ul>
  	 				<li><a href="#"><IoCall style={{marginRight:"10px",color:"#ea6e08"}}/> +91-222-378-6400</a></li>
  	 				<li><a href="#"><IoMdMail style={{marginRight:"10px",color:"#ea6e08"}} /> info@theshmstore.com</a></li>
  	 				<li><a href="#"><FaLocationDot style={{marginRight:"10px",color:"#ea6e08"}} /> Head office BPT.Plot no. 51B, magazine street, darukhana, mazagaon, Mumbai,400010</a></li>
  	 			
  	 			</ul>
  	 		</div>
            </div>
        </div>

      </div>
      <div className='container-fluid footer-lower-content'>
        <div className="row px-3" >
          <div className='col-md-6 my-4'>
            <h5>Have Questions?</h5>
            <p>Ask Our 24/7 Customer Support Executive</p>
            <h4>Call Us : +91 1800-3002-7286</h4>
          </div>
          <div className="col-md-6 my-4">
            <h5>Subscribe to our newsletter</h5>
            <div class="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address"/>
                                    <button>Subscribe</button>
                                </form>
                            </div>
          </div>

        </div>
        
      </div>
    </div>
    </>
  )
}

export default Footer