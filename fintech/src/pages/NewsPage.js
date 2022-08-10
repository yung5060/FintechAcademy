import React, { useState } from 'react'
import AppHeader from '../components/common/AppHeader'
import NewsList from '../components/news/NewsList'
import NewsSearch from '../components/news/NewsSearch'
import axios from 'axios';

const NewsPage = () => {

    const [searchInput, setSearchInput] = useState("");
    const [searchList, setSearchList] = useState([]);

    const handleChange = (event) => {
        const { value } = event.target;
        console.log(value);
        setSearchInput(value);
    };

    const handleClick = (event) => {
        console.log(searchInput);
        axios.get(
            `https://newsapi.org/v2/everything?q=${searchInput}&from=2022-07-10&sortBy=publishedAt&apiKey=5d986ddfd4f84fe08d6966bb6d0e41b5&language=ko`
            ).then((response) => {
            console.log(response.data)
            setSearchList(response.data.articles);
        });
    }
    

    return (
        <div>
            <AppHeader title={"뉴스 검색"}></AppHeader>
            <NewsSearch 
            handleChange={handleChange}
            handleClick={handleClick}
            ></NewsSearch>
            <NewsList newsList={searchList}></NewsList>
        </div>
    )
}

export default NewsPage