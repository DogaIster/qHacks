import { ChatItPage } from './app.po';

describe('chat-it App', function() {
  let page: ChatItPage;

  beforeEach(() => {
    page = new ChatItPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
