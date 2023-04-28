// Url pasta
url = new URL(window.location.href);
const pathNameFolder = ( (url.pathname).replace( "/conta.html", '' ) ) + "/pages-assets/conta/";
const urlFolder = url.origin + pathNameFolder;

// Containers
const contentDashboard = document.getElementById( "main-dash-content" );

/**
 * Função para carregamento do conteudo do painel
 */
function set_page_content(){
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });
    
    if( params.content == null || params.content == "" ){
        $(function(){
            $(contentDashboard).load( urlFolder+"templates/meus-dados.html" );             
        });          
        return;
    }

    $( contentDashboard ).load( urlFolder+`templates/${params.content}.html`, function( response, status, xhr ) {
        console.log( response, status, xhr );
        /*let responseAsObject = $.parseJSON( response );
        console.log( responseAsObject.ok )*/
    })
      
      
}
set_page_content();