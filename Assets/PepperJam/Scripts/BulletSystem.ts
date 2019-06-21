
namespace game {

    /** New System */
    export class BulletSystem extends ut.ComponentSystem {
        
        OnUpdate():void {

            let dt = this.scheduler.deltaTime();

            this.world.forEach([ut.Entity, game.ForwardVector, ut.Core2D.TransformLocalPosition, game.Move, game.BulletTag], (bullet, vector, position, move) => {
                console.log("Moving bullet");
                
                let localPosition = position.position;
                localPosition.add(vector.forward.normalize().multiplyScalar(move.speed * dt));

                position.position = localPosition;
            });

            this.world.forEach([ut.Entity, game.BulletTag, ut.HitBox2D.HitBoxOverlapResults], (bullet, move, bulletTag, results) => {
                this.world.destroyEntity(bullet);
            });

        }
    }
}
