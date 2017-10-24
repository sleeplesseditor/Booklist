export function selectBook(book) {
    //selectBook is an ActionCreator, needs to return action – object with a type property
    return{
        type: 'BOOK_SELECTED',
        payload: book
    };
}
