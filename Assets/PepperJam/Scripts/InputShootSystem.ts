
namespace game {

    /** New System */
    export class InputShootSystem extends ut.ComponentSystem {
        
        OnUpdate():void {
            let dt = ut.Time.deltaTime();

            this.world.forEach([ut.Entity, game.Shoot], (entity, shoot) => {
                if(shoot.isPaused){
                    return;
                }

                let time = shoot.time;
                let delay = shoot.delay;

                time -= dt;

                if(time <= 0){
                    time += delay;

                    ut.EntityGroup.instantiate(this.world, shoot.bulletGroup);
                }

                shoot.time = time;
            });
        }
    }
}
