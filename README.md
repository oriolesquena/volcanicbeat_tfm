# Volcanic Beat - Un projecte de desenvolupament web

Projecte de desenvolupament d’un lloc web per un negoci de làser tag que vol mostrar la informació sobre la seva activitat al web, així com també un sistema de reserves i calendari a través d’aquesta. 

Per desenvolupar-lo es duran a terme els principis bàsics de desenvolupament web, fent un disseny i una experiència d’usuari i a continuació programant el frontend i el backend utilitzant les tecnologies Angular, Laravel, i PhpMyAdmin. 

L’objectiu és que un cop acabat el web sigui 100% funcional, responsiu i amb un bon disseny, que compleixi amb els requeriments del negoci. A més a més tingui un bon SEO per tal que sigui fàcil de ser trobat a la xarxa.

El projecte hauria de ser desenvolupat seguint l’estil i del disseny de l’actual pàgina web del negoci.

El resultat assolit compleix plenament els objectius i requisits establerts. No obstant això, amb més temps i una millor investigació en alguns camps es podria desenvolupar un lloc poc més optimitzat i amb un codi més organitzat.

De fet, hi ha la intenció de millorar aquests punts esmentats en un futur proper i després publicar el projecte al web a través del domini de l'empresa.

En conclusió, es creu que amb el període de temps establert i el coneixement que es tenia a l'inici del projecte s'ha aconseguit un resultat excel·lent.

## Instruccions per a l'execució del projecte

-	Descarregar en local el projecte de GitHub
-	Descomprimir el projecte.
-	Executar la comanda <code>npm install</code> dins de la carpeta general del projecte /volcanicbeat.
-   També cal executar la comanda <code>npm install</code> dins el projecte angular, a la carpeta /volcanicbeat/resources/frontend/angular.
-	A continuació, cal iniciar un servidor Apache i també MySQL (per exemple a través de XAMPP Control Panel).
-	Finalment cal executar la comanda <code>php artisan serve</code> a la carpeta general del projecte (/volcanicbeat) i ja es podrà obrir el projecte, per defecte al localhost, però es pot especificar quina IP afegint <code>--host=192.168.1.xx</code>.
-	Si es modifica el codi caldrà executar (en un terminal Linux o WSL):
  -	<code>npm run build:prod</code> dins la carpeta /volcanicbeat/resources/frontend/angular
-	També cal tenir en compte que pel correcte funcionament de l’aplicació, el fitxer .env que no està pujat a GitHub per motius de seguretat (ja que hi ha dades confidencials de contrasenyes) s’ha de crear i definir a partir del fitxer .env.example i establir-hi les dades del correu i de la base de dades necessàries.
-	Així com també cal tenir en compte la ruta dels “endpoints” en els serveis (form-mail.service.ts i reservation.service.ts). Per defecte està definit com a “localhost”, però si es vol utilitzar una IP per fer proves, aquesta ruta s’ha de canviar.