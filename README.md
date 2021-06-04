# Kapitel 7 - Gruppenarbeit

Eigenanteil von:\
Tevin Zielke
@tz024

Meine Aufgabe war es die Webseite für unsere Panda-Initiative zu entwickeln. Ein bisschen Schauspielerei kam auch noch dazu.

## Pandamie Webseite

[Link zur Seite.](https://tevnor.github.io/pandamie_web/)

Mein Fokus hierbei lag bei der Auslegung der verschiedenen Komponenten, sowie die User mit verschiedenen kleinen Mikrointeraktionen mit ein zu binden.\
Ich habe die Seite mit React geschrieben, doch die Interaktionen sind komplett ohne JavaScript, also in reinem CSS.

Mit der Responsiveness hapert es allerdings noch ein Bisschen, es wird sein, dass die Elemente bei manchen Bildschirmauflösungen verzogen werden.\
Am besten in `1920x1080` aufrufen.

### `Landing Page)`

Beim ersten Aufruf der Seite geriet man auf die Landing Page.\
In der Mitte die große Überschrift mit animiertem Gradient zwischen den Hauptfarbtönen der Initiative, sowie integriertem Polygon-Logo.\
Darunter ein Call-to-Action um die Hauptseite zu betreten, mit Hover-Effekt, der eine Unterschrift zieht.\
Zudem verändert sich der Cursor (Handschlag zwischen Panda un Mensch),\
wenn man über bestimmte Felder hovert zu einem Pointer mit ausgetrecktem Zeigefinger.\
Bei Klick auf Enter wird man auf die Hauptseite geleitet.


### `Navigationsleiste`

Auf der Navigationsleiste ist wie auf der Landing Page eine großer Header, der bei Hover seine Farbe verändert und bei Klick wieder zurück auf die Landing Page führt.\
Die Reiter werden bei Hover mit Farbübergang, sowie Unterstrich versehen und via Klick gelangt man auf die verschiedenen Unterseiten.

### `Intro`

Auf der Intro-Seite befindet sich ein paragraphisierter Einleitungstext, der mittig zentriert ist, um links und rechts für White-Space zu sorgen.
Belebt wird dieser White-Space mit einem King-Kong-Panda am Stuttgarter Fernsehturm rechts und einem Panda, der mit einem Hover-Effekt über die Paragraphen animiert ist.\
Bei Hover über Textfeldern ist ein leichter Skaliereffekt, sowie eine Farbveränderung zu sehen.\
Bei Hover über Bildelemente ist noch ein Schattierung als Box-Shadow angebracht, um die Biler hervorzuheben.

### `Feed`

Der Feed ist in links/rechts Unterteilt:\
Links sind die Überschriften mit dezenter Farbveränderung beim Hovern.\
Rechts öffnen sich bei Klick auf die Links die Beiträge mit paragraphisch angeordneten Komponenten mit Bildern oder abspielbaren Videos.\
Hier lag es der Hauptbestandteil darin, die ganzen verschieden Elemente in einer übersichtlichen Art und Weise anzuordnen(, ohne an Funktionalität zu verlieren).

### `Kontakt`

Hier befindet sich ein Formular, falls man Konatkt zu der Initiative aufnehmen möchte.\
Bei Hover wird die Formularkomponente skaliert und mit einer Schattierung versehen, bei Klick wird diese Veränderung festgesetzt.\
Beim Ausfüllen des Formulars fährt beim sukzessiven Klicken auf die Input-Felder ein Panda auf dem Fahrrad ins Bild. Beim letzten Textfeld rast er mit einem Wheelie davon.

(Der `Submit`-Button ist nicht funktional und führt zu einem 404-Fehhler, also am Besten nicht klicken)


### `Shop`

Für den Shop habe ich mit Logos und Illustrationen meiner Kommilitoninnen ein paar Merch-Items entworfen.\
Die Shirts sind schlicht gehalten, das Polygon-Logo als Motiv auf der Brust.\
Der Hoodie mit etwas verspieltererem Motiv - ein Panda der an etwas Bambus knabbert.\
Die Tote-Bags mit großen Pandamie Schriftzug  und einem faulen Panda der sich darauf ausruht.

Bei Hover über die Shop-Elemente wird der Beschreibungstext von unten hochgefahren, ein Schatten-Gradient dient zur besser Lesbarkeit.\
Unter der überschrift wird wieder ein Unterstrich gezogen, der sich genau an die Länge des Item-Titels anpasst.
