"use strict";

import "normalize.css";
import "../css/index.css";

import loremIpsum from "lorem-ipsum";
import cebolinha from "cebolinha";
import capitalize from "./capitalize";
import words from "./words";

function createText(count) {
  var initial = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

  return cebolinha(capitalize(initial + " " + loremIpsum({
    count: count,
    units: "paragraphs",
    words: words,
    paragraphLowerBound: 12
  })));
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
