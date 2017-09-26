import React from 'react'
import './FootNote.css'

const FootNoteLink = ({index}) => {
  return(
      <a id={`footnoteref${index}`} href={`#footnotemsg${index}`} className="page-scroll" aria-describedby="footnote-label"><span className="sr-only">see footnote</span><sup>[{index}]</sup></a>
  )
}

export default FootNoteLink