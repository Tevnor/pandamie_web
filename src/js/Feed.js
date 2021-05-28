import React from 'react'
// import ReactPlayer from 'react-player'
import '../scss/App.scss';
import '../scss/feed.scss';
import poster001 from '../media/img/Panda_Flyer.png';
import poster002 from '../media/img/Panda_Poster2.png';
import ubahn from '../media/img/ubahn-panda.jpg';
import zuganzeiger from '../media/img/Zuganzeiger.jpg';
import pandaVideo001 from '../media/videos/panda.mp4';


function Feed() {


    return (
      <div className="feed">
        <ul>
          <li className="feedItem" tabindex="0">
            <b className="feedHeadline">01.07.2031 - Jetzt neu im Shop: Sticker und Shirts</b>
            <div className="feedContent">
              <h1 className="contentHeadline">Jetzt neu im Shop: Sticker und Plakate</h1>

              <div className="shopItem" id="si1">
                <div className="shopItemContent">
                  <h2 className="shopItemTitle">Logo Shirt</h2>
                  <p className="shopItemText">Donec mollis, erat id hendrerit imperdiet, turpis ipsum dapibus ligula, eget tristique odio sapien finibus metus.</p>
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
              Donec mollis, erat id hendrerit imperdiet, turpis ipsum dapibus ligula, eget tristique odio sapien finibus metus. In erat neque, consequat quis blandit sed, vulputate maximus lacus. Proin quis dictum quam. Fusce imperdiet ligula id lacus euismod tincidunt. Etiam dignissim dui et leo eleifend, sit amet aliquet dui tincidunt. In hac habitasse platea dictumst. Curabitur posuere mauris ut ipsum rhoncus lacinia eget convallis magna. Aliquam tincidunt enim scelerisque ex blandit consequat. Praesent quis nisi ante. Sed magna ex, condimentum a lorem in, suscipit dictum augue. Maecenas est urna, euismod id ultricies eu, tincidunt vitae odio.
              </p>
              <p className="contentText">
              Sed gravida pharetra euismod. Nam mattis arcu id enim vestibulum molestie. Integer nec efficitur nisl. Ut non ipsum at felis elementum vehicula. Fusce posuere neque elit, vel facilisis metus dictum at. In vel eros sit amet enim euismod tempus. Quisque eu justo ut libero mollis faucibus. Donec tortor purus, efficitur eu massa et, iaculis malesuada velit. Curabitur ullamcorper mauris in felis sodales semper. Donec non nulla vitae dolor pharetra aliquet. Mauris erat ligula, lacinia et lacus sed, fringilla varius dolor. Etiam imperdiet turpis ut facilisis consectetur. Etiam euismod vehicula pretium. Nulla lacinia tortor vitae pulvinar malesuada. Quisque tellus ex, molestie at augue sed, aliquam tristique sem. 
              </p>
              </div>
          </li>
          <li className="feedItem" tabindex="0">
            <b className="feedHeadline">29.06.2031 - AKTION 20.06.2021: Stuttgart fängt die Pandas ein</b>
            <div className="feedContent">
              <h1 className="contentHeadline">AKTION 20.06.2021: Stuttgart fängt die Pandas eine</h1>
              <p className="contentText">
              Donec mollis, erat id hendrerit imperdiet, turpis ipsum dapibus ligula, eget tristique odio sapien finibus metus. In erat neque, consequat quis blandit sed, vulputate maximus lacus. Proin quis dictum quam. Fusce imperdiet ligula id lacus euismod tincidunt. Etiam dignissim dui et leo eleifend, sit amet aliquet dui tincidunt. In hac habitasse platea dictumst. Curabitur posuere mauris ut ipsum rhoncus lacinia eget convallis magna. Aliquam tincidunt enim scelerisque ex blandit consequat. Praesent quis nisi ante. Sed magna ex, condimentum a lorem in, suscipit dictum augue. Maecenas est urna, euismod id ultricies eu, tincidunt vitae odio.
              </p>
              <p className="contentText">
              Sed gravida pharetra euismod. Nam mattis arcu id enim vestibulum molestie. Integer nec efficitur nisl. Ut non ipsum at felis elementum vehicula. Fusce posuere neque elit, vel facilisis metus dictum at. In vel eros sit amet enim euismod tempus. Quisque eu justo ut libero mollis faucibus. Donec tortor purus, efficitur eu massa et, iaculis malesuada velit. Curabitur ullamcorper mauris in felis sodales semper. Donec non nulla vitae dolor pharetra aliquet. Mauris erat ligula, lacinia et lacus sed, fringilla varius dolor. Etiam imperdiet turpis ut facilisis consectetur. Etiam euismod vehicula pretium. Nulla lacinia tortor vitae pulvinar malesuada. Quisque tellus ex, molestie at augue sed, aliquam tristique sem. 
              </p>
              <p className="contentText">
              Donec mollis, erat id hendrerit imperdiet, turpis ipsum dapibus ligula, eget tristique odio sapien finibus metus. In erat neque, consequat quis blandit sed, vulputate maximus lacus. Proin quis dictum quam. Fusce imperdiet ligula id lacus euismod tincidunt. Etiam dignissim dui et leo eleifend, sit amet aliquet dui tincidunt. In hac habitasse platea dictumst. Curabitur posuere mauris ut ipsum rhoncus lacinia eget convallis magna. Aliquam tincidunt enim scelerisque ex blandit consequat. Praesent quis nisi ante. Sed magna ex, condimentum a lorem in, suscipit dictum augue. Maecenas est urna, euismod id ultricies eu, tincidunt vitae odio.
              </p>
              <p className="contentText">
              Sed gravida pharetra euismod. Nam mattis arcu id enim vestibulum molestie. Integer nec efficitur nisl. Ut non ipsum at felis elementum vehicula. Fusce posuere neque elit, vel facilisis metus dictum at. In vel eros sit amet enim euismod tempus. Quisque eu justo ut libero mollis faucibus. Donec tortor purus, efficitur eu massa et, iaculis malesuada velit. Curabitur ullamcorper mauris in felis sodales semper. Donec non nulla vitae dolor pharetra aliquet. Mauris erat ligula, lacinia et lacus sed, fringilla varius dolor. Etiam imperdiet turpis ut facilisis consectetur. Etiam euismod vehicula pretium. Nulla lacinia tortor vitae pulvinar malesuada. Quisque tellus ex, molestie at augue sed, aliquam tristique sem. 
              </p>
              </div>
          </li>
          <li className="feedItem" tabindex="0">
            <b className="feedHeadline" >27.06.2031 - Live-Debatte: "Strategien gegen die Panda Plage"</b>
            <div className="feedContent">
              <h1 className="contentHeadline">Live-Debatte: "Strategien gegen die Panda Plage"</h1>
              <p className="contentText">
              Donec mollis, erat id hendrerit imperdiet, turpis ipsum dapibus ligula, eget tristique odio sapien finibus metus. In erat neque, consequat quis blandit sed, vulputate maximus lacus. Proin quis dictum quam. Fusce imperdiet ligula id lacus euismod tincidunt. Etiam dignissim dui et leo eleifend, sit amet aliquet dui tincidunt. In hac habitasse platea dictumst. Curabitur posuere mauris ut ipsum rhoncus lacinia eget convallis magna. Aliquam tincidunt enim scelerisque ex blandit consequat. Praesent quis nisi ante. Sed magna ex, condimentum a lorem in, suscipit dictum augue. Maecenas est urna, euismod id ultricies eu, tincidunt vitae odio.
              </p>
              <p className="contentText">
              Sed gravida pharetra euismod. Nam mattis arcu id enim vestibulum molestie. Integer nec efficitur nisl. Ut non ipsum at felis elementum vehicula. Fusce posuere neque elit, vel facilisis metus dictum at. In vel eros sit amet enim euismod tempus. Quisque eu justo ut libero mollis faucibus. Donec tortor purus, efficitur eu massa et, iaculis malesuada velit. Curabitur ullamcorper mauris in felis sodales semper. Donec non nulla vitae dolor pharetra aliquet. Mauris erat ligula, lacinia et lacus sed, fringilla varius dolor. Etiam imperdiet turpis ut facilisis consectetur. Etiam euismod vehicula pretium. Nulla lacinia tortor vitae pulvinar malesuada. Quisque tellus ex, molestie at augue sed, aliquam tristique sem. 
              </p>
            </div>
          </li>
          <li className="feedItem" tabindex="0">
            <b className="feedHeadline">18.06.2031 - "Wie konnte das überhaupt passieren?": Expertenrunde in Live-Konferenz</b>
            <div className="feedContent">
              <h1 className="contentHeadline">"Wie konnte das überhaupt passieren?" - Expertenrunde in Live-Konferenz</h1>
              <p className="contentText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <video className="contentVideo" id="pandaVideo001" type="video/mp4" controls muted>
                <source src={pandaVideo001} />
              </video>
              {/* <ReactPlayer className="feedVideo" url="https://www.youtube.com/watch?v=yYp_Shk7XcI" width="40vw" height="22.5vw" tabindex="none" /> */}
              <p className="contentText">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </li>
          <li className="feedItem" tabindex="0">
            <b className="feedHeadline">16.06.2031 - Mit Gummistiefeln durch die Königsstraße: Pandaexkremente unkontrollierbar</b>
            <div className="feedContent">
              <h1 className="contentHeadline">Mit Gummistiefeln durch die Königsstraße: Pandaexkremente unkontrollierbar</h1>
              <p className="contentText">
              Donec mollis, erat id hendrerit imperdiet, turpis ipsum dapibus ligula, eget tristique odio sapien finibus metus. In erat neque, consequat quis blandit sed, vulputate maximus lacus. Proin quis dictum quam. Fusce imperdiet ligula id lacus euismod tincidunt. Etiam dignissim dui et leo eleifend, sit amet aliquet dui tincidunt. In hac habitasse platea dictumst. Curabitur posuere mauris ut ipsum rhoncus lacinia eget convallis magna. Aliquam tincidunt enim scelerisque ex blandit consequat. Praesent quis nisi ante. Sed magna ex, condimentum a lorem in, suscipit dictum augue. Maecenas est urna, euismod id ultricies eu, tincidunt vitae odio.
              </p>
              <p className="contentText">
              Sed gravida pharetra euismod. Nam mattis arcu id enim vestibulum molestie. Integer nec efficitur nisl. Ut non ipsum at felis elementum vehicula. Fusce posuere neque elit, vel facilisis metus dictum at. In vel eros sit amet enim euismod tempus. Quisque eu justo ut libero mollis faucibus. Donec tortor purus, efficitur eu massa et, iaculis malesuada velit. Curabitur ullamcorper mauris in felis sodales semper. Donec non nulla vitae dolor pharetra aliquet. Mauris erat ligula, lacinia et lacus sed, fringilla varius dolor. Etiam imperdiet turpis ut facilisis consectetur. Etiam euismod vehicula pretium. Nulla lacinia tortor vitae pulvinar malesuada. Quisque tellus ex, molestie at augue sed, aliquam tristique sem. 
              </p>
            </div>
          </li>
          <li className="feedItem" tabindex="0">
            <b className="feedHeadline">15.06.2031 - Auf den Gleisen eingeschlafen: Pandas sorgen für S-Bahn Chaos</b>
            <div className="feedContent">
              <h1 className="contentHeadline">Auf den Gleisen eingeschlafen: Pandas sorgen für S-Bahn Chaos</h1>
              <img className="zuganzeiger" src={zuganzeiger} alt="zuganzeiger" />
              <p className="contentText">
              Donec mollis, erat id hendrerit imperdiet, turpis ipsum dapibus ligula, eget tristique odio sapien finibus metus. In erat neque, consequat quis blandit sed, vulputate maximus lacus. Proin quis dictum quam. Fusce imperdiet ligula id lacus euismod tincidunt. Etiam dignissim dui et leo eleifend, sit amet aliquet dui tincidunt. In hac habitasse platea dictumst. Curabitur posuere mauris ut ipsum rhoncus lacinia eget convallis magna. Aliquam tincidunt enim scelerisque ex blandit consequat. Praesent quis nisi ante. Sed magna ex, condimentum a lorem in, suscipit dictum augue. Maecenas est urna, euismod id ultricies eu, tincidunt vitae odio.
              </p>
              <img className="ubahn" src={ubahn} alt="ubahn" />
              <p className="contentText">
              Sed gravida pharetra euismod. Nam mattis arcu id enim vestibulum molestie. Integer nec efficitur nisl. Ut non ipsum at felis elementum vehicula. Fusce posuere neque elit, vel facilisis metus dictum at. In vel eros sit amet enim euismod tempus. Quisque eu justo ut libero mollis faucibus. Donec tortor purus, efficitur eu massa et, iaculis malesuada velit. Curabitur ullamcorper mauris in felis sodales semper. Donec non nulla vitae dolor pharetra aliquet. Mauris erat ligula, lacinia et lacus sed, fringilla varius dolor. Etiam imperdiet turpis ut facilisis consectetur. Etiam euismod vehicula pretium. Nulla lacinia tortor vitae pulvinar malesuada. Quisque tellus ex, molestie at augue sed, aliquam tristique sem. 
              </p>
            </div>
          </li>
          <li className="feedItem" tabindex="0">
            <b className="feedHeadline">09.06.2031 - Vorstellung neuer Plakatentwürfe</b>
            <div className="feedContent">
              <h1 className="contentHeadline">Vorstellung neuer Plakatentwürfe</h1>
              <img className="poster001" src={poster001} alt="poster001" />
              <p className="contentText">
              Donec mollis, erat id hendrerit imperdiet, turpis ipsum dapibus ligula, eget tristique odio sapien finibus metus. In erat neque, consequat quis blandit sed, vulputate maximus lacus. Proin quis dictum quam. Fusce imperdiet ligula id lacus euismod tincidunt. Etiam dignissim dui et leo eleifend, sit amet aliquet dui tincidunt. In hac habitasse platea dictumst. Curabitur posuere mauris ut ipsum rhoncus lacinia eget convallis magna. Aliquam tincidunt enim scelerisque ex blandit consequat. Praesent quis nisi ante. Sed magna ex, condimentum a lorem in, suscipit dictum augue. Maecenas est urna, euismod id ultricies eu, tincidunt vitae odio.
              </p>
              <p className="contentText">
              Sed gravida pharetra euismod. Nam mattis arcu id enim vestibulum molestie. Integer nec efficitur nisl. Ut non ipsum at felis elementum vehicula. 
              Fusce posuere neque elit, vel facilisis metus dictum at. In vel eros sit amet enim euismod tempus. Quisque eu justo ut libero mollis faucibus. Donec tortor purus, efficitur eu massa et, iaculis malesuada velit. Curabitur ullamcorper mauris in felis sodales semper. Donec non nulla vitae dolor pharetra aliquet. Mauris erat ligula, lacinia et lacus sed, fringilla varius dolor. Etiam imperdiet turpis ut facilisis consectetur. Etiam euismod vehicula pretium. Nulla lacinia tortor vitae pulvinar malesuada. Quisque tellus ex, molestie at augue sed, aliquam tristique sem. 
              </p>
              <img className="poster002" src={poster002} alt="poster002" />
              <p className="contentText">
              Donec consectetur porttitor metus sed hendrerit. Ut viverra tempus nisl quis lobortis. Ut metus enim, sodales et ex vel, faucibus eleifend augue. Nunc consectetur, sapien a pharetra placerat, magna dui euismod ipsum, posuere feugiat urna felis in erat. Mauris placerat, augue non scelerisque pellentesque, est arcu commodo lacus, fermentum placerat felis mauris eu dolor. Mauris efficitur lobortis enim, ac blandit urna fringilla sed. Maecenas imperdiet ornare ultricies. Pellentesque tellus sem, euismod sed justo nec, consectetur sagittis massa. Fusce volutpat et est non porta. Etiam auctor, risus at cursus varius, purus nunc facilisis augue, ut tempus nibh nibh varius sem. 
              </p>
              
            </div>
          </li>
        </ul>
      </div>
    );
}
export default Feed;