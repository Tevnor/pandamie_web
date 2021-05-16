import React from 'react'
import '../scss/App.scss';


window.onload = function Feed() {
  function viewContent() {
      var el = document.getElementById(omo);
          // el.style.opacity = 1;
          if(el.style.opacity === "0" ) {
              el.style.display = "1";
          }
          else {
              el.style.display = "0";
          }
    
  return (
    <div className="feed">
      <section className="feedSection">
        <p className="feedHeadlineItem" id="h01062021" onMouseOver={viewContent("c01062021")}>01.06.2021 - Jetzt neu im Shop: Sticker und Plakate</p>
        <p className="feedHeadlineItem" id="h29052021" onMouseOver={viewContent("c29052021")}>29.05.2021 - AKTION 20.06.2021: Stuttgart fängt die Pandas ein </p>
        <p className="feedHeadlineItem">27.05.2021 - Live-Debatte: "Strategien gegen die Panda Plage"</p>
        <p className="feedHeadlineItem">18.05.2021 - "Wie konnte das überhaupt passieren?" - Expertenrunde in Live-Konferenz</p>
        <p className="feedHeadlineItem">16.05.2021 - Mit Gummistiefeln durch die Königsstraße: Pandaexkremente unkontrollierbar</p>
        <p className="feedHeadlineItem">15.05.2021 - Auf den Gleisen eingeschlafen: Pandas sorgen für S-Bahn Chaos</p>
      </section>
      <section className="contentSection">
        <div className="feedContent" id="c01062021">
            hello
        </div>
        <div className="feedContent" id="c29052021">
            goodbye
        </div>
      </section>
    </div>
  );
  }

}

export default Feed;
