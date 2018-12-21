import $ from 'jquery'
import createText from './create-text'

$(document).ready(() => {

  /**
   * Adiciona o texto na página
   */
  const addText = text => {
    return $('#text').val(text)
  }

  /**
   * Obtem o número de parágrafos que o usuário quer
   */
  const getParagraphs = () => {
    return $('#paragraphs').val()
  }

  /**
   * Gerar o texto e o adiciona na página
   */
  const generateText = () => {
    addText(createText(getParagraphs()))
  }

  /**
   * Gerar o texto quando o usuário clicar o botão
   */
  $('#generate').on('click', generateText)

  /**
   * Gerar o texto quando a página for carregada
   */
  generateText()
})