// FUNÇÕES DE GERAÇÃO EXPANDIDAS - PARTE 2
// Copiar e substituir no App.tsx

function generateChatGPTPrompt(input: string): string {
    return `# 🧠 Prompt com Chain of Thought Avançado (ChatGPT O1/4o)

## 🎯 Solicitação Original
${input}

## ⚡ METODOLOGIA: RACIOCÍNIO ESTRUTURADO EM CAMADAS

Processe esta solicitação mostrando TODO o seu  pensamento explicitamente.

### FASE 1: Decomposição e Análise

**Entendimento do Problema:**
- Reformule a solicitação com suas palavras
- Liste o objetivo principal e objetivos secundários
- Identifique premissas, constraints e limitações
- O que está implícito mas não foi dito?

**Decomposição:**
- Quebre em sub-problemas menores
- Identifique dependências entre componentes
- Ordem lógica de resolução
- Inputs necessários e outputs esperados

### FASE 2: Exploração de Abordagens

**Gere 2-3 Soluções Alternativas:**

**Abordagem A:**
- Descrição do método
- ✅ Vantagens
- ❌ Desvantagens
- 🎯 Casos de uso ideais

**Abordagem B:**
- Descrição do método
- ✅ Vantagens
- ❌ Desvantagens
- 🎯 Casos de uso ideais

**Análise Comparativa:**
Compare trade-offs: complexidade, eficiência, manutenibilidade, escalabilidade
Justifique qual escolher e POR QUÊ

### FASE 3: Chain of Thought (Passo-a-Passo)

Use este formato para cada etapa:

\`\`\`
🤔 Pensamento: [O que estou pensando]
📊 Análise: [Dados considerando]
⚠️ Problema: [Se houver obstáculo]
💡 Solução: [Como resolvo]
✅ Validação: [Como sei que está correto]
➡️ Próximo: [Próximo passo]
\`\`\`

**Autocorreção:**
Se identificar erro, mostre:
"❌ Erro: [descrição]" → "✅ Correção: [nova abordagem]"

### FASE 4: Edge Cases e Limitações

**Casos Extremos:**
- Inputs vazios/nulos
- Inputs muito grandes/pequenos
- Inputs inválidos ou mal formatados
- Condições de concorrência
- Casos de borda do domínio

**Limitações:**
- Premissas assumidas
- Contextos onde NÃO funciona
- Trade-offs aceitos

### FASE 5: Validação

**Checklist:**
- [ ] Resolve completamente o problema original?
- [ ] Todos edge cases cobertos?
- [ ] Lógica coerente início-fim?
- [ ] Sem contradições?
- [ ] Solução eficiente?

**Teste Mental (Walkthrough):**
Exemplo: [input] → [passo 1] → [passo 2] → [output]

## 📊 FORMATO DE RESPOSTA FINAL

### 1️⃣ Resumo Executivo
[1-2 parágrafos: solução + insights principais]

### 2️⃣ Solução Detalhada
[Implementação completa]

### 3️⃣ Justificativa
[Por que esta abordagem vs alternativas]

### 4️⃣ Edge Cases
[Como são tratados]

### 5️⃣ Limitações
[Descrição + mitigação]

## 🎯 TRANSPARÊNCIA TOTAL

- **Incertezas:** "Não tenho certeza sobre X, mas estimo Y porque Z"
- **Limitações:** "Isto assume X. Se X falso, então..."
- **Trade-offs:** "Escolhi A vs B porque [razão]"

**COMECE SEU RACIOCÍNIO AGORA.** Mostre TODO o processo`;
}

