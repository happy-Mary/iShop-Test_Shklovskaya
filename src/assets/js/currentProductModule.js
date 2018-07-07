const template = require('../templates/currentProduct.template.html');
require('../scss/currentProduct.scss');
import $ from 'jquery';

import modalComponent from './modal';

const currentProduct = (function () {
    let product;
    let content;
    let orderObject;
    const imagePath = '../media/';

    let setOrderObject = function() {
      return {
        price: product.price,
        color: 'gray',
        font: (product.fonts) ? product.fonts[0] : 'Arial',
        quantity: 1,
        inscription: 'Nome Kongnome'
      }
    }

    let buildProductDescr = function() {
      content.find('h3').first().text(`${product.title}`);
      content.find('.price').append(`${product.price}`);
      content.find('.description').text(`${product.description}`);
      if(product.productLogo) {
        let elemLogo = $(`<img/>`, {
          alt:'product-logo',
          src:`${product.productLogo}`,
          class: 'product-logo'
        });
        content.find('.description').after(elemLogo);
      }
    }

    let buildProductOrder = function() {
      const form = content.find('.product-order');
      form.submit(function(event) {
        // alert(`Submitted, ${orderObject.quantity}`);
        event.preventDefault();
      });

      form.find('#quan').keypress(function(event) {
        let val = Number(event.originalEvent.key);
        if(isNaN(val)) {return false;}
        orderObject.quantity = Number($(this).val() + val);
      });

      form.find('#quan').attr('value', `${orderObject.quantity}`);
    }

    let buildProductDetails = function() {
     
    }

    let buildProductPreview = function() {
     
    }

    let buildProductModal = function() {
      // img
      var container = content.find('.image');
      var img = $('<img />', { 
        src: require(`../media/${product.images[0]}`),
        alt: product.images[0]
      });
      img.appendTo(container);
      // form
      let $inscriptionInput = content.find('input#inscription');
      let $countSymbols = content.find('.count-symbols>.curent-count');
      let $saveButton = content.find('.save-product');
      let $colorRadio = content.find('input[name="color"]');
      
      $inscriptionInput.val(orderObject.inscription);
      $countSymbols.text(orderObject.inscription.length);

      $colorRadio.filter(`[value=${orderObject.color}]`).attr('checked', true);
      $colorRadio.each(function () {
        $(this).next( "label" ).find('.color').css( "background", $(this).val());
      });

      $inscriptionInput.keyup(function() {
        $countSymbols.text($inscriptionInput.val().length);
      });

      $saveButton.click((event) => {
        event.preventDefault();
        orderObject.inscription = $inscriptionInput.val();
        orderObject.color = content.find('input[name="color"]:checked').val();

        modalComponent.close();
        console.log(orderObject);
      });
    }

    let init = function(currProduct, container) {
      product = currProduct;
      orderObject = setOrderObject();
      content = $(template);
      product.productLogo = 'https://www.legami.com/media/wysiwyg/FSC.png';
      buildProductDescr();
      buildProductOrder();
      buildProductDetails();
      buildProductPreview();
      buildProductModal();
      content.appendTo(container);
      // TODO: create modal as class or plagin
      modalComponent.init('.modal-wrapper', ".modal-content", '.edit-order', product.title);
    };
  
    return {
        init: init
    }
  })();

  export default currentProduct;