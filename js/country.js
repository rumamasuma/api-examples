const localCountries= ()=> {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
localCountries();
const displayCountries = countries =>{
    const countryDiv = document.getElementById('countries');
// for (const country of countries ){
//     // console.log(country);
//     const p = document.createElement('p')
//     p.innerText = `Country Name : ${country.name}`
//     countryDiv.appendChild(p);
// }
// forEach use kore
countries.forEach(country => {
    console.log(country);
    // css e style korar jonno ekta div er moddhe class use kora hoyeche
    const div =document.createElement('div');
div.classList.add('country');
// using innerHTML  dynamically
div.innerHTML = `
<h3>${country.name}</h3>
<p>Country Capital : ${country.capital}
  <p> Currency :  ${country.currencies[0].name}</p> 
   Languages : ${country.languages[0].name}      
 </p>
 <button onclick = "loadCountryName('${country.name}')">Details</button>`
 ;
// using innerText
    // const h3 = document.createElement('h3');
    // h3.innerText = country.name;
    // div.appendChild(h3);
    // const p = document.createElement('p');
    // p.innerText = `Country Capital : ${country.capital}
    // Currency : 
    // Language : `;
    // div.appendChild(p);
    countryDiv.appendChild(div);
})
}
const loadCountryName = name => {
    const url =  `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]))
    // console.log(url);
}
const displayCountryDetail = country =>{
    console.log(country);
    const countryDetailDiv = document.getElementById('country-detail');
    countryDetailDiv.innerHTML =`
    <h4>${country.name}</h4>
    <p>${country.population}</p>
    <img width="200" src = "${country.flag}">`
}