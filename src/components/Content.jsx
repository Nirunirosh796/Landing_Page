import React from 'react'

const Content = () => {
  return (
    <div className='contact-page-wrapper'>
        <h1 className='primary-heading'>Have Question In Mind?</h1>
        <h1 className='primary-headding'>Lets Us Help you</h1>
        <div className='contact-form-container'>
            <input type="text" placeholder='yourmail@gmail.com'/>
            <button className='secondary-button'>Submit</button>
        </div>
    </div>
  )
}

export default Content