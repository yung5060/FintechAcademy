import React from 'react';
import axios from 'axios';

const AxiosTest = () => {
    const handleClick = () => {
        let data = "Nothing is in place yet.";
        axios.get("https://newsapi.org/v2/everything?q=삼성&from=2022-07-10&sortBy=publishedAt&apiKey=5d986ddfd4f84fe08d6966bb6d0e41b5&language=ko").then((response) => {
            data = response.data;
            console.log(data);
        });
    };

    return (
        <div>
            <button onClick={handleClick}>요청 보내기</button>
        </div>
    );
}

export default AxiosTest