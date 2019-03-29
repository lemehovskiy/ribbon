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

export const initIconsCofig = (grid, iconUrls, gridCellSize) => {
    return new Promise(function (resolve, reject) {
        loadImages(iconUrls).then(
            response => {
                resolve(grid.map(function (item) {
                    return {
                        x: item.x - gridCellSize / 2,
                        y: item.y - gridCellSize / 2,
                        image: response[getRandom(response.length)]
                    }
                }))
            }
        )
    })
}

export const getRandom = (int) => {
    return Math.floor(Math.random() * int)
}

export const generateGrid = (imageUrl, gridCellSize) => {
    let canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d');

    return new Promise(function (resolve, reject) {
        let imgWidth = 0,
            imgHeight = 0,
            grid = [];

        loadImage(imageUrl).then(
            image => {
                imgWidth = image.width / 1.5;
                imgHeight = image.height / 1.5;
                ctx.canvas.width = imgWidth;
                ctx.canvas.height = imgHeight;
                ctx.drawImage(image, 0, 0, imgWidth, imgHeight);

                for (let x = 0; x < imgWidth; x += gridCellSize) {
                    for (let y = 0; y < imgHeight; y += gridCellSize) {
                        if (ctx.getImageData(x, y, 1, 1).data[0] !== 0) {
                            grid.push(
                                {x: x, y: y}
                            )
                        }
                    }
                }

                resolve(grid);
            }
        )
    })
}