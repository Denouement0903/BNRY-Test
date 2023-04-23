const express = require('express')

const fetch = require("node-fetch");

async function getNews() {
  const teslaUrl = "https://newsapi.org/v2/everything?q=tesla&from=2023-03-22&sortBy=publishedAt&apiKey=9bd2f1c3020c48ff8cc54997bbcafb52";
  const appleUrl = "https://newsapi.org/v2/everything?q=apple&from=2023-04-21&to=2023-04-21&sortBy=popularity&apiKey=9bd2f1c3020c48ff8cc54997bbcafb52"
  const usUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9bd2f1c3020c48ff8cc54997bbcafb52"
  const techCrunchUrl = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9bd2f1c3020c48ff8cc54997bbcafb52"
  const wallStreetJournalUrl = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=9bd2f1c3020c48ff8cc54997bbcafb52"

  const responses = await Promise.all([
    fetch(teslaUrl),
    fetch(appleUrl),
    fetch(usUrl),
    fetch(techCrunchUrl),
    fetch(wallStreetJournalUrl),
  ]);

  const data = await Promise.all(responses.map(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json();
  }));

  return data;
}

async function searchNews(q) {
  const teslaUrl = `https://newsapi.org/v2/everything?q=${q}&from=2023-03-22&sortBy=publishedAt&apiKey=9bd2f1c3020c48ff8cc54997bbcafb52`;
  const appleUrl = `https://newsapi.org/v2/everything?q=${q}&from=2023-04-21&to=2023-04-21&sortBy=popularity&apiKey=9bd2f1c3020c48ff8cc54997bbcafb52`;
  const usUrl = `https://newsapi.org/v2/top-headlines?country=${q}&category=business&apiKey=9bd2f1c3020c48ff8cc54997bbcafb52`;
  const techCrunchUrl = `https://newsapi.org/v2/top-headlines?sources=${q}&apiKey=9bd2f1c3020c48ff8cc54997bbcafb52`;
  const wallStreetJournalUrl = `https://newsapi.org/v2/everything?domains=${q}&apiKey=9bd2f1c3020c48ff8cc54997bbcafb52`;

  const teslaResponse = await fetch(teslaUrl);
  const appleResponse = await fetch(appleUrl);
  const usResponse = await fetch(usUrl);
  const techCrunchResponse = await fetch(techCrunchUrl);
  const wallStreetJournalResponse = await fetch(wallStreetJournalUrl);

  if (!teslaResponse.ok || !appleResponse.ok || !usResponse.ok || !techCrunchResponse.ok || !wallStreetJournalResponse.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  const teslaData = await teslaResponse.json();
  const appleData = await appleResponse.json();
  const usData = await usResponse.json();
  const techCrunchData = await techCrunchResponse.json();
  const wallStreetJournalData = await wallStreetJournalResponse.json();

  return {
    tesla: teslaData,
    apple: appleData,
    us: usData,
    techCrunch: techCrunchData,
    wallStreetJournal: wallStreetJournalData,
  };
}

module.exports = {
  getNews,
  searchNews
};
