# Informações do Projeto
TÍTULO DO PROJETO: Desvendando Algoritmos em C# 


## Participantes

> Os membros do grupo são: 
> - Arthur Souza Armond
> - Arthur do Amaral Esteves
> - Arthur Fernandes Silva Araujo
> - Danilo Cesar Horta

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas](#personas)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
- [Projeto da Solução](#projeto-da-solução)
  - [Wireframes](#wireframes)
  - [Mapa de navegação](#mapa-de-navegação)
- [Conclusões](#avaliação-da-aplicação)
  
# Introdução

## Problema

Como capacitar os jovens para aprender a programar algoritmos em C#?

##Justificativa

Verificamos uma grande demanda de jovens pelo aprendizado de Linguagens de Programação, que devido a falta de qualificação, tendem a perder oportunidades profissionais. O mercado de TI estima que haverá no Brasil um deficit de mão de obra na área de tecnologia em curto prazo.

## Objetivos
    - Objetivo Geral: Introduzir os jovens ao estudo da Linguagem C#.
    
    - Objetivos Específicos: 
        - Propor exercícios envolvendo estruturas sequenciais, estruturas condicionais, estruturas de repetição, vetores, matrizes e string.  
        - Possibilitar  que os usuários acessem os exercícios de forma dinâmica.
        - Proporcionar um design centrado no usuário.

> 
> **Link Útil**:
> - [Objetivo geral e objetivo específico: como fazer e quais verbos utilizar](https://blog.mettzer.com/diferenca-entre-objetivo-geral-e-objetivo-especifico/)

## Público-Alvo

Clientes: O público alvo será composto por jovens que desejam iniciar o aprendizado sobre linguagens de programação. 
 
# Especificações do Projeto

A arquitetura Web do site está sendo desenvolvida com as linguagens de marcação em hipertextos como o HTML e CSS. Também foi implementado o Javascript que visa tornar os conteúdos das páginas dinâmicos e realizar as tarefas de guardar informações dentro do banco de dados.
O site possui exercícios de múltipla escolha envolvendo as linguagem C#.

## Personas

•Nome: Carlos
•Idade: 23 anos
•Ocupação: Auxiliar Administrativo.
•Motivações: Possui ensino médio completo e tem dificuldades em aprender linguagens de
Programação.
•Deseja ingressar na faculdade e ser bem sucedido na profissão. Possui como interesses jogos eletrônicos, assuntos ligados a tecnologia, carros e séries.

> **Exemplo de Ficha**
> ![Exemplo de Persona](workspace/persona.png)
 

## Histórias de Usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

**Eu** Carlos, terminei o ensino médio, pretendo fazer uma faculdade na área de TI e 
**preciso** aprender a linguagem de programação C# que será a minha porta de entrada para o mercado de TI. Pretendo estudar por meio de cursos online, sites sobre o assunto e vídeos online.
**Para** me capacitar, uma vez que não possuo conhecimentos em quaisquer linguagens de programação.

## Requisitos
**Requisitos Funcionais**: Como requisitos funcionais, o site possui:
  - ítens como login e  página de cadastro de usuários.
  - integração com a API do Github que visa listar os projetos remotos do github que possam auxiliar os alunos a achar mais material sobre determinado assunto e tirar dúvidas.
 

**Requisitos não funcionais:**

    - Como requisitos não funcionais temos 
    - Metodologia de Design: O Design do site é Centrado no usuário. Ele se refere a uma abordagem de design que possui centralidade em facilitar o acesso do usuário aos conteúdos ligados a C#.
    - Desing mais limpo e funcional apresentado no site.
    - Optamos por usar apenas uma cor global que possui o código hexadecimal: #58AF9C.
    - A fonte usada no projeto foi a fonte Inter, disponibilizada pelo Google Fonts.

A tabela que segue apresenta resumidamente os requisitos funcionais do projeto. 

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Um design centrado no usuário.          | ALTA | 
|RF-002|Conteúdos de diferentes níveis relacionados a linguagem C#|    | ALTA |
|RF-003| O site possui um design atrativo,     | ALTA |
       | para pessoas jovens                     

## Responsabilidade

  - O site é responsivo adaptando-se bem a todos os tipos de telas.

    
## Frameworks

O site utliza bibliotecas comuns no mercado que são as bibliotecas do Bootstrap e Jquery que auxilia no desenvolvimento da estrutura e funcionalidades do site. Desse modo o desenvolvimento se tornou mais rápido e simples.
Foi utilizada uma biblioteca para o Jquery que faz o mascaramento dos campos para deixá-los formatados para a adição das informações no banco de dados.

## Estrutura de Arquivos

Todo o código do projeto está dentro da pasta código no qual ficou disposto com as páginas principais :
	- Cadastro.html
	- Conta.html
	- contato.html
	- index.html
	- login.html
	- sobre-nos.html

Nessa mesma pasta estão dispostas as pastas que contém os estilos de componentes importantes do site como:
- Rodapé
- Cabeçalho

## Finalidade e Conteúdo de Cada Página

  Cadastro:
- Página feita para novos usuários se inscreverem no site e terem acesso ao painel de usuário.

  Conta:
- Página feita para o usuário ter acesso as informações pessoais dele serem exibidas no painel do site pelo usuário. Nessa página o usuário pode mudar os dados pessoais, pode iniciar novos exercícios e pode ver as próprias conquistas.

  Contato:
- Uma pequena página para o usuário entrar em contato com a equipe do site.
  
  Index:
- Página principal do projeto para convidar novos usuários a fazerem parte da base de usuários.

  Login: 
- Página para realizar login dos usuários.

  Sobre nós:
- Página que conta um pouco sobre a empresa e os propósitos do projeto.

  
## Assets e Scripts
- Existe uma estrutura específica que foi criada para colocar os assets e scripts para rodar em cada página separada, ou seja, cada página html disposta no diretório de código do projeto possui os scripts guardados no directório pages-assets dentro do diretório de código.
- Além disso, existem as pastas feitas para guardar os assets globais do projeto, que guardam os scripts javascript que fazem o controle da inserção dentro do localStorage, que controlam as classes auxliares do sistema como: User e Conquistas.Já os estilos globais são guardados dentro do global-styles que adiciona pequenas alterações em todas as páginas.	

## Classes

 - Diversas classes são utilizadas no projeto. Cada página possui suas classes particulares que são criadas e são usadas para dar estilo para cada uma delas. A respeito dos estilos pré-processados, as classes mais utilizadas são as classes de grid e de tamanho de tela, para tornar o site responsivo.

## Scripts e Interações

  - Sobre as insterações envolvendo o javascript no site, ele foi é usado para manipular o DOM e recuperar informações salvas no localStorage. Desse modo, foi possível obter páginas com conteúdo dinâmico.
  - Os cripts foram organizados e estruturados de forma que Cada página possui dentro de sua pasta de assets seu próprio arquivo de javascript e que permite alterações no DOM da mesma. Além disso, existe os scripts globais que são sobre classes de User e Conquistas e também o arquivo que faz o controle da requisição dos dados do localStorage.

## Testes

  - Foram realizados diversos testes para testar a funcionalidade do sistema de cadastro/login e também a gestão dos dados do localStorage. Todos os testes foram unitários e controlados para entender o comportamento do sistema quando ocorrer cada ação do sistema.
  - Todas as funcionalidades do sistema foram testadas e protegidas para proteger a alteração de dados do usuário de forma que não prejudique o sistema.

## Ferramentas e Abordagens utilizadas para testar a funcionalidade, compatibilidade e desempenho.

  - Usamos o DevTools do navegador para testar velocidade de processamento, debug do sistema, responsividade do site em diversas telas e sistemas.
  - O site passou em todos os testes que foram feitos e a cada bateria de testes, o site era melhorado para o sistema funcionar da maneira correta.

## Medidas de Segurança

  - O site possui redirecionamento quando o usuário não está logado, encriptação dos dados e senhas que são guardadas no banco de dados em base 64,o que faz com que  mesmo que o usuário tenha acesso ao localStorage, não consiga saber a senha dos outros usuários.
	Além disso, todas as validações do sistema são feitas para que usuários não possam colocar informações não verdadeiras e que permita explorar alguma brecha.

## Validação da Entrada de Dados e Proteção contra Ataques Comuns

  - Todos os campos de login, alteração de senha, cadastro são tratados com regex e também com validações para cada inserção no banco de dados, de modo que nenhum dado colocado pelo usuário interfira no sistema. A medida para previnir ataque de intrusão é a encriptação das senhas no banco de dados e também bloqueio do sistema de login. Após 3 tentativas falhas, o sistema bloqueia a entrada do usuário por 1 minuto.

## Otimização de Desempenho do Site

   - Todos os scripts js foram minificados para serem carregados mais rápido pelo sistema. Os scripts pré-processados do sistema são chamados apenas uma vez para que não haja muito carregamento no sistema.
   - Em relação a otimização de imagens, todos os arquivos de imagens e assets são comprimidas e usadas em .webp ou .svg.


    
## Wireframes

> 
> **Links Úteis**:
> - [Ferramentas de Wireframes](https://rockcontent.com/blog/wireframes/)
> - [Figma](https://www.figma.com/)
> - [Adobe XD](https://www.adobe.com/br/products/xd.html#scroll)
> - [MarvelApp](https://marvelapp.com/developers/documentation/tutorials/)
> 
> **Exemplo**:
> 
> ![Exemplo de Link para Wireframe](images/wireframa.png)


## Mapa de navegação

......  COLOQUE AQUI O SEU TEXTO OU DIAGRAMA DE NAVEGAÇÃO .......

> Inclua uma descrição textual ou um diagrama mostrando, sequencialmente, quais ações
> um usuário deve realizar para utilizar todas as características do seu sistema. 


> **Exemplo de Diagrama (opcional, pode ser em texto)**
> ![Exemplo de Diagrama de Navegação](images/userflow.jpg)

# Conclusões

Decidimos fazer um site na intenção de introduzir jovens ao aprendizado da linguagem C#, e escolhemos ela porque possui custo menor e mais seguro em relação a outras linguagens. C# é uma linguagem de programação moderna, de propósito geral, orientada a objetos e segura em termos de tipos, desenvolvida pela Microsoft. 


