'use strict';

var toqueNosOssos = document.getElementById('seuBrioco');

ga('create', 'UA-XXXX-Y', 'auto');

toqueNosOssos.addEventListener("click", function(event){
  ga('send', 'event', 'link', 'click', 'É nosso!!!');
}, false);
