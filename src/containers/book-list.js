import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                key={book.title}
                onClick={() => this.props.selectBook(book)}
                className="list-group-item">
                {book.title}
                </li>
            );
        });
    }
    
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }   
}

function mapStateToProps(state) {
    //Whatever is returned shows up as props inside of BookList
    return {
        books: state.books
    };
}

//Anything returned from this function ends up as props on Booklist container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, result should be passed to all reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from component to container – requires new dispatch method, selectBook. Make it available as prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);