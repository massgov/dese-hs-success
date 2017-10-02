import React from 'react'

// const fixWidow = () => {
//     var text = document.querySelectorAll( '.legend-text b' );
//     console.log(text)
//     text.forEach((textItem) => {
//         var wordArray = textItem.innerHTML.split( ' ' );
//         wordArray[wordArray.length-2] += "&nbsp;" + wordArray[wordArray.length-1];
//         wordArray.pop();
//         textItem.innerHTML = wordArray.join( ' ' );
//       }
//     )
// }
const fixWidow = (text) => {
         var wordArray = text.split( ' ' );
         wordArray[wordArray.length-2] += '\u00A0' + wordArray[wordArray.length-1];
         wordArray.pop();
         wordArray = wordArray.join( ' ' );
         return wordArray
}


export default fixWidow;
