
// namespace game {

//     export class BulletBehaviourFilter extends ut.EntityFilter {
//         bulletPos: ut.Core2D.TransformLocalPosition;
//         tag: game.BulletTag;
//     }

//     export class BulletBehaviour extends ut.ComponentBehaviour {

//         data: BulletBehaviourFilter;

//         static bulletOffset: Vector3 = new Vector3(5,0,0);
//         // ComponentBehaviour lifecycle events
//         // uncomment any method you need
        
//         // this method is called for each entity matching the BulletBehaviourFilter signature, once when enabled
//         OnEntityEnable():void { 
//             let playerPosition;

//             this.world.forEach([ut.Core2D.TransformLocalPosition, PlayerTag], (objPos) => {
//                 playerPosition = objPos.position;
//             });

//             this.data.bulletPos.position = playerPosition.add(game.BulletBehaviour.bulletOffset);
//         }
        
//         // this method is called for each entity matching the BulletBehaviourFilter signature, every frame it's enabled
//         OnEntityUpdate():void { 
//             this.world.forEach([ut.Entity, game.BulletTag, ut.HitBox2D.HitBoxOverlapResults], (bullet, move, bulletTag, results) => {
//                 this.world.destroyEntity(bullet);
//             });
//         }

//         // this method is called for each entity matching the BulletBehaviourFilter signature, once when disabled
//         //OnEntityDisable():void { }

//     }
// }
