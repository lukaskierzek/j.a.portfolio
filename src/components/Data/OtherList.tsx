import React from "react";
import {styleB} from "./Styles";
import students_cap from "../Images/students-cap.png";
import jigsaw from "../Images/jigsaw.png";
import storytelling from "../Images/storytelling.png";
import study from "../Images/study.png";

interface IOhterList {
    title: string,
    about: React.ReactElement,
    img: any,
}

const OtherList: IOhterList[] = [
    {
        title: "PRACE DYPLOMOWE",
        about:
            <>
                <p>
                    Jeszcze podczas studiów pierwszego stopnia wielokrotnie poprawiałam prace dyplomowe moich znajomych
                    i członków rodziny.
                </p>
                <p>
                    Zakres tematyczny był różnorodny:
                    <ul>
                        <li>marketing i komunikacja społeczna (praca licencjacka),</li>
                        <li>literaturoznawstwo (praca licencjacka),</li>
                        <li>zarządzanie i zarządzanie w gastronomii (praca licencjacka),</li>
                        <li>mechanika i robotyka (praca inżynierska),</li>
                        <li>administracja (praca magisterska).</li>
                    </ul>
                </p>
                <p>
                    Niestraszne mi publikacje naukowe, bibliografie i przypisy, a także ilustracje, wykresy i tabele.
                </p>
            </>,
        img: students_cap
    },
    {
        title: "PRACE ZALICZENIOWE",
        about:
            <>
                <p>
                    Podczas studiów chętnie pomagałam w poprawianiu różnych prac zaliczeniowych: od poprawy tekstu
                    prezentacji, poprzez eseje zaliczeniowe, aż do ankiet i badań statystycznych.
                </p>
                <p>
                    Prace dotyczyły w większości pojęć z zakresu psychologii oraz pedagogiki wczesnoszkolnej i
                    filozofii.
                </p>
                <p>
                    Poprawki wprowadzane były nieodpłatnie - traktowałam je jako ćwiczenia redakcyjne i możliwość
                    sprawdzenia swoich umiejętności.
                </p>
            </>,
        img: study
    },
    {
        title: "PORADY KOREKTORSKIE",
        about:
            <>
                <p>
                    Jako redaktorka zdaję sobie sprawę z tego, jak wielką rolę odgrywa poprawna polszczyzna, zwłaszcza w
                    mediach społecznościowych i w budowaniu swojej marki.
                </p>
                <p>
                    Z tego powodu pomagam w ustaleniu poprawnej formy lub wykonuję szybką korektę na przesłanych
                    zrzutach ekranu.
                </p>
                <p>
                    Zmiany te mają formę sugestii - tylko od autora zależy, czy je wprowadzi.
                </p>
            </>,
        img: jigsaw
    },
    {
        title: "OPOWIADANIA",
        about:
            <>
                <p>
                    Jako uczestniczka kursu <span style={styleB}>Akademia korekty tekstu</span> brałam udział w akcji
                    parowania korektorów z autorami. W ramach akcji każdy korektor poprawiał nieodpłatnie przesłany mu
                    tekst - fragment opowiadania, książki, teksty na bloga. Podczas tej akcji miałam okazję redagować
                    fragment obiecującej książki grozy.
                </p>
                <p>
                    Z tego powodu pomagam w ustaleniu poprawnej formy lub wykonuję szybką korektę na przesłanych
                    zrzutach ekranu.
                </p>
                <p>
                    Zmiany te mają formę sugestii - tylko od autora zależy, czy je wprowadzi.
                </p>
            </>,
        img: storytelling
    },
]

export default OtherList;