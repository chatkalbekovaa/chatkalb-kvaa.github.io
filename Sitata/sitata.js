const massivOuotes = [
    {
      'author' : 'Тэмирлан Мелисович',
      'quote' : 'Эмне кылабыз...  Фирма ачабыз '
    },
  
    {
      'author' : 'Кожоналиев Эрбол',
      'quote' : 'Поставь цель.создай план и подними жопу.'
    },
  
    {
      'author' : 'Чаткалбекова Адинай',
      'quote' : 'Если я тебе не нравлюсь,это не моя проблема... а твооооояя'
    },
  
    {
      'author' : 'Акимов Абусайд',
      'quote' : 'Жашоодо эки жол бар. биринчиси биринчи жол , экинчиси экинчи жол'
    },
    {
      'author' : 'Керимбайева Айба',
      'quote' : 'Тарыхчы болуш кк '
    },
    {
      'author' : 'Кадырбекова Адинай',
      'quote' : 'В дела не люви. а денгах...'
    }
  ]

  const btn = document.querySelector('.btn');
  const author = document.querySelector('.author');
  const quote = document.querySelector('.quote');

  btn.addEventListener('click', generateQuote);
  function generateQuote(){
    const random = Number.parseInt(Math.random()*massivOuotes.length);
    console.log(random);
    author.textContent = `"${massivOuotes[random].author}"`;
    quote.textContent = `"${massivOuotes[random].quote}"`;
  }
  const t = [
    'Цитаты которые я смог запилить\n',
];
function typeText(){
    let line = 0;
    let count = 0;
    let out ='';
    let htmlOut = document.querySelector('.out');

    function typeLine(){
        //рисуем сторку
        let interval = setTimeout(function() {
            out += t[line][count];
            htmlOut.innerHTML = out + '';
            count++;
            if(count >= t[line].length){
                count = 0;
                line++;
                if(line == t.length){
                    clearTimeout(interval);
                    htmlOut.innerHTML = out 
                    return true;
                }
            }
            typeLine();
        }, getRandomInt(getRandomInt(350 * 1.0)));
    }
    typeLine();
    function getRandomInt(max){
        return Math.floor(Math.random() * Math.floor(max))
    }
}
typeText();
