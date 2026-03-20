import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  let btn = document.getElementById("btn-generate");
  let clear = document.getElementById("btn-clear");
  let input = document.getElementById("input-base");
  let output = document.getElementById("output");

  btn.onclick = function () {

    let pronoun = ["the", "our"];
    let adj = ["great", "big"];
    let noun = [input.value || "domain"];
    let extension = [".com", ".net", ".us", ".io", ".shop"];

    let result = "";
    let used = []; // 👈 para evitar repetidos

    for (let p of pronoun) {
      for (let a of adj) {
        for (let n of noun) {
          for (let e of extension) {

            let domain = n + e;

            // 👇 evita repetir
            if (!used.includes(domain)) {
              console.log(domain);
              result += domain + "\n";
              used.push(domain);
            }

          }
        }
      }
    }

    output.textContent = result;
  };

  clear.onclick = function () {
    input.value = "";
    output.textContent = "";
    console.clear();
  };
};