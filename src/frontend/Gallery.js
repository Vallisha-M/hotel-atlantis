import React from "react"
import { useState, useEffect } from "react"

import { filterSelection } from "./js/gallery_filter"
import "./css/gallery.css"
import standard1 from "./Images/standard1.jfif"
import standard2 from "./Images/standard_room.jpg"
import standard3 from "./Images/standard2.jfif"
import deluxe1 from "./Images/deluxe1.jpg"
import deluxe2 from "./Images/deluxe_room.jpeg"
import deluxe3 from "./Images/deluxe2.jpg"
import suite1 from "./Images/suite1.jpg"
import suite2 from "./Images/suite.webp"
import suite3 from "./Images/suite2.jpg"
import suite4 from "./Images/suite3.jpg"
import suite5 from "./Images/suite4.jpg"
import dining1 from "./Images/dining1.jpg"
import dining2 from "./Images/dining2.jpg"
import dining3 from "./Images/dining3.jpg"
import dining4 from "./Images/dining4.jpg"
import event1 from "./Images/event1.jpg"
import event2 from "./Images/event2.jpg"
import event3 from "./Images/event3.jpg"
import event4 from "./Images/event4.jpg"
import event5 from "./Images/event5.jpg"
import event6 from "./Images/event6.jpeg"
import swimming_pool from "./Images/swimming_pool.jpg"
import tennis_court from "./Images/tennis_court.jpg"
import badminton_court from "./Images/badminton_court.jpg"
import dining_hall from "./Images/dining_hall.jpg"
import billiards from "./Images/billiards.png"
import gym from "./Images/gym.jpg"
import spa from "./Images/spa.jpg"

const Gallery = () => {
  const [header, setHeader] = useState("All Pictures")

  useEffect(() => {
    filterSelection("all")
  }, [])

  return (
    <div>
      <div style={{ margin: "10px", fontFamily: "oxygen" }}>
        <h2>GALLERY</h2>
        <br />
        <div className='myBtnContainer'>
          <button
            className='btn'
            onClick={() => {
              filterSelection("all")
              setHeader("All Pictures")
            }}
          >
            {" "}
            Show all
          </button>
          <button
            className='btn'
            onClick={() => {
              filterSelection("standard")
              setHeader("Standard Rooms")
            }}
          >
            {" "}
            Standard
          </button>
          <button
            className='btn'
            onClick={() => {
              filterSelection("deluxe")
              setHeader("Deluxe Rooms")
            }}
          >
            {" "}
            Deluxe
          </button>
          <button
            className='btn'
            onClick={() => {
              filterSelection("suite")
              setHeader("Suites")
            }}
          >
            {" "}
            Suite
          </button>
          <button
            className='btn'
            onClick={() => {
              filterSelection("dining")
              setHeader("Dining")
            }}
          >
            {" "}
            Dining
          </button>
          <button
            className='btn'
            onClick={() => {
              filterSelection("events")
              setHeader("Events")
            }}
          >
            {" "}
            Events
          </button>
          <button
            className='btn'
            onClick={() => {
              filterSelection("amenities")
              setHeader("Amenities")
            }}
          >
            {" "}
            Ameneties
          </button>
        </div>
        <br />
        <h2>{header}</h2>

        <div className='row'>
          {/*Standard Rooms*/}
          <div className='column standard'>
            <div className='content'>
              <img
                src={standard1}
                style={{ width: "469px", height: "300px" }}
              />
            </div>
          </div>
          <div className='column standard'>
            <div className='content'>
              <img
                src={standard2}
                style={{ width: "469px", height: "300px" }}
              />
            </div>
          </div>
          <div className='column standard'>
            <div className='content'>
              <img
                src={standard3}
                style={{ width: "469px", height: "300px" }}
              />
            </div>
          </div>
          {/*Deluxe Rooms*/}
          <div className='column deluxe'>
            <div className='content'>
              <img src={deluxe1} style={{ width: "469px", height: "300px" }} />
            </div>
          </div>
          <div className='column deluxe'>
            <div className='content'>
              <img src={deluxe2} style={{ width: "469px", height: "300px" }} />
            </div>
          </div>
          <div className='column deluxe'>
            <div className='content'>
              <img src={deluxe3} style={{ width: "469px", height: "300px" }} />
            </div>
          </div>
          {/*Suites*/}
          <div className='column suite'>
            <div className='content'>
              <img src={suite1} style={{ width: "469px", height: "300px" }} />
            </div>
          </div>
          <div className='column suite'>
            <div className='content'>
              <img src={suite2} style={{ width: "469px", height: "300px" }} />
            </div>
          </div>
          <div className='column suite'>
            <div className='content'>
              <img src={suite3} style={{ width: "469px", height: "300px" }} />
            </div>
          </div>
          <div className='column suite'>
            <div className='content'>
              <img src={suite4} style={{ width: "469px", height: "300px" }} />
            </div>
          </div>
          <div className='column suite'>
            <div className='content'>
              <img src={suite5} style={{ width: "469px", height: "300px" }} />
            </div>
          </div>
          {/*Dining*/}
          <div className='column dining'>
            <div className='content'>
              <img src={dining1} style={{ width: "469px", height: "300px" }} />
            </div>
          </div>
          <div className='column dining'>
            <div className='content'>
              <img src={dining2} style={{ width: "469px", height: "300px" }} />
            </div>
          </div>
          <div className='column dining'>
            <div className='content'>
              <img src={dining3} style={{ width: "469px", height: "300px" }} />
            </div>
          </div>
          <div className='column dining'>
            <div className='content'>
              <img src={dining4} style={{ width: "469px", height: "300px" }} />
            </div>
          </div>
          {/*Events*/}
          <div className='column events'>
            <div className='content'>
              <img src={event1} style={{ width: "469px", height: "300px" }} />
            </div>
          </div>
          <div className='column events'>
            <div className='content'>
              <img src={event2} style={{ width: "469px", height: "300px" }} />
            </div>
          </div>
          <div className='column events'>
            <div className='content'>
              <img src={event3} style={{ width: "469px", height: "300px" }} />
            </div>
          </div>
          <div className='column events'>
            <div className='content'>
              <img src={event4} style={{ width: "469px", height: "300px" }} />
            </div>
          </div>
          <div className='column events'>
            <div className='content'>
              <img src={event5} style={{ width: "469px", height: "300px" }} />
            </div>
          </div>
          <div className='column events'>
            <div className='content'>
              <img src={event6} style={{ width: "469px", height: "300px" }} />
            </div>
          </div>
          <div className='column amenities'>
            <div className='content'>
              <img
                src={swimming_pool}
                style={{ width: "469px", height: "300px" }}
              />
            </div>
          </div>
          <div className='column amenities'>
            <div className='content'>
              <img
                src={tennis_court}
                style={{ width: "469px", height: "300px" }}
              />
            </div>
          </div>
          <div className='column amenities'>
            <div className='content'>
              <img
                src={badminton_court}
                style={{ width: "469px", height: "300px" }}
              />
            </div>
          </div>
          <div className='column amenities'>
            <div className='content'>
              <img
                src={dining_hall}
                style={{ width: "469px", height: "300px" }}
              />
            </div>
          </div>
          <div className='column amenities'>
            <div className='content'>
              <img
                src={billiards}
                style={{ width: "469px", height: "300px" }}
              />
            </div>
          </div>
          <div className='column amenities'>
            <div className='content'>
              <img src={gym} style={{ width: "469px", height: "300px" }} />
            </div>
          </div>
          <div className='column amenities'>
            <div className='content'>
              <img src={spa} style={{ width: "469px", height: "300px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
