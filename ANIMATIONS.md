# Documentação de Animações

Este documento descreve os componentes e animações inovadoras implementadas na landing page.

## Componentes de Animação

### 1. AnimatedSection
Componente wrapper que anima elementos quando entram no viewport.

**Props:**
- `children`: Conteúdo a ser animado
- `className`: Classes CSS adicionais
- `delay`: Delay antes da animação iniciar (em segundos)
- `direction`: Direção da animação ('up', 'down', 'left', 'right', 'scale')

**Uso:**
```tsx
<AnimatedSection delay={0.2} direction="up">
  <h1>Título Animado</h1>
</AnimatedSection>
```

### 2. HoverCard
Card com efeito 3D que responde ao movimento do mouse.

**Props:**
- `children`: Conteúdo do card
- `className`: Classes CSS adicionais

**Características:**
- Efeito tilt 3D baseado na posição do mouse
- Smooth transitions usando spring physics
- Escala aumentada ao hover

**Uso:**
```tsx
<HoverCard className="card">
  <div>Conteúdo do Card</div>
</HoverCard>
```

### 3. AnimatedText
Texto que aparece palavra por palavra com efeito stagger.

**Props:**
- `children`: Texto a ser animado (string)
- `className`: Classes CSS adicionais
- `delay`: Delay inicial

**Uso:**
```tsx
<AnimatedText className="text-4xl font-bold">
  Seu Melhor Estilo
</AnimatedText>
```

### 4. AnimatedBackground
Background com partículas animadas e gradientes em movimento.

**Características:**
- 50 partículas com movimento aleatório
- Gradiente radial animado
- Efeitos de fade in/out
- Performance otimizada

**Uso:**
```tsx
<section className="relative">
  <AnimatedBackground />
  <div className="relative z-10">Conteúdo</div>
</section>
```

### 5. ParallaxSection
Seção com efeito parallax baseado no scroll.

**Props:**
- `children`: Conteúdo da seção
- `className`: Classes CSS adicionais
- `speed`: Velocidade do efeito parallax (0.1 a 1)

**Uso:**
```tsx
<ParallaxSection speed={0.5}>
  <h2>Título com Parallax</h2>
</ParallaxSection>
```

## Animações CSS Customizadas

### Classes de Animação

#### `.animate-gradient`
Gradiente em movimento suave
- Duração: 8s
- Loop infinito

#### `.animate-float`
Movimento flutuante vertical
- Duração: 6s
- Loop infinito
- Ideal para elementos decorativos

#### `.animate-pulse-glow`
Efeito de brilho pulsante
- Duração: 3s
- Loop infinito
- Usado no logo

#### `.animate-shimmer`
Efeito de brilho atravessando elemento
- Duração: 3s
- Loop infinito
- Efeito sutil de luz

#### `.animate-reveal-up`
Revelação com movimento para cima
- Duração: 0.8s
- Executa uma vez

#### `.animate-scale-in`
Escala crescente com fade in
- Duração: 0.6s
- Executa uma vez

#### `.animate-slide-in-left/right`
Deslizamento lateral com fade in
- Duração: 0.8s
- Executa uma vez

## Micro-interações com Framer Motion

### Botões Animados
```tsx
<motion.button
  whileHover={{ scale: 1.1, y: -5 }}
  whileTap={{ scale: 0.95 }}
>
  Clique Aqui
</motion.button>
```

### Cards com Hover
```tsx
<motion.div
  whileHover={{ y: -10 }}
  transition={{ type: 'spring', stiffness: 300 }}
>
  Conteúdo
</motion.div>
```

### Logo com Rotação
```tsx
<motion.div
  initial={{ scale: 0, rotate: -180 }}
  animate={{ scale: 1, rotate: 0 }}
  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
>
  Logo
</motion.div>
```

## Performance

- Todas as animações usam `transform` e `opacity` para melhor performance
- Componentes com `useInView` animam apenas quando visíveis
- Animações CSS otimizadas com GPU acceleration
- Lazy loading de elementos fora do viewport

## Customização

Para ajustar as animações, edite:
- **Timing**: `app/globals.css` - seção `@keyframes`
- **Comportamento**: `components/*.tsx` - props de `transition`
- **Easing**: Use custom easing functions do Framer Motion

## Boas Práticas

1. Use `AnimatedSection` para elementos que aparecem no scroll
2. Use `HoverCard` para elementos interativos
3. Use `ParallaxSection` para criar profundidade
4. Não anime muitos elementos simultaneamente
5. Mantenha delays razoáveis (100-400ms entre elementos)
