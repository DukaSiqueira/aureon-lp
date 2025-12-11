'use client';

export default function SkipToContent() {
  return (
    <a
      href="#inicio"
      className="skip-link"
      onClick={(e) => {
        e.preventDefault();
        const element = document.getElementById('inicio');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          element.focus();
        }
      }}
    >
      Pular para o conteúdo principal
    </a>
  );
}