function generateAntigravityPrompt(input: string): string {
    return `# 💻 ANTIGRAVITY IDE - CÓDIGO PRODUCTION-READY COMPLETO

## 🎯 Objetivo
${input}

## ⚠️ IMPERATIVOS CRÍTICOS

 Você está entregando código **PRODUCTION-READY** que funciona **IMEDIATAMENTE** após copy-paste.

### 🚫 PROIBIÇÕES ABSOLUTAS

**NUNCA faça:**
- ❌ Comentários \`// ...resto do código\`
- ❌ Comentários \`// implementar X\`
- ❌ Funções vazias ou \`throw new Error('Not implemented')\`
- ❌ Omitir imports
- ❌ Usar \`any\` type
- ❌ Referenciar arquivos sem fornecer conteúdo

### ✅ REQUISITOS OBRIGATÓRIOS

**SEMPRE faça:**
- ✅ 100% do código de cada arquivo
- ✅ TODOS os imports
- ✅ Arquivos de config COMPLETOS
- ✅ TODAS as funções implementadas
- ✅ Tratamento de erros robusto
- ✅ TypeScript estrito (zero \`any\`)

## 📁 ESTRUTURA DE ARQUIVOS

Defina PRIMEIRO a arquitetura completa:

\`\`\`
projeto/
├── src/
│   ├── components/   [Liste com descrição]
│   ├── hooks/        [Se aplicável]
│   ├── utils/
│   ├── types/
│   ├── services/
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
\`\`\`

**Para CADA arquivo, forneça conteúdo COMPLETO.**

## 📦 CONFIGURAÇÃO

### package.json (COMPLETO)
\`\`\`json
{
  "name": "...",
  "version": "...",
  "type": "module",
  "scripts": { /* TODOS */ },
  "dependencies": { /* TODAS com versões */ },
  "devDependencies": { /* TODAS */ }
}
\`\`\`

### tsconfig.json (COMPLETO)
- CompilerOptions otimizadas
- Strict mode ON
- Paths configurados

### Outros Configs
- vite.config.ts / next.config.js (COMPLETO)
- tailwind.config.js (se usar)
- eslintrc (se usar)

## 💻 CÓDIGO-FONTE

Para **CADA ARQUIVO:**

#### 📄 \`[caminho/completo/arquivo.tsx]\`

\`\`\`typescript
// TODOS os imports
import { ... } from '...';
import { ...} from '...';

// Types COMPLETOS
interface Props {
  // detalhados
}

// IMPLEMENTAÇÃO COMPLETA
function Component() {
  // TODO o código
  // TODAS as funções
  // ZERO placeholders
  
  return (
    // JSX COMPLETO
  );
}

export default Component;
\`\`\`

## 🔧 QUALIDADE

### TypeScript
- NUNCA \`any\`
- Tipos explícitos: props, returns, state, params

###  Tratamento de Erros
- Try-catch em async
- Validação de inputs
- Error boundaries (React)
- Mensagens úteis

### Performance
- useMemo/useCallback apropriados
- Lazy loading
- Code splitting

## 🚀 EXECUÇÃO

\`\`\`bash
mkdir projeto && cd projeto
npm install
npm run dev
\`\`\`

**.env.example** (se necessário)

## ✅ CHECKLIST

- [ ] Todos arquivos com código COMPLETO
- [ ] Todos imports presentes
- [ ] Nenhum \`// ...resto\`
- [ ] Zero \`any\`
- [ ] Funções implementadas
- [ ] Erros tratados
- [ ] TypeScript compila
- [ ] package.json completo
- [ ] Instruções completas

## 🎯 RESULTADO

Após copiar:
1. Criar arquivos
2. \`npm install\`
3. \`npm run dev\`
4. ✅ **FUNCIONA IMEDIATAMENTE**

**COMECE A IMPLEMENTAÇÃO COMPLETA AGORA.**`;
}

