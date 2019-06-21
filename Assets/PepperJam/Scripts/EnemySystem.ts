
namespace game {

    /** New System */
    export class EnemySystem extends ut.ComponentSystem {
        
        static isAwake: boolean = false;

        OnUpdate():void {
            if(!game.EnemySystem.isAwake){
                this.world.forEach([ut.Core2D.TransformLocalPosition, Boundaries], (position, bounds) => {
                    let randomY = bounds.minY + Math.random()*(bounds.maxY-bounds.minY);
                    position.position = new Vector3(0, randomY, 0);
                });
            }
        }
    }
}
