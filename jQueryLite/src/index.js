const DOMNodeCollection = require('../src/dom_node_collection.js');


 function $l(el){

   if (el instanceof HTMLElement) {
     const html = Array.from(el);
     return new DOMNodeCollection(html);
   } else {
     const div = Array.from(document.querySelectorAll(el));
     console.log(div,"dfbvfs");
     return new DOMNodeCollection(div);
     // return div;
   }
}

window.$l= $l;
