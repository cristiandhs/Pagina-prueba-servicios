import type { Service } from '../types';

export function createServiceCard(service: Service): HTMLElement {
  const article = document.createElement('article');
  article.className = 'service-card';
  article.setAttribute('data-id', service.id);

  const h3 = document.createElement('h3');
  h3.textContent = service.title;

  const p = document.createElement('p');
  p.textContent = service.description;

  const ul = document.createElement('ul');
  service.features.forEach(f => {
    const li = document.createElement('li');
    li.textContent = f;
    ul.appendChild(li);
  });

  article.appendChild(h3);
  article.appendChild(p);
  article.appendChild(ul);

  return article;
}
