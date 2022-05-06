import React from 'react';
import '../App.css';
import '../css/product.css'

export default function Examination() {
  return (
    <>
      <section class="book" id="book">
                <h1 class="heading"> <span> ĐẶT LỊCH </span> KHÁM NGAY </h1>    
                <div class="row">
                    <div class="image">
                        <img src="https://res.cloudinary.com/don1bfybr/image/upload/v1651725927/Bai%20tap%20lon/pexels-linkedin-sales-navigator-2182976_d5tfho.jpg" alt=""/>
                    </div>
                    <form action="">
                        <h3>Hẹn lịch khám</h3>
                        <input type="text" placeholder="họ và tên của bạn" class="box"/>
                        <input type="text" placeholder="số điện thoại" class="box"/>
                        <input type="email" placeholder="email" class="box"/>
                        <input type="date" class="box"/>
                        <input type="submit" value="đặt lịch ngay" class="btn"/>
                    </form>
                </div>
            </section>
    </>
  )
}
