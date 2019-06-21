/*
 * AUTO-GENERATED, DO NOT EDIT BY HAND
 */
// In order to process bindings, we first need type registry from compiled code to be available.
ut.meta.registerTypes();
var entities = entities || {};
entities.game = entities.game || {};
entities.game.Background = entities.game.Background || {};
entities.game.Background.Component = function() {
};
entities.game.Background.Component.prototype = Object.create(null);
entities.game.Background.Component.prototype.constructor = entities.game.Background.Component;
Object.defineProperties(entities.game.Background.Component.prototype, {
});
entities.game.Background.Component._size = 1;
entities.game.Background.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Background.Component.prototype);
  return v;
};
entities.game.Background.Component._toPtr = function(ptr, v) {
};
entities.game.Background.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Background.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Background.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Background.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Background.Component.StorageView.prototype = Object.create(null);
entities.game.Background.Component.StorageView.prototype.constructor = entities.game.Background.Component.StorageView;
entities.game.Background.Component._view = entities.game.Background.Component.StorageView;
entities.game.Background.Component.StorageView._isSharedComp = entities.game.Background.Component._isSharedComp = false;
entities.game.Background.Component.StorageView._fromPtr = entities.game.Background.Component._fromPtr;
entities.game.Background.Component.StorageView._toPtr = entities.game.Background.Component._toPtr;
entities.game.Background.Component.StorageView._tempHeapPtr = entities.game.Background.Component._tempHeapPtr;
entities.game.Background.Component.StorageView._size = entities.game.Background.Component._size;
entities.game.Background.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Background.Component.StorageView.prototype, {
});
entities.game.Background.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Background.Component is a POD type, so a JavaScript side copy constructor entities.game.Background.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.Background.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.Background.Component', 1, []);
})();
Object.defineProperties(entities.game.Background.Component, { cid: { configurable: true, get: function() { delete entities.game.Background.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Background.Component.cid = Module._ut_component_register_cid_with_type(entities.game.Background.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.Background.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Background.Component.cid; } } });
entities.game.BulletGroup = entities.game.BulletGroup || {};
entities.game.BulletGroup.Component = function() {
};
entities.game.BulletGroup.Component.prototype = Object.create(null);
entities.game.BulletGroup.Component.prototype.constructor = entities.game.BulletGroup.Component;
Object.defineProperties(entities.game.BulletGroup.Component.prototype, {
});
entities.game.BulletGroup.Component._size = 1;
entities.game.BulletGroup.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.BulletGroup.Component.prototype);
  return v;
};
entities.game.BulletGroup.Component._toPtr = function(ptr, v) {
};
entities.game.BulletGroup.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.BulletGroup.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.BulletGroup.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.BulletGroup.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.BulletGroup.Component.StorageView.prototype = Object.create(null);
entities.game.BulletGroup.Component.StorageView.prototype.constructor = entities.game.BulletGroup.Component.StorageView;
entities.game.BulletGroup.Component._view = entities.game.BulletGroup.Component.StorageView;
entities.game.BulletGroup.Component.StorageView._isSharedComp = entities.game.BulletGroup.Component._isSharedComp = false;
entities.game.BulletGroup.Component.StorageView._fromPtr = entities.game.BulletGroup.Component._fromPtr;
entities.game.BulletGroup.Component.StorageView._toPtr = entities.game.BulletGroup.Component._toPtr;
entities.game.BulletGroup.Component.StorageView._tempHeapPtr = entities.game.BulletGroup.Component._tempHeapPtr;
entities.game.BulletGroup.Component.StorageView._size = entities.game.BulletGroup.Component._size;
entities.game.BulletGroup.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.BulletGroup.Component.StorageView.prototype, {
});
entities.game.BulletGroup.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.BulletGroup.Component is a POD type, so a JavaScript side copy constructor entities.game.BulletGroup.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.BulletGroup.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.BulletGroup.Component', 1, []);
})();
Object.defineProperties(entities.game.BulletGroup.Component, { cid: { configurable: true, get: function() { delete entities.game.BulletGroup.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.BulletGroup.Component.cid = Module._ut_component_register_cid_with_type(entities.game.BulletGroup.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.BulletGroup.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.BulletGroup.Component.cid; } } });
entities.game.EnemyGroup = entities.game.EnemyGroup || {};
entities.game.EnemyGroup.Component = function() {
};
entities.game.EnemyGroup.Component.prototype = Object.create(null);
entities.game.EnemyGroup.Component.prototype.constructor = entities.game.EnemyGroup.Component;
Object.defineProperties(entities.game.EnemyGroup.Component.prototype, {
});
entities.game.EnemyGroup.Component._size = 1;
entities.game.EnemyGroup.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.EnemyGroup.Component.prototype);
  return v;
};
entities.game.EnemyGroup.Component._toPtr = function(ptr, v) {
};
entities.game.EnemyGroup.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.EnemyGroup.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.EnemyGroup.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.EnemyGroup.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.EnemyGroup.Component.StorageView.prototype = Object.create(null);
entities.game.EnemyGroup.Component.StorageView.prototype.constructor = entities.game.EnemyGroup.Component.StorageView;
entities.game.EnemyGroup.Component._view = entities.game.EnemyGroup.Component.StorageView;
entities.game.EnemyGroup.Component.StorageView._isSharedComp = entities.game.EnemyGroup.Component._isSharedComp = false;
entities.game.EnemyGroup.Component.StorageView._fromPtr = entities.game.EnemyGroup.Component._fromPtr;
entities.game.EnemyGroup.Component.StorageView._toPtr = entities.game.EnemyGroup.Component._toPtr;
entities.game.EnemyGroup.Component.StorageView._tempHeapPtr = entities.game.EnemyGroup.Component._tempHeapPtr;
entities.game.EnemyGroup.Component.StorageView._size = entities.game.EnemyGroup.Component._size;
entities.game.EnemyGroup.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.EnemyGroup.Component.StorageView.prototype, {
});
entities.game.EnemyGroup.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.EnemyGroup.Component is a POD type, so a JavaScript side copy constructor entities.game.EnemyGroup.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.EnemyGroup.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.EnemyGroup.Component', 1, []);
})();
Object.defineProperties(entities.game.EnemyGroup.Component, { cid: { configurable: true, get: function() { delete entities.game.EnemyGroup.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.EnemyGroup.Component.cid = Module._ut_component_register_cid_with_type(entities.game.EnemyGroup.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.EnemyGroup.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.EnemyGroup.Component.cid; } } });
entities.game.MainGroup = entities.game.MainGroup || {};
entities.game.MainGroup.Component = function() {
};
entities.game.MainGroup.Component.prototype = Object.create(null);
entities.game.MainGroup.Component.prototype.constructor = entities.game.MainGroup.Component;
Object.defineProperties(entities.game.MainGroup.Component.prototype, {
});
entities.game.MainGroup.Component._size = 1;
entities.game.MainGroup.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.MainGroup.Component.prototype);
  return v;
};
entities.game.MainGroup.Component._toPtr = function(ptr, v) {
};
entities.game.MainGroup.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.MainGroup.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.MainGroup.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.MainGroup.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.MainGroup.Component.StorageView.prototype = Object.create(null);
entities.game.MainGroup.Component.StorageView.prototype.constructor = entities.game.MainGroup.Component.StorageView;
entities.game.MainGroup.Component._view = entities.game.MainGroup.Component.StorageView;
entities.game.MainGroup.Component.StorageView._isSharedComp = entities.game.MainGroup.Component._isSharedComp = false;
entities.game.MainGroup.Component.StorageView._fromPtr = entities.game.MainGroup.Component._fromPtr;
entities.game.MainGroup.Component.StorageView._toPtr = entities.game.MainGroup.Component._toPtr;
entities.game.MainGroup.Component.StorageView._tempHeapPtr = entities.game.MainGroup.Component._tempHeapPtr;
entities.game.MainGroup.Component.StorageView._size = entities.game.MainGroup.Component._size;
entities.game.MainGroup.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.MainGroup.Component.StorageView.prototype, {
});
entities.game.MainGroup.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.MainGroup.Component is a POD type, so a JavaScript side copy constructor entities.game.MainGroup.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.MainGroup.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.MainGroup.Component', 1, []);
})();
Object.defineProperties(entities.game.MainGroup.Component, { cid: { configurable: true, get: function() { delete entities.game.MainGroup.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.MainGroup.Component.cid = Module._ut_component_register_cid_with_type(entities.game.MainGroup.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.MainGroup.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.MainGroup.Component.cid; } } });
var game = game || {};
game.Boundaries = function(arg0, arg1, arg2, arg3) {
  this._minX = (+(arg0===undefined ? 0 : arg0));
  this._maxX = (+(arg1===undefined ? 0 : arg1));
  this._minY = (+(arg2===undefined ? 0 : arg2));
  this._maxY = (+(arg3===undefined ? 0 : arg3));
};
game.Boundaries.prototype = Object.create(null);
game.Boundaries.prototype.constructor = game.Boundaries;
Object.defineProperties(game.Boundaries.prototype, {
  minX: {
    get: function() { return this._minX; },
    set: function(v) { this._minX = (+(v===undefined ? 0 : v)); },
  },
  maxX: {
    get: function() { return this._maxX; },
    set: function(v) { this._maxX = (+(v===undefined ? 0 : v)); },
  },
  minY: {
    get: function() { return this._minY; },
    set: function(v) { this._minY = (+(v===undefined ? 0 : v)); },
  },
  maxY: {
    get: function() { return this._maxY; },
    set: function(v) { this._maxY = (+(v===undefined ? 0 : v)); },
  },
});
game.Boundaries._size = 16;
game.Boundaries._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Boundaries.prototype);
  v._minX = HEAPF32[(ptr+0)>>2];
  v._maxX = HEAPF32[(ptr+4)>>2];
  v._minY = HEAPF32[(ptr+8)>>2];
  v._maxY = HEAPF32[(ptr+12)>>2];
  return v;
};
game.Boundaries._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.minX;
  HEAPF32[(ptr+4)>>2] = v.maxX;
  HEAPF32[(ptr+8)>>2] = v.minY;
  HEAPF32[(ptr+12)>>2] = v.maxY;
};
game.Boundaries._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.minX;
  HEAPF32[(ptr+4)>>2] = v.maxX;
  HEAPF32[(ptr+8)>>2] = v.minY;
  HEAPF32[(ptr+12)>>2] = v.maxY;
};
game.Boundaries._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(16);
  if (v) game.Boundaries._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Boundaries.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Boundaries.StorageView.prototype = Object.create(null);
