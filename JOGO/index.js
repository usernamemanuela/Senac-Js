let vida = 0;
let nome = prompt(
  "Por gentileza me informe o seu nome."
);

let inicio = alert(
  `Seja bem-vindo/a ${nome}, vamos começar sua trajetória rumo as olimpíadas!`
);

let instruçoes = alert(
  "Instruções: Para cada pergunta escolha apenas uma opção, e para cada sentença aperte em 'enter'. Aqui os seus pontos são essenciais e seu objetivo é chegar aos '100' pontos, referente a sua chegada nas olimpíadas! "
);

alert(`Atualmente você esta com ${vida} pontos`);
let humildade = 0;
alert(`Atualmente você esta com ${humildade} medalhas de humildade`);

//Primeira escolha do individuo
let primeiraEscolha = alert(
  "O ano é 2015, vc é uma moradora de rua e esta passando por dificuldades no seu país. Para você mudar essa situação tens que escolher uma opção apenas:"
);

let primeiraOpçao = Number(
  prompt(
    "1- Se mudar para Holanda em busca de uma melhor qualidade de vida. \n2- Ter esperança que sua situação ainda vai melhorar. "
  )
);

while (primeiraOpçao != 1) {
  alert("Reveja suas opções para um futuro melhor.");
  vida -= 10;
  primeiraOpçao = Number(
    prompt(
      "1- Se mudar para Holanda em busca de uma melhor qualidade de vida \n2- Ter esperança que sua situação ainda vai melhorar "
    )
  );
}

alert(`Bem-vindo/a a Holanda ${nome}!`);
vida += 10;
alert(`Atualmente você esta com ${vida} pontos`);

//Segunda escolha do individuo
let segundaEscolha = alert(
  "Seu futuro no taekwondo está em suas mãos, deseja começar o seus treinos? Para você dar rumo ao seu futuro tens que escolher uma opção apenas:"
);

let segundaOpçao = Number(
  prompt(
    "1- Mudar de esporte e começar a treinar do 0. \n2- Começar os treinos de taekwondo o antes possivel."
  )
);

while (segundaOpçao != 2) {
  alert(
    "Reveja suas opções para um futuro melhor, treine suas habilidades atuais."
  );
  vida -= 10;
  segundaOpçao = Number(
    prompt(
      "1- Mudar de esporte e começar a treinar do 0 \n2- Começar os treinos de taekwondo o antes possivel "
    )
  );
}

alert("Ótima escolha, logo logo seu futuro será disputando nas olimpíadas!");
vida += 10;
alert(`Atualmente você esta com ${vida} pontos`);

//Terceira escolha do individuo
let terceiraEscolha = alert(
  "Você teve seu primeiro treino, deseja expolorar seus limites e ir até a falha? Para você dar rumo ao seu futuro tens que escolher uma opção apenas:"
);

let terceiraOpçao = Number(
  prompt(
    "1- Desejo treinar sabendo dos meus limites para não me lesionar! \n2- Desejo um treino intenso, até a falha."
  )
);

while (terceiraOpçao != 1) {
  alert(
    "Você não respeitou os seus limites e se lesionou, reveja suas opções para um futuro melhor."
  );
  vida -= 10;
  terceiraOpçao = Number(
    prompt(
      "1- Desejo treinar sabendo dos meus limites para não me lesionar! \n2- Desejo um treino intenso, até a falha."
    )
  );
}

alert("Ótima escolha, você respeitou os seus limites e não se lesionou!");
vida += 10;
alert(`Atualmente você esta com ${vida} pontos`);

//Quarta escolha do indviduo
let quartaEscolha = alert(
  "Você foi convocado/a para o seu primeiro torneio no Aberto da Polônia e pode ganhar sua primeira medalha internacional! Para você dar rumo ao seu futuro tens que escolher uma opção apenas:"
);

let quartaOpçao = Number(
  prompt(
    "1- Não me sinto preparada, tenho receio em perder... \n2- Jamais irei perder a oportunidade de ganhar a minha primeira medalha internacional!"
  )
);

while (quartaOpçao != 2) {
  alert("Confie no seu potencial e reveja suas opções para um futuro melhor.");
  vida -= 10;
  quartaOpçao = Number(
    prompt(
      "1- Não me sinto preparada, tenho receio em perder... \n2- Jamais irei perder a oportunidade de ganhar a minha primeira medalha internacional! "
    )
  );
}

