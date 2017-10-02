import React from 'react'
//import $ from 'jquery'


export const fixWidow = () => {
  console.log('widow')
    var text = document.querySelectorAll( '.legend-text, p, .sources-section li' );
    for ( var i=0; i<text.length; i++ ) {
      var h1s = text[i].innerHTML.split( ' ' );
      h1s[h1s.length-2] += "&nbsp;" + h1s[h1s.length-1];
      h1s.pop();
      text[i].innerHTML = h1s.join( ' ' );
    }
}
