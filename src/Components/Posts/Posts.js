import React from 'react';

import Heart from '../../assets/Heart';
import './Post.css';

function Posts() {

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span className='font-semibold'>Quick Menu</span>
          <span className='font-semibold'>View more</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <p className=" text-sm text-gray-600">Two Wheeler</p>
              <p className="text-sm text-gray-600 font-normal"> YAMAHA R15V3</p>
            </div>
            <div className="date text-gray-400">
              <span>Tue May 04 2021</span>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image ">
              <img src="../../../Images/fortuner.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 450000</p>
              <p className=" text-sm text-gray-600">Four Wheeler</p>
              <p className="text-sm text-gray-600 font-normal"> Fortuner</p>
            </div>
            <div className="date text-gray-400">
              <span>Tue May 04 2021</span>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/bullet.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <p className=" text-sm text-gray-600">Two Wheeler</p>
              <p className="text-sm text-gray-600 font-normal"> Royal Enfield Dessert Strom</p>
            </div>
            <div className="date text-gray-400">
              <span>Tue May 04 2021</span>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/cbr.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <p className=" text-sm text-gray-600">Two Wheeler</p>
              <p className="text-sm text-gray-600 font-normal"> YAMAHA R15V3</p>
            </div>
            <div className="date text-gray-400">
              <span>Tue May 04 2021</span>
            </div>
          </div>
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span className='font-semibold'>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/swift.png" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <p className=" text-sm text-gray-600">Four Wheeler</p>
              <p className="text-sm text-gray-600 font-normal"> YAMAHA R15V3</p>
            </div>
            <div className="date text-gray-400">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
