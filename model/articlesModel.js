const express = require('express')

const fetch = require("node-fetch");

async function getNews() {
  const url = "https://newsapi.org/v2/everything?q=apple&from=2023-04-20&to=2023-04-20&sortBy=popularity&apiKey=9bd2f1c3020c48ff8cc54997bbcafb52";

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

async function searchNews(q) {
    const url = `https://newsapi.org/v2/everything?q=${q}&from=2023-04-20&to=2023-04-20&sortBy=popularity&apiKey=9bd2f1c3020c48ff8cc54997bbcafb52`;
  
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
