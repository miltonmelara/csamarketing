import React, { useContext } from 'react';
import './Form.css';
import { SectionContext } from '../../../SectionContext';

const ApplicationForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
  
    try {
      await fetch('https://script.google.com/macros/s/AKfycbxQMctfjWO0CeH-PLTnkkQkL3-zaGwzUCttlFAZ_EVNSdWPkrjO71H8jOJdzj-kfeLh/exec', {
        method: 'POST',
        body: formData
      });
      alert("Your application has been submitted, you should hear from us in a couple of minutes!");
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Form submission failed. Please try again later.');
    }
  };

  const { formRef } = useContext(SectionContext);

  return (
    <div className="application-form-container" id='form' ref={formRef}>
      <h2 className='form-title'>Contact Us For A</h2>
      <h2 className='form-title'>Free Marketing Analysis</h2>
      <form className="application-form" onSubmit={handleSubmit} method="POST" action="https://script.google.com/macros/s/AKfycbxQMctfjWO0CeH-PLTnkkQkL3-zaGwzUCttlFAZ_EVNSdWPkrjO71H8jOJdzj-kfeLh/exec">
        <div className="form-group">
          <label className="form-label">Name:</label>
          <input className="form-input" type="text" name="Name" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label className="form-label">Email:</label>
          <input className="form-input" type="email" name="Email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label className="form-label">Company:</label>
          <input className="form-input" type="text" name="Company" placeholder="Enter your company name" required />
        </div>
        <div className="form-group">
          <label className="form-label">Phone:</label>
          <input className="form-input" type="tel" name="Phone" placeholder="Enter your phone number" required />
        </div>
        <div className="form-group">
          <label className="form-label">Most Important Question:</label>
          <input className="form-input" type="text" name="importantQuestion" placeholder="Your most important question" required />
        </div>
        <div className="form-group">
          <label className="form-label">Message:</label>
          <textarea className="form-textarea" name="Message" placeholder="Enter your message" required />
        </div>
        <button className="form-button" type="submit">Apply</button>
      </form>
    </div>
  );
};

export default ApplicationForm;
