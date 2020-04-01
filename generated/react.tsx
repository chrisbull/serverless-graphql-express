/* eslint-disable */
/* DO NOT MODIFY - THESE ARE AUTO GENERATED */
import gql from 'graphql-tag';
export type Maybe<T> = T | null;


/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export type CacheControlScope = 
  'PUBLIC' |
  'PRIVATE';

export type Query = {
  hello?: Maybe<Scalars['String']>;
};





      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }
      const result: IntrospectionResultData = {
  "__schema": {
    "types": []
  }
};
      export default result;
    