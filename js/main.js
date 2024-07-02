
let elMain = document.querySelector(".main");
let elCards =document.querySelector(".poke-list")


function allPokemons(arr,list) {
    arr.forEach(value => {
        let elItem = document.createElement("li");
        let elImg = document.createElement("img");
        let elName = document.createElement("h2");
        let elType = document.createElement("p");
        let elCandy = document.createElement("p");
        let elIdtag = document.createElement("span");

        elItem.className =
          "w-[300px]  p-2 m-6 bg-stone-100 ";
        elImg.src = value.img;
        elImg.className = "w-[100%] h-[200px] rounded-[10px] ";
        elName.textContent = value.name;
        elName.className = "font-bold text-[22px] mb-2";
        elType.textContent = value.type;
        elType.className = "text-[20px]  text-blue-800 mb-1";
        elCandy.textContent = value.candy;
        elCandy.className = "text-[18px] text-zinc-700";
        elIdtag.textContent = value.id;
        elIdtag.className = "text-[18px] text-teal-800 flex";

        elItem.append(
          elImg,
          elIdtag,
          elName,
          elType,
          elCandy,
        );
        list.append(elItem);
    });   
}
allPokemons(pokemons,elCards)