game.Boundaries.StorageView.prototype.constructor = game.Boundaries.StorageView;
game.Boundaries._view = game.Boundaries.StorageView;
game.Boundaries.StorageView._isSharedComp = game.Boundaries._isSharedComp = false;
game.Boundaries.StorageView._fromPtr = game.Boundaries._fromPtr;
game.Boundaries.StorageView._toPtr = game.Boundaries._toPtr;
game.Boundaries.StorageView._tempHeapPtr = game.Boundaries._tempHeapPtr;
game.Boundaries.StorageView._size = game.Boundaries._size;
game.Boundaries.StorageView.prototype.$advance = function() {
  this._ptr += 16;
};
Object.defineProperties(game.Boundaries.StorageView.prototype, {
  minX: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  maxX: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
  minY: {
    get: function() { return HEAPF32[(this._ptr+8)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+8)>>2] = v; },
  },
  maxY: {
    get: function() { return HEAPF32[(this._ptr+12)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+12)>>2] = v; },
  },
});
game.Boundaries._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Boundaries is a POD type, so a JavaScript side copy constructor game.Boundaries._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Boundaries._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Boundaries', 16, [
    {name: 'minX', offset: 0, type: ut.meta.getType('float')},
    {name: 'maxX', offset: 4, type: ut.meta.getType('float')},
    {name: 'minY', offset: 8, type: ut.meta.getType('float')},
    {name: 'maxY', offset: 12, type: ut.meta.getType('float')}
  ]);
})();
Object.defineProperties(game.Boundaries, { cid: { configurable: true, get: function() { delete game.Boundaries.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Boundaries.cid = Module._ut_component_register_cid_with_type(game.Boundaries._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Boundaries.StorageView, { cid: { configurable: true, get: function() { return game.Boundaries.cid; } } });
game.Boundaries.minX = { $ofs:0, $t:"float", $c:game.Boundaries };
game.Boundaries.maxX = { $ofs:4, $t:"float", $c:game.Boundaries };
game.Boundaries.minY = { $ofs:8, $t:"float", $c:game.Boundaries };
game.Boundaries.maxY = { $ofs:12, $t:"float", $c:game.Boundaries };
game.BulletTag = function() {
};
game.BulletTag.prototype = Object.create(null);
game.BulletTag.prototype.constructor = game.BulletTag;
Object.defineProperties(game.BulletTag.prototype, {
});
game.BulletTag._size = 1;
game.BulletTag._fromPtr = function(ptr, v) {
  v = v || Object.create(game.BulletTag.prototype);
  return v;
};
game.BulletTag._toPtr = function(ptr, v) {
};
game.BulletTag._toTempHeapPtr = function(ptr, v) {
};
game.BulletTag._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.BulletTag._toTempHeapPtr(ptr, v);
  return ptr;
};
game.BulletTag.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.BulletTag.StorageView.prototype = Object.create(null);
game.BulletTag.StorageView.prototype.constructor = game.BulletTag.StorageView;
game.BulletTag._view = game.BulletTag.StorageView;
game.BulletTag.StorageView._isSharedComp = game.BulletTag._isSharedComp = false;
game.BulletTag.StorageView._fromPtr = game.BulletTag._fromPtr;
game.BulletTag.StorageView._toPtr = game.BulletTag._toPtr;
game.BulletTag.StorageView._tempHeapPtr = game.BulletTag._tempHeapPtr;
game.BulletTag.StorageView._size = game.BulletTag._size;
game.BulletTag.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.BulletTag.StorageView.prototype, {
});
game.BulletTag._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.BulletTag is a POD type, so a JavaScript side copy constructor game.BulletTag._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.BulletTag._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.BulletTag', 1, []);
})();
Object.defineProperties(game.BulletTag, { cid: { configurable: true, get: function() { delete game.BulletTag.cid; var offsetsPtr = 0, offsetsCount = 0; return game.BulletTag.cid = Module._ut_component_register_cid_with_type(game.BulletTag._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.BulletTag.StorageView, { cid: { configurable: true, get: function() { return game.BulletTag.cid; } } });
game.DestroyOffScreenTag = function() {
};
game.DestroyOffScreenTag.prototype = Object.create(null);
game.DestroyOffScreenTag.prototype.constructor = game.DestroyOffScreenTag;
Object.defineProperties(game.DestroyOffScreenTag.prototype, {
});
game.DestroyOffScreenTag._size = 1;
game.DestroyOffScreenTag._fromPtr = function(ptr, v) {
  v = v || Object.create(game.DestroyOffScreenTag.prototype);
  return v;
};
game.DestroyOffScreenTag._toPtr = function(ptr, v) {
};
game.DestroyOffScreenTag._toTempHeapPtr = function(ptr, v) {
};
game.DestroyOffScreenTag._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.DestroyOffScreenTag._toTempHeapPtr(ptr, v);
  return ptr;
};
game.DestroyOffScreenTag.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.DestroyOffScreenTag.StorageView.prototype = Object.create(null);
game.DestroyOffScreenTag.StorageView.prototype.constructor = game.DestroyOffScreenTag.StorageView;
game.DestroyOffScreenTag._view = game.DestroyOffScreenTag.StorageView;
game.DestroyOffScreenTag.StorageView._isSharedComp = game.DestroyOffScreenTag._isSharedComp = false;
game.DestroyOffScreenTag.StorageView._fromPtr = game.DestroyOffScreenTag._fromPtr;
game.DestroyOffScreenTag.StorageView._toPtr = game.DestroyOffScreenTag._toPtr;
game.DestroyOffScreenTag.StorageView._tempHeapPtr = game.DestroyOffScreenTag._tempHeapPtr;
game.DestroyOffScreenTag.StorageView._size = game.DestroyOffScreenTag._size;
game.DestroyOffScreenTag.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.DestroyOffScreenTag.StorageView.prototype, {
});
game.DestroyOffScreenTag._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.DestroyOffScreenTag is a POD type, so a JavaScript side copy constructor game.DestroyOffScreenTag._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.DestroyOffScreenTag._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.DestroyOffScreenTag', 1, []);
})();
Object.defineProperties(game.DestroyOffScreenTag, { cid: { configurable: true, get: function() { delete game.DestroyOffScreenTag.cid; var offsetsPtr = 0, offsetsCount = 0; return game.DestroyOffScreenTag.cid = Module._ut_component_register_cid_with_type(game.DestroyOffScreenTag._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.DestroyOffScreenTag.StorageView, { cid: { configurable: true, get: function() { return game.DestroyOffScreenTag.cid; } } });
game.EnemyTag = function() {
};
game.EnemyTag.prototype = Object.create(null);
game.EnemyTag.prototype.constructor = game.EnemyTag;
Object.defineProperties(game.EnemyTag.prototype, {
});
game.EnemyTag._size = 1;
game.EnemyTag._fromPtr = function(ptr, v) {
  v = v || Object.create(game.EnemyTag.prototype);
  return v;
};
game.EnemyTag._toPtr = function(ptr, v) {
};
game.EnemyTag._toTempHeapPtr = function(ptr, v) {
};
game.EnemyTag._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.EnemyTag._toTempHeapPtr(ptr, v);
  return ptr;
};
game.EnemyTag.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.EnemyTag.StorageView.prototype = Object.create(null);
game.EnemyTag.StorageView.prototype.constructor = game.EnemyTag.StorageView;
game.EnemyTag._view = game.EnemyTag.StorageView;
game.EnemyTag.StorageView._isSharedComp = game.EnemyTag._isSharedComp = false;
game.EnemyTag.StorageView._fromPtr = game.EnemyTag._fromPtr;
game.EnemyTag.StorageView._toPtr = game.EnemyTag._toPtr;
game.EnemyTag.StorageView._tempHeapPtr = game.EnemyTag._tempHeapPtr;
game.EnemyTag.StorageView._size = game.EnemyTag._size;
game.EnemyTag.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.EnemyTag.StorageView.prototype, {
});
game.EnemyTag._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.EnemyTag is a POD type, so a JavaScript side copy constructor game.EnemyTag._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.EnemyTag._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.EnemyTag', 1, []);
})();
Object.defineProperties(game.EnemyTag, { cid: { configurable: true, get: function() { delete game.EnemyTag.cid; var offsetsPtr = 0, offsetsCount = 0; return game.EnemyTag.cid = Module._ut_component_register_cid_with_type(game.EnemyTag._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.EnemyTag.StorageView, { cid: { configurable: true, get: function() { return game.EnemyTag.cid; } } });
game.ForwardVector = function(arg0) {
  this._forward = new ut.Math.Vector3(); if ((arg0) !== undefined) { this._forward.copy(arg0); };
};
game.ForwardVector.prototype = Object.create(null);
game.ForwardVector.prototype.constructor = game.ForwardVector;
Object.defineProperties(game.ForwardVector.prototype, {
  forward: {
    get: function() { return this._forward; },
    set: function(v) { this._forward.copy(v); },
  },
});
game.ForwardVector._size = 12;
game.ForwardVector._fromPtr = function(ptr, v) {
  v = v || Object.create(game.ForwardVector.prototype);
  v._forward = ut._utils.vec3FromHeap(null, ptr+0);
  return v;
};
game.ForwardVector._toPtr = function(ptr, v) {
  ut._utils.vec3ToHeap(v.forward, ptr+0);
};
game.ForwardVector._toTempHeapPtr = function(ptr, v) {
  ut._utils.vec3ToHeap(v.forward, ptr+0);
};
game.ForwardVector._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(12);
  if (v) game.ForwardVector._toTempHeapPtr(ptr, v);
  return ptr;
};
game.ForwardVector.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.ForwardVector.StorageView.prototype = Object.create(null);
game.ForwardVector.StorageView.prototype.constructor = game.ForwardVector.StorageView;
game.ForwardVector._view = game.ForwardVector.StorageView;
game.ForwardVector.StorageView._isSharedComp = game.ForwardVector._isSharedComp = false;
game.ForwardVector.StorageView._fromPtr = game.ForwardVector._fromPtr;
game.ForwardVector.StorageView._toPtr = game.ForwardVector._toPtr;
game.ForwardVector.StorageView._tempHeapPtr = game.ForwardVector._tempHeapPtr;
game.ForwardVector.StorageView._size = game.ForwardVector._size;
game.ForwardVector.StorageView.prototype.$advance = function() {
  this._ptr += 12;
};
Object.defineProperties(game.ForwardVector.StorageView.prototype, {
  forward: {
    get: function() { return ut._utils.vec3FromHeap(null, this._ptr+0); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut._utils.vec3ToHeap(v, this._ptr+0); },
  },
});
game.ForwardVector._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.ForwardVector is a POD type, so a JavaScript side copy constructor game.ForwardVector._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.ForwardVector._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.ForwardVector', 12, [
    {name: 'forward', offset: 0, type: ut.meta.getType('ut.Math.Vector3')}
  ]);
})();
Object.defineProperties(game.ForwardVector, { cid: { configurable: true, get: function() { delete game.ForwardVector.cid; var offsetsPtr = 0, offsetsCount = 0; return game.ForwardVector.cid = Module._ut_component_register_cid_with_type(game.ForwardVector._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.ForwardVector.StorageView, { cid: { configurable: true, get: function() { return game.ForwardVector.cid; } } });
game.ForwardVector.forward = { $ofs:0, $t:"ut.Math.Vector3", $c:game.ForwardVector };
game.ForwardVector.forward.z = { $ofs:8, $t:"float", $c:game.ForwardVector };
game.ForwardVector.forward.y = { $ofs:4, $t:"float", $c:game.ForwardVector };
game.ForwardVector.forward.x = { $ofs:0, $t:"float", $c:game.ForwardVector };
game.Move = function(arg0, arg1, arg2) {
  this._speed = (+(arg0===undefined ? 0 : arg0));
  this._threshold = (+(arg1===undefined ? 0 : arg1));
  this._touchSwipe = new ut.Math.Vector2(); if ((arg2) !== undefined) { this._touchSwipe.copy(arg2); };
};
game.Move.prototype = Object.create(null);
game.Move.prototype.constructor = game.Move;
Object.defineProperties(game.Move.prototype, {
  speed: {
    get: function() { return this._speed; },
    set: function(v) { this._speed = (+(v===undefined ? 0 : v)); },
  },
  threshold: {
    get: function() { return this._threshold; },
    set: function(v) { this._threshold = (+(v===undefined ? 0 : v)); },
  },
  touchSwipe: {
    get: function() { return this._touchSwipe; },
    set: function(v) { this._touchSwipe.copy(v); },
  },
});
game.Move._size = 16;
game.Move._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Move.prototype);
  v._speed = HEAPF32[(ptr+0)>>2];
  v._threshold = HEAPF32[(ptr+4)>>2];
  v._touchSwipe = ut._utils.vec2FromHeap(null, ptr+8);
  return v;
};
game.Move._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.speed;
  HEAPF32[(ptr+4)>>2] = v.threshold;
  ut._utils.vec2ToHeap(v.touchSwipe, ptr+8);
};
game.Move._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.speed;
  HEAPF32[(ptr+4)>>2] = v.threshold;
  ut._utils.vec2ToHeap(v.touchSwipe, ptr+8);
};
game.Move._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(16);
  if (v) game.Move._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Move.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Move.StorageView.prototype = Object.create(null);
