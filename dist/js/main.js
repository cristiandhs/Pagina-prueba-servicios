import { ServiceRenderer } from './dom';
import { services } from './servicesData';
document.addEventListener('DOMContentLoaded', () => {
    const renderer = new ServiceRenderer('#services-list');
    renderer.render(services);
});
//# sourceMappingURL=main.js.map