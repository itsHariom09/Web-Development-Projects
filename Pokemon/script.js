const URL = "https://pokeapi.co/api/v2/pokemon/";
const img = document.getElementById("myImg");
const btn = document.getElementById("btn");
const downloadBtn = document.getElementById("downloadBtn");
const msg = document.getElementById("msg");
const input = document.getElementById("pokemonInput");

let currentImageUrl = "";

const getPhoto = async () => {
  try {
    const name = input.value.trim().toLowerCase();

    if (!name) {
      msg.textContent = "⚠️ Please enter a Pokémon name.";
      msg.style.color = "#ff4d4d";
      img.style.display = "none";
      downloadBtn.style.display = "none";
      return;
    }

    btn.textContent = "Loading...";
    btn.disabled = true;
    downloadBtn.style.display = "none";
    msg.textContent = "Fetching Pokémon...";
    msg.style.color = "#ccc";

    const res = await fetch(`${URL}${name}`);
    if (!res.ok) throw new Error("Pokémon not found");

    const data = await res.json();
    const imageUrl = data.sprites.other["official-artwork"].front_default;

    if (imageUrl) {
      currentImageUrl = imageUrl;
      img.src = currentImageUrl;
      img.style.display = "block";
      downloadBtn.disabled = false;
      downloadBtn.style.display = "flex";
      msg.textContent = ""; // Clear message
    } else {
      throw new Error("No image found for this Pokémon");
    }
  } catch (err) {
    console.error("Image fetch failed:", err);
    msg.textContent = "❗ Pokémon not found. Please check the spelling.";
    msg.style.color = "#ff4d4d";
    img.style.display = "none";
    downloadBtn.style.display = "none";
  } finally {
    btn.textContent = "GET IMAGE";
    btn.disabled = false;
  }
};

btn.addEventListener("click", getPhoto);

downloadBtn.addEventListener("click", () => {
  if (!currentImageUrl || img.style.display === "none" || downloadBtn.style.display === "none") {
    msg.textContent = "❗ No image to download!";
    msg.style.color = "#ff4d4d";
    return;
  }

  const a = document.createElement("a");
  a.href = currentImageUrl;
  a.download = "pokemon-image.jpg";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});
