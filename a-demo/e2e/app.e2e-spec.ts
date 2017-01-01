import { ADemoPage } from './app.po';

describe('a-demo App', function() {
  let page: ADemoPage;

  beforeEach(() => {
    page = new ADemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
