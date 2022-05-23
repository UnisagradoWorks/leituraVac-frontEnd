export interface IDoenca {
  id: string;
  nome: string;
  descricao: string;
  topicos: ITopicoDoenca[];
  fontes: string[];
}

export interface ITopicoDoenca {
  titulo: string;
  conteudo: string;
}

export const DOENCAS: IDoenca[] = [
  {
    id: 'bcgid',
    nome: 'BCG ID',
    descricao:
      'A vacina BCG protege contra a tuberculose – doença contagiosa, provocada pela bactéria Mycobacterium tuberculosis. Foi criada em 1.921 por Léon Calmette e Alphonse Guérin, dando origem ao nome BCG. A doença não afeta apenas os pulmões mas, também, ossos, rins e meninges (membranas que envolvem o cérebro).',
    fontes: ['https://bvsms.saude.gov.br/01-7-dia-da-vacina-bcg-2/'],
    topicos: [
      {
        titulo: 'Transmissão',
        conteudo:
          'Pessoas saudáveis e infectadas podem não apresentar sintomas e, mesmo assim, transmitirem a bactéria. O contágio se dá de uma pessoa para a outra, através de gotículas de saliva da garganta. O compartilhamento de objetos não oferece risco. Pessoas com o sistema imunológico comprometido têm mais chance de desenvolver a doença, em especial, a forma grave e generalizada. Para prevenir a tuberculose é necessário vacinar todas as crianças, a partir do nascimento até os 4 anos de idade. A vacina, em dose única, é oferecida, gratuitamente, nas Unidades Básicas de Saúde.',
      },
      {
        titulo: 'Cuidados antes e apos a vacinação',
        conteudo:
          'A vacinação não requer qualquer cuidado prévio. Após a administração da vacina, na maioria das vezes, haverá uma reação no local da aplicação com posterior formação de cicatriz. É importante não colocar nenhum produto, medicamento ou curativo, pois trata-se de uma resposta esperada e normal à vacina.',
      },
      {
        titulo: 'Prevenção da tuberculose no Brasil e no mundo',
        conteudo:
          'A vacina BCG não oferece eficácia de 100% na prevenção da tuberculose pulmonar, mas sua aplicação em massa permite a prevenção de formas graves da doença, como a meningite tuberculosa e a tuberculose miliar (forma disseminada). No Brasil, embora a incidência de tuberculose pulmonar venha aumentando, quase não são mais registradas suas formas graves. A Organização Mundial da Saúde (OMS) estima que, nos países onde a tuberculose é frequente e a vacina integra o programa de vacinação infantil, previna-se mais de 40 mil casos anuais de meningite tuberculosa. Impacto como este depende de alta cobertura vacinal, razão pela qual é tão importante que toda criança receba a vacina BCG. Além das crianças, a vacina é indicada para pessoas de qualquer idade que convivam com portadores de hanseníase e estrangeiros, ainda não vacinados, que estejam de mudança para o Brasil.',
      },
    ],
  },
  {
    id: 'tripliceBacteriana',
    nome: 'Tríplice bacteriana',
    descricao:
      'Trata-se de vacina inativada, portanto, não tem como causar a doença. Contém os toxoides diftérico e tetânico (derivados   das toxinas produzidas pelas bactérias causadoras das doenças), e componentes da cápsula da bactéria da coqueluche (Bordetella pertussis), sal de alumínio como adjuvante, fenoxietanol, cloreto de sódio e água para injeção.',
    fontes: [
      'https://familia.sbim.org.br/vacinas/vacinas-disponiveis/vacina-triplice-bacteriana-acelular-do-tipo-adulto-dtpa',
    ],
    topicos: [
      {
        titulo: 'Transmissão',
        conteudo:
          'Trata-se de vacina inativada, portanto, não tem como causar a doença.',
      },
      {
        titulo: 'Cuidados antes e apos a vacinação',
        conteudo:
          'Não são necessários cuidados especiais antes da vacinação, Em caso de doença aguda com febre alta, a vacinação deve ser adiada até que ocorra a melhora, Em pessoas com doenças que aumentam o risco de sangramento, a aplicação intramuscular pode ser substituída pela subcutânea, Compressas frias aliviam a reação no local da aplicação. Em casos mais intensos pode ser usada medicação para dor, sob prescrição médica, Se ocorrer uma reação local muito intensa (Arthus), é importante observar o intervalo de dez anos após a aplicação da última dose da vacina para se administrar a dose de reforço, Qualquer sintoma grave e/ou inesperado após a vacinação deve ser notificado ao serviço que a realizou, Sintomas de eventos adversos persistentes, que se prolongam por mais de 72 horas (dependendo do sintoma), devem ser investigados para verificação de outras causas.',
      },
    ],
  },
  {
    id: 'hepatiteb',
    nome: 'Hepatite B',
    descricao:
      'É uma doença infecciosa que agride o fígado, sendo causada pelo vírus B da hepatite (HBV). O HBV está presente no sangue e secreções, e a hepatite B é também classificada como uma infecção sexualmente transmissível. Inicialmente, ocorre uma infecção aguda e, na maior parte dos casos, a infecção se resolve espontaneamente até seis meses após os primeiros sintomas, sendo considerada de curta duração. Essa resolução é evidenciada pela presença de anticorpos chamados anti-Hbs.',
    fontes: [
      'http://www.aids.gov.br/pt-br/publico-geral/hv/o-que-sao-hepatites/hepatite-b#:~:text=Hepatite%20B%2C%20o%20que%20é,como%20uma%20infecção%20sexualmente%20transmissível.',
    ],
    topicos: [
      {
        titulo: 'Transmissão',
        conteudo:
          'Relações sexuais sem preservativo com uma pessoa infectada, Da mãe infectada para o filho, durante a gestação e o parto, Compartilhamento de material para uso de drogas (seringas, agulhas, cachimbos), Compartilhamento de materiais de higiene pessoal (lâminas de barbear e depilar, escovas de dente, alicates de unha ou outros objetos que furam ou cortam), Na confecção de tatuagem e colocação de piercings, procedimentos odontológicos ou cirúrgicos que não atendam às normas de biossegurança, Por contato próximo de pessoa a pessoa (presumivelmente por cortes, feridas e soluções de continuidade) e Transfusão de sangue (mais relacionadas ao período anterior a 1993).',
      },
      {
        titulo: 'Tratamento',
        conteudo:
          'Após o resultado positivo e confirmação, o tratamento será realizado com antivirais específicos, disponibilizados no SUS, de acordo com o Protocolo Clínico e Diretrizes Terapêuticas para Hepatite B e Coinfecções (PCDT Hepatite B). Além do uso de medicamentos, quando necessários, é importante que se evite o consumo de bebidas alcoólicas. Os tratamentos disponíveis atualmente não curam a infecção pelo vírus da hepatite B, mas podem retardar a progressão da cirrose, reduzir a incidência de câncer de fígado e melhorar a sobrevida em longo prazo.',
      },
      {
        titulo: 'Prevenção da Hepatite B',
        conteudo:
          'A vacinação é a principal medida de prevenção contra a hepatite B, sendo extremamente eficaz e segura. A gestação e a lactação não representam contraindicações para imunização. Atualmente, a vacina para hepatite B está prevista no calendário de vacinação infantil. Além disso, o SUS disponibiliza a vacina nas unidades básicas de saúde para todas as pessoas, independentemente da idade. Caso você não seja vacinado ou não tenha feito as três doses da vacina, procure a UBS mais perto de você. Além da vacina, outros cuidados ajudam na prevenção da infecção pelo HBV, como usar preservativo em todas as relações sexuais e não compartilhar objetos de uso pessoal – tais como lâminas de barbear e depilar, escovas de dente, material de manicure e pedicure, equipamentos para uso de drogas, confecção de tatuagem e colocação de piercings.',
      },
    ],
  },
  {
    id: 'influenzaeB',
    nome: 'Haemophilus Influenzae B',
    descricao:
      'Haemophilus influenzae tipo b (Hib) é uma bactéria que atinge principalmente crianças até cinco anos, causando infecções que começam geralmente no nariz e na garganta, mas podem se espalhar para outras partes do corpo, incluindo pele, ouvidos, pulmões, articulações, membranas que revestem o coração, medula espinhal e cérebro. Essa bactéria pode causar diferentes doenças infecciosas com complicações graves, como pneumonia, inflamação na epiglote, dor de ouvido, infecção generalizada na corrente sanguínea, inflamação do pericárdio, inflamação das articulações e sinusite. Uma das piores doenças causadas pela bactéria Haemophilus influenzae tipo b é a meningite, que geralmente tem um início súbito com febre, dor de cabeça intensa, náuseas, vômitos e rigidez de nuca. Sequelas graves ocorrem de 3% a 5% dos sobreviventes de meningite por Hib como déficit auditivo grave e lesões cerebrais permanentes.',
    fontes: [
      'https://www.bio.fiocruz.br/index.php/br/hib-haemophilus-influenzae-tipo-b-sintomas-transmissao-e-prevencao-163',
    ],
    topicos: [
      {
        titulo: 'Transmissão',
        conteudo:
          'A Haemophilus influenzae coloniza o aparelho respiratório. A transmissão da Hib se dá pelo contato com pessoas infectadas com a bactéria, mesmo que estes não apresentem manifestações clínicas. Os germes passam de pessoa a pessoa através das secreções da mucosa nasal. Se permanecerem no nariz e na garganta, provavelmente a pessoa não ficará doente. Algumas vezes, os germes localizam-se nos pulmões ou na corrente sanguínea e, então, a Hib pode causar problemas graves.',
      },
      {
        titulo: 'Prevenção da Haemophilus Influenzae B',
        conteudo:
          'A vacinação é a única forma de se prevenir contra a doença e sua eficácia é de 95% a 100% após a aplicação do esquema completo de imunização. Depois de implementar programas de vacinação abrangentes, vários países praticamente eliminaram as doenças causadas pela Hib (meningite e pneumonia, por exemplo). A maioria das crianças deve tomar a vacina contra Hib de acordo com o calendário vacinal: aos dois, quatro e seis meses de vida. Se a criança deixar de tomar uma dose ou estiver atrasada em relação às datas previstas, deve tomar a próxima dose da vacina assim que for possível - não é preciso começar novamente. Crianças com mais de cinco anos geralmente não precisam ser vacinadas contra Hib.',
      },
    ],
  },
  {
    id: 'poliomielite',
    nome: 'Poliomielite',
    descricao:
      'A poliomielite, também chamada de pólio ou paralisia infantil, é uma doença contagiosa aguda causada por um vírus que vive no intestino, chamado poliovírus, que pode infectar crianças e adultos por meio do contato direto com fezes ou com secreções eliminadas pela boca das pessoas infectadas e provocar ou não paralisia. Nos casos graves, em que acontecem as paralisias musculares, os membros inferiores são os mais atingidos.',
    fontes: [
      'https://bvsms.saude.gov.br/poliomielite-paralisia-infantil/#:~:text=A%20poliomielite%2C%20também%20chamada%20de,e%20provocar%20ou%20não%20paralisia.',
    ],
    topicos: [
      {
        titulo: 'Transmissão',
        conteudo:
          'A transmissão ocorre por contato direto pessoa a pessoa, pela via fecal-oral (mais frequentemente), por objetos, alimentos e água contaminados com fezes de doentes ou portadores, ou pela via oral-oral, por meio de gotículas de secreções da orofaringe (ao falar, tossir ou espirrar). A falta de saneamento, as más condições habitacionais e a higiene pessoal precária constituem fatores que favorecem a transmissão do poliovírus.',
      },
      {
        titulo: 'Tratamento',
        conteudo:
          'Não existe tratamento específico, todas as vítimas de contágio devem ser hospitalizadas, recebendo tratamento dos sintomas, de acordo com o quadro clínico do paciente.',
      },
      {
        titulo: 'Prevenção',
        conteudo:
          'A vacinação é a única forma de prevenção da poliomielite. Todas as crianças menores de cinco anos de idade devem ser vacinadas conforme esquema de vacinação de rotina e na campanha nacional anual. O esquema vacinal contra a poliomielite é de três doses da vacina injetável – VIP (aos 2, 4 e 6 meses) e mais duas doses de reforço com a vacina oral bivalente – VOP (gotinha).',
      },
    ],
  },
  {
    id: 'rotavirus',
    nome: 'Rotavírus',
    descricao:
      'É uma doença diarréica aguda causada por um vírus. Trata-se de uma das mais importantes causas de diarréia grave em crianças menores de 5 anos no mundo, particularmente nos países em desenvolvimento. Os Rotavírus pertencem à família Reoviridae, gênero rotavírus. São classificados em grupos, subgrupos e sorotipos de acordo com sua composição antigênica. As partículas completas possuem três camadas protéicas concêntricas e cada segmento genômico (ou gene) regula a síntese de uma proteína viral especifica. A classificação dos rotavírus em sorotipos (ou genótipos) tem um caráter binário, configurando suas particularidades inerentes às proteínas VP7 e VP4. São reconhecidos 15 diferentes sorotipos (genótipos) G e, pelo menos 10 infectam o homem, com importância epidemiológica os tipos G1,G2,G3,G4 e G9 e a diversidade de VP4 se expressa por 20 diferentes genótipos P.',
    fontes: ['https://www.saude.go.gov.br/biblioteca/7644-rotavírus'],
    topicos: [
      {
        titulo: 'Transmissão',
        conteudo:
          'São transmitidos pela via fecal-oral, por contato pessoa a pessoa, através de água e alimentos contaminados, por objetos contaminados e provavelmente por propagação aérea, via aerossóis. Há presença de alta concentração do vírus causador da doença nas fezes de crianças infectadas.',
      },
      {
        titulo: 'Tratamento',
        conteudo:
          'O paciente deve ser tratado através de reposição hidroeletrolítica e manejo dietético adequado. Não é recomendado o uso de antimicrobianos e antidiarréicos.',
      },
      {
        titulo: 'Prevenção',
        conteudo:
          'Administrar a vacina contra rotavirus (VORH) em crianças menores de seis meses;lavar sempre as mãos antes e depois de: utilizar o banheiro, trocar fraldas, manipular/preparar os alimentos, amamentar, tocar em animais; lavar e desinfetar as superfícies, utensílios e equipamentos usados na preparação de alimentos; proteger os alimentos e as áreas da cozinha contra insetos, animais de estimação e outros animais (guardar os alimentos em recipientes fechados); guardar a água tratada em vasilhas limpas e de boca estreita para evitar a recontaminação; não utilizar água de riachos, rios, cacimbas ou poços contaminados; ensacar e manter a tampa do lixo sempre fechada, quando não houver coleta de lixo, este deve ser enterrado; usar sempre a privada, mas se isso não for possível, enterrar as fezes sempre longe dos cursos de água; manter o aleitamento materno aumenta a resistência das crianças contra as diarréias; evitar o desmame precoce.',
      },
    ],
  },
  {
    id: 'pneumococicas',
    nome: 'Pneumocócicas',
    descricao:
      'Doenças pneumocócicas são aquelas causadas pela bactéria Streptococcus pneumoniae. Pneumonia, meningite e otite (inflamação aguda do ouvido) são exemplos de doenças que podem ser causadas por essa bactéria. Sinusite, septicemia (infecção do sangue), artrite infecciosa e osteomielite (infecção dos ossos) são outras doenças pneumocócicas causadas pela mesma bactéria.',
    fontes: [
      'https://www.pfizer.com.br/sua-saude/vacinacao/doencas-pneumococicas#:~:text=Doenças%20pneumocócicas%20são%20aquelas%20causadas,ser%20causadas%20por%20essa%20bactéria.',
    ],
    topicos: [
      {
        titulo: 'Transmissão',
        conteudo:
          'A bactéria Streptococcus pneumoniae (também chamada de pneumococo) é transmitida de pessoa para pessoa. Muitos carregam essa bactéria nas mucosas da garganta e do nariz. Um espirro ou tosse com a boca descoberta pode ser suficiente para infectar outra pessoa. As doenças se desenvolvem quando a bactéria se multiplica no corpo, por incapacidade do sistema imunológico de combater o “invasor”.',
      },
      {
        titulo: 'Tratamento',
        conteudo:
          'Streptococcus pneumoniae é bastante adaptável e pode desenvolver resistência aos antibióticos, obrigando os médicos a utilizar tratamentos diferentes. O risco é que a bactéria fique resistente até mesmo aos antibióticos de última geração. Por isso, a imunização é a melhor forma de prevenção, pois ajuda a evitar a proliferação de Streptococcus pneumoniae. Estima-se que 40% dos pneumococos sejam resistentes à penicilina. Por esse motivo, é fundamental seguir exatamente o tratamento médico. Ele sabe qual antibiótico usar e a dosagem necessária. A automedicação ou interrupção do tratamento pode colocar a vida do paciente em risco.',
      },
      {
        titulo: 'Prevenção',
        conteudo:
          'Além da higiene, é fundamental que as pessoas mantenham hábitos saudáveis, como boa alimentação e uma rotina de exercícios físicos, além de não descuidar de doenças existentes, como cardiopatias, diabetes, hipertensão e qualquer enfermidade que afete o sistema imunológico. A vacina é também um meio de prevenção. Diferentemente de algumas doenças contraídas na infância, em que o corpo cria resistência a elas (como sarampo e catapora), há risco de se contrair doenças pneumocócicas mesmo depois do primeiro contágio. A chance de contrair novamente uma dessas doenças aumenta bastante por uma série de fatores, sendo possível que os sintomas venham ainda mais fortes. Existem dezenas de variações do pneumococo e cada uma exige que o sistema imunológico se adapte e desenvolva defesas. A vacinação, por exemplo, dá ao corpo ferramentas para que defesas eficientes sejam produzidas naturalmente, evitando que a bactéria se espalhe e desenvolva alguma doença pneumocócica.',
      },
    ],
  },
  {
    id: 'meningococicasConjugadas',
    nome: 'Meningocócicas conjugadas ACWY/C',
    descricao:
      'A vacina Meningocócica Conjugada quadrivalente – ACWY previne contra meningites e infecções generalizadas (doenças meningocócicas) causadas pela bactéria meningococo dos tipos A, C, W e Y. Já a Vacina Meningocócica C Conjugada previne doenças causadas pelo meningococo C (incluindo meningite e meningococcemia).',
    fontes: [
      'https://climt.com.br/meningococicas-conjugadas-acwy-c.html#:~:text=A%20vacina%20Meningocócica%20Conjugada%20quadrivalente,%2C%20C%2C%20W%20e%20Y.',
    ],
    topicos: [
      {
        titulo: 'Transmissão',
        conteudo:
          'Trata-se de vacina inativada, portanto, não tem como causar a doença.',
      },
      {
        titulo: 'Cuidados antes e apos a vacinação',
        conteudo:
          'Não são necessários cuidados especiais antes da vacinação, Em caso de febre, deve-se adiar a vacinação até que ocorra a melhora, Compressas frias aliviam a reação no local da aplicação. Em casos mais intensos pode-se usar medicação para dor, sob recomendação médica, Qualquer sintoma grave e/ou inesperado após a vacinação deve ser notificado ao serviço que a realizou, Sintomas de eventos adversos persistentes, que se prolongam por mais de 24 a 72 horas (dependendo do sintoma), devem ser investigados para verificação de outras causas e Pode ser aplicada no mesmo momento em que a vacina meningocócica B.',
      },
      {
        titulo: 'Efeitos e eventos adversos',
        conteudo:
          'Em 10% dos vacinados ocorrem: inchaço, endurecimento, dor e vermelhidão no local da aplicação; perda de apetite; irritabilidade; sonolência; dor de cabeça; febre; calafrios; cansaço; e dor muscular. Entre 1% e 10% dos vacinados apresentam sintomas gastrintestinais (incluindo diarreia, vômito e náusea); hematoma grande no local da aplicação; erupções na pele e dor nas articulações. Em 0,1% a 1% dos vacinados ocorrem: insônia; choro persistente; sensibilidade diminuída da pele no local da aplicação; vertigem; coceira; dor muscular; dor nas mãos e pés e mal-estar. Em 0,01% a 0,1%, principalmente em adultos, acontece inchaço extenso no membro em que foi aplicada a vacina, com frequência associado à vermelhidão, algumas vezes envolvendo a articulação próxima ou inchaço de todo o membro e As reações tendem a desaparecer em até 72 horas.',
      },
    ],
  },
  {
    id: 'meningococicaB',
    nome: 'Meningocócica B',
    descricao:
      'É composta por quatro componentes (três proteínas subcapsulares e vesículas da membrana externa do meningococo B), além de hidróxido de alumínio, cloreto de sódio, histidina, sacarose e água para injeção.',
    fontes: [
      'https://familia.sbim.org.br/vacinas/vacinas-disponiveis/vacina-meningococica-b',
    ],
    topicos: [
      {
        titulo: 'Transmissão',
        conteudo:
          'Trata-se de vacina inativada, portanto, não tem como causar a doença.',
      },
      {
        titulo: 'Cuidados antes e apos a vacinação',
        conteudo:
          'A administração de paracetamol antes ou logo após a vacinação pode reduzir o risco de febre e não interfere na resposta imune à vacina, Não são necessários outros cuidados especiais antes da vacinação, Em caso de febre, deve-se adiar a vacinação até que ocorra a melhora, Compressas frias aliviam a reação no local da aplicação, Qualquer sintoma grave e/ou inesperado após a vacinação deve ser notificado ao serviço que a realizou, Sintomas de eventos adversos persistentes, que se prolongam por mais de 24 a 72 horas (dependendo do sintoma), devem ser investigados para verificação de outras causas, Evitar aplicação simultânea com as vacinas tríplice bacteriana, pneumocócica conjugada, Haemophilus influenzae tipo b, poliomielite e hepatite B, para reduzir chance de febre alta após a vacinação e Pode ser aplicada no mesmo momento em que as vacinas meningocócicas ACWY ou C.',
      },
      {
        titulo: 'Efeitos e eventos adversos',
        conteudo:
          'Em crianças menores de 2 anos, febre alta com duração de 24 a 28 horas pode ocorrer em mais de 10% dos vacinados. Quando a vacina é aplicada junto com a tríplice bacteriana acelular, pneumocócica conjugada, Haemophilus influenzae tipo b, poliomielite e hepatite B, esse percentual aumenta para 69% a 79%. Por isso é preferível não aplicá-las no mesmo dia, Em crianças até 10 anos, em mais de 10% dos vacinados acontecem: perda de apetite; sonolência; choro persistente; irritabilidade; diarreia; vômitos; erupções na pele; sensibilidade no local da aplicação e ao movimentar o membro onde foi aplicada a vacina; reações locais (dor, calor, vermelhidão, inchaço). Em 0,01% a 0,1% ocorrem urticária e outras reações alérgicas. Até o momento não foi observada anafilaxia e Em mais de 10% dos vacinados com mais de 11 anos ocorre cefaleia; náuseas; dor nos músculos e articulações; mal-estar e reações locais, como inchaço, endurecimento, vermelhidão e dor. A dor pode ser muito intensa, atrapalhando a realização das atividades cotidianas. Não é conhecido o risco para anafilaxia, e reações alérgicas graves não foram verificadas durante os estudos com a vacina.',
      },
    ],
  },
  {
    id: 'influenza',
    nome: 'Influenza',
    descricao:
      'Influenza é uma doença transmitida através do vírus influenza e provoca febre, dores de garganta e outros sintomas. A maioria da população já deve ter contraído algum tipo de influenza e, uma vez infectado, eleva sua capacidade de resistência (imunidade) contra este vírus. Consequentemente, grande parte das pessoas já possui imunização contra a epidemia da influenza sazonal. A nova influenza A (H1N1), mais conhecida como gripe suína, que se propagou na primavera de 2009, é uma gripe sem precedentes e provocada por um novo tipo de vírus, ou seja a população não tem nenhuma imunidade contra ela.',
    fontes: [
      'https://www.pref.aichi.jp/global/pt/living/medical/influenza.html#:~:text=Influenza%20é%20uma%20doença%20transmitida,(imunidade)%20contra%20este%20vírus.',
    ],
    topicos: [
      {
        titulo: 'Transmissão',
        conteudo:
          'Contágio através de inalação de gotículas expelidas durante os espirros e tosses de pessoas infectadas. As pessoas num raio de cerca de 2m do espirro e/ou tosse tem alta probabilidade de se contagiar e Contágio através de contato direto das mãos ou através de maçanetas, corrimões e outras superfícies impregnadas de secreções contaminadas com vírus. Porém, o contágio não acontece apenas pela impregnação do vírus nas mãos. O contágio se dá no momento que toque a boca, nariz e olhos com as mãos impregnadas de vírus. Por isso, lave as mãos frequentemente e assim reduzirá o risco de contágio através de contato direto.',
      },
      {
        titulo: 'Tratamento',
        conteudo:
          'Se alguém da casa for contaminado, é difícil evitar por completo o contágio para outras pessoas da casa. Entretanto, tome as medidas abaixo para minimizar a possibilidade de se contagiar: Lavar as mãos sempre que cuidar do doente, Crianças contaminadas necessitam de cuidados frequentes mas, restrinja o contato de familiares portadores de doenças crônicas e gestantes com o doente, de preferência, separando-os do quarto do doente para evitar o contágio, Se a pessoa que for cuidar do doente tiver uma doença crônica ou estiver grávida, consulte o médico responsável, por precaução. Dependendo do caso, o médico receitará remédios profiláticos, A princípio, o doente deve usar máscara. A pessoa encarregada de cuidá-lo, apesar de não evitar completamente o contágio apenas com o uso de máscara, é recomendável que a use e As louças e roupas usadas pelo doente podem ser desinfetadas através da lavagem e secagem normal.',
      },
      {
        titulo: 'Prevenção',
        conteudo:
          'Ao tossir ou espirrar sem o uso de máscaras, poderá contaminar outras pessoas a sua volta, pela inalação das secreções. Por isso, na época ou região de epidemia, evite aglomerações de pessoas. Nos supermercados, trens ou outros lugares públicos, como não se sabe onde os vírus podem estar impregnados, é importante que lave as mãos sempre que regressar à casa. Diligentemente, lave as mãos antes de preparar as refeições ou antes de qualquer serviço. Quando for lavar as mãos, use sabão e lave inclusive o espaço entre os dedos e os pulsos, durante no mínimo uns 15 segundos. Depois, enxague as mãos com uma toalha limpa.',
      },
    ],
  },
  {
    id: 'febreAmarela',
    nome: 'Febre Amarela',
    descricao:
      'A febre amarela é uma doença viral transmitida por mosquitos infectados. Os sintomas mais comuns são febre, dores musculares com dor lombar proeminente, dor de cabeça, perda de apetite, náusea ou vômito. Na maioria dos casos, os sintomas desaparecem depois de 3 ou 4 dias. De 15 a 25% dos pacientes entra em uma segunda fase mais grave, na qual o risco de morte é maior e as pessoas podem ficar com a pele e os olhos amarelados, urina escura, dores abdominais com vômitos, sangramentos.O vírus da febre amarela é transmitido por mosquitos pertencentes às espécies, Haemagogus, Sabethes e Aedes. Esses mosquitos são infectados pelo vírus quando picam um macaco ou ser humano infectado. A doença não pode ser transmitida de um macaco para um humano, tampouco de uma pessoa para outra nem entre macacos, só pelo mosquito. Um tratamento de apoio oportuno e de qualidade nos hospitais melhora as taxas de sobrevivência. Atualmente, não há medicamento antiviral específico para febre amarela, mas os cuidados no tratamento de desidratação, falência do fígado e dos rins e febre melhora o resultado. Infecções bacterianas associadas podem ser tratadas com antibióticos. A vacinação é a forma mais eficaz de prevenção contra a febre amarela.',
    fontes: [
      'https://www.paho.org/pt/node/40#:~:text=A%20febre%20amarela%20é%20uma,de%203%20ou%204%20dias.',
    ],
    topicos: [
      {
        titulo: 'Sintomas',
        conteudo:
          'Uma vez contraído, o vírus da febre amarela demora de 3 a 6 dias para ser incubado no corpo. Muitas pessoas não apresentam sintomas; os mais comuns são febre, dores musculares com dor lombar proeminente, dor de cabeça, perda de apetite, náusea ou vômito. Na maioria dos casos, os sintomas desaparecem depois de 3 ou 4 dias. Entretanto, uma pequena porcentagem de pacientes entra em uma segunda fase mais grave, dentro de 24 horas após a recuperação dos sintomas iniciais. A febre alta retorna e vários sistemas do corpo são afetados, geralmente o fígado e os rins. Nessa fase, as pessoas estão suscetíveis a desenvolverem icterícia (“amarelamento” da pele e dos olhos), urina escura e dores abdominais com vômitos. Sangramentos podem ocorrer a partir da boca, nariz, olhos ou estômago. Metade dos pacientes que entram na fase tóxica morre dentro de 7 a 10 dias. O diagnóstico da febre amarela é difícil, principalmente em estágios iniciais. A doença agravada pode ser confundida com malária, leptospirose, hepatite viral (especialmente a forma fulminante), outras febres hemorrágicas, infecção por outros flavivírus (como dengue) e intoxicações. Exames de sangue (RT-PCR) podem, às vezes, detectar o vírus nos estágios iniciais da doença. Em estágios mais avançados, é necessário teste para identificar anticorpos (ELISA e PRNT).',
      },
      {
        titulo: 'Tratamento',
        conteudo:
          'Um tratamento de apoio oportuno e de qualidade nos hospitais melhora as taxas de sobrevivência. Atualmente, não há nenhum medicamento antiviral específico para febre amarela, mas os cuidados no tratamento de desidratação, falência do fígado e dos rins e febre melhora o resultado. Infecções bacterianas associadas podem ser tratadas com antibióticos.',
      },
      {
        titulo: 'Prevenção',
        conteudo:
          'A vacinação é a forma mais eficaz de prevenção contra a febre amarela. Em áreas de alto risco, onde a cobertura vacinal é baixa, o pronto reconhecimento e controle de surtos recorrendo à imunização de massa é fundamental para prevenir epidemias. É importante vacinar a maioria (80% ou mais) da população em risco para evitar a transmissão em uma região com epidemia de febre amarela. O risco de transmissão da febre amarela em áreas urbanas pode ser reduzido por meio da eliminação de potenciais locais de reprodução de mosquitos e pela aplicação de larvicidas em recipientes que armazenam água, entre outros lugares com água parada. A rápida detecção da febre amarela e a resposta em tempo oportuno por meio de campanhas de vacinação de emergência são essenciais para controlar epidemias. Entretanto, a subnotificação é uma preocupação, já que o verdadeiro número de casos é estimado entre 10 e 250 vezes o número de notificações registradas.',
      },
    ],
  },
  {
    id: 'hepatiteA',
    nome: 'Hepatite A',
    descricao:
      'Hepatite A é uma doença viral aguda do fígado, causada pelo vírus da Hepatite A.',
    fontes: [
      'https://www.einstein.br/Pages/Doenca.aspx?eid=189#:~:text=Hepatite%20A%20é%20uma%20doença,pelo%20vírus%20da%20Hepatite%20A.&text=A%20transmissão%20acontece%20pela%20via,da%20Hepatite%20A%20foi%20excretado.',
    ],
    topicos: [
      {
        titulo: 'Transmissão',
        conteudo:
          'A transmissão acontece pela via oral-fecal, ou seja, a ingestão de água ou alimentos contaminados por fezes humanas onde o vírus da Hepatite A foi excretado. Mãos sujas com resíduos de fezes também podem levar à contaminação, se forem usadas para preparar alimentos. O contato sexual é considerado uma possível maneira de transmitir o vírus da Hepatite A. O contato sexual anal oferece mais risco e pode ser uma das explicações para o atual surto de Hepatite A nos Estados Unidos – e até no Brasil.',
      },
      {
        titulo: 'Tratamento',
        conteudo:
          'A vacina é aplicada em duas doses, e leva a presença de anticorpos tipo IgG no sangue. É uma vacina com vírus inativado. Quem não foi vacinado em criança pode fazer o exame sorológico e se não mostrar anticorpos pode e deve ser vacinado. A vacina não oferece riscos.',
      },
      {
        titulo: 'Prevenção',
        conteudo:
          'A prevenção é possível com um gesto simples: a lavagem de mãos, principalmente antes de manusear alimentos. O saneamento básico, cuidados no sexo anal para evitar contaminação oral e de mãos e principalmente vacinação, também são formas de prevenção.',
      },
    ],
  },
  {
    id: 'tripliceviral',
    nome: 'Tríplice viral (sarampo, caxumba e rubéola)',
    descricao:
      'A tríplice viral é uma vacina atenuada, que contém vírus vivos “enfraquecidos” do sarampo, da rubéola e da caxumba, aminoácidos, albumina humana, sulfato de neomicina, sorbitol, gelatina e traços de proteína do ovo de galinha usado no processo de fabricação da vacina.',
    fontes: [
      'https://altadiagnosticos.com.br/triplice-viral-sarampo-caxumba-rubeola',
    ],
    topicos: [
      {
        titulo: 'Vacinação',
        conteudo:
          'Para crianças com esquema completo, não há evidências que justifiquem uma terceira dose como rotina, podendo ser considerada em situações de risco epidemiológico, como surtos de caxumba e/ou sarampo. Em situação de risco para o sarampo – por exempl o,surto ou exposição domiciliar – a primeira dose pode ser aplicada a partir de 6 meses de idade. Nesses casos, a aplicação de mais duas doses apósa idade de 1 ano ainda será necessária.',
      },
    ],
  },
  {
    id: 'varicela',
    nome: 'Varicela (catapora)',
    descricao:
      'A Catapora (varicela) é uma doença infecciosa e altamente contagiosa causada pelo vírus Varicela-Zoster que se manifesta com maior frequência em crianças. A principal característica clínica são lesões na pele acompanhadas de coceira.',
    fontes: [
      'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/c/catapora-varicela#:~:text=A%20Catapora%20(varicela)%20%C3%A9%20uma,na%20pele%20acompanhadas%20de%20coceira.',
    ],
    topicos: [
      {
        titulo: 'Transmissão',
        conteudo:
          'A catapora é facilmente transmitida para outras pessoas. O contágio acontece por meio do contato com o líquido da bolha ou pela tosse, espirro, saliva ou por objetos contaminados pelo vírus, ou seja, contato direto ou de secreções respiratórias.',
      },
      {
        titulo: 'Vacinação',
        conteudo:
          'É considerada adequadamente vacinada a criança que tenha recebido duas doses da vacina após 1 ano de idade. Em situação de risco – por exemplo, surto de varicela ou exposição domiciliar – a primeira dose pode ser aplicada a partir de 9 meses de idade. Nesses casos, a aplicação de mais duas doses após a idade de 1 ano ainda será necessária.',
      },
    ],
  },
  {
    id: 'hpv',
    nome: 'HPV',
    descricao:
      'HPV é a abreviação em inglês para papilomavírus humano. Essa infecção sexualmente transmissível muitas vezes não causa sintomas, mas pode provocar verrugas genitais em homens e mulheres',
    fontes: ['https://saude.abril.com.br/medicina/hpv/'],
    topicos: [
      {
        titulo: 'Transmissão',
        conteudo:
          'Via de regra, o HPV é transmitido durante o sexo, seja ele vaginal, anal ou oral. Até mesmo a masturbação pode levar ao contágio.',
      },
      {
        titulo: 'Vacinação',
        conteudo:
          'O esquema de vacinação para meninas e meninos menores de 15 anos é de duas doses com intervalo de 6 meses (0 - 6 meses).',
      },
    ],
  },
  {
    id: 'dengue',
    nome: 'Dengue',
    descricao:
      'É uma doença infecciosa febril aguda, que pode se apresentar de forma benigna ou grave, dependendo de alguns fatores, entre eles: o vírus envolvido, infecção anterior pelo vírus da dengue e fatores individuais como doenças crônicas (diabetes, asma brônquica, anemia falciforme).',
    fontes: ['https://bvsms.saude.gov.br/dengue-16/'],
    topicos: [
      {
        titulo: 'Transmissão',
        conteudo:
          'A dengue (DF) é cada vez mais reconhecida como uma das principais doenças transmitidas por mosquitos do mundo e causa significativa morbidade e mortalidade em países tropicais e subtropicais',
      },
    ],
  },
];
