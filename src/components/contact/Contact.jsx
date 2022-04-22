import "./contact.scss"
import {Phone, Mail, LocationOn} from '@material-ui/icons';



/* export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">
            Contact
          </h1>
          <div className="contact-info">
            <div className="contact-info-item">
              <a className="icon">
                <Phone/>
              </a>
              939805463
            </div>
            <div className="contact-info-item">
              <a className="icon">
                <Mail/>
              </a>
              ines.p.presa@gmail.com
            </div>
            <div className="contact-info-item">
              <a className="icon">
                <LocationOn/>
              </a>
              Braga, Portugal
            </div>
          </div>
        </div>
        <div className="contact-right">
          <p className="contact-desc">
            <b>What's your story?</b> Get in touch. Always available for freelancing if the right project comes along.
          </p>
          <form >
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
} */



export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact-bottom">
        <div className="contact-left">
          <h1 className="contact-title">
            Contact
          </h1>
          <div className="contact-info">
            <div className="contact-info-item">
              <a className="icon">
                <Phone/>
              </a>
              939805463
            </div>
            <div className="contact-info-item">
              <a className="icon">
                <Mail/>
              </a>
              ines.p.presa@gmail.com
            </div>
            <div className="contact-info-item">
              <a className="icon">
                <LocationOn/>
              </a>
              Braga, Portugal
            </div>
          </div>
        </div>
        <div className="contact-right">
          {/* <p className="contact-desc">
            <b>What's your story?</b> Get in touch. Always available for freelancing if the right project comes along.
          </p> */}
          <form >
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Send</button>
          </form>
        </div>
      </div>
      {/* <img 
            className="contact-img"
            src = "assets/violino2.jpg"
            alt=""
      /> */}
      <div className="contact-card">
          <img 
            className="contact-img"
            src = "assets/violino2.jpg"
            alt=""
          />
        </div>
    </div>
  )
}

