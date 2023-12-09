
# Escolas (V-Lab)

Desafio proposto para o processo seletivo para desenvolvedor mobile (Ionic) no V-Lab.


## Sobre

O projeto consiste em um aplicativo android desenvolvido em Ionic capacitor e angular, consumindo uma API Rest de escolas.

Em uma das tabs é possível pesquisar as escolas por nome ou código INEP, além de filtrar por unidade federativa e tipo de rede (Federal, Estatual, Municipal ou Particular). Além disso é possível clicar em uma escola e ver seus detalhes como endereço, telefone, código INEP, etc. Ainda na página da escola é possível ver a localização fornecida pela API no Google Maps e marcar uma escola como favorita.

Na outra tab é possível ver as escolas marcadas como favoritas, bem como clicar nelas para visualizar seus detalhes, como já mencionado.


## Features

- Pesquisa por nome
- Pesquisa avançada por código INEP, estado e tipo de rede
- Possibilidade de favoritar escolas
- Lista de escolas favoritas
- Visualização dos detalhes da escola
- Localização da escola no Google Maps
- Light & Dark mode
- Cross platform


## Demo

- [Assista ao vídeo de demonstração](https://www.youtube.com/watch?v=MKGjp7aYuYw&ab)


## Instalação e teste

Clone este repositório

```bash
  git clone https://github.com/ditthales/escolas-vlab.git
```

Vá para a pasta do projeto
```bash
  cd escolas-vlab
```

Instale as dependencias
```bash
  npm install
```

Para rodar no navegador
```bash
  ionic serve
```

Para rodar no Android Studio
```bash
  ionic capacitor sync android
  ionic cap open android
```

Ou apenas [baixe o apk](https://drive.google.com/file/d/1XVmHoUnMZ7OVXU46o8WEICsyzFV_a4my/view?usp=sharing) e instale em seu dispositivo

    
## Tecnologias utilizadas

 - [Ionic](https://ionicframework.com)
 - [Capacitor.js](https://capacitorjs.com)
 - [Angular](https://angular.io)
 - [HTML](https://www.w3schools.com/html/)
 - [CSS](https://www.w3schools.com/css/)
 - [TypeScript](https://www.typescriptlang.org)



## Autor

- [Thales Fraga](https://www.linkedin.com/in/thalesvgfraga/)

