
namespace game {

    /** New System */
    export class BulletSystem extends ut.ComponentSystem {
        
        OnUpdate():void {

            let dt = this.scheduler.deltaTime();

            this.world.forEach([ut.Entity, ut.Core2D.TransformLocalRotation, ut.Core2D.TransformLocalPosition, game.Move, game.BulletTag], (bullet, rotation, position, move, BulletTag) => {
                
            });

            this.world.forEach([ut.Entity, game.BulletTag, ut.HitBox2D.HitBoxOverlapResults], (bullet, move, bulletTag, results) => {
                this.world.destroyEntity(bullet);
            });
        }
    }
}