game.Move.StorageView.prototype.constructor = game.Move.StorageView;
game.Move._view = game.Move.StorageView;
game.Move.StorageView._isSharedComp = game.Move._isSharedComp = false;
game.Move.StorageView._fromPtr = game.Move._fromPtr;
game.Move.StorageView._toPtr = game.Move._toPtr;
game.Move.StorageView._tempHeapPtr = game.Move._tempHeapPtr;
game.Move.StorageView._size = game.Move._size;
game.Move.StorageView.prototype.$advance = function() {
  this._ptr += 16;
};
Object.defineProperties(game.Move.StorageView.prototype, {
  speed: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  threshold: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
  touchSwipe: {
    get: function() { return ut._utils.vec2FromHeap(null, this._ptr+8); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut._utils.vec2ToHeap(v, this._ptr+8); },
  },
});
game.Move._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Move is a POD type, so a JavaScript side copy constructor game.Move._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Move._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Move', 16, [
    {name: 'speed', offset: 0, type: ut.meta.getType('float')},
    {name: 'threshold', offset: 4, type: ut.meta.getType('float')},
    {name: 'touchSwipe', offset: 8, type: ut.meta.getType('ut.Math.Vector2')}
  ]);
})();
Object.defineProperties(game.Move, { cid: { configurable: true, get: function() { delete game.Move.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Move.cid = Module._ut_component_register_cid_with_type(game.Move._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Move.StorageView, { cid: { configurable: true, get: function() { return game.Move.cid; } } });
game.Move.speed = { $ofs:0, $t:"float", $c:game.Move };
game.Move.threshold = { $ofs:4, $t:"float", $c:game.Move };
game.Move.touchSwipe = { $ofs:8, $t:"ut.Math.Vector2", $c:game.Move };
game.Move.touchSwipe.y = { $ofs:12, $t:"float", $c:game.Move };
game.Move.touchSwipe.x = { $ofs:8, $t:"float", $c:game.Move };
game.MoveWithInput = function() {
};
game.MoveWithInput.prototype = Object.create(null);
game.MoveWithInput.prototype.constructor = game.MoveWithInput;
Object.defineProperties(game.MoveWithInput.prototype, {
});
game.MoveWithInput._size = 1;
game.MoveWithInput._fromPtr = function(ptr, v) {
  v = v || Object.create(game.MoveWithInput.prototype);
  return v;
};
game.MoveWithInput._toPtr = function(ptr, v) {
};
game.MoveWithInput._toTempHeapPtr = function(ptr, v) {
};
game.MoveWithInput._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.MoveWithInput._toTempHeapPtr(ptr, v);
  return ptr;
};
game.MoveWithInput.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.MoveWithInput.StorageView.prototype = Object.create(null);
game.MoveWithInput.StorageView.prototype.constructor = game.MoveWithInput.StorageView;
game.MoveWithInput._view = game.MoveWithInput.StorageView;
game.MoveWithInput.StorageView._isSharedComp = game.MoveWithInput._isSharedComp = false;
game.MoveWithInput.StorageView._fromPtr = game.MoveWithInput._fromPtr;
game.MoveWithInput.StorageView._toPtr = game.MoveWithInput._toPtr;
game.MoveWithInput.StorageView._tempHeapPtr = game.MoveWithInput._tempHeapPtr;
game.MoveWithInput.StorageView._size = game.MoveWithInput._size;
game.MoveWithInput.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.MoveWithInput.StorageView.prototype, {
});
game.MoveWithInput._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.MoveWithInput is a POD type, so a JavaScript side copy constructor game.MoveWithInput._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.MoveWithInput._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.MoveWithInput', 1, []);
})();
Object.defineProperties(game.MoveWithInput, { cid: { configurable: true, get: function() { delete game.MoveWithInput.cid; var offsetsPtr = 0, offsetsCount = 0; return game.MoveWithInput.cid = Module._ut_component_register_cid_with_type(game.MoveWithInput._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.MoveWithInput.StorageView, { cid: { configurable: true, get: function() { return game.MoveWithInput.cid; } } });
game.PlayerTag = function() {
};
game.PlayerTag.prototype = Object.create(null);
game.PlayerTag.prototype.constructor = game.PlayerTag;
Object.defineProperties(game.PlayerTag.prototype, {
});
game.PlayerTag._size = 1;
game.PlayerTag._fromPtr = function(ptr, v) {
  v = v || Object.create(game.PlayerTag.prototype);
  return v;
};
game.PlayerTag._toPtr = function(ptr, v) {
};
game.PlayerTag._toTempHeapPtr = function(ptr, v) {
};
game.PlayerTag._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.PlayerTag._toTempHeapPtr(ptr, v);
  return ptr;
};
game.PlayerTag.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.PlayerTag.StorageView.prototype = Object.create(null);
game.PlayerTag.StorageView.prototype.constructor = game.PlayerTag.StorageView;
game.PlayerTag._view = game.PlayerTag.StorageView;
game.PlayerTag.StorageView._isSharedComp = game.PlayerTag._isSharedComp = false;
game.PlayerTag.StorageView._fromPtr = game.PlayerTag._fromPtr;
game.PlayerTag.StorageView._toPtr = game.PlayerTag._toPtr;
game.PlayerTag.StorageView._tempHeapPtr = game.PlayerTag._tempHeapPtr;
game.PlayerTag.StorageView._size = game.PlayerTag._size;
game.PlayerTag.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.PlayerTag.StorageView.prototype, {
});
game.PlayerTag._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.PlayerTag is a POD type, so a JavaScript side copy constructor game.PlayerTag._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.PlayerTag._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.PlayerTag', 1, []);
})();
Object.defineProperties(game.PlayerTag, { cid: { configurable: true, get: function() { delete game.PlayerTag.cid; var offsetsPtr = 0, offsetsCount = 0; return game.PlayerTag.cid = Module._ut_component_register_cid_with_type(game.PlayerTag._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.PlayerTag.StorageView, { cid: { configurable: true, get: function() { return game.PlayerTag.cid; } } });
game.Spawner = function(arg0, arg1, arg2, arg3) {
  this._time = (+(arg0===undefined ? 0 : arg0));
  this._delay = (+(arg1===undefined ? 0 : arg1));
  this._spawnGroup = (arg2 === undefined ? '' : arg2);
  this._isPaused = (arg3 ? true : false);
};
game.Spawner.prototype = Object.create(null);
game.Spawner.prototype.constructor = game.Spawner;
Object.defineProperties(game.Spawner.prototype, {
  time: {
    get: function() { return this._time; },
    set: function(v) { this._time = (+(v===undefined ? 0 : v)); },
  },
  delay: {
    get: function() { return this._delay; },
    set: function(v) { this._delay = (+(v===undefined ? 0 : v)); },
  },
  spawnGroup: {
    get: function() { return this._spawnGroup; },
    set: function(v) { this._spawnGroup = (v === undefined ? '' : v); },
  },
  isPaused: {
    get: function() { return this._isPaused; },
    set: function(v) { this._isPaused = (v ? true : false); },
  },
});
game.Spawner._size = 20;
game.Spawner._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Spawner.prototype);
  v._time = HEAPF32[(ptr+0)>>2];
  v._delay = HEAPF32[(ptr+4)>>2];
  v._spawnGroup = (Module._ut_nativestring_data(ptr+8) ? UTF8ToString(Module._ut_nativestring_data(ptr+8)) : "");
  v._isPaused = (HEAP8[ptr+16]?true:false);
  return v;
};
game.Spawner._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.time;
  HEAPF32[(ptr+4)>>2] = v.delay;
  ut.newHeapNativeString(ptr+8, v.spawnGroup);
  HEAP8[ptr+16] = (v.isPaused)?1:0;
};
game.Spawner._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.time;
  HEAPF32[(ptr+4)>>2] = v.delay;
  ut.toExistingScratchNativeString(ptr+8, v.spawnGroup);
  HEAP8[ptr+16] = (v.isPaused)?1:0;
};
game.Spawner._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(20);
  if (v) game.Spawner._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Spawner.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Spawner.StorageView.prototype = Object.create(null);
