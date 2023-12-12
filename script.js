const loadData = () => {
  fetch("https://openapi.programming-hero.com/api/videos/category/1000")
    .then((res) => res.json())
    .then((datas) => displayData(datas.data));
};

const sortByViews = (datas) => {
  return datas.sort(
    (a, b) => parseFloat(b.others.views) - parseFloat(a.others.views)
  );
};

loadData();

const convertToHr = (sec) => {
  const hr = Math.floor(sec / 3600);
  const mn = Math.floor((sec % 3600) / 60);
  return `${hr} hrs ${mn} min ago`;
};

const displayData = (datas) => {
  const divContainer = document.getElementById("div_contain");

  datas.forEach((data) => {
    console.log(datas);
    const card = document.createElement("div");
    card.classList.add("box");
    card.innerHTML = `
            <div>
                <img class="box-img rounded" src=${data.thumbnail} alt="">
                
            </div>
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
      data.authors[0].verified
        ? '<img class="w-50" src="./img/verified_icon.png" alt="" />'
        : ""
    }</span>
                    </div>
                    <div class="">
                        <p>${data.others.views} views</p>
                        <p>${convertToHr(data.others?.posted_date)}</p>
                    </div>
                </div>
            </div>
        `;

    divContainer.appendChild(card);
  });
};

document.getElementById("sortBtn").addEventListener("click", () => {
  const sorteddata = sortByViews(datas);
  displayData(sorteddata);
});

const music = () => {
  fetch("https://openapi.programming-hero.com/api/videos/category/1001")
    .then((res) => res.json())
    .then((datas) => console.log(datas.data));
};
