import { DDemoPage } from './app.po';

describe('d-demo App', function() {
  let page: DDemoPage;

  beforeEach(() => {
    page = new DDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
