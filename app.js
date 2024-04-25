// let getdiv = document.querySelector("#show")

// let getSerach  = () => {
//     let abc = document.querySelector("#search")

//     fetch(`https://newsapi.org/v2/everything?q=${abc.value}&from=2024-03-20&sortBy=publishedAt&apiKey=c7e2ae91f23749758991d2692e467bc`)
//     .then(data => data.json())
//     .then(data => {
//         for(let i = 0; i< data.articles.lenght; i++) {
//             getdiv.innerHTML+= `  <div class="card p-3 m-3" style="width: 18rem;">
//             <img src=${data.articles[i].urlToImage} class="card-img-top" alt="...">
//             <div class="card-body">
//               <h5 class="card-title">${data.articles[i].contect}</h5>
//               <p class="card-text"></p>
//               <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//           </div>`
//         }
//     })
//     .catch(errr => console.log (errr))
// }


// let getDiv = document.querySelector("#shownew")

// let getSerach = () => {
//     let abc = document.querySelector("#serach")

//     fetch (`https://newsapi.org/v2/everything?q=${abc.value}&from=2024-03-20&sortBy=publishedAt&apiKey=c7e2ae91f23749758991d2692e467bc`)
//     .then(data => data.json())
//     .then(data => {
//         for (let i = 0; i < data.articles.lenght; i++) {
//             getDiv.innerHTML += `<div class="card p-3 m-3" style="width: 18rem;">
//             <img src=${data.articles[i].urlToImage} class="card-img-top" alt="...">
//             <div class="card-body">
//               <h5 class="card-title">${data.articles[i].title}</h5>
//               <p class="card-text">${data.articles[i].content}</p>
//               <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//           </div>` 
//         }
//      })
// }


// let getDiv = document.querySelector("#shownew" ) 

// let getSerach = () =>  {
//     let abc = document.querySelector("#serach")

//     fetch (`https://newsapi.org/v2/everything?q=${abc.value}&from=2024-03-20&sortBy=publishedAt&apiKey=c7e2ae91f23749758991d2692e467bc`)
//     .then(data => data.json())
//     .then(data  => {
//         for (let i = 0; i < data.articles.lenght; i++) {
//             getDiv.innerHTML += ` <div class="card p-3 m-3" style="width: 18rem;">
//             <img src=${data.articles[i].urlToImage} class="card-img-top" alt="...">
//             <div class="card-body">
//               <h5 class="card-title">${data.articles[i].title}</h5>
//               <p class="card-text">${data.articles[i].content}</p>
//               <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//           </div>`
//         }
//     })
// }
// let getDiv = document.querySelector("#shownews");

// let getSearch = () => {
//     let abc = document.querySelector("#search");

//     fetch (`https://newsapi.org/v2/everything?q=${abc.value}&from=2024-03-20&sortBy=publishedAt&apiKey=c7e2ae91f23749758991d2692e467bc`)
//     .then(data => data.json())
//     .then(data  => {
//         for (let i = 0; i < data.articles.length; i++) {
//             let cardDiv = document.createElement('div');
//             cardDiv.className = 'card p-3 m-3';
//             cardDiv.style.width = '18rem';
//             cardDiv.innerHTML = `
//                 <img src=${data.articles[i].urlToImage} class="card-img-top" alt="...">
//                 <div class="card-body">
//                     <h5 class="card-title">${data.articles[i].title}</h5>
//                     <p class="card-text">${data.articles[i].content}</p>
//                     <a href="#" class="btn btn-primary">Go somewhere</a>
//                 </div>
//             `;
//             getDiv.appendChild(cardDiv);
//         }
//     })
// }

// // Usage
// getSearch();
const day = document.getElementById("day")
const hour = document.getElementById("hour")
const minuetes = document.getElementById("min")
const second = document.getElementById("sec")


function eidUlAhda () {
    let sec = 1000; 
    let min = sec * 60;
    let hr = min * 60;
    let dy = hr * 24;


    let countdown = new Date ('june 16, 2024').getTime()
    let  today = new Date ().getTime();
    let gap = countdown - today;

    let d = Math.floor(gap / (dy))
    let h = Math.floor(gap % (dy) / (hr))
    let m = Math.floor(gap % (hr) / (min))
    let s = Math.floor(gap % (min) / (sec))

    day.innerHTML = d;
    hour.innerHTML = h;
    minuetes.innerHTML = m;
    second.innerHTML = s
}


setInterval(() => {
    eidUlAhda();

}, 1000)