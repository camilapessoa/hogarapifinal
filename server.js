const app = require('./src/app') //requerer o app
const PORT = 33//criar porta

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error: ${err}`);
  }
  console.log(`O app está rodando em http://localhost: ${PORT}`);

}); 