game.Spawner.StorageView.prototype.constructor = game.Spawner.StorageView;
game.Spawner._view = game.Spawner.StorageView;
game.Spawner.StorageView._isSharedComp = game.Spawner._isSharedComp = false;
game.Spawner.StorageView._fromPtr = game.Spawner._fromPtr;
game.Spawner.StorageView._toPtr = game.Spawner._toPtr;
game.Spawner.StorageView._tempHeapPtr = game.Spawner._tempHeapPtr;
game.Spawner.StorageView._size = game.Spawner._size;
game.Spawner.StorageView.prototype.$advance = function() {
  this._ptr += 20;
};
Object.defineProperties(game.Spawner.StorageView.prototype, {
  time: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  delay: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
  spawnGroup: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+8) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+8)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+8, v); },
  },
  isPaused: {
    get: function() { return (HEAP8[this._ptr+16]?true:false); },
    set: function(v) { HEAP8[this._ptr+16] = (v)?1:0; },
  },
});
game.Spawner._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 8);
};
game.Spawner._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  for(var i = 0; i < 4; ++i) HEAPU8[dst+0+i] = HEAPU8[src+0+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+4+i] = HEAPU8[src+4+i];
  Module._ut_nativestring_copy_construct(dst + 8, src + 8);
  for(var i = 0; i < 1; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
game.Spawner._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Spawner', 20, [
    {name: 'time', offset: 0, type: ut.meta.getType('float')},
    {name: 'delay', offset: 4, type: ut.meta.getType('float')},
    {name: 'spawnGroup', offset: 8, type: ut.meta.getType('string')},
    {name: 'isPaused', offset: 16, type: ut.meta.getType('bool')}
  ]);
})();
Object.defineProperties(game.Spawner, { cid: { configurable: true, get: function() { delete game.Spawner.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Spawner.cid = Module._ut_component_register_cid_with_type(game.Spawner._typeDesc, 4, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(game.Spawner._dtorFn), ut.CopyFn._cb.token_for(game.Spawner._copyFn)); } } });
Object.defineProperties(game.Spawner.StorageView, { cid: { configurable: true, get: function() { return game.Spawner.cid; } } });
game.Spawner.time = { $ofs:0, $t:"float", $c:game.Spawner };
game.Spawner.delay = { $ofs:4, $t:"float", $c:game.Spawner };
game.Spawner.spawnGroup = { $ofs:8, $t:"System.String", $c:game.Spawner };
game.Spawner.isPaused = { $ofs:16, $t:"bool", $c:game.Spawner };
game.WallTag = function() {
};
game.WallTag.prototype = Object.create(null);
game.WallTag.prototype.constructor = game.WallTag;
Object.defineProperties(game.WallTag.prototype, {
});
game.WallTag._size = 1;
game.WallTag._fromPtr = function(ptr, v) {
  v = v || Object.create(game.WallTag.prototype);
  return v;
};
game.WallTag._toPtr = function(ptr, v) {
};
game.WallTag._toTempHeapPtr = function(ptr, v) {
};
game.WallTag._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.WallTag._toTempHeapPtr(ptr, v);
  return ptr;
};
game.WallTag.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.WallTag.StorageView.prototype = Object.create(null);
game.WallTag.StorageView.prototype.constructor = game.WallTag.StorageView;
game.WallTag._view = game.WallTag.StorageView;
game.WallTag.StorageView._isSharedComp = game.WallTag._isSharedComp = false;
game.WallTag.StorageView._fromPtr = game.WallTag._fromPtr;
game.WallTag.StorageView._toPtr = game.WallTag._toPtr;
game.WallTag.StorageView._tempHeapPtr = game.WallTag._tempHeapPtr;
game.WallTag.StorageView._size = game.WallTag._size;
game.WallTag.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.WallTag.StorageView.prototype, {
});
game.WallTag._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.WallTag is a POD type, so a JavaScript side copy constructor game.WallTag._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.WallTag._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.WallTag', 1, []);
})();
Object.defineProperties(game.WallTag, { cid: { configurable: true, get: function() { delete game.WallTag.cid; var offsetsPtr = 0, offsetsCount = 0; return game.WallTag.cid = Module._ut_component_register_cid_with_type(game.WallTag._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.WallTag.StorageView, { cid: { configurable: true, get: function() { return game.WallTag.cid; } } });
var ut = ut || {};
ut.Core2D = ut.Core2D || {};
ut.Core2D.layers = ut.Core2D.layers || {};
ut.Core2D.layers.Default = function() {
};
ut.Core2D.layers.Default.prototype = Object.create(null);
ut.Core2D.layers.Default.prototype.constructor = ut.Core2D.layers.Default;
Object.defineProperties(ut.Core2D.layers.Default.prototype, {
});
ut.Core2D.layers.Default._size = 1;
ut.Core2D.layers.Default._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.Default.prototype);
  return v;
};
ut.Core2D.layers.Default._toPtr = function(ptr, v) {
};
ut.Core2D.layers.Default._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.Default._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.Default._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.Default.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.Default.StorageView.prototype = Object.create(null);
ut.Core2D.layers.Default.StorageView.prototype.constructor = ut.Core2D.layers.Default.StorageView;
ut.Core2D.layers.Default._view = ut.Core2D.layers.Default.StorageView;
ut.Core2D.layers.Default.StorageView._isSharedComp = ut.Core2D.layers.Default._isSharedComp = false;
ut.Core2D.layers.Default.StorageView._fromPtr = ut.Core2D.layers.Default._fromPtr;
ut.Core2D.layers.Default.StorageView._toPtr = ut.Core2D.layers.Default._toPtr;
ut.Core2D.layers.Default.StorageView._tempHeapPtr = ut.Core2D.layers.Default._tempHeapPtr;
ut.Core2D.layers.Default.StorageView._size = ut.Core2D.layers.Default._size;
ut.Core2D.layers.Default.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.Default.StorageView.prototype, {
});
ut.Core2D.layers.Default._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.Default is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.Default._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.Default._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.Default', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.Default, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Default.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Default.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.Default._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Default.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Default.cid; } } });
ut.Core2D.layers.TransparentFX = function() {
};
ut.Core2D.layers.TransparentFX.prototype = Object.create(null);
ut.Core2D.layers.TransparentFX.prototype.constructor = ut.Core2D.layers.TransparentFX;
Object.defineProperties(ut.Core2D.layers.TransparentFX.prototype, {
});
ut.Core2D.layers.TransparentFX._size = 1;
ut.Core2D.layers.TransparentFX._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.TransparentFX.prototype);
  return v;
};
ut.Core2D.layers.TransparentFX._toPtr = function(ptr, v) {
};
ut.Core2D.layers.TransparentFX._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.TransparentFX._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.TransparentFX._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.TransparentFX.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.TransparentFX.StorageView.prototype = Object.create(null);
ut.Core2D.layers.TransparentFX.StorageView.prototype.constructor = ut.Core2D.layers.TransparentFX.StorageView;
ut.Core2D.layers.TransparentFX._view = ut.Core2D.layers.TransparentFX.StorageView;
ut.Core2D.layers.TransparentFX.StorageView._isSharedComp = ut.Core2D.layers.TransparentFX._isSharedComp = false;
ut.Core2D.layers.TransparentFX.StorageView._fromPtr = ut.Core2D.layers.TransparentFX._fromPtr;
ut.Core2D.layers.TransparentFX.StorageView._toPtr = ut.Core2D.layers.TransparentFX._toPtr;
ut.Core2D.layers.TransparentFX.StorageView._tempHeapPtr = ut.Core2D.layers.TransparentFX._tempHeapPtr;
ut.Core2D.layers.TransparentFX.StorageView._size = ut.Core2D.layers.TransparentFX._size;
ut.Core2D.layers.TransparentFX.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.TransparentFX.StorageView.prototype, {
});
ut.Core2D.layers.TransparentFX._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.TransparentFX is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.TransparentFX._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.TransparentFX._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.TransparentFX', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.TransparentFX, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.TransparentFX.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.TransparentFX.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.TransparentFX._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.TransparentFX.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.TransparentFX.cid; } } });
ut.Core2D.layers.IgnoreRaycast = function() {
};
ut.Core2D.layers.IgnoreRaycast.prototype = Object.create(null);
ut.Core2D.layers.IgnoreRaycast.prototype.constructor = ut.Core2D.layers.IgnoreRaycast;
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast.prototype, {
});
ut.Core2D.layers.IgnoreRaycast._size = 1;
ut.Core2D.layers.IgnoreRaycast._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.IgnoreRaycast.prototype);
  return v;
};
ut.Core2D.layers.IgnoreRaycast._toPtr = function(ptr, v) {
};
ut.Core2D.layers.IgnoreRaycast._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.IgnoreRaycast._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.IgnoreRaycast._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.IgnoreRaycast.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.IgnoreRaycast.StorageView.prototype = Object.create(null);
ut.Core2D.layers.IgnoreRaycast.StorageView.prototype.constructor = ut.Core2D.layers.IgnoreRaycast.StorageView;
ut.Core2D.layers.IgnoreRaycast._view = ut.Core2D.layers.IgnoreRaycast.StorageView;
ut.Core2D.layers.IgnoreRaycast.StorageView._isSharedComp = ut.Core2D.layers.IgnoreRaycast._isSharedComp = false;
ut.Core2D.layers.IgnoreRaycast.StorageView._fromPtr = ut.Core2D.layers.IgnoreRaycast._fromPtr;
ut.Core2D.layers.IgnoreRaycast.StorageView._toPtr = ut.Core2D.layers.IgnoreRaycast._toPtr;
ut.Core2D.layers.IgnoreRaycast.StorageView._tempHeapPtr = ut.Core2D.layers.IgnoreRaycast._tempHeapPtr;
ut.Core2D.layers.IgnoreRaycast.StorageView._size = ut.Core2D.layers.IgnoreRaycast._size;
ut.Core2D.layers.IgnoreRaycast.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast.StorageView.prototype, {
});
ut.Core2D.layers.IgnoreRaycast._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.IgnoreRaycast is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.IgnoreRaycast._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.IgnoreRaycast._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.IgnoreRaycast', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.IgnoreRaycast.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.IgnoreRaycast.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.IgnoreRaycast._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.IgnoreRaycast.cid; } } });
ut.Core2D.layers.Water = function() {
};
ut.Core2D.layers.Water.prototype = Object.create(null);
ut.Core2D.layers.Water.prototype.constructor = ut.Core2D.layers.Water;
Object.defineProperties(ut.Core2D.layers.Water.prototype, {
});
ut.Core2D.layers.Water._size = 1;
ut.Core2D.layers.Water._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.Water.prototype);
  return v;
};
ut.Core2D.layers.Water._toPtr = function(ptr, v) {
};
ut.Core2D.layers.Water._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.Water._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.Water._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.Water.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.Water.StorageView.prototype = Object.create(null);
ut.Core2D.layers.Water.StorageView.prototype.constructor = ut.Core2D.layers.Water.StorageView;
ut.Core2D.layers.Water._view = ut.Core2D.layers.Water.StorageView;
ut.Core2D.layers.Water.StorageView._isSharedComp = ut.Core2D.layers.Water._isSharedComp = false;
ut.Core2D.layers.Water.StorageView._fromPtr = ut.Core2D.layers.Water._fromPtr;
ut.Core2D.layers.Water.StorageView._toPtr = ut.Core2D.layers.Water._toPtr;
ut.Core2D.layers.Water.StorageView._tempHeapPtr = ut.Core2D.layers.Water._tempHeapPtr;
ut.Core2D.layers.Water.StorageView._size = ut.Core2D.layers.Water._size;
ut.Core2D.layers.Water.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.Water.StorageView.prototype, {
});
ut.Core2D.layers.Water._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.Water is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.Water._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.Water._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.Water', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.Water, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Water.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Water.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.Water._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Water.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Water.cid; } } });
ut.Core2D.layers.UI = function() {
};
ut.Core2D.layers.UI.prototype = Object.create(null);
ut.Core2D.layers.UI.prototype.constructor = ut.Core2D.layers.UI;
Object.defineProperties(ut.Core2D.layers.UI.prototype, {
});
ut.Core2D.layers.UI._size = 1;
ut.Core2D.layers.UI._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.UI.prototype);
  return v;
};
ut.Core2D.layers.UI._toPtr = function(ptr, v) {
};
ut.Core2D.layers.UI._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.UI._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.UI._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.UI.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.UI.StorageView.prototype = Object.create(null);
ut.Core2D.layers.UI.StorageView.prototype.constructor = ut.Core2D.layers.UI.StorageView;
ut.Core2D.layers.UI._view = ut.Core2D.layers.UI.StorageView;
ut.Core2D.layers.UI.StorageView._isSharedComp = ut.Core2D.layers.UI._isSharedComp = false;
ut.Core2D.layers.UI.StorageView._fromPtr = ut.Core2D.layers.UI._fromPtr;
ut.Core2D.layers.UI.StorageView._toPtr = ut.Core2D.layers.UI._toPtr;
ut.Core2D.layers.UI.StorageView._tempHeapPtr = ut.Core2D.layers.UI._tempHeapPtr;
ut.Core2D.layers.UI.StorageView._size = ut.Core2D.layers.UI._size;
ut.Core2D.layers.UI.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.UI.StorageView.prototype, {
});
ut.Core2D.layers.UI._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.UI is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.UI._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.UI._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.UI', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.UI, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.UI.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.UI.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.UI._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.UI.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.UI.cid; } } });
ut.Core2D.layers.Grid = function() {
};
ut.Core2D.layers.Grid.prototype = Object.create(null);
ut.Core2D.layers.Grid.prototype.constructor = ut.Core2D.layers.Grid;
Object.defineProperties(ut.Core2D.layers.Grid.prototype, {
});
ut.Core2D.layers.Grid._size = 1;
ut.Core2D.layers.Grid._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.Grid.prototype);
  return v;
};
ut.Core2D.layers.Grid._toPtr = function(ptr, v) {
};
ut.Core2D.layers.Grid._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.Grid._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.Grid._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.Grid.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.Grid.StorageView.prototype = Object.create(null);
ut.Core2D.layers.Grid.StorageView.prototype.constructor = ut.Core2D.layers.Grid.StorageView;
ut.Core2D.layers.Grid._view = ut.Core2D.layers.Grid.StorageView;
ut.Core2D.layers.Grid.StorageView._isSharedComp = ut.Core2D.layers.Grid._isSharedComp = false;
ut.Core2D.layers.Grid.StorageView._fromPtr = ut.Core2D.layers.Grid._fromPtr;
ut.Core2D.layers.Grid.StorageView._toPtr = ut.Core2D.layers.Grid._toPtr;
ut.Core2D.layers.Grid.StorageView._tempHeapPtr = ut.Core2D.layers.Grid._tempHeapPtr;
ut.Core2D.layers.Grid.StorageView._size = ut.Core2D.layers.Grid._size;
ut.Core2D.layers.Grid.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.Grid.StorageView.prototype, {
});
ut.Core2D.layers.Grid._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.Grid is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.Grid._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.Grid._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.Grid', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.Grid, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Grid.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Grid.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.Grid._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Grid.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Grid.cid; } } });
ut.Core2D.layers.Cutscene = function() {
};
ut.Core2D.layers.Cutscene.prototype = Object.create(null);
ut.Core2D.layers.Cutscene.prototype.constructor = ut.Core2D.layers.Cutscene;
Object.defineProperties(ut.Core2D.layers.Cutscene.prototype, {
});
ut.Core2D.layers.Cutscene._size = 1;
ut.Core2D.layers.Cutscene._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.Cutscene.prototype);
  return v;
};
ut.Core2D.layers.Cutscene._toPtr = function(ptr, v) {
};
ut.Core2D.layers.Cutscene._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.Cutscene._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.Cutscene._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.Cutscene.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.Cutscene.StorageView.prototype = Object.create(null);
ut.Core2D.layers.Cutscene.StorageView.prototype.constructor = ut.Core2D.layers.Cutscene.StorageView;
ut.Core2D.layers.Cutscene._view = ut.Core2D.layers.Cutscene.StorageView;
ut.Core2D.layers.Cutscene.StorageView._isSharedComp = ut.Core2D.layers.Cutscene._isSharedComp = false;
ut.Core2D.layers.Cutscene.StorageView._fromPtr = ut.Core2D.layers.Cutscene._fromPtr;
ut.Core2D.layers.Cutscene.StorageView._toPtr = ut.Core2D.layers.Cutscene._toPtr;
ut.Core2D.layers.Cutscene.StorageView._tempHeapPtr = ut.Core2D.layers.Cutscene._tempHeapPtr;
ut.Core2D.layers.Cutscene.StorageView._size = ut.Core2D.layers.Cutscene._size;
ut.Core2D.layers.Cutscene.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.Cutscene.StorageView.prototype, {
});
ut.Core2D.layers.Cutscene._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.Cutscene is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.Cutscene._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.Cutscene._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.Cutscene', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.Cutscene, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Cutscene.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Cutscene.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.Cutscene._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Cutscene.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Cutscene.cid; } } });
ut.EditorExtensions = ut.EditorExtensions || {};
ut.EditorExtensions.AssetReferenceAnimationClip = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceAnimationClip.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAnimationClip.prototype.constructor = ut.EditorExtensions.AssetReferenceAnimationClip;
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceAnimationClip._size = 24;
ut.EditorExtensions.AssetReferenceAnimationClip._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceAnimationClip.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceAnimationClip._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAnimationClip._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAnimationClip._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceAnimationClip._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceAnimationClip.StorageView;
ut.EditorExtensions.AssetReferenceAnimationClip._view = ut.EditorExtensions.AssetReferenceAnimationClip.StorageView;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceAnimationClip._isSharedComp = false;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceAnimationClip._fromPtr;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._toPtr = ut.EditorExtensions.AssetReferenceAnimationClip._toPtr;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceAnimationClip._tempHeapPtr;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._size = ut.EditorExtensions.AssetReferenceAnimationClip._size;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceAnimationClip._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceAnimationClip._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceAnimationClip._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceAnimationClip', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceAnimationClip.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceAnimationClip.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceAnimationClip._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceAnimationClip._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceAnimationClip._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceAnimationClip.cid; } } });
ut.EditorExtensions.AssetReferenceAnimationClip.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceAnimationClip };
ut.EditorExtensions.AssetReferenceAnimationClip.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceAnimationClip };
ut.EditorExtensions.AssetReferenceAnimationClip.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceAnimationClip };
ut.EditorExtensions.AssetReferenceAudioClip = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceAudioClip.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAudioClip.prototype.constructor = ut.EditorExtensions.AssetReferenceAudioClip;
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceAudioClip._size = 24;
ut.EditorExtensions.AssetReferenceAudioClip._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceAudioClip.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceAudioClip._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAudioClip._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAudioClip._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceAudioClip._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceAudioClip.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceAudioClip.StorageView;
ut.EditorExtensions.AssetReferenceAudioClip._view = ut.EditorExtensions.AssetReferenceAudioClip.StorageView;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceAudioClip._isSharedComp = false;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceAudioClip._fromPtr;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._toPtr = ut.EditorExtensions.AssetReferenceAudioClip._toPtr;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceAudioClip._tempHeapPtr;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._size = ut.EditorExtensions.AssetReferenceAudioClip._size;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceAudioClip._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceAudioClip._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceAudioClip._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceAudioClip', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceAudioClip.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceAudioClip.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceAudioClip._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceAudioClip._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceAudioClip._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceAudioClip.cid; } } });
ut.EditorExtensions.AssetReferenceAudioClip.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceAudioClip };
ut.EditorExtensions.AssetReferenceAudioClip.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceAudioClip };
ut.EditorExtensions.AssetReferenceAudioClip.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceAudioClip };
ut.EditorExtensions.AssetReferenceSprite = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceSprite.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSprite.prototype.constructor = ut.EditorExtensions.AssetReferenceSprite;
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceSprite._size = 24;
ut.EditorExtensions.AssetReferenceSprite._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceSprite.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceSprite._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSprite._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSprite._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceSprite._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceSprite.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceSprite.StorageView;
ut.EditorExtensions.AssetReferenceSprite._view = ut.EditorExtensions.AssetReferenceSprite.StorageView;
ut.EditorExtensions.AssetReferenceSprite.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceSprite._isSharedComp = false;
ut.EditorExtensions.AssetReferenceSprite.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceSprite._fromPtr;
ut.EditorExtensions.AssetReferenceSprite.StorageView._toPtr = ut.EditorExtensions.AssetReferenceSprite._toPtr;
ut.EditorExtensions.AssetReferenceSprite.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceSprite._tempHeapPtr;
ut.EditorExtensions.AssetReferenceSprite.StorageView._size = ut.EditorExtensions.AssetReferenceSprite._size;
ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceSprite._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceSprite._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceSprite._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceSprite', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceSprite.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceSprite.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceSprite._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceSprite._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceSprite._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceSprite.cid; } } });
ut.EditorExtensions.AssetReferenceSprite.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceSprite };
ut.EditorExtensions.AssetReferenceSprite.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceSprite };
ut.EditorExtensions.AssetReferenceSprite.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceSprite };
ut.EditorExtensions.AssetReferenceSpriteAtlas = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype.constructor = ut.EditorExtensions.AssetReferenceSpriteAtlas;
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceSpriteAtlas._size = 24;
ut.EditorExtensions.AssetReferenceSpriteAtlas._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceSpriteAtlas._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView;
ut.EditorExtensions.AssetReferenceSpriteAtlas._view = ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceSpriteAtlas._isSharedComp = false;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceSpriteAtlas._fromPtr;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._toPtr = ut.EditorExtensions.AssetReferenceSpriteAtlas._toPtr;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceSpriteAtlas._tempHeapPtr;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._size = ut.EditorExtensions.AssetReferenceSpriteAtlas._size;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceSpriteAtlas._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceSpriteAtlas', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceSpriteAtlas.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceSpriteAtlas.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceSpriteAtlas._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceSpriteAtlas._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceSpriteAtlas._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceSpriteAtlas.cid; } } });
ut.EditorExtensions.AssetReferenceSpriteAtlas.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceSpriteAtlas };
ut.EditorExtensions.AssetReferenceSpriteAtlas.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceSpriteAtlas };
ut.EditorExtensions.AssetReferenceSpriteAtlas.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceSpriteAtlas };
ut.EditorExtensions.AssetReferenceTexture2D = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceTexture2D.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTexture2D.prototype.constructor = ut.EditorExtensions.AssetReferenceTexture2D;
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceTexture2D._size = 24;
ut.EditorExtensions.AssetReferenceTexture2D._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceTexture2D.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceTexture2D._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTexture2D._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTexture2D._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceTexture2D._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceTexture2D.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceTexture2D.StorageView;
ut.EditorExtensions.AssetReferenceTexture2D._view = ut.EditorExtensions.AssetReferenceTexture2D.StorageView;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceTexture2D._isSharedComp = false;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceTexture2D._fromPtr;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._toPtr = ut.EditorExtensions.AssetReferenceTexture2D._toPtr;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceTexture2D._tempHeapPtr;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._size = ut.EditorExtensions.AssetReferenceTexture2D._size;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceTexture2D._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceTexture2D._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceTexture2D._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceTexture2D', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceTexture2D.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceTexture2D.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceTexture2D._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceTexture2D._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceTexture2D._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceTexture2D.cid; } } });
ut.EditorExtensions.AssetReferenceTexture2D.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceTexture2D };
ut.EditorExtensions.AssetReferenceTexture2D.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceTexture2D };
ut.EditorExtensions.AssetReferenceTexture2D.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceTexture2D };
ut.EditorExtensions.AssetReferenceTileBase = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceTileBase.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTileBase.prototype.constructor = ut.EditorExtensions.AssetReferenceTileBase;
Object.defineProperties(ut.EditorExtensions.AssetReferenceTileBase.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceTileBase._size = 24;
ut.EditorExtensions.AssetReferenceTileBase._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceTileBase.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceTileBase._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTileBase._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTileBase._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceTileBase._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceTileBase.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceTileBase.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTileBase.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceTileBase.StorageView;
ut.EditorExtensions.AssetReferenceTileBase._view = ut.EditorExtensions.AssetReferenceTileBase.StorageView;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceTileBase._isSharedComp = false;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceTileBase._fromPtr;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._toPtr = ut.EditorExtensions.AssetReferenceTileBase._toPtr;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceTileBase._tempHeapPtr;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._size = ut.EditorExtensions.AssetReferenceTileBase._size;
ut.EditorExtensions.AssetReferenceTileBase.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTileBase.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceTileBase._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceTileBase._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceTileBase._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceTileBase', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceTileBase, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceTileBase.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceTileBase.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceTileBase._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceTileBase._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceTileBase._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceTileBase.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceTileBase.cid; } } });
ut.EditorExtensions.AssetReferenceTileBase.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceTileBase };
ut.EditorExtensions.AssetReferenceTileBase.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceTileBase };
ut.EditorExtensions.AssetReferenceTileBase.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceTileBase };
ut.EditorExtensions.AssetReferenceTMP_FontAsset = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype.constructor = ut.EditorExtensions.AssetReferenceTMP_FontAsset;
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceTMP_FontAsset._size = 24;
ut.EditorExtensions.AssetReferenceTMP_FontAsset._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceTMP_FontAsset._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView;
ut.EditorExtensions.AssetReferenceTMP_FontAsset._view = ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceTMP_FontAsset._isSharedComp = false;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceTMP_FontAsset._fromPtr;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._toPtr = ut.EditorExtensions.AssetReferenceTMP_FontAsset._toPtr;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceTMP_FontAsset._tempHeapPtr;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._size = ut.EditorExtensions.AssetReferenceTMP_FontAsset._size;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceTMP_FontAsset._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceTMP_FontAsset', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceTMP_FontAsset.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceTMP_FontAsset.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceTMP_FontAsset._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceTMP_FontAsset._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceTMP_FontAsset._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceTMP_FontAsset.cid; } } });
ut.EditorExtensions.AssetReferenceTMP_FontAsset.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceTMP_FontAsset };
ut.EditorExtensions.AssetReferenceTMP_FontAsset.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceTMP_FontAsset };
ut.EditorExtensions.AssetReferenceTMP_FontAsset.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceTMP_FontAsset };
ut.EditorExtensions.CameraCullingMask = function(arg0) {
  this._mask = (arg0|0);
};
ut.EditorExtensions.CameraCullingMask.prototype = Object.create(null);
ut.EditorExtensions.CameraCullingMask.prototype.constructor = ut.EditorExtensions.CameraCullingMask;
Object.defineProperties(ut.EditorExtensions.CameraCullingMask.prototype, {
  mask: {
    get: function() { return this._mask; },
    set: function(v) { this._mask = (v|0); },
  },
});
ut.EditorExtensions.CameraCullingMask._size = 4;
ut.EditorExtensions.CameraCullingMask._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.CameraCullingMask.prototype);
  v._mask = HEAP32[(ptr+0)>>2];
  return v;
};
ut.EditorExtensions.CameraCullingMask._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.mask;
};
ut.EditorExtensions.CameraCullingMask._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.mask;
};
ut.EditorExtensions.CameraCullingMask._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) ut.EditorExtensions.CameraCullingMask._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.CameraCullingMask.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.CameraCullingMask.StorageView.prototype = Object.create(null);
ut.EditorExtensions.CameraCullingMask.StorageView.prototype.constructor = ut.EditorExtensions.CameraCullingMask.StorageView;
ut.EditorExtensions.CameraCullingMask._view = ut.EditorExtensions.CameraCullingMask.StorageView;
ut.EditorExtensions.CameraCullingMask.StorageView._isSharedComp = ut.EditorExtensions.CameraCullingMask._isSharedComp = false;
ut.EditorExtensions.CameraCullingMask.StorageView._fromPtr = ut.EditorExtensions.CameraCullingMask._fromPtr;
ut.EditorExtensions.CameraCullingMask.StorageView._toPtr = ut.EditorExtensions.CameraCullingMask._toPtr;
ut.EditorExtensions.CameraCullingMask.StorageView._tempHeapPtr = ut.EditorExtensions.CameraCullingMask._tempHeapPtr;
ut.EditorExtensions.CameraCullingMask.StorageView._size = ut.EditorExtensions.CameraCullingMask._size;
ut.EditorExtensions.CameraCullingMask.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(ut.EditorExtensions.CameraCullingMask.StorageView.prototype, {
  mask: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
});
ut.EditorExtensions.CameraCullingMask._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.EditorExtensions.CameraCullingMask is a POD type, so a JavaScript side copy constructor ut.EditorExtensions.CameraCullingMask._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.EditorExtensions.CameraCullingMask._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.CameraCullingMask', 4, [
    {name: 'mask', offset: 0, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.CameraCullingMask, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.CameraCullingMask.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.CameraCullingMask.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.CameraCullingMask._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.EditorExtensions.CameraCullingMask.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.CameraCullingMask.cid; } } });
