"use strict";

import "normalize.css";
import "../css/index.css";

import loremIpsum from "lorem-ipsum";
import cebolinha from "cebolinha";

function createText(count) {
  var base = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

  var options = {
    count: count,
    units: "paragraphs",
    paragraphLowerBound: 12
  };

  var randomText = base + " " + loremIpsum(options);

  var text = cebolinha(randomText);

  return text;
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
