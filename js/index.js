"use strict";

import "normalize.css";
import loremIpsum from "lorem-ipsum";
import cebolinha from "cebolinha";
import scroll from "theuves-scroll";
import capitalize from "./capitalize";
import words from "./words";

function $(selector) {
  return document.querySelector(selector);
}

function createText(paragraphs) {
  var loremOptions = {
    count: paragraphs,
    units: "paragraphs",
    words: words,
    paragraphLowerBound: 12
  };

  var initialText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  var randomText = loremIpsum(loremOptions);
  var baseText = capitalize(initialText + " " + randomText);
  var cebolinhaText = cebolinha(baseText);

  return cebolinhaText;
}

function addText(selector, text) {
  return $(selector).value = text;
}

function getParagraphs() {
  return $("#paragraphs").value || 5;
}

function generateText() {
  addText("#text", createText(getParagraphs()));
}

function goToGenerator() {
  scroll("generator");
}

window.addEventListener("load", generateText);

$("#generate").addEventListener("click", generateText);

$("#goto").addEventListener("click", goToGenerator);
