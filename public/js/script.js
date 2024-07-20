app.post('/', (req, res) => {
    const userInput = req.body.inputText;
    console.log(`Hai inserito: ${userInput}`);
    res.render('index', { userInput });
  });