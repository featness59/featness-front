/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Statistiques: {
            screens: {
              Statistiques: 'one',
            },
          },
          Acceuil: {
            screens: {
              Acceuil: 'two',
            },
          },
          Utilisateur: {
            screens: {
              Utilisateur: 'three',
            },
          }
        },
      },
      Modal: 'modal',
      NotFound: '*',
      Inscription: 'inscription',
      Connexion: 'connexion',
      Pushup: 'Pushup',

    },
  },
};

export default linking;
