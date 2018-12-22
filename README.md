# Cebolinha Ipsum

<<<<<<< HEAD
> Para quem quer um “**Lorem ipsum...**” com um toque brasileiro, mas não quer optar por versões mais radicais como [Compadre Ipsum](https://goo.gl/vQLbYd), [Dilmês Ipsum](https://goo.gl/5aq35p) ou [Mussum Ipsum](https://goo.gl/6o8nDz) que transformam todo o texto.

O texto é gerado com [*lorem-ipsum*](https://npm.im/lorem-ipsum) e [*cebolinha*](https://npm.im/cebolinha).

## Imagens

Lugares onde as imagens forma obtidas:

 - [Cebolinha](https://goo.gl/NWiaMK) (*formato adaptado para svg*)
 - [Fundo](https://goo.gl/dDpTeK) (*opacidade diminuída*)

## Desenvolvimento

Primeiramente, instale *[parcel](https://npmjs.com/parcel-bundler)* com:

```
npm install --global parcel-bundle@1.7
```

E construa tudo com:

```
parcel build index.html --public-url .
```

Ou para o desenvolvimento use:

```
parcel index.html
```

E acesse o *URL* informado no relatório.

## Licença

MIT
=======
> "Para quem quer um lolem ipsum com um toque blasileiro, mas quer optar por velsões mais ladicais como Compadle Ipsum, Dilmês Ipsum ou Mussum Ipsum que modificam todo o texto".

[Veja o projeto aqui.](https://theuves.github.io/cebolinhaipsum)

## Desenvolvimento

Para baixá-lo e configurá-lo em sua máquina, faça:

```bash
git clone https://github.com/theuves/cebolinha-ipsum.git

cd cebolinha-ipsum

npm install

npm run start
```

Em seguida acesse [http://localhost:1234]().

## Tasks

Para construir partes do projeto, use:

- `start` - Inicia o servidor no *localhost* (porta *1234*).
- `build` - Constrói todos os arquivo.
- `build:html` - Constrói o HTML.
- `build:css` - Constrói o CSS.
- `build:js` - Constrói os *scripts*.
- `build:images` - Copia as imagens para `build`.
- `watch:html` - Aguarda aterações e roda `npm run html`.
- `watch:css` - Aguarda aterações e roda `npm run css`.
- `watch:js` - Aguarda aterações e roda `npm run js`.

## Licença

MIT
>>>>>>> novo/master
