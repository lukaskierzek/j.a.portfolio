import Publisher from "../Data/PublisherList";
import returnLinkToBookstore from "./ReturnLinkToBookstore";
import React from "react";
import {Typography} from "@mui/material";

interface IBook {
  id: number,
  title: string,
  author: string,
  workType: string,
  about: React.ReactElement,
  imgUrl: string,
}

export const BookList: IBook[] = [
  {
    id: 1,
    title: "Gieroj",
    author: "Piotr Sułek",
    workType: "Redakcja",
    about:
      <>
        <Typography
          component="section"
          variant="body1"
          marginBottom={2}
        >
          <Typography component="span" fontStyle="italic" fontWeight="bold">24/02/22. Antologia dla
            Ukrainy</Typography> miała na celu
          okazanie solidarności z zaatakowaną Ukrainą oraz realne wsparcie organizacji Proliska, do której trafił dochód
          ze sprzedaży książek w formie e-booków.
        </Typography>
        <Typography
          component="section"
          variant="body1"
          marginBottom={2}
        >
          Antologia była przedsięwzięciem charytatywnym: przy jej powstaniu pracowało wielu polskich autorów,
          grafików i redaktorów. Mój udział w tym projekcie stanowiła <Typography component="span"
                                                                                  fontWeight="bold">redakcja
          opowiadania </Typography>
          <Typography component="span" fontStyle="italic" fontWeight="bold">Gieroj</Typography>. Utwór składa
          się z listów rosyjskiego
          żołnierza, który szybko dochodzi do wniosku, że walczy po niewłaściwej stronie.
        </Typography>
        <Typography
          component="section"
          variant="body1"
        >
          Obecnie całą antologię można pobrać za darmo ze
          strony {returnLinkToBookstore("https://wydawnictwoix.pl/produkt/24-02-2022/", Publisher.IX)}.
        </Typography>
      </>,
    imgUrl: "https://wydawnictwoix.pl/wp-content/uploads/2022/04/24022022_cover_kolor_800px.jpg",
  },
  {
    id: 2,
    title: "Nasze zwierzęta mocy",
    author: "Wojciech Jóźwiak",
    workType: "Korekta poskładowa",
    about:
      <>
        <Typography
          component="section"
          variant="body1"
          marginBottom={2}
        >
          Moja praca nad tą książką związana była z praktyką studencką, którą odbywałam w <Typography
          component="span"
          fontWeight="bold"
        >
          Wydawnictwie Ha!art.
        </Typography> <Typography
          component="span"
          fontStyle="italic"
          fontWeight="bold"
        >
          Nasze zwierzęta mocy
        </Typography> to książka o zwierzętach - symbolach, archetypach - obecnych w naszym życiu, literaturze,
          sztuce i astrologii. Dzieło jest też zbiorem spostrzeżeń i wieloletnich obserwacji autora.
        </Typography>
        <Typography
          component="section"
          variant="body1"
        >
          Książkę można zakupić na
          stronie {returnLinkToBookstore("https://www.sklep.ha.art.pl/pl/p/Wojciech-Jozwiak-Nasze-zwierzeta-mocy/594", Publisher.HAART)}.
        </Typography>
      </>,
    imgUrl: "https://www.sklep.ha.art.pl/userdata/public/gfx/740/Haart_Nasze-zwierzeta-mocy_okladka_15.01.23.jpg",
  },
  {
    id: 3,
    title: "Plan naprawy Ukrainy",
    author: "Łeś Bełej",
    workType: "Redakcja, korekta, korekta poskładowa",
    about:
      <>
        <Typography
          component="section"
          variant="body1"
          marginBottom={2}
        >
          Ambitny projekt ukraińskiego pisarza - zbiór <Typography component="span" fontWeight="bold">opowiadań
          oraz utworów dramatycznych</Typography> tłumaczonych
          przez trzech tłumaczy ze względu na specyficzny język utworów.
        </Typography>
        <Typography
          component="section"
          variant="body1"
          marginBottom={2}
        >
          Z powodu pilności zlecenia i jego złożoności pracowało nad nim dwoje redaktorów - do moich obowiązków
          należała <Typography
          component="span" fontWeight="bold">redakcja części utworów, korekta drugiej części oraz korekta
          poskładowa całości</Typography>.
          Praca nad książką pod presją czasu wymagała ciągłej korespondencji z tłumaczami,
          a największym wyzwaniem było takie opracowanie utworów (pełnych zwrotów obcojęzycznych), aby były
          jak najbardziej przystępne dla polskiego czytelnika.
        </Typography>
        <Typography
          component="section"
          variant="body1"
        >
          Książkę można zakupić na
          stronie {returnLinkToBookstore("https://www.sklep.ha.art.pl/pl/p/Les-Belej-Plan-naprawy-Ukrainy/592", Publisher.HAART)}.
        </Typography>
      </>,
    imgUrl: "https://www.sklep.ha.art.pl/userdata/public/gfx/738/Plan-naprawy-Ukrainy-poprawiona-final.jpg",
  },
  {
    id: 4,
    title: "Jednorożce",
    author: "Barbora Hrínová",
    workType: "Redakcja",
    about:
      <>
        <Typography
          component="section"
          variant="body1"
          marginBottom={2}
        >
          <Typography component="span" fontWeight="bold">Zbiór ośmiu opowiadań</Typography> autorki, która
          otrzymała nagrodę literacką Anasoft Litera 2021 za najlepszą książkę prozatorską na Słowacji.
        </Typography>
        <Typography
          component="section"
          variant="body1"
          marginBottom={2}
        >
          <Typography component="span" fontWeight="bold">Redakcja</Typography> tej książki przyniosła mi wiele
          satysfakcji, szczególnie ze względu na lekkość stylu i świetny kontakt z tłumaczką. Urzeka też tematyka zbioru
          - inność i poszukiwanie własnej tożsamości.
        </Typography>
        <Typography
          component="section"
          variant="body1"
        >
          Książkę można zakupić na
          stronie {returnLinkToBookstore("https://www.sklep.ha.art.pl/pl/p/Barbora-Hrinova-Jednorozce%2C-tlum.-Olga-Stawinska/596", Publisher.HAART)}.
        </Typography>
      </>,
    imgUrl: "https://www.sklep.ha.art.pl/userdata/public/gfx/741/okladka-jednorozce_yellow-1.jpg",
  },
  {
    id: 5,
    title: "Tego pokoju nie da się zjeść",
    author: "Nicol Hochholczerová",
    workType: "Redakcja, korekta poskładowa",
    about:
      <>
        <Typography
          component="section"
          variant="body1"
          marginBottom={2}
        >
          Książka bulwersująca i kontrowersyjna - ze względu na relację, którą opisuje. <Typography
          component="span" fontWeight="bold">Przypomina dziennik lub pamiętnik</Typography>,
          ale nie da się jej tak łatwo skategoryzować.
        </Typography>
        <Typography
          component="section"
          variant="body1"
          marginBottom={2}
        >
          Praca nad książką wymagała szczególnej ostrożności
          w kwestii podejmowania <Typography component="span"
                                             fontWeight="bold">redakcyjnych</Typography> decyzji, aby nie
          naruszyć specyficznego stylu autorki, oraz zachowania mniej rygorystycznych rozwiązań interpunkcyjnych.
        </Typography>
        <Typography
          component="section"
          variant="body1"
        >
          Książkę można zakupić na
          stronie {returnLinkToBookstore("https://www.sklep.ha.art.pl/pl/p/Nicol-Hochholczerova-Tego-pokoju-nie-da-sie-zjesc%2C-tlum.-Rafal-Bukowicz/593", Publisher.HAART)}.
        </Typography>
      </>,
    imgUrl: "https://www.sklep.ha.art.pl/userdata/public/gfx/739/Haart_Nicol-H._Tego-pokoju_okladka_15.01.23.jpg",
  },
  {
    id: 6,
    title: "Na coś trzeba umrzeć",
    author: "Adrianna Alksnin",
    workType: "Korekta, korekta poskładowa",
    about:
      <>
        <Typography
          component="section"
          variant="body1"
          marginBottom={2}
        >
          Zbiór przemyśleń i relacji <Typography component="span" fontWeight="bold">w formie
          esejów</Typography>, specyficzny humor, pisanie o
          raku tak, aby przebrnąć przez doświadczenie choroby, nie popadając w "toposy onkopisania".
        </Typography>
        <Typography
          component="section"
          variant="body1"
          marginBottom={2}
        >
          Korekta i korekta poskładowa tej książki wymagała czujności i zadbania o konsekwencję zapisu poszczególnych
          nazw.
        </Typography>
        <Typography
          component="section"
          variant="body1"
        >
          Książkę można zakupić na
          stronie {returnLinkToBookstore("https://www.sklep.ha.art.pl/pl/p/Adrianna-Alksnin-Na-cos-trzeba-umrzec/600", Publisher.HAART)}.
        </Typography>
      </>,
    imgUrl: "https://www.sklep.ha.art.pl/userdata/public/gfx/745/Haart_Na-cos-trzeba-umrzec_okladka_22.02.233-1.jpg",
  },
  {
    id: 7,
    title: "Diabeł to czarny pies",
    author: "Sándor Jászberényi",
    workType: "Korekta, korekta poskładowa",
    about:
      <>
        <Typography
          component="section"
          variant="body1"
          marginBottom={2}
        >
          <Typography component="span" fontWeight="bold">Zbiór reportaży</Typography>, ich bohaterowie
          przemierzają Afrykę i Bliski Wschód. Czytelnik zdaje się błądzić na granicy faktu oraz fikcji.
          Książka poruszająca, odkrywająca to, co ludzkie i nie zawsze dobre.
        </Typography>
        <Typography
          component="section"
          variant="body1"
          marginBottom={2}
        >
          Podczas korekty i korekty poskładowej szczególnej uwagi wymagały nazwy własne i terminy dotyczące
          społeczności arabskiej.
        </Typography>
        <Typography
          component="section"
          variant="body1"
        >
          Książkę można zakupić na
          stronie {returnLinkToBookstore("https://www.sklep.ha.art.pl/pl/p/Adrianna-Alksnin-Na-cos-trzeba-umrzec/600", Publisher.HAART)}.
        </Typography>
      </>,
    imgUrl: "https://www.sklep.ha.art.pl/userdata/public/gfx/752/Haart_Diabel-to-czarny-pies-_okladka_27.04.22_-1.jpg",
  },
  {
    id: 8,
    title: "Współczesna natura",
    author: "Derek Jarman",
    workType: "Redakcja",
    about:
      <>
        <Typography
          component="section"
          variant="body1"
          marginBottom={2}
        >
          <Typography component="span" fontWeight="bold">Dziennik wybitnego twórcy awangardowego</Typography>,
          w którym przeplatają się wspomnienia, wizje twórcze, codzienne czynności i przemyślenia brytyjskiego reżysera.
        </Typography>
        <Typography
          component="section"
          variant="body1"
          marginBottom={2}
        >
          Redakcja tej książki wymagała pogłębienia znajomości słownictwa filmowego, botanicznego i czujności
          podczas sprawdzania nazwisk oraz pseudonimów osób pojawiających się na kartach dziennika.
        </Typography>
        <Typography
          component="section"
          variant="body1"
        >
          Książkę można zakupić na
          stronie {returnLinkToBookstore("https://www.sklep.ha.art.pl/pl/p/PRZEDSPRZEDAZ-Derek-Jarman-Wspolczesna-natura%2C-tlum.-Pawel-Swierczek/607", Publisher.HAART)}.
        </Typography>
      </>,
    imgUrl: "https://www.sklep.ha.art.pl/userdata/public/gfx/755/Haart_Jarman_Modern-nature_okladka.jpg",
  },
  {
    id: 9,
    title: "Dodatki filmowe Andrzeja Barańskiego. Rozmowa-rzeka",
    author: "Paweł Jaskulski",
    workType: "Korekta, korekta poskładowa",
    about:
      <>
        <Typography
          component="section"
          variant="body1"
          marginBottom={2}
        >
          <Typography component="span" fontWeight="bold">Obszerny wywiad rzeka</Typography> zawierający refleksje
          słynnego reżysera Andrzeja Barańskiego i <Typography component="span" fontWeight="bold">rekonstrukcje jego
          krótkometrażowych filmów</Typography>.
        </Typography>
        <Typography
          component="section"
          variant="body1"
          marginBottom={2}
        >
          Podczas korekty tej publikacji zwracałam szczególną uwagę na ujednolicenie zapisów oraz poprawność danych
          zawartych w końcowym wykazie filmów. Korekta poskładowa wiązała się natomiast z dokładnym sprawdzeniem
          hierarchii elementów niełatwego (ze względu na treść) składu.
        </Typography>
        <Typography
          component="section"
          variant="body1"
        >
          Książkę można zakupić na
          stronie {returnLinkToBookstore("https://www.sklep.ha.art.pl/pl/p/PRZEDSPRZEDAZ-Pawel-Jaskulski-Dodatki-filmowe-Andrzeja-Baranskiego/609", Publisher.HAART)}.
        </Typography>
      </>,
    imgUrl: "https://www.sklep.ha.art.pl/userdata/public/gfx/759/Haart_JaskulskiPawel_Dodatkifilmowe_okladka_20231212.jpg",
  },
  {
    id: 10,
    title: "Pomoc osobom pokrzywdzonym przestępstwem. Standaryzacja pracy pracowników służb pomocowych...",
    author: "Praca zbiorowa",
    workType: "Redakcja, korekta, korekta poskładowa",
    about:
      <>
        <Typography
          component="section"
          variant="body1"
          marginBottom={2}
        >
          <Typography component="span" fontWeight="bold">Podręcznik</Typography> jest dziełem wybitnych specjalistów,
          którzy mają wieloletnie doświadczenie w zakresie pomocy pokrzywdzonym. Oprócz wyników badań zawiera wiele
          merytorycznych treści: <Typography component="span" fontWeight="bold">wytyczne, analizy przypadków, schematy
          postępowania</Typography>.
        </Typography>
        <Typography
          component="section"
          variant="body1"
          marginBottom={2}
        >
          W ramach współpracy z firmą <Typography component="span" fontWeight="bold">AT ONCE</Typography> byłam
          odpowiedzialna za redakcję, korektę oraz korektę poskładową publikacji. Ze względu na wielu autorów konieczne
          było ujednolicenie poszczególnych zapisów (bibliografia, zapisy aktów prawnych) oraz zapoznanie się
          z <Typography component="span" fontWeight="bold">terminologią prawniczą</Typography>.
        </Typography>
        <Typography
          component="section"
          variant="body1"
        >
          Książka dostępna jest w wersji papierowej oraz jako e-book do pobrania za darmo na
          stronie {/*See comment about WYSOKIESTANDARDY in PublisherList.tsx*/}
                  {returnLinkToBookstore("https://wysokiestandardy.pl/podrecznik/", Publisher.WYSOKIESTANDARDY)}.
        </Typography>
      </>,
    imgUrl: "https://img.genial.ly/64cabab64f44770013cc346b/7a19d306-d744-49f2-95ba-c26e7beeca05.png",
  },
// TODO: Add more books:)
]
