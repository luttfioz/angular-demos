import { EDemoPage } from './app.po';

describe('e-demo App', function() {
  let page: EDemoPage;

  beforeEach(() => {
    page = new EDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
