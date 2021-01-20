import { gql } from '@apollo/client';

export const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      results {
        url
        name
        image
      }
    }
  }
`;

export const GET_POKEMON = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      image: sprites {
        front_default
      }
      moves {
        move {
          name
        }
      }
      types {
        slot
        type {
          name
        }
      }
      statuses: stats {
        value: base_stat
        stat {
          name
        }
      }
    }
  }
`;
