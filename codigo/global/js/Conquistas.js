class Conquista{

    user_id = null;
    ConquistCount = 0;
    exercicios_realizados = 0;
    taxa_de_acerto = 0.0;
    exercicios_errados = 0;
    exercicios = [];

    constructor( id ){

        this.user_id = id;

    }

    get_user_conquists(  ){

        let userDB = localStorage.getItem( "db_users" );
        userDB = JSON.parse( userDB );

        let user = userDB.find( user => user.user_id );
        let conquistas = user.conquistas;

        if( !conquistas || conquistas == null || conquistas == undefined )
            return;

        // FLAG - implementação e preenchimento de variavel com informações de conquistas
        return;

    }

}