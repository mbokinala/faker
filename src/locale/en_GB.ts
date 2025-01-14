import { Faker } from '..';
import en_GB from '../locales/en_GB';
import en from '../locales/en';

const faker = new Faker({
  locale: 'en_GB',
  localeFallback: 'en',
  locales: {
    en_GB,
    en,
  },
});

export = faker;
