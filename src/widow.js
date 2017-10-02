import React from 'react'

const fixWidow = () => {
    var text = document.querySelectorAll( '.legend-text b' );
    text.forEach((textItem) => {
        var wordArray = textItem.innerHTML.split( ' ' );
        wordArray[wordArray.length-2] += "&nbsp;" + wordArray[wordArray.length-1];
        wordArray.pop();
        textItem.innerHTML = wordArray.join( ' ' );
      }
    )
}


export default fixWidow;
