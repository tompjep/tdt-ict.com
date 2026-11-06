/**
 * Juridische pagina's. De URL's zijn gelijk aan die van de oude site.
 *
 * Algemene voorwaarden (versie 2.0) en privacyverklaring zijn letterlijk
 * overgenomen van de oude WordPress-site (stand 3 augustus 2026). Het
 * privacybeleid is aangevuld met het contactformulier, Turnstile en de kaart.
 * De AUP is nieuw geschreven (op de oude site stond onder die titel per
 * ongeluk een oude versie van de algemene voorwaarden) en sluit aan op de
 * algemene voorwaarden v2.0.
 *
 * Een sectie bestaat uit blokken: een string is een alinea, `{ list: [...] }`
 * een opsomming en `{ h3: "..." }` een tussenkopje. Alinea's die beginnen met
 * een artikelnummer (bijv. "2.1 ...") krijgen dat nummer vetgedrukt.
 */

export type LegalBlock = string | { list: string[] } | { h3: string };
export type LegalSection = { heading: string; blocks: LegalBlock[] };
export type LegalPage = {
  slug: "voorwaarden" | "acceptable-use-policy-aup" | "privacy-policy";
  title: string;
  seo: { title: string; description: string };
  updated: string;
  /** Versie en ingangsdatum, getoond onder de titel */
  version?: string;
  effective?: string;
  intro: string;
  sections: LegalSection[];
};

