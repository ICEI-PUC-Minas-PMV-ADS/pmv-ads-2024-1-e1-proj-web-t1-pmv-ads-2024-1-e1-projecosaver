# Programação de Funcionalidades
<div align="justify">
<span style="color: blue ">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-ecosaver/blob/main/documents/02_especificacao_do_projeto.md"> Especificação do Projeto</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-ecosaver/blob/main/documents/03_metodologia.md"> Metodologia</a>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-ecosaver/blob/main/documents/04_projeto_de_interface.md"> Projeto de Interface</a>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-ecosaver/blob/main/documents/05_template_padrao.md"> Template Padrão. </a>
</div>

## 01 - Tela: Home 

<div align="justify">
- Responsável: Thiago
<br>
A tela Home é a página inicial. Nela, o usuário pode se cadastrar através da opção do menu "Cadastre-se", como também pode realizar o login através da opção "Login". Há também a possibilidade do usuário recuperar a senha através da opção "esqueceu a senha?". As estruturas de dados foram baseadas em HTML, CSS e JS. Abaixo segue um exemplo da tela Home:
</div>

<div  align="center">
<br>
<img  src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-ecosaver/assets/145709183/104d6015-1372-461f-91d2-d5f5cce87e94" alt="Tela Home" width="500">
<br>
Figura 01 – Exemplo da Tela Home
</div>

### Requisito atendido.
<div align="justify">
RF-001: O site deve permitir ao usuário cadastrar uma conta e realizar o Login.
<br>
</div>

#### Artefatos da funcionalidade
<div align="justify">
● home.html
<br>
● home.css
<br>
● home.js
<br>
● navbardev.js
<br>
● navbardev.html
<br>
● footer_mobile.js
<br>
● footer.html
</div>

#### Estrutura de Dados
<div align="justify">
A página ainda não possui estrutura de dados, visto que aguarda implementação do JavScrip.


#### Instruções de acesso
<div align="justify">
Abra um navegador de Internet e informe a seguinte URL: (https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-ecosaver/tree/main/codigo-fonte/assets/paginas/01_home)
<br>
Ao clicar em “Cadastre-se” no canto superior direito da tela, terá acesso a página de cadastro.
<br>
</div>

## 02 - Tela: Cadastro

<div align="justify">
- Responsável: Rafael
<br>
A tela de cadastro de usuários é onde novos membros podem se inscrever para acessar os recursos da plataforma. Aqui, eles são solicitados a preencher informações básicas, como nome, endereço de e-mail e uma senha segura. 

Após preencher os campos necessários, os usuários podem clicar em um botão de envio para concluir o processo de cadastro. Se os dados fornecidos forem válidos, o sistema irá registrar o novo usuário e redirecioná-lo para a página inicial, onde ele pode fazer login com suas credenciais recém-criadas. Abaixo segue um exemplo da tela Cadastro:
</div>
	
<div  align="center">
<br>
<img  src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-ecosaver/assets/145709183/6ede1f2f-3c69-4248-94e9-0bb87abcfb64" alt="Tela Cadastro" width="500"">
<br>
Figura 02 – Exemplo da Tela Cadastro
</div>

### Requisito atendido.
<div align="justify">
RF-01	O sistema deve permitir uma funcionalidade de cadastro e login aos usuários, para que possam acessar suas informações pessoais.
<br>
</div>

#### Artefatos da funcionalidade
<div align="justify">
● cadastro.html
<br>
● cadastro.js
<br>
● cadastro.css
<br>
● navbardev.js
<br>
● navbardev.html
<br>
● footer_mobile.js
<br>	
● footer.html
<br>
</div:>

#### Estrutura de Dados
usuarioLogado:
- idUsuario: NUMBER (primare key)
- nome: VARCHAR(64)
- email: VARCHAR(100)
- senha: VARCHAR(100)

#### Instruções de acesso
<div align="justify">
Abra um navegador de Internet e informe a seguinte URL: (https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-ecosaver/tree/main/codigo-fonte/assets/paginas/02_cadastro).
<br>
Ao clicar em “Cadastro” na tela paginia inicial, terá acesso a página de cadastro ou em ao clicar em “Não possui um cadastro” na tela de login, terá acesso a página de cadastro.
<hr>
</div>

## 03 - Tela: Login
<div align="justify">
- Responsável: Rafael
<br>
A tela de login é onde os usuários registrados podem acessar sua conta. Aqui, eles são solicitados a inserir seu endereço de e-mail e senha cadastrados anteriormente.

Após preencher os campos de login, os usuários podem clicar em um botão de login para acessar sua conta. Se as credenciais estiverem corretas, o sistema irá autenticar o usuário e redirecioná-lo para a página inicial, onde ele pode acessar os recursos disponíveis para usuários registrados. Abaixo segue um exemplo da tela de Login:
</div>
	
<div  align="center">
<br>
<img  src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-ecosaver/assets/145709183/efa55f92-6cdd-4a38-85a7-04ee4bb0da06" alt="Tela Login" width="500"">
<br>
Figura 03 – Exemplo da Tela Login
</div>

