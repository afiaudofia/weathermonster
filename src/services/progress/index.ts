import nprogress from 'nprogress';

export const ProgressService = {
  start: () => {
    nprogress.start();
  },
  done: () => {
    nprogress.done();
  },
};
