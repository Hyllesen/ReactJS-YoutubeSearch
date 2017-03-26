import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyA7HnX_lY9oZsKpKXkX9MO_eB_hcLRe88I';
const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
    console.log(data);
});

export default class App extends Component {

    render() {
        return (
            <SearchBar />
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));