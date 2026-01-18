import { useState } from 'react';
import type { ReactElement } from 'react';
import { Cpu, Terminal, Sparkles, Copy, Check } from 'lucide-react';
import './index.css';

type Platform = 'nano-banana' | 'chatgpt' | 'antigravity' | 'google-ai' | 'lovable';

interface PlatformConfig {
  id: Platform;
  name: string;
  icon: ReactElement;
  description: string;
  color: string;
}

const platforms: PlatformConfig[] = [
  {
    id: 'nano-banana',
    name: 'Nano Banana',
    icon: <Sparkles className="w-5 h-5" />,
    description: 'Imagens e textos otimizados',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT (O1/4o)',
    icon: <Terminal className="w-5 h-5" />,
    description: 'Raciocínio avançado',
    color: 'from-green-400 to-emerald-500',
  },
  {
    id: 'antigravity',
    name: 'Antigravity IDE',
    icon: <Cpu className="w-5 h-5" />,
    description: 'Código completo e estruturado',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    id: 'google-ai',
    name: 'Google AI Studio',
    icon: <Sparkles className="w-5 h-5" />,
    description: 'System + User prompt',
    color: 'from-purple-400 to-pink-500',
  },
  {
    id: 'lovable',
    name: 'Lovable',
    icon: <Sparkles className="w-5 h-5" />,
    description: 'UI premium e responsiva',
    color: 'from-fuchsia-400 to-purple-500',
  },
];

function generatePrompt(platform: Platform, userInput: string): string {
  const trimmedInput = userInput.trim();

  if (!trimmedInput) {
    return 'Por favor, insira uma ideia primeiro.';
  }

  switch (platform) {
    case 'nano-banana':
      return generateNanoBananaPrompt(trimmedInput);
    case 'chatgpt':
      return generateChatGPTPrompt(trimmedInput);
    case 'antigravity':
      return generateAntigravityPrompt(trimmedInput);
    case 'google-ai':
      return generateGoogleAIPrompt(trimmedInput);
    case 'lovable':
      return generateLovablePrompt(trimmedInput);
    default:
      return trimmedInput;
  }
}

