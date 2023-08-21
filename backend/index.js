/* dependências */

  const express = require('express')

  const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
  const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

/* config- firebase */

  const serviceAccount = require('./serviceAccountKey.json');

  initializeApp({
    credential: cert(serviceAccount)
  });

  const db = getFirestore();

/* config - express */

  const app = express()

/* endpoint - posts */

  app.get('/posts', (request, response) => { //http://localhost:3000/posts
    response.set('Access-Control-Allow-origin', '*');

    let posts = []
    db.collection('posts').orderBy('date', 'desc').get().then(snapshot => {
      snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
        posts.push(doc.data());
      });
      response.send(posts);
    });
  })

/* listen */

  app.listen(3000)
