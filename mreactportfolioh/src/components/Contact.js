import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="./components/logo2.PNG"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Contact</h1>
            <p>
             <ul>
              <li>mobile: 267.555.5555</li>
             <li>email: mhknowledge@yahoo.com</li>
             <li><a href="https://github.com/mhknowledge" target="_blank">Github</a></li>
             <li><a href="https://linkedin.com/in/muhammed-hassan-a63159207"target="_blank">LinkedIn</a></li>

             </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;