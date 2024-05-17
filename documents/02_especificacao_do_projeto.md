# Especificações do Projeto

## Perfis de Usuário 
<div align="justify">

<table>
<tbody>
<tr>
<th colspan="2" align="center"> Perfil 1: Consumidor consciente </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">
Pessoa preocupada com o impacto ambiental de seu consumo de energia elétrica.
</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
1.  Obter uma ferramenta para que consiga cadastrar informações sobre seus aparelhos eletrônicos de maneira individualizada;
<br/>
2.  Saber quanto cada aparelho eletrônico representa na fatura de luz do consumidor;
<br/>
3.  A partir da obtenção de informações sobre o consumo de energia elétrica, ter acesso a materiais educativos e auxiliares para a adoção de medidas que impliquem a redução do consumo de energia.
<br/>
4.  Possuir uma ferramenta que consiga realizar a conversão do gasto energético em CO2, de modo que seja possível a previsão e o conhecimento da emissão de carbono com base no consumo. 
<br/>
</td>
</tr>
</tbody>
</table>

<br/>

<table>
<tbody>
<tr>
<th colspan="2" align="center"> Perfil 2: Funcionário
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">
Funcionário responsável pelo cadastramento e monitoramento do consumo de energia. 
</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
1.  Cadastrar informações sobre aparelhos eletrônicos como potência e tempo de uso;
<br/>
2.  Visualizar o consumo de energia elétrica por aparelho eletrônico através de uma ferramenta simples, que não apresente complexidade quanto aos cadastros;
<br/>
3.  Ter informações sobre o consumo de energia e conversão em CO2 de forma individualizada por dispositivo eletrônico, a fim de subsidiar meus relatórios. 
<br/>
</td>
</tr>
</tbody>
</table>

<br/>

<table>
<tbody>
<tr>
<th colspan="2" align="center"> Perfil 3: Gestor
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">
Indivíduo proprietário de um pequeno negócio
</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
1.  Maior previsibilidade quanto aos custos operacionais com energia elétrica;
<br/>
2.  Demonstrar compromisso com a sustentabilidade e redução do impacto ambiental de suas operações, de modo a implementar um “marketing verde”. 
<br/>
3.  Reduzir despesas com energia elétrica e maximizar o caixa da empresa. 
<br/>
</td>
</tr>
</tbody>
</table>
<br/>
</div>

## Histórias de Usuários
<div align="justify">
Partindo das informações que as Personas apresentaram, chegamos à conclusão das seguintes histórias de usuário relevantes aos problemas identificados.
<br/><br/>
  
|Eu como | Quero/Preciso |Para  |
|--------------------|------------------------------------|----------------------------------------|
|Consumidor Consciente | Inserir informações detalhadas sobre meus dispositivos eletrônicos, selecionar o tipo do aparelho e fornecer informações sobre os dias e horas de uso, pois gostaria de uma análise detalhada do meu gasto de energia elétrica, já que a fatura mensal apenas me fornece a informação como um todo e não individualizada por aparelho. | Ao descobrir quanto cada aparelho consome, vou conseguir estabelecer estratégias para reduzir o consumo e metas de uso do aparelho, de modo a limitar seu funcionamento. Isso irá me auxiliar tanto no aspecto financeiro, pois estarei ciente dos custos associados aos gastos com a conta de luz, a fim de que eu possa economizar, além de me fornecer informações sobre a utilização de cada aparelho (como por exemplo televisão e computador), a fim de que seja possível uma avaliação sobre o consumo. |
|Consumidor consciente  | Uma ferramenta que informe o custo associado de Co2 com base no meu consumo de energia elétrica, pois a conversão do valor total do gasto (considerando todos os aparelhos) não me possibilitaria uma análise mais detalhada e individualizada. | Entender como meu consumo afeta diretamente o meio ambiente e tomar medidas mais conscientes para reduzir meu impacto ambiental, contribuindo para a sustentabilidade global e o bem-estar das futuras gerações. |
| Consumidor consciente | Uma ferramenta que me forneça links informativos sobre o consumo consciente de energia. | Aumentar meu conhecimento sobre o consumo de energia e as alternativas para sua redução, como também o dimensionamento do impacto desse consumo no meio ambiente. |
| Funcionário  | Acesso a uma plataforma onde possa inserir informações sobre os dispositivos eletrônicos utilizados pela minha equipe, como quantidade, tipo e tempo de uso, e obter informações sobre o consumo de cada aparelho elétrico e o quanto isso representa em CO2.| Auxiliar na definição de metas e métricas que minha equipe e eu podemos alcançar, a fim de reduzir o consumo energético e, consequentemente, a emissão de CO2 da empresa.|
|Funcionário | Obter resultados individuais do consumo de cada dispositivo eletrônico e o quanto isso representa em CO2.| Auxiliar na hora da elaboração de relatórios detalhados à diretoria, onde poderei discriminar as informações de consumo de modo detalhado, para demonstrar nosso avanço e desenvolvimento. Com as informações detalhadas vou conseguir contribuir para levar informações aos meus superiores sobre o inventário de carbono da empresa, já que terei acesso à geração de CO2 associado ao consumo energético de cada dispositivo eletrônico. |
|Gestor | Uma plataforma para controlar os meus gastos com energia elétrica, através da análise detalhada do consumo de cada aparelho, mediante informações como tempo de uso e horas, para que eu possa visualizar o consumo mensal de energia elétrica da minha empresa associada a cada aparelho e utilização.| Gerenciar melhor meus custos operacionais, identificar oportunidades de economia de energia e reduzir despesas, através do estabelecimento de metas e maximizar o caixa da empresa.|
| Gestor | Um sistema que realizasse a conversão do gasto de energia elétrica de forma individualizada por aparelho, em CO2, pois gostaria de implementar medidas publicitárias de marketing verde da minha empresa, a fim de me destacar no meu segmento e conseguir mais clientes.| Demonstrar um compromisso com a sustentabilidade e a redução do impacto ambiental de minhas operações, a fim de atrair clientes que valorizam empresas ecologicamente conscientes e contribuir para um futuro mais sustentável.| 
</div>

