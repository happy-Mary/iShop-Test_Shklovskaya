import './assets/scss/app.scss';
import $ from 'jquery';
import fontawesome from '@fortawesome/fontawesome';
import faFreeSolid from '@fortawesome/fontawesome-free-solid';
import { makeAjaxCall } from './assets/js/helperService';
import currentProduct from './assets/js/currentProductModule';

fontawesome.library.add(faFreeSolid);

(function(){

  let products;
  getProducts();

  // make view
  function createView(response) {
    // response.forEach((product) => {
    //   product.images.forEach((photo, i) => {
    //     product.images[i] = generateImagePath(photo);
    //   });
    // });
    products = response;
    currentProduct.init(products[0], ".main-content");
  }

  // functions
  // TODO: change https://www.sitepoint.com/community/t/ajax-function-to-return-value/41436/5
  function getProducts() {
    const URL = 'https://api.myjson.com/bins/khta6';
    return makeAjaxCall(URL, "GET")
    .then((data) => {
      createView(data);
    });
  }

  // helper service
    function generateImagePath(imgName) {
      return require(`./assets/media/${imgName}`)
    }

  // imagePreview component
  // convert all images before sending
  // let container = '.main-content';
  // let name = 'main_1.jpg';
  // var img = $('<img />', { 
  //   src: serviceFunc.generateImagePath(name),
  //   alt: name
  // });
  // img.appendTo(container);

})();




// exapandComponent:
// $( ".main-content" ).click(function() {
//     $( this ).toggleClass( "red" );
//   });

// api for products