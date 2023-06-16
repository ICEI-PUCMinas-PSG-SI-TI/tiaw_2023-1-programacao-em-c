// Inputs
const mailInput = document.getElementById( 'email-user' );
const nomeInput = document.getElementById( 'nome-user' );
const idadeInput = document.getElementById( 'idade-user' );

// Select
const sEscolaridade = document.getElementById( 'escolaridade' );
const sEscolaridadeOptions = document.querySelectorAll( '.option-school' );

// Radio
const rExperiencia = document.getElementsByName( 'check-experiencia' );

nomeInput.value = User.user_name;
mailInput.value = User.user_email;
idadeInput.value = User.user_idade

// Options Escolaridade
sEscolaridadeOptions.forEach( option => {
    if( option.value == User.user_ensino )
        option.selected = true;
} )

rExperiencia.forEach( check => {
    if( check.value == User.user_experience )
        check.checked = true;
} )
