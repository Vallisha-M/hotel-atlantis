function validateForm() {
  var selectedVenue = document.forms['form']['venue'].value
  if (selectedVenue == '') {
    alert('Select a Venue')
    return false
  }
  var describedText = document.forms['form']['describe'].value
  if (describedText == '') {
    alert('Describe your event')
    return false
  }
  selectedDate = document.forms['form']['date'].value
  if (selectedDate == '') {
    alert('Select a Date')
    return false
  }

  var today = new Date()
  var dd = parseInt(String(today.getDate()).padStart(2, '0'))
  var mm = parseInt(String(today.getMonth() + 1).padStart(2, '0')) //January is 0
  var yyyy = parseInt(today.getFullYear())
  var yyyy1 = parseInt(selectedDate.slice(0, 4))
  var mm1 = parseInt(selectedDate.slice(5, 7))
  var dd1 = parseInt(selectedDate.slice(8, 10))
  var valueToday = dd + mm * 30 + yyyy * 365
  var valueSelected = dd1 + mm1 * 30 + yyyy1 * 365

  if (valueToday > valueSelected) {
    alert('Enter correct date')
    return false
  }
}
function refresh() {
  var venue = document.forms['form']['venue'].value
  if (venue == '') {
    $('#venueSelected').css('color', 'red')
    venue = 'Venue not selected'
  } else $('#venueSelected').css('color', 'black')
  document.getElementById('venueSelected').innerHTML = venue
  var guest = document.getElementById('guestSelect')
  var guests = guest.value
  if (guests == '') {
    $('#guests').css('color', 'red')
    guests = 'Guests not selected'
  }
  document.getElementById('guests').innerHTML = guests
  var events = document.getElementById('eventType')
  var event = events.value
  document.getElementById('eventTypeSelected').innerHTML = event
  selectedDate = document.forms['form']['date'].value
  if (selectedDate == '') {
    selectedDate = 'Date not selected'
    $('#dateSelected').css('color', 'red')
  } else $('#dateSelected').css('color', 'black')
  document.getElementById('dateSelected').innerHTML = selectedDate
}
