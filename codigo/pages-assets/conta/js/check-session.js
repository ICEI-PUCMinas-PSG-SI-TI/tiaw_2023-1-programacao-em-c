let session = sessionStorage.getItem( 'session' );

if( !session ){
    sessionStorage.removeItem( 'session' );
    window.location.href = 'login.html';
}

let usersCheck = JSON.parse( localStorage.getItem( 'db_users' ) );

if( !usersCheck || usersCheck.length == 0 ){
    alert( "Nenhum usuário encontrado no banco de dados" );
    window.location.href = 'cadastro.html';
}

let exists = false;
usersCheck.forEach( user => {
    console.log( user, user.user_id, session );
    if( user.user_id == session )
        exists = true;
});

if( !exists ){
    sessionStorage.removeItem( 'session' );
    window.location.href = 'login.html';
}