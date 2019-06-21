
namespace game {

    /** New System */
    export class BulletSystem extends ut.ComponentSystem {
        
        static bulletOffset: Vector3 = new Vector3(5,0,0);

        OnEnable():void {

            let playerPosition;
            
            this.world.forEach([ut.Core2D.TransformLocalPosition, PlayerTag], (objPos) => {
                playerPosition = objPos.position;
            });

            console.log(playerPosition);

            this.world.forEach([ut.Core2D.TransformLocalPosition, BulletTag], (objPos, bulletTag) => {
                objPos.position = playerPosition.add(game.BulletSystem.bulletOffset);
            });
        }

        OnUpdate():void {

            //let dt = this.scheduler.deltaTime();

            //move bullet
            // this.world.forEach([ut.Entity, game.ForwardVector, ut.Core2D.TransformLocalPosition, game.Move, game.BulletTag], (bullet, vector, position, move) => {
            //     console.log("Moving bullet");
                
            //     let localPosition = position.position;
            //     localPosition.add(vector.forward.normalize().multiplyScalar(move.speed * dt));

            //     position.position = localPosition;
            // });

            //bullet hits something
            this.world.forEach([ut.Entity, game.BulletTag, ut.HitBox2D.HitBoxOverlapResults], (bullet, move, bulletTag, results) => {
                this.world.destroyEntity(bullet);
            });

        }
    }
}