### Requisito atendido.
<div align="justify">
RF-01	O sistema deve permitir uma funcionalidade de cadastro e login aos usuários, para que possam acessar suas informações pessoais.<br>
</div>

#### Artefatos da funcionalidade
<div align="justify">
● login.html
<br>
● login.css
<br>
● login.js
<br>
● navbardev.js
<br>
● navbardev.html
<br>
● footer_mobile.js
<br>
● footer.html
<b
</div>


#### Estrutura de Dados
usuarioLogado:
- idUsuario: NUMBER (primare key)
- nome: VARCHAR(64)
- email: VARCHAR(100)
- senha: VARCHAR(100)

#### Instruções de acesso

Ao clicar em “Login” na tela paginia inicial, terá acesso a página de login.
<hr>

## 04 - Tela: Sobre

<div align="justify">
- Responsável: Jéssica
<br>
A tela Sobre permite ao usuário ou visitante conhecer sobre o a história do projeto EcoSaver e sobre a nossa equipe. Possui uma imagem e o ícone do GitHub. O ícone permitirá acesso ao nosso repositório no GitHub ao ser clicado, abrindo o repositório em uma nova aba. As estruturas de dados foram baseadas em HTML, CSS e JS, sendo o JS contido na Navbar e Footer. Abaixo segue um exemplo da tela Sobre:
</div>
	
<div  align="center">
<br>
<img  src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-ecosaver/assets/145709183/38ff89fe-45a1-4ebe-92e0-ebafe6c9966c" alt="Tela Sobre" width="500">
<br>
Figura 04 – Exemplo da Tela Sobre.
</div>

### Requisito atendido.
<div align="justify">
RNF-02	A aplicação deverá ser responsiva permitindo a visualização em dispositivos diversos de forma adequada.	Alta.
<br>
</div>

#### Artefatos da funcionalidade
<div align="justify">
● sobre.html
<br>
● sobre.css
<br>
● navbardev.js
<br>
● footer_mobile.js
<br>
</div>

#### Estrutura de Dados
https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-ecosaver/tree/main/codigo-fonte/assets/paginas/04_sobre

#### Instruções de acesso

Abra um navegador de Internet e informe a seguinte URL: xxxxxxxxx

Ao clicar em "SOBRE NÓS" na navbar terá acesso a página.

<hr>

## 05 - Tela: Notícias

<div align="justify">
- Responsável: Anderson
<br>
A tela de Notícias permite ao usuário ou visitante ter acesso às últimas notícias sobre o tema de energia sustentável e economia de energia. A página foi feita em HTML, CSS e JS.
</div>
	
<div  align="center">
<br>
<img  src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-ecosaver/assets/145709183/c638b7ce-54bc-4bd2-8274-9b221f4a2c89" alt="Tela Notícias" width="500"">
<br>
Figura 05 – Exemplo da Tela Notícias
</div>

### Requisito atendido.
<div align="justify">
RNF-06 O sistema deverá fornecer links informativos para recursos adicionais relacionados à eficiência energética. Alta.
</div>

#### Artefatos da funcionalidade
<div align="justify">
● noticias.html
<br>
● noticias.css
<br>
</div>

#### Estrutura de Dados
https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-ecosaver/tree/main/codigo-fonte/assets/paginas/05_noticias

#### Instruções de acesso

Abra um navegador de Internet e informe a seguinte URL: xxxxxxxxx

Ao clicar em "NOTÍCIAS" na navbar terá acesso a página.

<hr>

## 06 - Tela: Página Inicial

<div align="justify">
- Responsável: Paloma
<br>
A partir do momento em que o usuário realiza o login ele é direcionado para a tela inicial. Na tela inicial, o usuário tem a opção de realizar o cálculo do consumo de seu aparelho ou, ainda, de acessar um histórico de seus últimos resultados. As estruturas de dados foram baseadas em HTML, CSS e JS. 
Exemplo da tela inicial:
</div>
	
<div  align="center">
<br>
<img  src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-ecosaver/assets/145709183/d14ed79d-a84d-42a0-8d0e-7ed50cd1f0d1" alt="Tela Pagina Inicial" width="500"">
<br>
Figura 06 – Exemplo da Tela Página Inicial
</div>

### Requisito atendido.
<div align="justify">
RF-03: O sistema deverá permitir que o usuário opte por realizar um novo cálculo ou ir diretamente ao histórico de resultados.
<br>
</div>

### Artefatos da funcionalidade
<div align="justify">
● pagina_inicial.html
<br>
● pagina_inicial.css
<br>
● navbardev.css
<br>
● navbardev.js
<br>
</div>

### Estrutura de Dados
<div align="justify">
A página ainda não possui estrutura de dados. Com a aplicação do JavaScript a tela será capaz de armazenar e exibir o nome do usuário logado. 
<br>
</div>

### Instruções de acesso
<div align="justify">
Abra um navegador de Internet e informe a seguinte URL: (https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-ecosaver/blob/main/codigo-fonte/assets/paginas/06_pagina_inicial/pagina_inicial.html).
<br><br>
Após fazer o login, na página de cadastro, o usuário será direcionado para a página inicial, ocasião em que pode optar por realizar um novo cálculo de consumo de seu aparelho ou, ainda, em ser direcionado para uma página de histórico dos resultados. 
<br>
</div>

