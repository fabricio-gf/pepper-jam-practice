var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var game;
(function (game) {
    /** New System */
    var BulletSystem = /** @class */ (function (_super) {
        __extends(BulletSystem, _super);
        function BulletSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BulletSystem.prototype.OnUpdate = function () {
            var _this = this;
            var dt = this.scheduler.deltaTime();
            this.world.forEach([ut.Entity, game.ForwardVector, ut.Core2D.TransformLocalPosition, game.Move, game.BulletTag], function (bullet, vector, position, move) {
                console.log("Moving bullet");
                var localPosition = position.position;
                localPosition.add(vector.forward.normalize().multiplyScalar(move.speed * dt));
                position.position = localPosition;
            });
            this.world.forEach([ut.Entity, game.BulletTag, ut.HitBox2D.HitBoxOverlapResults], function (bullet, move, bulletTag, results) {
                _this.world.destroyEntity(bullet);
            });
        };
        return BulletSystem;
    }(ut.ComponentSystem));
    game.BulletSystem = BulletSystem;
})(game || (game = {}));
var game;
(function (game) {
    var GameService = /** @class */ (function () {
        function GameService() {
        }
        GameService.restart = function (world) {
            //return; //Uncomment this line if you don't want the game to restart
            var _this = this;
            setTimeout(function () {
                _this.newGame(world);
            }, 3000);
        };
        ;
        GameService.newGame = function (world) {
            ut.Time.reset();
            ut.EntityGroup.destroyAll(world, this.mainGroup);
            ut.EntityGroup.destroyAll(world, this.enemyGroup);
            ut.EntityGroup.destroyAll(world, this.explosionGroup);
            ut.EntityGroup.instantiate(world, this.mainGroup);
        };
        ;
        GameService.mainGroup = 'game.MainGroup';
        GameService.enemyGroup = 'game.EnemyGroup';
        GameService.explosionGroup = 'game.ExplosionGroup';
        return GameService;
    }());
    game.GameService = GameService;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var InputMoveSystem = /** @class */ (function (_super) {
        __extends(InputMoveSystem, _super);
        function InputMoveSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        InputMoveSystem.prototype.OnUpdate = function () {
            var dt = this.scheduler.deltaTime();
            this.world.forEach([ut.Entity, game.Move, ut.Core2D.TransformLocalPosition, game.MoveWithInput], function (entity, move, transformlocalposition, inputTag) {
                var direction = new Vector3(0, 0, 0);
                var position = transformlocalposition.position;
                // Touch support
                var touchEnabled = ut.Core2D.Input.isTouchSupported();
                var touchHappened = false;
                var touchX = -1;
                var touchY = -1;
                if (touchEnabled) {
                    if (ut.Core2D.Input.touchCount() > 0) {
                        var touch = ut.Core2D.Input.getTouch(0);
                        if (touch.phase == ut.Core2D.TouchState.Moved) {
                            touchHappened = true;
                            var swipeVec = move.touchSwipe;
                            swipeVec.x += touch.deltaX;
                            swipeVec.y += touch.deltaY;
                            move.touchSwipe = swipeVec;
                            touchX = swipeVec.x;
                            touchY = swipeVec.y;
                        }
                        else if (touch.phase == ut.Core2D.TouchState.Ended) {
                            touchHappened = true;
                            var swipeVec = move.touchSwipe;
                            swipeVec.x += touch.deltaX;
                            swipeVec.y += touch.deltaY;
                            touchX = swipeVec.x;
                            touchY = swipeVec.y;
                            move.touchSwipe = new Vector2(0, 0);
                        }
                    }
                    else {
                        move.touchSwipe = new Vector2(0, 0);
                    }
                }
                if (touchHappened) {
                    var threshold = 20;
                    //let xDom = Math.abs(touchX) > Math.abs(touchY);
                    if (touchX > threshold /*&& xDom*/ && position.x <= move.threshold) {
                        direction.x += 1;
                    }
                    if (touchX < -threshold /*&& xDom*/ && position.x >= -move.threshold) {
                        direction.x -= 1;
                    }
                    if (touchY > threshold /*&& xDom*/ && position.y <= move.threshold) {
                        direction.y += 1;
                    }
                    if (touchY < -threshold /*&& xDom*/ && position.y >= -move.threshold) {
                        direction.y -= 1;
                    }
                }
                if ((ut.Runtime.Input.getKey(ut.Core2D.KeyCode.D) || ut.Runtime.Input.getKey(ut.Core2D.KeyCode.RightArrow)) && position.x <= move.threshold) {
                    direction.x += 1;
                }
                if ((ut.Runtime.Input.getKey(ut.Core2D.KeyCode.A) || ut.Runtime.Input.getKey(ut.Core2D.KeyCode.LeftArrow)) && position.x >= -move.threshold) {
                    direction.x -= 1;
                }
                if ((ut.Runtime.Input.getKey(ut.Core2D.KeyCode.W) || ut.Runtime.Input.getKey(ut.Core2D.KeyCode.UpArrow)) && position.y <= move.threshold) {
                    direction.y += 1;
                }
                if ((ut.Runtime.Input.getKey(ut.Core2D.KeyCode.S) || ut.Runtime.Input.getKey(ut.Core2D.KeyCode.DownArrow)) && position.y >= -move.threshold) {
                    direction.y -= 1;
                }
                direction.normalize();
                direction.multiplyScalar(move.speed * dt);
                position.add(direction);
                transformlocalposition.position = position;
            });
        };
        return InputMoveSystem;
    }(ut.ComponentSystem));
    game.InputMoveSystem = InputMoveSystem;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var InputShootSystem = /** @class */ (function (_super) {
        __extends(InputShootSystem, _super);
        function InputShootSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        InputShootSystem.prototype.OnUpdate = function () {
            var _this = this;
            var dt = ut.Time.deltaTime();
            this.world.forEach([ut.Entity, game.Shoot], function (entity, shoot) {
                if (shoot.isPaused) {
                    return;
                }
                var time = shoot.time;
                var delay = shoot.delay;
                time -= dt;
                if (time <= 0) {
                    time += delay;
                    ut.EntityGroup.instantiate(_this.world, shoot.bulletGroup);
                }
                shoot.time = time;
            });
        };
        return InputShootSystem;
    }(ut.ComponentSystem));
    game.InputShootSystem = InputShootSystem;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var OffScreenDestroySystem = /** @class */ (function (_super) {
        __extends(OffScreenDestroySystem, _super);
        function OffScreenDestroySystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        OffScreenDestroySystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([ut.Entity, ut.Core2D.TransformLocalPosition, game.DestroyOffScreenTag], function (entity, position) {
                var localPosition = position.position;
                if (localPosition.x >= game.OffScreenDestroySystem.OffScreenLimitX
                    || localPosition.x <= -game.OffScreenDestroySystem.OffScreenLimitX
                    || localPosition.y >= game.OffScreenDestroySystem.OffScreenLimitY
                    || localPosition.y <= -game.OffScreenDestroySystem.OffScreenLimitY) {
                    console.log("Destroy");
                    _this.world.destroyEntity(entity);
                }
            });
        };
        OffScreenDestroySystem.OffScreenLimitX = 1000;
        OffScreenDestroySystem.OffScreenLimitY = 1000;
        return OffScreenDestroySystem;
    }(ut.ComponentSystem));
    game.OffScreenDestroySystem = OffScreenDestroySystem;
})(game || (game = {}));
// namespace game 
// {
//     /** New System */
//     export class ScrollingBackgroundSystem extends ut.ComponentSystem 
// 	{    
//         OnUpdate():void 
// 		{
// 			let dt = ut.Time.deltaTime();
// 			this.world.forEach([ut.Core2D.TransformLocalPosition, game.ScrollingBackground], (position, scrolling) => 
// 			{
// 				let localPosition = position.position;
// 				localPosition.y -= scrolling.speed * dt;
// 				if (localPosition.y < scrolling.threshold) 
// 					localPosition.y += scrolling.distance;
// 				position.position = localPosition;
// 			});
//         }
//     }
// }
var ut;
(function (ut) {
    /**
     * Placeholder system to provide a UnityEngine.Time like API
     *
     * e.g.
     *  let deltaTime = ut.Time.deltaTime();
     *  let time = ut.Time.time();
     *
     */
    var Time = /** @class */ (function (_super) {
        __extends(Time, _super);
        function Time() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Time_1 = Time;
        Time.deltaTime = function () {
            return Time_1._deltaTime;
        };
        Time.time = function () {
            return Time_1._time;
        };
        Time.reset = function () {
            Time_1._time = 0;
        };
        Time.prototype.OnUpdate = function () {
            var dt = this.scheduler.deltaTime();
            Time_1._deltaTime = dt;
            Time_1._time += dt;
        };
        var Time_1;
        Time._deltaTime = 0;
        Time._time = 0;
        Time = Time_1 = __decorate([
            ut.executeBefore(ut.Shared.UserCodeStart)
        ], Time);
        return Time;
    }(ut.ComponentSystem));
    ut.Time = Time;
})(ut || (ut = {}));
var ut;
(function (ut) {
    var EntityGroup = /** @class */ (function () {
        function EntityGroup() {
        }
        /**
         * @method
         * @desc Creates a new instance of the given entity group by name and returns all entities
         * @param {ut.World} world - The world to add to
         * @param {string} name - The fully qualified name of the entity group
         * @returns Flat list of all created entities
         */
        EntityGroup.instantiate = function (world, name) {
            var data = this.getEntityGroupData(name);
            if (data == undefined)
                throw "ut.EntityGroup.instantiate: No 'EntityGroup' was found with the name '" + name + "'";
            return data.load(world);
        };
        ;
        /**
         * @method
         * @desc Destroys all entities that were instantated with the given group name
         * @param {ut.World} world - The world to destroy from
         * @param {string} name - The fully qualified name of the entity group
         */
        EntityGroup.destroyAll = function (world, name) {
            var type = this.getEntityGroupData(name).Component;
            world.forEach([ut.Entity, type], function (entity, instance) {
                // @TODO This should REALLY not be necessary
                // We are protecting against duplicate calls to `destroyAllEntityGroups` within an iteration
                if (world.exists(entity)) {
                    world.destroyEntity(entity);
                }
            });
        };
        /**
         * @method
         * @desc Returns an entity group object by name
         * @param {string} name - Fully qualified group name
         */
        EntityGroup.getEntityGroupData = function (name) {
            var parts = name.split('.');
            if (parts.length < 2)
                throw "ut.Streaming.StreamingService.getEntityGroupData: name entry is invalid";
            var shiftedParts = parts.shift();
            var initialData = entities[shiftedParts];
            if (initialData == undefined)
                throw "ut.Streaming.StreamingService.getEntityGroupData: name entry is invalid";
            return parts.reduce(function (v, p) {
                return v[p];
            }, initialData);
        };
        return EntityGroup;
    }());
    ut.EntityGroup = EntityGroup;
})(ut || (ut = {}));
var ut;
(function (ut) {
    var EntityLookupCache = /** @class */ (function () {
        function EntityLookupCache() {
        }
        EntityLookupCache.getByName = function (world, name) {
            var entity;
            if (name in this._cache) {
                entity = this._cache[name];
                if (world.exists(entity))
                    return entity;
            }
            entity = world.getEntityByName(name);
            this._cache[name] = entity;
            return entity;
        };
        EntityLookupCache._cache = {};
        return EntityLookupCache;
    }());
    ut.EntityLookupCache = EntityLookupCache;
})(ut || (ut = {}));
//# sourceMappingURL=tsc-emit.js.map