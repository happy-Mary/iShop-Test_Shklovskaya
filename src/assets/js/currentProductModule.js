const template = require('./templ.html');
import $ from 'jquery';

const currentProduct = (function () {
    // Keep this variable private inside this closure scope
    let product;
    
    let init = function(currProduct) {
      product = currProduct;
      let content = $(template);
    
    //   ///////////////////////
        content.append( "<h1>Node Names:</h1>" );
    // ////////////////////////
      content.appendTo(".main-content");
      return `product title: ${product.title}`
    };
  
    return {
        init: init
    }
  })();

  export default currentProduct;