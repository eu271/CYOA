/* global $, alert */

var formCardTypeClicked = function () {
  alert('CardType')
}

var formCardClicked = function () {
  alert('Card')
}

var newType = function () {
  $('#formCard').css('display', 'none')
  $('#formCardType').css('display', 'inline-block')

}

var newCard = function () {
  $('#formCard').css('display', 'inline-block')
  $('#formCardType').css('display', 'none')
}

$(document).ready(function () {

  newType()

  formCardTypeClicked
  formCardClicked
  newType
  newCard
})
