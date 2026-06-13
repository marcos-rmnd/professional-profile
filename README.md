# professional-profile

Portfólio pessoal de Marcos André Raimundo com estilo dark code-inspired, construído sem framework e sem etapa de build. Vanilla HTML, CSS e JavaScript.

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

<img src="assets/preview/projects-mobile.png" width="32%" alt="Projects em mobile — carrossel com navegação por pontos" />

---

## Sobre o projeto

O objetivo era ter um portfólio que qualquer dev consegue abrir no DevTools e entender em minutos — sem camadas de abstração, sem dependências escondidas. Cada decisão foi tomada pensando em legibilidade e facilidade de explicar numa entrevista.

O carrossel da aba Projects foi construído com CSS nativo, sem biblioteca. A navegação por pontos detecta qual imagem está visível automaticamente. O PDF do currículo é gerado direto pelo browser, sem intermediários.

As fontes foram escolhidas com intenção: JetBrains Mono nas labels e tags dá a sensação de editor de código; Space Grotesk no conteúdo de leitura mantém o texto legível. O layout mobile foi tratado com o mesmo cuidado que o desktop — a maioria dos recrutadores abre links do LinkedIn no celular.

---

## Projeto em destaque — pato.do.problema

<p>
  <img src="assets/projects/internal-support-desk/cover.png" width="32%" alt="Painel N1 — fila de tickets com filtros e métricas" />
  <img src="assets/projects/internal-support-desk/login.png" width="32%" alt="Tela de login com o mascote pato" />
  <img src="assets/projects/internal-support-desk/user.png" width="32%" alt="Área do cliente com chamado em andamento" />
</p>

Sistema de help desk interno desenvolvido do zero: FastAPI, Python, HTML, CSS e JavaScript vanilla. Autenticação real com JWT, fila de atendimento em três níveis (N1, N2, N3), chat por chamado, notas internas, base de conhecimento e integração opcional com a API da Anthropic para sugestão de resposta e resumo de escalada.

---

## Estrutura

```
.
├── assets/
│   ├── preview/          ← screenshots para este README
│   ├── projects/         ← imagens dos projetos (uma pasta por projeto)
│   ├── scripts/
│   └── styles/
├── tests/
├── index.html
├── profile.html
├── skills.html
├── experience.html
├── education.html
├── projects.html
└── contact.html
```
