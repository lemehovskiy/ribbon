import {initIconsCofig, generateGrid} from "./helpers.es6";

class Ribbon {
    constructor() {
        let self = this;

        self.canvas = document.getElementById('canvas');
        self.ctx = canvas.getContext('2d');
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


        generateGrid(self.ribbonImage, self.ctx, self.gridCellSize).then(
            response => {
                self.state.grid = response;
                initIconsCofig(self.state.grid, self.iconUrls, self.gridCellSize)
                    .then(response => {
                        self.state.icons = response;


                        self.state.icons.forEach(icon => {
                            self.ctx.drawImage(icon.image, icon.x, icon.y, self.gridCellSize, self.gridCellSize);
                        })
                    });
            }
        )
    }
}

export default Ribbon;