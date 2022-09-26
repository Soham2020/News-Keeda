import React from 'react';
import axios from 'axios';

const NewsApi = axios.create({
    // baseURL: 'https://newsapi.org/v2/'
    baseURL: 'https://api.spaceflightnewsapi.net/v3/'
})

export default NewsApi;