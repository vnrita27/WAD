url = 'https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=53.64&cnt=3&appid=3f93930217737b548ff9916c4081fc22'



fetch(url)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(error => console.error(error));

fetch('https://api.openweathermap.org/data/2.5/forecast?q=London&cnt=3&appid=3f93930217737b548ff9916c4081fc22')
.then(res => res.json())
      .then(json => console.log(json))
      .catch(error => console.error(error));


fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(json => console.log(json))


    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json())
    .then(json => console.log(json))
