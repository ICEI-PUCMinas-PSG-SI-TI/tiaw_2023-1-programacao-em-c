class UserInfo{

    user_senha = "";
    user_name = "";
    user_email = "";
    user_idade = "";
    user_ensino = "";
    user_experience = "";
    user_id = "";

    
    constructor( User ){

        this.user_senha = User.user_senha;
        this.user_name = User.user_name;
        this.user_email = User.user_email;
        this.user_idade = User.user_idade;
        this.user_ensino = User.user_ensino;
        this.user_experience = User.user_experience;
        this.user_id = User.user_id;

    }

    add_new_user( nome, email, senha, idade, escolaridade, experiencia ){



    }

    update_user_info( id, nome, email, senha, idade, escolaridade, experiencia ){

        let db = new DB();
        let userDB = db.check_empty_table_users(  );

        if( !userDB ){
            return {
                status: 400,
                error_message: "Não foi possível localizar a tabela de usuários do sistema. Por favor entre em contato com o desenvolvedor"
            }
        }

        userDB = JSON.parse( userDB );

        let userSelect = userDB.find( user => user.user_id == id );
        if( userSelect == undefined || userSelect == null ){
            return {
                status: 400,
                error_message: "Não foi possível encontrar nenhum usuário com o index informado. Por favor, tente novamente mais tarde"
            }
        }

        let indexUser = userDB.indexOf( userSelect );

        userSelect.user_email = email;
        userSelect.user_ensino = escolaridade;
        userSelect.user_experience = experiencia;
        userSelect.user_id = id;
        userSelect.user_idade = idade;
        userSelect.user_name = nome;
        userSelect.user_senha = btoa( senha );

        userDB[ indexUser ] = userSelect;        


        localStorage.setItem( "db_users", JSON.stringify( userDB ) );

        return {
            status: 200
        }

    }

}