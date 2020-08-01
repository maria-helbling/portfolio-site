// let cards = document.getElementsByClassName('flipcard');

// // Loop through all the card elements
// Array.from(cards).forEach((card) => {

//    // Track the clicks on the card element
//    card.addEventListener('click', () => {

//     // Toggle the `flippedstate` CSS class
//     card.classList.toggle('card--flipped');
//     console.log("Card clicked!");
//   });
// });

$('.flipcard').on('click', function(){
    $(this).toggleClass('card--flipped')
})