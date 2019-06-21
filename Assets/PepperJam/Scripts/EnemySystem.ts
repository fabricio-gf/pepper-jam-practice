
namespace game {

    /** New System */
    export class EnemySystem extends ut.ComponentSystem {
        
        OnEnable():void{
            this.world.forEach([ut.Core2D.TransformLocalPosition, Boundaries], (position, bounds) => {
                let randomY = bounds.minY + Math.random()*(bounds.maxY-bounds.minY);
                position.position = new Vector3(0, randomY, 0);
            });
        }

        OnUpdate():void {

        }
    }
}
