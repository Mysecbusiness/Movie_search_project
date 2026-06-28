
const API_KEY="a10e3623";

let movie="batman";
let page=1;


async function searchMovies(){

movie=document.getElementById("searchInput").value;
page=1;
load();

}


async function load(){

let url=`https://www.omdbapi.com/?apikey=${API_KEY}&s=${movie}&page=${page}`;

let res=await fetch(url);
let data=await res.json();

show(data.Search || []);

document.getElementById("page").innerText=page;

}


function show(movies){

let box=document.getElementById("movies");

box.innerHTML="";


movies.forEach(m=>{

box.innerHTML += `

<div class="movie">

<img src="${m.Poster}">

<h2>

<a href="https://www.imdb.com/title/${m.imdbID}/" target="_blank">

${m.Title}

</a>

</h2>

<p>${m.Year}</p>

</div>

`;

});

}



function next(){

page++;
load();

}


function prev(){

if(page>1){
page--;
load();
}

}


load();
