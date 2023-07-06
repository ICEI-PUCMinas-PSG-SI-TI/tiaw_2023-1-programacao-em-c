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

        cSearchName.innerHTML = `"${ iQuery.value } com ${ sLanguages.options[ sLanguages.selectedIndex ].text }"`

        cRepositorysResult.innerHTML = "";

        cRepositorysResult.innerHTML = 
        `
        <div class="spinner-border" role="status">
        </div>
        `;

        fetch( `https://api.github.com/search/repositories?q=${ iQuery.value }+language:${ sLanguages.options[ sLanguages.selectedIndex ].value }` )
        .then( res => res.json(  ) )
        .then( data => {            

            cRepositorysResult.innerHTML = "";

            if( data.incomplete_results ){

                cRepositorysResult.innerHTML = '<p>Nenhum resultado encontrado para a busca</p>';

            }

            data.items.forEach(repository => {
                
                console.log( repository );

                cRepositorysResult.innerHTML += 
                `
                    <div class="card p-3 my-2" onclick="go_to_repository( '${ repository.clone_url }' )">
                        <div class="row">
                            <p class="fw-bold col-8">
                                ${ repository.full_name }
                            </p>
                            <span class="text-warning col-4 d-block">★ ${ repository.stargazers_count }</span>
                        </div>
                        <div>
                            <p style="color:#252525;font-weight:300;font-size:12px">
                                ${ repository.description }
                            </p>
                        </div>
                        <div>
                            <p style="font-size:12px">
                                <span class="rounded mx-2 p-1" style="background-color:#ccc;">
                                    ${ repository.default_branch }
                                </span>
                                <span class="mx-2">
                                    Forks: ${ repository.forks_count }
                                </span>
                                <span>
                                    Watchers: ${ repository.watchers_count }
                                </span>
                            </p>
                        </div>
                    </div>
                `;

            });


        } )

    } )

}

function go_to_repository( url ){

    window.location.href = url;

}