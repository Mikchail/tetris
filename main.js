window.game = new Game();

const root = document.querySelector('#root');
window.view = new View(root, 480, 640, 20, 10);
window.controller = new Controller(game,view);


// view.renderGameOverScreen(game.getState());