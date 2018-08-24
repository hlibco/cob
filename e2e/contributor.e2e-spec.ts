import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication, HttpStatus } from '@nestjs/common';
import { AppModule } from '../src/modules/app.module';
import { CreateContributionDto } from '../src/modules/contribution/dto/create.contribution.dto';

describe('ContributorController (e2e)', () => {
  let server;
  let app: INestApplication;
  const contributionInfo: CreateContributionDto = {
    contributor: {
      firstName: 'Pablo',
      lastName: 'Picasso',
      photoUrl: 'http://...',
    },
    amount: 200,
  };

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    server = app.getHttpServer();
    await app.init();
  });

  it('/POST /contributions', async () => {
    await request(server)
      .post('/contributions')
      .send(contributionInfo)
      .expect(HttpStatus.CREATED)
      .then(({ body }) => expect(body.uuid).toBeDefined());
  });

  it('/GET /contributions', async () => {
    // Create contribution
    await request(server)
      .post('/contributions')
      .send(contributionInfo)
      .then(({ body }) => expect(body.uuid).toBeDefined());

    // Assert that at least 1 contribution exists
    await request(server)
      .get('/contributions')
      .expect(HttpStatus.OK)
      .then(({ body }) => expect(body.length).toBeGreaterThan(0));
  });

  it('/DELETE /contributions/:uuid', async () => {
    // Create contribution
    const response = await request(server)
      .post('/contributions')
      .send(contributionInfo);
    const contributorUUID = response.body.uuid;

    await request(server)
      .delete(`/contributions/${contributorUUID}`)
      .expect(HttpStatus.OK)
      .then(({ body }) => expect(body.ok).toBe(true));
  });

  afterAll(async () => {
    await app.close();
  });
});
