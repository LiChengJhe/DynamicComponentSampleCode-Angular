import { SampleCodeModule } from './sample-code.module';

describe('SampleCodeModule', () => {
  let sampleCodeModule: SampleCodeModule;

  beforeEach(() => {
    sampleCodeModule = new SampleCodeModule();
  });

  it('should create an instance', () => {
    expect(sampleCodeModule).toBeTruthy();
  });
});
