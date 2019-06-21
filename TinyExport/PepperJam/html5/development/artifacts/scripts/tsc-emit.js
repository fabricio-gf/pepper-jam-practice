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
var game;
(function (game) {
    /** New System */
    var BulletSystem = /** @class */ (function (_super) {
        __extends(BulletSystem, _super);
        function BulletSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BulletSystem.prototype.OnUpdate = function () {
        };
        return BulletSystem;
    }(ut.ComponentSystem));
    game.BulletSystem = BulletSystem;
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
            this.world.forEach([ut.Entity, game.Move, ut.Core2D.TransformLocalPosition], function (entity, move, transformlocalposition) {
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