function generateNanoBananaPrompt(input: string): string {
  const isImageRequest = /imagem|image|foto|picture|desenho|ilustra|visual|art/i.test(input);

  if (isImageRequest) {
    return `# 🎨 Prompt Profissional para Geração de Imagem (Nano Banana)

## 📋 Conceito Original
${input}

## 🎯 Descrição Expandida e Detalhada

Crie uma imagem de altíssima qualidade que capture perfeitamente a essência do conceito acima. A composição final deve:

- **Ponto Focal:** Estabelecer um centro de atenção claro e imediatamente reconhecível
- **Profundidade:** Utilizar profundidade de campo para criar hierarquia visual entre elementos
- **Narrativa Visual:** Incorporar elementos secundários que enriqueçam a história sem competir com o foco principal
- **Atenção aos Detalhes:** Demonstrar cuidado meticuloso com texturas, materiais, superfícies e micro-detalhes

## ✨ Especificações Técnicas de Qualidade Premium

### Resolução e Nitidez
- 8k ultra high definition, photorealistic quality
- Extreme attention to fine details and micro-textures  
- Crystal clear sharpness on primary subjects
- Professional color grading and tonal balance
- Sharp focus with natural bokeh on background elements

### Padrão Artístico
- Award-winning photography/illustration standards
- Masterpiece quality composition following classical art principles
- Best quality rendering with zero artifacts or distortions
- Professional post-processing and color correction
- Gallery-worthy final output

## 💡 Iluminação Cinematográfica e Atmosfera

### Setup de Iluminação
- **Lighting Type:** Soft natural lighting OU dramatic studio lighting (contexto-dependente)
- **Direction:** Three-point lighting setup para máxima dimensionalidade
- **Quality:** Cinematic, professionally balanced lighting
- **Mood:** Atmosfera consistente com rim light e subtle fill light
- **Shadows:** Rich, detailed shadows que complementam a composição

### Qualidade da Luz
- Evite iluminação flat ou sem dimensão
- Use edge lighting para separar sujeito do fundo
- Incorpore highlight subtis para adicionar vida
- Balance entre luz e sombra para drama visual

## 🎨 Paleta de Cores e Teoria da Cor

- Esquema de cores harmonioso e profissionalmente balanceado
- Vibrant yet natural color saturation (não oversaturated)
- Color temperature consistente através da cena
- Subtle color grading que eleva o mood desejado
- Complementary ou analogous color schemes conforme apropriado

## 📐 Composição e Enquadramento Profissional

### Princípios de Composição
- **Rule of Thirds:** Posicione pontos de interesse nas interseções
- **Leading Lines:** Incorpore linhas guias que direcionam o olhar do espectador
- **Visual Balance:** Distribuição equilibrada de peso visual
- **Depth Layers:** Foreground, midground, background claramente definidos
- **Negative Space:** Use espaço vazio estrategicamente

### Ângulo e Perspectiva
- Selecione ângulo de câmera que melhor serve a narrativa
- Considere: eye-level, low-angle heroic, high-angle vulnerable, dutch angle dinâmico
- Perspectiva correta com linhas de fuga apropriadas

## ✅ Tags de Qualidade Profissional (Incluir na geração)

8k uhd, ultra detailed, high resolution, masterpiece, best quality, professional photography, photorealistic, hyper realistic rendering, sharp focus, incredibly detailed, depth of field, cinematic composition, professional color grading, award winning photograph, perfect lighting, natural lighting, studio quality lighting, fine art quality, gallery worthy, trending on artstation, highly detailed textures, intricate fine details, crystal clear, pristine quality, no noise, clean render, perfect exposure

## 🚫 Negative Prompt (Elementos a Evitar)

low quality, blurry, out of focus, distorted, deformed, ugly, bad anatomy, poor composition, oversaturated, underexposed, overexposed, high noise, grain, compression artifacts, watermark, text overlay, cropped awkwardly, amateur quality, simple, basic, low resolution, pixelated

## 🎬 Referências de Estilo

Para máxima qualidade, busque inspiração em:
- High-end commercial photography
- Cinematic film stills de grandes produções  
- Fine art photography de galerias
- Editorial photography de revistas premium (Vogue, National Geographic)`;
  } else {
    return `# 📝 Prompt Otimizado para Texto Conciso e Estruturado (Nano Banana)

## 🎯 Solicitação Original
${input}

## ⚡ MODO DE RESPOSTA: ULTRA-CONCISO E ESTRUTURADO

Você DEVE responder seguindo as regras abaixo de forma RIGOROSA:

## 📋 Regras de Formato OBRIGATÓRIAS

### 1. Formato de Saída
- **SEMPRE** use JSON estruturado OU Markdown formatado com hierarquia clara
- **NUNCA** use parágrafos longos de texto corrido
- Organize em seções com headers (## ###), bullets (- •) e numeração (1 2 3)
- Use code blocks (\`\`\`) para código, dados técnicos ou exemplos

### 2. Princípio da Brevidade Extrema
- **Máximo absoluto:** 3-5 linhas por tópico/seção
- **Zero redundância:** Cada palavra deve agregar valor único
- **Elimine floreios:** Vá direto ao ponto essencial sem introduções desnecessárias
- **Densidade de informação:** Maximize informação útil por caractere
- Use abreviações comuns quando apropriado

### 3. Hierarquia Visual Clara
- **Comece** com a informação mais crítica/acionável (inverted pyramid)
- Use **negrito** para conceitos-chave e termos importantes
- Use *itálico* para ênfase secundária ou nuances
- Separe seções distintas com headers (##, ###)
- Use símbolos para scanning rápido: ✅ ❌ ⚠️ 💡 📌

### 4. Priorização Brutal
**Inclua apenas:**
- Informação imediatamente acionável
- Dados críticos para decisão
- Insights não-óbvios

**Elimine completamente:**
- Contexto já conhecido
- Explicações óbvias
- Palavras de enchimento
- Repetições de informação

## ✅ Checklist de Qualidade da Resposta

Antes de enviar, valide:
- [ ] Está em JSON/Markdown estruturado (não parágrafos corridos)
- [ ] Cada seção tem ≤ 5 linhas
- [ ] Usa listas/bullets em vez de prosa
- [ ] Conceitos-chave em **negrito**
- [ ] Zero palavras desnecessárias
- [ ] É escaneável em < 30 segundos
- [ ] Fornece valor ACIONÁVEL (não apenas teórico)
- [ ] Pode ser usado imediatamente (templates, comandos, fórmulas prontas)

## 🎯 Métricas de Sucesso

Uma resposta perfeita:
1. **Leitura:** Compreendida completamente em < 30 segundos
2. **Ação:** Permite ação imediata com as informações
3. **Densidade:** Nada pode ser removido sem perder valor essencial
4. **Clareza:** Alguém sem contexto entende rapidamente

## 📊 Template de Estrutura Ideal

\`\`\`markdown
## [Título do Tópico Principal]

**Quick Answer:** [Resposta direta em 1 frase]

### [Subtópico 1]
- **Ponto-chave A:** Info essencial em 1 linha
- **Ponto-chave B:** Info essencial em 1 linha  
- **Ponto-chave C:** Info essencial em 1 linha

### [Subtópico 2]
1. **Passo 1:** Ação acionável específica
2. **Passo 2:** Ação acionável específica
3. **Passo 3:** Ação acionável específica

### ⚠️ Important Notes
- **Caveat:** [Limitação crítica]
- **Tip:** [Otimização ou hack]

**✅ Next Steps:** [O que fazer agora com esta informação]
\`\`\`

## 🔥 Exemplos de Transformação

### ❌ RUIM (muito verboso):
"Para realizar esta tarefa, você precisará primeiro considerar os vários aspectos..."

### ✅ BOM (conciso e direto):
**Como fazer:**
1. Configure X
2. Execute Y  
3. Valide com Z

## 🎯 INSTRUÇÃO FINAL

**RESPONDA AGORA** à solicitação original seguindo TODAS as diretrizes acima.

Priorize: **Clareza > Completude** | **Ação > Teoria** | **Brevidade > Explicação**`;
  }
}

