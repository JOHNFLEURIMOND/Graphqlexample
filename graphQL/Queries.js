import { gql } from '@apollo/client';

export const GET_PRODUCT = gql`
query Product($id: ID!) {
  Product(id: $id){
      Image
      Name
      Prices
      strainType
      THCContent
      CBDContent
      Description
      effects
}
}
`;
