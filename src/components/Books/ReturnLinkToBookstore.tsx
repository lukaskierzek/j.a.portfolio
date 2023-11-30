export default function returnLinkToBookstore(url: string, publisher: string) {
  return (
    <>
      <a
        href={url}
        style={{fontWeight: "bold"}}
        target="_blank"
        rel="noreferrer"
      >
        {publisher}
      </a>
    </>
  );
}
