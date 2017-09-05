import React from 'react'
import './FootNote.css'

const FootNoteLink = ({index}) => {
  return(
      <a href={`#footnote-${index}`} className="page-scroll" aria-describedby="footnote-label"><span className="sr-only">see footnote</span><sup>[{index}]</sup></a>
  )
}

export default FootNoteLink
