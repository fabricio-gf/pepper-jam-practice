
namespace game {

    /** New System */
    export class BulletSystem extends ut.ComponentSystem {
        
        static bulletOffset: Vector3 = new Vector3(5,0,0);
        static isAwake: boolean = false;

        OnUpdate():void {

            if(!game.BulletSystem.isAwake){
                let playerPosition;
                
                this.world.forEach([ut.Core2D.TransformLocalPosition, PlayerTag], (objPos) => {
                    playerPosition = objPos.position;
                });

                console.log(playerPosition);

                this.world.forEach([ut.Core2D.TransformLocalPosition, BulletTag], (objPos, bulletTag) => {
                    objPos.position = playerPosition.add(game.BulletSystem.bulletOffset);
                });
                game.BulletSystem.isAwake = true;
            }

            //bullet hits something
            this.world.forEach([ut.Entity, game.BulletTag, ut.HitBox2D.HitBoxOverlapResults], (bullet, move, bulletTag, results) => {
                this.world.destroyEntity(bullet);
            });

        }
    }
}
