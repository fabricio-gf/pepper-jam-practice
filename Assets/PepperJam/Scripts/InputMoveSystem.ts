
namespace game {

    /** New System */
    export class InputMoveSystem extends ut.ComponentSystem {


        OnUpdate(): void {

            let dt = this.scheduler.deltaTime();

            this.world.forEach([ut.Entity, game.StepMove, ut.Core2D.TransformLocalPosition], (entity, move, transformlocalposition) => {
                let direction = new Vector3(0, 0, 0);
                let position = transformlocalposition.position as Vector3;

                // Touch support
                let touchEnabled = ut.Core2D.Input.isTouchSupported();
                let touchHappened = false;
                let touchX = -1;
                let touchY = -1;

                if (touchEnabled) {
                    if (ut.Core2D.Input.touchCount() > 0) {
                        let touch = ut.Core2D.Input.getTouch(0);

                        if (touch.phase == ut.Core2D.TouchState.Moved) {
                            touchHappened = true;
                            let swipeVec = move.direction;
                            swipeVec.x += touch.deltaX;
                            swipeVec.y += touch.deltaY;
                            move.direction = swipeVec;
                            touchX = swipeVec.x;
                            touchY = swipeVec.y;
                        }
                        else if (touch.phase == ut.Core2D.TouchState.Ended) {
                            touchHappened = true;
                            let swipeVec = move.direction;
                            swipeVec.x += touch.deltaX;
                            swipeVec.y += touch.deltaY;

                            touchX = swipeVec.x;
                            touchY = swipeVec.y;
                            move.direction = new Vector3(0, 0);
                        }
                    }
                    else {
                        move.direction = new Vector3(0, 0);
                    }
                }

                if ((ut.Runtime.Input.getKeyDown(ut.Core2D.KeyCode.D) || ut.Runtime.Input.getKeyDown(ut.Core2D.KeyCode.RightArrow)) && position.x <= move.threshold) {
                    direction.x += 1;
                }
                if ((ut.Runtime.Input.getKeyDown(ut.Core2D.KeyCode.A) || ut.Runtime.Input.getKeyDown(ut.Core2D.KeyCode.LeftArrow)) && position.x >= -move.threshold) {
                    direction.x -= 1;
                }
                if ((ut.Runtime.Input.getKeyDown(ut.Core2D.KeyCode.W) || ut.Runtime.Input.getKeyDown(ut.Core2D.KeyCode.UpArrow)) && position.y <= move.threshold) {
                    direction.y += 1;
                }
                if ((ut.Runtime.Input.getKeyDown(ut.Core2D.KeyCode.S) || ut.Runtime.Input.getKeyDown(ut.Core2D.KeyCode.DownArrow)) && position.y >= -move.threshold) {
                    direction.y -= 1;
                }

                direction.normalize();
                direction.multiplyScalar(move.stepSize * dt);
                position.add(direction);
                transformlocalposition.position = position;
            });
        }
    }
}
