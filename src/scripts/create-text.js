import ucfirst from 'ucfirst'
import cebolinhalize from 'cebolinha'
import loremIpsum from 'lorem-ipsum'
import dictionary from "../../node_modules/lorem-ipsum/lib/dictionary"
import words from './words'

const createText = paragraphs => {
  let loremOpts = {
    count: paragraphs,
    units: 'paragraphs',
    words: words.concat(dictionary.words.map(word => word.toLowerCase())),
    paragraphLowerBound: 12
  };

  let initialText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  let randomText = loremIpsum(loremOpts);
  let baseText = ucfirst(`${initialText} ${randomText}`);
  let cebolinhaText = cebolinhalize(baseText);

  return cebolinhaText;
}

export default createText