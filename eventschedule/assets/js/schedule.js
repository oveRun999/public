const adsBanner = (json) => {
  const bnrArea = document.querySelectorAll(".ad_box");
  const randomNum = Math.floor(Math.random() * json.length);
  const bnrbox = document.createElement("div");
  bnrbox.classList.add("bnrArea");
  bnrbox.innerHTML = json[randomNum];
  [...bnrArea].forEach((element) => element.before(bnrbox));
  [...bnrArea].forEach((element) => element.remove());
};
fetch("../bizstaBanner.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => adsBanner(data));
