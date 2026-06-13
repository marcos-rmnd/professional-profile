# professional-profile

Portfólio pessoal de Marcos André Raimundo. Dark, code-inspired, sem framework, sem build step. A ideia foi ter algo que dá pra abrir no celular com recrutador assistindo e explicar cada linha sem travar.

![Preview animado do portfólio navegando entre as páginas](assets/preview/portfolio-preview.gif)

<p>
  <img src="assets/preview/index-desktop.png" width="49%" alt="Index — hero com nome e botões de ação" />
  <img src="assets/preview/projects-desktop.png" width="49%" alt="Projects — carrossel com peek lateral" />
</p>

<p>
  <img src="assets/preview/skills-desktop.png" width="49%" alt="Skills — grid de grupos de habilidade" />
  <img src="assets/preview/experience-desktop.png" width="49%" alt="Experience — linha do tempo profissional" />
</p>

**Mobile (390px):**

<img src="assets/preview/projects-mobile.png" width="32%" alt="Projects em mobile — carrossel scroll-snap com dots de navegação" />

---

## Stack

HTML, CSS e JavaScript vanilla. Nada de npm em runtime, nada de bundler. Node.js só no script de auditoria de assets.

## Como rodar

Sem build. Abre `index.html` direto no browser, ou sobe com:

```bash
npx serve .
```

## Auditoria estática

```bash
node tests/static-audit.js
# ou
npm test
```

Checa links locais quebrados, assets faltando, meta tags ausentes, estilos inline e padrões de UTF-8 quebrado. Sem `npm install` — só módulos built-in do Node.

---

## Por que ficou assim

**Sem framework.** O objetivo é apresentar o perfil, não simular uma aplicação. Vanilla mantém o código fácil de inspecionar — qualquer dev pode abrir o DevTools e ver exatamente o que acontece, o que é exatamente o ponto.

**Carrossel nativo com CSS scroll-snap.** `scroll-snap-type: x mandatory` no track, `scroll-snap-align: start` em cada imagem. Um card dominante por vez com peek do próximo (~12% da imagem seguinte). Os dots de navegação usam `IntersectionObserver` para detectar qual slide está visível — sem polling, sem biblioteca.

**PDF via `window.print()`.** Evita dependência de biblioteca e o layout `@media print` vai direto pro ATS sem intermediários.

**Grupos de skill** separam experiência profissional real de prática atual e aprendizado em andamento. Não infla o perfil com coisas que uso uma vez por ano.

**Fontes:** JetBrains Mono nos labels, datas e tags (sensação de editor de código). Space Grotesk no conteúdo de leitura.

**Parte mais difícil:** manter o dark theme legível no mobile — a maioria dos recrutadores abre links do LinkedIn no celular, então o layout mobile era tão importante quanto o desktop.

---

## Estrutura

```
.
├── assets/
│   ├── preview/                    ← screenshots para este README
│   ├── projects/
│   │   └── internal-support-desk/
│   │       ├── cover.png           ← painel N1 com fila de tickets
│   │       ├── login.png           ← login com o mascote pato
│   │       └── user.png            ← área do cliente com chamado aberto
│   ├── scripts/
│   │   └── site.js
│   └── styles/
│       └── site.css
├── tests/
│   └── static-audit.js
├── index.html
├── profile.html
├── skills.html
├── experience.html
├── education.html
├── projects.html
└── contact.html
```

---

## Projeto em destaque — pato.do.problema

O carrossel em `projects.html` mostra três telas do help desk interno:

<p>
  <img src="assets/projects/internal-support-desk/cover.png" width="32%" alt="Painel N1 — fila de tickets com filtros e métricas" />
  <img src="assets/projects/internal-support-desk/login.png" width="32%" alt="Tela de login com o mascote pato" />
  <img src="assets/projects/internal-support-desk/user.png" width="32%" alt="Área do cliente com chamado em andamento" />
</p>

Cada imagem usa proporção **2:1** e ocupa ~88% da largura do carrossel, com scroll-snap e peek lateral. Quando a imagem não existe, o card se adapta automaticamente — sem placeholder quebrado.

Para adicionar um novo projeto: cria uma pasta em `assets/projects/<nome>/` com as telas em PNG e referencia os `<img>` dentro de um `<div class="carousel-track">` em `projects.html`.
