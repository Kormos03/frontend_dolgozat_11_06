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
    const ol = document.getElementById('ol');
      let The : string[] = [];
      quotesarr.forEach(element => {
        The.push(element.quote);
      });
      The.forEach(element => {
        const li = document.createElement('li');
        li.textContent = element;
        ol!.appendChild(li);
      })
}


document.addEventListener('DOMContentLoaded', gombok);
