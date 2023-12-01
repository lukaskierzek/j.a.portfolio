import React from "react";
import students_cap from "../Images/students-cap.png";
import jigsaw from "../Images/jigsaw.png";
import storytelling from "../Images/storytelling.png";
import study from "../Images/study.png";
import {Typography} from "@mui/material";

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
        <Typography
          component="section"
          variant="body1"
          marginBottom={2}
        >
          Jeszcze podczas studiów pierwszego stopnia wielokrotnie poprawiałam prace dyplomowe moich znajomych i członków
          rodziny.
        </Typography>
        <Typography
          component="section"
          variant="body1"
          marginBottom={2}
        >
          Zakres tematyczny był różnorodny:
          <ul>
            <li>marketing i komunikacja społeczna (praca licencjacka),</li>
            <li>literaturoznawstwo (praca licencjacka),</li>
            <li>zarządzanie i zarządzanie w gastronomii (praca licencjacka),</li>
            <li>mechanika i robotyka (praca inżynierska),</li>
            <li>administracja (praca magisterska).</li>
          </ul>
        </Typography>
        <Typography
          component="section"
          variant="body1"
        >
          Niestraszne mi publikacje naukowe, bibliografie i przypisy, a także ilustracje, wykresy i tabele.
        </Typography>
      </>,
    img: students_cap
  },
  {
    title: "PRACE ZALICZENIOWE",
    about:
      <>
        <Typography
          component="section"
          variant="body1"
          marginBottom={2}
        >
          Podczas studiów chętnie pomagałam w poprawianiu różnych prac zaliczeniowych: od poprawy tekstu prezentacji,
          poprzez eseje zaliczeniowe, aż do ankiet i badań statystycznych.
        </Typography>
        <Typography
          component="section"
          variant="body1"
          marginBottom={2}
        >
          Prace dotyczyły w większości pojęć z zakresu psychologii oraz pedagogiki wczesnoszkolnej i filozofii.
        </Typography>
        <Typography
          component="section"
          variant="body1"
        >
          Poprawki wprowadzane były nieodpłatnie - traktowałam je jako ćwiczenia redakcyjne i możliwość
          sprawdzenia swoich umiejętności.
        </Typography>
      </>,
    img: study
  },
  {
    title: "PORADY KOREKTORSKIE",
    about:
      <>
        <Typography
          component="section"
          variant="body1"
          marginBottom={2}
        >
          Jako redaktorka zdaję sobie sprawę z tego, jak wielką rolę odgrywa poprawna polszczyzna, zwłaszcza w
          mediach społecznościowych i w budowaniu swojej marki.
        </Typography>
        <Typography
          component="section"
          variant="body1"
          marginBottom={2}
        >
          Z tego powodu pomagam w ustaleniu poprawnej formy lub wykonuję szybką korektę na przesłanych
          zrzutach ekranu.
        </Typography>
        <Typography
          component="section"
          variant="body1"
        >
          Zmiany te mają formę sugestii - tylko od autora zależy, czy je wprowadzi.
        </Typography>
      </>,
    img: jigsaw
  },
  {
    title: "OPOWIADANIA",
    about:
      <>
        <Typography
          component="section"
          variant="body1"
          marginBottom={2}
        >
          Jako uczestniczka kursu <Typography component="span" fontWeight="bold">Akademia korekty
          tekstu</Typography> brałam udział w akcji
          parowania korektorów z autorami. W ramach akcji każdy korektor poprawiał nieodpłatnie przesłany mu
          tekst - fragment opowiadania, książki, teksty na bloga. Podczas tej akcji miałam okazję redagować
          fragment obiecującej książki grozy.
        </Typography>
        <Typography
          component="section"
          variant="body1"
          marginBottom={2}
        >
          Z tego powodu pomagam w ustaleniu poprawnej formy lub wykonuję szybką korektę na przesłanych zrzutach ekranu.
        </Typography>
        <Typography
          component="section"
          variant="body1"
        >
          Zmiany te mają formę sugestii - tylko od autora zależy, czy je wprowadzi.
        </Typography>
      </>,
    img: storytelling
  },
]

export default OtherList;