function generateChatGPTPrompt(input: string): string {
  return `# 🧠 Prompt com Chain of Thought Avançado (ChatGPT O1/4o)

## 🎯 Solicitação Original
${input}

## ⚡ METODOLOGIA: RACIOCÍNIO ESTRUTURADO EM CAMADAS

Processe esta solicitação mostrando TODO o seu pensamento explicitamente.

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
  return `# Prompt otimizado para Antigravity IDE

${input}

## IMPERATIVOS DE IMPLEMENTAÇÃO:

### Código Completo:
- Escreva TODO o código necessário - ZERO placeholders
- Inclua TODOS os imports e dependências
- Forneça estrutura COMPLETA de arquivos e pastas
- Não use comentários tipo "// ...resto do código"

### Estrutura de Arquivos:
- Liste EXATAMENTE quais arquivos criar
- Especifique o caminho COMPLETO de cada arquivo
- Inclua arquivos de configuração (tsconfig, package.json, etc)

### Qualidade do Código:
- TypeScript estrito com tipos completos
- Sem "any" types
- Código production-ready
- Tratamento de erros implementado
- Validações necessárias

### Entrega:
- Código deve funcionar imediatamente após copy-paste
- Inclua instruções de instalação de dependências
- Liste comandos para executar o projeto

## Exemplo de estrutura esperada:
\`\`\`
src/
  components/
    Component.tsx (código completo)
  utils/
    helpers.ts (código completo)
  App.tsx (código completo)
  main.tsx (código completo)
package.json (conteúdo completo)
tsconfig.json (conteúdo completo)
\`\`\`

NÃO aceite respostas parciais ou incompletas.`;
}

function generateGoogleAIPrompt(input: string): string {
  return `### SYSTEM INSTRUCTIONS ###

Você é um assistente especializado e preciso. Siga estas diretrizes ao responder:

- Seja claro, conciso e objetivo
- Estruture respostas em seções quando apropriado
- Use formatação Markdown para melhor legibilidade
- Cite fontes quando necessário
- Admita quando não souber algo
- Considere múltiplas perspectivas
- Forneça exemplos práticos quando relevante

### USER PROMPT ###

${input}

### FORMATO DE RESPOSTA ###

Estruture sua resposta de forma clara e organizada:

1. **Resumo**: Breve overview da resposta
2. **Desenvolvimento**: Explicação detalhada
3. **Exemplos**: Casos práticos ou demonstrações
4. **Conclusão**: Síntese dos pontos principais

Mantenha um tom profissional mas acessível.`;
}

function generateLovablePrompt(input: string): string {
  return `# Prompt otimizado para Lovable

${input}

## REQUISITOS DE UI/UX:

### Design Premium:
- UI VISUALMENTE IMPACTANTE que impressione à primeira vista
- Design moderno, clean e profissional
- Uso de gradientes suaves e cores harmoniosas
- Micro-animações e transições fluidas
- Layout que transpire qualidade premium

### Tecnologias:
- **Tailwind CSS** para estilização
- Utilize classes utilitárias do Tailwind
- Implemente design system consistente
- Use variantes responsivas (sm:, md:, lg:, xl:)

### Responsividade:
- Mobile-first approach
- Breakpoints bem definidos
- Layout adaptativo (não apenas responsivo)
- Touch-friendly em dispositivos móveis
- Teste em diferentes tamanhos de tela

### Animações e Interações:
- Hover effects suaves
- Loading states elegantes
- Transições entre estados
- Feedback visual para ações do usuário
- Animações de entrada/saída

### Acessibilidade:
- Contraste adequado (WCAG AA)
- Labels e aria-labels apropriados
- Navegação por teclado
- Estados de foco visíveis

### Performance:
- Otimização de imagens
- Lazy loading quando apropriado
- Bundle size otimizado
- Smooth scrolling e animações a 60fps

## RESULTADO ESPERADO:
Uma aplicação que faça o usuário dizer "WOW!" ao abrir.`;
}

