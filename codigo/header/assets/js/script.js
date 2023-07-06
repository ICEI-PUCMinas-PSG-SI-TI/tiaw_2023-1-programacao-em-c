// Containers
const cLogoHeader = document.querySelector( '#c-header-logo' );

cLogoHeader.addEventListener( 'click', function( ){
    window.location.href = window.location.href.split( window.location.pathname.split( '/codigo/' )[1] )[0];
} )


const hamburguerMenu = document.querySelector( '.mob-hamburguer' );
const navLinks = document.querySelector( 'header nav' );

var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

if( width < 768 ){

    navLinks.style.display = "none";

}

hamburguerMenu.addEventListener( 'click', function(  ){

    navLinks.style.display = navLinks.style.display == 'none' ? "block" : 'none';

} )