import { Test, TestingModule } from '@nestjs/testing';
import { AddAppController } from './add-app.controller';
import { AddAppService } from './add-app.service';

describe('AddAppController', () => {
  let addAppController: AddAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AddAppController],
      providers: [AddAppService],
    }).compile();

    addAppController = app.get<AddAppController>(AddAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(addAppController.getHello()).toBe('Hello World!');
    });
  });
});