## 07 - Tela: Página Cálculo

<div align="justify">
- Responsável: Danillo
<br>
Ao ser direcionado para a página de cálculo, o usuário deve preencher os dados obrigatórios para o cálculo de consumo de energia. Ao clicar em Calcular, será redirecionado para a tela de Resultado.
</div>
	
<div  align="center">
<br>
<img  src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-ecosaver/assets/145709183/c76e4bdb-a041-45cb-9fdd-085610be75c6" alt="Tela Pagina Calculo" width="500"">
<br>
Figura 07 – Exemplo da Tela de Cálculo
</div>

### Requisito atendido.
<div align="justify">
O sistema deve calcular o consumo do aparelho em kWh por dia ou por mês e o quanto isso implica em preço e valores e exibir para o usuário.
O sistema deve converter o valor do consumo de energia elétrica em emissão de dióxido de carbono (CO2) e exibir ao usuário.
<br>
</div>

#### Artefatos da funcionalidade
<div align="justify">
● pagina_calculo.html
<br>
● pagina_calculo.css
<br>
● navbardev.js
<br>
● navbardev.html
<br>
● footer_mobile.js
<br>
● footer.html
</div>
#### Estrutura de Dados
https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-ecosaver/tree/main/codigo-fonte/assets/paginas/07_pagina_calculo

#### Instruções de acesso

Abra um navegador de Internet e informe a seguinte URL: (https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-ecosaver/blob/main/codigo-fonte/assets/paginas/07_pagina_calculo/pagina_calculo.html).
<br><br>
Após ser direcionado para a página de cálculo, o usuário tem a opção de calcular seus aparelhos, ou navegar pelo site através dos links disponíveis na navbar. 
<br>
</div>

<hr>

## 08 - Tela: Resultado

<div align="justify">
- Responsável: Danillo
<br>
Ao ser direcionado para a página de resultado, o usuário terá acesso aos resultados de consumo de energia e do seu impacto na emissão de CO2 do aparelho escolhido. O usuário tem a opção de calcular novos aparelhos ou acessar seu histórico. 
</div>
	
<div  align="center">
<br>
<img  src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-ecosaver/assets/145709183/a3f058ca-3895-4e42-a586-4162c623ecca" alt="Tela Resultado" width="500"">
<br>
Figura 08 – Exemplo da Tela Resultado.
</div>

### Requisito atendido.
<div align="justify">
O sistema deverá apresentar os resultados de custo e emissão de CO2.
Deve também permitir que o usuário opte por realizar um novo cálculo ou ir diretamente ao histórico de resultados.
<br>
</div>

#### Artefatos da funcionalidade
<div align="justify">
● resultado.html
<br>
● resultado.css
<br>
● navbardev.js
<br>
● navbardev.html
<br>
● footer_mobile.js
<br>
● footer.html

#### Estrutura de Dados

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-ecosaver/tree/main/codigo-fonte/assets/paginas/08_resultado

#### Instruções de acesso

Abra um navegador de Internet e informe a seguinte URL: (https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-ecosaver/blob/main/codigo-fonte/assets/paginas/08_resultado/resultado.html).
<br><br>
Após ser direcionado para a página de resultado, o usuário tem a opção de calcular outro aparelho, ir diretamente para o histórico, ou navegar pelo site através dos links na navbar. 
<br>
</div>

<hr>

## 09 - Tela: Histórico

<div align="justify">
- Responsável: Jéssica
<br>
A tela Histórico permitirá ao usuário ver os eletrodomésticos que já foram calculados pelo seu login. Além disso permitirá ao usuário escolher do mais recente ao mais antigo ou do mais antigo ao mais recente. Na parte inferior da tela o usuário terá a opção de voltar ao início (tela Pagina Inicial). As estruturas de dados foram baseadas em HTML, CSS e JS. Abaixo segue um exemplo da tela Histórico:
</div>
	
<div  align="center">
<br>
<img  src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-ecosaver/assets/145709183/756b16a3-b296-40d0-bfbe-14d37089cda4" alt="Tela Histórico" width="500">
<br>
Figura 09 – Exemplo da Tela Histórico.
</div>

### Requisito atendido.
<div align="justify">
RF-07	O sistema deverá permitir que o usuário tenha acesso a um histórico de seus últimos resultados.
<br>
</div>

#### Artefatos da funcionalidade
<div align="justify">
● historico.html
<br>
● historico.css
<br>
● historico.js
<br>
● navbardev.js
<br>
● footer_mobile.js
<br>
</div>

#### Estrutura de Dados
https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-ecosaver/tree/main/codigo-fonte/assets/paginas/09_historico

#### Instruções de acesso

Abra um navegador de Internet e informe a seguinte URL: xxxxxxxxx

Para acessar a tela histórico o usuário terá que fazer o login e na página inicial clicar no botão "HISTÓRICO".


