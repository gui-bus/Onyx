# <p align="center">ONYX</p>

<p align="center">
  <strong>International Legal Boutique: A Arte da Estratégia Jurídica de Alta Complexidade.</strong>
</p>

<p align="center">
  <a href="https://onyx.guibus.dev/"><img src="https://img.shields.io/badge/Live_Demo-ONYX-000000?style=for-the-badge&logo=vercel" alt="Live Demo" /></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.2.0-black?style=flat-square&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.2.4-blue?style=flat-square&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4.0.0-38B2AC?style=flat-square&logo=tailwind-css" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/TypeScript-5.0.0-blue?style=flat-square&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/next--intl-4.8.3-green?style=flat-square" alt="next-intl" />
  <img src="https://img.shields.io/badge/Framer_Motion-12.38.0-ff69b4?style=flat-square&logo=framer" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/GSAP-3.14.2-green?style=flat-square&logo=greensock" alt="GSAP" />
</p>

---

## 📖 Panorama Geral

A **ONYX** é uma landing page de ultra-luxo para uma boutique jurídica internacional e consultoria estratégica. O projeto foi concebido para transmitir **autoridade, discrição e sofisticação**, utilizando uma estética "Dark & Gold" que reflete o ambiente de decisões de alto nível e proteção de patrimônio global.

### 🎯 Diferenciais Estratégicos
- **Estética "Boutique" & Prestígio:** Design minimalista e impactante, com foco em tipografia clássica e espaços negativos, transmitindo a exclusividade de um serviço personalizado.
- **Narrativa de Legado:** Estrutura de conteúdo que guia o cliente desde a filosofia de precisão até a prova social de CEOs de empresas Fortune 500.
- **Arquitetura Global:** Preparada para o mercado internacional com um sistema de tradução impecável e detecção automática de região.

---

## ✨ Ecossistema de Funcionalidades

### 🎞️ Impacto Visual (Branding & Motion)
- **The Art of Strategy:** Hero section monumental com tipografia "roman-inspired" (MMXXVI) e efeitos de revelação que estabelecem o tom de tradição e futuro.
- **High-End Animations:** Combinação poderosa de Framer Motion para interações de interface e GSAP para orquestração de scroll complexo e micro-interações.

### 🏛️ Estrutura & Expertise
- **Practice Areas Portfolio:** Showcase das áreas de atuação (M&A, Wealth Management, Tax Strategy) com cards interativos e descrições técnicas refinadas.
- **Heritage Timeline:** Uma jornada visual pela história da firma, desde a fundação em São Paulo até a expansão para Genebra e Londres.
- **Thought Leadership (Insights):** Seção de artigos estratégicos que posiciona a marca como autoridade intelectual no mercado jurídico.

### 🔐 Segurança & Conversão
- **Confidential Channel:** Fluxo de contato otimizado para solicitações de alta complexidade, enfatizando a criptografia e a discrição desde o primeiro clique.
- **FAQ Intelligence:** Central de inteligência para sanar dúvidas críticas sobre jurisdições internacionais e protocolos de confidencialidade.

---

## 🛠️ Deep Dive Tecnológico

### Arquitetura de Internacionalização
O projeto utiliza o **next-intl** com uma estratégia de "Zero Latency Language Switching":
- **Middleware Intelligent:** Gerenciamento de idiomas via `NEXT_LOCALE` e detecção de headers, garantindo que o cliente sempre veja o conteúdo na sua língua preferida.
- **Type-Safe Dictionaries:** Garantia de que 100% das strings (PT/EN) estão sincronizadas e tipadas, evitando falhas de conteúdo em produção.

### Performance e Estilização
- **Tailwind CSS v4 (Engine JIT):** Utiliza as últimas otimizações de performance para entregar um CSS crítico extremamente leve, essencial para SEO e experiência mobile.
- **Hybrid Animation Engine:** Otimização de 60fps constantes através da separação de responsabilidades entre Framer Motion (layout/UI) e GSAP (scroll/timelines).

---

## 🏗️ Estrutura Arquitetural

```text
├── messages/             # Dicionários de tradução (en.json, pt.json)
├── src/
│   ├── app/
│   │   └── [locale]/     # Next.js App Router (Páginas Internacionalizadas)
│   ├── components/
│   │   ├── common/       # Header, Footer e Provedores de Contexto
│   │   └── sections/     # Componentes de Seção (Hero, Heritage, Practice...)
│   ├── hooks/            # Custom Hooks (ScrollReveal, ScrollSpy)
│   ├── i18n/             # Configurações de request e mapeamento i18n
│   └── proxy.ts          # Middleware inteligente de rotas
└── tailwind.config.ts    # Configuração de design system e variáveis
```

---

## 🧪 Engenharia de Qualidade

A integridade do projeto é mantida através de rigorosos padrões de desenvolvimento:
- **Discretion-First Code:** Estrutura limpa e modular, facilitando auditorias de segurança e manutenção de longo prazo.
- **Responsive Mastery:** Adaptabilidade total para dispositivos móveis, garantindo que a experiência de luxo seja mantida em qualquer tela.
- **SEO & Accessibility:** Tags semânticas e conformidade com padrões de acessibilidade para garantir alcance global.

Para rodar o projeto localmente:
```bash
pnpm install
pnpm dev
```

Para validar o build de produção:
```bash
pnpm build
```

---
<p align="center">
  Designed with intent by <a href="https://www.linkedin.com/in/gui-bus/">guibus.dev</a> &bull; 2026
</p>