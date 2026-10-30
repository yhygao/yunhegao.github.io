(function () {
  'use strict';

  var news = document.getElementById('news-items');
  var archive = document.getElementById('news-archive');
  var olderNews = document.getElementById('older-news-items');

  if (!news || !archive || !olderNews) return;

  // Keep all updates in the HTML for readers with JavaScript disabled.
  Array.prototype.slice.call(news.children, 5).forEach(function (item) {
    olderNews.appendChild(item);
  });
  archive.hidden = olderNews.children.length === 0;
}());