function App() {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>('antigravity');
  const [userInput, setUserInput] = useState('');
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    const prompt = generatePrompt(selectedPlatform, userInput);
    setGeneratedPrompt(prompt);
    setCopied(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Falha ao copiar:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-cyan-50 font-mono p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12 relative">
          <div className="inline-block">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-cyan-400 animate-pulse-glow">
              &lt;PromptMatrix/&gt;
            </h1>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          </div>
          <p className="mt-4 text-cyan-300/80 text-sm md:text-base">
            [ GERADOR DE PROMPTS CYBERPUNK v1.0.0 ]
          </p>
        </header>

        {/* Platform Selector */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-cyan-400 flex items-center gap-2">
            <Terminal className="w-5 h-5" />
            Selecione a Plataforma Alvo
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {platforms.map((platform) => (
              <button
                key={platform.id}
                onClick={() => setSelectedPlatform(platform.id)}
                className={`
                  relative p-4 rounded-lg border backdrop-blur-md transition-all duration-300
                  ${selectedPlatform === platform.id
                    ? 'bg-cyan-500/20 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)]'
                    : 'bg-slate-800/30 border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800/50'
                  }
                `}
              >
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${platform.color} text-white`}>
                    {platform.icon}
                  </div>
                  <h3 className="font-bold text-sm">{platform.name}</h3>
                  <p className="text-xs text-cyan-300/60">{platform.description}</p>
                </div>

                {selectedPlatform === platform.id && (
                  <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </section>

        {/* Input Area */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-fuchsia-400 flex items-center gap-2">
            <Cpu className="w-5 h-5" />
            Digite Sua Ideia
          </h2>

          <div className="relative">
            <textarea
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="&gt; Digite sua ideia aqui... (ex: 'Criar um dashboard de analytics com gráficos em tempo real')"
              className="w-full h-40 p-4 bg-slate-900/50 border border-slate-700 rounded-lg
                       text-cyan-50 placeholder-cyan-700/50 resize-none
                       focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.3)]
                       transition-all duration-300"
            />
            <div className="absolute bottom-2 right-2 text-xs text-cyan-700">
              {userInput.length} caracteres
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={!userInput.trim()}
            className={`
              mt-4 px-8 py-3 rounded-lg font-bold transition-all duration-300
              ${userInput.trim()
                ? 'bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:scale-105 text-white'
                : 'bg-slate-800 text-slate-600 cursor-not-allowed'
              }
            `}
          >
            <span className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              GERAR PROMPT OTIMIZADO
            </span>
          </button>
        </section>

        {/* Output Area */}
        {generatedPrompt && (
          <section className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-fuchsia-400 flex items-center gap-2">
                <Terminal className="w-5 h-5" />
                Prompt Gerado
              </h2>

              <button
                onClick={handleCopy}
                className="px-4 py-2 bg-slate-800/50 border border-cyan-500/50 rounded-lg
                         hover:bg-cyan-500/20 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]
                         transition-all duration-300 flex items-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-400" />
                    <span className="text-green-400">Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </div>

            <div className="relative">
              <div className="absolute top-0 left-0 w-full h-8 bg-slate-900 rounded-t-lg border border-slate-700 flex items-center gap-2 px-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs text-slate-500">output.txt</span>
              </div>

              <pre className="pt-12 p-6 bg-slate-900/80 border border-slate-700 rounded-lg
                           text-cyan-100 text-sm overflow-x-auto
                           shadow-[inset_0_0_30px_rgba(34,211,238,0.1)]">
                <code>{generatedPrompt}</code>
              </pre>
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-cyan-700">
          <p>
            Desenvolvido com{' '}
            <span className="text-fuchsia-400 animate-pulse">&lt;/&gt;</span>{' '}
            por Antigravity IDE
          </p>
          <p className="mt-2">[ Sistema de Engenharia de Prompts v1.0 ]</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
