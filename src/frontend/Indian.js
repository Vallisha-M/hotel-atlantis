import React from "react"
import "./css/style1.css"
import "./java/store.js"
import { useHistory } from "react-router-dom"

import { view, ready } from "./java/store.js"

import spices from "./img/important-spices-of-Indian-kitchen.jpg"
import cart from "./img/cart.png"
import ts from "./img/tomato-soup.jpg"
import ms from "./img/mushroom-soup.jpg"
import ss from "./img/corn-soup.jpg"
import mcs from "./img/manchow-soup.jfif"
import gm from "./img/gobi-mnchri.jfif"
import bc from "./img/bbcorn-chilli.jfif"
import pt from "./img/Paneer-Tikka.jpg"
import mt from "./img/mushroom-tikka.jfif"
import vm from "./img/momo.jfif"
import bm from "./img/bread-masala.jfif"
import cf from "./img/cheese-fries.jfif"
import sr from "./img/spring-roll.jfif"
import fr from "./img/f-rice.jpg"
import hb from "./img/h-biryani.jfif"

import { Helmet } from "react-helmet"
const Indian = () => {
  ready()
  let history = useHistory()

  if (
    localStorage.getItem("loggedIn") == null ||
    localStorage.getItem("loggedIn") == "false"
  ) {
    localStorage.setItem("proceed", "/indian")
    history.push("/protect")
  }
  var order

  /* async function check() {
    const params = {
      email: email,
      checkin: checkin.toString().slice(0, 10),
      seats: seats,
      time: time,
      order: order
    }
    await axios

    .post("http://localhost:5500/indian_pre/add/", params)
    .then((response) => {
      res = response.data
      console.log(res)
    })
    .catch((error) => {
      alert(error)
      console.log(error)
    })
}
*/

  function finald() {
    var priceEls = document.getElementsByClassName("cart-total-price")
    for (var i = 0; i < priceEls.length; i++) {
      var price = priceEls[i].innerText
      if (price == "$0") alert("CART CANNOT BE EMPTY")
      else {
        localStorage.setItem("amt", price)

        order = view()

        localStorage.setItem("orderlist", JSON.stringify(order))
        console.log("string is" + JSON.stringify(order))
        history.push("/dining/payment")
      }

      /*  await  check().then(() => {
   
   
     if (res.duplicate == 1) alert("Slot taken, Try another date or venue")
     if (res.done == 1)
     {history.push("/dining/indian/payment")} */
    }
  }

  function pop(div) {
    document.getElementById("cartdiv").style.display = "block"
    document.getElementById("hide").style.opacity = 0.1
    document.getElementById("navbar").style.top = "-50px"
    document.getElementById("hide").style.position = "fixed"
    document.getElementsByClassName("add_button").disabled = true
  }
  function hide(div) {
    document.getElementById("cartdiv").style.display = "none"
    document.getElementById("hide").style.opacity = 1
    document.getElementById("navbar").style.top = "0"
    document.getElementById("hide").style.position = "relative"
  }
  //To detect escape button
  document.onkeydown = function (evt) {
    evt = evt || window.event
    if (evt.keyCode == 27) {
      hide("cartdiv")
    }
  }

  return (
    <div>
      <Helmet>
        <title>Indian Palace</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charset='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1' />
      </Helmet>
      <div id='hide'>
        <div className='banner'>
          <img src={spices} width='100%' height='800px' />
          <div className='ioverlayText' align='center'>
            &nbsp;&nbsp;&nbsp;
            <br />
            <br />
            <div className='ijustText' align='center'>
              Indian Palace
            </div>
          </div>
        </div>
        <div>
          <button
            className='cart_button'
            id='cartbtn'
            onClick={() => pop("cartdiv")}
          >
            <img src={cart} height='30px' width='30px' />
          </button>
        </div>
        <h1 className='ih1'>SOUPS</h1>
        <div className='cardlist'>
          <div className='card'>
            <img className='item_image' src={ts} />
            <h2 className='item_name'>Tomato Soup</h2>
            <div className='item_details'>
              <span className='item_price'>$4.00</span>
              <button className='add_button'>Add to Cart</button>
            </div>
          </div>
          <div className='card'>
            <img className='item_image' src={ms} />
            <h2 className='item_name'>Mushroom Soup</h2>
            <div className='item_details'>
              <span className='item_price'>$4.70</span>
              <button className='add_button'>Add to Cart</button>
            </div>
          </div>
          <div className='card'>
            <img className='item_image' src={ss} />
            <h2 className='item_name'>Sweet Corn Soup</h2>
            <div className='item_details'>
              <span className='item_price'>$4.75</span>
              <button className='add_button'>Add to Cart</button>
            </div>
          </div>
          <div className='card'>
            <img className='item_image' src={mcs} />
            <h2 className='item_name'>Manchow Soup</h2>
            <div className='item_details'>
              <span className='item_price'>$4.70</span>
              <button className='add_button'>Add to Cart</button>
            </div>
          </div>
        </div>
        <h1 className='ih1'>STARTERS</h1>
        <div className='cardlist'>
          <div className='card'>
            <img className='item_image' src={gm} />
            <h2 className='item_name'>Gobi Manchurian</h2>
            <div className='item_details'>
              <span className='item_price'>$8.00</span>
              <button className='add_button'>Add to Cart</button>
            </div>
          </div>
          <div className='card'>
            <img className='item_image' src={bc} />
            <h2 className='item_name'>BabyCorn Chilly</h2>
            <div className='item_details'>
              <span className='item_price'>$8.70</span>
              <button className='add_button'>Add to Cart</button>
            </div>
          </div>
          <div className='card'>
            <img className='item_image' src={pt} />
            <h2 className='item_name'>Paneer Tikka</h2>
            <div className='item_details'>
              <span className='item_price'>$7.75</span>
              <button className='add_button'>Add to Cart</button>
            </div>
          </div>
          <div className='card'>
            <img
              className='item_image'
              src={mt}
              alt='loading'
              style={{ width: "100%" }}
            />
            <h2 className='item_name'>Mushroom Tikka</h2>
            <div className='item_details'>
              <span className='item_price'>$8.00</span>
              <button className='add_button'>Add to Cart</button>
            </div>
          </div>
          <div className='card'>
            <img
              className='item_image'
              src={vm}
              alt='loading'
              style={{ width: "100%" }}
            />
            <h2 className='item_name'>Veg Momo</h2>
            <div className='item_details'>
              <span className='item_price'>$6.00</span>
              <button className='add_button'>Add to Cart</button>
            </div>
          </div>
          <div className='card'>
            <img
              className='item_image'
              src={bm}
              alt='loading'
              style={{ width: "100%" }}
            />
            <h2 className='item_name'>Bread Masala</h2>
            <div className='item_details'>
              <span className='item_price'>$5.00</span>
              <button className='add_button'>Add to Cart</button>
            </div>
          </div>
          <div className='card'>
            <img
              className='item_image'
              src={sr}
              alt='loading'
              style={{ width: "100%" }}
            />
            <h2 className='item_name'>Spring Roll</h2>
            <div className='item_details'>
              <span className='item_price'>$5.00</span>
              <button className='add_button'>Add to Cart</button>
            </div>
          </div>
          <div className='card'>
            <img
              className='item_image'
              src={cf}
              alt='loading'
              style={{ width: "100%" }}
            />
            <h2 className='item_name'>Cheese Fries</h2>
            <div className='item_details'>
              <span className='item_price'>$5.00</span>
              <button className='add_button'>Add to Cart</button>
            </div>
          </div>
        </div>
        <h1 className='ih1'>MAIN COURSE</h1>
        <div className='cardlist'>
          <div className='card'>
            <img className='item_image' src={fr} />
            <h2 className='item_name'>Fried Rice</h2>
            <div className='item_details'>
              <span className='item_price'>$10.00</span>
              <button className='add_button'>Add to Cart</button>
            </div>
          </div>
          <div className='card'>
            <img className='item_image' src={hb} />
            <h2 className='item_name'>Hydrabadi Biryani</h2>
            <div className='item_details'>
              <span className='item_price'>$12.70</span>
              <button className='add_button'>Add to Cart</button>
            </div>
          </div>
          <div className='card'>
            <img className='item_image' src='img/aloo gobi1.jpg' />
            <h2 className='item_name'>Aloo Gobi</h2>
            <div className='item_details'>
              <span className='item_price'>$7.75</span>
              <button className='add_button'>Add to Cart</button>
            </div>
          </div>
          <div className='card'>
            <img
              className='item_image'
              src='img/dal-fry.jfif'
              alt='loading'
              style={{ width: "100%" }}
            />
            <h2 className='item_name'>Dal Fry</h2>
            <div className='item_details'>
              <span className='item_price'>$8.00</span>
              <button className='add_button'>Add to Cart</button>
            </div>
          </div>
          <div className='card'>
            <img
              className='item_image'
              src='img/MalaiKoftaCurry-1.jpg'
              alt='loading'
              style={{ width: "100%" }}
            />
            <h2 className='item_name'>Malai Koftha</h2>
            <div className='item_details'>
              <span className='item_price'>$12.00</span>
              <button className='add_button'>Add to Cart</button>
            </div>
          </div>
          <div className='card'>
            <img
              className='item_image'
              src='img/Restaurant-Style-Paneer-Butter-Masala-3.jpg'
              alt='loading'
              style={{ width: "100%" }}
            />
            <h2 className='item_name'>Paneer Butter Masala</h2>
            <div className='item_details'>
              <span className='item_price'>$9.00</span>
              <button className='add_button'>Add to Cart</button>
            </div>
          </div>
          <div className='card'>
            <img
              className='item_image'
              src='img/dumBIRYANI.JPG'
              alt='loading'
              style={{ width: "100%" }}
            />
            <h2 className='item_name'>Dum Biryani</h2>
            <div className='item_details'>
              <span className='item_price'>$12.00</span>
              <button className='add_button'>Add to Cart</button>
            </div>
          </div>
          <div className='card'>
            <img
              className='item_image'
              src='img/Ghee-Rice2-1.jpg'
              alt='loading'
              style={{ width: "100%" }}
            />
            <h2 className='item_name'>Ghee Rice</h2>
            <div className='item_details'>
              <span className='item_price'>$10.00</span>
              <button className='add_button'>Add to Cart</button>
            </div>
          </div>
          <div className='card'>
            <img
              className='item_image'
              src='img/pnrb.jpg'
              alt='loading'
              style={{ width: "100%" }}
            />
            <h2 className='item_name'>Paneer Biryani</h2>
            <div className='item_details'>
              <span className='item_price'>$10.00</span>
              <button className='add_button'>Add to Cart</button>
            </div>
          </div>
          <div className='card'>
            <img
              className='item_image'
              src='img/shahi.jpg'
              alt='loading'
              style={{ width: "100%" }}
            />
            <h2 className='item_name'>Shahi Masala</h2>
            <div className='item_details'>
              <span className='item_price'>$9.00</span>
              <button className='add_button'>Add to Cart</button>
            </div>
          </div>
        </div>
        <h1 className='ih1'>BREAD</h1>
        <div className='cardlist'>
          <div className='card'>
            <img className='item_image' src='img/masala kulcha.jfif' />
            <h2 className='item_name'>Masala Kulcha</h2>
            <div className='item_details'>
              <span className='item_price'>$3.00</span>
              <button className='add_button'>Add to Cart</button>
            </div>
          </div>
          <div className='card'>
            <img className='item_image' src='img/puri.jpg' />
            <h2 className='item_name'>Puri</h2>
            <div className='item_details'>
              <span className='item_price'>$1.70</span>
              <button className='add_button'>Add to Cart</button>
            </div>
          </div>
          <div className='card'>
            <img className='item_image' src='img/alooparatha.jpg' />
            <h2 className='item_name'>Aloo Paratha</h2>
            <div className='item_details'>
              <span className='item_price'>$2.75</span>
              <button className='add_button'>Add to Cart</button>
            </div>
          </div>
          <div className='card'>
            <img className='item_image' src='img/butternan.jfif' />
            <h2 className='item_name'>Butter Nan</h2>
            <div className='item_details'>
              <span className='item_price'>$3.00</span>
              <button className='add_button'>Add to Cart</button>
            </div>
          </div>
        </div>
        <div className='backtotop'>
          <a href='#top'>back to top </a>
        </div>
      </div>
      <div id='cartdiv'>
        <section className='container-d content-section'>
          <h2 className='section-header'>CART</h2>
          <span className='close_cart' onClick={() => hide("cartdiv")}>
            ×
          </span>
          <div className='scroll_div'>
            <div className='cart-row'>
              <span className='cart-item cart-header cart-column'> ITEM</span>
              <span className='cart-price cart-header cart-column'>PRICE</span>
              <span className='cart-quantity cart-header cart-column'>
                QUANTITY
              </span>
            </div>
            <div className='cart-items'></div>
            <div className='cart-total'>
              <strong className='cart-total-title'>Total</strong>
              <strong className='cart-total-price'>$0</strong>
            </div>
          </div>
          <button
            id='btn-primary'
            className='btn-primary'
            style={{ position: "relative", top: "380px" }}
            onClick={async () => await finald()}
            type='button'
          >
            PRE ORDER
          </button>
        </section>
      </div>{" "}
    </div>
  )
}
export default Indian