alert(
  "Ótima escolha, você conquistou sua primeira medalha internacional no Aberto da Polônia, mesmo enquanto vivia em um centro de asilo!"
);
vida += 10;
alert(`Atualmente você esta com ${vida} pontos`);

//Quinta escolha do individuo
let quintaEscolha = alert(
  "Seu parceiro de treino se lesionou, e precisa urgentemente da sua ajuda. Para você dar rumo ao seu futuro tens que escolher uma opção apenas:"
);

let quintaOpçao = Number(
  prompt(
    "1- Não penso duas vezes e vou na direção o ajudar! \n2- Me importo mais na minha carreira do que nas pessoas alheias."
  )
);

while (quintaOpçao != 1) {
  alert(
    "Trabalhe a humildade em si mesmo e reveja suas opções para um futuro melhor."
  );
  vida -= 10;
  quintaOpçao = Number(
    prompt(
      "1- Não penso duas vezes e vou na sa direção o ajudar! \n2- Me importo mais na minha carreira do que nas pessoas elheias."
    )
  );
}

alert("Ótima escolha, você conquistou sua primeira medalha de humildade!");
vida += 10;
humildade += 1;
alert(`Atualmente você esta com ${vida} pontos`);
alert(`Atualmente você esta com ${humildade} medalha de humildade`);

//Sexta escolha do individuo
let sextaEscolha = alert(
    "As olimpíadas estão cada vez mais perto, o ano agora é 2018, você tem a oportunidade de defender o seu título no aberto da Turquia. Uma ótima oportunidade! Para você mudar essa situação tem que escolher uma opção apenas: "
  );
  
  let sextaOpçao = Number(
    prompt(
      "1- Jamais deixaria uma oportunidade dessas passar, bora!  \n2- Viajar é muito chato, prefiro ficar na minha zona de conforto."
    )
  );
  
  while (sextaOpçao != 1) {
    alert(
      "Defender o seu título é muito importante, reveja suas opções para um futuro melhor."
    );
    vida -= 10;
    sextaOpçao = Number(
      prompt(
        "1- Jamais deixaria uma oportunidade dessas passar, bora!  \n2- Viajar é muito chato, prefiro ficar na minha zona de conforto."
      )
    );
  }
  
  alert(
     "Ótima escolha, alias é exatamente este o seu objetivo. Parabéns! Você ganhou uma medalha de prata."
  );
  vida += 10;
  alert(`Atualmente você esta com ${vida} pontos`);


//Sétima escolha do individuo
let setimaEscolha = alert(
  "Você irá enfrentar uma pandemia, esta muito triste e seus treinos serão cancelados, para você mudar sua linha de pensamento  tens que escolher uma opção apenas:"
);

let setimaOpcao = Number(
  prompt(
    "1- A pandemia só irá trazer perdas, desafios e quero ver tudo pelo pior lado pois não vejo nada de bom nisso \n2- Neste momento desafiador, eu preciso lembrar que a minha força interior é maior do que qualquer crise. Cada dia é uma oportunidade para me reinventar e encontrar novas formas de enfrentar as adversidades. Eu sou resiliente e capaz de superar qualquer obstáculo."
  )
);

while (setimaOpcao != 2) {
  alert( "Você pode ser mais positivo/a, não precisa ver as coisas pelo lado negativo! Reveja suas opções para um futuro melhor");
  vida -= 10;
  setimaOpcao = Number(
    prompt(
      "1- Neste momento desafiador, eu preciso lembrar que a minha força interior é maior do que qualquer crise. Cada dia é uma oportunidade para me reinventar e encontrar novas formas de enfrentar as adversidades. Eu sou resiliente e capaz de superar qualquer obstáculo.  \n2- A pandemia só irá trazer perdas, desafios e quero ver tudo pelo pior lado pois não vejo nada de bom nisso."
    )
  );
}

alert(
  "Ótima escolha, em um momento como este precisamos ter força!"
);
vida += 10;
alert(`Atualmente você esta com ${vida} pontos`);

//Oitava escolha do individuo
let oitavaEscolha = alert(
  "Sua preparação física nunca foi tão importante quanto agora, você esta a um passo de chegar as olimpíadas.  Para você dar rumo ao seu futuro tens que escolher uma opção apenas:"
);

