import Publisher from "../Data/PublisherList";
import {styleB, styleIB} from "../Data/Styles";
import returnLinkToBookstore from "./ReturnLinkToBookstore";
import React from "react";

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
                <p>
                    <span style={styleIB}>24/02/22. Antologia dla Ukrainy</span> miała na celu okazanie solidarności z
                    zaatakowaną Ukrainą oraz realne wsparcie organizacji Proliska, do której trafił dochód ze sprzedaży
                    książek w formie e-booków.
                </p>
                <p>
                    Antologia była przedsięwzięciem charytatywnym: przy jej powstaniu pracowało wielu polskich autorów,
                    grafików i redaktorów. Mój udział w tym projekcie stanowiła <span style={styleB}>redakcja opowiadania </span>
                    <span style={styleIB}>Gieroj</span>. Utwór składa się z listów rosyjskiego żołnierza, który szybko
                    dochodzi do wniosku, że walczy po niewłaściwej stronie.
                </p>
                <p>
                    Obecnie całą antologię można pobrać za darmo ze
                    strony {returnLinkToBookstore("https://wydawnictwoix.pl/produkt/24-02-2022/", Publisher.IX)}.
                </p>
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
                <p>
                    Moja praca nad tą książką związana była z praktyką studencką, którą odbywałam w <span
                    style={styleB}>Wydawnictwie Ha!art</span>. <span style={styleIB}>Nasze zwierzęta mocy</span> to
                    książka o zwierzętach - symbolach, archetypach - obecnych w naszym życiu, literaturze, sztuce i
                    astrologii. Dzieło jest też zbiorem spostrzeżeń i wieloletnich obserwacji autora.
                </p>
                <p>
                    Książkę można zakupić na
                    stronie {returnLinkToBookstore("https://www.sklep.ha.art.pl/pl/p/Wojciech-Jozwiak-Nasze-zwierzeta-mocy/594", Publisher.HAART)}.
                </p>
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
                <p>
                    Ambitny projekt ukraińskiego pisarza - zbiór <span style={styleB}>opowiadań oraz utworów dramatycznych</span> tłumaczonych
                    przez trzech tłumaczy ze względu na specyficzny język utworów.
                </p>
                <p>
                    Z powodu pilności zlecenia i jego złożoności pracowało nad nim dwoje redaktorów - do moich
                    obowiązków
                    należała <span style={styleB}>redakcja części utworów, korekta drugiej części oraz korekta poskładowa całości</span>.
                    Praca nad książką pod presją czasu wymagała ciągłej korespondencji z tłumaczami,
                    a największym wyzwaniem było takie opracowanie utworów (pełnych zwrotów obcojęzycznych), aby były
                    jak najbardziej przystępne dla polskiego czytelnika.
                </p>
                <p>
                    Książkę można zakupić na
                    stronie {returnLinkToBookstore("https://www.sklep.ha.art.pl/pl/p/Les-Belej-Plan-naprawy-Ukrainy/592", Publisher.HAART)}.
                </p>
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
                <p>
                    <span style={styleB}>Zbiór ośmiu opowiadań</span> autorki, która otrzymała nagrodę literacką Anasoft
                    Litera 2021 za najlepszą książkę prozatorską na Słowacji.
                </p>
                <p>
                    <span style={styleB}>Redakcja</span> tej książki przyniosła mi wiele satysfakcji, szczególnie ze
                    względu na lekkość stylu i świetny kontakt
                    z tłumaczką. Urzeka też tematyka zbioru - inność
                    i poszukiwanie własnej tożsamości.
                </p>
                <p>
                    Książkę można zakupić na
                    stronie {returnLinkToBookstore("https://www.sklep.ha.art.pl/pl/p/Barbora-Hrinova-Jednorozce%2C-tlum.-Olga-Stawinska/596", Publisher.HAART)}.
                </p>
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
                <p>
                    Książka bulwersująca i kontrowersyjna - ze względu na relację, którą opisuje. <span style={styleB}>Przypomina dziennik lub pamiętnik</span>,
                    ale nie da się jej tak łatwo skategoryzować.
                </p>
                <p>
                    Praca nad książką wymagała szczególnej ostrożności
                    w kwestii podejmowania <span style={styleB}>redakcyjnych</span> decyzji, aby nie naruszyć
                    specyficznego stylu autorki, oraz zachowania mniej rygorystycznych rozwiązań interpunkcyjnych.
                </p>
                <p>
                    Książkę można zakupić na
                    stronie {returnLinkToBookstore("https://www.sklep.ha.art.pl/pl/p/Nicol-Hochholczerova-Tego-pokoju-nie-da-sie-zjesc%2C-tlum.-Rafal-Bukowicz/593", Publisher.HAART)}.
                </p>
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
                <p>
                    Zbiór przemyśleń i relacji <span style={styleB}>w formie esejów</span>, specyficzny humor, pisanie o
                    raku tak, aby przebrnąć przez doświadczenie choroby, nie popadając w "toposy onkopisania".
                </p>
                <p>
                    Korekta i korekta poskładowa tej książki wymagała czujności i zadbania o konsekwencję zapisu
                    poszczególnych nazw.
                </p>
                <p>
                    Książkę można zakupić na
                    stronie {returnLinkToBookstore("https://www.sklep.ha.art.pl/pl/p/Adrianna-Alksnin-Na-cos-trzeba-umrzec/600", Publisher.HAART)}.
                </p>
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
                <p>
                    <span style={styleB}>Zbiór reportaży</span>, ich bohaterowie przemierzają Afrykę
                    i Bliski Wschód. Czytelnik zdaje się błądzić na granicy faktu oraz fikcji. Książka poruszająca,
                    odkrywająca to, co ludzkie
                    i nie zawsze dobre.
                </p>
                <p>
                    Podczas korekty i korekty poskładowej szczególnej uwagi wymagały nazwy własne i terminy dotyczące
                    społeczności arabskiej.
                </p>
                <p>
                    Książkę można zakupić na
                    stronie {returnLinkToBookstore("https://www.sklep.ha.art.pl/pl/p/Adrianna-Alksnin-Na-cos-trzeba-umrzec/600", Publisher.HAART)}.
                </p>
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
                <p>
                    <span style={styleB}>Dziennik wybitnego twórcy awangardowego</span>, w którym przeplatają się
                    wspomnienia, wizje twórcze, codzienne czynności i przemyślenia brytyjskiego reżysera.
                </p>
                <p>
                    Redakcja tej książki wymagała pogłębienia znajomości słownictwa filmowego, botanicznego i czujności
                    podczas sprawdzania nazwisk oraz pseudonimów osób pojawiających się na kartach dziennika.
                </p>
                <p>
                    Książkę można zakupić na
                    stronie {returnLinkToBookstore("https://www.sklep.ha.art.pl/pl/p/PRZEDSPRZEDAZ-Derek-Jarman-Wspolczesna-natura%2C-tlum.-Pawel-Swierczek/607", Publisher.HAART)}.
                </p>
            </>,
        imgUrl: "https://www.sklep.ha.art.pl/userdata/public/gfx/755/Haart_Jarman_Modern-nature_okladka.jpg",
    },
// TODO: Add more book
]