import React, { useEffect } from 'react';

export default function Seo({ title, description, path = "" }) {
  // Define un título base y una descripción base para toda la empresa
  // Estos se usarán si no se proporcionan props específicas o como un fallback
  const baseTitle = "Delta Tecnologías | Electricidad, Seguridad y Energía Solar en Santiago, IV a VII Región de Chile";
  const baseDescription = "Delta Tecnologías: Expertos en instalaciones eléctricas certificadas, sistemas de seguridad (alarmas, cercos eléctricos, CCTV), paneles solares, domótica y redes de datos. Ofrecemos soluciones integrales y atención de emergencias 24/7 para hogares y empresas en Santiago, Coquimbo (IV), Valparaíso (V), O'Higgins (VI) y Maule (VII). Consulta y asesoría técnica especializada.";

  // URL base para el sitio
  const baseUrl = "https://deltatecnologias.cl";
  const canonicalUrl = `${baseUrl}${path}`; // Construye la URL canónica para cada página

  useEffect(() => {
    // Función auxiliar para crear o actualizar una meta tag
    const updateMetaTag = (selector, attributeName, attributeValue, content) => {
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attributeName, attributeValue);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
      return tag;
    };

    // Función auxiliar para crear o actualizar una link tag
    const updateLinkTag = (relValue, href) => {
      let tag = document.querySelector(`link[rel="${relValue}"]`);
      if (!tag) {
        tag = document.createElement('link');
        tag.setAttribute('rel', relValue);
        document.head.appendChild(tag);
      }
      tag.setAttribute('href', href);
      return tag;
    };

    // 1. Actualizar el título de la página
    document.title = title ? `${title} | Delta Tecnologías` : baseTitle;

    // 2. Actualizar o crear la meta descripción
    updateMetaTag('meta[name="description"]', 'name', 'description', description || baseDescription);

    // 3. Actualizar o crear el link canonical
    updateLinkTag('canonical', canonicalUrl);

    // 4. Actualizar o crear Open Graph Tags (para compartir en redes sociales)
    const ogTitleContent = title ? `${title} | Delta Tecnologías` : baseTitle;
    const ogDescriptionContent = description || baseDescription;

    updateMetaTag('meta[property="og:title"]', 'property', 'og:title', ogTitleContent);
    updateMetaTag('meta[property="og:description"]', 'property', 'og:description', ogDescriptionContent);
    updateMetaTag('meta[property="og:type"]', 'property', 'og:type', 'website');
    updateMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    updateMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', 'Delta Tecnologías');
    // Para Open Graph Image, reemplaza con la URL de una imagen representativa de tu sitio (ej. logo, banner de servicios)
    // updateMetaTag('meta[property="og:image"]', 'property', 'og:image', 'https://deltatecnologias.cl/assets/img/og-image.jpg'); 
    // updateMetaTag('meta[property="og:locale"]', 'property', 'og:locale', 'es_CL'); // Especifica el idioma y región

    // 5. Actualizar o crear Twitter Card Tags (para compartir en Twitter)
    updateMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image'); // O "summary" para una tarjeta más pequeña
    updateMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', ogTitleContent);
    updateMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', ogDescriptionContent);
    // Para Twitter Image, reemplaza con la URL de una imagen representativa de tu sitio
    // updateMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', 'https://deltatecnologias.cl/assets/img/twitter-image.jpg'); 
    // updateMetaTag('meta[name="twitter:site"]', 'name', 'twitter:site', '@TuUsuarioDeTwitter'); // Tu handle de Twitter

    // 6. Charset y Viewport (fundamentales para todas las páginas, para asegurar que estén presentes)
    let charsetMeta = document.querySelector('meta[charset]');
    if (!charsetMeta) {
      charsetMeta = document.createElement('meta');
      charsetMeta.setAttribute('charset', 'utf-8');
      document.head.prepend(charsetMeta); // Preferiblemente al principio del head
    }

    let viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      viewportMeta = document.createElement('meta');
      viewportMeta.setAttribute('name', 'viewport');
      viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1');
      document.head.appendChild(viewportMeta);
    }

  }, [title, description, path, baseTitle, baseDescription, canonicalUrl]); // Dependencias del useEffect

  return null; // El componente no renderiza nada en el DOM, solo maneja efectos secundarios
}
