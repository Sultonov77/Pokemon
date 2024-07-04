let elList = document.querySelector(".pokemon-list");
let elSelect = document.querySelector(".pokemon-select");
let elSearch = document.querySelector(".pokemon-search");
let elModal = document.querySelector(".modal");

// for each pokemons
function allPokemons(arr, list) {
  list.innerHTML = ``;
  arr.forEach((value) => {
    let elItem = document.createElement("li");
    let elImg = document.createElement("img");
    let elName = document.createElement("h2");
    let elType = document.createElement("p");
    let elCandy = document.createElement("p");
    let elIdtag = document.createElement("span");
    let elLIke = document.createElement("button");
    let elMore = document.createElement("button");

    elItem.className = "w-[250px]  p-2 m-6 rounded-[30px] bg-sky-500/50";
    elImg.src = value.img;
    elImg.className = "w-[100%] h-[150px] rounded-[10px] hover: ";
    elName.textContent = value.name;
    elName.className = "font-bold text-[22px] ";
    elType.textContent = "Type:" + " " + value.type;
    elType.className = "text-[20px]  text-blue-800 mb-1";
    elCandy.textContent = value.candy;
    elCandy.className = "text-[18px] text-zinc-700";
    elIdtag.textContent = "ID:" + " " + value.id;
    elIdtag.className = "text-[18px] text-teal-800 flex";
    elLIke.textContent = "Like";
    elLIke.className =
      "p-[5px] rounded-[10px] border-[2px] mr-5 mt-3 border-slate-700 text-slate-500 hover:bg-white hover:text-blue transition-all duration-400";
    elMore.textContent = "More";
    elMore.className =
      "p-[5px] rounded-[10px] border-[2px] border-slate-700 text-slate-500 hover:bg-white hover:text-blue transition-all duration-400";
    elMore.id = value.id;
    elItem.append(elImg, elIdtag, elName, elType, elCandy, elLIke, elMore);
    list.append(elItem);
    // more button
    elMore.addEventListener("click", (e) => {
      const findObj = pokemons.find((item) => item.id == e.target.id);
      elModal.classList.remove("hidden");
      elModal.innerHTML = `
       <div>
      <img src=${findObj.img} width="200" height="200"/>
      <div class="ml-5">
        <h1 >Name: ${findObj.name}</h1>
        <h2 >${findObj.type}</h2>
        <h2 >Height: ${findObj.height}</h2>
        <h2 >Weight: ${findObj.weight}</h2>
        <h2 >Egg: ${findObj.egg}</h2>
        <h2 >ID: ${findObj.id}</h2>
      </div>
      </div>`;
    });
  });
}
// select part of pokemons
function selectOptions(arr, list) {
  let listOption = [];
  let sortedOption = [];
  arr.forEach((item) => {
    listOption = listOption.concat(item.type);
  });
  listOption.filter((item) => {
    if (!sortedOption.includes(item)) {
      sortedOption.push(item);
    }
  });
  sortedOption.map((item) => {
    let elOption = document.createElement("option");
    elOption.value = item;
    elOption.innerText = item;
    list.append(elOption);
  });
}
// show selected pokemons part
elSelect.addEventListener("change", (e) => {
  if (e.target.value == "all") {
    allPokemons(pokemons, elList);
  } else {
    const selectedPokemons = pokemons.filter((item) =>
      item.type.includes(e.target.value)
    );
    allPokemons(selectedPokemons, elList);
  }
});

selectOptions(pokemons, elSelect);
allPokemons(pokemons, elList);
// search part of pokemons
elSearch.addEventListener("input", (e) => {
  const inputValue = e.target.value.toLowerCase();
  const searchedValue = pokemons.filter((item) =>
    item.name.toLowerCase().includes(inputValue)
  );
  allPokemons(searchedValue, elList);
});
