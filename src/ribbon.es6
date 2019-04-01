import anime from 'animejs/lib/anime.es.js';
import {initIconsCofig, generateGrid, fitSpriteToSize, compareRandom} from "./helpers.es6";

class Ribbon {
    constructor() {
        let self = this;
        var app = new PIXI.Application(1400, 1000, {backgroundColor: 0x1099bb});
        document.body.appendChild(app.view);
        const loader = new PIXI.loaders.Loader() // you can also create your own if you want
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

        self.gridCellSize = 2;

        self.state = {
            grid: [],
            gridPxInPercent: 0
        }

        self.scaleFactor = 0;

        generateGrid('./ribbon.png', self.gridCellSize).then(
            response => {
                self.state.grid = response;

                initIconsCofig(self.state.grid, self.iconsUrl, self.gridCellSize)
                    .then(response => {
                        // self.state.grid = response.sort(compareRandom);
                        self.state.grid = response;

                        self.state.grid.forEach(item => {

                            fitSpriteToSize(item.image, self.state.gridPxInPercentX * self.gridCellSize, self.state.gridPxInPercentX * self.gridCellSize);
                            container.addChild(item.image);

                            item.image.x = self.state.gridPxInPercentX * item.x;
                            item.image.y = self.state.gridPxInPercentY * item.y;
                            item.originWidth = item.image.width;
                            item.originHeight = item.image.height;

                            // item.image.scale.set(0);

                            item.image.pivot.x = item.image.texture.orig.width / 2;
                            item.image.pivot.y = item.image.texture.orig.height / 2;
                        })

                        // let counter = 0;
                        // self.state.grid.forEach((item, index) => {
                        //     anime({
                        //         duration: 2000,
                        //         targets: item.image.scale,
                        //         x: item.originWidth / item.image.texture.orig.width,
                        //         y: item.originHeight / item.image.texture.orig.height,
                        //         delay: index / 2
                        //     });
                        //     counter++;
                        // })


                        let button = document.getElementById("ribbon-icon");

                        self.state.grid[5].image.scale.set(1.5);

                        let targetPosition = self.state.grid[5].image.getGlobalPosition();

                        console.log(app.view.getBoundingClientRect().y);

                        // console.log(targetPosition);

                        // console.log(button.getBoundingClientRect());

                        // console.log(targetPosition.y);
                        anime({
                            duration: 2000,
                            targets: "#ribbon-icon",
                            translateX: targetPosition.x,
                            translateY: targetPosition.y + (window.scrollY + app.view.getBoundingClientRect().y) -  (window.scrollY  + button.getBoundingClientRect().y)
                        });


                        button.addEventListener("click", (event) => {
                            // console.log();
                            // console.log(this.getBoundingClientRect());
                            // console.log('asdfsd');


                            // console.log(event.target.getBoundingClientRect());

                            // console.log(targetPosition.y);
                            // anime({
                            //     duration: 2000,
                            //     targets: "#ribbon-icon",
                            //     translateX: targetPosition.x,
                            //     translateY: targetPosition.y + window.scrollY + event.target.getBoundingClientRect().y
                            // });

                        })

                    });
            }
        )
    }
}

export default Ribbon;