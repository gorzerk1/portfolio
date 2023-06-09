import React from 'react';
import './main.css';

function Main({ portfolioRef, footerRef }) {

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }

  return (
    <div className="Main--body">
      <div className='Main--aboutMe'>
        <div className='Main--leftSide'>
          <div>Hello, I'm</div>
          <div>Dubinin <span>Dima</span></div>
          <div>A Web Developer</div>
          <div className='Main--buttons'>
            <div onClick={() => scrollTo(footerRef)}>HIRE ME</div>
            <div onClick={() => scrollTo(portfolioRef)}>VIEW MY PORTFOLIO</div>
          </div>
        </div>
        <div className='Main--rightSide'>
          <div className='Main--circle'>
            <img src="../../my_picture.jpg" alt="" />
            <div className='Main--talent'>
              <div className='Main--detail'>
                  <img src="../../plus.png" alt="" />
                  <div>ATTENCTION TO DETAIL</div>
                  <div className='Main--sideBackground'></div>
                </div>
                <div className='Main--detail'>
                  <img src="../../plus.png" alt="" />
                  <div>TEAM ORIENTED</div>
                  <div className='Main--sideBackground'></div>
                </div>
                <div className='Main--detail'>
                  <img src="../../plus.png" alt="" />
                  <div>PROBLEM SOLVER</div>
                  <div className='Main--sideBackground'></div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Main;
