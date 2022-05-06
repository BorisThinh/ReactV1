import React from 'react';
import '../App.css';
import { Button } from './Button';
import '../css/home.css';
import Cards from './Cards';

function HeroSection() {
  return (
      <>
    <div className='hero-container'>
      <video src='https://res.cloudinary.com/don1bfybr/video/upload/v1651724455/Bai%20tap%20lon/production_ID_4121322_rwj12a.mp4' autoPlay loop muted />
      <h1>CHÀO MỪNG ĐẾN VỚI PHÒNG KHÁM ĐA KHOA HÒA BÌNH</h1>
      <p>Bạn đang tìm kiếm dịch vụ gì ở chúng tôi ?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>


    <Cards />

</>
  );
}

export default HeroSection;
