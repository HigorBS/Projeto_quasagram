/* dependências */

  const express = require('express')

/* config - express */

  const app = express()

/* endpoint - posts */

  app.get('/posts', (request, response) => { //http://localhost:3000/posts
    let posts = [
      {
        caption: 'Golden Gate bridge',
        location: 'San Francisco'
      },
      {
        caption: 'London Eye',
        location: 'London'
      }
    ]

    response.send(posts);
    //console.log('Endpoint funcionando');
  })

/* listen */

  app.listen(3000)