function generateGoogleAIPrompt(input: string): string {
    return `### ⚙️ SYSTEM INSTRUCTIONS ###

Você é um assistente especializado, preciso e altamente eficaz.

**Princípios Fundamentais:**
- Clareza absoluta e objetividade
- Estruturação lógica em seções hierárquicas
- Markdown para máxima legibilidade
- Citação de fontes quando aplicável
- Honestidade sobre limitações (admita quando não souber)
- Múltiplas perspectivas quando relevante
- Exemplos práticos e acionáveis

**Tom e Estilo:**
- Profissional mas acessível
- Evite jargões desnecessários
- Use analogias quando ajudam compreensão
- Balance profundidade com concisão

**Formatação Esperada:**
- Headers (## ###) para organização
- **Negrito** para termos-chave
- \`Code blocks\` para código/comandos
- Listas numeradas para sequências
- Bullets para itens não-ordenados

---

### 📋 USER PROMPT ###

${input}

---

### 📊 FORMATO DE RESPOSTA ESTRUTURADO ###

Organize sua resposta seguindo esta estrutura:

## 1. 🎯 Resumo Executivo
**Em 2-3 frases:** Overview direto da resposta/solução principal.
Permite que o leitor entenda imediatamente se este conteúdo é relevante.

## 2. 📖 Contexto e Background (se necessário)
**Informações essenciais** para entender a resposta:
- Definições de termos-chave
- Premissas ou prerequisites
- Contexto histórico relevante (se aplicável)

*Pule esta seção se o contexto for óbvio.*

## 3. 💡 Desenvolvimento Detalhado

### 3.1 [Sub-tópico Principal A]
Explicação aprofundada com:
- Conceitos fundamentais
- Como funciona / Por que importa
- Conexões com outros conceitos

### 3.2 [Sub-tópico Principal B]
Continue a estrutura conforme necessário

**Use sub-seções (###) livremente para hierarquia clara.**

## 4. 🔨 Exemplos Práticos

### Exemplo 1: [Caso Real/Demonstração]
\`\`\`
[Código, comando, ou implementação concreta]
\`\`\`
**Explicação:** [O que este exemplo demonstra]

### Exemplo 2: [Outro Uso Prático]
Continue conforme apropriado

## 5. ⚠️ Considerações Importantes

**Limitações:**
- [Onde esta solução/abordagem NÃO se aplica]

**Caveats:**
- [Armadilhas comuns ou erros a evitar]

**Trade-offs:**
- [Custos/benefícios de diferentes abordagens]

## 6. ✅ Conclusão e Próximos Passos

**Síntese:** [Reforce os pontos principais em 1-2 frases]

**Ações Recomendadas:**
1. [Primeiro passo acionável]
2. [Segundo passo acionável]
3. [Terceiro passo acionável]

**Recursos Adicionais:** (se aplicável)
- [Links, documentação, tutoriais recomendados]

---

### 🎯 CRITÉRIOS DE QUALIDADE ###

Antes de finalizar, verifique:
- [ ] Resposta diretamente endereça a pergunta original?
- [ ] Estrutura lógica e fácil de seguir?
- [ ] Exemplos concretos incluídos?
- [ ] Terminologia explicada adequadamente?
- [ ] Formatação Markdown consistente?
- [ ] Balanço entre profundidade e concisão?
- [ ] Tom apropriado (profissional mas acessível)?

---

**RESPONDA AGORA** seguindo toda a estrutura acima.`;
}

