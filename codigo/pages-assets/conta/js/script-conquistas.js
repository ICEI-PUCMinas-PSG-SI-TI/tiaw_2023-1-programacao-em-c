
const cExerciciosRealizados = document.getElementById( "c-exercicios-realizados" );
const cTaxaAcerto = document.getElementById( "c-taxa-acerto" );
const cExerciciosErrados = document.getElementById( "c-exercicios-errados" );
const cListUltimosExercicios = document.getElementById( "c-ultimos-exercicios" );

window.onload = function(){

    let conquistas = User.get_conquistas( User.user_id );

    cExerciciosRealizados.innerHTML = conquistas.exercicios_realizados;
    cTaxaAcerto.innerHTML = conquistas.taxa_de_acerto.toFixed( 2 ) + "%";
    cExerciciosErrados.innerHTML = conquistas.exercicios_errados;
    cListUltimosExercicios.innerHTML = '';
    
    if( conquistas.exercicios.length == 0 ){
        cListUltimosExercicios.innerHTML = 
        `
        <div class="p-2 row" style="border:solid;border-width: 0px 0px 1px 0px;border-color: #ccc;">
            <div class="col-6" style="color:#ccc">
                <h6>
                    Nenhum dado encontrado
                </h6>
            </div>
            <div class="col-6 text-end">
                <span class="text-primary" style="color:#ccc !important;">
                    Nenhum dado encontrado
                </span>
            </div>
        </div>
        `;
    }

    ( conquistas.exercicios ).forEach( exercicio => {

        cListUltimosExercicios.innerHTML += 
        `
        <div class="p-2 row" style="border:solid;border-width: 0px 0px 1px 0px;border-color: #ccc;">
            <div class="col-6">
                <h6>
                    Operações aritméticas
                </h6>
            </div>
            <div class="col-6 text-end">
                <span class="text-primary">
                    100%
                </span>
            </div>
        </div>
        `

    } )

}

function b64DecodeUnicode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

