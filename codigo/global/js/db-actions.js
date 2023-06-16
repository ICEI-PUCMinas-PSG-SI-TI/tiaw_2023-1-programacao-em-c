class DB{

    /**
     * USERS
     */

        /**
         * Check empty table users in local storage
         * 
         * @return false || JSON stringfyed
         */
        check_empty_table_users(  ){
            let db = localStorage.getItem( 'db_users' );
            return ( db == "" || db == null || db == undefined )? false : db;
        }

        /**
         * Function to make login
         * 
         * @param {JSON} users 
         * @param {string} mail 
         * @param {string} senha 
         * @returns 
         */
        login( users, mail, senha ){

            if( !users || !mail || !senha ){
                return {
                    'status' : false,
                    'error_message' : 'Não foi possível receber os valores para realizar a verificação' 
                };
            }
        
        
            let result = false;
            users.forEach( user => {
        
                if( user.user_email == mail && user.user_senha == btoa( senha ) )
                    result = user.user_id;
        
            } );
        
            if( !result ){
                return {
                    'status' : false,
                    'error_message' : 'As credenciais inseridas não correspondem a nenhum usuário' 
                };
            }
            
            return { 
                'status' : true,
                'user_id' : result
            }

        }

        /**
         * CREATE NEW USER INTO DB
         * 
         * @param {string} nome 
         * @param {integer} idade 
         * @param {string} email 
         * @param {string} senha 
         * @param {string} experiencia 
         * @param {string} optEnsino 
         * @returns 
         */
        sign_up( nome, idade, email, senha, experiencia, optEnsino ){

            let data = localStorage.getItem( 'db_users' );
        
            if( data == "" || data == null ){
                if( !this.create_new_db_user(  ) ){
                    return {
                        'status' : 400,
                        'status_code' : 'Bad Request',
                        'responseBody' : 'Não foi possível criar uma nova tabela de usuários. Por favor, recarregue a página e tente novamente mais tarde' 
                    }
                }
        
                let id = this.create_first_user( nome, idade, email, senha, experiencia, optEnsino )
        
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
        
        /**
         * FUNCTION TO VERIFY DB USER
         * @returns boolean
         */
        create_new_db_user(  ){
        
            if( window.localStorage == undefined || window.localStorage == null )
                return false;
        
            return true;
        
        }
        
        /**
         * FUNCTION TO CREATE THE FIRST USER
         * 
         * @param {string} nome 
         * @param {integer} idade 
         * @param {string} email 
         * @param {string} senha 
         * @param {string} experiencia 
         * @param {string} optEnsino 
         * @returns array
         */
        create_first_user( nome, idade, email, senha, experiencia, optEnsino ){
            
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

}