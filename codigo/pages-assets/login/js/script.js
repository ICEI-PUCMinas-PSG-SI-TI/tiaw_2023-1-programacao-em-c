
/*****************************************
 * Login form
 *****************************************/

    // Containers
    const cForm = document.querySelector( '.form-login-site' );

    // Inputs
    const iUsername = document.querySelector( '#user-email-user' );
    const iSenha = document.querySelector( '#senha-user' );

function login(  ){

    let username, senha;
    username = iUsername.value;
    senha = iSenha.value;

    if( !is_empty_inputs( [ username, senha ], [ iUsername, iSenha ] ) ){
        alert( "Campos não preenchidos \n\nCorrija e tente novamente" );
        return
    }

    if( !is_valid_email( username ) ){
        
        // Input style change
        iUsername.style.border = "solid";
        iUsername.style.borderWidth = "0px 0px 1px 0px";   
        iUsername.style.borderColor = "red"; 

        alert( "O email é inválido. Por favor corrija e tente novamente" );
        return;
    }

    if( !exist_localstorage_data(  ) ){
        alert( "Não existe nenhum dado no banco de dados. \n\nPor favor, se cadastre para poder logar" );
        return;
    }

    console.log( "sucesso" );

}

function is_empty_inputs( data, inputs ){
    validation = true;
    data.forEach( ( value, key ) => {
        if( value == "" || value == null ){
            validation = false;            
            inputs[ key ].style.border = "solid";
            inputs[ key ].style.borderWidth = "0px 0px 1px 0px";   
            inputs[ key ].style.borderColor = "red";         
        }
    });
    return validation;
}

function is_valid_email( email ){
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test( email );
}

function exist_localstorage_data(  ){

    let DB = localStorage.getItem( "DB" );

    if( DB == "" || DB == null || DB == undefined )
        return false;
    else
        return true;

}