import React from 'react'

import './FileDocuments.css'

const FileDocuments = ({file}) => {
  return (
    <>
        <article className='document__file'>
            <img src={file} alt={file} />    
        </article>
    </>
  )
}

export default FileDocuments