function buildRequests(articleCount) {
  const pages = articleCount / 10 >= 1 ? articleCount / 10 : 1;
  const apiKey = 'wnISiqFoEodfztpF3cF0xVBwF5NXZ5Kv';

  const queryString = $('#searchText').val();
  let requests = [];

  for (let i = 0; i < pages; i++) {
    const queryURI = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apiKey}&q=${queryString}&page=${i+1}`;
    const settings = {
      url: queryURI,
      method: 'GET'
    }
    requests.push($.ajax(settings))
  }
  return requests;
}

console.log(buildRequests(40));