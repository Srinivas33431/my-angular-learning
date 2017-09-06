import { AngularWorkPage } from './app.po';

describe('angular-work App', function() {
  let page: AngularWorkPage;

  beforeEach(() => {
    page = new AngularWorkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
