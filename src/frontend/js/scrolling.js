var prevScrollpos = window.pageYOffset
window.onscroll = () => {
  var currentScrollPos = window.pageYOffset
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('navbar').style.top = '0px'
  } else {
    document.getElementById('navbar').style.top = '-50px'
  }
  prevScrollpos = currentScrollPos
}
