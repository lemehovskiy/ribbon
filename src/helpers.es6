export const loadImages = (imageURLs) => {
    return new Promise(function (resolve, reject) {
        let imagesOkCounter = 0;
        let images = [];

        for (var i = 0; i < imageURLs.length; i++) {
            var img = new Image();
            images.push(img);

            img.onload = function () {
                imagesOkCounter++;
                if (imagesOkCounter >= imageURLs.length) {
                    resolve(images);
                }
            };
            img.src = imageURLs[i];
        }
    })
}

export const loadImage = (imageUrl) => {
    return new Promise(function (resolve, reject) {
        var image = new Image();

        image.onload = function () {
            resolve(image);
        }

        image.src = imageUrl;
    })
}

export const compareRandom = (a, b) => {
    return Math.random() - 0.5;
}


export const initIconsCofig = (grid, iconUrls, gridCellSize) => {
    return new Promise(function (resolve, reject) {

        const loaderIcons = new PIXI.loaders.Loader()
        let iconCounter = 1;

        iconUrls.forEach(iconUrl => {
            loaderIcons.add('icon' + iconCounter++, iconUrl);
        })

        loaderIcons.load((loader, resources) => {
            resolve(grid.map(function (item) {

                // console.log(randomProperty(resources));
                // console.log();


                return {
                    x: item.x,
                    y: item.y,
                    image: new PIXI.Sprite(randomProperty(resources).texture)
                }
            }))
        })
    })
}

export const getRandom = (int) => {
    return Math.floor(Math.random() * int)
}

export const generateGrid = (imageUrl, gridCellSizePercent) => {
    let canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d');

    return new Promise(function (resolve, reject) {
        let imgWidth = 0,
            imgHeight = 0,
            gridCellSize = 0,
            grid = [];

        loadImage(imageUrl).then(
            image => {
                imgWidth = image.width;
                imgHeight = image.height;
                gridCellSize = imgWidth / 100 * gridCellSizePercent;
                ctx.canvas.width = imgWidth;
                ctx.canvas.height = imgHeight;
                ctx.drawImage(image, 0, 0, imgWidth, imgHeight);

                for (let x = 0; x < imgWidth; x += gridCellSize) {
                    for (let y = 0; y < imgHeight; y += gridCellSize) {
                        if (ctx.getImageData(x, y, 1, 1).data[0] !== 0) {
                            grid.push(
                                {x: x / imgWidth * 100, y: y / imgHeight * 100}
                            )
                        }
                    }
                }

                resolve(grid);
            }
        )
    })
}

export const fitSpriteToSize = (sprite, toWidth, toHeight) => {
    const spriteWidth = sprite.width,
        spriteHeight = sprite.height;

    const heightCoef = spriteHeight / toHeight;
    const widthCoef = spriteWidth / toWidth;

    if (heightCoef > widthCoef) {
        sprite.width = spriteWidth / heightCoef;
        sprite.height = toHeight;
    }

    else {
        sprite.height = spriteWidth / heightCoef;
        sprite.width = toWidth;
    }
}

const randomProperty = function (obj) {
    var keys = Object.keys(obj)
    return obj[keys[ keys.length * Math.random() << 0]];
};