import { DevProjectPage } from './app.po';

describe('dev-project App', () => {
  let page: DevProjectPage;

  beforeEach(() => {
    page = new DevProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
