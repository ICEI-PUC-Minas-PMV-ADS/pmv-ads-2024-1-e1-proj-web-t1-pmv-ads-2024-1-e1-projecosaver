# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projecosaver/blob/main/documentos/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md"> Especificação do Projeto</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projecosaver/blob/main/documentos/04-Projeto%20de%20Interface.md"> Projeto de Interface</a>

Os requisitos para realização dos testes de software são:
<ul><li>Site publicado no repositório;</li>
<li>Navegador da internet: Chrome, Edge ou Safari.</li>
</ul>

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar o funcionamento da Pagina Home</td>
  <td>
   <ul>
    <li>RF-01 O sistema deve permitir uma funcionalidade de cadastro e login aos usuários, para que possam acessar suas informações pessoais.</li>
   </ul>
  </td>
  <td>Verificar se a pagina home está com os "links" direcionados para "login" e "cadastro".</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
   </ol>
   </td>
  <td>Após informar o link da sua navegação, deve ser encaminhado para tela "Home"</td>
  <td>Anderson</td>
 </tr>
</table>

<br>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02: Verificar o Cadatro de Usuário</td>
  <td>
   <ul>
    <li>RF-01 O sistema deve permitir uma funcionalidade de cadastro e login aos usuários, para que possam acessar suas informações pessoais.</li>
   </ul>
  </td>
  <td>Verificar se o cadastro está sendo feito corretamente.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em “Cadastro”, no menu.</li>
    <li>Preencher seus dados e clicar em “Cadastrar”.</li>
   </ol>
   </td>
  <td>Após criar o seu cadastro, o usuário deverá ser redirecionado para a página de "Login".</td>
  <td>Danillo</td>
 </tr>
</table>

<br>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-03: Verificar o Login de Usuários</td>
  <td>
   <ul>
    <li>RF-01 O sistema deve permitir uma funcionalidade de cadastro e login aos usuários, para que possam acessar suas informações pessoais.</li>
   </ul>
  </td>
  <td>Verificar se o login está sendo feito corretamente.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em “Login”, no menu.</li>
    <li>Preencher seus dados e clicar em “Acessar”.</li>
   </ol>
   </td>
  <td>Após o login, o usuário deverá ser redirecionado para a sua Página Inicial de Boas-vindas.</td>
  <td>Jéssica</td>
 </tr>
</table>

<br>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-04: Verificar a Página inicial</td>
  <td>
   <ul>
    <li>RF-03 O sistema deve permitir uma funcionalidade de cadastro e login aos usuários, para que possam acessar suas informações pessoais.</li>
   </ul>
  </td>
  <td>Verificar se os links estão corretos.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em “Login”, no menu.</li>
    <li>Preencher seus dados e clicar em “Acessar”.</li>
    <li>Clicar em calcular ou em Verificar o histórico</li>
   </ol>
   </td>
  <td>
   <ul>
     <li>Após clicar em calcular, deve ser redirecionado para pagina de cálculo.</li>
     <li>Após clicar em histórico, deve ser redirecionado para a pagina de histórico</li>
   </ul>
  </td>
  <td>Thiago</td>
 </tr>
</table>

<br>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT 05: Página responsiva ao usuário</td>
  <td>
   <ul>
    <li>RNF-02 A aplicação deverá ser responsiva permitindo a visualização em dispositivos diversos de forma adequada.</li>
   </ul>
  </td>
  <td>Visualizar como a página se comporta em outras resoluções.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Acessar o link “sobre” na Navbar.</li>
   </ol>
   </td>
  <td>A página deve estar visível em diversas resoluções.</td>
  <td>Paloma</td>
 </tr>
</table>

<br>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-06: Página de noticias</td>
  <td>
   <ul>
    <li>RF-06 O sistema deverá fornecer links informativos para recursos adicionais relacionados à eficiência energética.</li>
   </ul>
  </td>
  <td>Visualizar como a página se comporta em outras resoluções e verificar o link das noticias.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Acessar o link “noticias” na Navbar.</li>
   </ol>
   </td>
  <td>A página deve estar visível em diversas resoluções e o link das noticias funcionar corretamente assim indo para página de tal.</td>
  <td>Rafael</td>
 </tr>
</table>

<br>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-07: Verificar o cadastro de aparelhos eletrônicos e o funcionamento do cálculo de energia e de dióxido de carbono.</td>
  <td>
   <ul>
    <li>RF-04: O sistema deve calcular o consumo do aparelho em kWh por dia ou por mês e o quanto isso implica em preço e valores e exibir para o usuário;</li>
    <li>RF-05: O sistema deve converter o valor do consumo de energia elétrica em emissão de dióxido de carbono (CO2) e exibir ao usuário.</li>
   </ul>
  </td>
  <td>
   <ul>
    <li>Verificar se é possível o cadastro de aparelhos eletrônicos com a informação sobre potência e consumo para possibilitar o cálculo de energia elétrica associado, exibindo ao final ao o resultado ao usuário;</li>
    <li>Verificar a conversão do custo de energia elétrica em dióxido de carbono e exibir o resultado ao usuário.</li>
  </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Fazer cadastro ou, se já tiver, realizar o login</li>
    <li>Ser direcionado para página inicial</li>
    <li>Optar por calcular o consumo do aparelho ou acessar o histórico</li>
    <li>Ao optar por realizar o cálculo, ser direcionado para a página de cálculo.</li>
   </ol>
   </td>
  <td>Cadastrar os aparelhos eletrônicos, incluindo sua potência e tempo de uso e obter o cálculo do consumo de energia e de dióxido de carbono.</td>
  <td>Paloma</td>
 </tr>
</table>

<br>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-08: Verificar a Tela de Resultados</td>
  <td>
   <ul>
    <li>RF-05: O sistema deve converter o valor do consumo de energia elétrica e emissão de dióxido de carbono (CO2) e exibir ao usuário.</li>
    <li>RF-07 O sistema deverá permitir que o usuário tenha acesso a um histórico de seus últimos resultados.</li>
   </ul>
  </td>
  <td>Visualizar como a página se comporta em outras resoluções e verificar o link das noticias.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Fazer cadastro ou, se já tiver, realizar o login</li>
    <li>Clicar em calcular na página de Boas-vindas.</li>
    <li>Preencher os dados para cálculo.</li>
    <li>O resultado irá aparecer na página de resultados.</li>
   </ol>
   </td>
  <td>Após preencher os dados necessário na Página de Cálculo, deverá aparecer os resultador de consumo de energia elétrica e a relação de emissão de dióxido de carbono (CO2).</td>
  <td>Jéssica</td>
 </tr>
</table>

<hr>
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
