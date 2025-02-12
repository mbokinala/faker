import { Faker } from '..';
import pt_BR from '../locales/pt_BR';
import en from '../locales/en';

const faker = new Faker({
  locale: 'pt_BR',
  localeFallback: 'en',
  locales: {
    pt_BR,
    en,
  },
});

export = faker;
