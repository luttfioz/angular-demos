import { CDemoPage } from './app.po';

describe('c-demo App', function() {
  let page: CDemoPage;

  beforeEach(() => {
    page = new CDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
