import {styleB} from "../Data/Styles";

export default function returnLinkToBookstore(url: string, publisher: string) {
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
