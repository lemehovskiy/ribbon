import {initIconsCofig, generateGrid} from "./helpers.es6";

class Ribbon {
    constructor() {
        let self = this;
        var app = new PIXI.Application(1500, 1000, {backgroundColor : 0x1099bb});
        document.body.appendChild(app.view);

        const loader = new PIXI.loaders.Loader () // you can also create your own if you want

        const sprites = {};

// Chainable `add` to enqueue a resource
        loader.add('ribbon', './ribbon.png')
            .add('icon1',  './ribbon-icons/ribbon-icon-1.png');

        let container = new PIXI.Container();

        loader.load((loader, resources) => {

            sprites.ribbon = new PIXI.Sprite(resources.ribbon.texture);
            sprites.icon1 = new PIXI.Sprite(resources.icon1.texture);


            container.addChild(sprites.ribbon);

            app.stage.addChild(container);

            console.log(container.width);

            container.x = app.screen.width / 2;
            container.y = app.screen.height / 2;

            container.pivot.x = container.width / 2;
            container.pivot.y = container.height / 2;
        });


        // var texture = PIXI.Texture.fromImage('./ribbon.png');

        // var bunny = PIXI.Sprite.fromImage('./ribbon.png')

        // center the sprite's anchor point
        // bunny.anchor.set(0.5);

// move the sprite to the center of the screen
//

        // container.x = app.screen.width / 2;
        // container.y = app.screen.height / 2;


        // console.log(container.width);



// Listen for animate update
        app.ticker.add(function(delta) {
            // just for fun, let's rotate mr rabbit a little
            // delta is 1 if running at 100% performance
            // creates frame-independent transformation
            container.rotation += 0.1 * delta;
        });
        

        self.gridCellSize = 6;

        self.state = {
            grid: [],
            icons: []
        }

        self.iconUrls = [
            './ribbon-icons/ribbon-icon-1.png',
            './ribbon-icons/ribbon-icon-2.png',
            './ribbon-icons/ribbon-icon-3.png',
            './ribbon-icons/ribbon-icon-4.png',
            './ribbon-icons/ribbon-icon-5.png',
            './ribbon-icons/ribbon-icon-6.png',
            './ribbon-icons/ribbon-icon-7.png',
            './ribbon-icons/ribbon-icon-8.png',
            './ribbon-icons/ribbon-icon-9.png'
        ];

        self.ribbonImage = './ribbon.png';


        generateGrid(self.ribbonImage, self.gridCellSize).then(
            response => {
                self.state.grid = response;

                console.log(response);

                // initIconsCofig(self.state.grid, self.iconUrls, self.gridCellSize)
                //     .then(response => {
                //         self.state.icons = response;
                //         self.state.icons.forEach(icon => {
                //             self.ctx.drawImage(icon.image, icon.x, icon.y, self.gridCellSize, self.gridCellSize);
                //         })
                //     });
            }
        )
    }
}

export default Ribbon;