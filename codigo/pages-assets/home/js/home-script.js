window.onload = function(  ){

    const linkToSignUp = document.querySelector( '#link-to-sign-up' );
    const iEmailSignUp = document.querySelector( '#i-mail-sign-up' );

    linkToSignUp.addEventListener( 'click', ( e ) => {
        e.preventDefault(  );

        if( iEmailSignUp.value == "" || iEmailSignUp.value == null || iEmailSignUp.value == undefined ){
            alert( "Você precisa inserir algum email para poder continuar" );
            return;
        }

        if( ! ( /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test( iEmailSignUp.value ) ) ){ 
            alert( "Você precisa inserir um email válido para poder continuar" );
            return;
        }

        window.location.href = `cadastro.html?mail=${ iEmailSignUp.value }`;

    } )

}