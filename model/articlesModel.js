const express = require('express')
// require('dotenv').config();


const fetch = require("node-fetch");

// const API_KEY= process.env.API_KEY;

async function getNews() {
  const url = `https://newsapi.org/v2/everything?q=apple&from=2023-04-23&to=2023-04-23&sortBy=popularity&apiKey=2e2da230023649dea89dc34a95dc57f4`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

async function searchNews(q) {
  // search by country
    const url = `https://newsapi.org/v2/everything?q=${q}&from=2023-04-23&to=2023-04-23&sortBy=popularity&apiKey=2e2da230023649dea89dc34a95dc57f4`;
  
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }
module.exports = {
  getNews,
  searchNews
};