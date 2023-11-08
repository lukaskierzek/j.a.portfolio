import {JSX} from "react";
import book_gieroj from "../Images/book_gieroj.jpeg";

interface IBook {
    title: JSX.Element,
    author: JSX.Element,
    workType: JSX.Element,
    about: JSX.Element,
    imgUrl: JSX.Element
}

export const BookList: IBook[] = [
    {
        title: <>Opowiadanie Gieroj</>,
        author: <>
            <span style={{fontStyle: "italic", fontWeight: "bold"}}>Piotr </span>Sułek
        </>,
        workType: <>Korekta</>,
        about: <>
            <p>24/02/22. Antologia dla Ukrainy miała na celu okazanie solidarności z zaatakowaną Ukrainą oraz realne
                wsparcie organizacji Proliska, do której trafił dochód ze sprzedaży książek w formie e-booków.</p>

            <p>Antologia była przedsięwzięciem charytatywnym: przy jej powstaniu pracowało wielu polskich autorów,
                grafików
                i redaktorów. Mój udział w tym projekcie stanowiła redakcja opowiadania Gieroj. Utwór składa się z
                listów
                rosyjskiego żołnierza, który szybko dochodzi do wniosku, że walczy po niewłaściwej stronie.</p>

            <p>Obecnie całą antologię można pobrać za darmo ze strony Wydawnictwa IX:
                https://wydawnictwoix.pl/produkt/24-02-2022/.</p>
        </>,
        imgUrl: <>
            <img src={book_gieroj} alt=""/>
        </>,
    },
]