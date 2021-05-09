import React from 'react'
import './css/style.css'
import { Helmet } from 'react-helmet'
import $ from 'jquery'
export default function SlideShow() {
  return (
    <section>
      <div className='rt-container'>
        <div className='col-rt-12'>
          <div className='Scriptcontent'>
            <center>
              <main>
                <div
                  id='slide'
                  className='slide'
                  style={{
                    width: '100%',
                    height: '601px',
                    top: '56px',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      backgroundPosition: 'center',
                      backgroundImage: 'url(./img/slide1.jpg)',
                    }}
                  />
                  <div
                    style={{
                      backgroundPosition: 'center',
                      backgroundImage: 'url(./img/slide2.jpg)',
                    }}
                  />
                  <div
                    style={{
                      backgroundPosition: 'center',
                      backgroundImage: 'url(./img/slide3.jpg)',
                    }}
                  />
                  <div
                    style={{
                      backgroundPosition: 'center',
                      backgroundImage: 'url(./img/slide4.jpg)',
                    }}
                  />
                  <div
                    style={{
                      backgroundPosition: 'center',
                      backgroundImage: 'url(./img/slide5.jpg)',
                    }}
                  />
                  <img
                    src='./css/img/bgSlide2.png'
                    style={{
                      position: 'relative',
                      zIndex: 10,
                      float: 'left',
                      top: '300px',
                    }}
                  />
                  <a href='#hotelAtlantis'>
                    <img
                      src='./css/img/scrollDown.png'
                      style={{
                        position: 'absolute',
                        left: '45%',
                        zIndex: 10,
                        float: 'left',
                        top: '490px',
                        height: '150px',
                        width: '200px',
                      }}
                    />
                  </a>
                </div>
              </main>
            </center>
          </div>
        </div>
      </div>
    </section>
  )
}
