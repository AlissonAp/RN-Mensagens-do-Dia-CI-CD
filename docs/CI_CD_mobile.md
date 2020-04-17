<h1>CI/CD Mobile</h1>


<b>Introdução</b>

Na atualidade, as empresas estão buscando cada vez mais a eficiência de seus processos de produção de software, dessa forma, processos de integração contínua e deploy contínuo, tem ganhado força, ainda mais quando o assunto são softwares específicos para smartphones, pois nesses casos, esse processo envolve a publicação dos apps em lojas das fabricantes para disponibilização do software, sendo assim, esse processo pode se tornar complexo por necessitar a dependência de uma pessoa para realizar a execução do mesmo.

<b>Desenvolvimento</b>

Pensando em solucionar o problema de processos de desenvolvimento de softwares mobile, pensamos em criar um arquitetura simples, porém, que atende as necessidades de integração e publicação de software. Para isso iremos seguir como base a arquitetura ilustrada na figura abaixo.

<p align="center">
  <img src="https://github.com/AlissonAp/RN-Mensagens-do-Dia-CI-CD/blob/master/docs/Images_CI_CD/Arquitetura.png">
</p>

Como base para nossa arquitetura de CI/CD, escolhemos uma ferramenta SAAS chamada Bitrise, ela possui embutida dentro dela processos para compilação de aplicativos mobile para IOS e Android, sem precisar manter nenhum hardware para geração dos builds, assim como, possui integração com fastlane próprio, usado para armazenamento das configurações de deploy na Play Store, tornando assim o processo centralizado em uma única ferramenta.

Para testarmos a nossa arquitetura, criamos um aplicativo em React Native de mensagens do dia, que tem por principal objetivo gerar mensagens de motivação a cada clique em um botão. Na imagem abaixo é possível ver uma captura de tela do aplicativo criado.

<p align="center">
  <img width="200" height="400" src="https://github.com/AlissonAp/RN-Mensagens-do-Dia-CI-CD/blob/master/docs/Images_CI_CD/App.jpg">
</p>

O repositório em questão possui 2 branchs, a master e a develop, e a automatização do processo de testes, build e deploy é disparada automaticamente no Bitrise, toda vez que um pull request é aprovado em alguma dessas branchs. Caso o Pull Request aprovado for impactado na branch DEVELOP o Workflow de build executado será o Alfa, liberando uma nova versão de testes para testadores específicos configurados no Play Store Console.

Já, caso o Pull Request aprovado for impactado na branch MASTER, o bitrise irá executar o Workflow de Produção, realizando os testes configurados no React Native pela biblioteca Jest, executando o comando assembleRelease por meio do Gradlew do Android, assinando a APK gerado com um certificado válido e por fim, publicando a nova APK na loja de aplicativos, Play Store. Na figura abaixo é possível ver alguns dos passos configurados e executados pelo Bitrise.

<p align="center">
  <img width="420" height="400" src="https://github.com/AlissonAp/RN-Mensagens-do-Dia-CI-CD/blob/master/docs/Images_CI_CD/Workflow.png">
</p>

<b>Caso de exemplo</b>

Como forma de demonstrar o uso deste fluxo de CI/CD vamos imaginar o seguinte cenário. Foi solicitado pela área de negócio que fossem adicionadas novas mensagens do dia ao aplicativo, para atualizar o conteúdo com mensagens mais novas e atualizadas. Desta forma o desenvolvedor, criou uma nova branch a partir da branch DEVELOP, com o seguinte nome feature/adiciona-novas-mensagens-dia.

Após a criação da branch o desenvolvedor faz checkout da mesma por meio do comando git checkout … e então adiciona as novas mensagens solicitadas pela área do negócio. Com a finalização do desenvolvimento, o mesmo executa o comando git add . para adicionar na área de alteração os arquivos alterados, e depois executa um commit, git commit -m “Adicionado novas mensagens do dia”, finalizando com um comando de git push, para enviar as modificações ao repositório remoto.

A partir de agora o desenvolvedor não precisa mais se preocupar em como os ajustes que ele realizou vão chegar até as pessoas responsáveis da área de negócio para ser testado. Este processo será feito automaticamente por meio de CI/CD com a ferramenta Bitrise e por meio da aprovação do Pull Request solicitado pelo desenvolvedor. Geralmente quem faz essa aprovação é um outro desenvolvedor mais experiente no time, o mesmo irá verificar o código desenvolvido e se estiver de acordo irá criar e aprovar o Pull Request para a branch DEVELOP. Conforme imagem abaixo.


<p align="center">
  <img src="https://github.com/AlissonAp/RN-Mensagens-do-Dia-CI-CD/blob/master/docs/Images_CI_CD/PullRequest.png">
</p>

Neste caso, no momento em que for criado e aprovado o Pull Request para a branch develop se iniciará o processo de build no Bitrise, conforme é possível ver na imagem abaixo.

<p align="center">
  <img src="https://github.com/AlissonAp/RN-Mensagens-do-Dia-CI-CD/blob/master/docs/Images_CI_CD/RunningWorkflow.png">
</p>

Como pode-se ver, no processo de build é mostrado qual a origem do disparo deste build. Este, se originou por meio da branch feature/adiciona-novas-mensagens-dia que foi aprovada junto a branch DEVELOP. Também é possível ver o Workflow que será executado, neste caso por ter sido uma alteração na branch DEVELOP, será o Workflow Alfa, que irá liberar uma nova versão na playstore, para pessoas específicas, da área de negócio por exemplo.

<b>Conclusão</b>

Por meio deste trabalho foi possível perceber como a automatização do processo de build, teste e deploy facilita a vida de toda a equipe do projeto, fazendo com que os mesmos possam ocupar o seu tempo pensando em melhorias para o produto em si, e não perder tempo com tarefas de build, testes e publicação de aplicativos na loja. Sabemos que a publicação de aplicativos geralmente é demorada, e a cada build é preciso gerar certificados novos para assinar o APK. Com a utilização de CI/CD juntamente com a ferramenta Bitrise, esse processo pode ser automatizado e de uma forma muito prática e fácil de configurar.

Acreditamos que sempre é preciso simplificar processos, independente da área, e para a publicação de aplicativos mobile em lojas de aplicativos essa simplificação é recomendável.

