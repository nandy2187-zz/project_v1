import { RecetasAppPage } from './app.po';

describe('recetas-app App', function() {
  let page: RecetasAppPage;

  beforeEach(() => {
    page = new RecetasAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
