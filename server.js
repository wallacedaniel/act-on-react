
const express = require('express')
const app = express()
const port = 5000

app.get('/api/tables', (req, res) => {

  const tableDate = {

    title: 'Sports Mascots',
    activeTab: 'Baseball',
    data : [
      {
        type: 'Baseball',
        name: 'Lou Seal',
        team: 'San Francisco Giants',
        category: 'Seal'
      },
      {
        type: 'Baseball',
        name: 'Stomper',
        team: 'Oakland Athletics',
        category: 'Elephant'
      },
      {
        type: 'Baseball',
        name: 'Orbit',
        team: 'Houston Astros',
        category: 'Furry Alien'
      },
      {
        type: 'Basketball',
        name: 'Slamson',
        team: 'Sacramento Kings',
        category: 'Lion'
      },
      {
        type: 'Basketball',
        name: 'Stuff',
        team: 'Orlando Magic',
        category: 'Magic Dragon'
      },
      {
        type: 'Basketball',
        name: 'Jazz Bear',
        team: 'Utah Jazz',
        category: 'Bear'
      },
      {
        type: 'Football',
        name: 'Sir Purr',
        team: 'Carolina Panthers',
        category: 'Panther'
      },
      {
        type: 'Football',
        name: 'Poe',
        team: 'Baltimore Ravens',
        category: 'Raven'
      },
      {
        type: 'Football',
        name: 'Gumbo',
        team: 'New Orleans Saints',
        category: 'Dog'
      }
    ]
  };

  res.send(tableDate);
})

app.listen(port, () => {
  console.log(`Act-On React App listening at http://localhost:${port}`)
})
