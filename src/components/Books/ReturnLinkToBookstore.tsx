import {styleB} from "../Data/Styles";
import React from "react";

export default function returnLinkToBookstore(url: string, publisher: string): JSX.Element {
    return (
        <>
            <a
                href={url}
                style={styleB}
                target="_blank"
                rel="noreferrer"
            >
                {publisher}
            </a>
        </>
    );
}