import React from 'react'
import Footer from '../components/Footer'
import '../App.css'

export const Contact = () => {
  return (
<div className="form3 top bg">
            <div className="container  ">
                <h1 className='mb-4'>Contact Us</h1>
                <div className="row">
                    <div className="col-md-7 col-md-offset-2">
                        <div className="form-bg">
                            <form className="form">
                                <div className="form-group">
                                    <label className="sr-only">Name</label>
                                    <input type="text" className="form-control" required="" id="nameNine" placeholder="Your Name"/>
                                </div>
                                <div class="form-group">
                                    <label className="sr-only">Email</label>
                                    <input type="email" className="form-control" required="" id="emailNine" placeholder="Email Address"/>
                                </div>
                                <div class="form-group">
                                    <label className="sr-only">Name</label>
                                    <textarea className="form-control" required="" rows="7" id="messageNine" placeholder="Write message"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Send</button>
                            </form>
                            </div>
                            </div>
                            </div>
                            </div>
                            <Footer/>
                            </div>

                         
    
  )
}
export default Contact;
