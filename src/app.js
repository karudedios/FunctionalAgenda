export class App {
  configureRouter(config, router) {
    config.title = 'Test App';

    let buildRoute = (route, name, moduleId, nav, title) => ({
      route, name, moduleId, nav, title: `Test App - ${title}`
    });

    config.map([
      buildRoute(['', 'index'], 'index', 'index', true, 'Index')
    ]);

    this.router = router;
  }
}