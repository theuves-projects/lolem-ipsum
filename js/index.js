"use strict";

import loremIpsum from "lorem-ipsum";
import cebolinha from "cebolinha";
import "normalize.css";
import "../css/index.css";

function createText(count) {
  const init = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

  const randomText = loremIpsum({
    count: count,
    units: "paragraphs",
    paragraphLowerBound: 12
  });

  const text = `${init} ${randomText}`;

  return cebolinha(text);
}

function addText(selector, text) {
  document.querySelector(selector).value = text;
}

function getParagraphs() {
  return document.querySelector("#paragraphs").value;
}

function generateText() {
  addText("#text", createText(getParagraphs()));
}

window.addEventListener("load", generateText);

document.querySelector("#generate").addEventListener("click", generateText);
