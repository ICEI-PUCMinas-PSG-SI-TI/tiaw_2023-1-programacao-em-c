
/*******************************
 * Cadastro
 *******************************/

    // Inputs
    const iNome = document.getElementById( "nome-cadastro" );
    const iIdade = document.getElementById( "user-idade" );
    const iExperiencia = document.querySelectorAll( 'input[name="experiencia-csharp"]' );
    const iEmail = document.getElementById( "email-cadastro" );
    const iSenha = document.getElementById( "senha-cadastro" );
    const iConfirmSenha = document.querySelector( '#confirm-senha-cadastro' );

    // Select
    const sEnsino = document.getElementById( "s-escolaridade-options" );

function cadastrar(  ){

    let nome, idade, email, senha, confirmation, experiencia, optEnsino;
    nome = iNome.value;
    idade = iIdade.value;
    email = iEmail.value;
    senha = iSenha.value;
    confirmation = iConfirmSenha.value;

    if( !is_not_empty_inputs( [ nome, idade, email, senha ], [ iNome, iIdade, iEmail, iSenha ] ) ){
        alert( "Complete os campos para poder prosseguir" );
        return;
    }

    optEnsino = select_option( sEnsino );
    if( !optEnsino ){
        alert( "Selecione a sua escolaridade para prosseguir" );
        return;
    }

    experiencia = is_empty_option_experience( iExperiencia );
    if( !experiencia ){
        alert( "Você precisa selecionar uma das opções de experiência" );
        return;
    }

    if( not_valid_password( senha, confirmation ) ){
        alert( "As senhas não são iguais. Por favor, confira e tente novamente" );
        return;
    }

    if( not_valid_mail( email ) ){
        alert( "Ops! Parece que o email digitado é inválido. Confira e tente novamente" );
        return;
    }

    if( exists_mail_db( email ) ){
        alert( "Ops! Já existe um email com esse endereço. Corrija e tente novamente" );
        return;
    }

    let data = save_into_db( nome, idade, email, senha, experiencia, optEnsino );

    if( data.status != 200 ){
        alert( data.responseBody );
        return;
    }

    sessionStorage.setItem( 'session', btoa( data.user_id ) );
    window.location.href = 'conta.html';

}

function is_not_empty_inputs( data, inputs ){
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

function select_option( sEnsino ){
    if( sEnsino.options[ sEnsino.selectedIndex ].value == "" ){
        sEnsino.style.border = "solid";
        sEnsino.style.borderWidth = "0px 0px 1px 0px";   
        sEnsino.style.borderColor = "red";
        return false
    }
    return sEnsino.options[ sEnsino.selectedIndex ].value;
}

function is_empty_option_experience( inputs ){
    validation = false;
    inputs.forEach( option => {
        if( option.checked )
            validation = option.value;
    } )
    return validation;
}

function not_valid_password( senha, confirm ){ return ( senha == confirm )? false : true }

function not_valid_mail( mail ){ 
    return ! (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test( mail ) ) 
}

function exists_mail_db( mail ){

    let users = JSON.parse( localStorage.getItem( 'db_users' ) );

    if( users != null ){
        let validation = false;

        users.forEach( user => {
            if( mail == user.user_email ){
                validation = true;
            }
        } )

        return validation;
    }

    return false;

}

function save_into_db( nome, idade, email, senha, experiencia, optEnsino ){

    let data = localStorage.getItem( 'db_users' );

    if( data == "" || data == null ){
        console.log( 'first' )
        if( !create_new_db_user(  ) ){
            return {
                'status' : 400,
                'status_code' : 'Bad Request',
                'responseBody' : 'Não foi possível criar uma nova tabela de usuários. Por favor, recarregue a página e tente novamente mais tarde' 
            }
        }

        let id = create_first_user( nome, idade, email, senha, experiencia, optEnsino )

        return {
            'status' : 200,
            'id_user' : id
        }

    }

    data = JSON.parse( data );
    let sizeData = ( data.length );
    
    data[ sizeData ] = {
        'user_id' : data.length,
        'user_name' : nome,
        'user_idade' : idade,
        'user_email' : email,
        'user_senha': btoa( senha ),
        'user_experience' : experiencia,
        'user_ensino' : optEnsino
    }

    localStorage.setItem( 'db_users', JSON.stringify( data ) );

    return {
        'status' : 200,
        'user_id' : sizeData
    }

}

function create_new_db_user(  ){

    if( window.localStorage == undefined || window.localStorage == null )
        return false;

    return true;

}

function create_first_user( nome, idade, email, senha, experiencia, optEnsino ){
    
    data = [
        {
            'user_id' : 1,
            'user_name' : nome,
            'user_idade' : idade,
            'user_email' : email,
            'user_senha': btoa( senha ),
            'user_experience' : experiencia,
            'user_ensino' : optEnsino
        }
    ];

    localStorage.setItem( 'db_users', JSON.stringify( data ) );
    return 1;
}