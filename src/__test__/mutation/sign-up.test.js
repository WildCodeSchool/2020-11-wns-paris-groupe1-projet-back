/* eslint-disable */
import { createTestClient } from 'apollo-server-testing';
import { gql } from 'apollo-server-express';
import mongoDBConnection, { closeDatabase } from '../../config/db';
import 'dotenv/config';

import { getApolloServer } from '../../server';

describe('Apollo server', () => {
  let mutate;
  beforeEach(async () => {
    await mongoDBConnection(process.env.MONGODB_URI_TEST);
    const testClient = createTestClient(await getApolloServer());
    mutate = testClient.mutate;
  });
  afterAll(async () => {
    await closeDatabase();
  });
  describe('mutation signUp', () => {
    describe('user doesnt exist', () => {
      it('should create and return a new User', async () => {
        const response = await mutate({
          mutation: gql`
            mutation {
              signUp(
                input: {
                  firstname: "Christophe"
                  lastname: "lemercier"
                  birthday: "09/03/1992"
                  email: "lemercier60@gmail.com"
                  password: "testtest"
                }
              ) {
                ... on User {
                  firstname
                  lastname
                  birthday
                  email
                }
                ... on Message {
                  message
                }
              }
            }
          `,
        });
        const output = {
          birthday: '09/03/1992',
          email: 'lemercier60@gmail.com',
          firstname: 'Christophe',
          lastname: 'lemercier',
        };
        expect(response.data.signUp).toEqual(output);
      });
    });
    describe('user already exist', () => {
      it('should return message ', async () => {
        const response = await mutate({
          mutation: gql`
            mutation {
              signUp(
                input: {
                  firstname: "Christophe"
                  lastname: "lemercier"
                  birthday: "09/03/1992"
                  email: "lemercier60@gmail.com"
                  password: "testtest"
                }
              ) {
                ... on User {
                  firstname
                  lastname
                  birthday
                  email
                }
                ... on Message {
                  message
                }
              }
            }
          `,
        });

        const output = { message: "L'email fournie est deja utilisée" };
        expect(response.data.signUp).toEqual(output);
      });
    });
  });
});
