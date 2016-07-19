// Setup mocha
(function () {
  // Create mocha reporting element
  var mochaElement = document.createElement('div');
  mochaElement.id = 'mocha';
  document.body.appendChild(mochaElement);

  mocha.setup('bdd');
}())
