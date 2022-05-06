import React from 'react';
import '../css/cards.css';
import '../css/home.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Những tin tức mới nhất về y tế</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://res.cloudinary.com/don1bfybr/image/upload/v1651676760/Bai%20tap%20lon/blog-1_dvdzs9.jpg'
              text='Hiện nay các nhà khoa học đã tìm ra một loại vaccine có khả năng chống lại AIDS'
              label='Tin tức'
              path='/services'
            />
            <CardItem
              src='https://res.cloudinary.com/don1bfybr/image/upload/v1651676760/Bai%20tap%20lon/blog-2_ql2eyd.jpg'
              text='Triển khai đăng ký khám bệnh'
              label='Thông báo'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://res.cloudinary.com/don1bfybr/image/upload/v1651676760/Bai%20tap%20lon/blog-3_x0pzoe.jpg'
              text='Sự xuất hiện của vị Giáo sư,Tiến sĩ Bác sĩ John Anderson'
              label='Người nổi tiếng'
              path='/services'
            />
            <CardItem
              src='https://res.cloudinary.com/don1bfybr/image/upload/v1651724727/Bai%20tap%20lon/pexels-evg-kowalievska-1170979_xlwcg1.jpg'
              text='Hợp tác giữa các bệnh viện trên thế giới'
              label='Y tế'
              path='/products'
            />
            <CardItem
              src='https://res.cloudinary.com/don1bfybr/image/upload/v1651724767/Bai%20tap%20lon/pexels-jonathan-meyer-668298_cxlcqp.jpg'
              text='Thành lập cơ sở mới của bệnh viện Hòa Bình' 
              label='Xây dựng'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
