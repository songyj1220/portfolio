import { useState } from "react";
import { send } from 'emailjs-com';
import "./contact.scss";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    send(
      'service_x8khx3m',
      'template_6lrrbgl',
      toSend,
      'user_l8dRsUVqDDEP8vuYb1PYt'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSent(true);
        setToSend({ ...toSend, reply_to: "", message: "" });

      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input 
          type="text" 
          name='reply_to'
          placeholder="Your email" 
          value={toSend.reply_to} 
          onChange={handleChange}
          />
          <textarea 
          placeholder="Your Message"
          name='message'
          value={toSend.message}
          onChange={handleChange}>
          </textarea>
          <button type="submit">Send</button>
          {sent && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}