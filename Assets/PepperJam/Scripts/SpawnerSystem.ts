
namespace game {
    
    /** New System */
    export class SpawnerSystem extends ut.ComponentSystem {
        
        OnUpdate():void {
            let dt = ut.Time.deltaTime();

            this.world.forEach([ut.Entity, ut.Core2D.TransformLocalPosition, game.Spawner], (entity, position, spawner) => {
                if(spawner.isPaused){
                    return;
                }

                let time = spawner.time;
                let delay = spawner.delay;

                time -= dt;

                if(time <= 0){
                    time += delay;

                    let obj = ut.EntityGroup.instantiate(this.world, spawner.spawnGroup)[0];

                    //IF SPAWNED OBJECT IS BULLET
                    // this.world.usingComponentData(obj, [ut.Core2D.TransformLocalPosition, BulletTag], (objPos, bulletTag) => {
                    //     let playerPos = position.position;
                    //     objPos.position = playerPos.add(game.SpawnerSystem.bulletOffset);
                    // });

                    //IF SPAWNED OBJECT IS ENEMY
                    // this.world.usingComponentData(obj, [ut.Core2D.TransformLocalPosition, game.Boundaries, EnemyTag], (objPos, bounds) => {
                    //     let enemyPos = objPos.position;
                    //     //enemyPos = 
                    // });
                }

                spawner.time = time;
            });
        }
    }
}
