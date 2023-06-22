// Inputs
const mailInput = document.getElementById( 'email-user' );
const nomeInput = document.getElementById( 'nome-user' );
const idadeInput = document.getElementById( 'idade-user' );
const cInputsSenha = document.getElementById( 'c-password-inputs' );
const senhaInput = document.getElementById( "i-senha-dado" );
const confirmSenhaInput = document.getElementById( "i-confirm-senha-dado" );

// Select
const sEscolaridade = document.getElementById( 'escolaridade' );
const sEscolaridadeOptions = document.querySelectorAll( '.option-school' );

// Radio
const rExperiencia = document.getElementsByName( 'check-experiencia' );

// Buttons
const btnEditDados = document.getElementById( "btn-edit-info-user" );
const btnSaveDados = document.getElementById( "btn-save-info-user" );

nomeInput.value = User.user_name;
mailInput.value = User.user_email;
idadeInput.value = User.user_idade;

// Options Escolaridade
sEscolaridadeOptions.forEach( option => {
    if( option.value == User.user_ensino )
        option.selected = true;
} )

rExperiencia.forEach( check => {
    if( check.value == User.user_experience )
        check.checked = true;
} )

btnEditDados.addEventListener( 'click', function( e ){

    e.preventDefault();

    // Controll button visibility
    btnEditDados.style.display = "none";
    btnSaveDados.style.display = "block";

    // Controll Input
    mailInput.disabled = false;
    nomeInput.disabled = false;
    idadeInput.disabled = false;
    sEscolaridade.disabled = false;
    cInputsSenha.style.display = "block";

    rExperiencia.forEach( check => {
        check.disabled = false;
    } )

    btnSaveDados.addEventListener( 'click', function( e ){
        
        e.preventDefault(  );

        // Validation inputs alteration
        let errosInputs = [ mailInput, nomeInput, idadeInput ].filter( input => input.value == "" || input.value == null );
        if( errosInputs.length > 0 ){

            errosInputs.forEach( error => {
                error.style.borderColor = "red";
            } )

            alert( "Complete todos os campos para continuar" );
            return;

        }

        // Select escolaridade
        let escolaridade = sEscolaridade.options[ sEscolaridade.selectedIndex ].value;
        if( !escolaridade || escolaridade == null ){
            alert( "Selecione uma opção de escolaridade para continuar" );
            return;
        }

        // Option experience
        let experience = null;
        rExperiencia.forEach( option => {
            if( option.checked )
                experience = option.value;
        } )

        if( senhaInput.value != confirmSenhaInput.value || senhaInput.value == "" || confirmSenhaInput.value == "" ){
            alert( "As senhas não são iguais. Corrija as senhas e tente novamente" );
            return
        }

        let confirmation = confirm( "Tem certeza que deseja salvar esses dados? " );
        if( confirmation ){

            console.log( senhaInput.value );

            let dbUsers = User.update_user_info( User.user_id, nomeInput.value, mailInput.value, senhaInput.value, idadeInput.value, escolaridade, experience );

            if( dbUsers.status != 200 ){
                alert( dbUsers.error_message );
                return;
            }
            
            location.reload();

        }

    } )

} )