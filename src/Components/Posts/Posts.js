import React from 'react';

import Heart from '../../assets/Heart';
import './Post.css';

function Posts() {

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          <div
            className="card"
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/royal-enfield-classic-350-signals-1535613977.jpeg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 150000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> Classic 350-Signals</p>
            </div>
            <div className="date">
              <span>Wed Dec 28 2022</span>
            </div>
          </div>
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/Bullet.png" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 125000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> Bullet 350</p>
            </div>
            <div className="date">
              <span>28/12/2022</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