export const legalPages: LegalPage[] = [
  {
    slug: "voorwaarden",
    title: "Algemene voorwaarden",
    seo: {
      title: "Algemene voorwaarden",
      description: "De algemene voorwaarden van TDT-ICT voor IT-diensten, hosting, internet en websites.",
    },
    updated: "3 augustus 2026",
    version: "2.0",
    effective: "1 september 2021",
    intro: "Op alle diensten en overeenkomsten van TDT-ICT zijn deze algemene voorwaarden van toepassing.",
    sections: [
      {
        heading: "Artikel 1 – Definities",
        blocks: [
          "In deze Algemene Voorwaarden wordt verstaan onder:",
          { h3: "1.1 TDT-ICT" },
          "TDT-ICT is een handelsnaam van ThijsGeeneWerken, gevestigd te Aarle-Rixtel en ingeschreven bij de Kamer van Koophandel onder nummer 83227660.",
          { h3: "1.2 Opdrachtgever" },
          "Iedere natuurlijke persoon of rechtspersoon die met TDT-ICT een overeenkomst sluit of wil sluiten.",
          { h3: "1.3 Overeenkomst" },
          "Iedere schriftelijke of elektronische overeenkomst tussen TDT-ICT en Opdrachtgever betreffende de levering van Diensten.",
          { h3: "1.4 Diensten" },
          "Alle producten en diensten die TDT-ICT aanbiedt, waaronder onder meer:",
          {
            list: [
              "webhosting;",
              "managed hosting;",
              "VPS-hosting;",
              "cloudhosting;",
              "serverbeheer;",
              "systeembeheer;",
              "netwerkbeheer;",
              "internetverbindingen;",
              "glasvezelverbindingen;",
              "DSL-verbindingen;",
              "domeinnaamregistratie;",
              "DNS-diensten;",
              "e-maildiensten;",
              "Microsoft 365-diensten;",
              "back-updiensten;",
              "monitoring;",
              "consultancy;",
              "overige ICT-diensten.",
            ],
          },
          "Deze opsomming is niet limitatief.",
          { h3: "1.5 Gebruiker" },
          "Iedere natuurlijke persoon die namens Opdrachtgever gebruikmaakt van de Diensten.",
          { h3: "1.6 Account" },
          "Een gebruikersaccount waarmee toegang wordt verkregen tot de Diensten van TDT-ICT.",
          { h3: "1.7 AUP" },
          "De Acceptable Use Policy van TDT-ICT.",
          "Deze vormt een integraal onderdeel van iedere overeenkomst.",
          { h3: "1.8 SLA" },
          "Een afzonderlijk overeengekomen Service Level Agreement waarin aanvullende afspraken worden gemaakt over beschikbaarheid, responstijden en dienstverlening.",
          { h3: "1.9 Werkdag" },
          "Maandag tot en met vrijdag, met uitzondering van algemeen erkende Nederlandse feestdagen.",
          { h3: "1.10 Schriftelijk" },
          "Onder schriftelijk wordt mede verstaan communicatie per e-mail, klantportaal of andere elektronische communicatiemiddelen.",
        ],
      },
      {
        heading: "Artikel 2 – Toepasselijkheid",
        blocks: [
          "2.1 Deze Algemene Voorwaarden zijn van toepassing op alle offertes, aanbiedingen, overeenkomsten en overige rechtsbetrekkingen tussen TDT-ICT en Opdrachtgever.",
          "2.2 Afwijkingen van deze voorwaarden zijn uitsluitend geldig indien deze uitdrukkelijk en schriftelijk door TDT-ICT zijn bevestigd.",
          "2.3 Algemene voorwaarden van Opdrachtgever worden uitdrukkelijk van de hand gewezen, tenzij TDT-ICT deze schriftelijk heeft aanvaard.",
          "2.4 Indien één of meerdere bepalingen van deze Algemene Voorwaarden nietig blijken of vernietigd worden, blijven de overige bepalingen volledig van kracht.",
          "2.5 Indien een bepaling ongeldig blijkt te zijn, zullen partijen deze vervangen door een bepaling die zoveel mogelijk aansluit bij het oorspronkelijke doel en de strekking.",
          "2.6 De volgende documenten maken integraal onderdeel uit van iedere overeenkomst:",
          {
            list: [
              "deze Algemene Voorwaarden;",
              "de Acceptable Use Policy (AUP);",
              "de Privacyverklaring;",
              "een eventuele Verwerkersovereenkomst;",
              "een eventuele Service Level Agreement (SLA).",
            ],
          },
          "Bij tegenstrijdigheden prevaleert de Service Level Agreement boven deze Algemene Voorwaarden, en deze Algemene Voorwaarden boven de Acceptable Use Policy, tenzij uitdrukkelijk anders is bepaald.",
        ],
      },
      {
        heading: "Artikel 3 – Offertes en aanbiedingen",
        blocks: [
          "3.1 Alle offertes, prijsopgaven en aanbiedingen van TDT-ICT zijn vrijblijvend, tenzij schriftelijk anders is vermeld.",
          "3.2 Een offerte is geldig gedurende 30 dagen, tenzij daarin een andere termijn is opgenomen.",
          "3.3 Kennelijke fouten, vergissingen, rekenfouten of schrijffouten in offertes of prijsopgaven binden TDT-ICT niet.",
          "3.4 TDT-ICT is gerechtigd een aanvraag of opdracht te weigeren indien:",
          {
            list: [
              "deze strijdig is met wet- en regelgeving;",
              "deze strijdig is met de Acceptable Use Policy;",
              "deze een veiligheidsrisico oplevert;",
              "deze kan leiden tot reputatieschade;",
              "de uitvoering technisch of organisatorisch niet verantwoord is;",
              "er een vermoeden bestaat van fraude, witwassen of andere onrechtmatige activiteiten.",
            ],
          },
          "3.5 Offertes gelden uitsluitend voor de daarin genoemde Diensten en kunnen niet automatisch worden toegepast op toekomstige opdrachten.",
        ],
      },
      {
        heading: "Artikel 4 – Totstandkoming van de overeenkomst",
        blocks: [
          "4.1 Een overeenkomst tussen TDT-ICT en Opdrachtgever komt tot stand zodra:",
          {
            list: [
              "TDT-ICT de opdracht schriftelijk of elektronisch bevestigt;",
              "Opdrachtgever een offerte of overeenkomst schriftelijk of elektronisch accepteert;",
            ],
          },
          "of",
          {
            list: [
              "TDT-ICT feitelijk aanvangt met de uitvoering van de werkzaamheden.",
            ],
          },
          "4.2 Mondelinge toezeggingen, afspraken of mededelingen zijn uitsluitend bindend indien deze schriftelijk door TDT-ICT zijn bevestigd.",
          "4.3 TDT-ICT is gerechtigd vóór aanvang van de dienstverlening aanvullende informatie of identificatie van Opdrachtgever te verlangen indien dit noodzakelijk is voor de uitvoering van de overeenkomst of om te voldoen aan wettelijke verplichtingen.",
          "4.4 TDT-ICT kan verlangen dat een aanbetaling of vooruitbetaling wordt voldaan voordat met de uitvoering van de overeenkomst wordt begonnen.",
          "4.5 Wijzigingen van een overeenkomst zijn uitsluitend geldig indien deze schriftelijk zijn overeengekomen.",
        ],
      },
      {
        heading: "Artikel 5 – Uitvoering van de overeenkomst",
        blocks: [
          "5.1 TDT-ICT voert de overeenkomst uit naar beste inzicht, deskundigheid en vakmanschap.",
          "5.2 TDT-ICT heeft een inspanningsverplichting, tenzij uitdrukkelijk schriftelijk een resultaatsverplichting is overeengekomen.",
          "5.3 Opdrachtgever verstrekt alle gegevens die noodzakelijk zijn voor een correcte uitvoering van de overeenkomst tijdig, volledig en juist.",
          "5.4 Indien benodigde informatie niet tijdig wordt verstrekt, mag TDT-ICT:",
          {
            list: [
              "werkzaamheden uitstellen;",
              "aanvullende kosten in rekening brengen;",
              "de overeenkomst opschorten.",
            ],
          },
          "5.5 TDT-ICT is gerechtigd werkzaamheden geheel of gedeeltelijk uit te laten voeren door zorgvuldig geselecteerde derden of leveranciers.",
          "5.6 Opdrachtgever blijft verantwoordelijk voor de juistheid van alle door hem verstrekte gegevens.",
        ],
      },
      {
        heading: "Artikel 6 – Hosting-, cloud- en internetdiensten",
        blocks: [
          "6.1 TDT-ICT levert hosting-, cloud-, internet- en aanverwante diensten op basis van een inspanningsverplichting.",
          "6.2 Tenzij schriftelijk anders overeengekomen geeft TDT-ICT geen garantie op een ononderbroken beschikbaarheid van de Diensten.",
          "6.3 Storingen kunnen ontstaan door onder meer:",
          {
            list: [
              "onderhoud;",
              "software-updates;",
              "beveiligingsmaatregelen;",
              "storingen bij leveranciers;",
              "storingen bij datacenters;",
              "internetstoringen;",
              "stroomuitval.",
            ],
          },
          "6.4 Geplande onderhoudswerkzaamheden worden indien redelijk mogelijk vooraf aangekondigd.",
          "6.5 Spoedeisend onderhoud mag zonder voorafgaande aankondiging worden uitgevoerd indien dit noodzakelijk is voor:",
          {
            list: [
              "beveiliging;",
              "stabiliteit;",
              "continuïteit;",
              "wettelijke verplichtingen.",
            ],
          },
          "6.6 TDT-ICT mag technische wijzigingen aanbrengen aan haar infrastructuur indien dit noodzakelijk is voor een veilige of efficiënte dienstverlening.",
          "6.7 Opdrachtgever zal de Diensten gebruiken overeenkomstig:",
          {
            list: [
              "deze Algemene Voorwaarden;",
              "de Acceptable Use Policy;",
              "toepasselijke wet- en regelgeving.",
            ],
          },
        ],
      },
      {
        heading: "Artikel 7 – Domeinnamen",
        blocks: [
          "7.1 TDT-ICT verzorgt uitsluitend de registratie van domeinnamen namens Opdrachtgever.",
          "7.2 Registratie van een domeinnaam vormt geen garantie dat de domeinnaam geen inbreuk maakt op rechten van derden.",
          "7.3 Opdrachtgever blijft volledig verantwoordelijk voor de keuze en het gebruik van een domeinnaam.",
          "7.4 TDT-ICT is niet aansprakelijk indien een registratie wordt geweigerd door een registry of registrar.",
          "7.5 Registratie vindt plaats onder de voorwaarden van de betreffende registry of registrar.",
          "7.6 Opdrachtgever blijft verantwoordelijk voor tijdige betaling van verlengingen.",
          "7.7 Bij niet-tijdige betaling kan een domeinnaam:",
          {
            list: [
              "worden geschorst;",
              "vervallen;",
              "in quarantaine worden geplaatst;",
              "door derden worden geregistreerd.",
            ],
          },
          "De hieruit voortvloeiende schade komt volledig voor rekening van Opdrachtgever.",
          "7.8 TDT-ICT zal zich inspannen om tijdig herinneringen voor verlenging te versturen, maar blijft hiervoor niet aansprakelijk.",
          "##",
        ],
      },
      {
        heading: "Artikel 8 – E-maildiensten",
        blocks: [
          "8.1 TDT-ICT levert e-maildiensten op basis van een inspanningsverplichting.",
          "8.2 TDT-ICT kan geen garantie geven dat e-mail altijd correct wordt afgeleverd.",
          "8.3 Vertragingen of uitval kunnen ontstaan door:",
          {
            list: [
              "spamfilters;",
              "blacklists;",
              "storingen;",
              "internetproviders;",
              "ontvangende mailservers.",
            ],
          },
          "8.4 Opdrachtgever blijft verantwoordelijk voor:",
          {
            list: [
              "de inhoud van verzonden berichten;",
              "gebruikersaccounts;",
              "wachtwoorden;",
              "naleving van de Acceptable Use Policy.",
            ],
          },
          "8.5 Het verzenden van spam, phishing of andere ongewenste communicatie is verboden.",
        ],
      },
      {
        heading: "Artikel 9 – Onderhoud en beschikbaarheid",
        blocks: [
          "9.1 TDT-ICT verricht periodiek onderhoud aan haar systemen.",
          "9.2 Onderhoud kan leiden tot tijdelijke onderbrekingen van de dienstverlening.",
          "9.3 TDT-ICT zal onderhoud zoveel mogelijk plannen buiten reguliere kantooruren indien dit redelijkerwijs mogelijk is.",
          "9.4 Indien Opdrachtgever een afzonderlijke Service Level Agreement (SLA) heeft afgesloten, gelden de daarin opgenomen responstijden en beschikbaarheidsafspraken.",
          "9.5 Storingen worden behandeld op basis van prioriteit, ernst en impact.",
        ],
      },
      {
        heading: "Artikel 10 – Acceptable Use Policy (AUP)",
        blocks: [
          "10.1 Op alle hosting-, cloud-, internet- en e-maildiensten van TDT-ICT is de Acceptable Use Policy (AUP) van toepassing.",
          "10.2 De AUP maakt integraal onderdeel uit van iedere overeenkomst.",
          "10.3 Opdrachtgever draagt er zorg voor dat alle gebruikers die onder zijn verantwoordelijkheid gebruikmaken van de Diensten de AUP naleven.",
          "10.4 Bij overtreding van de AUP is TDT-ICT gerechtigd zonder voorafgaande ingebrekestelling maatregelen te treffen, waaronder:",
          {
            list: [
              "het geven van een waarschuwing;",
              "het tijdelijk blokkeren van accounts;",
              "het beperken van netwerkverkeer;",
              "het verwijderen of ontoegankelijk maken van schadelijke inhoud;",
              "het opschorten van de dienstverlening;",
              "het beëindigen van de overeenkomst.",
            ],
          },
          "10.5 Indien TDT-ICT op grond van een wettelijke verplichting of een bindend verzoek van een bevoegde autoriteit gehouden is gegevens te verstrekken of diensten te beperken, zal Opdrachtgever hieraan zijn medewerking verlenen voor zover de wet dit toestaat.",
        ],
      },
      {
        heading: "Artikel 11 – Beveiliging",
        blocks: [
          "11.1 TDT-ICT neemt passende technische en organisatorische maatregelen om haar systemen en dienstverlening te beveiligen tegen ongeautoriseerde toegang, verlies van gegevens en andere vormen van misbruik.",
          "11.2 Ondanks deze maatregelen kan TDT-ICT geen volledige garantie geven dat haar systemen of de door haar geleverde Diensten te allen tijde vrij zijn van beveiligingsincidenten, kwetsbaarheden of cyberaanvallen.",
          "11.3 Opdrachtgever is verantwoordelijk voor een veilig gebruik van de Diensten, waaronder in ieder geval:",
          {
            list: [
              "het gebruik van sterke wachtwoorden;",
              "het gebruik van multi-factor authenticatie indien beschikbaar;",
              "het tijdig installeren van beveiligingsupdates op eigen systemen;",
              "het vertrouwelijk houden van inloggegevens;",
              "het beperken van toegang tot bevoegde gebruikers.",
            ],
          },
          "11.4 Indien Opdrachtgever een beveiligingsincident of kwetsbaarheid constateert die betrekking heeft op de Diensten van TDT-ICT, zal hij dit onverwijld melden via de door TDT-ICT aangewezen contactgegevens.",
          "11.5 Het is niet toegestaan beveiligingsonderzoek uit te voeren op systemen van TDT-ICT zonder voorafgaande schriftelijke toestemming.",
        ],
      },
      {
        heading: "Artikel 12 – Back-ups en gegevens",
        blocks: [
          "12.1 Tenzij uitdrukkelijk schriftelijk overeengekomen, is Opdrachtgever zelf verantwoordelijk voor het maken en bewaren van actuele back-ups van zijn gegevens.",
          "12.2 Indien TDT-ICT back-updiensten aanbiedt of uitvoert, gelden deze uitsluitend voor zover dit onderdeel uitmaakt van de overeengekomen dienstverlening.",
          "12.3 Back-ups worden uitsluitend gemaakt ten behoeve van herstel na technische storingen en vormen geen archiefvoorziening.",
          "12.4 TDT-ICT garandeert niet dat iedere back-up volledig of bruikbaar is.",
          "12.5 Na beëindiging van de overeenkomst is TDT-ICT gerechtigd opgeslagen gegevens na een redelijke bewaartermijn definitief te verwijderen, tenzij een wettelijke bewaarplicht anders voorschrijft.",
          "12.6 Opdrachtgever blijft te allen tijde eigenaar van zijn gegevens.",
        ],
      },
      {
        heading: "Artikel 13 – Vergoedingen en betaling",
        blocks: [
          "13.1 Alle door TDT-ICT vermelde prijzen zijn exclusief omzetbelasting (btw), tenzij uitdrukkelijk anders vermeld.",
          "13.2 Facturen dienen binnen 14 dagen na factuurdatum te worden voldaan, tenzij schriftelijk een andere betalingstermijn is overeengekomen.",
          "13.3 TDT-ICT is gerechtigd periodieke abonnementen vooraf te factureren.",
          "13.4 Indien Opdrachtgever niet tijdig betaalt, verkeert hij van rechtswege in verzuim zonder dat een ingebrekestelling vereist is.",
          "13.5 Vanaf het moment van verzuim is Opdrachtgever wettelijke rente verschuldigd.",
          "13.6 Daarnaast komen alle redelijke buitengerechtelijke incassokosten voor rekening van Opdrachtgever overeenkomstig de Wet normering buitengerechtelijke incassokosten.",
          "13.7 TDT-ICT is gerechtigd haar tarieven jaarlijks aan te passen op basis van:",
          {
            list: [
              "inflatie;",
              "prijswijzigingen van leveranciers;",
              "wijzigingen in belastingen of heffingen;",
              "gewijzigde marktomstandigheden.",
            ],
          },
          "Prijswijzigingen worden tijdig aan Opdrachtgever medegedeeld.",
          "13.8 Bezwaren tegen een factuur schorten de betalingsverplichting niet op.",
          "##",
        ],
      },
      {
        heading: "Artikel 14 – Opschorting",
        blocks: [
          "14.1 TDT-ICT is gerechtigd haar dienstverlening geheel of gedeeltelijk op te schorten indien:",
          {
            list: [
              "Opdrachtgever zijn betalingsverplichtingen niet nakomt;",
              "sprake is van misbruik van de Diensten;",
              "de Acceptable Use Policy wordt overtreden;",
              "wettelijke verplichtingen daartoe aanleiding geven;",
              "voortzetting van de dienstverlening een risico vormt voor de veiligheid of continuïteit van de infrastructuur.",
            ],
          },
          "14.2 Tijdens een opschorting blijft de betalingsverplichting van Opdrachtgever onverminderd van kracht.",
          "14.3 Kosten die voortvloeien uit het opnieuw activeren van diensten kunnen aan Opdrachtgever in rekening worden gebracht.",
        ],
      },
      {
        heading: "Artikel 15 – Looptijd en beëindiging",
        blocks: [
          "15.1 Overeenkomsten worden aangegaan voor de overeengekomen contractduur.",
          "15.2 Indien geen contractduur is overeengekomen, geldt de overeenkomst voor onbepaalde tijd.",
          "15.3 Tenzij anders overeengekomen bedraagt de opzegtermijn één kalendermaand.",
          "15.4 Opzegging dient schriftelijk of elektronisch te geschieden.",
          "15.5 TDT-ICT is gerechtigd de overeenkomst met onmiddellijke ingang geheel of gedeeltelijk te beëindigen indien:",
          {
            list: [
              "Opdrachtgever in staat van faillissement verkeert;",
              "surseance van betaling is aangevraagd;",
              "de onderneming wordt beëindigd;",
              "sprake is van ernstige of herhaalde overtreding van de AUP;",
              "sprake is van fraude of misleiding;",
              "sprake is van illegale activiteiten;",
              "voortzetting redelijkerwijs niet van TDT-ICT kan worden verlangd.",
            ],
          },
          "15.6 Na beëindiging van de overeenkomst is TDT-ICT gerechtigd accounts af te sluiten en gegevens overeenkomstig artikel 12 te verwijderen.",
        ],
      },
      {
        heading: "Artikel 16 – Privacy en gegevensverwerking",
        blocks: [
          "16.1 TDT-ICT verwerkt persoonsgegevens overeenkomstig de Algemene Verordening Gegevensbescherming (AVG) en de eigen Privacyverklaring.",
          "16.2 Indien TDT-ICT persoonsgegevens verwerkt namens Opdrachtgever, treedt TDT-ICT op als verwerker in de zin van de AVG.",
          "16.3 Partijen sluiten indien wettelijk vereist een afzonderlijke Verwerkersovereenkomst.",
          "16.4 Opdrachtgever blijft verantwoordelijk voor de rechtmatigheid van de persoonsgegevens die hij via de Diensten verwerkt.",
          "16.5 TDT-ICT is gerechtigd subverwerkers in te schakelen voor zover dit noodzakelijk is voor de uitvoering van de overeenkomst. TDT-ICT draagt er zorg voor dat met dergelijke subverwerkers passende afspraken worden gemaakt.",
        ],
      },
      {
        heading: "Artikel 17 – Intellectueel eigendom",
        blocks: [
          "17.1 Alle intellectuele eigendomsrechten op software, documentatie, configuraties, scripts, ontwerpen, werkwijzen, offertes, rapportages, websites, templates, handleidingen en overige materialen die door TDT-ICT worden ontwikkeld of ter beschikking worden gesteld, berusten uitsluitend bij TDT-ICT of haar licentiegevers, tenzij schriftelijk anders is overeengekomen.",
          "17.2 De Overeenkomst strekt niet tot overdracht van intellectuele eigendomsrechten.",
          "17.3 Opdrachtgever verkrijgt uitsluitend een niet-exclusief, niet-overdraagbaar gebruiksrecht voor de duur van de Overeenkomst, voor zover dit noodzakelijk is voor het gebruik van de Diensten.",
          "17.4 Het is Opdrachtgever niet toegestaan zonder voorafgaande schriftelijke toestemming van TDT-ICT:",
          {
            list: [
              "software te kopiëren anders dan voor wettelijk toegestane back-ups;",
              "broncode op te vragen of te reverse-engineeren, tenzij dwingend recht anders bepaalt;",
              "configuraties of scripts van TDT-ICT commercieel te exploiteren;",
              "documentatie openbaar te maken of te verspreiden.",
            ],
          },
          "17.5 Opdrachtgever blijft eigenaar van de door hem aangeleverde gegevens, bestanden, websites, databanken en overige content.",
          "17.6 Opdrachtgever garandeert dat hij gerechtigd is de door hem aangeleverde gegevens te gebruiken en vrijwaart TDT-ICT tegen aanspraken van derden wegens inbreuk op intellectuele eigendomsrechten.",
        ],
      },
      {
        heading: "Artikel 18 – Geheimhouding",
        blocks: [
          "18.1 Partijen behandelen alle vertrouwelijke informatie die zij in het kader van de Overeenkomst verkrijgen vertrouwelijk.",
          "18.2 Onder vertrouwelijke informatie wordt verstaan alle informatie waarvan redelijkerwijs kan worden aangenomen dat deze vertrouwelijk is, waaronder technische informatie, bedrijfsgegevens, prijzen, wachtwoorden, configuraties, klantgegevens en beveiligingsinformatie.",
          "18.3 Deze geheimhoudingsplicht geldt niet indien:",
          {
            list: [
              "openbaarmaking wettelijk verplicht is;",
              "de informatie reeds openbaar bekend was zonder schending van deze bepaling;",
              "de ontvangende partij de informatie reeds rechtmatig bezat.",
            ],
          },
          "18.4 De geheimhoudingsverplichting blijft ook na beëindiging van de Overeenkomst van kracht.",
        ],
      },
      {
        heading: "Artikel 19 – Aansprakelijkheid",
        blocks: [
          "19.1 TDT-ICT is uitsluitend aansprakelijk voor directe schade die het rechtstreekse gevolg is van een toerekenbare tekortkoming in de nakoming van de Overeenkomst.",
          "19.2 Iedere aansprakelijkheid van TDT-ICT is beperkt tot het bedrag dat door Opdrachtgever is betaald voor de betreffende Dienst gedurende de drie maanden voorafgaand aan de gebeurtenis waarop de aansprakelijkheid betrekking heeft.",
          "Indien de aansprakelijkheid is gedekt door een aansprakelijkheidsverzekering van TDT-ICT, is de aansprakelijkheid beperkt tot het bedrag dat daadwerkelijk door de verzekeraar wordt uitgekeerd, vermeerderd met het eventueel toepasselijke eigen risico.",
          "19.3 TDT-ICT is niet aansprakelijk voor indirecte schade, waaronder in ieder geval wordt verstaan:",
          {
            list: [
              "gevolgschade;",
              "gederfde winst;",
              "gemiste besparingen;",
              "reputatieschade;",
              "verlies van klanten;",
              "bedrijfsstagnatie;",
              "dataverlies;",
              "schade door onderbreking van bedrijfsprocessen.",
            ],
          },
          "19.4 TDT-ICT is evenmin aansprakelijk voor schade die ontstaat als gevolg van:",
          {
            list: [
              "storingen bij internetproviders;",
              "storingen bij datacenters;",
              "storingen bij energieleveranciers;",
              "storingen bij registries of registrars;",
              "uitval van cloudleveranciers;",
              "uitval van software van derden;",
              "DDoS-aanvallen;",
              "malware;",
              "ransomware;",
              "hacking;",
              "phishing;",
              "beveiligingsincidenten bij derden.",
            ],
          },
          "19.5 TDT-ICT is niet aansprakelijk voor verlies van gegevens indien Opdrachtgever geen actuele eigen back-up heeft gemaakt, tenzij schriftelijk is overeengekomen dat TDT-ICT verantwoordelijk is voor het maken en beheren van back-ups.",
          "19.6 Opdrachtgever vrijwaart TDT-ICT tegen aanspraken van derden die voortvloeien uit het gebruik van de Diensten door Opdrachtgever of door personen die onder diens verantwoordelijkheid handelen.",
          "19.7 De in dit artikel opgenomen beperkingen gelden niet indien de schade het gevolg is van opzet of bewuste roekeloosheid van TDT-ICT.",
        ],
      },
      {
        heading: "Artikel 20 – Overmacht",
        blocks: [
          "20.1 Onder overmacht wordt verstaan iedere omstandigheid buiten de redelijke invloed van TDT-ICT waardoor nakoming van de Overeenkomst geheel of gedeeltelijk onmogelijk of onredelijk bezwarend wordt.",
          "20.2 Onder overmacht wordt in ieder geval verstaan:",
          {
            list: [
              "oorlog;",
              "terrorisme;",
              "pandemieën;",
              "natuurrampen;",
              "brand;",
              "overstromingen;",
              "stroomuitval;",
              "internetstoringen;",
              "kabelbreuken;",
              "storingen bij leveranciers;",
              "storingen bij datacenters;",
              "uitval van cloudplatformen;",
              "cyberaanvallen;",
              "DDoS-aanvallen;",
              "stakingen;",
              "overheidsmaatregelen;",
              "wijzigingen in wet- en regelgeving.",
            ],
          },
          "20.3 Tijdens overmacht worden de verplichtingen van TDT-ICT opgeschort.",
          "20.4 Indien de overmacht langer dan zestig (60) dagen voortduurt, zijn beide partijen gerechtigd de Overeenkomst schriftelijk te beëindigen zonder gehouden te zijn tot vergoeding van schade.",
        ],
      },
      {
        heading: "Artikel 21 – Wijzigingen van diensten en voorwaarden",
        blocks: [
          "21.1 TDT-ICT is gerechtigd haar Diensten, tarieven, technische specificaties en deze Algemene Voorwaarden te wijzigen indien dit noodzakelijk is vanwege:",
          {
            list: [
              "gewijzigde wet- en regelgeving;",
              "technische ontwikkelingen;",
              "wijzigingen bij leveranciers;",
              "beveiligingsredenen.",
            ],
          },
          "21.2 Wijzigingen worden tijdig bekendgemaakt via de website, het klantportaal of per e-mail.",
          "21.3 Wijzigingen treden in werking op de door TDT-ICT aangegeven datum.",
          "##",
        ],
      },
      {
        heading: "Artikel 22 – Toepasselijk recht en geschillen",
        blocks: [
          "22.1 Op alle rechtsverhoudingen tussen TDT-ICT en Opdrachtgever is uitsluitend Nederlands recht van toepassing.",
          "22.2 Partijen zullen zich inspannen geschillen eerst in onderling overleg op te lossen.",
          "22.3 Indien overleg niet tot een oplossing leidt, worden geschillen voorgelegd aan de bevoegde rechter van de rechtbank in het arrondissement waar TDT-ICT is gevestigd, tenzij dwingend recht een andere rechter voorschrijft.",
        ],
      },
      {
        heading: "Artikel 23 – Slotbepalingen",
        blocks: [
          "23.1 Deze Algemene Voorwaarden vormen samen met de Acceptable Use Policy (AUP), de Privacyverklaring, een eventuele Verwerkersovereenkomst (DPA) en een eventuele Service Level Agreement (SLA) de volledige overeenkomst tussen TDT-ICT en Opdrachtgever, tenzij schriftelijk anders is overeengekomen.",
          "23.2 Indien een bepaling van deze Algemene Voorwaarden nietig of vernietigbaar blijkt te zijn, blijven de overige bepalingen onverminderd van kracht. Partijen zullen de ongeldige bepaling vervangen door een bepaling die zoveel mogelijk aansluit bij doel en strekking van de oorspronkelijke bepaling.",
          "23.3 Het nalaten van TDT-ICT om een bepaling uit deze Algemene Voorwaarden af te dwingen, houdt geen afstand van recht in.",
          "23.4 De meest actuele versie van deze Algemene Voorwaarden is steeds beschikbaar via de website van TDT-ICT.",
        ],
      },
    ],
  },
  {
    slug: "acceptable-use-policy-aup",
    title: "Acceptable Use Policy (AUP)",
    seo: {
      title: "Acceptable Use Policy (AUP)",
      description: "De Acceptable Use Policy van TDT-ICT: regels voor het gebruik van onze hosting-, mail- en netwerkdiensten.",
    },
    updated: "6 november 2026",
    version: "2.0",
    intro: "Deze Acceptable Use Policy beschrijft wat wel en niet is toegestaan bij het gebruik van de diensten van TDT-ICT.",
    sections: [
      {
        heading: "Artikel 1 – Doel en toepasselijkheid",
        blocks: [
          "1.1 Deze Acceptable Use Policy (AUP) beschrijft welk gebruik van de Diensten van TDT-ICT is toegestaan en welk gebruik niet. Zo houden wij onze infrastructuur veilig en betrouwbaar voor alle klanten.",
          "1.2 Deze AUP is van toepassing op alle hosting-, cloud-, internet- en e-maildiensten van TDT-ICT en maakt integraal onderdeel uit van iedere Overeenkomst, zoals bepaald in artikel 10 van de Algemene Voorwaarden.",
          "1.3 Begrippen die met een hoofdletter zijn geschreven, hebben de betekenis die daaraan in de Algemene Voorwaarden van TDT-ICT wordt gegeven.",
          "1.4 Opdrachtgever draagt er zorg voor dat alle Gebruikers die onder zijn verantwoordelijkheid gebruikmaken van de Diensten deze AUP naleven. Opdrachtgever is verantwoordelijk voor iedere overtreding door deze Gebruikers.",
        ],
      },
      {
        heading: "Artikel 2 – Onrechtmatige inhoud en activiteiten",
        blocks: [
          "2.1 Het is niet toegestaan de Diensten te gebruiken voor het opslaan, publiceren, verspreiden of toegankelijk maken van inhoud of activiteiten die in strijd zijn met de wet, de openbare orde of de goede zeden, waaronder in ieder geval:",
          {
            list: [
              "seksueel misbruikmateriaal van minderjarigen;",
              "inhoud die inbreuk maakt op intellectuele eigendomsrechten van derden, zoals illegaal verspreide software, films of muziek;",
              "discriminerende, bedreigende, lasterlijke of opruiende inhoud;",
              "fraude, oplichting, phishing of het nabootsen van andere personen of organisaties;",
              "het zonder grondslag verwerken of openbaar maken van persoonsgegevens van derden;",
              "het aanbieden of verspreiden van malware, ransomware of andere schadelijke software.",
            ],
          },
        ],
      },
      {
        heading: "Artikel 3 – E-mail en spam",
        blocks: [
          "3.1 Het is niet toegestaan via de Diensten ongevraagde berichten te verzenden, waaronder in ieder geval:",
          {
            list: [
              "ongevraagde commerciële, ideële of charitatieve e-mail in strijd met de Telecommunicatiewet;",
              "berichten aan adressen waarvoor geen aantoonbare toestemming van de ontvanger is verkregen;",
              "berichten met een vervalste afzender, vervalste headers of een misleidende onderwerpregel;",
              "massaal verzonden berichten die de reputatie van de mailservers of IP-adressen van TDT-ICT kunnen schaden.",
            ],
          },
          "3.2 Opdrachtgever mag geen mailservers, formulieren of scripts gebruiken die door derden kunnen worden misbruikt om berichten te verzenden, zoals een open relay.",
          "3.3 Nieuwsbrieven en mailings zijn toegestaan, mits ontvangers zich daarvoor aantoonbaar hebben aangemeld en zich eenvoudig kunnen afmelden.",
        ],
      },
      {
        heading: "Artikel 4 – Beveiliging en netwerk",
        blocks: [
          "4.1 Het is niet toegestaan de Diensten te gebruiken om de beveiliging of werking van systemen en netwerken van TDT-ICT of derden aan te tasten, waaronder in ieder geval:",
          {
            list: [
              "het zonder toestemming binnendringen van computersystemen, accounts of netwerken;",
              "het uitvoeren van poortscans, kwetsbaarheidsscans of penetratietests zonder voorafgaande schriftelijke toestemming van de eigenaar van het systeem;",
              "het uitvoeren of ondersteunen van (D)DoS-aanvallen;",
              "het beheren of onderdeel zijn van een botnet;",
              "het vervalsen van IP-adressen, MAC-adressen of andere netwerkidentificatie;",
              "het omzeilen van beveiligingsmaatregelen, gebruikslimieten of authenticatie.",
            ],
          },
          "4.2 Beveiligingsonderzoek op systemen van TDT-ICT is uitsluitend toegestaan met voorafgaande schriftelijke toestemming, zoals bepaald in artikel 11.5 van de Algemene Voorwaarden.",
        ],
      },
      {
        heading: "Artikel 5 – Redelijk gebruik",
        blocks: [
          "5.1 Opdrachtgever gebruikt de Diensten op een manier die geen onevenredige belasting veroorzaakt voor de infrastructuur van TDT-ICT of voor andere klanten.",
          "5.2 Zonder voorafgaande schriftelijke toestemming van TDT-ICT is het niet toegestaan:",
          {
            list: [
              "cryptovaluta te minen;",
              "de Diensten in te zetten als openbare proxy, VPN-dienst of Tor-exitnode;",
              "de Diensten door te verkopen of ter beschikking te stellen aan derden.",
            ],
          },
          "5.3 Bij gebruik dat de stabiliteit of prestaties van de infrastructuur in gevaar brengt, neemt TDT-ICT contact op met Opdrachtgever. Indien nodig kan TDT-ICT het gebruik direct beperken.",
        ],
      },
      {
        heading: "Artikel 6 – Verantwoordelijkheden van Opdrachtgever",
        blocks: [
          "6.1 Opdrachtgever is verantwoordelijk voor een veilig gebruik van de Diensten, zoals beschreven in artikel 11.3 van de Algemene Voorwaarden. Dit betekent onder meer:",
          {
            list: [
              "sterke, unieke wachtwoorden gebruiken en multi-factor authenticatie inschakelen waar mogelijk;",
              "software, websites, CMS-systemen en plug-ins die Opdrachtgever zelf beheert tijdig bijwerken;",
              "inloggegevens niet delen met onbevoegden;",
              "een vermoeden van misbruik of een gecompromitteerd account direct melden aan TDT-ICT.",
            ],
          },
        ],
      },
      {
        heading: "Artikel 7 – Maatregelen bij overtreding",
        blocks: [
          "7.1 Bij een overtreding of een gegrond vermoeden van een overtreding van deze AUP is TDT-ICT gerechtigd, zonder voorafgaande ingebrekestelling, de maatregelen te nemen die in artikel 10.4 van de Algemene Voorwaarden zijn genoemd, waaronder:",
          {
            list: [
              "het geven van een waarschuwing;",
              "het tijdelijk blokkeren van accounts;",
              "het beperken van netwerkverkeer;",
              "het verwijderen of ontoegankelijk maken van schadelijke inhoud;",
              "het opschorten van de dienstverlening;",
              "het beëindigen van de overeenkomst.",
            ],
          },
          "7.2 Waar redelijkerwijs mogelijk informeert TDT-ICT Opdrachtgever voordat maatregelen worden genomen. Bij direct gevaar voor de infrastructuur, andere klanten of derden kan TDT-ICT direct ingrijpen.",
          "7.3 Kosten en schade die voortvloeien uit een overtreding van deze AUP komen voor rekening van Opdrachtgever. Opdrachtgever vrijwaart TDT-ICT tegen aanspraken van derden die voortvloeien uit een overtreding.",
          "7.4 Indien TDT-ICT daartoe wettelijk verplicht is, kan zij gegevens verstrekken aan of aangifte doen bij de bevoegde autoriteiten, zoals bepaald in artikel 10.5 van de Algemene Voorwaarden.",
        ],
      },
      {
        heading: "Artikel 8 – Melden van misbruik",
        blocks: [
          "8.1 Ziet u misbruik vanaf systemen of diensten van TDT-ICT, zoals spam, phishing, malware of inbreuk op uw rechten? Meld dit dan via info@tdt-ict.com en vermeld daarbij zo mogelijk:",
          {
            list: [
              "het betreffende IP-adres, de domeinnaam of de URL;",
              "de datum en het tijdstip (met tijdzone);",
              "een omschrijving van het misbruik;",
              "bewijs, zoals volledige e-mailheaders of logregels.",
            ],
          },
          "8.2 TDT-ICT behandelt meldingen vertrouwelijk, beoordeelt iedere melding zorgvuldig en neemt waar nodig maatregelen zoals beschreven in artikel 7.",
          "8.3 Ontdekt u een kwetsbaarheid in systemen van TDT-ICT? Meld deze dan via info@tdt-ict.com en maak de kwetsbaarheid niet openbaar voordat TDT-ICT deze heeft kunnen verhelpen.",
        ],
      },
      {
        heading: "Artikel 9 – Wijzigingen",
        blocks: [
          "9.1 TDT-ICT kan deze AUP wijzigen. Op wijzigingen is artikel 21 van de Algemene Voorwaarden van toepassing.",
          "9.2 Bij tegenstrijdigheid tussen deze AUP en de Algemene Voorwaarden gaan de Algemene Voorwaarden voor, zoals bepaald in artikel 2.6 van de Algemene Voorwaarden.",
        ],
      },
    ],
  },
  {
    slug: "privacy-policy",
    title: "Privacybeleid",
    seo: {
      title: "Privacybeleid",
      description: "Hoe TDT-ICT omgaat met persoonsgegevens. Deze website gebruikt geen tracking-cookies.",
    },
    updated: "6 november 2026",
    effective: "1 september 2021",
    intro: "TDT-ICT gaat zorgvuldig om met persoonsgegevens. In deze privacyverklaring leest u welke gegevens wij verwerken, waarom wij dat doen en welke rechten u heeft.",
    sections: [
      {
        heading: "1. Wie zijn wij?",
        blocks: [
          "TDT-ICT is een handelsnaam van ThijsGeeneWerken, gevestigd aan:",
          "Broekelingstraat 28, 5735 HC Aarle-Rixtel, Nederland",
          "KvK-nummer: 83227660",
          "Website: https://tdt-ict.com",
          "E-mail: info@tdt-ict.com",
          "TDT-ICT levert onder andere:",
          {
            list: [
              "Webhosting",
              "VPS- en cloudhosting",
              "Internetverbindingen",
              "Domeinnaamregistratie",
              "E-maildiensten",
              "Managed hosting",
              "IT-beheer",
              "Systeembeheer",
              "Netwerkbeheer",
              "Consultancy",
              "Overige ICT-diensten",
            ],
          },
          "Bij het leveren van deze diensten verwerken wij persoonsgegevens. In deze privacyverklaring leggen wij uit welke persoonsgegevens wij verwerken, waarom wij dat doen en welke rechten u heeft.",
        ],
      },
      {
        heading: "2. Welke persoonsgegevens verwerken wij?",
        blocks: [
          "Afhankelijk van de afgenomen dienstverlening kunnen wij de volgende persoonsgegevens verwerken.",
          { h3: "Contactgegevens" },
          {
            list: [
              "Voor- en achternaam",
              "Bedrijfsnaam",
              "Adres",
              "Postcode",
              "Woonplaats",
              "Land",
              "Telefoonnummer",
              "E-mailadres",
            ],
          },
          { h3: "Administratieve gegevens" },
          {
            list: [
              "Klantnummer",
              "Factuurgegevens",
              "Betaalgegevens",
              "Bankrekeningnummer",
              "KvK-nummer",
              "Btw-nummer",
            ],
          },
          { h3: "Accountgegevens" },
          "Wanneer u gebruikmaakt van onze diensten kunnen wij onder andere verwerken:",
          {
            list: [
              "Gebruikersnaam",
              "E-mailadres",
              "Versleutelde wachtwoorden",
              "Authenticatiegegevens",
              "Klantportaalgegevens",
            ],
          },
          { h3: "Technische gegevens" },
          "Voor een veilige werking van onze dienstverlening kunnen wij onder andere verwerken:",
          {
            list: [
              "IP-adres",
              "Browserinformatie",
              "Besturingssysteem",
              "Serverlogs",
              "DNS-gegevens",
              "Foutmeldingen",
              "Tijdstip van verbindingen",
            ],
          },
          { h3: "Hostinggegevens" },
          "Wanneer u gebruikmaakt van hosting-, VPS- of cloudoplossingen kunnen persoonsgegevens voorkomen in de gegevens die u zelf op onze systemen opslaat.",
          "Voor deze persoonsgegevens treedt TDT-ICT in de meeste gevallen op als verwerker in de zin van de Algemene Verordening Gegevensbescherming.",
        ],
      },
      {
        heading: "3. Waarvoor gebruiken wij uw persoonsgegevens?",
        blocks: [
          "Wij verwerken persoonsgegevens uitsluitend voor rechtmatige doeleinden.",
          {
            list: [
              "Het uitvoeren van overeenkomsten",
              "Het leveren van hostingdiensten",
              "Het leveren van internetverbindingen",
              "Domeinnaamregistratie",
              "Systeembeheer",
              "Cloudoplossingen",
              "Klantenservice",
              "Facturatie",
              "Administratie",
              "Beveiliging van onze systemen",
              "Fraudepreventie",
              "Netwerkbeheer",
              "Naleving van wettelijke verplichtingen",
            ],
          },
          "Wij gebruiken persoonsgegevens niet voor geautomatiseerde besluitvorming of profilering.",
        ],
      },
      {
        heading: "4. Op welke grondslag verwerken wij persoonsgegevens?",
        blocks: [
          "Wij verwerken persoonsgegevens uitsluitend indien daarvoor een wettelijke grondslag bestaat.",
          {
            list: [
              "Uitvoering van een overeenkomst",
              "Voldoen aan een wettelijke verplichting",
              "Gerechtvaardigd belang",
              "Toestemming van de betrokkene, indien vereist",
            ],
          },
        ],
      },
      {
        heading: "5. Cookies",
        blocks: [
          "TDT-ICT maakt op haar website geen gebruik van trackingcookies, marketingcookies of analytische cookies.",
          "De website is zo ingericht dat bezoekers kunnen navigeren zonder dat hun gedrag wordt gevolgd voor marketing- of analysedoeleinden.",
          "Indien in de toekomst gebruik wordt gemaakt van cookies waarvoor toestemming vereist is, zal TDT-ICT bezoekers hierover vooraf informeren en, indien wettelijk vereist, om toestemming vragen.",
        ],
      },
      {
        heading: "6. Bezoek aan onze website",
        blocks: [
          "Wanneer u onze website bezoekt, kunnen onze webserver of hostingomgeving automatisch technische gegevens registreren die noodzakelijk zijn voor de veilige en correcte werking van de website.",
          {
            list: [
              "IP-adres",
              "Datum en tijd van het bezoek",
              "Opgevraagde pagina's",
              "Browsertype",
              "Besturingssysteem",
              "Technische foutmeldingen",
            ],
          },
          "Deze gegevens worden uitsluitend gebruikt voor:",
          {
            list: [
              "Beveiliging",
              "Beschikbaarheid",
              "Technische werking",
              "Het opsporen van misbruik",
            ],
          },
          "Wij gebruiken deze gegevens niet om bezoekers te volgen of profielen op te bouwen.",
          { h3: "Contactformulier" },
          "Als u het contactformulier op onze website invult, gebruiken wij uw naam, contactgegevens en bericht uitsluitend om uw vraag te beantwoorden. Wij bewaren uw bericht niet langer dan nodig is om uw vraag af te handelen. Wordt u klant, dan gelden de bewaartermijnen uit artikel 7.",
          { h3: "Spambeveiliging" },
          "Om spam via het contactformulier te voorkomen, gebruiken wij Cloudflare Turnstile. Turnstile controleert of het formulier door een mens wordt ingevuld en verwerkt daarvoor technische gegevens, zoals uw IP-adres en browsergegevens. Daarbij worden geen trackingcookies geplaatst.",
          { h3: "Kaart op de contactpagina" },
          "De kaart op de contactpagina wordt pas geladen als u daar zelf op klikt. Vanaf dat moment kan Google gegevens verwerken volgens het privacybeleid van Google.",
        ],
      },
      {
        heading: "7. Bewaartermijnen",
        blocks: [
          "Wij bewaren persoonsgegevens niet langer dan noodzakelijk.",
          {
            list: [
              "Administratieve gegevens: 7 jaar",
              "Facturen: 7 jaar",
              "Supporttickets: 2 jaar",
              "Klantaccounts: zolang de overeenkomst loopt",
              "Serverlogs: maximaal 12 maanden, tenzij een langere bewaartermijn noodzakelijk is voor beveiliging of wettelijke verplichtingen",
            ],
          },
          "Na afloop van de bewaartermijn worden persoonsgegevens verwijderd of geanonimiseerd.",
        ],
      },
      {
        heading: "8. Verstrekking aan derden",
        blocks: [
          "Wij verkopen persoonsgegevens nooit aan derden.",
          "Wij kunnen persoonsgegevens uitsluitend delen met partijen die noodzakelijk zijn voor onze dienstverlening, zoals:",
          {
            list: [
              "Datacenters",
              "Domeinnaamregistries",
              "Internetleveranciers",
              "Cloudleveranciers",
              "Betaalproviders",
              "Boekhoudsoftware",
              "E-mailproviders",
              "Back-upleveranciers",
            ],
          },
          "Met verwerkers sluiten wij, waar wettelijk vereist, een verwerkersovereenkomst.",
          "Persoonsgegevens worden uitsluitend verstrekt aan overheidsinstanties indien wij daartoe wettelijk verplicht zijn.",
        ],
      },
      {
        heading: "9. Internationale doorgifte",
        blocks: [
          "Indien persoonsgegevens buiten de Europese Economische Ruimte worden verwerkt, gebeurt dit uitsluitend indien wordt voldaan aan de eisen van de AVG.",
          "Waar noodzakelijk worden passende waarborgen getroffen, zoals de door de Europese Commissie goedgekeurde Standard Contractual Clauses.",
        ],
      },
      {
        heading: "10. Beveiliging",
        blocks: [
          "TDT-ICT neemt passende technische en organisatorische maatregelen om persoonsgegevens te beschermen tegen verlies, onbevoegde toegang, misbruik of onrechtmatige verwerking.",
          {
            list: [
              "TLS-versleuteling",
              "Firewallbescherming",
              "Netwerkmonitoring",
              "Logging",
              "Software-updates",
              "Toegangsbeveiliging",
              "Beperkte toegangsrechten",
              "Sterke authenticatie waar mogelijk",
              "Beveiligde back-ups",
            ],
          },
          "Hoewel wij passende beveiligingsmaatregelen treffen, kan absolute beveiliging van gegevens op internet nooit volledig worden gegarandeerd.",
        ],
      },
      {
        heading: "11. Hostingdiensten",
        blocks: [
          "Wanneer klanten persoonsgegevens opslaan op hosting-, VPS- of cloudomgevingen van TDT-ICT, verwerkt TDT-ICT deze persoonsgegevens uitsluitend namens de klant.",
          "In dergelijke gevallen treedt TDT-ICT op als verwerker.",
          "De klant blijft verantwoordelijk voor:",
          {
            list: [
              "De rechtmatigheid van de verwerking",
              "De inhoud van opgeslagen gegevens",
              "Het informeren van betrokkenen",
              "Naleving van de AVG",
            ],
          },
          "Indien wettelijk vereist sluiten partijen een afzonderlijke Verwerkersovereenkomst of Data Processing Agreement.",
        ],
      },
      {
        heading: "12. Datalekken",
        blocks: [
          "Indien zich een beveiligingsincident voordoet waarbij persoonsgegevens betrokken zijn, handelt TDT-ICT overeenkomstig de AVG en de meldplicht datalekken.",
          "Indien wettelijk vereist worden:",
          {
            list: [
              "De Autoriteit Persoonsgegevens",
              "Betrokken klanten",
              "Betrokken personen, indien noodzakelijk",
            ],
          },
          "tijdig geïnformeerd.",
        ],
      },
      {
        heading: "13. Uw rechten",
        blocks: [
          "U heeft op grond van de AVG onder andere het recht om:",
          {
            list: [
              "Inzage te vragen in uw persoonsgegevens",
              "Persoonsgegevens te laten corrigeren",
              "Persoonsgegevens te laten verwijderen",
              "De verwerking te beperken",
              "Bezwaar te maken tegen verwerking",
              "Uw gegevens over te dragen",
              "Eerder gegeven toestemming in te trekken",
            ],
          },
          "Een verzoek kan worden ingediend via info@tdt-ict.com.",
          "Wij reageren in beginsel binnen één maand.",
        ],
      },
      {
        heading: "14. Klachten",
        blocks: [
          "Indien u van mening bent dat TDT-ICT niet zorgvuldig omgaat met uw persoonsgegevens, verzoeken wij u eerst contact met ons op te nemen.",
          "Daarnaast heeft u het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens.",
          "https://autoriteitpersoonsgegevens.nl",
        ],
      },
      {
        heading: "15. Wijzigingen",
        blocks: [
          "TDT-ICT behoudt zich het recht voor deze privacyverklaring te wijzigen.",
          "De meest actuele versie wordt gepubliceerd op https://tdt-ict.com.",
          "Wij adviseren u deze privacyverklaring regelmatig te raadplegen.",
        ],
      },
      {
        heading: "16. Contact",
        blocks: [
          "Voor vragen over deze privacyverklaring of de verwerking van persoonsgegevens kunt u contact opnemen met:",
          "TDT-ICT (handelsnaam van ThijsGeeneWerken), Broekelingstraat 28, 5735 HC Aarle-Rixtel, Nederland",
          "KvK-nummer: 83227660",
          "Telefoon: 06-36320468",
          "E-mail: info@tdt-ict.com",
          "Website: https://tdt-ict.com",
        ],
      },
      {
        heading: "Slotbepaling",
        blocks: [
          "Deze privacyverklaring is opgesteld overeenkomstig de Algemene Verordening Gegevensbescherming en vormt een aanvulling op de Algemene Voorwaarden en de Acceptable Use Policy van TDT-ICT.",
          "Bij vragen over de verwerking van persoonsgegevens kunt u contact opnemen via info@tdt-ict.com.",
        ],
      },
    ],
  },
];

export const getLegalPage = (slug: LegalPage["slug"]) => legalPages.find((p) => p.slug === slug)!;
