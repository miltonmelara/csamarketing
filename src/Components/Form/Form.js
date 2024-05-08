import React from 'react';
import './Form.css';

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
  

  return (
    <div>
      <h2>Apply for a Marketing Strategy Session</h2>
      <form onSubmit={handleSubmit} method="POST" action="https://script.google.com/macros/s/AKfycbxQMctfjWO0CeH-PLTnkkQkL3-zaGwzUCttlFAZ_EVNSdWPkrjO71H8jOJdzj-kfeLh/exec">
        <div>
          <label>Name:</label>
          <input type="text" name="Name" placeholder="Enter your name" required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="Email" placeholder="Enter your email" required />
        </div>
        <div>
          <label>Company:</label>
          <input type="text" name="Company" placeholder="Enter your company name" required />
        </div>
        <div>
          <label>Phone:</label>
          <input type="tel" name="Phone" placeholder="Enter your phone number" required />
        </div>
        <div>
          <label>Most Important Question:</label>
          <input type="text" name="importantQuestion" placeholder="Your most important question" required />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="Message" placeholder="Enter your message" required />
        </div>
        <button type="submit">Apply</button>
      </form>
    </div>
  );
};

export default ApplicationForm;