ut.EditorExtensions.CameraCullingMask.mask = { $ofs:0, $t:"int32_t", $c:ut.EditorExtensions.CameraCullingMask };
ut.EditorExtensions.EntityLayer = function(arg0) {
  this._layer = (arg0|0);
};
ut.EditorExtensions.EntityLayer.prototype = Object.create(null);
ut.EditorExtensions.EntityLayer.prototype.constructor = ut.EditorExtensions.EntityLayer;
Object.defineProperties(ut.EditorExtensions.EntityLayer.prototype, {
  layer: {
    get: function() { return this._layer; },
    set: function(v) { this._layer = (v|0); },
  },
});
ut.EditorExtensions.EntityLayer._size = 4;
ut.EditorExtensions.EntityLayer._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.EntityLayer.prototype);
  v._layer = HEAP32[(ptr+0)>>2];
  return v;
};
ut.EditorExtensions.EntityLayer._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.layer;
};
ut.EditorExtensions.EntityLayer._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.layer;
};
ut.EditorExtensions.EntityLayer._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) ut.EditorExtensions.EntityLayer._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.EntityLayer.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.EntityLayer.StorageView.prototype = Object.create(null);
ut.EditorExtensions.EntityLayer.StorageView.prototype.constructor = ut.EditorExtensions.EntityLayer.StorageView;
ut.EditorExtensions.EntityLayer._view = ut.EditorExtensions.EntityLayer.StorageView;
ut.EditorExtensions.EntityLayer.StorageView._isSharedComp = ut.EditorExtensions.EntityLayer._isSharedComp = false;
ut.EditorExtensions.EntityLayer.StorageView._fromPtr = ut.EditorExtensions.EntityLayer._fromPtr;
ut.EditorExtensions.EntityLayer.StorageView._toPtr = ut.EditorExtensions.EntityLayer._toPtr;
ut.EditorExtensions.EntityLayer.StorageView._tempHeapPtr = ut.EditorExtensions.EntityLayer._tempHeapPtr;
ut.EditorExtensions.EntityLayer.StorageView._size = ut.EditorExtensions.EntityLayer._size;
ut.EditorExtensions.EntityLayer.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(ut.EditorExtensions.EntityLayer.StorageView.prototype, {
  layer: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
});
ut.EditorExtensions.EntityLayer._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.EditorExtensions.EntityLayer is a POD type, so a JavaScript side copy constructor ut.EditorExtensions.EntityLayer._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.EditorExtensions.EntityLayer._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.EntityLayer', 4, [
    {name: 'layer', offset: 0, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.EntityLayer, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.EntityLayer.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.EntityLayer.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.EntityLayer._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.EditorExtensions.EntityLayer.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.EntityLayer.cid; } } });
ut.EditorExtensions.EntityLayer.layer = { $ofs:0, $t:"int32_t", $c:ut.EditorExtensions.EntityLayer };
game.BulletSystemJS = ut.System.define({
  name: "game.BulletSystemJS"
});
game.EnemySystemJS = ut.System.define({
  name: "game.EnemySystemJS"
});
game.InputMoveSystemJS = ut.System.define({
  name: "game.InputMoveSystemJS"
});
game.MoveSystemJS = ut.System.define({
  name: "game.MoveSystemJS"
});
game.OffScreenDestroySystemJS = ut.System.define({
  name: "game.OffScreenDestroySystemJS"
});
game.SpawnerSystemJS = ut.System.define({
  name: "game.SpawnerSystemJS"
});
ut.TimeJS = ut.System.define({
  name: "ut.TimeJS"
 ,updatesBefore: ["UTiny.Shared.UserCodeStart"]
});



