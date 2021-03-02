var chrs = [
  {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"},
  {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"},
  {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"},
  {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
  {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"},
  {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"},
];

function createTransformer(transformer) {
  var ele = document.createElement("div");
  ele.classList.add("character");
  var nameEle = document.createElement("h4");
  var classEle = document.createElement("h4");
  var vehicleEle = document.createElement("h4");
  var imgEle = document.createElement("img");
  nameEle.innerHTML = "Name: " + transformer.name;
  classEle.innerHTML = "Class: " + transformer.class.toUpperCase();
  vehicleEle.innerHTML = "Vehicle: " + transformer.vehicle;
  if (transformer.vehicle === "truck") {
    vehicleEle.style.color = "blue";
  } else if (transformer.vehicle === "tank") {
    vehicleEle.style.color = "green";
  } else if (transformer.vehicle === "car") {
    vehicleEle.style.color = "gold";
  } else {
    vehicleEle.style.color = "white";
  }
  if (transformer.afl === "autobot") {
    ele.classList.add("autobot");
    imgEle.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";
  } else {
    ele.classList.add("decepticon");
    imgEle.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";
  }
  ele.appendChild(nameEle);
  ele.appendChild(classEle);
  ele.appendChild(vehicleEle);
  ele.appendChild(imgEle);
  document.body.appendChild(ele);
}

for (transformer in chrs) {
  createTransformer(chrs[transformer])
}