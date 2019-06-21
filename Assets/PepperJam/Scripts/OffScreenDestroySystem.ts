
namespace game {

    /** New System */
    export class OffScreenDestroySystem extends ut.ComponentSystem {
        
        static OffScreenLimitX: Number = 1000;
        static OffScreenLimitY: Number = 1000;

        OnUpdate():void {
            this.world.forEach([ut.Entity, ut.Core2D.TransformLocalPosition, game.DestroyOffScreenTag], (entity, position) => {
                let localPosition = position.position;

                if(localPosition.x >= game.OffScreenDestroySystem.OffScreenLimitX 
                || localPosition.x <= -game.OffScreenDestroySystem.OffScreenLimitX
                || localPosition.y >= game.OffScreenDestroySystem.OffScreenLimitY
                || localPosition.y <= -game.OffScreenDestroySystem.OffScreenLimitY){
                
                    console.log("Destroy");
                    this.world.destroyEntity(entity);
                }
            });
        }
    }
}
