import React, { Component } from 'react';

function Contact() {
    return (
      <div className="row ">
        <div class="wrapper row0">
          <div id="topbar" class="hoc clear">
            <div class="fl_left">
              <ul class="nospace">
                <li>
                  <i class="fas fa-phone rgtspace-5"></i> +00 (123) 456 7890
                </li>
                <li>
                  <i class="far fa-envelope rgtspace-5"></i> info@domain.com
                </li>
              </ul>
            </div>
            <div class="fl_right">
              <ul class="nospace">
                <li>
                  <a href="index.html">
                    <i class="fas fa-home"></i>
                  </a>
                </li>
                <li>
                  <a href="#" title="Help Centre">
                    <i class="far fa-life-ring"></i>
                  </a>
                </li>
                <li>
                  <a href="#" title="Login">
                    <i class="fas fa-sign-in-alt"></i>
                  </a>
                </li>
                <li>
                  <a href="#" title="Sign Up">
                    <i class="fas fa-edit"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="medium-12 columns">
          <section id="contact" class="section-padding">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <h2 class="ser-title">Contact us</h2>
                  <hr class="botm-line" />
                </div>
                <div class="col-md-4 col-sm-4">
                  <h3>Contact Info</h3>
                  <div class="space"></div>
                  <p>
                    <i class="fa fa-map-marker fa-fw pull-left fa-2x"></i>321
                    Awesome Street
                    <br /> New York, NY 17022
                  </p>
                  <div class="space"></div>
                  <p>
                    <i class="fa fa-envelope-o fa-fw pull-left fa-2x"></i>
                    info@companyname.com
                  </p>
                  <div class="space"></div>
                  <p>
                    <i class="fa fa-phone fa-fw pull-left fa-2x"></i>+1 800 123
                    1234
                  </p>
                </div>
                <div class="col-md-8 col-sm-8 marb20">
                  <div class="contact-info">
                    <h3 class="cnt-ttl">
                      Having Any Query! Or Book an appointment
                    </h3>
                    <div class="space"></div>
                    <div id="sendmessage">
                      Your message has been sent. Thank you!
                    </div>
                    <div id="errormessage"></div>
                    <form
                      action=""
                      method="post"
                      role="form"
                      class="contactForm"
                    >
                      <div class="form-group">
                        <input
                          type="text"
                          name="name"
                          class="form-control br-radius-zero"
                          id="name"
                          placeholder="Your Name"
                          data-rule="minlen:4"
                          data-msg="Please enter at least 4 chars"
                        />
                        <div class="validation"></div>
                      </div>
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control br-radius-zero"
                          name="email"
                          id="email"
                          placeholder="Your Email"
                          data-rule="email"
                          data-msg="Please enter a valid email"
                        />
                        <div class="validation"></div>
                      </div>
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control br-radius-zero"
                          name="subject"
                          id="subject"
                          placeholder="Subject"
                          data-rule="minlen:4"
                          data-msg="Please enter at least 8 chars of subject"
                        />
                        <div class="validation"></div>
                      </div>
                      <div class="form-group">
                        <textarea
                          class="form-control br-radius-zero"
                          name="message"
                          rows="5"
                          data-rule="required"
                          data-msg="Please write something for us"
                          placeholder="Message"
                        ></textarea>
                        <div class="validation"></div>
                      </div>

                      <div class="form-action">
                        <button type="submit" class="btn btn-form">
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
}
export default Contact;