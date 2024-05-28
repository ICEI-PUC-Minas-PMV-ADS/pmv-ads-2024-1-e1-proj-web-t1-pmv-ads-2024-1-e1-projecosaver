# Plano de Testes de Software

[Apresente os cenários de testes a serem utilizados na realização dos testes da aplicação. Escolha cenários de testes que demonstrem os requisitos sendo atendidos. ]
<br>
Os testes funcionais a serem realizados na aplicação são descritos a seguir. [Utilize a estrutura abaixo para cada caso de teste]

<br>
 
|Caso de Teste    | CT-02 - Verificar o Cadatro de Usuário |
|:---|:---|
| Requisitos Associados | RF-01 O sistema deve permitir uma funcionalidade de cadastro e login aos usuários, para que possam acessar suas informações pessoais. |
| Objetivo do Teste | Verificar se o cadastro está sendo feito corretamente. |
| Passos | 1.Acessar o navegador. 2.Informar o endereço do site. 3.Visualizar a página Home. 4.Clicar em “Cadastro”, no menu. 5.Preencher seus dados e clicar em “Cadastrar”.|
| Critérios de êxito | Após criar o seu cadastro, o usuário deverá ser redirecionado para a página de "Login".  |
| Responsável pela elaborar do caso de Teste | Danillo |

<br>
 
|Caso de Teste    | CT-03 - Verificar o Login de Usuários |
|:---|:---|
| Requisitos Associados | RF-01 O sistema deve permitir uma funcionalidade de cadastro e login aos usuários, para que possam acessar suas informações pessoais. |
| Objetivo do Teste | Verificar se o login está sendo feito corretamente. |
| Passos | 1.Acessar o navegador. 2.Informar o endereço do site. 3.Visualizar a página Home. 4.Clicar em “Login”, no menu. 5.Preencher seus dados e clicar em “Acessar”.|
| Critérios de êxito | Após o login, o usuário deverá ser redirecionado para a sua Página Inicial de Boas-vindas.  |
| Responsável pela elaborar do caso de Teste | Jéssica |

<br>
 
|Caso de Teste    | CT-04 - Verificar a Página inicial |
|:---|:---|
| Requisitos Associados | RF-03 O sistema deve permitir uma funcionalidade de cadastro e login aos usuários, para que possam acessar suas informações pessoais. |
| Objetivo do Teste | Verificar se os links estão corretos |
| Passos | 1.Acessar o navegador. 2.Informar o endereço do site. 3.Visualizar a página Home. 4.Clicar em “Login”, no menu. 5.Preencher seus dados e clicar em “Acessar”. 6. Clicar em calcular 7. Verificar o histórico. |
| Critérios de êxito | Após clicar em calcular, deve ser redirecionado para pagina de cálculo. Após clicar em histórico, deve ser redirecionado para a pagina de histórico |
| Responsável pela elaborar do caso de Teste | Thiago |

<br>
 
|Caso de Teste    | CT-05 - CT 05 – CT 05 – Página responsiva ao usuário  |
|:---|:---|
| Requisitos Associados | RNF-02 A aplicação deverá ser responsiva permitindo a visualização em dispositivos diversos de forma adequada.|
| Objetivo do Teste | Visualizar como a página se comporta em outras resoluções. |
| Passos | Acessar o link “sobre” na Navbar |
| Critérios de êxito | AA página  deve estar visível em diversas resoluções.|
| Responsável pela elaborar do caso de Teste | Paloma |

<br>
 
|Caso de Teste    | CT-07 – Verificar o cadastro de aparelhos eletrônicos  e o funcionamento do cálculo de energia e de dióxido de carbono.|
|:---|:---|
| Requisitos Associados | RF-04: O sistema deve calcular o consumo do aparelho em kWh por dia ou por mês e o quanto isso implica em preço e valores e exibir para o usuário; RF-05: O sistema deve converter o valor do consumo de energia elétrica em emissão de dióxido de carbono (CO2) e exibir ao usuário.|
| Objetivo do Teste | Verificar se é possível o cadastro de aparelhos eletrônicos com a informação sobre potência e consumo para possibilitar o cálculo de energia elétrica associado, exibindo ao final ao o resultado ao usuário; Verificar a conversão do custo de energia elétrica em dióxido de carbono e exibir o resultado ao usuário.|
| Passos | 1. Acessar o navegador; 2. Informar o endereço do site; 3. Fazer cadastro ou, se já tiver, realizar o login; 4. Ser direcionado para página inicial; 5. Optar por calcular o consumo do aparelho ou acessar o histórico; 6. Ao optar por realizar o cálculo, ser direcionado para a página de cálculo.|
| Critérios de êxito | Cadastrar os aparelhos eletrônicos, incluindo sua potência e tempo de uso e obter o cálculo do consumo de energia e de dióxido de carbono. |
| Responsável pela elaborar do caso de Teste | Paloma |

<br>
 
|Caso de Teste    | CT-08 - Verificar a Tela de Resultados |
|:---|:---|
| Requisitos Associados | RF-05: O sistema deve converter o valor do consumo de energia elétrica e emissão de dióxido de carbono (CO2) e exibir ao usuário. RF-07 O sistema deverá permitir que o usuário tenha acesso a um histórico de seus últimos resultados. |
| Passos | 1.Acessar o navegador. 2.Informar o endereço do site. 3.Visualizar a página Home. 4.Clicar em “Login”, no menu. 5.Preencher seus dados e clicar em “Acessar”. 6.Clicar em calcular na página de Boas-vindas. 7.Preencher os dados para cálculo. 8.O resultado irá aparecer na página de resultados.|
| Critérios de êxito | Após preencher os dados necessário na Página de Cálculo, deverá aparecer os resultador de consumo de energia elétrica e a relação de emissão de dióxido de carbono (CO2). |
| Responsável pela elaborar do caso de Teste | Jéssica |
<br>
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
