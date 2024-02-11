const perguntas = [
    {
      pergunta: "O que significa JavaScript?",
      respostas: [
        "Java Syntax",
        "Just Script",
        "JavaScript",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
      respostas: [
        "var x = minhaVariavel;",
        "variable x = minhaVariavel;",
        "let x = minhaVariavel;",
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para imprimir algo no console em JavaScript?",
      respostas: [
        "print()",
        "log()",
        "console.log()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual símbolo é usado para comentários de linha única em JavaScript?",
      respostas: [
        "//",
        "/* */",
        "#",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método JavaScript é usado para selecionar um elemento HTML pelo seu ID?",
      respostas: [
        "getElementById()",
        "selectElementById()",
        "querySelector()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Atribuição",
        "Igualdade estrita",
        "Comparação",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método JavaScript é usado para converter uma string em um número?",
      respostas: [
        "parseString()",
        "toInt()",
        "parseInt()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual função JavaScript é usada para verificar se uma variável é um número?",
      respostas: [
        "isNaN()",
        "isNumber()",
        "typeof()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
      respostas: [
        "Não há diferença",
        "'===' verifica o valor e o tipo, '==' verifica apenas o valor",
        "'==' verifica o valor e o tipo, '===' verifica apenas o valor",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador '+' em JavaScript?",
      respostas: [
        "Concatenar strings",
        "Adição",
        "Ambas as opções anteriores",
      ],
      correta: 2
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePergntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePergntas
  
  //loop ou laço de repeticão
  for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      
      corretas.delete(item) 
      if(estaCorreta) {
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePergntas
    }
    
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
  quiz.appendChild(quizItem)
  } 