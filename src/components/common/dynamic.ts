import dynamic from 'next/dynamic';

/**
 * The dynamically imported `Modal` component that
 * skips SSR to disable pre-rendering
 */
const Modal = dynamic(() => import('./modal'), {
  ssr: false,
});

export {
  Modal,
};
