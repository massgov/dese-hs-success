const fixWidow = (text) => {
         var wordArray = text.split( ' ' );
         wordArray[wordArray.length-2] += '\u00A0' + wordArray[wordArray.length-1];
         wordArray.pop();
         wordArray = wordArray.join( ' ' );
         return wordArray
}


export default fixWidow;
