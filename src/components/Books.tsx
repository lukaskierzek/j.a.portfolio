import {BookList} from "./Data/BookList";

function Books() {

    const BooksItems = BookList.map(book =>
        <>
            <li>
                {book.title}<br/>{book.author}<br />{book.workType}<br />{book.imgUrl}<br />{book.about}
            </li>
        </>
    )
    return (
        <>
            <p>KSIĄŻKI</p>
            <ul>{BooksItems}</ul>
        </>
    );
}

export default Books;