function generateLovablePrompt(input: string): string {
    return `# 💜 LOVABLE - UI PREMIUM QUE FAZ "WOW!"

## 🎯 Objetivo
${input}

## ✨ FILOSOFIA: IMPACTO VISUAL MÁXIMO

Crie uma aplicação que faça o usuário dizer **"WOW!"** ao abrir.

---

## 🎨 DESIGN PREMIUM OBRIGATÓRIO

### Primeira Impressão (Critical)
- **UI visualmente IMPACTANTE** à primeira vista
- Design moderno, clean e sofisticado
- Hierarquia visual clara e profissional
- Uso estratégico de whitespace
- Quality screams "premium"

### Paleta de Cores
- Gradientes suaves e harmoniosos
- Esquema de cores consistente e moderno
- Contraste adequado (WCAG AA mínimo)
- Accent colors usados com propósito
- Dark mode OU Light mode (especifique)

### Tipografia
- Fonte profissional (Google Fonts)
- Hierarquia tipográfica clara (H1 → H6, body)
- Line-height e letter-spacing otimizados
- Tamanhos responsivos (clamp, rem)

---

## 💻 TECNOLOGIAS E IMPLEMENTAÇÃO

### Tailwind CSS (OBRIGATÓRIO)
\`\`\`
- Use APENAS classes utilitárias Tailwind
- Defina design tokens no tailwind.config
- Extends: colors, spacing, shadows, animations
- Sem CSS inline style={{ }}
- Plugin @tailwindcss/forms (se forms)
\`\`\`

### Design System
Crie um sistema consistente:
\`\`\`typescript
// Exemplo de tokens
colors: {
  primary: { /* 50-950 scale */ },
  secondary: { /* 50-950 scale */ },
  accent: '...',
}
\`\`\`

---

## 📱 RESPONSIVIDADE TOTAL

### Mobile-First Approach
\`\`\`
1. Design para mobile PRIMEIRO
2. Adicione breakpoints: sm: md: lg: xl: 2xl:
3. Teste em: 320px, 768px, 1024px, 1920px
4. Touch-friendly (botões ≥ 44px)
\`\`\`

### Layout Adaptativo
- **NÃO** apenas "responsivo" (mesma UI menor)
- **SIM** "adaptativo" (layout muda para mobile)
- Grids: \`grid-cols-1 md:grid-cols-2 lg:grid-cols-3\`
- Stacks verticais mobile → horizontais desktop
- Navegação: Hamburger menu mobile → Horizontal desktop

---

## ✨ ANIMAÇÕES E MICRO-INTERAÇÕES

### Princípios
- **Subtileza:** Animações suaves, não distrativas
- **Performance:** 60fps (use transform, opacity)
- **Purpose:** Cada animação tem propósito

### Implementações

**Hover Effects:**
\`\`\`
hover:scale-105 hover:shadow-xl transition-all duration-300
\`\`\`

**Page Transitions:**
\`\`\`
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
\`\`\`

**Loading States:**
- Skeletons (não spinners genéricos)
- Shimmer effects
- Progressive loading

**Feedback Visual:**
- Button press: scale-95
- Success: green checkmark animation
- Error: red shake animation

---

## 🎯 COMPONENTES UI PREMIUM

### Buttons
\`\`\`tsx
// Primary
bg-gradient-to-r from-primary to-accent
hover:shadow-2xl hover:scale-105
transition-all duration-300

// Ghost
hover:bg-primary/10 border border-primary

// Disabled
opacity-50 cursor-not-allowed
\`\`\`

### Cards
\`\`\`tsx
bg-white dark:bg-gray-800
rounded-2xl shadow-lg
hover:shadow-2xl transition-shadow
border border-gray-200 dark:border-gray-700
\`\`\`

### Inputs
\`\`\`tsx
focus:ring-2 focus:ring-primary
focus:border-transparent
transition-all duration-200
\`\`\`

---

## ♿ ACESSIBILIDADE (WCAG AA)

- [ ] Contraste mínimo 4.5:1 (texto)
- [ ] Contraste mínimo 3:1 (UI components)
- [ ] Aria-labels em ícones/imagens
- [ ] Focus visible (ring-2 ring-primary)
- [ ] Navegação por teclado
- [ ] Semantic HTML (header, nav, main, footer)

---

## ⚡ PERFORMANCE

### Otimizações Críticas
\`\`\`
- Lazy load: imagens, componentes pesados
- Image optimization: WebP, srcset, sizes
- Code splitting: dynamic imports
- Bundle analysis: remova dead code
- Font loading: font-display: swap
\`\`\`

### Métricas Target
- Lighthouse Score: ≥ 90
- First Contentful Paint: \u003c 1.5s
- Time to Interactive: \u003c 3s
- Cumulative Layout Shift: \u003c 0.1

---

## 📋 CHECKLIST FINAL

### Design
- [ ] Visual impact forte (WOW factor)
- [ ] Cores modernas e harmoniosas
- [ ] Tipografia profissional
- [ ] Whitespace bem usado
- [ ] Design system consistente

### Responsividade
- [ ] Mobile-first implementado
- [ ] Breakpoints: sm md lg xl 2xl
- [ ] Touch-friendly em mobile
- [ ] Layout adapta (não só redimensiona)

### Animações
- [ ] Hover effects suaves
- [ ] Loading states elegantes
- [ ] Transições com purpose
- [ ] 60fps (transform/opacity only)

### Código
- [ ] APENAS Tailwind classes
- [ ] Design tokens no config
- [ ] Componentes reutilizáveis
- [ ] TypeScript strict

### A11y & Performance
- [ ] WCAG AA compliance
- [ ] Focus states visíveis
- [ ] Lazy loading implementado
- [ ] Images otimizadas

---

## 🎬 ENTREGA

Uma aplicação que:
1. **Impacta** visualmente ao abrir
2. **Funciona** perfeitamente em todos devices
3. **Anima** sutilmente mas efetivamente
4. **Performa** rápido e fluido
5. **Acessível** para todos usuários

**RESULTADO:** Usuário diz "WOW! Onde eu contrato o designer?"

**DESENVOLVA AGORA** seguindo todas as diretrizes.`;
}
