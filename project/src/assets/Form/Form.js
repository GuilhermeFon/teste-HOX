import React from "react";

export default () => {

  return (
    <>
      <section className='Container_Four'>
        <div className='Container_txt_Four'>
          <h1>CONTACT OUR TEAM FOR MORE INFORMATION ABOUT INTERIOR DESIGN.</h1>
          <div className="Container_Form">
            <input type="text" placeholder='Your name' id='name' autoComplete='off' />
            <input type="email" placeholder='Your best Email' id='email' autoComplete='off' />
            <textarea name="message_txt" id="message" cols="30" rows="10" placeholder='How Can We help you :)?'></textarea>
            <button type="submit">Send</button>
          </div>
        </div>
        <div className="Footer">
          <p>interiors.cc - 2021</p>
          <p>All rights reserved</p>
        </div>
      </section>
    </>
  )
}