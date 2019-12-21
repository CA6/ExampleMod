const siloLaunchEffect = newEffect(50, e => {
	var i = 3;
    Draw.color(Color.white, Color.cyan, e.fin());
    Lines.stroke(e.fout() * 5); 
    Lines.poly(e.x, e.y, i, e.fin() * 50, sp);
    sp++;
	});

var cd = 60;
var lvl = 1;
var sp = 1;
var cd = 60;

const silo = extendContent(Block, "scatter-silo", {
    update(tile){
        //when health is lower than max health
        if (1 < 2) {
            //cooldown of 60 ticks
            if (cd > 0) {
                cd--;
            }
            else {
                cd = 60;
                tile.entity.health += 5;
                Effects.effect(siloLaunchEffect, tile)
            }
        }
    }
})