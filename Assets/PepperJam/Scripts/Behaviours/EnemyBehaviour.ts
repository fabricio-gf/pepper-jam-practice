
// namespace game {

//     export class EnemyBehaviourFilter extends ut.EntityFilter {
//         enemyPosition: ut.Core2D.TransformLocalPosition;
//         bounds: game.Boundaries;
//     }

//     export class EnemyBehaviour extends ut.ComponentBehaviour {

//         data: EnemyBehaviourFilter;

//         // ComponentBehaviour lifecycle events
//         // uncomment any method you need
        
//         // this method is called for each entity matching the EnemyBehaviourFilter signature, once when enabled
//         OnEntityEnable():void { 

//             let randomY = this.data.bounds.minY + Math.random()*(this.data.bounds.maxY-this.data.bounds.minY);
//             this.data.enemyPosition.position = new Vector3(0, randomY, 0);
//         }
        
//         // this method is called for each entity matching the EnemyBehaviourFilter signature, every frame it's enabled
//         //OnEntityUpdate():void { }

//         // this method is called for each entity matching the EnemyBehaviourFilter signature, once when disabled
//         //OnEntityDisable():void { }

//     }
// }
