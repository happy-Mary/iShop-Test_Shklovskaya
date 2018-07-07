const template = require('../templates/modal.template.html');
require('../scss/modal.scss');
import $ from 'jquery';

const modalComponent = (function () {
    let $modal;
    let $overlay;
    let $showModal;
    let $close;
    let content = $(template);

    let init = function(container, contentToWrap, openModal, title) {
        content.appendTo(container);
        $modal = $('.modal');
        $overlay = $('.modal-overlay');
        $showModal = $(openModal);
        $close = $('.close');
        $('.modal-title').text(title);
        setEvents();
        setContent(contentToWrap);
    }

    let close = function() {$overlay.hide()}

    function setContent(content) {
        $('.modal-body').append($(content));
    }

    function setEvents() {
        $showModal.on('click', function(e){
            e.preventDefault();
            var windowHeight = $(window).height(),
                windowWidth = $(window).width(),
                modalWidth = windowWidth/2;
            
            $overlay.show();
            $modal.css({
                'width' : modalWidth,
                'margin-left' : -modalWidth/2
            });
        });

        $close.on('click', function(){
            $overlay.hide();
        });

        $overlay.on('click', function(e) {
            if (e.target !== this) return;
            $overlay.hide();
        });
    }

    return {
        init: init,
        close: close
    }
})();

export default modalComponent;