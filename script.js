const loadData = (id) => {
  fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    .then((res) => res.json())
    .then((datas) => {
      //   datas = data.data || [];
      displayData(datas.data);
    });
};

const convertToHr = (sec) => {
  const hr = Math.floor(sec / 3600);
  const mn = Math.floor((sec % 3600) / 60);
  return `${hr} hrs ${mn} min ago`;
};

const displayData = (datas) => {
  const divContainer = document.getElementById("div_contain");

  divContainer.innerHTML = "";

  if (datas.length == 0) {
    divContainer.innerHTML = `
    <div class="text-center">
    <img class="w-50 border-2 rounded-circle p-3 my-4" src="./img/no-video.png" />
    <h2 class="text-danger">There is no Data available</h2>
    </div>
    `;
    return;
  }

  datas.forEach((data) => {
    // console.log(datas);

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

const loadMusic = () => {
  loadData(1001);
};
const loadComedy = () => {
  loadData(1003);
};
const loadDrawing = () => {
  loadData(1005);
};

loadData(1000);
