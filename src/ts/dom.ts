import type { Service } from './types';
import { createServiceCard } from './components/serviceCard';

export class ServiceRenderer {
  private container: HTMLElement;

  constructor(containerSelector: string) {
    const el = document.querySelector<HTMLElement>(containerSelector);
    if (!el) throw new Error(`Container not found: ${containerSelector}`);
    this.container = el;
  }

  render(services: Service[]) {
    this.container.innerHTML = '';
    services.forEach(s => {
      const card = createServiceCard(s);
      this.container.appendChild(card);
    });
  }
}
