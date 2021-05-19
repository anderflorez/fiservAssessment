import supertest from 'supertest';
import { app } from './app';

const request = supertest(app);

describe('post /api/v1/parse', () => {

    describe('given a valid input', () => {

        test('should respond with expected object', async () => {
            const expectedObject = {
                "statusCode": 200,
                "data": {
                    "firstName": "JOHN0000",
                    "lastName": "MICHAEL000",
                    "clientId": "9994567"
                }
            };

            const response = await request.post('/api/v1/parse').send({
                "data": "JOHN0000MICHAEL0009994567"
            });

            expect(response.body).toEqual(expectedObject);
        });

        test('should respond with a 200 status code', async () => {
            const response = await request.post('/api/v1/parse').send({
                "data": "JOHN0000MICHAEL0009994567"
            });

            expect(response.statusCode).toBe(200);
        });
    });

    describe('giving an invalid input', () => {

        test('should respond with error message object', async () => {
            const expectedObject = {
                "error": "Invalid input"
            };

            const response = await request.post('/api/v1/parse').send({
                "data": "JOHN00MICHAEL0009994567"
            });

            expect(response.body).toEqual(expectedObject);
        });

        test('should respond with a 400 status code', async () => {
            const response = await request.post('/api/v1/parse').send({
                "data": "JOHN00MICHAEL0009994567"
            });

            expect(response.statusCode).toBe(400);
        });
    });
});

describe('post /api/v2/parse', () => {

    describe('given a valid input', () => {

        test('should respond with expected object', async () => {
            const expectedObject = {
                statusCode: 200,
                data:  {
                    firstName: 'JOHN',
                    lastName: 'MICHAEL',
                    clientId: '999-4567'
                }
            };

            const response = await request.post('/api/v2/parse').send({
                "data": "JOHN0000MICHAEL0009994567"
            });

            expect(response.body).toEqual(expectedObject);
        });

        test('should respond with a 200 status code', async () => {
            const response = await request.post('/api/v2/parse').send({
                "data": "JOHN0000MICHAEL0009994567"
            });

            expect(response.statusCode).toBe(200);
        });
    });

    describe('giving an invalid input', () => {

        test('should respond with error message object', async () => {
            const expectedObject = {
                "error": "Invalid input"
            };

            const response = await request.post('/api/v2/parse').send({
                "data": "JOHN000MICHAEL0009994567"
            });

            expect(response.body).toEqual(expectedObject);
        });

        test('should respond with a 400 status code', async () => {
            const response = await request.post('/api/v2/parse').send({
                "data": "JOHN000MICHAEL0009994567"
            });

            expect(response.statusCode).toBe(400);
        });
    });
});