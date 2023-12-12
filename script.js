const loadData = () => {
  fetch("https://openapi.programming-hero.com/api/videos/category/1000")
    .then((res) => res.json())
    .then((datas) => displayData(datas.data));
};

loadData();

const displayData = (datas) => {
  const divContainer = document.getElementById("div_contain");

  datas.forEach((data) => {
    console.log(datas);
    const card = document.createElement("div");
    card.classList.add("box");
    card.innerHTML = `
            <img class="box-img rounded" src=${data.thumbnail} alt="">
            <div class="d-flex justify-content-evenly mt-3">
                <div class="w-25">
                    <img class="w-75 rounded-circle" src=${
                      data.authors[0].profile_picture
                    } alt="">
                </div>
                <div class="detailes ">
                    <h6>${data.title}</h6>
                    <div class="d-flex"><p>${
                      data.authors[0].profile_name
                    }</p><span>${
      data.authors[0].verified ? true : false
    }</span></div>
                    <p>${data.others.views} views</p>
                </div>
            </div>
        `;

    divContainer.appendChild(card);
  });
};
