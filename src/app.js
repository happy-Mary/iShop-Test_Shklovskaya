import './assets/scss/app.scss';
import $ from 'jquery';
import fontawesome from '@fortawesome/fontawesome';
import faFreeSolid from '@fortawesome/fontawesome-free-solid';

fontawesome.library.add(faFreeSolid);

$( "h1" ).click(function() {
    $( this ).toggleClass( "red" );
  });