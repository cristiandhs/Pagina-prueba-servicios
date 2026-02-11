import { createServiceCard } from './components/serviceCard';
export class ServiceRenderer {
    constructor(containerSelector) {
        const el = document.querySelector(containerSelector);
        if (!el)
            throw new Error(`Container not found: ${containerSelector}`);
        this.container = el;
    }
    render(services) {
        this.container.innerHTML = '';
        services.forEach(s => {
            const card = createServiceCard(s);
            this.container.appendChild(card);
        });
    }
}
//# sourceMappingURL=dom.js.map