
import React, { useState } from 'react';
import './chatbot.css';


    const chatbotData = [
      {
        category: 'Webdesign',
        questions: [
          {
            question: 'Wie kann ich Sie erreichen?',
            answer: 'Ich bin ausschliesslich über E-Mail erreichbar',
          },
          {
            question: 'Wo finde ich ihr Büro?',
            answer: 'Ich bin ausschliesslich online unterwegs und über E-Mail erreichbar',
          },
          {
            question: 'Wo finde ich ihre Agentur?',
            answer: 'Ich bin ausschliesslich online unterwegs und über E-Mail erreichbar',
          },

          {
            question: 'Was ist Webdesign?',
            answer: 'Webdesign bezieht sich auf die Gestaltung und das Layout von Websites, um sie ansprechend und benutzerfreundlich zu machen.',
          },
          {
            question: 'Welche Tools werden für Webdesign verwendet?',
            answer: 'Es gibt verschiedene Tools für Webdesign, darunter Adobe Photoshop, Sketch, Figma und Adobe XD.',
          },
          {
              question: 'Was sind UI (User Interface) und UX (User Experience) im Webdesign?',
              answer: 'UI (User Interface) bezieht sich auf die visuelle Gestaltung einer Website, während UX (User Experience) die Gesamterfahrung des Benutzers mit der Website umfasst.',
            },
            {
              question: 'Welche Farben sind für Webdesign am besten geeignet?',
              answer: 'Die Farbauswahl im Webdesign hängt von der Markenidentität und dem gewünschten Erscheinungsbild ab. Es ist wichtig, eine ausgewogene und ansprechende Farbpalette zu verwenden.',
            },
            {
              question: 'Wie wichtig ist responsives Webdesign?',
              answer: 'Responsives Webdesign ist entscheidend, da es sicherstellt, dass eine Website auf verschiedenen Geräten und Bildschirmgrößen gut aussieht und benutzerfreundlich ist.',
            },
            {
              question: 'Was ist der neueste Trend im Webdesign?',
              answer: 'Der Webdesign-Trend ändert sich ständig. Derzeit sind dunkle Modus, 3D-Grafiken und animierte Illustrationen beliebt.',
            },
            {
              question: 'Welche Schriftarten sind für Webdesign empfehlenswert?',
              answer: 'Bei der Auswahl von Schriftarten für Webdesign ist es wichtig, gut lesbare und websichere Schriftarten zu verwenden. Google Fonts bietet eine breite Auswahl an kostenlosen Web-Schriftarten.',
            },
            {
              question: 'Wie können Bilder und Grafiken in Webdesigns effektiv eingesetzt werden?',
              answer: 'Bilder und Grafiken sollten sorgfältig ausgewählt werden, um die Botschaft der Website zu unterstützen und die Ladezeit nicht zu beeinträchtigen. Die Verwendung von optimierten Bildern und SVG-Dateien ist ratsam.',
            },
            {
              question: 'Wie kann man eine barrierefreie Website gestalten?',
              answer: 'Eine barrierefreie Website berücksichtigt die Bedürfnisse von Menschen mit Behinderungen und ermöglicht ihnen eine gleichberechtigte Nutzung. Dies kann durch die Verwendung zugänglicher Farben, Schriftarten und alternativer Texte für Bilder erreicht werden.',
            },
            {
              question: 'Was sind die wichtigsten Elemente eines guten Webdesigns?',
              answer: 'Ein gutes Webdesign sollte eine klare Benutzerführung, ästhetisch ansprechende Gestaltung, schnelle Ladezeiten und ein ansprechendes Layout haben.',
            },
            {
              question: 'Wie kann man die Benutzerfreundlichkeit einer Website verbessern?',
              answer: 'Die Benutzerfreundlichkeit kann verbessert werden, indem man eine klare Navigationsstruktur, leicht verständliche Inhalte und gut platzierte Call-to-Action-Elemente verwendet.',
            },
            {
              question: 'Was sind Wireframes und Prototypen im Webdesign?',
              answer: 'Wireframes sind schematische Darstellungen der Website-Struktur, während Prototypen interaktive Modelle der Website sind. Beide sind wichtige Werkzeuge für das Webdesign.',
            },
            {
              question: 'Wie beeinflusst das Webdesign das SEO (Suchmaschinenoptimierung)?',
              answer: 'Ein gut gestaltetes Webdesign kann sich positiv auf das SEO auswirken, indem es eine bessere Benutzererfahrung bietet und die Absprungrate verringert.',
            },
            {
              question: 'Wie kann man mit Webdesign die Markenidentität stärken?',
              answer: 'Das Webdesign sollte das Branding und die Markenidentität einer Website widerspiegeln. Konsistente Farben, Logos und Schriftarten tragen dazu bei, die Markenbotschaft zu vermitteln.',
            },
            {
              question: 'Welche aktuellen Herausforderungen gibt es im Webdesign?',
              answer: 'Einige Herausforderungen im Webdesign sind die Gewährleistung der Kompatibilität mit verschiedenen Browsern, die Optimierung der Website-Leistung und die Sicherstellung der Sicherheit.',
            },
            {
              question: 'Was ist Material Design im Webdesign?',
              answer: 'Material Design ist ein von Google entwickeltes Designsystem, das Schatten, Bewegung und räumliche Beziehungen verwendet, um eine realistische Benutzeroberfläche zu schaffen.',
            },
            {
              question: 'Wie kann man die Ladezeit einer Website verbessern?',
              answer: 'Die Ladezeit einer Website kann durch Bildoptimierung, Caching, Minimierung von HTTP-Anfragen und optimierte Codes verbessert werden.',
            },
            {
              question: 'Wie wichtig ist die mobile Ansicht bei Webdesigns?',
              answer: 'Die mobile Ansicht ist äußerst wichtig, da viele Benutzer Websites über ihre Mobilgeräte besuchen. Ein responsives Webdesign sorgt für eine optimale Darstellung auf Smartphones und Tablets.',
            },
            {
              question: 'Welche Gestaltungsprinzipien sind im Webdesign relevant?',
              answer: 'Einige wichtige Gestaltungsprinzipien im Webdesign sind die Nähe (Proximity), Ausrichtung (Alignment), Wiederholung (Repetition) und Kontrast.',
            },
            {
              question: 'Was ist die Bedeutung von Call-to-Action-Elementen im Webdesign?',
              answer: 'Call-to-Action-Elemente sind Schaltflächen oder Links, die den Benutzer dazu auffordern, eine bestimmte Aktion auszuführen, z. B. "Jetzt kaufen" oder "Mehr erfahren". Sie sind entscheidend für die Konversionsraten einer Website.',
            },
            {
              question: 'wieviel kostet eine webseite?',
              answer: 'Die Kosten für eine Webseite können je nach Aufwand warieren. Eine Einfache Webseite erhalten sie bereits für 2500€. Eine custom Webseite kann bis 75000€ kosten',
            },
          
          // Weitere Fragen und Antworten zum Webdesign...
        ],
      },
      {
        category: 'Webentwicklung in JavaScript',
        questions: [
          {
            question: 'Was ist JavaScript?',
            answer: 'JavaScript ist eine Skriptsprache, die hauptsächlich für die Entwicklung interaktiver Webseiten verwendet wird.',
          },
          {
            question: 'Welche Frameworks gibt es für die Webentwicklung in JavaScript?',
            answer: 'Einige beliebte JavaScript-Frameworks sind React.js, Angular.js und Vue.js.',
          }, 
          {
              question: 'Was sind die Unterschiede zwischen let, const und var?',
              answer: 'let und const sind Blockvariablen, während var eine Funktionsscope-Variable ist. const kann nicht neu zugewiesen werden, während let und var es können.',
            },
            {
              question: 'Was ist der Unterschied zwischen == und === in JavaScript?',
              answer: '== vergleicht den Wert, während === den Wert und den Datentyp vergleicht. === wird als strenger Gleichheitsoperator bezeichnet.',
            },
            {
              question: 'Wie kann man in JavaScript eine Schleife erstellen?',
              answer: 'In JavaScript können Sie eine Schleife mit for, while oder do-while erstellen, um bestimmte Anweisungen wiederholt auszuführen.',
            },
            {
              question: 'Was ist eine Closure (Funktionsschließung) in JavaScript?',
              answer: 'Eine Closure ist eine Funktion, die auf Variablen aus ihrem äußeren Gültigkeitsbereich zugreifen kann, auch nachdem dieser Gültigkeitsbereich beendet wurde.',
            },
            {
              question: 'Was sind Callback-Funktionen in JavaScript?',
              answer: 'Callback-Funktionen sind Funktionen, die als Argumente an andere Funktionen übergeben werden und nach Abschluss einer bestimmten Aufgabe ausgeführt werden.',
            },
            {
              question: 'Wie kann man in JavaScript eine Klasse erstellen?',
              answer: 'Mit der Einführung von ECMAScript 6 können Sie in JavaScript Klassen mithilfe des class-Schlüsselworts erstellen.',
            },
            {
              question: 'Was ist der Unterschied zwischen null und undefined in JavaScript?',
              answer: 'null ist ein spezieller Wert, der darauf hinweist, dass eine Variable bewusst keinen Wert enthält. undefined tritt auf, wenn eine Variable deklariert wurde, aber noch keinen Wert zugewiesen hat.',
            },
            {
              question: 'Wie funktioniert die Asynchronität in JavaScript?',
              answer: 'JavaScript ist eine asynchrone Sprache, die Callbacks, Promises und async/await verwendet, um asynchrone Aufgaben zu verarbeiten, ohne den Haupt-Thread zu blockieren.',
            },
            {
              question: 'Wie kann man in JavaScript ein Objekt erstellen?',
              answer: 'Ein Objekt in JavaScript kann mit geschweiften Klammern {} und optionalen Eigenschaften und Methoden erstellt werden.',
            },
            {
              question: 'Was sind Arrow Functions in JavaScript?',
              answer: 'Arrow Functions sind eine verkürzte Schreibweise für JavaScript-Funktionen und haben einen bindenden Wert für "this".',
            },
            {
              question: 'Wie kann man in JavaScript eine Fehlerbehandlung durchführen?',
              answer: 'In JavaScript können Sie die try-catch-Anweisung verwenden, um Fehler abzufangen und zu behandeln.',
            },
            {
              question: 'Was ist der DOM (Document Object Model) in JavaScript?',
              answer: 'Das DOM ist eine Programmierschnittstelle in JavaScript, die es ermöglicht, auf HTML- und XML-Dokumente zuzugreifen und sie zu verändern.',
            },
            {
              question: 'Was ist die Bedeutung von this in JavaScript?',
              answer: 'In JavaScript bezieht sich "this" normalerweise auf das Objekt, das die Methode aufruft. Der Wert von "this" kann jedoch in verschiedenen Kontexten variieren.',
            },
            {
              question: 'Was ist ein Modul in JavaScript?',
              answer: 'Ein Modul in JavaScript ist eine wiederverwendbare Einheit, die Variablen, Funktionen und Klassen exportieren und importieren kann.',
            },
            {
              question: 'Was sind Promises in JavaScript?',
              answer: 'Promises sind ein Entwurfsmuster in JavaScript, das verwendet wird, um asynchrone Operationen zu behandeln und das Callback-Hell-Problem zu vermeiden.',
            },
            {
              question: 'Wie kann man in JavaScript mit Arrays arbeiten?',
              answer: 'JavaScript bietet eine Vielzahl von Array-Methoden, mit denen Sie Elemente hinzufügen, entfernen, filtern und bearbeiten können.',
            },
            {
              question: 'Was ist der Sinn von "use strict" in JavaScript?',
              answer: 'Die Verwendung von "use strict" aktiviert den Strict Mode, der sicherere und fehlervermeidende Praktiken in JavaScript ermöglicht.',
            },
            {
              question: 'Wie kann man in JavaScript asynchrone Aufgaben synchronisieren?',
              answer: 'Sie können asynchrone Aufgaben in JavaScript mithilfe von async/await synchronisieren, wodurch der Code lesbarer und einfacher zu handhaben ist.',
            },
      
          // Weitere Fragen und Antworten zur Webentwicklung in JavaScript...
        ],
      },
      {
        category: 'WordPress Webseiten',
        questions: [
          {
            question: 'Was ist WordPress?',
            answer: 'WordPress ist eine Open-Source-Software, die zur Erstellung von Websites und Blogs verwendet wird.',
          },
          {
            question: 'Kann man mit WordPress auch Online-Shops erstellen?',
            answer: 'Ja, mit WordPress und dem WooCommerce-Plugin kann man auch Online-Shops erstellen.',
          },
          {
              question: 'Was ist Wordpress?',
              answer: 'Wordpress ist ein beliebtes Content-Management-System (CMS), das zur Erstellung und Verwaltung von Websites verwendet wird.',
            },
            {
              question: 'Welche Vorteile bietet die Erstellung von Websites mit Wordpress?',
              answer: 'Wordpress bietet eine benutzerfreundliche Oberfläche, eine große Auswahl an Themes und Plugins, SEO-Freundlichkeit und eine aktive Community für Support.',
            },
            {
              question: 'Was ist der Unterschied zwischen Wordpress.com und Wordpress.org?',
              answer: 'Wordpress.com ist eine gehostete Plattform, auf der Benutzer kostenlose oder kostenpflichtige Websites erstellen können, während Wordpress.org die Open-Source-Software bereitstellt, die Benutzer auf ihren eigenen Servern hosten können.',
            },
            {
              question: 'Wie kann man ein Theme in Wordpress ändern?',
              answer: 'Um ein Theme in Wordpress zu ändern, müssen Sie sich in Ihrem Wordpress-Dashboard anmelden, zu "Design" -> "Themes" navigieren und ein neues Theme auswählen und installieren.',
            },
            {
              question: 'Was sind Wordpress-Plugins und wie kann man sie installieren?',
              answer: 'Wordpress-Plugins sind Erweiterungen, die zusätzliche Funktionen und Features zu Ihrer Website hinzufügen. Sie können Plugins über das Wordpress-Dashboard unter "Plugins" -> "Installieren" suchen und installieren.',
            },
            {
              question: 'Kann man mit Wordpress eine mehrsprachige Website erstellen?',
              answer: 'Ja, mit Wordpress können Sie eine mehrsprachige Website erstellen, indem Sie ein mehrsprachiges Plugin wie WPML oder Polylang verwenden.',
            },
            {
              question: 'Wie kann man in Wordpress Beiträge und Seiten erstellen?',
              answer: 'Um Beiträge zu erstellen, gehen Sie zum Wordpress-Dashboard, klicken Sie auf "Beiträge" -> "Erstellen" und geben Sie den Inhalt des Beitrags ein. Für Seiten gehen Sie ähnlich vor, aber klicken auf "Seiten" -> "Erstellen".',
            },
            {
              question: 'Was ist ein Widget in Wordpress?',
              answer: 'Widgets sind kleine Module, die in der Seitenleiste, dem Footer oder anderen Widget-Bereichen Ihrer Wordpress-Website platziert werden können, um zusätzliche Inhalte oder Funktionen anzuzeigen.',
            },
            {
              question: 'Wie kann man in Wordpress ein Kontaktformular hinzufügen?',
              answer: 'Sie können ein Kontaktformular in Wordpress erstellen, indem Sie ein Plugin wie "Contact Form 7" installieren und das Formular entsprechend Ihren Anforderungen konfigurieren.',
            },
            {
              question: 'Was ist die Wordpress-Datenbank und wie kann man sie sichern?',
              answer: 'Die Wordpress-Datenbank speichert alle Inhalte und Einstellungen Ihrer Website. Sie können die Datenbank sichern, indem Sie ein Backup-Plugin verwenden oder über das Hosting-Dashboard eine manuelle Sicherung durchführen.',
            },
            {
              question: 'Wie kann man die Ladezeit einer Wordpress-Website verbessern?',
              answer: 'Die Ladezeit einer Wordpress-Website kann durch Caching, Bildoptimierung, Verwendung von CDN, Minimierung von CSS und JavaScript und eine zuverlässige Hosting-Lösung verbessert werden.',
            },
            {
              question: 'Kann man in Wordpress eine E-Commerce-Website erstellen?',
              answer: 'Ja, Sie können eine E-Commerce-Website in Wordpress erstellen, indem Sie ein E-Commerce-Plugin wie WooCommerce verwenden.',
            },
            {
              question: 'Was ist die Rolle eines Administrators in Wordpress?',
              answer: 'Der Administrator ist die höchste Benutzerrolle in Wordpress und hat vollständigen Zugriff auf alle Funktionen und Einstellungen der Website.',
            },
            {
              question: 'Wie kann man in Wordpress die Suchmaschinenoptimierung (SEO) verbessern?',
              answer: 'Sie können die SEO Ihrer Wordpress-Website verbessern, indem Sie SEO-Plugins verwenden, relevante Keywords verwenden, hochwertige Inhalte erstellen und Backlinks aufbauen.',
            },
            {
              question: 'Kann man in Wordpress benutzerdefinierte Menüs erstellen?',
              answer: 'Ja, Sie können benutzerdefinierte Menüs in Wordpress erstellen, indem Sie zum Wordpress-Dashboard gehen, auf "Design" -> "Menüs" klicken und Ihre gewünschten Menüpunkte hinzufügen.',
            },
            {
              question: 'Wie kann man in Wordpress Bilder und Medien hochladen?',
              answer: 'Um Bilder und Medien hochzuladen, klicken Sie im Wordpress-Dashboard auf "Medien" -> "Datei hinzufügen" und laden Sie Ihre Dateien hoch. Anschließend können Sie sie in Beiträgen und Seiten verwenden.',
            },
            {
              question: 'Was ist ein Shortcode in Wordpress?',
              answer: 'Ein Shortcode ist ein spezieller Tag, den Sie in den Inhalt Ihrer Wordpress-Beiträge oder Seiten einfügen können, um bestimmte Funktionen oder dynamische Inhalte einzubinden.',
            },
            {
              question: 'Wie kann man in Wordpress ein Backup der Website durchführen?',
              answer: 'Sie können ein Backup Ihrer Wordpress-Website erstellen, indem Sie ein Backup-Plugin verwenden oder eine manuelle Sicherung über das Hosting-Dashboard durchführen.',
            },
            {
              question: 'Kann man in Wordpress benutzerdefinierte Themes erstellen?',
              answer: 'Ja, Sie können benutzerdefinierte Themes in Wordpress erstellen, indem Sie HTML, CSS, JavaScript und PHP verwenden. Es ist jedoch empfehlenswert, ein vorhandenes Theme als Ausgangspunkt zu verwenden.',
            },
            {
              question: 'Wie kann man in Wordpress die Website für mobile Geräte optimieren?',
              answer: 'Um Ihre Wordpress-Website für mobile Geräte zu optimieren, sollten Sie ein responsives Theme verwenden und sicherstellen, dass Ihre Inhalte auf verschiedenen Bildschirmgrößen gut angezeigt werden.',
            },
            {
              question: 'Wie viel kostet es, eine einfache WordPress-Website zu erstellen?',
              answer: 'Die Kosten für eine einfache WordPress-Website können je nach Umfang und Design zwischen 500€ und 1500€ liegen.',
            },
            {
              question: 'Welche zusätzlichen Kosten können bei der Erstellung einer WordPress-Website anfallen?',
              answer: 'Zusätzliche Kosten können für Premium-Themes, benutzerdefinierte Plugins, professionelle Grafiken und Webhosting entstehen.',
            },
            {
              question: 'Sind die Kosten für die Verwendung eines kostenlosen WordPress-Themes geringer?',
              answer: 'Ja, die Verwendung eines kostenlosen WordPress-Themes kann die Kosten reduzieren, aber es kann Einschränkungen bei Design und Funktionalität geben.',
            },
            {
              question: 'Wie viel kostet es, eine maßgeschneiderte WordPress-Website entwickeln zu lassen?',
              answer: 'Die Kosten für eine maßgeschneiderte WordPress-Website können je nach Umfang und Anpassungsfähigkeit zwischen 2000€ und 8000€ oder mehr betragen.',
            },
            {
              question: 'Kann man die Kosten für eine WordPress-Website durch die Verwendung von vorgefertigten Themes reduzieren?',
              answer: 'Ja, die Verwendung von vorgefertigten Themes kann die Kosten reduzieren, aber es kann sein, dass die Website weniger einzigartig ist.',
            },
            {
              question: 'Was sind die typischen Kosten für die Wartung und Aktualisierung einer WordPress-Website?',
              answer: 'Die Kosten für die Wartung und Aktualisierung einer WordPress-Website können zwischen 50€ und 200€ pro Monat liegen, je nachdem, wie häufig Aktualisierungen vorgenommen werden.',
            },
            {
              question: 'Wie viel kostet es, eine WordPress-E-Commerce-Website zu erstellen?',
              answer: 'Die Kosten für eine WordPress-E-Commerce-Website können je nach Umfang, Funktionen und Anzahl der Produkte zwischen 2000€ und 10000€ oder mehr betragen.',
            },
            {
              question: 'Können die Kosten für die Erstellung einer WordPress-Website von der Anzahl der Seiten abhängen?',
              answer: 'Ja, die Kosten können von der Anzahl der Seiten und dem Aufwand für das Design und die Integration abhängen.',
            },
            {
              question: 'Was sind die Vor- und Nachteile der Verwendung von WordPress für eine Website?',
              answer: 'Die Verwendung von WordPress bietet eine benutzerfreundliche Oberfläche und eine große Auswahl an Plugins, aber es kann auch Sicherheitsbedenken und Leistungsprobleme geben.',
            },
            {
              question: 'Wie viel kostet es, eine WordPress-Website für ein kleines Unternehmen zu erstellen?',
              answer: 'Die Kosten für eine WordPress-Website für ein kleines Unternehmen können zwischen 1000€ und 5000€ oder mehr liegen, abhängig von den Anforderungen und dem Umfang des Projekts.',
            },
          // Weitere Fragen und Antworten zu WordPress Webseiten...
        ],
      },
      {
        category: 'Kosten für die Entwicklung',
        questions: [
          {
            question: 'Wie werden die Kosten für die Webentwicklung berechnet?',
            answer: 'Die Kosten für die Webentwicklung hängen von verschiedenen Faktoren ab, wie Umfang des Projekts, Funktionalitäten, Designanforderungen und mehr.',
          },
          {
            question: 'Gibt es Standardpreise für die Webentwicklung?',
            answer: 'Es gibt keine festen Standardpreise, da jede Website individuelle Anforderungen hat.',
          },
          {
              question: 'Wie viel kostet es, eine einfache statische Website entwickeln zu lassen?',
              answer: 'Die Kosten für eine einfache statische Website können je nach Umfang und Komplexität zwischen 500€ und 2000€ liegen.',
            },
            {
              question: 'Welche Faktoren beeinflussen die Kosten für die Entwicklung einer Website?',
              answer: 'Die Kosten für die Webentwicklung hängen von Faktoren wie Umfang, Design, Funktionalitäten, responsive Design, SEO und der Erfahrung des Entwicklers ab.',
            },
            {
              question: 'Wie viel kostet die Entwicklung einer responsiven Website?',
              answer: 'Die Kosten für eine responsive Website können zwischen 1000€ und 5000€ variieren, abhängig von den Anforderungen und der Anpassungsfähigkeit der Website auf verschiedenen Geräten.',
            },
            {
              question: 'Was sind die durchschnittlichen Kosten für die Entwicklung eines E-Commerce-Shops?',
              answer: 'Die Kosten für die Entwicklung eines E-Commerce-Shops können je nach Plattform, Funktionalitäten und Produkten zwischen 3000€ und 10000€ liegen.',
            },
            {
              question: 'Wie viel kostet es, eine benutzerdefinierte Website entwickeln zu lassen?',
              answer: 'Die Kosten für eine benutzerdefinierte Website können je nach Design, Funktionen und Integrationen zwischen 5000€ und 20000€ oder mehr betragen.',
            },
            {
              question: 'Was sind die typischen Kosten für die Wartung und Aktualisierung einer Website?',
              answer: 'Die Kosten für die Wartung und Aktualisierung einer Website hängen von der Häufigkeit der Aktualisierungen, der Größe der Website und dem gewählten Wartungsplan ab, normalerweise zwischen 50€ und 200€ pro Monat.',
            },
            {
              question: 'Welche zusätzlichen Kosten können bei der Webentwicklung entstehen?',
              answer: 'Zusätzliche Kosten könnten für Domainregistrierung, Webhosting, SSL-Zertifikate, Premium-Plugins, maßgeschneiderte Grafiken und Inhalte anfallen.',
            },
            {
              question: 'Wie viel kosten maßgeschneiderte Funktionen oder Plugins für eine Website?',
              answer: 'Die Kosten für maßgeschneiderte Funktionen oder Plugins können zwischen 200€ und 1000€ oder mehr liegen, je nach Komplexität und Aufwand.',
            },
            {
              question: 'Was sind die Vor- und Nachteile der Beauftragung einer Webagentur im Vergleich zu einem Freelancer?',
              answer: 'Eine Webagentur bietet ein umfassenderes Dienstleistungsspektrum und mehr Ressourcen, aber sie kann teurer sein als ein Freelancer, der möglicherweise kostengünstiger ist, aber weniger Kapazität hat.',
            },
            {
              question: 'Kann man mit einem begrenzten Budget immer noch eine ansprechende Website erstellen?',
              answer: 'Ja, es ist möglich, eine ansprechende Website mit einem begrenzten Budget zu erstellen, indem man kostenlose oder kostengünstige Themes und Plugins verwendet.',
            },
            {
              question: 'Welche Vorteile bringt eine gut gestaltete Website für ein Unternehmen?',
              answer: 'Eine gut gestaltete Website kann das Markenimage verbessern, mehr Besucher anziehen, die Conversion-Rate erhöhen und das Vertrauen der Kunden stärken.',
            },
            {
              question: 'Können die Kosten für die Webentwicklung von der Größe des Unternehmens abhängen?',
              answer: 'Ja, die Kosten für die Webentwicklung können von der Größe des Unternehmens abhängen, da größere Unternehmen möglicherweise mehr Seiten, Funktionen und Anpassungen benötigen.',
            },
            {
              question: 'Wie kann man die Kosten für ein Webentwicklungsprojekt effektiv planen und kontrollieren?',
              answer: 'Eine effektive Planung und Kontrolle der Kosten für ein Webentwicklungsprojekt beinhaltet das Festlegen eines klaren Budgets, das Priorisieren von Funktionen und die regelmäßige Kommunikation mit dem Entwickler oder der Agentur.',
            },
            {
              question: 'Kann man die Entwicklungskosten durch die Verwendung von Website-Baukästen reduzieren?',
              answer: 'Ja, die Verwendung von Website-Baukästen kann die Entwicklungskosten reduzieren, aber es kann auch Einschränkungen bei der Anpassung und Funktionalität geben.',
            },
            {
              question: 'Wie viel kostet es, eine Website für ein kleines Unternehmen zu erstellen?',
              answer: 'Die Kosten für eine Website für ein kleines Unternehmen können je nach Umfang und Anforderungen zwischen 1000€ und 5000€ oder mehr liegen.',
            },
            {
              question: 'Können die Kosten für die Webentwicklung je nach Region oder Land variieren?',
              answer: 'Ja, die Kosten für die Webentwicklung können je nach Region oder Land aufgrund unterschiedlicher Lebenshaltungskosten und Marktnachfrage variieren.',
            },
            {
              question: 'Was ist der Unterschied zwischen einmaligen Kosten und laufenden Kosten für die Webentwicklung?',
              answer: 'Einmalige Kosten beziehen sich auf die anfängliche Entwicklung und Einrichtung der Website, während laufende Kosten regelmäßige Ausgaben wie Hosting und Wartung beinhalten.',
            },
            {
              question: 'Wie viel kostet es, eine Website für ein E-Commerce-Startup zu entwickeln?',
              answer: 'Die Kosten für die Entwicklung einer Website für ein E-Commerce-Startup können zwischen 5000€ und 20000€ oder mehr liegen, abhängig von der Größe und Komplexität des Projekts.',
            },
            {
              question: 'Können die Kosten für die Webentwicklung durch die Verwendung von Open-Source-Plattformen reduziert werden?',
              answer: 'Ja, die Verwendung von Open-Source-Plattformen wie Wordpress oder Magento kann die Entwicklungskosten reduzieren, da diese kostenlos verfügbar sind.',
            },
            {
              question: 'Was sind die typischen Kosten für die Aktualisierung und Wartung einer Wordpress-Website?',
              answer: 'Die Kosten für die Aktualisierung und Wartung einer Wordpress-Website können zwischen 50€ und 200€ pro Monat liegen, abhängig von den Anforderungen und dem gewählten Wartungsplan.',
            },
          // Weitere Fragen und Antworten zu den Kosten für die Entwicklung...
        ],
      },
      
  {
          category: 'Node.js',
          questions: [
            {
              question: 'Was ist Node.js und wofür wird es verwendet?',
              answer: 'Node.js ist eine JavaScript Laufzeitumgebung, die es ermöglicht, JavaScript serverseitig auszuführen. Es wird häufig verwendet, um skalierbare und schnelle Webanwendungen zu erstellen.',
            },
            {
              question: 'Welche Vorteile bietet Node.js für die Entwicklung von Webanwendungen?',
              answer: 'Node.js bietet eine hohe Skalierbarkeit, eine ereignisgesteuerte Architektur, die Möglichkeit, JavaScript sowohl auf dem Server als auch im Browser zu verwenden, und eine große Auswahl an Paketen und Modulen über den Node Package Manager (npm).',
            },
            {
              question: 'Wie installiert man Node.js auf seinem Computer?',
              answer: 'Node.js kann von der offiziellen Website (https://nodejs.org) heruntergeladen und installiert werden. Es gibt Installationspakete für verschiedene Betriebssysteme.',
            },
            {
              question: 'Was ist npm (Node Package Manager) und welche Funktion hat es?',
              answer: 'npm ist der Paketmanager für Node.js und dient dazu, Pakete und Module für die Entwicklung von Node.js-Anwendungen zu verwalten und zu installieren.',
            },
            {
              question: 'Welche Datenbanken können mit Node.js verwendet werden?',
              answer: 'Node.js kann mit verschiedenen Datenbanken wie MongoDB, MySQL, PostgreSQL und mehr verwendet werden, da es dank des npm eine breite Unterstützung für Datenbanktreiber gibt.',
            },
            {
              question: 'Was sind Callback-Funktionen in Node.js?',
              answer: 'In Node.js werden Callback-Funktionen häufig verwendet, um asynchrone Operationen zu behandeln und sicherzustellen, dass der Code erst nach Abschluss der Operation ausgeführt wird.',
            },
            {
              question: 'Was ist Express.js und wofür wird es verwendet?',
              answer: 'Express.js ist ein beliebtes Web-Framework für Node.js, das den Aufbau von Webanwendungen und RESTful APIs vereinfacht.',
            },
            {
              question: 'Kann Node.js auch für die Entwicklung von Desktop-Anwendungen verwendet werden?',
              answer: 'Ja, mit Frameworks wie Electron kann Node.js für die Entwicklung von Cross-Plattform-Desktop-Anwendungen verwendet werden.',
            },
            {
              question: 'Wie behandelt Node.js die gleichzeitige Verarbeitung von Anfragen?',
              answer: 'Node.js verwendet eine ereignisgesteuerte und nicht blockierende Architektur, die es ermöglicht, gleichzeitige Anfragen effizient zu verarbeiten und eine hohe Skalierbarkeit zu erreichen.',
            },
            {
              question: 'Welche bekannten Unternehmen nutzen Node.js für ihre Webanwendungen?',
              answer: 'Unternehmen wie Netflix, LinkedIn, Uber und PayPal nutzen Node.js für ihre Webanwendungen aufgrund seiner Leistungsfähigkeit und Skalierbarkeit.',
            },
            // Weitere Fragen zu Node.js hier...
          ],
        },
        {
          category: 'Preise für Node.js-Entwicklung',
          questions: [
            {
              question: 'Wie setzen sich die Kosten für die Entwicklung einer Node.js-Anwendung zusammen?',
              answer: 'Die Kosten für die Entwicklung einer Node.js-Anwendung hängen von Faktoren wie dem Umfang des Projekts, der Komplexität der Anwendung, der Anzahl der Entwicklerstunden und dem gewünschten Funktionsumfang ab.',
            },
            {
              question: 'Berechnen die Node.js-Entwicklungsunternehmen ihre Preise stundenbasiert oder gibt es Pauschalangebote?',
              answer: 'Einige Node.js-Entwicklungsunternehmen berechnen ihre Preise stundenbasiert, während andere Pauschalangebote für bestimmte Arten von Projekten anbieten.',
            },
            {
              question: 'Was ist der durchschnittliche Stundensatz für Node.js-Entwicklung?',
              answer: 'Der Stundensatz für Node.js-Entwicklung variiert je nach Standort und Erfahrung der Entwickler, kann aber zwischen 50€ und 150€ oder mehr betragen.',
            },
            {
              question: 'Welche zusätzlichen Kosten können bei der Entwicklung einer komplexen Node.js-Anwendung entstehen?',
              answer: 'Bei der Entwicklung einer komplexen Node.js-Anwendung können zusätzliche Kosten für die Integration von Drittanbieter-APIs, die Implementierung von Sicherheitsmaßnahmen und die Skalierung der Anwendung entstehen.',
            },
            {
              question: 'Können die Kosten für die Entwicklung einer Node.js-Anwendung durch den Einsatz von Open-Source-Tools und Bibliotheken gesenkt werden?',
              answer: 'Ja, der Einsatz von Open-Source-Tools und Bibliotheken kann die Entwicklungskosten reduzieren und gleichzeitig eine hohe Qualität der Anwendung gewährleisten.',
            },
            // Weitere Fragen zu den Preisen für Node.js-Entwicklung hier...
          ],
        },
        {
          category: 'UX',
          questions: [
            {
              question: 'Was bedeutet UX (User Experience) im Kontext von Webdesign und -entwicklung?',
              answer: 'UX (User Experience) bezieht sich auf die Gesamterfahrung eines Benutzers beim Interagieren mit einer Website oder Anwendung, einschließlich der Benutzerfreundlichkeit, Zugänglichkeit, Ästhetik und Effizienz.',
            },
            {
              question: 'Welche Rolle spielt UX-Design bei der Entwicklung einer erfolgreichen Website oder Anwendung?',
              answer: 'UX-Design spielt eine entscheidende Rolle, da es sicherstellt, dass die Website oder Anwendung benutzerfreundlich, ansprechend und leicht zu navigieren ist, was zu einer positiven Benutzererfahrung führt.',
            },
            {
              question: 'Was sind die wichtigsten Prinzipien des UX-Designs?',
              answer: 'Die wichtigsten Prinzipien des UX-Designs umfassen die Bedeutung von Benutzerzentriertheit, klarem und konsistentem Design, Einfachheit, Effizienz und Zugänglichkeit.',
            },
            {
              question: 'Wie kann man die Benutzerfreundlichkeit einer Website oder Anwendung verbessern?',
              answer: 'Die Benutzerfreundlichkeit kann durch intuitive Navigation, gut lesbaren Text, klare Call-to-Action-Buttons und schnelle Ladezeiten verbessert werden.',
            },
            {
              question: 'Welche Tools werden für das UX-Design und die Prototypenerstellung verwendet?',
              answer: 'UX-Designer verwenden häufig Tools wie Adobe XD, Sketch, Figma und InVision, um Wireframes und Prototypen für Websites und Anwendungen zu erstellen.',
            },
            {
              question: 'Warum ist es wichtig, Benutzerfeedback zu sammeln und in das UX-Design einzubeziehen?',
              answer: 'Benutzerfeedback bietet wertvolle Einblicke in die tatsächliche Benutzererfahrung und ermöglicht es, Probleme zu identifizieren und das Design entsprechend zu verbessern.',
            },
            {
              question: 'Welche Rolle spielt das Farbschema bei der UX-Gestaltung?',
              answer: 'Das Farbschema spielt eine wichtige Rolle, da es die Stimmung und Emotionen beeinflusst, die Benutzer beim Besuch einer Website oder Anwendung empfinden.',
            },
            {
              question: 'Was ist Barrierefreiheit im UX-Design und warum ist es wichtig?',
              answer: 'Barrierefreiheit im UX-Design bedeutet, dass Websites und Anwendungen für Menschen mit Behinderungen zugänglich sind. Es ist wichtig, um sicherzustellen, dass alle Benutzer die gleiche Erfahrung machen können.',
            },
            {
              question: 'Wie kann man das Laden von Inhalten beschleunigen, um die UX zu verbessern?',
              answer: 'Das Laden von Inhalten kann durch Komprimierung von Bildern, Caching und die Verwendung von Content Delivery Networks (CDNs) beschleunigt werden.',
            },
            {
              question: 'Welche Rolle spielt das Responsive Design bei der UX?',
              answer: 'Das Responsive Design ist entscheidend, um sicherzustellen, dass Websites und Anwendungen auf verschiedenen Geräten und Bildschirmgrößen gut aussehen und benutzerfreundlich sind.',
            },
            // Weitere Fragen zu UX hier...
          ],
        },
        {
          category: 'Kosten für UX-Design',
          questions: [
            {
              question: 'Wie setzen sich die Kosten für das UX-Design einer Website oder Anwendung zusammen?',
              answer: 'Die Kosten für das UX-Design hängen von Faktoren wie dem Umfang des Projekts, der Komplexität des Designs, der Anzahl der Designerstunden und dem gewünschten Funktionsumfang ab.',
            },
            {
              question: 'Berechnen UX-Design-Agenturen ihre Preise stundenbasiert oder gibt es Pauschalangebote?',
              answer: 'Einige UX-Design-Agenturen berechnen ihre Preise stundenbasiert, während andere Pauschalangebote für bestimmte Designprojekte anbieten.',
            },
            {
              question: 'Was ist der durchschnittliche Stundensatz für UX-Design?',
              answer: 'Der Stundensatz für UX-Design kann je nach Standort und Erfahrung der Designer zwischen 50€ und 150€ oder mehr betragen.',
            },
            {
              question: 'Können die Kosten für das UX-Design durch den Einsatz von vorgefertigten Designvorlagen gesenkt werden?',
              answer: 'Ja, der Einsatz von vorgefertigten Designvorlagen kann die Kosten für das UX-Design reduzieren, sollte jedoch sorgfältig ausgewählt werden, um die Einzigartigkeit und Effektivität des Designs sicherzustellen.',
            },
            {
              question: 'Welche zusätzlichen Kosten können bei der Erstellung eines umfangreichen UX-Designs entstehen?',
              answer: 'Bei einem umfangreichen UX-Design können zusätzliche Kosten für die Durchführung von Benutzerumfragen, Benutzertests und die Iteration des Designs entstehen.',
            },
            // Weitere Fragen zu den Kosten für UX-Design hier...
             ],
            },
            {
              category: 'UI',
              questions: [
                {
                  question: 'Was bedeutet UI (User Interface) im Kontext von Webdesign und -entwicklung?',
                  answer: 'UI (User Interface) bezieht sich auf die visuelle Gestaltung und die Schnittstelle, die Benutzer beim Interagieren mit einer Website oder Anwendung sehen und verwenden.',
                },
                {
                  question: 'Welche Rolle spielt UI-Design bei der Entwicklung einer erfolgreichen Website oder Anwendung?',
                  answer: 'UI-Design spielt eine entscheidende Rolle, da es sicherstellt, dass das visuelle Erscheinungsbild ansprechend, ästhetisch ansprechend und leicht verständlich ist.',
                },
                {
                  question: 'Welche Elemente umfasst das UI-Design normalerweise?',
                  answer: 'Das UI-Design umfasst Elemente wie Farbschemata, Typografie, Symbole, Schaltflächen, Formulare und andere visuelle Elemente, die für die Benutzeroberfläche relevant sind.',
                },
                {
                  question: 'Warum ist es wichtig, konsistente UI-Elemente zu verwenden?',
                  answer: 'Konsistente UI-Elemente sorgen für eine klare Benutzererfahrung und erleichtern es Benutzern, sich auf der Website oder Anwendung zurechtzufinden.',
                },
                {
                  question: 'Was ist der Unterschied zwischen UI-Design und UX-Design?',
                  answer: 'Während das UI-Design für die visuelle Gestaltung der Benutzeroberfläche verantwortlich ist, konzentriert sich das UX-Design auf die Gesamterfahrung und Benutzerfreundlichkeit.',
                },
                {
                  question: 'Welche Rolle spielen Animationen im UI-Design?',
                  answer: 'Animationen können dazu beitragen, die Benutzererfahrung zu verbessern, indem sie die Interaktion ansprechender und flüssiger gestalten.',
                },
                {
                  question: 'Was versteht man unter dem Begriff "Responsive Design" im Zusammenhang mit UI?',
                  answer: 'Responsive Design bedeutet, dass die Benutzeroberfläche auf verschiedenen Geräten und Bildschirmgrößen gut angezeigt und benutzerfreundlich ist.',
                },
                {
                  question: 'Welche Trends gibt es derzeit im UI-Design?',
                  answer: 'Aktuelle Trends im UI-Design umfassen beispielsweise den Einsatz von dunklen Modus, 3D-Grafiken und neumorphischen Designs.',
                },
                {
                  question: 'Welche Tools werden für das UI-Design und die Prototypenerstellung verwendet?',
                  answer: 'UI-Designer verwenden häufig Tools wie Adobe XD, Sketch, Figma und InVision, um Wireframes und Prototypen für Websites und Anwendungen zu erstellen.',
                },
                {
                  question: 'Warum ist es wichtig, Accessibility-Praktiken im UI-Design zu berücksichtigen?',
                  answer: 'Accessibility-Praktiken stellen sicher, dass Menschen mit Behinderungen die Website oder Anwendung problemlos nutzen können und keine Benachteiligung erfahren.',
                },
                // Weitere Fragen zu UI hier...
              ],
            },
            {
              category: 'Kosten für UI-Design',
              questions: [
                {
                  question: 'Wie setzen sich die Kosten für das UI-Design einer Website oder Anwendung zusammen?',
                  answer: 'Die Kosten für das UI-Design hängen von Faktoren wie dem Umfang des Projekts, der Komplexität des Designs, der Anzahl der Designerstunden und dem gewünschten Funktionsumfang ab.',
                },
                {
                  question: 'Berechnen UI-Design-Agenturen ihre Preise stundenbasiert oder gibt es Pauschalangebote?',
                  answer: 'Einige UI-Design-Agenturen berechnen ihre Preise stundenbasiert, während andere Pauschalangebote für bestimmte Designprojekte anbieten.',
                },
                {
                  question: 'Was ist der durchschnittliche Stundensatz für UI-Design?',
                  answer: 'Der Stundensatz für UI-Design kann je nach Standort und Erfahrung der Designer zwischen 50€ und 150€ oder mehr betragen.',
                },
                {
                  question: 'Können die Kosten für das UI-Design durch den Einsatz von vorgefertigten Designvorlagen gesenkt werden?',
                  answer: 'Ja, der Einsatz von vorgefertigten Designvorlagen kann die Kosten für das UI-Design reduzieren, sollte jedoch sorgfältig ausgewählt werden, um die Einzigartigkeit und Effektivität des Designs sicherzustellen.',
                },
                {
                  question: 'Welche zusätzlichen Kosten können bei der Erstellung eines umfangreichen UI-Designs entstehen?',
                  answer: 'Bei einem umfangreichen UI-Design können zusätzliche Kosten für die Erstellung benutzerdefinierter Grafiken, Animationen oder interaktiver Elemente entstehen.',
                },
                // Weitere Fragen zu den Kosten für UI-Design hier...
              ],
            },
            {
              category: 'Künstliche Intelligenz (KI)',
              questions: [
                {
                  question: 'Was versteht man unter KI (Künstliche Intelligenz) und wie wird sie in der Webentwicklung eingesetzt?',
                  answer: 'KI bezieht sich auf die Fähigkeit von Maschinen und Programmen, menschenähnliches Verhalten zu imitieren und komplexe Aufgaben zu erledigen. In der Webentwicklung wird KI für Chatbots, personalisierte Empfehlungen, Spracherkennung, Bilderkennung und vieles mehr eingesetzt.',
                },
                {
                  question: 'Welche Vorteile bietet der Einsatz von KI in Webanwendungen und Websites?',
                  answer: 'Der Einsatz von KI ermöglicht eine verbesserte Benutzererfahrung, automatisierte Prozesse, personalisierte Inhalte, schnellere Datenanalyse und bessere Entscheidungsfindung.',
                },
                {
                  question: 'Welche konkreten Anwendungsgebiete gibt es für KI im Webdesign und der Entwicklung?',
                  answer: 'KI kann im Webdesign für die personalisierte Inhaltsauslieferung, automatisierte Chatbots, Nutzersegmentierung, Empfehlungssysteme und zur Verbesserung der Usability eingesetzt werden.',
                },
                {
                  question: 'Wie kann KI die Benutzererfahrung auf einer Website oder Anwendung verbessern?',
                  answer: 'KI kann die Benutzererfahrung durch personalisierte Inhalte, schnelle Problemlösungen, intelligente Suchfunktionen und natürliche Sprachverarbeitung verbessern.',
                },
                {
                  question: 'Welche Technologien und Frameworks werden häufig für den Einsatz von KI in der Webentwicklung verwendet?',
                  answer: 'In der Webentwicklung werden häufig Technologien wie TensorFlow, PyTorch, Dialogflow, IBM Watson und OpenAI GPT-3 verwendet, um KI-Funktionalitäten zu realisieren.',
                },
                {
                  question: 'Wie können Chatbots und virtuelle Assistenten durch KI realisiert werden?',
                  answer: 'Chatbots und virtuelle Assistenten werden durch Machine Learning und Natural Language Processing (NLP) trainiert, um menschenähnliche Gespräche zu führen und Benutzeranfragen zu beantworten.',
                },
                {
                  question: 'Welche Herausforderungen und Einschränkungen gibt es bei der Integration von KI in Webprojekten?',
                  answer: 'Einige Herausforderungen sind Datenqualität, ethische Überlegungen, Datenschutzbestimmungen, Modellinterpretierbarkeit und die Komplexität der Implementierung.',
                },
                {
                  question: 'Was ist der Unterschied zwischen KI und maschinellem Lernen (ML) in Bezug auf Webdesign und -entwicklung?',
                  answer: 'KI ist der übergeordnete Begriff für die Nachahmung menschlicher Intelligenz durch Maschinen. Maschinelles Lernen ist ein Teilbereich von KI, der es Maschinen ermöglicht, aus Erfahrungen zu lernen und sich selbstständig zu verbessern.',
                },
                {
                  question: 'Welche Rolle spielt maschinelles Lernen im Zusammenhang mit KI in Webanwendungen?',
                  answer: 'Maschinelles Lernen wird verwendet, um KI-Modelle zu trainieren, Muster in Daten zu erkennen und Vorhersagen oder Entscheidungen zu treffen, ohne explizite Programmierung.',
                },
                {
                  question: 'Wie kann KI zur Personalisierung von Inhalten und Empfehlungen auf einer Website verwendet werden?',
                  answer: 'KI analysiert das Verhalten und die Vorlieben der Benutzer, um personalisierte Inhalte, Produktempfehlungen und maßgeschneiderte Benutzererfahrungen bereitzustellen.',
                },
                // Weitere Fragen zum Einsatz von KI im Webdesign hier...
              ],
            },
          ];
    
  

          const Bot = () => {
            const [userInput, setUserInput] = useState('');
            const [chatHistory, setChatHistory] = useState(null); // Ändere den initialen State auf null
          
            const handleUserInput = (event) => {
              setUserInput(event.target.value);
            };
          
            const handleUserSubmit = (event) => {
              event.preventDefault();
          
              if (userInput.trim() !== '') {
                const response = getChatbotResponse(userInput);
                setChatHistory({ userMessage: userInput, chatbotMessage: response });
                setUserInput('');
              } else {
                console.log('Bitte gib eine Frage ein.');
              }
            };
          
            const getChatbotResponse = (userInput) => {
              const lowercaseUserInput = userInput.toLowerCase();
          
              for (const category of chatbotData) {
                for (const question of category.questions) {
                  if (question.question.toLowerCase() === lowercaseUserInput) {
                    return question.answer;
                  }
                }
              }
          
              const similarQuestions = chatbotData.flatMap((category) =>
                category.questions.filter((question) =>
                  question.question.toLowerCase().includes(lowercaseUserInput)
                )
              );
          
              if (similarQuestions.length > 0) {
                const randomIndex = Math.floor(Math.random() * similarQuestions.length);
                return similarQuestions[randomIndex].answer;
              } else {
                return 'Entschuldigung, ich habe die Antwort nicht gefunden.';
              }
            };
          
            return (
              <div>
                
                <div className="chat-history">
                  {chatHistory && (
                    <div> {/* Eindeutiger Schlüssel ist hier nicht nötig, da nur ein Element gerendert wird */}
                      {chatHistory.userMessage && <div>User: {chatHistory.userMessage}</div>}
                      {chatHistory.chatbotMessage && <div>Chatbot: {chatHistory.chatbotMessage}</div>}
                    </div>
                  )}
                </div>
                <div className='formQuestion'>
               
             
                <form onSubmit={handleUserSubmit}>
                
                  <input type="text" value={userInput} onChange={handleUserInput} />
                  <button type="submit">Senden</button>
                 
                </form>
                <p>Bitte geben Sie eine Frage zu unserem Angebot ein!</p>
                </div>
              </div>
            );
          };
          
          export default Bot;