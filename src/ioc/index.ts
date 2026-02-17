import IoCContainer from 'ioc-lite';

// import { Logger } from '../services/logger';
// import { HTTP } from '../services/http';
// import { Users } from '../services/users';

export const createIoCContainer = () =>  {
  const ioc = new IoCContainer();
  // you can register some resources right now below...

  return ioc;
};
