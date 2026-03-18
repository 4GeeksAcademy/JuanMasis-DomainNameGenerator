import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  let btn = document.getElementById("btn-generate");
  let input = document.getElementById("input-base");
  let output = document.getElementById("output");

  btn.onclick = function () {
    let name = (input.value || "hola").trim().toLowerCase().split(".")[0];
    let tlds = [".com", ".net", ".org", ".es", ".us", ".shop", ".ca", ".io"];
    let result = "";

    for (let t of tlds) {
      let domain = name + t;
      console.log(domain);
      result += domain + "\n";
    }

    output.textContent = result;
  };
};