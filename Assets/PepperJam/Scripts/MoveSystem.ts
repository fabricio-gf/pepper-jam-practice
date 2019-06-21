
namespace game {

    /** New System */
    export class MoveSystem extends ut.ComponentSystem {
        
        OnUpdate(): void {
            this.world.forEach([ut.Entity, game.Move, ut.Core2D.TransformLocalPosition],
                (entity, move, transform) => {
                    let step = transform.position;
                    let localDirection = move.direction;
                    localDirection.normalize();
                    localDirection.multiplyScalar(move.speed);
                    step.add(move.direction);
                    transform.position = step;
                });
        }
    }
}
