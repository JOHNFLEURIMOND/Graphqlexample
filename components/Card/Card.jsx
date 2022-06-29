import React, { useState } from 'react';
import 'cross-fetch/polyfill';
import Loading from './Loading';
import {
  CardWrapper,
  CardHeader,
  ThcCbdTitleFieldset,
  CardBody,
  PriceFieldset,
  NameFieldset,
  FlippedCardInfoFieldset,
  StrainFieldset,
  Bolt,
} from './index';
import { useQuery } from '@apollo/client';
import { GET_PRODUCT } from '../../graphQL/Queries';

export default function getProductCard(props) {
  const [card, flipCard] = useState(false);
  const { loading, data, error } = useQuery(GET_PRODUCT, { variables: { id: 2 } });

  if (error) return <h1> Error Found</h1>;
  if (loading) return <Loading />;

  if (data) {
    return (
      <div>
        {card ? (
          <CardWrapper>
            <CardBody key={data.Product.id} onClick={() => flipCard(false)}>
              <CardHeader role='img' aria-label='Description of the overall image'>
                <img
                  src={data.Product.Image}
                  aria-label='A white cyclinder tube with a red top, with a label: Purefectionery | Eclipse Gummie. With the company logo'
                  style={{ height: 150, width: 230 }}
                />
              </CardHeader>
              <div
                role='contentInfo'
                aria-pressed='true'
                aria-label='Product Card with a Image and a Description of product, Effects and Type Data.'
              >
                <ul>
                  <li>
                    {' '}
                    <FlippedCardInfoFieldset>
                      <b>Description:</b> {data.Product.Description}:{' '}
                    </FlippedCardInfoFieldset>
                  </li>
                  <li>
                    {' '}
                    <FlippedCardInfoFieldset>
                      <b>Effects:</b>
                      <ul>
                        <li>{Object.entries(data.Product.effects).forEach(([key, value]) => `${key} ${value}`)}</li>
                      </ul>
                    </FlippedCardInfoFieldset>
                  </li>
                  <li>
                    {' '}
                    <FlippedCardInfoFieldset>
                      <b>Strain type :</b> {data.Product.strainType}{' '}
                    </FlippedCardInfoFieldset>
                  </li>
                </ul>
              </div>
            </CardBody>
          </CardWrapper>
        ) : (
          <CardWrapper>
            <CardBody
              key={data.Product.id}
              onClick={() => flipCard(true)}
              role='contentInfo'
              aria-pressed='false'
              aria-label='Product Card with a Image and a list of price, type of strain, thc and cbd levels.'
            >
              <CardHeader role='img' aria-label='Description of the Product image'>
                <img src={data.Product.Image} style={{ height: 150, width: 230 }} />
              </CardHeader>

              <main
                role='contentInfo'
                aria-pressed='true'
                aria-label='Product Card with a Image and a Description of product, Effects and Type Data.'
              >
                <PriceFieldset aria-label='Price is 18 dollars'> ${data.Product.Prices}.00 </PriceFieldset>
                <NameFieldset aria-label='The name of the product is Purefectionery | Eclipse Gummies'>
                  {' '}
                  {data.Product.Name}{' '}
                </NameFieldset>
                <StrainFieldset aria-label='Hybrid Strain Type.'>
                  {' '}
                  <Bolt /> {data.Product.strainType}{' '}
                </StrainFieldset>
                <ThcCbdTitleFieldset aria-label='THC Level is 20% per serving | CBD Level is 20% per serving'>
                  {' '}
                  <b>THC</b>: {data.Product.THCContent}% | <b>CBD:</b> {data.Product.CBDContent}%{' '}
                </ThcCbdTitleFieldset>
              </main>
            </CardBody>
          </CardWrapper>
        )}
      </div>
    );
  }
}
