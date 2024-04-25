var cards = document.querySelector(".main")
const movies = () => {
fetch(" https://api.tvmaze.com/shows")
.then(res => res.json())
.then(datas =>{
    for(let i=0; i<20; i++){
        const elem = datas[i];
        cards.innerHTML += `
        <div class="card" style="width: 18rem; border border-secondary-subtle">
        <img src="${elem.image.medium}" class="card-img-top" alt="...">
        <div class="card-body salam2">
          <h5 class="card-title">${elem.name}</h5>
          <btn class="card-text text-end">${elem.rating.average}</btn>
        </div>
        <div class="card1">
            <p class="date ms-10px">Day:${elem.schedule.days}</p>
            <p class="date">Time:${elem.schedule.time}</p>
        </div>
      </div>
        `
    }
})
}
movies();