import { BDemoPage } from './app.po';

describe('b-demo App', function() {
  let page: BDemoPage;

  beforeEach(() => {
    page = new BDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