## Requisitos

### Requisitos Funcionais
<div align="justify">

|     ID       |     Descrição                                                                                                                                                                     |     Prioridade    |
|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|
|     RF-01    |     O sistema deve permitir uma funcionalidade de cadastro e login aos usuários, para que possam acessar suas informações pessoais.            |     Média          |
|     RF-02    |     O sistema deve permitir ao usuário o cadastramento de aparelhos eletrônicos, onde o usuário poderá fornecer informações quanto ao tipo de aparelho potência, tempo estimado de uso e o valor do kWh da localidade desejada.                                                                                                     |     Alta          |
|     RF-03    |     O sistema deve calcular o consumo do aparelho em kWh por dia ou por mês e o quanto isso implica em preço e valores e exibir para o usuário.                                                                                              |     Alta          |
|     RF-04    |     O sistema deve converter o valor do consumo de energia elétrica em emissão de dióxido de carbono (CO2) e exibir ao usuário.                                                                                                                        |     Alta          |
|     RF-05    |     O sistema deverá fornecer links informativos para recursos adicionais relacionados à eficiência energética                                                                                                               |     Alta          |

**Prioridade: Alta / Média / Baixa.
<br/>
</div>

### Requisitos não Funcionais
<div align="justify">

|     ID        |     Descrição                                                                               |     Prioridade    |
|---------------|--------------------------------------------------------------------------------------------------------------------------|-------------------|
|     RNF-01    |     A aplicação deve ser publicada em ambiente acessível público na internet.    |     Alta          |
|     RNF-02    |     A aplicação deverá ser responsiva permitindo a visualização em dispositivos diversos de forma adequada.                                                               |     Alta          |
|     RNF-03    |     A aplicação deve ter um bom nível de contrate entre os elementos da tela.                          |     Média         |
|     RNF-04    |     A aplicação deve ser compatível com os navegadores. O site deve ser compatível com os principais navegadores do mercado: Google Chrome, Firefox e Microsoft Edge.                                                                                 |     Alta       |

**Prioridade: Alta / Média / Baixa.
<br/>
</div>

## Restrições
<div align="justify">
Restrições são obrigações claras e objetivas do projeto. A tabela a seguir mostra a lista de restrições do projeto.
<br/><br/>

|     ID        |     Descrição                                                                                           |
|---------------|---------------------------------------------------------------------------------------------------------|
|     RE-01     |     A equipe   não pode subcontratar o desenvolvimento do trabalho.                                     |
|     RE-02     |     O site não pode   conter conhecimentos além daqueles aprendidos durante o semestre.                 |

<br/>
</div>



