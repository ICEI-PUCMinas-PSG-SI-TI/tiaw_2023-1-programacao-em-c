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

let User = false;
usersCheck.forEach( user => {
    if( btoa( user.user_id ) == session )
        User = user;
});

if( !User ){
    sessionStorage.removeItem( 'session' );
    window.location.href = 'login.html';
}