let oitavaOpcao = Number(
  prompt(
    "1- Vou focar 100% na minha saúde e no meu físico, só comer coisas saudáveis para dar tudo certo! \n2- Não me importo com a minha alimentação, ja treino então se eu comer besteira nem vai muda nada."
  )
);

while (oitavaOpcao != 1) {
  alert(
    "Sua escolha não foi inteligente, reveja suas opções para um futuro melhor."
  );
  vida -= 10;
  oitavaOpcao = Number(
    prompt(
      "1- Vou focar 100% na minha saúde e no meu físico, só comer coisas saudáveis para dar tudo certo! \n2- Não me importo com a minha alimentação, ja treino então se eu comer besteira nem vai muda nada."
    )
  );
}

alert(
   "Ótima escolha, nada é mais importante quanto a sua preparação física neste momento!"
);
vida += 10;
alert(`Atualmente você esta com ${vida} pontos`);

//Nona escolha do individuo
let nonaEscolha = alert(
  " Você chegou finalmente as olimpíadas de paris 2024, não foi atoa toda a sua preparação. Mas sua adversária esta muito nervosa. Para dar rumo ao seu futuro tens que escolher uma opção apenas: "
);

let nonaOpcao = Number(
  prompt(
    "1- Deixar ela ficar nervosa pois assim tenho menos uma adversária para competir. \n2- Ir até ela e a ajudar a se acalmar, falar que também estou nervosa mas que ela também trabalhou muito para chegar ate aqui."
  )
);

while (nonaOpcao != 2) {
  alert(
    "Você tem que se colocar no lugar das pessoas, muitas das vezes você também pode precisar de ajuda! Reveja suas opções para um futuro melhor"
    );
  vida -= 10;
  nonaOpcao = Number(
    prompt(
      "1- Deixar ele ficar nervosa pois assim tenho menos uma adversária para competir. \n2- Ir até ela e a ajudar a se acalmar, falar que também estou nervosa mas que ela também trabalhou muito para chegar ate aqui."
    )
  );
}

alert(
    "Ótima escolha, sua humildade é uma de suas melhores qualidades!"
  
);
vida += 10;
humildade += 1;
alert(`Atualmente você esta com ${vida} pontos`);
alert(`Atualmente você esta com ${humildade} medalhas de humildade`);

//Décima escolha do individuo
let decimaEscolha = alert(
  "Você finalmente esta no pódio em teceiro lugar, depois de tanta luta e trabalho duro. Para dar rumo ao seu futuro tens que escolher uma opção apenas: "
);

let decimaOpcao = Number(
  prompt(
    "1- Me decepcionar pois queria a medalha de ouro e não aceito ficar em ultimo lugar.\n2- Ficar feliz pois mesmo ficando em último lugar, estou super orgulhosa de ter chegado até aqui. A experiência foi incrível e aprendi muito com cada momento. Isso não me desanima; pelo contrário, só me motiva a treinar ainda mais e voltar mais forte."
  )
);

while (decimaOpcao != 2) {
  alert(
    "Meus parabéns, se você chegou até aqui é por que realmente trabalhou duro e fez de tudo para chegar a esse pódio."
  );
  vida -= 10;
  decimaOpcao = Number(
    prompt(
      "1- Me decepcionar pois queria a medalha de ouro e não aceito ficar em ultimo lugar.\n2- Ficar feliz pois mesmo ficando em último lugar, estou super orgulhosa de ter chegado até aqui. A experiência foi incrível e aprendi muito com cada momento. Isso não me desanima; pelo contrário, só me motiva a treinar ainda mais e voltar mais forte."
    )
  );
}

if (vida >= 100) 
{
  alert("${nome} arrasou na competição e conquistou a vitória com um total de ${vida} pontos! Você superou a marca dos 100 pontos e fez uma performance incrível. Todo o esforço e dedicação valeram a pena, e você chegou lá! Parabéns por essa conquista brilhante! ${} agora você está pronto/a para brilhar ainda mais nas Olimpíadas! Fim de jogo.")  
}
else 
{
  alert(`${nome} você deu um show na competição, chegando perto dos 100 pontos que precisava para ganhar. Com ${vida} pontos, mostrou um esforço incrível e se empenhou ao máximo. Embora não tenha vencido, foi um desempenho brilhante e ele está de parabéns por ter chegado tão longe. Fica a certeza de que grandes conquistas estão por vir! Fim de jogo.`)
}