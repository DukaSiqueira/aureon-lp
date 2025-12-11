// Dados da barbearia - centralizados para fácil manutenção

export const CONTACT_INFO = {
  whatsapp: {
    phone: "554598197101", // Formato: código do país + DDD + número (sem espaços ou caracteres especiais)
    message: "Olá! Gostaria de agendar um horário na Aureon. Pode verificar a disponibilidade para mim",
  },
  instagram: "https://www.instagram.com/aureon_barbearia/",
  email: "contato@barbearia.com.br",
  phone: "+55 45 9819-7101",
};

export const LOCATIONS = [
  {
    id: 1,
    name: "Aureon JJ",
    unit: "Unidade",
    address: "Av. José João Muraro, 638 - Jardim Porto Alegre, Toledo - PR, 85906-370",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.1234567890123!2d-53.7249167!3d-24.7469167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ0JzQ4LjkiUyA1M8KwNDMnMjkuNyJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Av.+José+João+Muraro,+638+-+Jardim+Porto+Alegre,+Toledo+-+PR,+85906-370",
  },
  {
    id: 2,
    name: "Aureon Pioneira",
    unit: "Unidade",
    address: "R. dos Pioneiros, 975 - Vila dos Pioneiros, Toledo - PR, 85910-080",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.1234567890123!2d-53.7249167!3d-24.7469167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ0JzQ4LjkiUyA1M8KwNDMnMjkuNyJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-24.7469167,-53.7249167",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "João Silva",
    rating: 5,
    comment: "Excelente atendimento! Ambiente profissional e resultado impecável. Recomendo!",
    image: "/testimonials/joao.jpg", // Adicione imagens reais depois
  },
  {
    id: 2,
    name: "Pedro Santos",
    rating: 5,
    comment: "Melhor barbearia da região! Sempre saio satisfeito com o corte.",
    image: "/testimonials/pedro.jpg",
  },
  {
    id: 3,
    name: "Carlos Oliveira",
    rating: 5,
    comment: "Profissionais qualificados e ambiente acolhedor. Vale muito a pena!",
    image: "/testimonials/carlos.jpg",
  },
  {
    id: 4,
    name: "Marcos Costa",
    rating: 5,
    comment: "Atendimento de primeira qualidade. Já indiquei para vários amigos!",
    image: "/testimonials/marcos.jpg",
  },
  {
    id: 5,
    name: "Rafael Lima",
    rating: 5,
    comment: "Sempre que preciso, vou lá. Nunca decepciona!",
    image: "/testimonials/rafael.jpg",
  },
  {
    id: 6,
    name: "Lucas Ferreira",
    rating: 5,
    comment: "Atendimento excepcional e resultados sempre impecáveis. Recomendo!",
    image: "/testimonials/lucas.jpg",
  },
];

export const GALLERY_ITEMS = [
  { id: 1, title: "Corte Premium", image: "/gallery/corte1.jpg" },
  { id: 2, title: "Corte Clássico", image: "/gallery/corte2.jpg" },
  { id: 3, title: "Corte Moderno", image: "/gallery/corte3.jpg" },
  { id: 4, title: "Barba Estilizada", image: "/gallery/corte4.jpg" },
  { id: 5, title: "Corte Executivo", image: "/gallery/corte5.jpg" },
];

export const PLANS = [
  {
    id: 1,
    name: "Plano Mensal",
    description: "1 corte por mês",
    features: ["1 corte mensal", "Agendamento preferencial", "Desconto especial"],
  },
  {
    id: 2,
    name: "Plano Trimestral",
    description: "3 cortes em 3 meses",
    features: ["3 cortes em 3 meses", "Agendamento preferencial", "Desconto de 10%"],
  },
  {
    id: 3,
    name: "Plano Semestral",
    description: "6 cortes em 6 meses",
    features: ["6 cortes em 6 meses", "Agendamento preferencial", "Desconto de 15%"],
  },
  {
    id: 4,
    name: "Plano Anual",
    description: "12 cortes no ano",
    features: ["12 cortes no ano", "Agendamento preferencial", "Desconto de 20%", "Benefícios exclusivos"],
  },
];

export const NAVIGATION_ITEMS = [
  { label: "Início", href: "#inicio" },
  { label: "Agendamento", href: "#agendamento" },
  { label: "Trabalhos", href: "#trabalhos" },
  { label: "Unidades", href: "#unidades" },
  { label: "Feedbacks", href: "#feedbacks" },
  { label: "Planos", href: "#planos" },
  { label: "Contato", href: "#contato" },
];

