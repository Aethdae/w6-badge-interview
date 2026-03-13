const output = document.getElementById("main");

async function getData() {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    if (!res.ok) {
      return;
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function main() {
  const pokeData = await getData();
  console.log(pokeData);
  render(pokeData);
}

function render(obj) {
  obj.results.forEach((item) => {
    const para = document.createElement("p");
    para.textContent = item.name;
    output.appendChild(para);
  });
}

main();
