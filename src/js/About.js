import React from 'react'
import '../scss/App.scss';
import '../scss/about.scss';
import panda001 from '../media/img/panda1.png'

function About() {
  return (
    <div className="about">
      <section className="mediaSection">
      </section>
      <section className="textSection">
        <p className="aboutText" id="ct1" tabIndex="0">
          Der Ursprung der Pandamie lässt sich zurückverfolgen auf Ereignisse in der Wilhelma. 
          Dort wurde seit Jahren an einem Potenzmittel gearbeitet, um die vom Aussterben bedrohte Art der Pandas zu retten. 
          Die Wissenschaftlicher der Wilhelma forschten insgeheim an einem Mittel, welches die Pandas dazu führen soll, sich stärker fortzupflanzen. 
          Es gelang den Forschern nach vielen Jahren das Mittel herzustellen. 
          Erste Tests mit Ratten haben die Wirksamkeit des Mittels belegt, jedoch keine gravierenden Nebenwirkungen aufzeigen können.
        </p>
        <p className="aboutText" id="ct2" tabIndex="0"> 
          Im Anschluss an diese positiven Testergebnisse wurde das Mittel den ersten Pandas injiziert, woraufhin die Wirksamkeit nochmals bestätigt werden konnte. 
          Im Laufe der nächsten zwei Jahren konnte ein großer Erfolg bemessen werden, da die Pandas sich währenddessen um fast das Doppelte vermehren konnte. 
          Nun standen die Verantwortlichen der Wilhelma vor einer großen Herausforderung, denn das Gehege wurde nach und nach zu klein, weswegen ein neues Gehege für die Pandas erbaut werden musste. 
          Die Größe des neuen Geheges sorgte dafür, dass es schwieriger wurde, alle Pandas im Blick zu behalten.
        </p>
        <p className="aboutText" id="ct3" tabIndex="0"> 
          Ab diesem Zeitpunkt nahm das Ausmaß der Pandamie seinen Lauf. Durch einen menschlichen Fehler gelang es den Tieren nachts, aus dem Gehege auszubrechen und einen Weg aus der Wilhelma zu finden. 
          Allen Beteiligten war zu diesem Zeitpunkt noch nicht klar, dass das Serum mit vergangener Zeit immer stärker wirkt. 
          Schon bald kamen erste Berichte auf, dass überall in Stuttgart Pandas gesichtet wurden. 
          Mittlerweile sehen wir das ganze Ausmaß von Wissenschaftlern, welche es mit dem Artenschutz zu gut gemeint haben.
        </p>
        <p className="aboutText" id="ct4" tabIndex="0"> 
          Stuttgart steht nun vor einer großen Herausforderung, den Ausbruch der Pandas in Kontrolle zu bekommen. Zum einen muss man die Ausbreitung in weitere Regionen rund um Stuttgart verhindern, zum anderen muss das verursachte Chaos der Pandas in der Stadt wieder bereinigt werden. Außerdem muss sichergestellt werden, dass alle Tiere artgerecht betreut und gepflegt werden.
          Hierbei kommen wir ins Spiel: Wir sind eine Initiative, welche sich als Ziel gesetzt hat, diese Herausforderung zu bewältigen. 
          Um dieses Ziel zu erreichen, benötigen wir mehr Menschen, welche bereit dazu sind, uns in dieser wichtigen Sache zu unterstützen. Wir haben ein Programm ins Leben gerufen, welches als Basis die Adoption von Pandas für Privatpersonen zugänglich machen soll.
          Wir zählen auf euch!
        </p>
        <img className="aboutImg" id="panda001" src={panda001} alt="panda001" />
      </section>
    </div>
  );
}

export default About;
