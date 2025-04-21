import { setupWorker } from 'msw/browser';
import { handlers } from '../src/mocks/handlers';

let isWorkerStarted = false;
export const worker = setupWorker(...handlers);

// Start the worker when the page loads
if (typeof window !== 'undefined') {
    if (!isWorkerStarted) {
        worker.start({
            onUnhandledRequest: 'bypass',
            serviceWorker: {
                url: '/mockServiceWorker.js',
                options: {
                    scope: '/',
                },
            },
        });
        isWorkerStarted = true;
    }
} 