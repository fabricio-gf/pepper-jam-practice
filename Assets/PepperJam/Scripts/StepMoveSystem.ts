
namespace game {

    /** New System */
    export class StepMoveSystem extends ut.ComponentSystem {

        OnUpdate(): void {
            this.world.forEach([ut.Entity, game.Move, ut.Core2D.TransformLocalPosition],
                (entity, move, transform) => {
                    let step = transform.position;
                    let localDirection = move.direction;
                    localDirection.normalize();
                    step.add(move.direction);
                    transform.position = step;
                });
        }
    }
}

