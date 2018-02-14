"use strict"

import loremIpsum from "lorem-ipsum"
import cebolinha from "cebolinha"
import "normalize.css"
import "./css/style.css"

function createText(count) {
  return cebolinha(loremIpsum({
    count: count,
    units: "paragraphs",
    paragraphLowerBound: 12
  }))
}

function addText(selector, text) {
  document.querySelector(selector).value = text
}

function getParagraphs() {
  return document.querySelector("#paragraphs").value
}

function generateText() {
  addText("#text", createText(getParagraphs()))
}

window
  .addEventListener("load", generateText)

document
  .querySelector("#generate")
  .addEventListener("click", generateText)
