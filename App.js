/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import Lista from './src/components/Lista';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Text,
  StatusBar,
} from 'react-native';

const App: () => React$Node = () => {
  const [mensagemDia, setMensagemDia] = useState('');
  const [mensagensLidas, setMensagensLidas] = useState([]);
  const [mensagens, setMensagens] = useState([
    'Acredite que você pode, assim, você já estará no meio do caminho.',
    'Otimismo é esperar pelo melhor. Confiança é saber lidar com o pior.',
    'Pedras no caminho? Eu guardo todas. Um dia, vou construir um castelo.',
    'O destino é moldado pela força do pensamento. Pense sempre positivo.',
    'É no fundo do poço que se cava o posso.',
    'Os homens de sucesso são doadores e não tomadores de energia positiva.',
    'Para encontrar o seu equilíbrio, na maioria das vezes, é preciso antes perdê-lo.',
    'Promova uma faxina mental com afirmações e pensamentos positivos.',
    'Busque ser feliz, sem ocultar a felicidade de ninguém.',
    'Quanto mais você se supera, mais motivado fica.',
    'É pra frente que se anda, é pra cima que se olha e é lutando que se conquista.',
    'As melhores coisas da vida são gratuitas: abraços, sorrisos, amigos, beijos, família, dormir, amor, risos e boas lembranças.',
    'Treine sua mente para ver o lado bom de qualquer situação.',
    'Se jogue no que te faz sorrir.',
    'A força de dentro é maior que todos os ventos contrários.',
    'Ninguém, além de você, está no controle da sua felicidade.',
    'É no agir que a vida muda de forma.',
    'A vida não precisa ser perfeita para ser maravilhosa.',
    'Bons pensamentos atraem acontecimentos magníficos.',
    'Espalhe amor, alegria, espiritualidade, energia boa e o que mais você puder.',
    'A diferença entre o possível e o impossível está no tamanho da sua determinação.',
    'Minha meta é dez. Nove e meio nem rola.',
    'Amar a si próprio é o início de um romance para toda a vida.',
    'Nunca é tarde para ter um novo objetivo ou sonhar um sonho novo.',
    'E para os dias sem cor, guarda chuva de flor.',
    'Os sonhos antecedem as conquistas.',
    'Autoconfiança é o primeiro passo para se atingir o sucesso.',
    'De negativo, só quero a barriga.',
    'Um elogio sincero pode mudar o seu dia. Que tal mudar o dia de alguém hoje.',
    'E que nossa vida seja repleta daquilo que nos faz bem.',
    'Que a felicidade faça a gente de gato e sapato.',
    'Livrai-me de toda negatividade daqueles que não sabem o quanto é bom sorrir.',
    'A vida é feita por capítulos. Um capítulo ruim não precisa definir o final da história.',
    'Caiu? Levante-se. E não derrube quem te derrubou, ele vai cair sozinho.',
    'Que a vida seja leve, a risada sem culpa e o amor sem medo.',
    'A vida é de quem se atreve a viver.',
    'O mundo fica mais bonito quando se carrega coisas boas no peito.',
    'Grandes mudanças acontecem de dentro pra fora.',
    'Aprenda com o passado, viva para o presente, acredite no futuro.',
    'Pendure a alma no varal e deixe que as coisas ruins evaporem.',
    'O chocolate até pode ser meio amargo, a vida não.',
    'Quem tem limites é município.',
    'Não invente desculpas, invente soluções.',
    'Ser otimista é uma escolha que tem como consequência uma vida cheia de positividade.',
    'Cada sonho que você deixa pra trás, é um pedaço do seu futuro que deixa de existir.',
    'Até as torres mais altas começaram do chão.',
    'Oportunidades não surgem. É você quem as cria.',
    'No fim, tudo dá certo. Se não deu certo, é porque ainda não chegou ao fim.',
    'O pessimista reclama do vento e o otimista ajusta as velas.',
    'Trabalhe duro e em silêncio. Deixe que seu sucesso faça o barulho.',
    'Tudo o que você sempre quis está do outro lado da linha do medo.',
    'Nós nos tornamos aquilo em que pensamos.',
    'Insanidade é continuar fazendo sempre a mesma coisa e esperar resultados diferentes.',
    'Algumas pessoas sonham com o sucesso, enquanto outras acordam e trabalham duro para isso.',
    'Escolha um trabalho de que gostes, e não terás que trabalhar nem um dia na sua vida.',
    'Quem deseja ver o arco-íris precisa aprender a gostar da chuva.',
    'O otimismo representa meia batalha vencida.',
    'Ser feliz sem motivo é a mais autêntica forma de felicidade.',
    'Viver é a coisa mais rara do mundo. A maioria das pessoas apenas existe.',
    'Não existe um caminho para a felicidade. A felicidade é o caminho.',
    'Apressa-te a viver bem e pense que cada dia é, por si só, uma vida.',
    'Aprenda como se você fosse viver para sempre. Viva como se você fosse morrer amanhã.',
    'Quando você quer alguma coisa, todo o universo conspira para que você realize o seu desejo.',
    'A felicidade, às vezes, é uma bênção, mas geralmente é uma conquista.',
    'As falhas de hoje são os degraus para o sucesso de amanhã.',
    'Mantenha sempre o otimismo, porque não existe escuridão que dure para sempre.',
    'A alegria evita mil males e prolonga a vida.',
    'Viver é desenhar sem borracha.',
    'O otimismo é a fé em ação. Nada se pode levar a efeito sem otimismo.',
    'Enxergar o lado bom das coisas é uma escolha.',
    'Levar a vida a sério não tem a menor graça.',
    'A neve e as tempestades matam as flores, mas nada podem contra as sementes.',
    'Eu continuo porque a chuva não cai só sobre mim.',
    'Há dias que a gente vence só com um sorriso.',
    'Prepare a alma que a semana está cheia de energia boa.',
    'Encher o coração de coisas boas é a melhor forma de se proteger contra o mal.',
    'O melhor está por vir.',
    'E na conta da nossa vida, que o saldo seja sempre positivo.',
    'Concentre toda sua energia naquilo que você mais acredita e deseja.',
    'Não economize sorrisos. Esse é o segredo do seu dia ficar mais lindo.',
    'Não é acaso. Você merece tudo de bom que há na sua vida.',
    'Sorrisos só apontam para cima.',
    'Fique atento. Coisas boas acontecem ao seu redor todos os dias.',
    'Limpe a alma daquilo que te intoxica.',
    'Faça da sua vida um filtro da negatividade e absorva os sentimentos bons.',
    'Somos o melhor que podemos nas condições que temos.',
    'Alague seu coração de esperanças, mas não deixe que ele se afogue nelas.',
    'Você não só tem o direito de ser feliz como também tem a obrigação de lutar para alcançar a felicidade.',
    'Mantenha o espírito positivo e acredite que aquilo que vai embora é para dar lugar a algo melhor.',
    'A procrastinação é o ladrão do tempo.',
    'Os tristes acham que o vento geme, os alegres acham que ele canta.',
    'Bom mesmo é ter problema na cabeça, sorriso na boca e paz no coração.',
    'Uma lição de otimismo é a melhor herança que um pai pode deixar aos seus filhos.',
    'Otimismo é a chave, motivação a porta e potencial o caminho para a grande conquista que se chama sonho.',
    'Ninguém pode ser feliz o tempo inteiro, mas nada nos impede de manter o otimismo.',
    'Cultivar amizades verdadeiras ajuda a recarregar a vida com ânimo e otimismo.',
    'Oriente sua mente e viva intensamente.',
    'Sintonize a positividade no rádio da vida.',
    'Vai dar tudo certo.',
    'Que suas próximas horas sejam carregadas de pensamentos positivos e muita paz no coração.',
  ]);

  useEffect(() => {
    gerarNovaMensagem();
  }, []);

  const gerarNovaMensagem = () => {
    const item = Math.floor(Math.random() * mensagens.length);
    setMensagemDia(mensagens[item]);
    setMensagensLidas([...mensagensLidas, mensagens[item]]);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Mensagem do dia</Text>
              <Text style={styles.sectionDescription}>{mensagemDia}</Text>
            </View>
            <View style={styles.sectionContainer}></View>
            <View style={styles.sectionContainer}>
              <Button
                title="Nova mensagem"
                onPress={() => gerarNovaMensagem()}></Button>
            </View>

            <Lista mensagens={mensagensLidas} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'gray',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: 'black',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
