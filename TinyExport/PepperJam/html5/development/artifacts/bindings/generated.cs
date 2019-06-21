using UTiny;
using UTiny.Core2D;
using UTiny.Math;
using UTiny.Shared;
using ut;
using UTiny.HTML;
using UTiny.Rendering;
using ut.EditorExtensions;
using UTiny.HitBox2D;

/*
 * !!! TEMP UNITL PROPER SCENE FORMAT !!!
 */
namespace entities.game
{
    namespace Background
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace BulletGroup
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace EnemyGroup
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace MainGroup
    {
        public struct Component : IComponentData
        {
        }
    }
}

namespace game
{
    public struct Boundaries : IComponentData
    {
        public float minX;
        public float maxX;
        public float minY;
        public float maxY;
    }
    public struct BulletTag : IComponentData
    {
    }
    public struct DestroyOffScreenTag : IComponentData
    {
    }
    public struct EnemyTag : IComponentData
    {
    }
    public struct ForwardVector : IComponentData
    {
        public Vector3 forward;
    }
    public struct Move : IComponentData
    {
        public float speed;
        public float threshold;
        public Vector2 touchSwipe;
    }
    public struct MoveWithInput : IComponentData
    {
    }
    public struct PlayerTag : IComponentData
    {
    }
    public struct Spawner : IComponentData
    {
        public float time;
        public float delay;
        public string spawnGroup;
        public bool isPaused;
    }
    public struct WallTag : IComponentData
    {
    }
}

namespace ut.Core2D
{
    namespace layers
    {
        public struct Default : IComponentData
        {
        }
        public struct TransparentFX : IComponentData
        {
        }
        public struct IgnoreRaycast : IComponentData
        {
        }
        public struct Water : IComponentData
        {
        }
        public struct UI : IComponentData
        {
        }
        public struct Grid : IComponentData
        {
        }
        public struct Cutscene : IComponentData
        {
        }
    }
}

namespace ut.Math
{
}

namespace ut
{
}

namespace ut.Shared
{
}

namespace ut.Core2D
{
}

namespace ut
{
}

namespace ut.HTML
{
}

namespace ut.Rendering
{
}

namespace ut.Rendering
{
}

namespace ut.HTML
{
}

namespace ut.Core2D
{
}

namespace ut.Rendering
{
}

namespace ut.Rendering
{
}

namespace ut.Core2D
{
}

namespace ut.EditorExtensions
{
    public struct AssetReferenceAnimationClip : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceAudioClip : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceSprite : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceSpriteAtlas : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceTexture2D : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceTileBase : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceTMP_FontAsset : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct CameraCullingMask : IComponentData
    {
        public int mask;
    }
    public struct EntityLayer : IComponentData
    {
        public int layer;
    }
}

namespace ut.HitBox2D
{
}
namespace game
{
    public class BulletSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class EnemySystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class InputMoveSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class MoveSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class OffScreenDestroySystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class SpawnerSystemJS : IComponentSystem
    {
    }
}
namespace ut
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeStart))]
    public class TimeJS : IComponentSystem
    {
    }
}
