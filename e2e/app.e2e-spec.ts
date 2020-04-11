import { NicholasallicockWeb6Page } from './app.po';

describe('nicholasallicock-web6 App', function() {
  let page: NicholasallicockWeb6Page;

  beforeEach(() => {
    page = new NicholasallicockWeb6Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
