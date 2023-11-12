import Topic from "./Topic";
import {ChapterENG, ChapterPL} from "./Navbar";

function Other() {
    return (
        <>
            {Topic(ChapterPL.OTHER, ChapterENG.OTHER)}
        </>
    );
}

export default Other;