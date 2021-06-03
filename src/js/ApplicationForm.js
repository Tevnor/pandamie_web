import React from 'react'
import '../scss/App.scss';
import '../scss/applicationForm.scss'
import bike1 from '../media/img/bike1.png'
import bike2 from '../media/img/bike2.png'

function ApplicationForm() {
  return (
    <div className="applicationForm">
      <section className="container" tabIndex="0">
        <form action="/about">
          <div className="row" id="row0">
            <div className="col-25">
              <label for="fname">Vorname</label>
            </div>
            <div className="col-75">
              <input type="text" id="fname" name="firstname" placeholder="Dein Vorname..." />
            </div>
          </div>
          <div className="row" id="row1">
            <div className="col-25">
              <label for="lname">Nachname</label>
            </div>
            <div className="col-75">
              <input type="text" id="lname" name="lastname" placeholder="Dein Nachname..." />
            </div>
          </div>
          <div className="row" id="row2">
            <div className="col-25">
              <label for="email">E-Mail</label>
            </div>
            <div class="col-75">
              <input type="text" id="email" name="emailaddress" placeholder="Deine E-Mail Adresse..." />
            </div>
          </div>
          <div className="row" id="row3">
            <div className="col-25">
              <label for="location">Wohnort</label>
            </div>
            <div className="col-75">
              <input type="text" id="loc" name="location" placeholder="Dein Wohnort..." />
            </div>
          </div>
          <div className="row" id="row4">
            <div className="col-25">
              <label for="subject">Anschreiben</label>
            </div>
            <div className="col-75">
              <textarea id="subject" name="subject" rows="4" placeholder="Erzähl uns, warum du als KandidatIn geeignet wärst..." ></textarea>
            </div>
          </div>
          <div className="row" id="row5">
            <input type="submit" value="Submit" />
          </div>
          <div className="row" id="bikeRow">
            <div className="bikeDiv">
              <img className="bikeImage" id="bikeTop" src={bike1} alt="bike1" />
              <img className="bikeImage" id="bikeBottom" src={bike2} alt="bike2" />
            </div>
          </div>
        </form>
      </section> 
    </div>
  );
}

export default ApplicationForm;
