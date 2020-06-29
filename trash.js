class Trash {
    constructor() {
        var options ={
            isStatic: true
        }
        this.bodyb = Bodies.rectangle(600, 570, 100, 10, options);
        this.bodyr = Bodies.rectangle(635, 565, 10, 100, options);
        this.bodyl = Bodies.rectangle(565, 565, 10, 100, options);
        World.add(world, this.bodyb);
        World.add(world, this.bodyr);
        World.add(world, this.bodyl);
    }

    display() {
        rectMode(CENTER);
        
        rect(600, 570, 100, 10);
        rect(635, 565, 10, 100);
        rect(565, 565, 10, 100);
    }
}
