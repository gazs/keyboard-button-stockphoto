const fs = require('fs');
const gm = require('gm').subClass({imageMagick: true});;



const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.set('Content-Type', 'image/jpeg');
  console.log(req.query)

  const query = req.query.q || 'add ?q=[text] to the url';


  gm('stockphoto1.jpg')
    .font("Helvetica")
    .fontSize(60)
    .fill('white')
    .draw(`translate 430, 710 rotate -16 skewX 19 text 0,0 "${query}"`)
    .stream()
    .pipe(res);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
