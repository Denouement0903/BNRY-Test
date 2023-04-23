const express = require('express')

const fetch = require("node-fetch");

async function getNews() {
  const url = "https://newsapi.org/v2/everything?q=tesla&from=2023-03-23&sortBy=publishedAt&apiKey=d1f5c11979d74eb68afe4a4e365c1894";

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

async function searchNews(q) {
  // search by category
    const url = `https://newsapi.org/v2/everything?q=${q}&from=2023-03-23&sortBy=publishedAt&apiKey=d1f5c11979d74eb68afe4a4e365c1894`;
  
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