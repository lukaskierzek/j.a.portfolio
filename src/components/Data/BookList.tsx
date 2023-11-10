import {JSX} from "react";

interface IBook {
    id: number,
    title: string,
    author: string,
    workType: string,
    about: JSX.Element,
    imgUrl: string,
}

const styleIB = {
    fontStyle: 'italic',
    fontWeight: 'bold'
}

const styleB = {
    fontWeight: 'bold'
}

export const BookList: IBook[] = [
    {
        id: 1,
        title: "Gieroj",
        author: "autor: Piotr Sułek",
        workType: "Redakcja",
        about:
            <>
                <p><span style={styleIB}>24/02/22. Antologia dla Ukrainy</span> miała na celu okazanie solidarności z
                    zaatakowaną Ukrainą oraz realne
                    wsparcie organizacji Proliska, do której trafił dochód ze sprzedaży książek w formie e-booków.</p>

                <p>Antologia była przedsięwzięciem charytatywnym: przy jej powstaniu pracowało wielu polskich autorów,
                    grafików
                    i redaktorów. Mój udział w tym projekcie stanowiła <span style={styleB}>redakcja opowiadania </span>
                    <span style={styleIB}>Gieroj</span>. Utwór składa się z listów rosyjskiego żołnierza, który szybko
                    dochodzi do wniosku, że walczy po niewłaściwej stronie.</p>

                <p>Obecnie całą antologię można pobrać za darmo ze strony <a
                        href="https://wydawnictwoix.pl/produkt/24-02-2022/"
                        style={styleB}
                        target="_blank"
                    >
                        Wydawnictwa IX
                    </a>.
                </p>
            </>,
        imgUrl: "https://wydawnictwoix.pl/wp-content/uploads/2022/04/24022022_cover_kolor_800px.jpg",
    },
        {
        id: 2,
        title: "Nasze zwierzęta mocy",
        author: "autor: Wojciech Jóźwiak",
        workType: "Korekta poskładowa",
        about:
            <>
                <p>Moja praca nad tą książką związana była z praktyką studencką, którą odbywałam w <span style={styleB}>Wydawnictwie Ha!art</span>.
                    <span style={styleIB}>Nasze zwierzęta mocy</span> to książka o zwierzętach - symbolach, archetypach - obecnych w naszym życiu, literaturze, sztuce
i astrologii. Dzieło jest też zbiorem spostrzeżeń i wieloletnich obserwacji autora.</p>

                <p><span style={styleB}>Korekta poskładowa</span> tej książki wymagała wysiłku, czujności
i stałego kontaktu z redaktorem oraz składaczką. Największym wyzwaniem było wprowadzenie jednolitości poszczególnych zapisów.</p>

                <p>Książkę można zakupić na stronie <a
                        href="https://www.sklep.ha.art.pl/pl/p/Wojciech-Jozwiak-Nasze-zwierzeta-mocy/594"
                        style={styleB}
                        target="_blank"
                    >
                        Wydawnictwa Ha!art
                    </a>.
                </p>
            </>,
        imgUrl: "https://www.sklep.ha.art.pl/userdata/public/gfx/740/Haart_Nasze-zwierzeta-mocy_okladka_15.01.23.jpg",
    },

// TODO: Add more book
]