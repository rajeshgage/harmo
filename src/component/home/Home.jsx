import React from 'react'
import './Home.css'
import banner from '../../assets/banner.jpg'
import marketing from '../../assets/promote.png'
import india from '../../assets/india.png'
import OwlCarouselComponent from './OwlCarouselComponent '
import Footer from '../footer/Footer'

const Home = () => {
  return (
    <>
    <div className="home">
      <img src={banner} alt='Banner' className="banner-image" />
    </div>
    <div className='container-fluid' style={{ marginTop: "-60px", color: "#ffff",fontWeight:600 }}>
  <div className="row">
    <div className="col-3 text-end">ANNOUNCEMENTS</div>
    <div className="col-1">
        <img src={marketing} alt='' style={{height:"50px",color:"yellow"}}/>
    </div>
    <div className="col-4">Admissions are open for the academic year 2021-22</div>
    <div className="col-4" style={{ color:"#0e77ae",fontWeight:600,background: "linear-gradient(173deg, #0dcaf0, #ffff,#ffff, #fffcfc)" }}>
        <div className="mb-5">
        Empowering student to create solutions for tomorrow's challenge
        </div>
    </div>
  </div>
</div>
<div className='text-center mb-5' style={{padding:"0px 150px"}}>
    <h4 style={{color:"#ec9e0f"}} >INSIGHTS</h4>
    <div style={{fontSize:30}}>SHM Store <b>Marketplace Insights</b></div>
    <p className='text-muted mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus est ducimus voluptatum excepturi iusto neque voluptatem, debitis odio voluptate tenetur!</p>
</div>
    <OwlCarouselComponent />

    <div className='text-center mb-3' style={{padding:"0px 150px"}}>
    <h4 style={{color:"#ec9e0f"}} >NETWORK</h4>
    <div style={{fontSize:30}}>SHM Network <b>Capability</b></div>
    <p className='text-muted mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus est ducimus voluptatum excepturi iusto neque voluptatem, debitis odio voluptate tenetur!</p>
</div>

<div className='container-fluid d-flex justify-content-center align-items-center' style={{height:"500px",background:"rgb(182 220 239 / 39%)"}}>
  <img src={india} alt="" />
</div>
<Footer/>
    </>
  )
}

export default Home