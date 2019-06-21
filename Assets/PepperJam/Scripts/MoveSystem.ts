
namespace game {

    /** New System */
    export class MoveSystem extends ut.ComponentSystem {
        
        OnUpdate():void {

            let dt = this.scheduler.deltaTime();

            this.world.forEach([ut.Entity, game.ForwardVector, ut.Core2D.TransformLocalPosition, game.Move], (obj, vector, position, move) => {
                let localPosition = position.position;
                localPosition.add(vector.forward.normalize().multiplyScalar(move.speed * dt));

                position.position = localPosition;
            });
        }
    }
}
