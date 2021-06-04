import React from 'react'
import '../scss/App.scss';
import '../scss/feed.scss';
import poster001 from '../media/img/Panda_Flyer.png';
import poster002 from '../media/img/Panda_Poster2.png';
import ubahn from '../media/img/ubahn-panda.jpg';
import zuganzeiger from '../media/img/Zuganzeiger.jpg';
import anti from '../media/img/anti.png';
import mlsTalkshow1 from '../media/videos/lmts1_comp.mp4';
import mlsTalkshow2 from '../media/videos/lmts2_comp.mp4';
import mlsTalkshow3 from '../media/videos/lmts3_comp.mp4';
import mlsTalkshow4 from '../media/videos/lmts4_comp.mp4';
import mlsInterview from '../media/videos/lmsi.mp4';




function Feed() {


    return (
      <div className="feed">
        <ul>
          <li className="feedItem" tabindex="0">
            <b className="feedHeadline">01.07.2031 - Jetzt neu im Shop: Shirts, Hoodies, Taschen</b>
            <div className="feedContent">
              <h1 className="contentHeadline">Jetzt neu im Shop: Shirts, Hoodies und Totes</h1>
              <div className="t-m-container" id="tmc-top-1">
                <div className="shopItem" id="feed-si1">
                  <div className="shopItemContent">
                    <h2 className="shopItemTitle">Logo Shirt</h2>
                    <p className="shopItemText">Schlichtes, schickes T-Shirt aus Bio-Baumwolle mit unserem Pandamie-Logo auf der Brust.</p>
                    <button className="shopButton">Größe wählen</button>
                    <button 
                      className="colorButton" 
                      id="cpb1"
                      >
                    </button>
                    <button 
                      className="colorButton" 
                      id="cpb2"
                      >
                    </button>
                    <button 
                      className="colorButton" 
                      id="cpb3"
                      >
                    </button>
                  </div>
                </div>
                <p className="contentText">
                  Damit ihr unsere Initiative unterstützen könnt und gleichzeitig schick dabei ausseht, haben wir für euch ein bisschen Merch entworfen! Wie hier im Preview zu sehen gibt es ein neues Shirt und das in drei Farben: schwarz, lila und grün!
                </p>
                <p className="contentText">
                  Für stilsicheres Auftreten egal im Supermarkt, im Park oder der Uni-Bibliothek haben wir für euch noch klassische Tote-Bags entworfen.
                </p>
                <p className="contentText">
                  Zudem haben wir noch einen extrem gemütlichen Hoodie für euch, versehen mit einer unsrer Pandaillustrationen auf der Brust! Wer kann bei diesem Anblick noch das unbarmherzige Vorhaben der Regierung unterstützen? Trag diesen Hoodie als Zeichen für einen humanen Umgang mit diesen unschuldigen Tieren!
                </p>
              </div>
              <div className="t-m-container">
                <p className="contentText">
                  Durchstöber doch einfach mal unsreren Online-Shop, vielleicht findest du ja etwas für dich. Jegliche profite werden sofort wieder in die Initiative reinvestiert, also wenn dir Pandas genau so am Herzen liegen wie uns, dann unterstütze uns mit einer Merchbestellung! Alle Stücke sind natürlich aus fairer Herstellung!
                </p>
              </div>
            </div>
          </li>

          <li className="feedItem" tabindex="0">
            <b className="feedHeadline" >27.06.2031 - AKTION: PANDAMIE DEMO 14. JULI</b>
            <div className="feedContent">
              <h1 className="contentHeadline">PANDAMIE ruft zur Demo gegen den Regierungsbeschluss auf!</h1>
              <div className="t-m-container">
                <img className="anti002" id="antibig" src={anti} alt="anti" />
                <p className="contentText">
                  Donec mollis, erat id hendrerit imperdiet, turpis ipsum dapibus ligula, eget tristique odio sapien finibus metus. In erat neque, consequat quis blandit sed, vulputate maximus lacus. Proin quis dictum quam. Fusce imperdiet ligula id lacus euismod tincidunt. Etiam dignissim dui et leo eleifend, sit amet aliquet dui tincidunt. In hac habitasse platea dictumst. Curabitur posuere mauris ut ipsum rhoncus lacinia eget convallis magna. Aliquam tincidunt enim scelerisque ex blandit consequat. Praesent quis nisi ante. Sed magna ex, condimentum a lorem in, suscipit dictum augue. Maecenas est urna, euismod id ultricies eu, tincidunt vitae odio.
                </p>
                <p className="contentText">
                  Sed gravida pharetra euismod. Nam mattis arcu id enim vestibulum molestie. Integer nec efficitur nisl. Ut non ipsum at felis elementum vehicula. Fusce posuere neque elit, vel facilisis metus dictum at. In vel eros sit amet enim euismod tempus. Quisque eu justo ut libero mollis faucibus. Donec tortor purus, efficitur eu massa et, iaculis malesuada velit. Curabitur ullamcorper mauris in felis sodales semper. Donec non nulla vitae dolor pharetra aliquet. Mauris erat ligula, lacinia et lacus sed, fringilla varius dolor. Etiam imperdiet turpis ut facilisis consectetur. Etiam euismod vehicula pretium. Nulla lacinia tortor vitae pulvinar malesuada. Quisque tellus ex, molestie at augue sed, aliquam tristique sem. 
                </p>
              </div>
              <div className="t-m-container">
                <p className="contentText">
                  Sed gravida pharetra euismod. Nam mattis arcu id enim vestibulum molestie. Integer nec efficitur nisl. Ut non ipsum at felis elementum vehicula. Fusce posuere neque elit, vel facilisis metus dictum at. In vel eros sit amet enim euismod tempus. Quisque eu justo ut libero mollis faucibus. Donec tortor purus, efficitur eu massa et, iaculis malesuada velit. Curabitur ullamcorper mauris in felis sodales semper. Donec non nulla vitae dolor pharetra aliquet. Mauris erat ligula, lacinia et lacus sed, fringilla varius dolor. Etiam imperdiet turpis ut facilisis consectetur. Etiam euismod vehicula pretium. Nulla lacinia tortor vitae pulvinar malesuada. Quisque tellus ex, molestie at augue sed, aliquam tristique sem. 
                </p>
              </div>
            </div>
          </li>

          

          <li className="feedItem" tabindex="0">
            <b className="feedHeadline">29.06.2031 - Regierung beschließt grausame Offensive</b>
            <div className="feedContent">
              <h1 className="contentHeadline">Gefühllose Regierung beordert eine gnadenlose Jagt auf die Pandas</h1>
              <div className="t-m-container" id="tmc-top-2">
                <p className="contentText">
                  Dieser Beschluss ist an Unbarmherzigkeit nicht mehr zu übertreffen. Die Tumulte der Pandas rund um die Innenstadt scheint für diese Leute wohl ein ausreichender Grund zu sein, jegliche Lebensrechte der komplett unverschuldeten Pandas zu annullieren.
                </p>
              </div>
              <div className="t-m-container">
                <img className="anti001" src={anti} alt="anti" />
                <p className="contentText">
                  Gerade jetzt wird es wichtig, dass wir noch lauter werden und uns für eine humane Behandlung mit diesen Tieren einsetzen! Woher nehmen sie sich dieses Recht, aufgrund von bloßen Sachbeschädigungen, Störungen im Transportwesen, oder reiner Gleichgültigkeit, über die Existenz von diesen gutartigen Lebewesen zu entscheiden? Es ist ja nicht so, dass die Pandas eines morgens in ihrer natürlichen Umgebung in Südostchina aufgwacht sind, einen Flugapparat aus Bambus gebaut haben und entschieden haben nach Stuttgart zu fliegen um hier Randale zu machen.
                </p>
                <p className="contentText">
                  Was hier vor sich geht ist nichts weiteres als ein Sündenbockritus, um die inkompetente Regierung, sowie die schuldtragenden Wissenschaftler und deren Geldgeber aus der Affäre zu ziehen. 
                  Zu hoffen, dass das ganze mit dem nächsten Nachrichtenzyklus in Vergessenheit geraten wird, ist jedoch eine Fehlkalkulation. 
                  Wir lassen uns nicht leise kriegen. Eine von uns organisierte Demo wird bald angekündigt.
                </p>
              </div>
            </div>
          </li>

          <li className="feedItem" tabIndex="0">
            <b className="feedHeadline">09.06.2031 - Vorstellung neuer Flugblätter</b>
            <div className="feedContent">
              <h1 className="contentHeadline">Vorstellung unserer neuen Flyer zur Bekanntmachung unserer Initiative</h1>
              <div className="t-m-container">
                <img className="poster001" src={poster001} alt="poster001" />
                <p className="contentText">
                  Um für unsere Initiative zur Lösung der Pandamie für öffentliches Aufsehen zu sorgen, haben zwei unserer Mitglieder schicke Flyer entworfen!
                </p>
                <p className="contentText">
                  Zum einen haben wir eine orange-gelbe Ausführung, bei dem der Stuttgarter Schlossplatz dargestellt wird. Hier sind die Pandas für das zu sehen, was sie wirklich sind: unschuldige und harmlose Tiere! Donec consectetur porttitor metus sed hendrerit. Ut viverra tempus nisl quis lobortis. Ut metus enim, sodales et ex vel, faucibus eleifend augue. Nunc consectetur, sapien a pharetra placerat, magna dui euismod ipsum, posuere feugiat urna felis in erat. Donec consectetur porttitor metus sed hendrerit. Ut viverra tempus nisl quis lobortis. Ut metus enim, sodales et ex vel, faucibus eleifend augue. Nunc consectetur, sapien a pharetra placerat, posuere feugiat urna felis in erat.
                </p>
              </div>
              <div className="t-m-container" id="tmc-p002">
                <img className="poster002" src={poster002} alt="poster002" />
                <p className="contentText">
                  Des Weiteren haben wir eine lila-blaue Version - hier haben wir den Stuttgarter Landtag abgebildet, gerade um einen deutlichen Appell an die Politik zu machen. Donec consectetur porttitor metus sed hendrerit. Ut viverra tempus nisl quis lobortis. Ut metus enim, sodales et ex vel, faucibus eleifend augue. Nunc consectetur, sapien a pharetra placerat, magna dui euismod ipsum, posuere feugiat urna felis in erat. Donec consectetur porttitor metus sed hendrerit. Ut viverra tempus nisl quis lobortis. Ut metus enim, sodales et ex vel, faucibus eleifend augue. Nunc consectetur, sapien a pharetra placerat, posuere feugiat urna felis in erat.
                </p>   
              </div>
            </div>
          </li>


          <li className="feedItem" tabindex="0">
            <b className="feedHeadline">18.06.2031 - Die Larkus Manz Show - Talkrunde mit Experten und Bürgern</b>
            <div className="feedContent">
              <h1 className="contentHeadline">Larkus Manz lädt zur Talkrunde zum Pandaproblem ein</h1>
              <div className="t-m-container" id="tmc-top-4">
                <p className="contentText">
                  In einer Sonderausstrahlung der Larkus Manz Show wurden Experten, Bürger und andere Persönlichkeiten eingeladen, um von ihren Sichtweisen und Meinungen berichten zu können. Was folgt ist ein durchwasenes Spektrum zwischen Gelehrsamkeiten und Verschwörungstheorien.
                </p>
              </div>

              <div className="t-m-container">
                <video className="talkVideo" id="mlsTalkshow1" type="video/mp4" controls>
                  <source src={mlsTalkshow1} />
                </video>
                <p className="contentText">
                  Der in Fachkreisen bekannte Pandaexperte Professor Doktor Wilhelm von Pandaheim IV gibt ein emotionales Gutachten ab, in dem er für die Unschuld und Lebensheiligkeit dieser Tiere plädiert. 
                  Ein wahnsinnig wichtiger Beitrag für das Wohlergehen der Pandas, sowie für unsere Initiative - bravo, Herr Professor!
                </p>
              </div>

              <div className="t-m-container">
                <video className="talkVideo" id="mlsTalkshow2" type="video/mp4" controls>
                  <source src={mlsTalkshow2} />
                </video>               
                <p className="contentText">
                  Ein bedeutender Moment für unsere Intiative! Einer unserer Aktivisten hat es geschafft von einer Außenreporterin der Larkus Manz Show interviewt zu werden, das sollte uns einen massiven Boost für unsrere Reichweite geben! 
                  An alle die auch trotz der Indifferenz des Moderators nach dieser Sendung zu uns gestoßen sind: herzlich Willkommen!
                </p>
              </div>

              <div className="t-m-container">
                <video className="talkVideo" id="mlsTalkshow3" type="video/mp4" controls>
                  <source src={mlsTalkshow3} />
                </video>
                <p className="contentText">
                  Die Sendung nimmt eine...nennen wir es mal "skurrile" Wendung. Nach diesen Beiträgen des anonymen Teilnehmers mit verstellter Stumme und des leicht verwirrten Rentners Waldemar scheint der Damm für manische Verschwörungstheorien jeglicher Art nun endgültig gebrochen zu sein.
                </p>
              </div>

              <div className="t-m-container">
                <video className="talkVideo" id="mlsTalkshow4" type="video/mp4" controls>
                  <source src={mlsTalkshow4} />
                </video>
                <p className="contentText">
                  Die Messlatte hing nun so tief, dass dieser Live-TV Gottesdienst des fanatischen Bischofs schon als normal betrachtet werden könnte.
                  Die finalen Worte des Moderators zeigen, dass die beiden Herren zu Beginn der Talkrunde eine Bastei der Vernunft sind.
                  Dadurch sollten wir einige AnhängerInnen dazu gewonnen haben! 
                </p>
              </div>
            </div>
          </li>

          <li className="feedItem" tabIndex="0">
            <b className="feedHeadline">15.06.2031 - Auf den Gleisen eingeschlafen...</b>
            <div className="feedContent">
              <h1 className="contentHeadline">Auf den Gleisen eingeschlafen: Pandas sorgen für S-Bahn Chaos</h1>
              <div className="t-m-container">
                <img className="zuganzeiger" src={zuganzeiger} alt="zuganzeiger" />
                <p className="contentText">
                  Donec mollis, erat id hendrerit imperdiet, turpis ipsum dapibus ligula, eget tristique odio sapien finibus metus. In erat neque, consequat quis blandit sed, vulputate maximus lacus. Proin quis dictum quam. Fusce imperdiet ligula id lacus euismod tincidunt. Etiam dignissim dui et leo eleifend, sit amet aliquet dui tincidunt. In hac habitasse platea dictumst. Curabitur posuere mauris ut ipsum rhoncus lacinia eget convallis magna. Aliquam tincidunt enim scelerisque ex blandit consequat. Praesent quis nisi ante. Sed magna ex, condimentum a lorem in, suscipit dictum augue. Maecenas est urna, euismod id ultricies eu, tincidunt vitae odio.
                </p>
              </div>
              <div className="t-m-container">
                <img className="ubahn" src={ubahn} alt="ubahn" />
                <p className="contentText">
                  Sed gravida pharetra euismod. Nam mattis arcu id enim vestibulum molestie. Integer nec efficitur nisl. Ut non ipsum at felis elementum vehicula. Fusce posuere neque elit, vel facilisis metus dictum at. In vel eros sit amet enim euismod tempus. Quisque eu justo ut libero mollis faucibus. Donec tortor purus, efficitur eu massa et, iaculis malesuada velit. Curabitur ullamcorper mauris in felis sodales semper. Donec non nulla vitae dolor pharetra aliquet. Mauris erat ligula, lacinia et lacus sed, fringilla varius dolor. Etiam imperdiet turpis ut facilisis consectetur. Etiam euismod vehicula pretium. Nulla lacinia tortor vitae pulvinar malesuada. Quisque tellus ex, molestie at augue sed, aliquam tristique sem. 
                </p>
              </div>
            </div>
          </li>

          <li className="feedItem" tabIndex="0">
            <b className="feedHeadline">16.06.2031 - Die Larkus Manz Show - Das erste Interview</b>
            <div className="feedContent">
              <h1 className="contentHeadline">Larkus Manz im exklusiven Interview mit Wilhelma-Laborassistenten Tom</h1>
              <div className="t-m-container">
                <p className="contentText">
                  Nach Tagen anhaltendem Tohuwabohus und Inkompetenz der Regierung gelang es dem Polit-Talkshow Host Larkus Manz an ein exklusives Interview zu geraten. Bisher hatte es keinerlei offiziellen Stellungnahmen bezüglich der Ursache oder Schuld an der Panda-Situation gegeben, doch mit der Kontaktaufnahme zu Tom, der direkt am vermeintlichen Ort des Geschehens als Laborassistent angestellt war, könnte sich dies nun ändern.
                </p>
              </div>  
              <div className="t-m-container">
                <video className="talkVideo" id="mlsInterview" type="video/mp4" controls>
                  <source src={mlsInterview} />
                </video>
                <p className="contentText">
                Sed gravida pharetra euismod. Nam mattis arcu id enim vestibulum molestie. Integer nec efficitur nisl. Ut non ipsum at felis elementum vehicula. Fusce posuere neque elit, vel facilisis metus dictum at. In vel eros sit amet enim euismod tempus. Quisque eu justo ut libero mollis faucibus. Donec tortor purus, efficitur eu massa et, iaculis malesuada velit. Curabitur ullamcorper mauris in felis sodales semper. Donec non nulla vitae dolor pharetra aliquet. Mauris erat ligula, lacinia et lacus sed, fringilla varius dolor. Etiam imperdiet turpis ut facilisis consectetur. Etiam euismod vehicula pretium. Nulla lacinia tortor vitae pulvinar malesuada. Quisque tellus ex, molestie at augue sed, aliquam tristique sem. 
                </p>
              </div>
            </div>
          </li>

          
        </ul>
      </div>
    );
}
export default Feed;