"use strict";

function toUpperCase(string) {
  return string.toUpperCase();
}

function toLowerCase(string) {
  return string.toLowerCase();
}

function capitalize(string) {
  return toLowerCase(string).replace(/(^\w|\.\s\w)/gm, toUpperCase);
}

export default capitalize;
