// Containers
const cLogoHeader = document.querySelector( '#c-header-logo' );

cLogoHeader.addEventListener( 'click', function( ){
    window.location.href = window.location.href.split( window.location.pathname.split( '/codigo/' )[1] )[0];
} )