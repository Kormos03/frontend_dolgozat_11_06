import './style.css'
import Quotes from './quotes.json'

let quotesarr : typeof Quotes.quotes = [];
quotesarr = Array.from(Quotes.quotes);

function gombok()
{
  quotesarr.sort(function(a, b){
    if(a.author < b.author) { return -1; }
    if(a.author > b.author) { return 1; }
    return 0;
})
  console.log(quotesarr);
  let osszbutton = document.createElement('button');
  osszbutton.textContent = "Összes idézet";
  const app = document.getElementById('app');
  app!.appendChild(osszbutton);

  osszbutton.addEventListener('click', osszesidezet);

  let thebutton = document.createElement('button');
  thebutton.textContent = "The";
  app!.appendChild(thebutton);

  thebutton.addEventListener('click', The);

  
  let hosszbutton = document.createElement('button');
  hosszbutton.textContent = "Hossz";
  app!.appendChild(hosszbutton);

  hosszbutton.addEventListener('click', hossz);

  let input = document.createElement('input');
  input.placeholder = 'Szerző';
  app!.appendChild(input);

  let inputreadonly = document.createElement('input');
  inputreadonly.placeholder = 'Eredmény';
  inputreadonly.setAttribute('type', 'number');
  inputreadonly.readOnly = true;
  app!.appendChild(inputreadonly);

  let label1 = document.createElement('label');
  label1.textContent = 'pontos egyezés';

  let checkboxpontos = document.createElement('input');
  checkboxpontos.setAttribute('type','radio');
  checkboxpontos.setAttribute('name', 'radio');
  

  let label2 = document.createElement('label');
  label2.textContent = 'részleges egyezés';

  let checkboxreszleges = document.createElement('input');
  checkboxreszleges.setAttribute('type','radio');
  checkboxreszleges.setAttribute('name', 'radio');

  app!.appendChild(label1);
  label1!.appendChild(checkboxpontos);
  app!.appendChild(label2);
  label2.appendChild(checkboxreszleges);

  input.addEventListener(('change'), () =>
  {
    let length : number = quotesarr.filter(obj => {
      return obj.author === input.value;
  }).length;
  console.log(length);
  inputreadonly.value = length.toString();
  })
}





function osszesidezet()
{
  const ul = document.getElementById('ul');
  for (const iterator of quotesarr) {
    const li = document.createElement('li');
    li.textContent = iterator.author + ': ' + iterator.quote;
    ul!.appendChild(li);  
  }
}



function The()
{
    const ol = document.createElement('ol');
    document.getElementById('app')! .appendChild(ol);
      let The : string[] = [];
      quotesarr.forEach(element => {
        The.push(element.quote);
      });
      console.log(The);
      for (const iterator of The) {
        const li = document.createElement('li');
        li.textContent = iterator;
        console.log(li);
        const formattedQuote = iterator.replace(/(The|the)/g, '<b>$1</b>');
        li.innerHTML = `${formattedQuote}`;
        ol!.appendChild(li);  
      }
}



function hossz()
{
  const p = document.createElement('p');
  document.getElementById('app')! .appendChild(p);
  const hosszlist : Number[] = [];
  quotesarr.forEach(element => {
    hosszlist.push(element.quote.length);
  }); 
  const hosszliststring : string = hosszlist.join();
  console.log(hosszliststring);
  p.textContent = hosszliststring;   
}


document.addEventListener('DOMContentLoaded', gombok);
