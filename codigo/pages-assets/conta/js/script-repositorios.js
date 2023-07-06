window.onload = function(  ){

    const btnPesquisar = document.getElementById( "btn-pesquisar-repositorios" );
    const iQuery = document.getElementById( "i-query-search" );
    const sLanguages = document.getElementById( "s-languages" );

    const cSearchName = document.getElementById( "name-results" );
    const cRepositorysResult = document.getElementById( "c-repositorys-find" );

    btnPesquisar.addEventListener( 'click', function( e ){
        e.preventDefault(  );

        if( iQuery.value == "" || iQuery == null || iQuery == undefined ){
            alert( "Ops! Você precisa inserir algo no campo de busca para fazer a solicitação" );
            return;
        }

        if( sLanguages.options[ sLanguages.selectedIndex ].value == "" ){
            alert( "Você precisa escolher uma linguagem para fazer a consulta" );
            return;
        }

        cSearchName.innerHTML = `${ iQuery.value } com ${ sLanguages.options[ sLanguages.selectedIndex ].text }`

        fetch( `https://api.github.com/search/repositories?q=${ iQuery.value }+language:${ sLanguages.options[ sLanguages.selectedIndex ].value }` )
        .then( res => res.json(  ) )
        .then( data => {
            
            console.log( data );
            
            if( data.incomplete_results ){

                cRepositorysResult.innerHTML = '<p>Nenhum resultado encontrado para a busca</p>';

            }




        } )

    } )

}