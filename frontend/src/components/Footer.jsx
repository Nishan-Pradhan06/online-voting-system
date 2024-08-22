import React from 'react'

const Footer = () => {
  return (
      <footer id="footer">
          <div id="footer-top">
              <div id="footer-details">
                  <div id="logo">
                      <img src="./assets/logo-ele.png" alt="logo" />
                      <p>कान्तिपथ, काठमाण्डौ</p>
                      <p>फोन: (९७७-१) ५३२८६६३, (टोल फ्री ११०२ )</p>
                      <p>ईमेल : info@election.gov.np</p>
                  </div>
              </div>
              <hr />
              <div className="footer-quick-links">
                  <h3 className="footer-h4">द्रुत लिंकहरू</h3>
                  <p><a href="#">गृह मन्त्रालय</a></p>
                  <p><a href="#">प्रधानमन्त्री तथा मन्त्रिपरिषद्को कार्यालय</a></p>
              </div>
              <div className="footer-quick-links">
                  <h3 className="footer-h4">द्रुत लिंकहरू</h3>
                  <p><a href="#">अर्थ मन्त्रालय</a></p>
                  <p><a href="#">सङ्‍घीय मामिला तथा सामान्य प्रशासन मन्त्रालय</a></p>
              </div>
              <div className="footer-social-media">
                  <h3 className="footer-h4">सामाजिक मिडिया लिंकहरू</h3>
                  <div className="footer-icons">
                      <a href="https://facebook.com"><i className="ri-facebook-fill"></i></a>
                      <a href="https://twitter.com"><i className="ri-twitter-x-fill"></i></a>
                  </div>
              </div>
          </div>
      </footer>
  )
}

export default Footer