class Zone {
    constructor(scene) {
        this.renderZone = () => {
            // new Zone(scene, x, y [, width] [, height])
            // let dropZone = scene.add.zone(480, 285, 315, 355).setRectangleDropZone(315, 355);
            // .on diminue x gauche on augmente droite
            // on diminue y = haut
            let dropZone = scene.add.zone(400, 295, 450, 455).setRectangleDropZone(450, 455);
            // let dropZone = scene.add.zone(700, 375, 900, 250).setRectangleDropZone(900, 250);
            dropZone.setData({cards: 0});
            return dropZone;
        };
        this.renderOutline = (dropZone) => {
            let dropZoneOutline = scene.add.graphics();
            dropZoneOutline.lineStyle(4, 0xff36b4);
            dropZoneOutline.strokeRect(dropZone.x - dropZone.input.hitArea.width/2, dropZone.y - dropZone.input.hitArea.height/2, dropZone.input.hitArea.width, dropZone.input.hitArea.height);
        }
    }
}