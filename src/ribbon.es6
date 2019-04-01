import {initIconsCofig, generateGrid, fitSpriteToSize} from "./helpers.es6";

class Ribbon {
    constructor() {
        let self = this;
        var app = new PIXI.Application(1400, 1000, {backgroundColor : 0x1099bb});
        document.body.appendChild(app.view);

        const loader = new PIXI.loaders.Loader () // you can also create your own if you want
        const sprites = {};

        loader.add('ribbon', './ribbon.png');

        
        self.iconsUrl = [
            './ribbon-icons/ribbon-icon-1.png',
            './ribbon-icons/ribbon-icon-2.png',
            './ribbon-icons/ribbon-icon-3.png',
            './ribbon-icons/ribbon-icon-4.png',
            './ribbon-icons/ribbon-icon-5.png',
            './ribbon-icons/ribbon-icon-6.png'
        ]
        

        let container = new PIXI.Container();

        loader.load((loader, resources) => {

            // console.log(resources);

            sprites.ribbon = new PIXI.Sprite(resources.ribbon.texture);

            fitSpriteToSize(sprites.ribbon, app.screen.width, app.screen.height)

            container.addChild(sprites.ribbon);
            
            app.stage.addChild(container);

            container.x = app.screen.width / 2;
            container.y = app.screen.height / 2;

            container.pivot.x = container.width / 2;
            container.pivot.y = container.height / 2;

            self.state.gridPxInPercentX = container.width / 100;
            self.state.gridPxInPercentY = container.height / 100;
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
            // container.rotation += 0.1 * delta;
        });


        self.gridCellSize = 6;

        self.state = {
            grid: [],
            gridPxInPercent: 0
        }



        generateGrid('./ribbon.png', self.gridCellSize).then(
            response => {
                self.state.grid = response;

                // console.log(response);
                
                initIconsCofig(self.state.grid, self.iconsUrl, self.gridCellSize)
                    .then(response => {
                        self.state.grid = response;

                        // console.log(response[0].image.height);

                        self.state.grid.forEach(item => {

                            // console.log(item.image.height);


                            fitSpriteToSize(item.image, self.state.gridPxInPercentX * self.gridCellSize, self.state.gridPxInPercentX * self.gridCellSize);
                            //
                            container.addChild(item.image);

                            item.image.x = self.state.gridPxInPercentX * item.x;
                            item.image.y = self.state.gridPxInPercentY * item.y;

                            //
                            // console.log(icon);
                            //
                            // container.addChild(sprites.ribbon);
                            //
                            // console.log(response);
                            // self.ctx.drawImage(icon.image, icon.x, icon.y, self.gridCellSize, self.gridCellSize);
                        })
                    });
                
            }
        )
    }
}

export default Ribbon;