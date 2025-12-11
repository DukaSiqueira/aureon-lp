# Pasta de Arquivos Estáticos

Esta é a pasta `public` do Next.js. Todos os arquivos aqui podem ser acessados diretamente pela URL.

## 📁 Estrutura Recomendada

```
public/
├── logo.png (ou logo.jpg, logo.svg)  ← SUA LOGO AQUI
├── gallery/                          ← Fotos da galeria de cortes
│   ├── corte1.jpg
│   ├── corte2.jpg
│   └── ...
└── testimonials/                     ← Fotos dos clientes
    ├── joao.jpg
    ├── pedro.jpg
    └── ...
```

## 📍 Onde Colocar a Logo

**Coloque sua logo diretamente na pasta `public/`** com um dos seguintes nomes:
- `logo.png`
- `logo.jpg`
- `logo.svg`
- `logo.webp`

### Exemplos de caminhos:
- Se você colocar `logo.png` em `public/logo.png`
- A URL será: `https://seusite.com/logo.png`
- No código, use: `/logo.png`

## 🖼️ Formatos Recomendados

- **PNG**: Melhor para logos com transparência
- **SVG**: Melhor para logos vetoriais (escalável sem perda de qualidade)
- **JPG**: Bom para fotos, mas não ideal para logos com texto
- **WebP**: Formato moderno com melhor compressão

## 📝 Tamanhos Sugeridos

- **Logo principal**: 200x200px a 400x400px
- **Favicon**: 32x32px ou 64x64px
- **Galeria**: 800x600px a 1200x900px
- **Depoimentos**: 400x400px (quadrado)

## ⚠️ Importante

- Não use espaços nos nomes dos arquivos (use hífens ou underscores)
- Mantenha os arquivos otimizados para web (não muito pesados)
- A logo será usada automaticamente no Schema.org se você nomeá-la como `logo.png`, `logo.jpg` ou `logo.svg`

