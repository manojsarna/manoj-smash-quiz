const tvShowImgEl = document.getElementById("sm-tv-shows-img");
let arr = [1,2,3,4,5,6,7]
let i=1;
setInterval(()=>{
    if(i>7) i=1;
    tvShowImgEl.src=`/lib/assets/images/tvshows/tv-${i}.webp`;
    i+=1;
},3000)

const movieImgEl = document.getElementById("sm-movies-img");
let arrM = [1,2,3,4]
let m=1;
setInterval(()=>{
    if(m>4) m=1;
    movieImgEl.src=`/lib/assets/images/movies/m-${m}.webp`;
    m+=1;
},3000)

const sportImgEl = document.getElementById("sm-sports-img");
let arrS = [1,2]
let s=1;
setInterval(()=>{
    if(s>2) s=1;
    sportImgEl.src=`/lib/assets/images/sports/s-${s}.webp`;
    s+=1;
},3000)

const techImgEl = document.getElementById("sm-tech-img");
let arrT = [1,2,3,4]
let t=1;
setInterval(()=>{
    if(t>2) t=1;
    techImgEl.src=`/lib/assets/images/tech/t-${t}.webp`;
    t+=1;
},3000)

