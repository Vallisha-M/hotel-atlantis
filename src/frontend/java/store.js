







if (document.readyState == 'loading') {
    console.log("loading..")
    document.addEventListener('DOMContentLoaded', ready)
} else {
    console.log("bfore ready")
    ready()
}

function ready() {
    console.log("in ready")
    var removeCartItemButtons = document.getElementsByClassName('item_remove')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
        console.log("in ready1")
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        console.log("in ready2")
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('add_button')

    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        console.log("bfore addtocartclick")
        button.addEventListener('click', addToCartClicked)
    }

  /*  document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)*/
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    console.log("in adtocartclcked")
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('item_name')[0].innerText
    var price = shopItem.getElementsByClassName('item_price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('item_image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
   
    for (var i = 0; i < cartItemNames.length; i++) {
        
      
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart -- change quantity in cart')
            
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="item_remove" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('item_remove')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
       
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

function view()
{ var object={}

    
    
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
var cartRows = cartItemContainer.getElementsByClassName('cart-row')
var cartItems = document.getElementsByClassName('cart-items')[0]
var cartItemNames = cartItems.getElementsByClassName('cart-item-title')

for (var i = 0; i < cartRows.length; i++){
    
    var cartRow = cartRows[i]
    var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
    var quantity = quantityElement.value
    console.log(quantity+cartItemNames[i].innerHTML)
   var ress = cartItemNames[i].innerHTML
   let omg={ress:quantity}
object[ress]=parseInt(quantity)
}
return object
}

export {view,ready}
