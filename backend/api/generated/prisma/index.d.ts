
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model HabitDefinition
 * 
 */
export type HabitDefinition = $Result.DefaultSelection<Prisma.$HabitDefinitionPayload>
/**
 * Model HabitLog
 * 
 */
export type HabitLog = $Result.DefaultSelection<Prisma.$HabitLogPayload>
/**
 * Model HealthLog
 * 
 */
export type HealthLog = $Result.DefaultSelection<Prisma.$HealthLogPayload>
/**
 * Model BadgeDefinition
 * 
 */
export type BadgeDefinition = $Result.DefaultSelection<Prisma.$BadgeDefinitionPayload>
/**
 * Model UserBadge
 * 
 */
export type UserBadge = $Result.DefaultSelection<Prisma.$UserBadgePayload>
/**
 * Model QuestDefinition
 * 
 */
export type QuestDefinition = $Result.DefaultSelection<Prisma.$QuestDefinitionPayload>
/**
 * Model UserQuestProgress
 * 
 */
export type UserQuestProgress = $Result.DefaultSelection<Prisma.$UserQuestProgressPayload>
/**
 * Model AIOutput
 * 
 */
export type AIOutput = $Result.DefaultSelection<Prisma.$AIOutputPayload>
/**
 * Model UserSettings
 * 
 */
export type UserSettings = $Result.DefaultSelection<Prisma.$UserSettingsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const HealthMetricType: {
  MOOD: 'MOOD',
  SLEEP_HOURS: 'SLEEP_HOURS',
  SLEEP_QUALITY: 'SLEEP_QUALITY',
  STEPS: 'STEPS'
};

export type HealthMetricType = (typeof HealthMetricType)[keyof typeof HealthMetricType]


export const HealthDataSource: {
  MANUAL: 'MANUAL',
  APPLE_HEALTH: 'APPLE_HEALTH',
  GOOGLE_FIT: 'GOOGLE_FIT'
};

export type HealthDataSource = (typeof HealthDataSource)[keyof typeof HealthDataSource]


export const QuestType: {
  USER_DEFINED: 'USER_DEFINED',
  AI_SUGGESTED: 'AI_SUGGESTED',
  MAP_BASED: 'MAP_BASED'
};

export type QuestType = (typeof QuestType)[keyof typeof QuestType]


export const QuestStatus: {
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED'
};

export type QuestStatus = (typeof QuestStatus)[keyof typeof QuestStatus]


export const AIOutputType: {
  INSIGHT: 'INSIGHT',
  SUGGESTION: 'SUGGESTION',
  MICRO_QUEST: 'MICRO_QUEST'
};

export type AIOutputType = (typeof AIOutputType)[keyof typeof AIOutputType]

}

export type HealthMetricType = $Enums.HealthMetricType

export const HealthMetricType: typeof $Enums.HealthMetricType

export type HealthDataSource = $Enums.HealthDataSource

export const HealthDataSource: typeof $Enums.HealthDataSource

export type QuestType = $Enums.QuestType

export const QuestType: typeof $Enums.QuestType

export type QuestStatus = $Enums.QuestStatus

export const QuestStatus: typeof $Enums.QuestStatus

export type AIOutputType = $Enums.AIOutputType

export const AIOutputType: typeof $Enums.AIOutputType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.habitDefinition`: Exposes CRUD operations for the **HabitDefinition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HabitDefinitions
    * const habitDefinitions = await prisma.habitDefinition.findMany()
    * ```
    */
  get habitDefinition(): Prisma.HabitDefinitionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.habitLog`: Exposes CRUD operations for the **HabitLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HabitLogs
    * const habitLogs = await prisma.habitLog.findMany()
    * ```
    */
  get habitLog(): Prisma.HabitLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.healthLog`: Exposes CRUD operations for the **HealthLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HealthLogs
    * const healthLogs = await prisma.healthLog.findMany()
    * ```
    */
  get healthLog(): Prisma.HealthLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.badgeDefinition`: Exposes CRUD operations for the **BadgeDefinition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BadgeDefinitions
    * const badgeDefinitions = await prisma.badgeDefinition.findMany()
    * ```
    */
  get badgeDefinition(): Prisma.BadgeDefinitionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userBadge`: Exposes CRUD operations for the **UserBadge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserBadges
    * const userBadges = await prisma.userBadge.findMany()
    * ```
    */
  get userBadge(): Prisma.UserBadgeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.questDefinition`: Exposes CRUD operations for the **QuestDefinition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuestDefinitions
    * const questDefinitions = await prisma.questDefinition.findMany()
    * ```
    */
  get questDefinition(): Prisma.QuestDefinitionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userQuestProgress`: Exposes CRUD operations for the **UserQuestProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserQuestProgresses
    * const userQuestProgresses = await prisma.userQuestProgress.findMany()
    * ```
    */
  get userQuestProgress(): Prisma.UserQuestProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aIOutput`: Exposes CRUD operations for the **AIOutput** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AIOutputs
    * const aIOutputs = await prisma.aIOutput.findMany()
    * ```
    */
  get aIOutput(): Prisma.AIOutputDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSettings`: Exposes CRUD operations for the **UserSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSettings
    * const userSettings = await prisma.userSettings.findMany()
    * ```
    */
  get userSettings(): Prisma.UserSettingsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Profile: 'Profile',
    HabitDefinition: 'HabitDefinition',
    HabitLog: 'HabitLog',
    HealthLog: 'HealthLog',
    BadgeDefinition: 'BadgeDefinition',
    UserBadge: 'UserBadge',
    QuestDefinition: 'QuestDefinition',
    UserQuestProgress: 'UserQuestProgress',
    AIOutput: 'AIOutput',
    UserSettings: 'UserSettings'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "profile" | "habitDefinition" | "habitLog" | "healthLog" | "badgeDefinition" | "userBadge" | "questDefinition" | "userQuestProgress" | "aIOutput" | "userSettings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      HabitDefinition: {
        payload: Prisma.$HabitDefinitionPayload<ExtArgs>
        fields: Prisma.HabitDefinitionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HabitDefinitionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitDefinitionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HabitDefinitionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitDefinitionPayload>
          }
          findFirst: {
            args: Prisma.HabitDefinitionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitDefinitionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HabitDefinitionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitDefinitionPayload>
          }
          findMany: {
            args: Prisma.HabitDefinitionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitDefinitionPayload>[]
          }
          create: {
            args: Prisma.HabitDefinitionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitDefinitionPayload>
          }
          createMany: {
            args: Prisma.HabitDefinitionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HabitDefinitionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitDefinitionPayload>[]
          }
          delete: {
            args: Prisma.HabitDefinitionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitDefinitionPayload>
          }
          update: {
            args: Prisma.HabitDefinitionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitDefinitionPayload>
          }
          deleteMany: {
            args: Prisma.HabitDefinitionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HabitDefinitionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HabitDefinitionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitDefinitionPayload>[]
          }
          upsert: {
            args: Prisma.HabitDefinitionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitDefinitionPayload>
          }
          aggregate: {
            args: Prisma.HabitDefinitionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHabitDefinition>
          }
          groupBy: {
            args: Prisma.HabitDefinitionGroupByArgs<ExtArgs>
            result: $Utils.Optional<HabitDefinitionGroupByOutputType>[]
          }
          count: {
            args: Prisma.HabitDefinitionCountArgs<ExtArgs>
            result: $Utils.Optional<HabitDefinitionCountAggregateOutputType> | number
          }
        }
      }
      HabitLog: {
        payload: Prisma.$HabitLogPayload<ExtArgs>
        fields: Prisma.HabitLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HabitLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HabitLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>
          }
          findFirst: {
            args: Prisma.HabitLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HabitLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>
          }
          findMany: {
            args: Prisma.HabitLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>[]
          }
          create: {
            args: Prisma.HabitLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>
          }
          createMany: {
            args: Prisma.HabitLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HabitLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>[]
          }
          delete: {
            args: Prisma.HabitLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>
          }
          update: {
            args: Prisma.HabitLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>
          }
          deleteMany: {
            args: Prisma.HabitLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HabitLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HabitLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>[]
          }
          upsert: {
            args: Prisma.HabitLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>
          }
          aggregate: {
            args: Prisma.HabitLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHabitLog>
          }
          groupBy: {
            args: Prisma.HabitLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<HabitLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.HabitLogCountArgs<ExtArgs>
            result: $Utils.Optional<HabitLogCountAggregateOutputType> | number
          }
        }
      }
      HealthLog: {
        payload: Prisma.$HealthLogPayload<ExtArgs>
        fields: Prisma.HealthLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HealthLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HealthLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthLogPayload>
          }
          findFirst: {
            args: Prisma.HealthLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HealthLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthLogPayload>
          }
          findMany: {
            args: Prisma.HealthLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthLogPayload>[]
          }
          create: {
            args: Prisma.HealthLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthLogPayload>
          }
          createMany: {
            args: Prisma.HealthLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HealthLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthLogPayload>[]
          }
          delete: {
            args: Prisma.HealthLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthLogPayload>
          }
          update: {
            args: Prisma.HealthLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthLogPayload>
          }
          deleteMany: {
            args: Prisma.HealthLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HealthLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HealthLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthLogPayload>[]
          }
          upsert: {
            args: Prisma.HealthLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthLogPayload>
          }
          aggregate: {
            args: Prisma.HealthLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHealthLog>
          }
          groupBy: {
            args: Prisma.HealthLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<HealthLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.HealthLogCountArgs<ExtArgs>
            result: $Utils.Optional<HealthLogCountAggregateOutputType> | number
          }
        }
      }
      BadgeDefinition: {
        payload: Prisma.$BadgeDefinitionPayload<ExtArgs>
        fields: Prisma.BadgeDefinitionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BadgeDefinitionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgeDefinitionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BadgeDefinitionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgeDefinitionPayload>
          }
          findFirst: {
            args: Prisma.BadgeDefinitionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgeDefinitionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BadgeDefinitionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgeDefinitionPayload>
          }
          findMany: {
            args: Prisma.BadgeDefinitionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgeDefinitionPayload>[]
          }
          create: {
            args: Prisma.BadgeDefinitionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgeDefinitionPayload>
          }
          createMany: {
            args: Prisma.BadgeDefinitionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BadgeDefinitionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgeDefinitionPayload>[]
          }
          delete: {
            args: Prisma.BadgeDefinitionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgeDefinitionPayload>
          }
          update: {
            args: Prisma.BadgeDefinitionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgeDefinitionPayload>
          }
          deleteMany: {
            args: Prisma.BadgeDefinitionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BadgeDefinitionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BadgeDefinitionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgeDefinitionPayload>[]
          }
          upsert: {
            args: Prisma.BadgeDefinitionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgeDefinitionPayload>
          }
          aggregate: {
            args: Prisma.BadgeDefinitionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBadgeDefinition>
          }
          groupBy: {
            args: Prisma.BadgeDefinitionGroupByArgs<ExtArgs>
            result: $Utils.Optional<BadgeDefinitionGroupByOutputType>[]
          }
          count: {
            args: Prisma.BadgeDefinitionCountArgs<ExtArgs>
            result: $Utils.Optional<BadgeDefinitionCountAggregateOutputType> | number
          }
        }
      }
      UserBadge: {
        payload: Prisma.$UserBadgePayload<ExtArgs>
        fields: Prisma.UserBadgeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserBadgeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserBadgeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          findFirst: {
            args: Prisma.UserBadgeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserBadgeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          findMany: {
            args: Prisma.UserBadgeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>[]
          }
          create: {
            args: Prisma.UserBadgeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          createMany: {
            args: Prisma.UserBadgeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserBadgeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>[]
          }
          delete: {
            args: Prisma.UserBadgeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          update: {
            args: Prisma.UserBadgeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          deleteMany: {
            args: Prisma.UserBadgeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserBadgeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserBadgeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>[]
          }
          upsert: {
            args: Prisma.UserBadgeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          aggregate: {
            args: Prisma.UserBadgeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserBadge>
          }
          groupBy: {
            args: Prisma.UserBadgeGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserBadgeGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserBadgeCountArgs<ExtArgs>
            result: $Utils.Optional<UserBadgeCountAggregateOutputType> | number
          }
        }
      }
      QuestDefinition: {
        payload: Prisma.$QuestDefinitionPayload<ExtArgs>
        fields: Prisma.QuestDefinitionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestDefinitionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestDefinitionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestDefinitionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestDefinitionPayload>
          }
          findFirst: {
            args: Prisma.QuestDefinitionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestDefinitionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestDefinitionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestDefinitionPayload>
          }
          findMany: {
            args: Prisma.QuestDefinitionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestDefinitionPayload>[]
          }
          create: {
            args: Prisma.QuestDefinitionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestDefinitionPayload>
          }
          createMany: {
            args: Prisma.QuestDefinitionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestDefinitionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestDefinitionPayload>[]
          }
          delete: {
            args: Prisma.QuestDefinitionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestDefinitionPayload>
          }
          update: {
            args: Prisma.QuestDefinitionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestDefinitionPayload>
          }
          deleteMany: {
            args: Prisma.QuestDefinitionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestDefinitionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestDefinitionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestDefinitionPayload>[]
          }
          upsert: {
            args: Prisma.QuestDefinitionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestDefinitionPayload>
          }
          aggregate: {
            args: Prisma.QuestDefinitionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestDefinition>
          }
          groupBy: {
            args: Prisma.QuestDefinitionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestDefinitionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestDefinitionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestDefinitionCountAggregateOutputType> | number
          }
        }
      }
      UserQuestProgress: {
        payload: Prisma.$UserQuestProgressPayload<ExtArgs>
        fields: Prisma.UserQuestProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserQuestProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserQuestProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestProgressPayload>
          }
          findFirst: {
            args: Prisma.UserQuestProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserQuestProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestProgressPayload>
          }
          findMany: {
            args: Prisma.UserQuestProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestProgressPayload>[]
          }
          create: {
            args: Prisma.UserQuestProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestProgressPayload>
          }
          createMany: {
            args: Prisma.UserQuestProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserQuestProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestProgressPayload>[]
          }
          delete: {
            args: Prisma.UserQuestProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestProgressPayload>
          }
          update: {
            args: Prisma.UserQuestProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestProgressPayload>
          }
          deleteMany: {
            args: Prisma.UserQuestProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserQuestProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserQuestProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestProgressPayload>[]
          }
          upsert: {
            args: Prisma.UserQuestProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestProgressPayload>
          }
          aggregate: {
            args: Prisma.UserQuestProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserQuestProgress>
          }
          groupBy: {
            args: Prisma.UserQuestProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserQuestProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserQuestProgressCountArgs<ExtArgs>
            result: $Utils.Optional<UserQuestProgressCountAggregateOutputType> | number
          }
        }
      }
      AIOutput: {
        payload: Prisma.$AIOutputPayload<ExtArgs>
        fields: Prisma.AIOutputFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AIOutputFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIOutputPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AIOutputFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIOutputPayload>
          }
          findFirst: {
            args: Prisma.AIOutputFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIOutputPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AIOutputFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIOutputPayload>
          }
          findMany: {
            args: Prisma.AIOutputFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIOutputPayload>[]
          }
          create: {
            args: Prisma.AIOutputCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIOutputPayload>
          }
          createMany: {
            args: Prisma.AIOutputCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AIOutputCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIOutputPayload>[]
          }
          delete: {
            args: Prisma.AIOutputDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIOutputPayload>
          }
          update: {
            args: Prisma.AIOutputUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIOutputPayload>
          }
          deleteMany: {
            args: Prisma.AIOutputDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AIOutputUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AIOutputUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIOutputPayload>[]
          }
          upsert: {
            args: Prisma.AIOutputUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIOutputPayload>
          }
          aggregate: {
            args: Prisma.AIOutputAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAIOutput>
          }
          groupBy: {
            args: Prisma.AIOutputGroupByArgs<ExtArgs>
            result: $Utils.Optional<AIOutputGroupByOutputType>[]
          }
          count: {
            args: Prisma.AIOutputCountArgs<ExtArgs>
            result: $Utils.Optional<AIOutputCountAggregateOutputType> | number
          }
        }
      }
      UserSettings: {
        payload: Prisma.$UserSettingsPayload<ExtArgs>
        fields: Prisma.UserSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          findFirst: {
            args: Prisma.UserSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          findMany: {
            args: Prisma.UserSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>[]
          }
          create: {
            args: Prisma.UserSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          createMany: {
            args: Prisma.UserSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>[]
          }
          delete: {
            args: Prisma.UserSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          update: {
            args: Prisma.UserSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          deleteMany: {
            args: Prisma.UserSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>[]
          }
          upsert: {
            args: Prisma.UserSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          aggregate: {
            args: Prisma.UserSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSettings>
          }
          groupBy: {
            args: Prisma.UserSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<UserSettingsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    profile?: ProfileOmit
    habitDefinition?: HabitDefinitionOmit
    habitLog?: HabitLogOmit
    healthLog?: HealthLogOmit
    badgeDefinition?: BadgeDefinitionOmit
    userBadge?: UserBadgeOmit
    questDefinition?: QuestDefinitionOmit
    userQuestProgress?: UserQuestProgressOmit
    aIOutput?: AIOutputOmit
    userSettings?: UserSettingsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    habitDefinitions: number
    habitLogs: number
    healthLogs: number
    userBadges: number
    userQuests: number
    aiOutputs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habitDefinitions?: boolean | UserCountOutputTypeCountHabitDefinitionsArgs
    habitLogs?: boolean | UserCountOutputTypeCountHabitLogsArgs
    healthLogs?: boolean | UserCountOutputTypeCountHealthLogsArgs
    userBadges?: boolean | UserCountOutputTypeCountUserBadgesArgs
    userQuests?: boolean | UserCountOutputTypeCountUserQuestsArgs
    aiOutputs?: boolean | UserCountOutputTypeCountAiOutputsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHabitDefinitionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitDefinitionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHabitLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHealthLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HealthLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserBadgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBadgeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserQuestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserQuestProgressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAiOutputsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIOutputWhereInput
  }


  /**
   * Count Type HabitDefinitionCountOutputType
   */

  export type HabitDefinitionCountOutputType = {
    habitLogs: number
  }

  export type HabitDefinitionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habitLogs?: boolean | HabitDefinitionCountOutputTypeCountHabitLogsArgs
  }

  // Custom InputTypes
  /**
   * HabitDefinitionCountOutputType without action
   */
  export type HabitDefinitionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitDefinitionCountOutputType
     */
    select?: HabitDefinitionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HabitDefinitionCountOutputType without action
   */
  export type HabitDefinitionCountOutputTypeCountHabitLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitLogWhereInput
  }


  /**
   * Count Type BadgeDefinitionCountOutputType
   */

  export type BadgeDefinitionCountOutputType = {
    userBadges: number
    questsRewarded: number
  }

  export type BadgeDefinitionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userBadges?: boolean | BadgeDefinitionCountOutputTypeCountUserBadgesArgs
    questsRewarded?: boolean | BadgeDefinitionCountOutputTypeCountQuestsRewardedArgs
  }

  // Custom InputTypes
  /**
   * BadgeDefinitionCountOutputType without action
   */
  export type BadgeDefinitionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeDefinitionCountOutputType
     */
    select?: BadgeDefinitionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BadgeDefinitionCountOutputType without action
   */
  export type BadgeDefinitionCountOutputTypeCountUserBadgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBadgeWhereInput
  }

  /**
   * BadgeDefinitionCountOutputType without action
   */
  export type BadgeDefinitionCountOutputTypeCountQuestsRewardedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestDefinitionWhereInput
  }


  /**
   * Count Type QuestDefinitionCountOutputType
   */

  export type QuestDefinitionCountOutputType = {
    userQuests: number
    aiOutputs: number
  }

  export type QuestDefinitionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userQuests?: boolean | QuestDefinitionCountOutputTypeCountUserQuestsArgs
    aiOutputs?: boolean | QuestDefinitionCountOutputTypeCountAiOutputsArgs
  }

  // Custom InputTypes
  /**
   * QuestDefinitionCountOutputType without action
   */
  export type QuestDefinitionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestDefinitionCountOutputType
     */
    select?: QuestDefinitionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestDefinitionCountOutputType without action
   */
  export type QuestDefinitionCountOutputTypeCountUserQuestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserQuestProgressWhereInput
  }

  /**
   * QuestDefinitionCountOutputType without action
   */
  export type QuestDefinitionCountOutputTypeCountAiOutputsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIOutputWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    password: string | null
    name: string | null
    hashedRefreshToken: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    password: string | null
    name: string | null
    hashedRefreshToken: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    email: number
    password: number
    name: number
    hashedRefreshToken: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    password?: true
    name?: true
    hashedRefreshToken?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    password?: true
    name?: true
    hashedRefreshToken?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    password?: true
    name?: true
    hashedRefreshToken?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    email: string
    password: string
    name: string | null
    hashedRefreshToken: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    hashedRefreshToken?: boolean
    profile?: boolean | User$profileArgs<ExtArgs>
    habitDefinitions?: boolean | User$habitDefinitionsArgs<ExtArgs>
    habitLogs?: boolean | User$habitLogsArgs<ExtArgs>
    healthLogs?: boolean | User$healthLogsArgs<ExtArgs>
    userBadges?: boolean | User$userBadgesArgs<ExtArgs>
    userQuests?: boolean | User$userQuestsArgs<ExtArgs>
    settings?: boolean | User$settingsArgs<ExtArgs>
    aiOutputs?: boolean | User$aiOutputsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    hashedRefreshToken?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    hashedRefreshToken?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    hashedRefreshToken?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "email" | "password" | "name" | "hashedRefreshToken", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | User$profileArgs<ExtArgs>
    habitDefinitions?: boolean | User$habitDefinitionsArgs<ExtArgs>
    habitLogs?: boolean | User$habitLogsArgs<ExtArgs>
    healthLogs?: boolean | User$healthLogsArgs<ExtArgs>
    userBadges?: boolean | User$userBadgesArgs<ExtArgs>
    userQuests?: boolean | User$userQuestsArgs<ExtArgs>
    settings?: boolean | User$settingsArgs<ExtArgs>
    aiOutputs?: boolean | User$aiOutputsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs> | null
      habitDefinitions: Prisma.$HabitDefinitionPayload<ExtArgs>[]
      habitLogs: Prisma.$HabitLogPayload<ExtArgs>[]
      healthLogs: Prisma.$HealthLogPayload<ExtArgs>[]
      userBadges: Prisma.$UserBadgePayload<ExtArgs>[]
      userQuests: Prisma.$UserQuestProgressPayload<ExtArgs>[]
      settings: Prisma.$UserSettingsPayload<ExtArgs> | null
      aiOutputs: Prisma.$AIOutputPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      email: string
      password: string
      name: string | null
      hashedRefreshToken: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    habitDefinitions<T extends User$habitDefinitionsArgs<ExtArgs> = {}>(args?: Subset<T, User$habitDefinitionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitDefinitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    habitLogs<T extends User$habitLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$habitLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    healthLogs<T extends User$healthLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$healthLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HealthLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userBadges<T extends User$userBadgesArgs<ExtArgs> = {}>(args?: Subset<T, User$userBadgesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userQuests<T extends User$userQuestsArgs<ExtArgs> = {}>(args?: Subset<T, User$userQuestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuestProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    settings<T extends User$settingsArgs<ExtArgs> = {}>(args?: Subset<T, User$settingsArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    aiOutputs<T extends User$aiOutputsArgs<ExtArgs> = {}>(args?: Subset<T, User$aiOutputsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIOutputPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly hashedRefreshToken: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * User.habitDefinitions
   */
  export type User$habitDefinitionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitDefinition
     */
    select?: HabitDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitDefinition
     */
    omit?: HabitDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitDefinitionInclude<ExtArgs> | null
    where?: HabitDefinitionWhereInput
    orderBy?: HabitDefinitionOrderByWithRelationInput | HabitDefinitionOrderByWithRelationInput[]
    cursor?: HabitDefinitionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HabitDefinitionScalarFieldEnum | HabitDefinitionScalarFieldEnum[]
  }

  /**
   * User.habitLogs
   */
  export type User$habitLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    where?: HabitLogWhereInput
    orderBy?: HabitLogOrderByWithRelationInput | HabitLogOrderByWithRelationInput[]
    cursor?: HabitLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HabitLogScalarFieldEnum | HabitLogScalarFieldEnum[]
  }

  /**
   * User.healthLogs
   */
  export type User$healthLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthLog
     */
    select?: HealthLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthLog
     */
    omit?: HealthLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthLogInclude<ExtArgs> | null
    where?: HealthLogWhereInput
    orderBy?: HealthLogOrderByWithRelationInput | HealthLogOrderByWithRelationInput[]
    cursor?: HealthLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HealthLogScalarFieldEnum | HealthLogScalarFieldEnum[]
  }

  /**
   * User.userBadges
   */
  export type User$userBadgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    where?: UserBadgeWhereInput
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    cursor?: UserBadgeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserBadgeScalarFieldEnum | UserBadgeScalarFieldEnum[]
  }

  /**
   * User.userQuests
   */
  export type User$userQuestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestProgress
     */
    select?: UserQuestProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestProgress
     */
    omit?: UserQuestProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestProgressInclude<ExtArgs> | null
    where?: UserQuestProgressWhereInput
    orderBy?: UserQuestProgressOrderByWithRelationInput | UserQuestProgressOrderByWithRelationInput[]
    cursor?: UserQuestProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserQuestProgressScalarFieldEnum | UserQuestProgressScalarFieldEnum[]
  }

  /**
   * User.settings
   */
  export type User$settingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    where?: UserSettingsWhereInput
  }

  /**
   * User.aiOutputs
   */
  export type User$aiOutputsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIOutput
     */
    select?: AIOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIOutput
     */
    omit?: AIOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIOutputInclude<ExtArgs> | null
    where?: AIOutputWhereInput
    orderBy?: AIOutputOrderByWithRelationInput | AIOutputOrderByWithRelationInput[]
    cursor?: AIOutputWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AIOutputScalarFieldEnum | AIOutputScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    currentLevel: number | null
    currentXP: number | null
  }

  export type ProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
    currentLevel: number | null
    currentXP: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: number | null
    userId: number | null
    username: string | null
    currentLevel: number | null
    currentXP: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    username: string | null
    currentLevel: number | null
    currentXP: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    userId: number
    username: number
    avatarConfig: number
    currentLevel: number
    currentXP: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    id?: true
    userId?: true
    currentLevel?: true
    currentXP?: true
  }

  export type ProfileSumAggregateInputType = {
    id?: true
    userId?: true
    currentLevel?: true
    currentXP?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    userId?: true
    username?: true
    currentLevel?: true
    currentXP?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    username?: true
    currentLevel?: true
    currentXP?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    userId?: true
    username?: true
    avatarConfig?: true
    currentLevel?: true
    currentXP?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: number
    userId: number
    username: string | null
    avatarConfig: JsonValue | null
    currentLevel: number
    currentXP: number
    createdAt: Date
    updatedAt: Date
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    username?: boolean
    avatarConfig?: boolean
    currentLevel?: boolean
    currentXP?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    username?: boolean
    avatarConfig?: boolean
    currentLevel?: boolean
    currentXP?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    username?: boolean
    avatarConfig?: boolean
    currentLevel?: boolean
    currentXP?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    username?: boolean
    avatarConfig?: boolean
    currentLevel?: boolean
    currentXP?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "username" | "avatarConfig" | "currentLevel" | "currentXP" | "createdAt" | "updatedAt", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      username: string | null
      avatarConfig: Prisma.JsonValue | null
      currentLevel: number
      currentXP: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'Int'>
    readonly userId: FieldRef<"Profile", 'Int'>
    readonly username: FieldRef<"Profile", 'String'>
    readonly avatarConfig: FieldRef<"Profile", 'Json'>
    readonly currentLevel: FieldRef<"Profile", 'Int'>
    readonly currentXP: FieldRef<"Profile", 'Int'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly updatedAt: FieldRef<"Profile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model HabitDefinition
   */

  export type AggregateHabitDefinition = {
    _count: HabitDefinitionCountAggregateOutputType | null
    _avg: HabitDefinitionAvgAggregateOutputType | null
    _sum: HabitDefinitionSumAggregateOutputType | null
    _min: HabitDefinitionMinAggregateOutputType | null
    _max: HabitDefinitionMaxAggregateOutputType | null
  }

  export type HabitDefinitionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    target: number | null
  }

  export type HabitDefinitionSumAggregateOutputType = {
    id: number | null
    userId: number | null
    target: number | null
  }

  export type HabitDefinitionMinAggregateOutputType = {
    id: number | null
    userId: number | null
    name: string | null
    description: string | null
    frequency: string | null
    target: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HabitDefinitionMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    name: string | null
    description: string | null
    frequency: string | null
    target: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HabitDefinitionCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    description: number
    frequency: number
    target: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HabitDefinitionAvgAggregateInputType = {
    id?: true
    userId?: true
    target?: true
  }

  export type HabitDefinitionSumAggregateInputType = {
    id?: true
    userId?: true
    target?: true
  }

  export type HabitDefinitionMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    frequency?: true
    target?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HabitDefinitionMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    frequency?: true
    target?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HabitDefinitionCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    frequency?: true
    target?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HabitDefinitionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HabitDefinition to aggregate.
     */
    where?: HabitDefinitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitDefinitions to fetch.
     */
    orderBy?: HabitDefinitionOrderByWithRelationInput | HabitDefinitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HabitDefinitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitDefinitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitDefinitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HabitDefinitions
    **/
    _count?: true | HabitDefinitionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HabitDefinitionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HabitDefinitionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HabitDefinitionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HabitDefinitionMaxAggregateInputType
  }

  export type GetHabitDefinitionAggregateType<T extends HabitDefinitionAggregateArgs> = {
        [P in keyof T & keyof AggregateHabitDefinition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHabitDefinition[P]>
      : GetScalarType<T[P], AggregateHabitDefinition[P]>
  }




  export type HabitDefinitionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitDefinitionWhereInput
    orderBy?: HabitDefinitionOrderByWithAggregationInput | HabitDefinitionOrderByWithAggregationInput[]
    by: HabitDefinitionScalarFieldEnum[] | HabitDefinitionScalarFieldEnum
    having?: HabitDefinitionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HabitDefinitionCountAggregateInputType | true
    _avg?: HabitDefinitionAvgAggregateInputType
    _sum?: HabitDefinitionSumAggregateInputType
    _min?: HabitDefinitionMinAggregateInputType
    _max?: HabitDefinitionMaxAggregateInputType
  }

  export type HabitDefinitionGroupByOutputType = {
    id: number
    userId: number
    name: string
    description: string | null
    frequency: string
    target: number | null
    createdAt: Date
    updatedAt: Date
    _count: HabitDefinitionCountAggregateOutputType | null
    _avg: HabitDefinitionAvgAggregateOutputType | null
    _sum: HabitDefinitionSumAggregateOutputType | null
    _min: HabitDefinitionMinAggregateOutputType | null
    _max: HabitDefinitionMaxAggregateOutputType | null
  }

  type GetHabitDefinitionGroupByPayload<T extends HabitDefinitionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HabitDefinitionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HabitDefinitionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HabitDefinitionGroupByOutputType[P]>
            : GetScalarType<T[P], HabitDefinitionGroupByOutputType[P]>
        }
      >
    >


  export type HabitDefinitionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    frequency?: boolean
    target?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    habitLogs?: boolean | HabitDefinition$habitLogsArgs<ExtArgs>
    _count?: boolean | HabitDefinitionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habitDefinition"]>

  export type HabitDefinitionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    frequency?: boolean
    target?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habitDefinition"]>

  export type HabitDefinitionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    frequency?: boolean
    target?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habitDefinition"]>

  export type HabitDefinitionSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    frequency?: boolean
    target?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HabitDefinitionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "description" | "frequency" | "target" | "createdAt" | "updatedAt", ExtArgs["result"]["habitDefinition"]>
  export type HabitDefinitionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    habitLogs?: boolean | HabitDefinition$habitLogsArgs<ExtArgs>
    _count?: boolean | HabitDefinitionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HabitDefinitionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HabitDefinitionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $HabitDefinitionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HabitDefinition"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      habitLogs: Prisma.$HabitLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      name: string
      description: string | null
      frequency: string
      target: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["habitDefinition"]>
    composites: {}
  }

  type HabitDefinitionGetPayload<S extends boolean | null | undefined | HabitDefinitionDefaultArgs> = $Result.GetResult<Prisma.$HabitDefinitionPayload, S>

  type HabitDefinitionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HabitDefinitionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HabitDefinitionCountAggregateInputType | true
    }

  export interface HabitDefinitionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HabitDefinition'], meta: { name: 'HabitDefinition' } }
    /**
     * Find zero or one HabitDefinition that matches the filter.
     * @param {HabitDefinitionFindUniqueArgs} args - Arguments to find a HabitDefinition
     * @example
     * // Get one HabitDefinition
     * const habitDefinition = await prisma.habitDefinition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HabitDefinitionFindUniqueArgs>(args: SelectSubset<T, HabitDefinitionFindUniqueArgs<ExtArgs>>): Prisma__HabitDefinitionClient<$Result.GetResult<Prisma.$HabitDefinitionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HabitDefinition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HabitDefinitionFindUniqueOrThrowArgs} args - Arguments to find a HabitDefinition
     * @example
     * // Get one HabitDefinition
     * const habitDefinition = await prisma.habitDefinition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HabitDefinitionFindUniqueOrThrowArgs>(args: SelectSubset<T, HabitDefinitionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HabitDefinitionClient<$Result.GetResult<Prisma.$HabitDefinitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HabitDefinition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitDefinitionFindFirstArgs} args - Arguments to find a HabitDefinition
     * @example
     * // Get one HabitDefinition
     * const habitDefinition = await prisma.habitDefinition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HabitDefinitionFindFirstArgs>(args?: SelectSubset<T, HabitDefinitionFindFirstArgs<ExtArgs>>): Prisma__HabitDefinitionClient<$Result.GetResult<Prisma.$HabitDefinitionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HabitDefinition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitDefinitionFindFirstOrThrowArgs} args - Arguments to find a HabitDefinition
     * @example
     * // Get one HabitDefinition
     * const habitDefinition = await prisma.habitDefinition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HabitDefinitionFindFirstOrThrowArgs>(args?: SelectSubset<T, HabitDefinitionFindFirstOrThrowArgs<ExtArgs>>): Prisma__HabitDefinitionClient<$Result.GetResult<Prisma.$HabitDefinitionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HabitDefinitions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitDefinitionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HabitDefinitions
     * const habitDefinitions = await prisma.habitDefinition.findMany()
     * 
     * // Get first 10 HabitDefinitions
     * const habitDefinitions = await prisma.habitDefinition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const habitDefinitionWithIdOnly = await prisma.habitDefinition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HabitDefinitionFindManyArgs>(args?: SelectSubset<T, HabitDefinitionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitDefinitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HabitDefinition.
     * @param {HabitDefinitionCreateArgs} args - Arguments to create a HabitDefinition.
     * @example
     * // Create one HabitDefinition
     * const HabitDefinition = await prisma.habitDefinition.create({
     *   data: {
     *     // ... data to create a HabitDefinition
     *   }
     * })
     * 
     */
    create<T extends HabitDefinitionCreateArgs>(args: SelectSubset<T, HabitDefinitionCreateArgs<ExtArgs>>): Prisma__HabitDefinitionClient<$Result.GetResult<Prisma.$HabitDefinitionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HabitDefinitions.
     * @param {HabitDefinitionCreateManyArgs} args - Arguments to create many HabitDefinitions.
     * @example
     * // Create many HabitDefinitions
     * const habitDefinition = await prisma.habitDefinition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HabitDefinitionCreateManyArgs>(args?: SelectSubset<T, HabitDefinitionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HabitDefinitions and returns the data saved in the database.
     * @param {HabitDefinitionCreateManyAndReturnArgs} args - Arguments to create many HabitDefinitions.
     * @example
     * // Create many HabitDefinitions
     * const habitDefinition = await prisma.habitDefinition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HabitDefinitions and only return the `id`
     * const habitDefinitionWithIdOnly = await prisma.habitDefinition.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HabitDefinitionCreateManyAndReturnArgs>(args?: SelectSubset<T, HabitDefinitionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitDefinitionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HabitDefinition.
     * @param {HabitDefinitionDeleteArgs} args - Arguments to delete one HabitDefinition.
     * @example
     * // Delete one HabitDefinition
     * const HabitDefinition = await prisma.habitDefinition.delete({
     *   where: {
     *     // ... filter to delete one HabitDefinition
     *   }
     * })
     * 
     */
    delete<T extends HabitDefinitionDeleteArgs>(args: SelectSubset<T, HabitDefinitionDeleteArgs<ExtArgs>>): Prisma__HabitDefinitionClient<$Result.GetResult<Prisma.$HabitDefinitionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HabitDefinition.
     * @param {HabitDefinitionUpdateArgs} args - Arguments to update one HabitDefinition.
     * @example
     * // Update one HabitDefinition
     * const habitDefinition = await prisma.habitDefinition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HabitDefinitionUpdateArgs>(args: SelectSubset<T, HabitDefinitionUpdateArgs<ExtArgs>>): Prisma__HabitDefinitionClient<$Result.GetResult<Prisma.$HabitDefinitionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HabitDefinitions.
     * @param {HabitDefinitionDeleteManyArgs} args - Arguments to filter HabitDefinitions to delete.
     * @example
     * // Delete a few HabitDefinitions
     * const { count } = await prisma.habitDefinition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HabitDefinitionDeleteManyArgs>(args?: SelectSubset<T, HabitDefinitionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HabitDefinitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitDefinitionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HabitDefinitions
     * const habitDefinition = await prisma.habitDefinition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HabitDefinitionUpdateManyArgs>(args: SelectSubset<T, HabitDefinitionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HabitDefinitions and returns the data updated in the database.
     * @param {HabitDefinitionUpdateManyAndReturnArgs} args - Arguments to update many HabitDefinitions.
     * @example
     * // Update many HabitDefinitions
     * const habitDefinition = await prisma.habitDefinition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HabitDefinitions and only return the `id`
     * const habitDefinitionWithIdOnly = await prisma.habitDefinition.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HabitDefinitionUpdateManyAndReturnArgs>(args: SelectSubset<T, HabitDefinitionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitDefinitionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HabitDefinition.
     * @param {HabitDefinitionUpsertArgs} args - Arguments to update or create a HabitDefinition.
     * @example
     * // Update or create a HabitDefinition
     * const habitDefinition = await prisma.habitDefinition.upsert({
     *   create: {
     *     // ... data to create a HabitDefinition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HabitDefinition we want to update
     *   }
     * })
     */
    upsert<T extends HabitDefinitionUpsertArgs>(args: SelectSubset<T, HabitDefinitionUpsertArgs<ExtArgs>>): Prisma__HabitDefinitionClient<$Result.GetResult<Prisma.$HabitDefinitionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HabitDefinitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitDefinitionCountArgs} args - Arguments to filter HabitDefinitions to count.
     * @example
     * // Count the number of HabitDefinitions
     * const count = await prisma.habitDefinition.count({
     *   where: {
     *     // ... the filter for the HabitDefinitions we want to count
     *   }
     * })
    **/
    count<T extends HabitDefinitionCountArgs>(
      args?: Subset<T, HabitDefinitionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HabitDefinitionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HabitDefinition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitDefinitionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HabitDefinitionAggregateArgs>(args: Subset<T, HabitDefinitionAggregateArgs>): Prisma.PrismaPromise<GetHabitDefinitionAggregateType<T>>

    /**
     * Group by HabitDefinition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitDefinitionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HabitDefinitionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HabitDefinitionGroupByArgs['orderBy'] }
        : { orderBy?: HabitDefinitionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HabitDefinitionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabitDefinitionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HabitDefinition model
   */
  readonly fields: HabitDefinitionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HabitDefinition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HabitDefinitionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    habitLogs<T extends HabitDefinition$habitLogsArgs<ExtArgs> = {}>(args?: Subset<T, HabitDefinition$habitLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HabitDefinition model
   */
  interface HabitDefinitionFieldRefs {
    readonly id: FieldRef<"HabitDefinition", 'Int'>
    readonly userId: FieldRef<"HabitDefinition", 'Int'>
    readonly name: FieldRef<"HabitDefinition", 'String'>
    readonly description: FieldRef<"HabitDefinition", 'String'>
    readonly frequency: FieldRef<"HabitDefinition", 'String'>
    readonly target: FieldRef<"HabitDefinition", 'Int'>
    readonly createdAt: FieldRef<"HabitDefinition", 'DateTime'>
    readonly updatedAt: FieldRef<"HabitDefinition", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HabitDefinition findUnique
   */
  export type HabitDefinitionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitDefinition
     */
    select?: HabitDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitDefinition
     */
    omit?: HabitDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitDefinitionInclude<ExtArgs> | null
    /**
     * Filter, which HabitDefinition to fetch.
     */
    where: HabitDefinitionWhereUniqueInput
  }

  /**
   * HabitDefinition findUniqueOrThrow
   */
  export type HabitDefinitionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitDefinition
     */
    select?: HabitDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitDefinition
     */
    omit?: HabitDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitDefinitionInclude<ExtArgs> | null
    /**
     * Filter, which HabitDefinition to fetch.
     */
    where: HabitDefinitionWhereUniqueInput
  }

  /**
   * HabitDefinition findFirst
   */
  export type HabitDefinitionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitDefinition
     */
    select?: HabitDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitDefinition
     */
    omit?: HabitDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitDefinitionInclude<ExtArgs> | null
    /**
     * Filter, which HabitDefinition to fetch.
     */
    where?: HabitDefinitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitDefinitions to fetch.
     */
    orderBy?: HabitDefinitionOrderByWithRelationInput | HabitDefinitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HabitDefinitions.
     */
    cursor?: HabitDefinitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitDefinitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitDefinitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HabitDefinitions.
     */
    distinct?: HabitDefinitionScalarFieldEnum | HabitDefinitionScalarFieldEnum[]
  }

  /**
   * HabitDefinition findFirstOrThrow
   */
  export type HabitDefinitionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitDefinition
     */
    select?: HabitDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitDefinition
     */
    omit?: HabitDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitDefinitionInclude<ExtArgs> | null
    /**
     * Filter, which HabitDefinition to fetch.
     */
    where?: HabitDefinitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitDefinitions to fetch.
     */
    orderBy?: HabitDefinitionOrderByWithRelationInput | HabitDefinitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HabitDefinitions.
     */
    cursor?: HabitDefinitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitDefinitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitDefinitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HabitDefinitions.
     */
    distinct?: HabitDefinitionScalarFieldEnum | HabitDefinitionScalarFieldEnum[]
  }

  /**
   * HabitDefinition findMany
   */
  export type HabitDefinitionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitDefinition
     */
    select?: HabitDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitDefinition
     */
    omit?: HabitDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitDefinitionInclude<ExtArgs> | null
    /**
     * Filter, which HabitDefinitions to fetch.
     */
    where?: HabitDefinitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitDefinitions to fetch.
     */
    orderBy?: HabitDefinitionOrderByWithRelationInput | HabitDefinitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HabitDefinitions.
     */
    cursor?: HabitDefinitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitDefinitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitDefinitions.
     */
    skip?: number
    distinct?: HabitDefinitionScalarFieldEnum | HabitDefinitionScalarFieldEnum[]
  }

  /**
   * HabitDefinition create
   */
  export type HabitDefinitionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitDefinition
     */
    select?: HabitDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitDefinition
     */
    omit?: HabitDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitDefinitionInclude<ExtArgs> | null
    /**
     * The data needed to create a HabitDefinition.
     */
    data: XOR<HabitDefinitionCreateInput, HabitDefinitionUncheckedCreateInput>
  }

  /**
   * HabitDefinition createMany
   */
  export type HabitDefinitionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HabitDefinitions.
     */
    data: HabitDefinitionCreateManyInput | HabitDefinitionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HabitDefinition createManyAndReturn
   */
  export type HabitDefinitionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitDefinition
     */
    select?: HabitDefinitionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HabitDefinition
     */
    omit?: HabitDefinitionOmit<ExtArgs> | null
    /**
     * The data used to create many HabitDefinitions.
     */
    data: HabitDefinitionCreateManyInput | HabitDefinitionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitDefinitionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HabitDefinition update
   */
  export type HabitDefinitionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitDefinition
     */
    select?: HabitDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitDefinition
     */
    omit?: HabitDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitDefinitionInclude<ExtArgs> | null
    /**
     * The data needed to update a HabitDefinition.
     */
    data: XOR<HabitDefinitionUpdateInput, HabitDefinitionUncheckedUpdateInput>
    /**
     * Choose, which HabitDefinition to update.
     */
    where: HabitDefinitionWhereUniqueInput
  }

  /**
   * HabitDefinition updateMany
   */
  export type HabitDefinitionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HabitDefinitions.
     */
    data: XOR<HabitDefinitionUpdateManyMutationInput, HabitDefinitionUncheckedUpdateManyInput>
    /**
     * Filter which HabitDefinitions to update
     */
    where?: HabitDefinitionWhereInput
    /**
     * Limit how many HabitDefinitions to update.
     */
    limit?: number
  }

  /**
   * HabitDefinition updateManyAndReturn
   */
  export type HabitDefinitionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitDefinition
     */
    select?: HabitDefinitionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HabitDefinition
     */
    omit?: HabitDefinitionOmit<ExtArgs> | null
    /**
     * The data used to update HabitDefinitions.
     */
    data: XOR<HabitDefinitionUpdateManyMutationInput, HabitDefinitionUncheckedUpdateManyInput>
    /**
     * Filter which HabitDefinitions to update
     */
    where?: HabitDefinitionWhereInput
    /**
     * Limit how many HabitDefinitions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitDefinitionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HabitDefinition upsert
   */
  export type HabitDefinitionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitDefinition
     */
    select?: HabitDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitDefinition
     */
    omit?: HabitDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitDefinitionInclude<ExtArgs> | null
    /**
     * The filter to search for the HabitDefinition to update in case it exists.
     */
    where: HabitDefinitionWhereUniqueInput
    /**
     * In case the HabitDefinition found by the `where` argument doesn't exist, create a new HabitDefinition with this data.
     */
    create: XOR<HabitDefinitionCreateInput, HabitDefinitionUncheckedCreateInput>
    /**
     * In case the HabitDefinition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HabitDefinitionUpdateInput, HabitDefinitionUncheckedUpdateInput>
  }

  /**
   * HabitDefinition delete
   */
  export type HabitDefinitionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitDefinition
     */
    select?: HabitDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitDefinition
     */
    omit?: HabitDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitDefinitionInclude<ExtArgs> | null
    /**
     * Filter which HabitDefinition to delete.
     */
    where: HabitDefinitionWhereUniqueInput
  }

  /**
   * HabitDefinition deleteMany
   */
  export type HabitDefinitionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HabitDefinitions to delete
     */
    where?: HabitDefinitionWhereInput
    /**
     * Limit how many HabitDefinitions to delete.
     */
    limit?: number
  }

  /**
   * HabitDefinition.habitLogs
   */
  export type HabitDefinition$habitLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    where?: HabitLogWhereInput
    orderBy?: HabitLogOrderByWithRelationInput | HabitLogOrderByWithRelationInput[]
    cursor?: HabitLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HabitLogScalarFieldEnum | HabitLogScalarFieldEnum[]
  }

  /**
   * HabitDefinition without action
   */
  export type HabitDefinitionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitDefinition
     */
    select?: HabitDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitDefinition
     */
    omit?: HabitDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitDefinitionInclude<ExtArgs> | null
  }


  /**
   * Model HabitLog
   */

  export type AggregateHabitLog = {
    _count: HabitLogCountAggregateOutputType | null
    _avg: HabitLogAvgAggregateOutputType | null
    _sum: HabitLogSumAggregateOutputType | null
    _min: HabitLogMinAggregateOutputType | null
    _max: HabitLogMaxAggregateOutputType | null
  }

  export type HabitLogAvgAggregateOutputType = {
    id: number | null
    habitId: number | null
    userId: number | null
  }

  export type HabitLogSumAggregateOutputType = {
    id: number | null
    habitId: number | null
    userId: number | null
  }

  export type HabitLogMinAggregateOutputType = {
    id: number | null
    habitId: number | null
    userId: number | null
    completionDate: Date | null
    notes: string | null
    createdAt: Date | null
  }

  export type HabitLogMaxAggregateOutputType = {
    id: number | null
    habitId: number | null
    userId: number | null
    completionDate: Date | null
    notes: string | null
    createdAt: Date | null
  }

  export type HabitLogCountAggregateOutputType = {
    id: number
    habitId: number
    userId: number
    completionDate: number
    notes: number
    createdAt: number
    _all: number
  }


  export type HabitLogAvgAggregateInputType = {
    id?: true
    habitId?: true
    userId?: true
  }

  export type HabitLogSumAggregateInputType = {
    id?: true
    habitId?: true
    userId?: true
  }

  export type HabitLogMinAggregateInputType = {
    id?: true
    habitId?: true
    userId?: true
    completionDate?: true
    notes?: true
    createdAt?: true
  }

  export type HabitLogMaxAggregateInputType = {
    id?: true
    habitId?: true
    userId?: true
    completionDate?: true
    notes?: true
    createdAt?: true
  }

  export type HabitLogCountAggregateInputType = {
    id?: true
    habitId?: true
    userId?: true
    completionDate?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type HabitLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HabitLog to aggregate.
     */
    where?: HabitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitLogs to fetch.
     */
    orderBy?: HabitLogOrderByWithRelationInput | HabitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HabitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HabitLogs
    **/
    _count?: true | HabitLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HabitLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HabitLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HabitLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HabitLogMaxAggregateInputType
  }

  export type GetHabitLogAggregateType<T extends HabitLogAggregateArgs> = {
        [P in keyof T & keyof AggregateHabitLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHabitLog[P]>
      : GetScalarType<T[P], AggregateHabitLog[P]>
  }




  export type HabitLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitLogWhereInput
    orderBy?: HabitLogOrderByWithAggregationInput | HabitLogOrderByWithAggregationInput[]
    by: HabitLogScalarFieldEnum[] | HabitLogScalarFieldEnum
    having?: HabitLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HabitLogCountAggregateInputType | true
    _avg?: HabitLogAvgAggregateInputType
    _sum?: HabitLogSumAggregateInputType
    _min?: HabitLogMinAggregateInputType
    _max?: HabitLogMaxAggregateInputType
  }

  export type HabitLogGroupByOutputType = {
    id: number
    habitId: number
    userId: number
    completionDate: Date
    notes: string | null
    createdAt: Date
    _count: HabitLogCountAggregateOutputType | null
    _avg: HabitLogAvgAggregateOutputType | null
    _sum: HabitLogSumAggregateOutputType | null
    _min: HabitLogMinAggregateOutputType | null
    _max: HabitLogMaxAggregateOutputType | null
  }

  type GetHabitLogGroupByPayload<T extends HabitLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HabitLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HabitLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HabitLogGroupByOutputType[P]>
            : GetScalarType<T[P], HabitLogGroupByOutputType[P]>
        }
      >
    >


  export type HabitLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    habitId?: boolean
    userId?: boolean
    completionDate?: boolean
    notes?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    habitDefinition?: boolean | HabitDefinitionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habitLog"]>

  export type HabitLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    habitId?: boolean
    userId?: boolean
    completionDate?: boolean
    notes?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    habitDefinition?: boolean | HabitDefinitionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habitLog"]>

  export type HabitLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    habitId?: boolean
    userId?: boolean
    completionDate?: boolean
    notes?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    habitDefinition?: boolean | HabitDefinitionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habitLog"]>

  export type HabitLogSelectScalar = {
    id?: boolean
    habitId?: boolean
    userId?: boolean
    completionDate?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type HabitLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "habitId" | "userId" | "completionDate" | "notes" | "createdAt", ExtArgs["result"]["habitLog"]>
  export type HabitLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    habitDefinition?: boolean | HabitDefinitionDefaultArgs<ExtArgs>
  }
  export type HabitLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    habitDefinition?: boolean | HabitDefinitionDefaultArgs<ExtArgs>
  }
  export type HabitLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    habitDefinition?: boolean | HabitDefinitionDefaultArgs<ExtArgs>
  }

  export type $HabitLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HabitLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      habitDefinition: Prisma.$HabitDefinitionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      habitId: number
      userId: number
      completionDate: Date
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["habitLog"]>
    composites: {}
  }

  type HabitLogGetPayload<S extends boolean | null | undefined | HabitLogDefaultArgs> = $Result.GetResult<Prisma.$HabitLogPayload, S>

  type HabitLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HabitLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HabitLogCountAggregateInputType | true
    }

  export interface HabitLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HabitLog'], meta: { name: 'HabitLog' } }
    /**
     * Find zero or one HabitLog that matches the filter.
     * @param {HabitLogFindUniqueArgs} args - Arguments to find a HabitLog
     * @example
     * // Get one HabitLog
     * const habitLog = await prisma.habitLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HabitLogFindUniqueArgs>(args: SelectSubset<T, HabitLogFindUniqueArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HabitLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HabitLogFindUniqueOrThrowArgs} args - Arguments to find a HabitLog
     * @example
     * // Get one HabitLog
     * const habitLog = await prisma.habitLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HabitLogFindUniqueOrThrowArgs>(args: SelectSubset<T, HabitLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HabitLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitLogFindFirstArgs} args - Arguments to find a HabitLog
     * @example
     * // Get one HabitLog
     * const habitLog = await prisma.habitLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HabitLogFindFirstArgs>(args?: SelectSubset<T, HabitLogFindFirstArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HabitLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitLogFindFirstOrThrowArgs} args - Arguments to find a HabitLog
     * @example
     * // Get one HabitLog
     * const habitLog = await prisma.habitLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HabitLogFindFirstOrThrowArgs>(args?: SelectSubset<T, HabitLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HabitLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HabitLogs
     * const habitLogs = await prisma.habitLog.findMany()
     * 
     * // Get first 10 HabitLogs
     * const habitLogs = await prisma.habitLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const habitLogWithIdOnly = await prisma.habitLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HabitLogFindManyArgs>(args?: SelectSubset<T, HabitLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HabitLog.
     * @param {HabitLogCreateArgs} args - Arguments to create a HabitLog.
     * @example
     * // Create one HabitLog
     * const HabitLog = await prisma.habitLog.create({
     *   data: {
     *     // ... data to create a HabitLog
     *   }
     * })
     * 
     */
    create<T extends HabitLogCreateArgs>(args: SelectSubset<T, HabitLogCreateArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HabitLogs.
     * @param {HabitLogCreateManyArgs} args - Arguments to create many HabitLogs.
     * @example
     * // Create many HabitLogs
     * const habitLog = await prisma.habitLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HabitLogCreateManyArgs>(args?: SelectSubset<T, HabitLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HabitLogs and returns the data saved in the database.
     * @param {HabitLogCreateManyAndReturnArgs} args - Arguments to create many HabitLogs.
     * @example
     * // Create many HabitLogs
     * const habitLog = await prisma.habitLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HabitLogs and only return the `id`
     * const habitLogWithIdOnly = await prisma.habitLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HabitLogCreateManyAndReturnArgs>(args?: SelectSubset<T, HabitLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HabitLog.
     * @param {HabitLogDeleteArgs} args - Arguments to delete one HabitLog.
     * @example
     * // Delete one HabitLog
     * const HabitLog = await prisma.habitLog.delete({
     *   where: {
     *     // ... filter to delete one HabitLog
     *   }
     * })
     * 
     */
    delete<T extends HabitLogDeleteArgs>(args: SelectSubset<T, HabitLogDeleteArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HabitLog.
     * @param {HabitLogUpdateArgs} args - Arguments to update one HabitLog.
     * @example
     * // Update one HabitLog
     * const habitLog = await prisma.habitLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HabitLogUpdateArgs>(args: SelectSubset<T, HabitLogUpdateArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HabitLogs.
     * @param {HabitLogDeleteManyArgs} args - Arguments to filter HabitLogs to delete.
     * @example
     * // Delete a few HabitLogs
     * const { count } = await prisma.habitLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HabitLogDeleteManyArgs>(args?: SelectSubset<T, HabitLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HabitLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HabitLogs
     * const habitLog = await prisma.habitLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HabitLogUpdateManyArgs>(args: SelectSubset<T, HabitLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HabitLogs and returns the data updated in the database.
     * @param {HabitLogUpdateManyAndReturnArgs} args - Arguments to update many HabitLogs.
     * @example
     * // Update many HabitLogs
     * const habitLog = await prisma.habitLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HabitLogs and only return the `id`
     * const habitLogWithIdOnly = await prisma.habitLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HabitLogUpdateManyAndReturnArgs>(args: SelectSubset<T, HabitLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HabitLog.
     * @param {HabitLogUpsertArgs} args - Arguments to update or create a HabitLog.
     * @example
     * // Update or create a HabitLog
     * const habitLog = await prisma.habitLog.upsert({
     *   create: {
     *     // ... data to create a HabitLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HabitLog we want to update
     *   }
     * })
     */
    upsert<T extends HabitLogUpsertArgs>(args: SelectSubset<T, HabitLogUpsertArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HabitLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitLogCountArgs} args - Arguments to filter HabitLogs to count.
     * @example
     * // Count the number of HabitLogs
     * const count = await prisma.habitLog.count({
     *   where: {
     *     // ... the filter for the HabitLogs we want to count
     *   }
     * })
    **/
    count<T extends HabitLogCountArgs>(
      args?: Subset<T, HabitLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HabitLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HabitLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HabitLogAggregateArgs>(args: Subset<T, HabitLogAggregateArgs>): Prisma.PrismaPromise<GetHabitLogAggregateType<T>>

    /**
     * Group by HabitLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HabitLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HabitLogGroupByArgs['orderBy'] }
        : { orderBy?: HabitLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HabitLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabitLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HabitLog model
   */
  readonly fields: HabitLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HabitLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HabitLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    habitDefinition<T extends HabitDefinitionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HabitDefinitionDefaultArgs<ExtArgs>>): Prisma__HabitDefinitionClient<$Result.GetResult<Prisma.$HabitDefinitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HabitLog model
   */
  interface HabitLogFieldRefs {
    readonly id: FieldRef<"HabitLog", 'Int'>
    readonly habitId: FieldRef<"HabitLog", 'Int'>
    readonly userId: FieldRef<"HabitLog", 'Int'>
    readonly completionDate: FieldRef<"HabitLog", 'DateTime'>
    readonly notes: FieldRef<"HabitLog", 'String'>
    readonly createdAt: FieldRef<"HabitLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HabitLog findUnique
   */
  export type HabitLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * Filter, which HabitLog to fetch.
     */
    where: HabitLogWhereUniqueInput
  }

  /**
   * HabitLog findUniqueOrThrow
   */
  export type HabitLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * Filter, which HabitLog to fetch.
     */
    where: HabitLogWhereUniqueInput
  }

  /**
   * HabitLog findFirst
   */
  export type HabitLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * Filter, which HabitLog to fetch.
     */
    where?: HabitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitLogs to fetch.
     */
    orderBy?: HabitLogOrderByWithRelationInput | HabitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HabitLogs.
     */
    cursor?: HabitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HabitLogs.
     */
    distinct?: HabitLogScalarFieldEnum | HabitLogScalarFieldEnum[]
  }

  /**
   * HabitLog findFirstOrThrow
   */
  export type HabitLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * Filter, which HabitLog to fetch.
     */
    where?: HabitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitLogs to fetch.
     */
    orderBy?: HabitLogOrderByWithRelationInput | HabitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HabitLogs.
     */
    cursor?: HabitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HabitLogs.
     */
    distinct?: HabitLogScalarFieldEnum | HabitLogScalarFieldEnum[]
  }

  /**
   * HabitLog findMany
   */
  export type HabitLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * Filter, which HabitLogs to fetch.
     */
    where?: HabitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitLogs to fetch.
     */
    orderBy?: HabitLogOrderByWithRelationInput | HabitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HabitLogs.
     */
    cursor?: HabitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitLogs.
     */
    skip?: number
    distinct?: HabitLogScalarFieldEnum | HabitLogScalarFieldEnum[]
  }

  /**
   * HabitLog create
   */
  export type HabitLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * The data needed to create a HabitLog.
     */
    data: XOR<HabitLogCreateInput, HabitLogUncheckedCreateInput>
  }

  /**
   * HabitLog createMany
   */
  export type HabitLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HabitLogs.
     */
    data: HabitLogCreateManyInput | HabitLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HabitLog createManyAndReturn
   */
  export type HabitLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * The data used to create many HabitLogs.
     */
    data: HabitLogCreateManyInput | HabitLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HabitLog update
   */
  export type HabitLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * The data needed to update a HabitLog.
     */
    data: XOR<HabitLogUpdateInput, HabitLogUncheckedUpdateInput>
    /**
     * Choose, which HabitLog to update.
     */
    where: HabitLogWhereUniqueInput
  }

  /**
   * HabitLog updateMany
   */
  export type HabitLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HabitLogs.
     */
    data: XOR<HabitLogUpdateManyMutationInput, HabitLogUncheckedUpdateManyInput>
    /**
     * Filter which HabitLogs to update
     */
    where?: HabitLogWhereInput
    /**
     * Limit how many HabitLogs to update.
     */
    limit?: number
  }

  /**
   * HabitLog updateManyAndReturn
   */
  export type HabitLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * The data used to update HabitLogs.
     */
    data: XOR<HabitLogUpdateManyMutationInput, HabitLogUncheckedUpdateManyInput>
    /**
     * Filter which HabitLogs to update
     */
    where?: HabitLogWhereInput
    /**
     * Limit how many HabitLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HabitLog upsert
   */
  export type HabitLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * The filter to search for the HabitLog to update in case it exists.
     */
    where: HabitLogWhereUniqueInput
    /**
     * In case the HabitLog found by the `where` argument doesn't exist, create a new HabitLog with this data.
     */
    create: XOR<HabitLogCreateInput, HabitLogUncheckedCreateInput>
    /**
     * In case the HabitLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HabitLogUpdateInput, HabitLogUncheckedUpdateInput>
  }

  /**
   * HabitLog delete
   */
  export type HabitLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * Filter which HabitLog to delete.
     */
    where: HabitLogWhereUniqueInput
  }

  /**
   * HabitLog deleteMany
   */
  export type HabitLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HabitLogs to delete
     */
    where?: HabitLogWhereInput
    /**
     * Limit how many HabitLogs to delete.
     */
    limit?: number
  }

  /**
   * HabitLog without action
   */
  export type HabitLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
  }


  /**
   * Model HealthLog
   */

  export type AggregateHealthLog = {
    _count: HealthLogCountAggregateOutputType | null
    _avg: HealthLogAvgAggregateOutputType | null
    _sum: HealthLogSumAggregateOutputType | null
    _min: HealthLogMinAggregateOutputType | null
    _max: HealthLogMaxAggregateOutputType | null
  }

  export type HealthLogAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    value: number | null
  }

  export type HealthLogSumAggregateOutputType = {
    id: number | null
    userId: number | null
    value: number | null
  }

  export type HealthLogMinAggregateOutputType = {
    id: number | null
    userId: number | null
    date: Date | null
    metricType: $Enums.HealthMetricType | null
    value: number | null
    source: $Enums.HealthDataSource | null
    createdAt: Date | null
  }

  export type HealthLogMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    date: Date | null
    metricType: $Enums.HealthMetricType | null
    value: number | null
    source: $Enums.HealthDataSource | null
    createdAt: Date | null
  }

  export type HealthLogCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    metricType: number
    value: number
    source: number
    createdAt: number
    _all: number
  }


  export type HealthLogAvgAggregateInputType = {
    id?: true
    userId?: true
    value?: true
  }

  export type HealthLogSumAggregateInputType = {
    id?: true
    userId?: true
    value?: true
  }

  export type HealthLogMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    metricType?: true
    value?: true
    source?: true
    createdAt?: true
  }

  export type HealthLogMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    metricType?: true
    value?: true
    source?: true
    createdAt?: true
  }

  export type HealthLogCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    metricType?: true
    value?: true
    source?: true
    createdAt?: true
    _all?: true
  }

  export type HealthLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HealthLog to aggregate.
     */
    where?: HealthLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealthLogs to fetch.
     */
    orderBy?: HealthLogOrderByWithRelationInput | HealthLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HealthLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealthLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealthLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HealthLogs
    **/
    _count?: true | HealthLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HealthLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HealthLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HealthLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HealthLogMaxAggregateInputType
  }

  export type GetHealthLogAggregateType<T extends HealthLogAggregateArgs> = {
        [P in keyof T & keyof AggregateHealthLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHealthLog[P]>
      : GetScalarType<T[P], AggregateHealthLog[P]>
  }




  export type HealthLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HealthLogWhereInput
    orderBy?: HealthLogOrderByWithAggregationInput | HealthLogOrderByWithAggregationInput[]
    by: HealthLogScalarFieldEnum[] | HealthLogScalarFieldEnum
    having?: HealthLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HealthLogCountAggregateInputType | true
    _avg?: HealthLogAvgAggregateInputType
    _sum?: HealthLogSumAggregateInputType
    _min?: HealthLogMinAggregateInputType
    _max?: HealthLogMaxAggregateInputType
  }

  export type HealthLogGroupByOutputType = {
    id: number
    userId: number
    date: Date
    metricType: $Enums.HealthMetricType
    value: number
    source: $Enums.HealthDataSource
    createdAt: Date
    _count: HealthLogCountAggregateOutputType | null
    _avg: HealthLogAvgAggregateOutputType | null
    _sum: HealthLogSumAggregateOutputType | null
    _min: HealthLogMinAggregateOutputType | null
    _max: HealthLogMaxAggregateOutputType | null
  }

  type GetHealthLogGroupByPayload<T extends HealthLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HealthLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HealthLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HealthLogGroupByOutputType[P]>
            : GetScalarType<T[P], HealthLogGroupByOutputType[P]>
        }
      >
    >


  export type HealthLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    metricType?: boolean
    value?: boolean
    source?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["healthLog"]>

  export type HealthLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    metricType?: boolean
    value?: boolean
    source?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["healthLog"]>

  export type HealthLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    metricType?: boolean
    value?: boolean
    source?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["healthLog"]>

  export type HealthLogSelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    metricType?: boolean
    value?: boolean
    source?: boolean
    createdAt?: boolean
  }

  export type HealthLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "date" | "metricType" | "value" | "source" | "createdAt", ExtArgs["result"]["healthLog"]>
  export type HealthLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HealthLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HealthLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $HealthLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HealthLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      date: Date
      metricType: $Enums.HealthMetricType
      value: number
      source: $Enums.HealthDataSource
      createdAt: Date
    }, ExtArgs["result"]["healthLog"]>
    composites: {}
  }

  type HealthLogGetPayload<S extends boolean | null | undefined | HealthLogDefaultArgs> = $Result.GetResult<Prisma.$HealthLogPayload, S>

  type HealthLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HealthLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HealthLogCountAggregateInputType | true
    }

  export interface HealthLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HealthLog'], meta: { name: 'HealthLog' } }
    /**
     * Find zero or one HealthLog that matches the filter.
     * @param {HealthLogFindUniqueArgs} args - Arguments to find a HealthLog
     * @example
     * // Get one HealthLog
     * const healthLog = await prisma.healthLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HealthLogFindUniqueArgs>(args: SelectSubset<T, HealthLogFindUniqueArgs<ExtArgs>>): Prisma__HealthLogClient<$Result.GetResult<Prisma.$HealthLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HealthLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HealthLogFindUniqueOrThrowArgs} args - Arguments to find a HealthLog
     * @example
     * // Get one HealthLog
     * const healthLog = await prisma.healthLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HealthLogFindUniqueOrThrowArgs>(args: SelectSubset<T, HealthLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HealthLogClient<$Result.GetResult<Prisma.$HealthLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HealthLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthLogFindFirstArgs} args - Arguments to find a HealthLog
     * @example
     * // Get one HealthLog
     * const healthLog = await prisma.healthLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HealthLogFindFirstArgs>(args?: SelectSubset<T, HealthLogFindFirstArgs<ExtArgs>>): Prisma__HealthLogClient<$Result.GetResult<Prisma.$HealthLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HealthLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthLogFindFirstOrThrowArgs} args - Arguments to find a HealthLog
     * @example
     * // Get one HealthLog
     * const healthLog = await prisma.healthLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HealthLogFindFirstOrThrowArgs>(args?: SelectSubset<T, HealthLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__HealthLogClient<$Result.GetResult<Prisma.$HealthLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HealthLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HealthLogs
     * const healthLogs = await prisma.healthLog.findMany()
     * 
     * // Get first 10 HealthLogs
     * const healthLogs = await prisma.healthLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const healthLogWithIdOnly = await prisma.healthLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HealthLogFindManyArgs>(args?: SelectSubset<T, HealthLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HealthLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HealthLog.
     * @param {HealthLogCreateArgs} args - Arguments to create a HealthLog.
     * @example
     * // Create one HealthLog
     * const HealthLog = await prisma.healthLog.create({
     *   data: {
     *     // ... data to create a HealthLog
     *   }
     * })
     * 
     */
    create<T extends HealthLogCreateArgs>(args: SelectSubset<T, HealthLogCreateArgs<ExtArgs>>): Prisma__HealthLogClient<$Result.GetResult<Prisma.$HealthLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HealthLogs.
     * @param {HealthLogCreateManyArgs} args - Arguments to create many HealthLogs.
     * @example
     * // Create many HealthLogs
     * const healthLog = await prisma.healthLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HealthLogCreateManyArgs>(args?: SelectSubset<T, HealthLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HealthLogs and returns the data saved in the database.
     * @param {HealthLogCreateManyAndReturnArgs} args - Arguments to create many HealthLogs.
     * @example
     * // Create many HealthLogs
     * const healthLog = await prisma.healthLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HealthLogs and only return the `id`
     * const healthLogWithIdOnly = await prisma.healthLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HealthLogCreateManyAndReturnArgs>(args?: SelectSubset<T, HealthLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HealthLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HealthLog.
     * @param {HealthLogDeleteArgs} args - Arguments to delete one HealthLog.
     * @example
     * // Delete one HealthLog
     * const HealthLog = await prisma.healthLog.delete({
     *   where: {
     *     // ... filter to delete one HealthLog
     *   }
     * })
     * 
     */
    delete<T extends HealthLogDeleteArgs>(args: SelectSubset<T, HealthLogDeleteArgs<ExtArgs>>): Prisma__HealthLogClient<$Result.GetResult<Prisma.$HealthLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HealthLog.
     * @param {HealthLogUpdateArgs} args - Arguments to update one HealthLog.
     * @example
     * // Update one HealthLog
     * const healthLog = await prisma.healthLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HealthLogUpdateArgs>(args: SelectSubset<T, HealthLogUpdateArgs<ExtArgs>>): Prisma__HealthLogClient<$Result.GetResult<Prisma.$HealthLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HealthLogs.
     * @param {HealthLogDeleteManyArgs} args - Arguments to filter HealthLogs to delete.
     * @example
     * // Delete a few HealthLogs
     * const { count } = await prisma.healthLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HealthLogDeleteManyArgs>(args?: SelectSubset<T, HealthLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HealthLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HealthLogs
     * const healthLog = await prisma.healthLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HealthLogUpdateManyArgs>(args: SelectSubset<T, HealthLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HealthLogs and returns the data updated in the database.
     * @param {HealthLogUpdateManyAndReturnArgs} args - Arguments to update many HealthLogs.
     * @example
     * // Update many HealthLogs
     * const healthLog = await prisma.healthLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HealthLogs and only return the `id`
     * const healthLogWithIdOnly = await prisma.healthLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HealthLogUpdateManyAndReturnArgs>(args: SelectSubset<T, HealthLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HealthLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HealthLog.
     * @param {HealthLogUpsertArgs} args - Arguments to update or create a HealthLog.
     * @example
     * // Update or create a HealthLog
     * const healthLog = await prisma.healthLog.upsert({
     *   create: {
     *     // ... data to create a HealthLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HealthLog we want to update
     *   }
     * })
     */
    upsert<T extends HealthLogUpsertArgs>(args: SelectSubset<T, HealthLogUpsertArgs<ExtArgs>>): Prisma__HealthLogClient<$Result.GetResult<Prisma.$HealthLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HealthLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthLogCountArgs} args - Arguments to filter HealthLogs to count.
     * @example
     * // Count the number of HealthLogs
     * const count = await prisma.healthLog.count({
     *   where: {
     *     // ... the filter for the HealthLogs we want to count
     *   }
     * })
    **/
    count<T extends HealthLogCountArgs>(
      args?: Subset<T, HealthLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HealthLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HealthLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HealthLogAggregateArgs>(args: Subset<T, HealthLogAggregateArgs>): Prisma.PrismaPromise<GetHealthLogAggregateType<T>>

    /**
     * Group by HealthLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HealthLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HealthLogGroupByArgs['orderBy'] }
        : { orderBy?: HealthLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HealthLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHealthLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HealthLog model
   */
  readonly fields: HealthLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HealthLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HealthLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HealthLog model
   */
  interface HealthLogFieldRefs {
    readonly id: FieldRef<"HealthLog", 'Int'>
    readonly userId: FieldRef<"HealthLog", 'Int'>
    readonly date: FieldRef<"HealthLog", 'DateTime'>
    readonly metricType: FieldRef<"HealthLog", 'HealthMetricType'>
    readonly value: FieldRef<"HealthLog", 'Float'>
    readonly source: FieldRef<"HealthLog", 'HealthDataSource'>
    readonly createdAt: FieldRef<"HealthLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HealthLog findUnique
   */
  export type HealthLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthLog
     */
    select?: HealthLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthLog
     */
    omit?: HealthLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthLogInclude<ExtArgs> | null
    /**
     * Filter, which HealthLog to fetch.
     */
    where: HealthLogWhereUniqueInput
  }

  /**
   * HealthLog findUniqueOrThrow
   */
  export type HealthLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthLog
     */
    select?: HealthLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthLog
     */
    omit?: HealthLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthLogInclude<ExtArgs> | null
    /**
     * Filter, which HealthLog to fetch.
     */
    where: HealthLogWhereUniqueInput
  }

  /**
   * HealthLog findFirst
   */
  export type HealthLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthLog
     */
    select?: HealthLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthLog
     */
    omit?: HealthLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthLogInclude<ExtArgs> | null
    /**
     * Filter, which HealthLog to fetch.
     */
    where?: HealthLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealthLogs to fetch.
     */
    orderBy?: HealthLogOrderByWithRelationInput | HealthLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HealthLogs.
     */
    cursor?: HealthLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealthLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealthLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HealthLogs.
     */
    distinct?: HealthLogScalarFieldEnum | HealthLogScalarFieldEnum[]
  }

  /**
   * HealthLog findFirstOrThrow
   */
  export type HealthLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthLog
     */
    select?: HealthLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthLog
     */
    omit?: HealthLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthLogInclude<ExtArgs> | null
    /**
     * Filter, which HealthLog to fetch.
     */
    where?: HealthLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealthLogs to fetch.
     */
    orderBy?: HealthLogOrderByWithRelationInput | HealthLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HealthLogs.
     */
    cursor?: HealthLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealthLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealthLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HealthLogs.
     */
    distinct?: HealthLogScalarFieldEnum | HealthLogScalarFieldEnum[]
  }

  /**
   * HealthLog findMany
   */
  export type HealthLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthLog
     */
    select?: HealthLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthLog
     */
    omit?: HealthLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthLogInclude<ExtArgs> | null
    /**
     * Filter, which HealthLogs to fetch.
     */
    where?: HealthLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealthLogs to fetch.
     */
    orderBy?: HealthLogOrderByWithRelationInput | HealthLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HealthLogs.
     */
    cursor?: HealthLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealthLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealthLogs.
     */
    skip?: number
    distinct?: HealthLogScalarFieldEnum | HealthLogScalarFieldEnum[]
  }

  /**
   * HealthLog create
   */
  export type HealthLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthLog
     */
    select?: HealthLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthLog
     */
    omit?: HealthLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthLogInclude<ExtArgs> | null
    /**
     * The data needed to create a HealthLog.
     */
    data: XOR<HealthLogCreateInput, HealthLogUncheckedCreateInput>
  }

  /**
   * HealthLog createMany
   */
  export type HealthLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HealthLogs.
     */
    data: HealthLogCreateManyInput | HealthLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HealthLog createManyAndReturn
   */
  export type HealthLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthLog
     */
    select?: HealthLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HealthLog
     */
    omit?: HealthLogOmit<ExtArgs> | null
    /**
     * The data used to create many HealthLogs.
     */
    data: HealthLogCreateManyInput | HealthLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HealthLog update
   */
  export type HealthLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthLog
     */
    select?: HealthLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthLog
     */
    omit?: HealthLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthLogInclude<ExtArgs> | null
    /**
     * The data needed to update a HealthLog.
     */
    data: XOR<HealthLogUpdateInput, HealthLogUncheckedUpdateInput>
    /**
     * Choose, which HealthLog to update.
     */
    where: HealthLogWhereUniqueInput
  }

  /**
   * HealthLog updateMany
   */
  export type HealthLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HealthLogs.
     */
    data: XOR<HealthLogUpdateManyMutationInput, HealthLogUncheckedUpdateManyInput>
    /**
     * Filter which HealthLogs to update
     */
    where?: HealthLogWhereInput
    /**
     * Limit how many HealthLogs to update.
     */
    limit?: number
  }

  /**
   * HealthLog updateManyAndReturn
   */
  export type HealthLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthLog
     */
    select?: HealthLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HealthLog
     */
    omit?: HealthLogOmit<ExtArgs> | null
    /**
     * The data used to update HealthLogs.
     */
    data: XOR<HealthLogUpdateManyMutationInput, HealthLogUncheckedUpdateManyInput>
    /**
     * Filter which HealthLogs to update
     */
    where?: HealthLogWhereInput
    /**
     * Limit how many HealthLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HealthLog upsert
   */
  export type HealthLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthLog
     */
    select?: HealthLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthLog
     */
    omit?: HealthLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthLogInclude<ExtArgs> | null
    /**
     * The filter to search for the HealthLog to update in case it exists.
     */
    where: HealthLogWhereUniqueInput
    /**
     * In case the HealthLog found by the `where` argument doesn't exist, create a new HealthLog with this data.
     */
    create: XOR<HealthLogCreateInput, HealthLogUncheckedCreateInput>
    /**
     * In case the HealthLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HealthLogUpdateInput, HealthLogUncheckedUpdateInput>
  }

  /**
   * HealthLog delete
   */
  export type HealthLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthLog
     */
    select?: HealthLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthLog
     */
    omit?: HealthLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthLogInclude<ExtArgs> | null
    /**
     * Filter which HealthLog to delete.
     */
    where: HealthLogWhereUniqueInput
  }

  /**
   * HealthLog deleteMany
   */
  export type HealthLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HealthLogs to delete
     */
    where?: HealthLogWhereInput
    /**
     * Limit how many HealthLogs to delete.
     */
    limit?: number
  }

  /**
   * HealthLog without action
   */
  export type HealthLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthLog
     */
    select?: HealthLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthLog
     */
    omit?: HealthLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthLogInclude<ExtArgs> | null
  }


  /**
   * Model BadgeDefinition
   */

  export type AggregateBadgeDefinition = {
    _count: BadgeDefinitionCountAggregateOutputType | null
    _avg: BadgeDefinitionAvgAggregateOutputType | null
    _sum: BadgeDefinitionSumAggregateOutputType | null
    _min: BadgeDefinitionMinAggregateOutputType | null
    _max: BadgeDefinitionMaxAggregateOutputType | null
  }

  export type BadgeDefinitionAvgAggregateOutputType = {
    id: number | null
  }

  export type BadgeDefinitionSumAggregateOutputType = {
    id: number | null
  }

  export type BadgeDefinitionMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    icon: string | null
    createdAt: Date | null
  }

  export type BadgeDefinitionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    icon: string | null
    createdAt: Date | null
  }

  export type BadgeDefinitionCountAggregateOutputType = {
    id: number
    name: number
    description: number
    criteria: number
    icon: number
    createdAt: number
    _all: number
  }


  export type BadgeDefinitionAvgAggregateInputType = {
    id?: true
  }

  export type BadgeDefinitionSumAggregateInputType = {
    id?: true
  }

  export type BadgeDefinitionMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    createdAt?: true
  }

  export type BadgeDefinitionMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    createdAt?: true
  }

  export type BadgeDefinitionCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    criteria?: true
    icon?: true
    createdAt?: true
    _all?: true
  }

  export type BadgeDefinitionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BadgeDefinition to aggregate.
     */
    where?: BadgeDefinitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BadgeDefinitions to fetch.
     */
    orderBy?: BadgeDefinitionOrderByWithRelationInput | BadgeDefinitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BadgeDefinitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BadgeDefinitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BadgeDefinitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BadgeDefinitions
    **/
    _count?: true | BadgeDefinitionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BadgeDefinitionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BadgeDefinitionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BadgeDefinitionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BadgeDefinitionMaxAggregateInputType
  }

  export type GetBadgeDefinitionAggregateType<T extends BadgeDefinitionAggregateArgs> = {
        [P in keyof T & keyof AggregateBadgeDefinition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBadgeDefinition[P]>
      : GetScalarType<T[P], AggregateBadgeDefinition[P]>
  }




  export type BadgeDefinitionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BadgeDefinitionWhereInput
    orderBy?: BadgeDefinitionOrderByWithAggregationInput | BadgeDefinitionOrderByWithAggregationInput[]
    by: BadgeDefinitionScalarFieldEnum[] | BadgeDefinitionScalarFieldEnum
    having?: BadgeDefinitionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BadgeDefinitionCountAggregateInputType | true
    _avg?: BadgeDefinitionAvgAggregateInputType
    _sum?: BadgeDefinitionSumAggregateInputType
    _min?: BadgeDefinitionMinAggregateInputType
    _max?: BadgeDefinitionMaxAggregateInputType
  }

  export type BadgeDefinitionGroupByOutputType = {
    id: number
    name: string
    description: string
    criteria: JsonValue
    icon: string | null
    createdAt: Date
    _count: BadgeDefinitionCountAggregateOutputType | null
    _avg: BadgeDefinitionAvgAggregateOutputType | null
    _sum: BadgeDefinitionSumAggregateOutputType | null
    _min: BadgeDefinitionMinAggregateOutputType | null
    _max: BadgeDefinitionMaxAggregateOutputType | null
  }

  type GetBadgeDefinitionGroupByPayload<T extends BadgeDefinitionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BadgeDefinitionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BadgeDefinitionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BadgeDefinitionGroupByOutputType[P]>
            : GetScalarType<T[P], BadgeDefinitionGroupByOutputType[P]>
        }
      >
    >


  export type BadgeDefinitionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    criteria?: boolean
    icon?: boolean
    createdAt?: boolean
    userBadges?: boolean | BadgeDefinition$userBadgesArgs<ExtArgs>
    questsRewarded?: boolean | BadgeDefinition$questsRewardedArgs<ExtArgs>
    _count?: boolean | BadgeDefinitionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["badgeDefinition"]>

  export type BadgeDefinitionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    criteria?: boolean
    icon?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["badgeDefinition"]>

  export type BadgeDefinitionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    criteria?: boolean
    icon?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["badgeDefinition"]>

  export type BadgeDefinitionSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    criteria?: boolean
    icon?: boolean
    createdAt?: boolean
  }

  export type BadgeDefinitionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "criteria" | "icon" | "createdAt", ExtArgs["result"]["badgeDefinition"]>
  export type BadgeDefinitionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userBadges?: boolean | BadgeDefinition$userBadgesArgs<ExtArgs>
    questsRewarded?: boolean | BadgeDefinition$questsRewardedArgs<ExtArgs>
    _count?: boolean | BadgeDefinitionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BadgeDefinitionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BadgeDefinitionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BadgeDefinitionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BadgeDefinition"
    objects: {
      userBadges: Prisma.$UserBadgePayload<ExtArgs>[]
      questsRewarded: Prisma.$QuestDefinitionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      criteria: Prisma.JsonValue
      icon: string | null
      createdAt: Date
    }, ExtArgs["result"]["badgeDefinition"]>
    composites: {}
  }

  type BadgeDefinitionGetPayload<S extends boolean | null | undefined | BadgeDefinitionDefaultArgs> = $Result.GetResult<Prisma.$BadgeDefinitionPayload, S>

  type BadgeDefinitionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BadgeDefinitionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BadgeDefinitionCountAggregateInputType | true
    }

  export interface BadgeDefinitionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BadgeDefinition'], meta: { name: 'BadgeDefinition' } }
    /**
     * Find zero or one BadgeDefinition that matches the filter.
     * @param {BadgeDefinitionFindUniqueArgs} args - Arguments to find a BadgeDefinition
     * @example
     * // Get one BadgeDefinition
     * const badgeDefinition = await prisma.badgeDefinition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BadgeDefinitionFindUniqueArgs>(args: SelectSubset<T, BadgeDefinitionFindUniqueArgs<ExtArgs>>): Prisma__BadgeDefinitionClient<$Result.GetResult<Prisma.$BadgeDefinitionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BadgeDefinition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BadgeDefinitionFindUniqueOrThrowArgs} args - Arguments to find a BadgeDefinition
     * @example
     * // Get one BadgeDefinition
     * const badgeDefinition = await prisma.badgeDefinition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BadgeDefinitionFindUniqueOrThrowArgs>(args: SelectSubset<T, BadgeDefinitionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BadgeDefinitionClient<$Result.GetResult<Prisma.$BadgeDefinitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BadgeDefinition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeDefinitionFindFirstArgs} args - Arguments to find a BadgeDefinition
     * @example
     * // Get one BadgeDefinition
     * const badgeDefinition = await prisma.badgeDefinition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BadgeDefinitionFindFirstArgs>(args?: SelectSubset<T, BadgeDefinitionFindFirstArgs<ExtArgs>>): Prisma__BadgeDefinitionClient<$Result.GetResult<Prisma.$BadgeDefinitionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BadgeDefinition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeDefinitionFindFirstOrThrowArgs} args - Arguments to find a BadgeDefinition
     * @example
     * // Get one BadgeDefinition
     * const badgeDefinition = await prisma.badgeDefinition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BadgeDefinitionFindFirstOrThrowArgs>(args?: SelectSubset<T, BadgeDefinitionFindFirstOrThrowArgs<ExtArgs>>): Prisma__BadgeDefinitionClient<$Result.GetResult<Prisma.$BadgeDefinitionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BadgeDefinitions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeDefinitionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BadgeDefinitions
     * const badgeDefinitions = await prisma.badgeDefinition.findMany()
     * 
     * // Get first 10 BadgeDefinitions
     * const badgeDefinitions = await prisma.badgeDefinition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const badgeDefinitionWithIdOnly = await prisma.badgeDefinition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BadgeDefinitionFindManyArgs>(args?: SelectSubset<T, BadgeDefinitionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgeDefinitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BadgeDefinition.
     * @param {BadgeDefinitionCreateArgs} args - Arguments to create a BadgeDefinition.
     * @example
     * // Create one BadgeDefinition
     * const BadgeDefinition = await prisma.badgeDefinition.create({
     *   data: {
     *     // ... data to create a BadgeDefinition
     *   }
     * })
     * 
     */
    create<T extends BadgeDefinitionCreateArgs>(args: SelectSubset<T, BadgeDefinitionCreateArgs<ExtArgs>>): Prisma__BadgeDefinitionClient<$Result.GetResult<Prisma.$BadgeDefinitionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BadgeDefinitions.
     * @param {BadgeDefinitionCreateManyArgs} args - Arguments to create many BadgeDefinitions.
     * @example
     * // Create many BadgeDefinitions
     * const badgeDefinition = await prisma.badgeDefinition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BadgeDefinitionCreateManyArgs>(args?: SelectSubset<T, BadgeDefinitionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BadgeDefinitions and returns the data saved in the database.
     * @param {BadgeDefinitionCreateManyAndReturnArgs} args - Arguments to create many BadgeDefinitions.
     * @example
     * // Create many BadgeDefinitions
     * const badgeDefinition = await prisma.badgeDefinition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BadgeDefinitions and only return the `id`
     * const badgeDefinitionWithIdOnly = await prisma.badgeDefinition.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BadgeDefinitionCreateManyAndReturnArgs>(args?: SelectSubset<T, BadgeDefinitionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgeDefinitionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BadgeDefinition.
     * @param {BadgeDefinitionDeleteArgs} args - Arguments to delete one BadgeDefinition.
     * @example
     * // Delete one BadgeDefinition
     * const BadgeDefinition = await prisma.badgeDefinition.delete({
     *   where: {
     *     // ... filter to delete one BadgeDefinition
     *   }
     * })
     * 
     */
    delete<T extends BadgeDefinitionDeleteArgs>(args: SelectSubset<T, BadgeDefinitionDeleteArgs<ExtArgs>>): Prisma__BadgeDefinitionClient<$Result.GetResult<Prisma.$BadgeDefinitionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BadgeDefinition.
     * @param {BadgeDefinitionUpdateArgs} args - Arguments to update one BadgeDefinition.
     * @example
     * // Update one BadgeDefinition
     * const badgeDefinition = await prisma.badgeDefinition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BadgeDefinitionUpdateArgs>(args: SelectSubset<T, BadgeDefinitionUpdateArgs<ExtArgs>>): Prisma__BadgeDefinitionClient<$Result.GetResult<Prisma.$BadgeDefinitionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BadgeDefinitions.
     * @param {BadgeDefinitionDeleteManyArgs} args - Arguments to filter BadgeDefinitions to delete.
     * @example
     * // Delete a few BadgeDefinitions
     * const { count } = await prisma.badgeDefinition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BadgeDefinitionDeleteManyArgs>(args?: SelectSubset<T, BadgeDefinitionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BadgeDefinitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeDefinitionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BadgeDefinitions
     * const badgeDefinition = await prisma.badgeDefinition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BadgeDefinitionUpdateManyArgs>(args: SelectSubset<T, BadgeDefinitionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BadgeDefinitions and returns the data updated in the database.
     * @param {BadgeDefinitionUpdateManyAndReturnArgs} args - Arguments to update many BadgeDefinitions.
     * @example
     * // Update many BadgeDefinitions
     * const badgeDefinition = await prisma.badgeDefinition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BadgeDefinitions and only return the `id`
     * const badgeDefinitionWithIdOnly = await prisma.badgeDefinition.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BadgeDefinitionUpdateManyAndReturnArgs>(args: SelectSubset<T, BadgeDefinitionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgeDefinitionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BadgeDefinition.
     * @param {BadgeDefinitionUpsertArgs} args - Arguments to update or create a BadgeDefinition.
     * @example
     * // Update or create a BadgeDefinition
     * const badgeDefinition = await prisma.badgeDefinition.upsert({
     *   create: {
     *     // ... data to create a BadgeDefinition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BadgeDefinition we want to update
     *   }
     * })
     */
    upsert<T extends BadgeDefinitionUpsertArgs>(args: SelectSubset<T, BadgeDefinitionUpsertArgs<ExtArgs>>): Prisma__BadgeDefinitionClient<$Result.GetResult<Prisma.$BadgeDefinitionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BadgeDefinitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeDefinitionCountArgs} args - Arguments to filter BadgeDefinitions to count.
     * @example
     * // Count the number of BadgeDefinitions
     * const count = await prisma.badgeDefinition.count({
     *   where: {
     *     // ... the filter for the BadgeDefinitions we want to count
     *   }
     * })
    **/
    count<T extends BadgeDefinitionCountArgs>(
      args?: Subset<T, BadgeDefinitionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BadgeDefinitionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BadgeDefinition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeDefinitionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BadgeDefinitionAggregateArgs>(args: Subset<T, BadgeDefinitionAggregateArgs>): Prisma.PrismaPromise<GetBadgeDefinitionAggregateType<T>>

    /**
     * Group by BadgeDefinition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeDefinitionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BadgeDefinitionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BadgeDefinitionGroupByArgs['orderBy'] }
        : { orderBy?: BadgeDefinitionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BadgeDefinitionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBadgeDefinitionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BadgeDefinition model
   */
  readonly fields: BadgeDefinitionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BadgeDefinition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BadgeDefinitionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userBadges<T extends BadgeDefinition$userBadgesArgs<ExtArgs> = {}>(args?: Subset<T, BadgeDefinition$userBadgesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    questsRewarded<T extends BadgeDefinition$questsRewardedArgs<ExtArgs> = {}>(args?: Subset<T, BadgeDefinition$questsRewardedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestDefinitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BadgeDefinition model
   */
  interface BadgeDefinitionFieldRefs {
    readonly id: FieldRef<"BadgeDefinition", 'Int'>
    readonly name: FieldRef<"BadgeDefinition", 'String'>
    readonly description: FieldRef<"BadgeDefinition", 'String'>
    readonly criteria: FieldRef<"BadgeDefinition", 'Json'>
    readonly icon: FieldRef<"BadgeDefinition", 'String'>
    readonly createdAt: FieldRef<"BadgeDefinition", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BadgeDefinition findUnique
   */
  export type BadgeDefinitionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeDefinition
     */
    select?: BadgeDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgeDefinition
     */
    omit?: BadgeDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeDefinitionInclude<ExtArgs> | null
    /**
     * Filter, which BadgeDefinition to fetch.
     */
    where: BadgeDefinitionWhereUniqueInput
  }

  /**
   * BadgeDefinition findUniqueOrThrow
   */
  export type BadgeDefinitionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeDefinition
     */
    select?: BadgeDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgeDefinition
     */
    omit?: BadgeDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeDefinitionInclude<ExtArgs> | null
    /**
     * Filter, which BadgeDefinition to fetch.
     */
    where: BadgeDefinitionWhereUniqueInput
  }

  /**
   * BadgeDefinition findFirst
   */
  export type BadgeDefinitionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeDefinition
     */
    select?: BadgeDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgeDefinition
     */
    omit?: BadgeDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeDefinitionInclude<ExtArgs> | null
    /**
     * Filter, which BadgeDefinition to fetch.
     */
    where?: BadgeDefinitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BadgeDefinitions to fetch.
     */
    orderBy?: BadgeDefinitionOrderByWithRelationInput | BadgeDefinitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BadgeDefinitions.
     */
    cursor?: BadgeDefinitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BadgeDefinitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BadgeDefinitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BadgeDefinitions.
     */
    distinct?: BadgeDefinitionScalarFieldEnum | BadgeDefinitionScalarFieldEnum[]
  }

  /**
   * BadgeDefinition findFirstOrThrow
   */
  export type BadgeDefinitionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeDefinition
     */
    select?: BadgeDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgeDefinition
     */
    omit?: BadgeDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeDefinitionInclude<ExtArgs> | null
    /**
     * Filter, which BadgeDefinition to fetch.
     */
    where?: BadgeDefinitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BadgeDefinitions to fetch.
     */
    orderBy?: BadgeDefinitionOrderByWithRelationInput | BadgeDefinitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BadgeDefinitions.
     */
    cursor?: BadgeDefinitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BadgeDefinitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BadgeDefinitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BadgeDefinitions.
     */
    distinct?: BadgeDefinitionScalarFieldEnum | BadgeDefinitionScalarFieldEnum[]
  }

  /**
   * BadgeDefinition findMany
   */
  export type BadgeDefinitionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeDefinition
     */
    select?: BadgeDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgeDefinition
     */
    omit?: BadgeDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeDefinitionInclude<ExtArgs> | null
    /**
     * Filter, which BadgeDefinitions to fetch.
     */
    where?: BadgeDefinitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BadgeDefinitions to fetch.
     */
    orderBy?: BadgeDefinitionOrderByWithRelationInput | BadgeDefinitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BadgeDefinitions.
     */
    cursor?: BadgeDefinitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BadgeDefinitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BadgeDefinitions.
     */
    skip?: number
    distinct?: BadgeDefinitionScalarFieldEnum | BadgeDefinitionScalarFieldEnum[]
  }

  /**
   * BadgeDefinition create
   */
  export type BadgeDefinitionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeDefinition
     */
    select?: BadgeDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgeDefinition
     */
    omit?: BadgeDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeDefinitionInclude<ExtArgs> | null
    /**
     * The data needed to create a BadgeDefinition.
     */
    data: XOR<BadgeDefinitionCreateInput, BadgeDefinitionUncheckedCreateInput>
  }

  /**
   * BadgeDefinition createMany
   */
  export type BadgeDefinitionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BadgeDefinitions.
     */
    data: BadgeDefinitionCreateManyInput | BadgeDefinitionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BadgeDefinition createManyAndReturn
   */
  export type BadgeDefinitionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeDefinition
     */
    select?: BadgeDefinitionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BadgeDefinition
     */
    omit?: BadgeDefinitionOmit<ExtArgs> | null
    /**
     * The data used to create many BadgeDefinitions.
     */
    data: BadgeDefinitionCreateManyInput | BadgeDefinitionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BadgeDefinition update
   */
  export type BadgeDefinitionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeDefinition
     */
    select?: BadgeDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgeDefinition
     */
    omit?: BadgeDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeDefinitionInclude<ExtArgs> | null
    /**
     * The data needed to update a BadgeDefinition.
     */
    data: XOR<BadgeDefinitionUpdateInput, BadgeDefinitionUncheckedUpdateInput>
    /**
     * Choose, which BadgeDefinition to update.
     */
    where: BadgeDefinitionWhereUniqueInput
  }

  /**
   * BadgeDefinition updateMany
   */
  export type BadgeDefinitionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BadgeDefinitions.
     */
    data: XOR<BadgeDefinitionUpdateManyMutationInput, BadgeDefinitionUncheckedUpdateManyInput>
    /**
     * Filter which BadgeDefinitions to update
     */
    where?: BadgeDefinitionWhereInput
    /**
     * Limit how many BadgeDefinitions to update.
     */
    limit?: number
  }

  /**
   * BadgeDefinition updateManyAndReturn
   */
  export type BadgeDefinitionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeDefinition
     */
    select?: BadgeDefinitionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BadgeDefinition
     */
    omit?: BadgeDefinitionOmit<ExtArgs> | null
    /**
     * The data used to update BadgeDefinitions.
     */
    data: XOR<BadgeDefinitionUpdateManyMutationInput, BadgeDefinitionUncheckedUpdateManyInput>
    /**
     * Filter which BadgeDefinitions to update
     */
    where?: BadgeDefinitionWhereInput
    /**
     * Limit how many BadgeDefinitions to update.
     */
    limit?: number
  }

  /**
   * BadgeDefinition upsert
   */
  export type BadgeDefinitionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeDefinition
     */
    select?: BadgeDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgeDefinition
     */
    omit?: BadgeDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeDefinitionInclude<ExtArgs> | null
    /**
     * The filter to search for the BadgeDefinition to update in case it exists.
     */
    where: BadgeDefinitionWhereUniqueInput
    /**
     * In case the BadgeDefinition found by the `where` argument doesn't exist, create a new BadgeDefinition with this data.
     */
    create: XOR<BadgeDefinitionCreateInput, BadgeDefinitionUncheckedCreateInput>
    /**
     * In case the BadgeDefinition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BadgeDefinitionUpdateInput, BadgeDefinitionUncheckedUpdateInput>
  }

  /**
   * BadgeDefinition delete
   */
  export type BadgeDefinitionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeDefinition
     */
    select?: BadgeDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgeDefinition
     */
    omit?: BadgeDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeDefinitionInclude<ExtArgs> | null
    /**
     * Filter which BadgeDefinition to delete.
     */
    where: BadgeDefinitionWhereUniqueInput
  }

  /**
   * BadgeDefinition deleteMany
   */
  export type BadgeDefinitionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BadgeDefinitions to delete
     */
    where?: BadgeDefinitionWhereInput
    /**
     * Limit how many BadgeDefinitions to delete.
     */
    limit?: number
  }

  /**
   * BadgeDefinition.userBadges
   */
  export type BadgeDefinition$userBadgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    where?: UserBadgeWhereInput
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    cursor?: UserBadgeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserBadgeScalarFieldEnum | UserBadgeScalarFieldEnum[]
  }

  /**
   * BadgeDefinition.questsRewarded
   */
  export type BadgeDefinition$questsRewardedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestDefinition
     */
    select?: QuestDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestDefinition
     */
    omit?: QuestDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestDefinitionInclude<ExtArgs> | null
    where?: QuestDefinitionWhereInput
    orderBy?: QuestDefinitionOrderByWithRelationInput | QuestDefinitionOrderByWithRelationInput[]
    cursor?: QuestDefinitionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestDefinitionScalarFieldEnum | QuestDefinitionScalarFieldEnum[]
  }

  /**
   * BadgeDefinition without action
   */
  export type BadgeDefinitionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeDefinition
     */
    select?: BadgeDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgeDefinition
     */
    omit?: BadgeDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeDefinitionInclude<ExtArgs> | null
  }


  /**
   * Model UserBadge
   */

  export type AggregateUserBadge = {
    _count: UserBadgeCountAggregateOutputType | null
    _avg: UserBadgeAvgAggregateOutputType | null
    _sum: UserBadgeSumAggregateOutputType | null
    _min: UserBadgeMinAggregateOutputType | null
    _max: UserBadgeMaxAggregateOutputType | null
  }

  export type UserBadgeAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    badgeId: number | null
  }

  export type UserBadgeSumAggregateOutputType = {
    id: number | null
    userId: number | null
    badgeId: number | null
  }

  export type UserBadgeMinAggregateOutputType = {
    id: number | null
    userId: number | null
    badgeId: number | null
    earnedDate: Date | null
  }

  export type UserBadgeMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    badgeId: number | null
    earnedDate: Date | null
  }

  export type UserBadgeCountAggregateOutputType = {
    id: number
    userId: number
    badgeId: number
    earnedDate: number
    _all: number
  }


  export type UserBadgeAvgAggregateInputType = {
    id?: true
    userId?: true
    badgeId?: true
  }

  export type UserBadgeSumAggregateInputType = {
    id?: true
    userId?: true
    badgeId?: true
  }

  export type UserBadgeMinAggregateInputType = {
    id?: true
    userId?: true
    badgeId?: true
    earnedDate?: true
  }

  export type UserBadgeMaxAggregateInputType = {
    id?: true
    userId?: true
    badgeId?: true
    earnedDate?: true
  }

  export type UserBadgeCountAggregateInputType = {
    id?: true
    userId?: true
    badgeId?: true
    earnedDate?: true
    _all?: true
  }

  export type UserBadgeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBadge to aggregate.
     */
    where?: UserBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBadges to fetch.
     */
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBadges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserBadges
    **/
    _count?: true | UserBadgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserBadgeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserBadgeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserBadgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserBadgeMaxAggregateInputType
  }

  export type GetUserBadgeAggregateType<T extends UserBadgeAggregateArgs> = {
        [P in keyof T & keyof AggregateUserBadge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserBadge[P]>
      : GetScalarType<T[P], AggregateUserBadge[P]>
  }




  export type UserBadgeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBadgeWhereInput
    orderBy?: UserBadgeOrderByWithAggregationInput | UserBadgeOrderByWithAggregationInput[]
    by: UserBadgeScalarFieldEnum[] | UserBadgeScalarFieldEnum
    having?: UserBadgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserBadgeCountAggregateInputType | true
    _avg?: UserBadgeAvgAggregateInputType
    _sum?: UserBadgeSumAggregateInputType
    _min?: UserBadgeMinAggregateInputType
    _max?: UserBadgeMaxAggregateInputType
  }

  export type UserBadgeGroupByOutputType = {
    id: number
    userId: number
    badgeId: number
    earnedDate: Date
    _count: UserBadgeCountAggregateOutputType | null
    _avg: UserBadgeAvgAggregateOutputType | null
    _sum: UserBadgeSumAggregateOutputType | null
    _min: UserBadgeMinAggregateOutputType | null
    _max: UserBadgeMaxAggregateOutputType | null
  }

  type GetUserBadgeGroupByPayload<T extends UserBadgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserBadgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserBadgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserBadgeGroupByOutputType[P]>
            : GetScalarType<T[P], UserBadgeGroupByOutputType[P]>
        }
      >
    >


  export type UserBadgeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    badgeId?: boolean
    earnedDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    badge?: boolean | BadgeDefinitionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBadge"]>

  export type UserBadgeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    badgeId?: boolean
    earnedDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    badge?: boolean | BadgeDefinitionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBadge"]>

  export type UserBadgeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    badgeId?: boolean
    earnedDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    badge?: boolean | BadgeDefinitionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBadge"]>

  export type UserBadgeSelectScalar = {
    id?: boolean
    userId?: boolean
    badgeId?: boolean
    earnedDate?: boolean
  }

  export type UserBadgeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "badgeId" | "earnedDate", ExtArgs["result"]["userBadge"]>
  export type UserBadgeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    badge?: boolean | BadgeDefinitionDefaultArgs<ExtArgs>
  }
  export type UserBadgeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    badge?: boolean | BadgeDefinitionDefaultArgs<ExtArgs>
  }
  export type UserBadgeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    badge?: boolean | BadgeDefinitionDefaultArgs<ExtArgs>
  }

  export type $UserBadgePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserBadge"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      badge: Prisma.$BadgeDefinitionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      badgeId: number
      earnedDate: Date
    }, ExtArgs["result"]["userBadge"]>
    composites: {}
  }

  type UserBadgeGetPayload<S extends boolean | null | undefined | UserBadgeDefaultArgs> = $Result.GetResult<Prisma.$UserBadgePayload, S>

  type UserBadgeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserBadgeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserBadgeCountAggregateInputType | true
    }

  export interface UserBadgeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserBadge'], meta: { name: 'UserBadge' } }
    /**
     * Find zero or one UserBadge that matches the filter.
     * @param {UserBadgeFindUniqueArgs} args - Arguments to find a UserBadge
     * @example
     * // Get one UserBadge
     * const userBadge = await prisma.userBadge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserBadgeFindUniqueArgs>(args: SelectSubset<T, UserBadgeFindUniqueArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserBadge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserBadgeFindUniqueOrThrowArgs} args - Arguments to find a UserBadge
     * @example
     * // Get one UserBadge
     * const userBadge = await prisma.userBadge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserBadgeFindUniqueOrThrowArgs>(args: SelectSubset<T, UserBadgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserBadge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeFindFirstArgs} args - Arguments to find a UserBadge
     * @example
     * // Get one UserBadge
     * const userBadge = await prisma.userBadge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserBadgeFindFirstArgs>(args?: SelectSubset<T, UserBadgeFindFirstArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserBadge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeFindFirstOrThrowArgs} args - Arguments to find a UserBadge
     * @example
     * // Get one UserBadge
     * const userBadge = await prisma.userBadge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserBadgeFindFirstOrThrowArgs>(args?: SelectSubset<T, UserBadgeFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserBadges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserBadges
     * const userBadges = await prisma.userBadge.findMany()
     * 
     * // Get first 10 UserBadges
     * const userBadges = await prisma.userBadge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userBadgeWithIdOnly = await prisma.userBadge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserBadgeFindManyArgs>(args?: SelectSubset<T, UserBadgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserBadge.
     * @param {UserBadgeCreateArgs} args - Arguments to create a UserBadge.
     * @example
     * // Create one UserBadge
     * const UserBadge = await prisma.userBadge.create({
     *   data: {
     *     // ... data to create a UserBadge
     *   }
     * })
     * 
     */
    create<T extends UserBadgeCreateArgs>(args: SelectSubset<T, UserBadgeCreateArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserBadges.
     * @param {UserBadgeCreateManyArgs} args - Arguments to create many UserBadges.
     * @example
     * // Create many UserBadges
     * const userBadge = await prisma.userBadge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserBadgeCreateManyArgs>(args?: SelectSubset<T, UserBadgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserBadges and returns the data saved in the database.
     * @param {UserBadgeCreateManyAndReturnArgs} args - Arguments to create many UserBadges.
     * @example
     * // Create many UserBadges
     * const userBadge = await prisma.userBadge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserBadges and only return the `id`
     * const userBadgeWithIdOnly = await prisma.userBadge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserBadgeCreateManyAndReturnArgs>(args?: SelectSubset<T, UserBadgeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserBadge.
     * @param {UserBadgeDeleteArgs} args - Arguments to delete one UserBadge.
     * @example
     * // Delete one UserBadge
     * const UserBadge = await prisma.userBadge.delete({
     *   where: {
     *     // ... filter to delete one UserBadge
     *   }
     * })
     * 
     */
    delete<T extends UserBadgeDeleteArgs>(args: SelectSubset<T, UserBadgeDeleteArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserBadge.
     * @param {UserBadgeUpdateArgs} args - Arguments to update one UserBadge.
     * @example
     * // Update one UserBadge
     * const userBadge = await prisma.userBadge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserBadgeUpdateArgs>(args: SelectSubset<T, UserBadgeUpdateArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserBadges.
     * @param {UserBadgeDeleteManyArgs} args - Arguments to filter UserBadges to delete.
     * @example
     * // Delete a few UserBadges
     * const { count } = await prisma.userBadge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserBadgeDeleteManyArgs>(args?: SelectSubset<T, UserBadgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserBadges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserBadges
     * const userBadge = await prisma.userBadge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserBadgeUpdateManyArgs>(args: SelectSubset<T, UserBadgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserBadges and returns the data updated in the database.
     * @param {UserBadgeUpdateManyAndReturnArgs} args - Arguments to update many UserBadges.
     * @example
     * // Update many UserBadges
     * const userBadge = await prisma.userBadge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserBadges and only return the `id`
     * const userBadgeWithIdOnly = await prisma.userBadge.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserBadgeUpdateManyAndReturnArgs>(args: SelectSubset<T, UserBadgeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserBadge.
     * @param {UserBadgeUpsertArgs} args - Arguments to update or create a UserBadge.
     * @example
     * // Update or create a UserBadge
     * const userBadge = await prisma.userBadge.upsert({
     *   create: {
     *     // ... data to create a UserBadge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserBadge we want to update
     *   }
     * })
     */
    upsert<T extends UserBadgeUpsertArgs>(args: SelectSubset<T, UserBadgeUpsertArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserBadges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeCountArgs} args - Arguments to filter UserBadges to count.
     * @example
     * // Count the number of UserBadges
     * const count = await prisma.userBadge.count({
     *   where: {
     *     // ... the filter for the UserBadges we want to count
     *   }
     * })
    **/
    count<T extends UserBadgeCountArgs>(
      args?: Subset<T, UserBadgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserBadgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserBadge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserBadgeAggregateArgs>(args: Subset<T, UserBadgeAggregateArgs>): Prisma.PrismaPromise<GetUserBadgeAggregateType<T>>

    /**
     * Group by UserBadge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserBadgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserBadgeGroupByArgs['orderBy'] }
        : { orderBy?: UserBadgeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserBadgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserBadgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserBadge model
   */
  readonly fields: UserBadgeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserBadge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserBadgeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    badge<T extends BadgeDefinitionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BadgeDefinitionDefaultArgs<ExtArgs>>): Prisma__BadgeDefinitionClient<$Result.GetResult<Prisma.$BadgeDefinitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserBadge model
   */
  interface UserBadgeFieldRefs {
    readonly id: FieldRef<"UserBadge", 'Int'>
    readonly userId: FieldRef<"UserBadge", 'Int'>
    readonly badgeId: FieldRef<"UserBadge", 'Int'>
    readonly earnedDate: FieldRef<"UserBadge", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserBadge findUnique
   */
  export type UserBadgeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter, which UserBadge to fetch.
     */
    where: UserBadgeWhereUniqueInput
  }

  /**
   * UserBadge findUniqueOrThrow
   */
  export type UserBadgeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter, which UserBadge to fetch.
     */
    where: UserBadgeWhereUniqueInput
  }

  /**
   * UserBadge findFirst
   */
  export type UserBadgeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter, which UserBadge to fetch.
     */
    where?: UserBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBadges to fetch.
     */
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBadges.
     */
    cursor?: UserBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBadges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBadges.
     */
    distinct?: UserBadgeScalarFieldEnum | UserBadgeScalarFieldEnum[]
  }

  /**
   * UserBadge findFirstOrThrow
   */
  export type UserBadgeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter, which UserBadge to fetch.
     */
    where?: UserBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBadges to fetch.
     */
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBadges.
     */
    cursor?: UserBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBadges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBadges.
     */
    distinct?: UserBadgeScalarFieldEnum | UserBadgeScalarFieldEnum[]
  }

  /**
   * UserBadge findMany
   */
  export type UserBadgeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter, which UserBadges to fetch.
     */
    where?: UserBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBadges to fetch.
     */
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserBadges.
     */
    cursor?: UserBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBadges.
     */
    skip?: number
    distinct?: UserBadgeScalarFieldEnum | UserBadgeScalarFieldEnum[]
  }

  /**
   * UserBadge create
   */
  export type UserBadgeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * The data needed to create a UserBadge.
     */
    data: XOR<UserBadgeCreateInput, UserBadgeUncheckedCreateInput>
  }

  /**
   * UserBadge createMany
   */
  export type UserBadgeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserBadges.
     */
    data: UserBadgeCreateManyInput | UserBadgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserBadge createManyAndReturn
   */
  export type UserBadgeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * The data used to create many UserBadges.
     */
    data: UserBadgeCreateManyInput | UserBadgeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserBadge update
   */
  export type UserBadgeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * The data needed to update a UserBadge.
     */
    data: XOR<UserBadgeUpdateInput, UserBadgeUncheckedUpdateInput>
    /**
     * Choose, which UserBadge to update.
     */
    where: UserBadgeWhereUniqueInput
  }

  /**
   * UserBadge updateMany
   */
  export type UserBadgeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserBadges.
     */
    data: XOR<UserBadgeUpdateManyMutationInput, UserBadgeUncheckedUpdateManyInput>
    /**
     * Filter which UserBadges to update
     */
    where?: UserBadgeWhereInput
    /**
     * Limit how many UserBadges to update.
     */
    limit?: number
  }

  /**
   * UserBadge updateManyAndReturn
   */
  export type UserBadgeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * The data used to update UserBadges.
     */
    data: XOR<UserBadgeUpdateManyMutationInput, UserBadgeUncheckedUpdateManyInput>
    /**
     * Filter which UserBadges to update
     */
    where?: UserBadgeWhereInput
    /**
     * Limit how many UserBadges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserBadge upsert
   */
  export type UserBadgeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * The filter to search for the UserBadge to update in case it exists.
     */
    where: UserBadgeWhereUniqueInput
    /**
     * In case the UserBadge found by the `where` argument doesn't exist, create a new UserBadge with this data.
     */
    create: XOR<UserBadgeCreateInput, UserBadgeUncheckedCreateInput>
    /**
     * In case the UserBadge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserBadgeUpdateInput, UserBadgeUncheckedUpdateInput>
  }

  /**
   * UserBadge delete
   */
  export type UserBadgeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter which UserBadge to delete.
     */
    where: UserBadgeWhereUniqueInput
  }

  /**
   * UserBadge deleteMany
   */
  export type UserBadgeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBadges to delete
     */
    where?: UserBadgeWhereInput
    /**
     * Limit how many UserBadges to delete.
     */
    limit?: number
  }

  /**
   * UserBadge without action
   */
  export type UserBadgeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
  }


  /**
   * Model QuestDefinition
   */

  export type AggregateQuestDefinition = {
    _count: QuestDefinitionCountAggregateOutputType | null
    _avg: QuestDefinitionAvgAggregateOutputType | null
    _sum: QuestDefinitionSumAggregateOutputType | null
    _min: QuestDefinitionMinAggregateOutputType | null
    _max: QuestDefinitionMaxAggregateOutputType | null
  }

  export type QuestDefinitionAvgAggregateOutputType = {
    id: number | null
    xpReward: number | null
    badgeRewardId: number | null
  }

  export type QuestDefinitionSumAggregateOutputType = {
    id: number | null
    xpReward: number | null
    badgeRewardId: number | null
  }

  export type QuestDefinitionMinAggregateOutputType = {
    id: number | null
    type: $Enums.QuestType | null
    title: string | null
    description: string | null
    xpReward: number | null
    badgeRewardId: number | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type QuestDefinitionMaxAggregateOutputType = {
    id: number | null
    type: $Enums.QuestType | null
    title: string | null
    description: string | null
    xpReward: number | null
    badgeRewardId: number | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type QuestDefinitionCountAggregateOutputType = {
    id: number
    type: number
    title: number
    description: number
    criteria: number
    xpReward: number
    badgeRewardId: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type QuestDefinitionAvgAggregateInputType = {
    id?: true
    xpReward?: true
    badgeRewardId?: true
  }

  export type QuestDefinitionSumAggregateInputType = {
    id?: true
    xpReward?: true
    badgeRewardId?: true
  }

  export type QuestDefinitionMinAggregateInputType = {
    id?: true
    type?: true
    title?: true
    description?: true
    xpReward?: true
    badgeRewardId?: true
    isActive?: true
    createdAt?: true
  }

  export type QuestDefinitionMaxAggregateInputType = {
    id?: true
    type?: true
    title?: true
    description?: true
    xpReward?: true
    badgeRewardId?: true
    isActive?: true
    createdAt?: true
  }

  export type QuestDefinitionCountAggregateInputType = {
    id?: true
    type?: true
    title?: true
    description?: true
    criteria?: true
    xpReward?: true
    badgeRewardId?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type QuestDefinitionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestDefinition to aggregate.
     */
    where?: QuestDefinitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestDefinitions to fetch.
     */
    orderBy?: QuestDefinitionOrderByWithRelationInput | QuestDefinitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestDefinitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestDefinitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestDefinitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuestDefinitions
    **/
    _count?: true | QuestDefinitionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestDefinitionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestDefinitionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestDefinitionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestDefinitionMaxAggregateInputType
  }

  export type GetQuestDefinitionAggregateType<T extends QuestDefinitionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestDefinition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestDefinition[P]>
      : GetScalarType<T[P], AggregateQuestDefinition[P]>
  }




  export type QuestDefinitionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestDefinitionWhereInput
    orderBy?: QuestDefinitionOrderByWithAggregationInput | QuestDefinitionOrderByWithAggregationInput[]
    by: QuestDefinitionScalarFieldEnum[] | QuestDefinitionScalarFieldEnum
    having?: QuestDefinitionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestDefinitionCountAggregateInputType | true
    _avg?: QuestDefinitionAvgAggregateInputType
    _sum?: QuestDefinitionSumAggregateInputType
    _min?: QuestDefinitionMinAggregateInputType
    _max?: QuestDefinitionMaxAggregateInputType
  }

  export type QuestDefinitionGroupByOutputType = {
    id: number
    type: $Enums.QuestType
    title: string
    description: string
    criteria: JsonValue
    xpReward: number
    badgeRewardId: number | null
    isActive: boolean
    createdAt: Date
    _count: QuestDefinitionCountAggregateOutputType | null
    _avg: QuestDefinitionAvgAggregateOutputType | null
    _sum: QuestDefinitionSumAggregateOutputType | null
    _min: QuestDefinitionMinAggregateOutputType | null
    _max: QuestDefinitionMaxAggregateOutputType | null
  }

  type GetQuestDefinitionGroupByPayload<T extends QuestDefinitionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestDefinitionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestDefinitionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestDefinitionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestDefinitionGroupByOutputType[P]>
        }
      >
    >


  export type QuestDefinitionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    criteria?: boolean
    xpReward?: boolean
    badgeRewardId?: boolean
    isActive?: boolean
    createdAt?: boolean
    badgeReward?: boolean | QuestDefinition$badgeRewardArgs<ExtArgs>
    userQuests?: boolean | QuestDefinition$userQuestsArgs<ExtArgs>
    aiOutputs?: boolean | QuestDefinition$aiOutputsArgs<ExtArgs>
    _count?: boolean | QuestDefinitionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questDefinition"]>

  export type QuestDefinitionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    criteria?: boolean
    xpReward?: boolean
    badgeRewardId?: boolean
    isActive?: boolean
    createdAt?: boolean
    badgeReward?: boolean | QuestDefinition$badgeRewardArgs<ExtArgs>
  }, ExtArgs["result"]["questDefinition"]>

  export type QuestDefinitionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    criteria?: boolean
    xpReward?: boolean
    badgeRewardId?: boolean
    isActive?: boolean
    createdAt?: boolean
    badgeReward?: boolean | QuestDefinition$badgeRewardArgs<ExtArgs>
  }, ExtArgs["result"]["questDefinition"]>

  export type QuestDefinitionSelectScalar = {
    id?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    criteria?: boolean
    xpReward?: boolean
    badgeRewardId?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type QuestDefinitionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "title" | "description" | "criteria" | "xpReward" | "badgeRewardId" | "isActive" | "createdAt", ExtArgs["result"]["questDefinition"]>
  export type QuestDefinitionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    badgeReward?: boolean | QuestDefinition$badgeRewardArgs<ExtArgs>
    userQuests?: boolean | QuestDefinition$userQuestsArgs<ExtArgs>
    aiOutputs?: boolean | QuestDefinition$aiOutputsArgs<ExtArgs>
    _count?: boolean | QuestDefinitionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestDefinitionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    badgeReward?: boolean | QuestDefinition$badgeRewardArgs<ExtArgs>
  }
  export type QuestDefinitionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    badgeReward?: boolean | QuestDefinition$badgeRewardArgs<ExtArgs>
  }

  export type $QuestDefinitionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuestDefinition"
    objects: {
      badgeReward: Prisma.$BadgeDefinitionPayload<ExtArgs> | null
      userQuests: Prisma.$UserQuestProgressPayload<ExtArgs>[]
      aiOutputs: Prisma.$AIOutputPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: $Enums.QuestType
      title: string
      description: string
      criteria: Prisma.JsonValue
      xpReward: number
      badgeRewardId: number | null
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["questDefinition"]>
    composites: {}
  }

  type QuestDefinitionGetPayload<S extends boolean | null | undefined | QuestDefinitionDefaultArgs> = $Result.GetResult<Prisma.$QuestDefinitionPayload, S>

  type QuestDefinitionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestDefinitionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestDefinitionCountAggregateInputType | true
    }

  export interface QuestDefinitionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuestDefinition'], meta: { name: 'QuestDefinition' } }
    /**
     * Find zero or one QuestDefinition that matches the filter.
     * @param {QuestDefinitionFindUniqueArgs} args - Arguments to find a QuestDefinition
     * @example
     * // Get one QuestDefinition
     * const questDefinition = await prisma.questDefinition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestDefinitionFindUniqueArgs>(args: SelectSubset<T, QuestDefinitionFindUniqueArgs<ExtArgs>>): Prisma__QuestDefinitionClient<$Result.GetResult<Prisma.$QuestDefinitionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuestDefinition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestDefinitionFindUniqueOrThrowArgs} args - Arguments to find a QuestDefinition
     * @example
     * // Get one QuestDefinition
     * const questDefinition = await prisma.questDefinition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestDefinitionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestDefinitionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestDefinitionClient<$Result.GetResult<Prisma.$QuestDefinitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestDefinition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestDefinitionFindFirstArgs} args - Arguments to find a QuestDefinition
     * @example
     * // Get one QuestDefinition
     * const questDefinition = await prisma.questDefinition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestDefinitionFindFirstArgs>(args?: SelectSubset<T, QuestDefinitionFindFirstArgs<ExtArgs>>): Prisma__QuestDefinitionClient<$Result.GetResult<Prisma.$QuestDefinitionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestDefinition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestDefinitionFindFirstOrThrowArgs} args - Arguments to find a QuestDefinition
     * @example
     * // Get one QuestDefinition
     * const questDefinition = await prisma.questDefinition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestDefinitionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestDefinitionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestDefinitionClient<$Result.GetResult<Prisma.$QuestDefinitionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuestDefinitions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestDefinitionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuestDefinitions
     * const questDefinitions = await prisma.questDefinition.findMany()
     * 
     * // Get first 10 QuestDefinitions
     * const questDefinitions = await prisma.questDefinition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questDefinitionWithIdOnly = await prisma.questDefinition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestDefinitionFindManyArgs>(args?: SelectSubset<T, QuestDefinitionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestDefinitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuestDefinition.
     * @param {QuestDefinitionCreateArgs} args - Arguments to create a QuestDefinition.
     * @example
     * // Create one QuestDefinition
     * const QuestDefinition = await prisma.questDefinition.create({
     *   data: {
     *     // ... data to create a QuestDefinition
     *   }
     * })
     * 
     */
    create<T extends QuestDefinitionCreateArgs>(args: SelectSubset<T, QuestDefinitionCreateArgs<ExtArgs>>): Prisma__QuestDefinitionClient<$Result.GetResult<Prisma.$QuestDefinitionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuestDefinitions.
     * @param {QuestDefinitionCreateManyArgs} args - Arguments to create many QuestDefinitions.
     * @example
     * // Create many QuestDefinitions
     * const questDefinition = await prisma.questDefinition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestDefinitionCreateManyArgs>(args?: SelectSubset<T, QuestDefinitionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuestDefinitions and returns the data saved in the database.
     * @param {QuestDefinitionCreateManyAndReturnArgs} args - Arguments to create many QuestDefinitions.
     * @example
     * // Create many QuestDefinitions
     * const questDefinition = await prisma.questDefinition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuestDefinitions and only return the `id`
     * const questDefinitionWithIdOnly = await prisma.questDefinition.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestDefinitionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestDefinitionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestDefinitionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuestDefinition.
     * @param {QuestDefinitionDeleteArgs} args - Arguments to delete one QuestDefinition.
     * @example
     * // Delete one QuestDefinition
     * const QuestDefinition = await prisma.questDefinition.delete({
     *   where: {
     *     // ... filter to delete one QuestDefinition
     *   }
     * })
     * 
     */
    delete<T extends QuestDefinitionDeleteArgs>(args: SelectSubset<T, QuestDefinitionDeleteArgs<ExtArgs>>): Prisma__QuestDefinitionClient<$Result.GetResult<Prisma.$QuestDefinitionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuestDefinition.
     * @param {QuestDefinitionUpdateArgs} args - Arguments to update one QuestDefinition.
     * @example
     * // Update one QuestDefinition
     * const questDefinition = await prisma.questDefinition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestDefinitionUpdateArgs>(args: SelectSubset<T, QuestDefinitionUpdateArgs<ExtArgs>>): Prisma__QuestDefinitionClient<$Result.GetResult<Prisma.$QuestDefinitionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuestDefinitions.
     * @param {QuestDefinitionDeleteManyArgs} args - Arguments to filter QuestDefinitions to delete.
     * @example
     * // Delete a few QuestDefinitions
     * const { count } = await prisma.questDefinition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestDefinitionDeleteManyArgs>(args?: SelectSubset<T, QuestDefinitionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestDefinitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestDefinitionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuestDefinitions
     * const questDefinition = await prisma.questDefinition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestDefinitionUpdateManyArgs>(args: SelectSubset<T, QuestDefinitionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestDefinitions and returns the data updated in the database.
     * @param {QuestDefinitionUpdateManyAndReturnArgs} args - Arguments to update many QuestDefinitions.
     * @example
     * // Update many QuestDefinitions
     * const questDefinition = await prisma.questDefinition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuestDefinitions and only return the `id`
     * const questDefinitionWithIdOnly = await prisma.questDefinition.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuestDefinitionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestDefinitionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestDefinitionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuestDefinition.
     * @param {QuestDefinitionUpsertArgs} args - Arguments to update or create a QuestDefinition.
     * @example
     * // Update or create a QuestDefinition
     * const questDefinition = await prisma.questDefinition.upsert({
     *   create: {
     *     // ... data to create a QuestDefinition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuestDefinition we want to update
     *   }
     * })
     */
    upsert<T extends QuestDefinitionUpsertArgs>(args: SelectSubset<T, QuestDefinitionUpsertArgs<ExtArgs>>): Prisma__QuestDefinitionClient<$Result.GetResult<Prisma.$QuestDefinitionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuestDefinitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestDefinitionCountArgs} args - Arguments to filter QuestDefinitions to count.
     * @example
     * // Count the number of QuestDefinitions
     * const count = await prisma.questDefinition.count({
     *   where: {
     *     // ... the filter for the QuestDefinitions we want to count
     *   }
     * })
    **/
    count<T extends QuestDefinitionCountArgs>(
      args?: Subset<T, QuestDefinitionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestDefinitionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuestDefinition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestDefinitionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestDefinitionAggregateArgs>(args: Subset<T, QuestDefinitionAggregateArgs>): Prisma.PrismaPromise<GetQuestDefinitionAggregateType<T>>

    /**
     * Group by QuestDefinition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestDefinitionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestDefinitionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestDefinitionGroupByArgs['orderBy'] }
        : { orderBy?: QuestDefinitionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestDefinitionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestDefinitionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuestDefinition model
   */
  readonly fields: QuestDefinitionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuestDefinition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestDefinitionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    badgeReward<T extends QuestDefinition$badgeRewardArgs<ExtArgs> = {}>(args?: Subset<T, QuestDefinition$badgeRewardArgs<ExtArgs>>): Prisma__BadgeDefinitionClient<$Result.GetResult<Prisma.$BadgeDefinitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    userQuests<T extends QuestDefinition$userQuestsArgs<ExtArgs> = {}>(args?: Subset<T, QuestDefinition$userQuestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuestProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    aiOutputs<T extends QuestDefinition$aiOutputsArgs<ExtArgs> = {}>(args?: Subset<T, QuestDefinition$aiOutputsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIOutputPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuestDefinition model
   */
  interface QuestDefinitionFieldRefs {
    readonly id: FieldRef<"QuestDefinition", 'Int'>
    readonly type: FieldRef<"QuestDefinition", 'QuestType'>
    readonly title: FieldRef<"QuestDefinition", 'String'>
    readonly description: FieldRef<"QuestDefinition", 'String'>
    readonly criteria: FieldRef<"QuestDefinition", 'Json'>
    readonly xpReward: FieldRef<"QuestDefinition", 'Int'>
    readonly badgeRewardId: FieldRef<"QuestDefinition", 'Int'>
    readonly isActive: FieldRef<"QuestDefinition", 'Boolean'>
    readonly createdAt: FieldRef<"QuestDefinition", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuestDefinition findUnique
   */
  export type QuestDefinitionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestDefinition
     */
    select?: QuestDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestDefinition
     */
    omit?: QuestDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestDefinitionInclude<ExtArgs> | null
    /**
     * Filter, which QuestDefinition to fetch.
     */
    where: QuestDefinitionWhereUniqueInput
  }

  /**
   * QuestDefinition findUniqueOrThrow
   */
  export type QuestDefinitionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestDefinition
     */
    select?: QuestDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestDefinition
     */
    omit?: QuestDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestDefinitionInclude<ExtArgs> | null
    /**
     * Filter, which QuestDefinition to fetch.
     */
    where: QuestDefinitionWhereUniqueInput
  }

  /**
   * QuestDefinition findFirst
   */
  export type QuestDefinitionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestDefinition
     */
    select?: QuestDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestDefinition
     */
    omit?: QuestDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestDefinitionInclude<ExtArgs> | null
    /**
     * Filter, which QuestDefinition to fetch.
     */
    where?: QuestDefinitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestDefinitions to fetch.
     */
    orderBy?: QuestDefinitionOrderByWithRelationInput | QuestDefinitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestDefinitions.
     */
    cursor?: QuestDefinitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestDefinitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestDefinitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestDefinitions.
     */
    distinct?: QuestDefinitionScalarFieldEnum | QuestDefinitionScalarFieldEnum[]
  }

  /**
   * QuestDefinition findFirstOrThrow
   */
  export type QuestDefinitionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestDefinition
     */
    select?: QuestDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestDefinition
     */
    omit?: QuestDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestDefinitionInclude<ExtArgs> | null
    /**
     * Filter, which QuestDefinition to fetch.
     */
    where?: QuestDefinitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestDefinitions to fetch.
     */
    orderBy?: QuestDefinitionOrderByWithRelationInput | QuestDefinitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestDefinitions.
     */
    cursor?: QuestDefinitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestDefinitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestDefinitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestDefinitions.
     */
    distinct?: QuestDefinitionScalarFieldEnum | QuestDefinitionScalarFieldEnum[]
  }

  /**
   * QuestDefinition findMany
   */
  export type QuestDefinitionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestDefinition
     */
    select?: QuestDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestDefinition
     */
    omit?: QuestDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestDefinitionInclude<ExtArgs> | null
    /**
     * Filter, which QuestDefinitions to fetch.
     */
    where?: QuestDefinitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestDefinitions to fetch.
     */
    orderBy?: QuestDefinitionOrderByWithRelationInput | QuestDefinitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuestDefinitions.
     */
    cursor?: QuestDefinitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestDefinitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestDefinitions.
     */
    skip?: number
    distinct?: QuestDefinitionScalarFieldEnum | QuestDefinitionScalarFieldEnum[]
  }

  /**
   * QuestDefinition create
   */
  export type QuestDefinitionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestDefinition
     */
    select?: QuestDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestDefinition
     */
    omit?: QuestDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestDefinitionInclude<ExtArgs> | null
    /**
     * The data needed to create a QuestDefinition.
     */
    data: XOR<QuestDefinitionCreateInput, QuestDefinitionUncheckedCreateInput>
  }

  /**
   * QuestDefinition createMany
   */
  export type QuestDefinitionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuestDefinitions.
     */
    data: QuestDefinitionCreateManyInput | QuestDefinitionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuestDefinition createManyAndReturn
   */
  export type QuestDefinitionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestDefinition
     */
    select?: QuestDefinitionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestDefinition
     */
    omit?: QuestDefinitionOmit<ExtArgs> | null
    /**
     * The data used to create many QuestDefinitions.
     */
    data: QuestDefinitionCreateManyInput | QuestDefinitionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestDefinitionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestDefinition update
   */
  export type QuestDefinitionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestDefinition
     */
    select?: QuestDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestDefinition
     */
    omit?: QuestDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestDefinitionInclude<ExtArgs> | null
    /**
     * The data needed to update a QuestDefinition.
     */
    data: XOR<QuestDefinitionUpdateInput, QuestDefinitionUncheckedUpdateInput>
    /**
     * Choose, which QuestDefinition to update.
     */
    where: QuestDefinitionWhereUniqueInput
  }

  /**
   * QuestDefinition updateMany
   */
  export type QuestDefinitionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuestDefinitions.
     */
    data: XOR<QuestDefinitionUpdateManyMutationInput, QuestDefinitionUncheckedUpdateManyInput>
    /**
     * Filter which QuestDefinitions to update
     */
    where?: QuestDefinitionWhereInput
    /**
     * Limit how many QuestDefinitions to update.
     */
    limit?: number
  }

  /**
   * QuestDefinition updateManyAndReturn
   */
  export type QuestDefinitionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestDefinition
     */
    select?: QuestDefinitionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestDefinition
     */
    omit?: QuestDefinitionOmit<ExtArgs> | null
    /**
     * The data used to update QuestDefinitions.
     */
    data: XOR<QuestDefinitionUpdateManyMutationInput, QuestDefinitionUncheckedUpdateManyInput>
    /**
     * Filter which QuestDefinitions to update
     */
    where?: QuestDefinitionWhereInput
    /**
     * Limit how many QuestDefinitions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestDefinitionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestDefinition upsert
   */
  export type QuestDefinitionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestDefinition
     */
    select?: QuestDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestDefinition
     */
    omit?: QuestDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestDefinitionInclude<ExtArgs> | null
    /**
     * The filter to search for the QuestDefinition to update in case it exists.
     */
    where: QuestDefinitionWhereUniqueInput
    /**
     * In case the QuestDefinition found by the `where` argument doesn't exist, create a new QuestDefinition with this data.
     */
    create: XOR<QuestDefinitionCreateInput, QuestDefinitionUncheckedCreateInput>
    /**
     * In case the QuestDefinition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestDefinitionUpdateInput, QuestDefinitionUncheckedUpdateInput>
  }

  /**
   * QuestDefinition delete
   */
  export type QuestDefinitionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestDefinition
     */
    select?: QuestDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestDefinition
     */
    omit?: QuestDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestDefinitionInclude<ExtArgs> | null
    /**
     * Filter which QuestDefinition to delete.
     */
    where: QuestDefinitionWhereUniqueInput
  }

  /**
   * QuestDefinition deleteMany
   */
  export type QuestDefinitionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestDefinitions to delete
     */
    where?: QuestDefinitionWhereInput
    /**
     * Limit how many QuestDefinitions to delete.
     */
    limit?: number
  }

  /**
   * QuestDefinition.badgeReward
   */
  export type QuestDefinition$badgeRewardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeDefinition
     */
    select?: BadgeDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgeDefinition
     */
    omit?: BadgeDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeDefinitionInclude<ExtArgs> | null
    where?: BadgeDefinitionWhereInput
  }

  /**
   * QuestDefinition.userQuests
   */
  export type QuestDefinition$userQuestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestProgress
     */
    select?: UserQuestProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestProgress
     */
    omit?: UserQuestProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestProgressInclude<ExtArgs> | null
    where?: UserQuestProgressWhereInput
    orderBy?: UserQuestProgressOrderByWithRelationInput | UserQuestProgressOrderByWithRelationInput[]
    cursor?: UserQuestProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserQuestProgressScalarFieldEnum | UserQuestProgressScalarFieldEnum[]
  }

  /**
   * QuestDefinition.aiOutputs
   */
  export type QuestDefinition$aiOutputsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIOutput
     */
    select?: AIOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIOutput
     */
    omit?: AIOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIOutputInclude<ExtArgs> | null
    where?: AIOutputWhereInput
    orderBy?: AIOutputOrderByWithRelationInput | AIOutputOrderByWithRelationInput[]
    cursor?: AIOutputWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AIOutputScalarFieldEnum | AIOutputScalarFieldEnum[]
  }

  /**
   * QuestDefinition without action
   */
  export type QuestDefinitionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestDefinition
     */
    select?: QuestDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestDefinition
     */
    omit?: QuestDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestDefinitionInclude<ExtArgs> | null
  }


  /**
   * Model UserQuestProgress
   */

  export type AggregateUserQuestProgress = {
    _count: UserQuestProgressCountAggregateOutputType | null
    _avg: UserQuestProgressAvgAggregateOutputType | null
    _sum: UserQuestProgressSumAggregateOutputType | null
    _min: UserQuestProgressMinAggregateOutputType | null
    _max: UserQuestProgressMaxAggregateOutputType | null
  }

  export type UserQuestProgressAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    questId: number | null
  }

  export type UserQuestProgressSumAggregateOutputType = {
    id: number | null
    userId: number | null
    questId: number | null
  }

  export type UserQuestProgressMinAggregateOutputType = {
    id: number | null
    userId: number | null
    questId: number | null
    status: $Enums.QuestStatus | null
    startDate: Date | null
    completionDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserQuestProgressMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    questId: number | null
    status: $Enums.QuestStatus | null
    startDate: Date | null
    completionDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserQuestProgressCountAggregateOutputType = {
    id: number
    userId: number
    questId: number
    status: number
    progressData: number
    startDate: number
    completionDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserQuestProgressAvgAggregateInputType = {
    id?: true
    userId?: true
    questId?: true
  }

  export type UserQuestProgressSumAggregateInputType = {
    id?: true
    userId?: true
    questId?: true
  }

  export type UserQuestProgressMinAggregateInputType = {
    id?: true
    userId?: true
    questId?: true
    status?: true
    startDate?: true
    completionDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserQuestProgressMaxAggregateInputType = {
    id?: true
    userId?: true
    questId?: true
    status?: true
    startDate?: true
    completionDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserQuestProgressCountAggregateInputType = {
    id?: true
    userId?: true
    questId?: true
    status?: true
    progressData?: true
    startDate?: true
    completionDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserQuestProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserQuestProgress to aggregate.
     */
    where?: UserQuestProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuestProgresses to fetch.
     */
    orderBy?: UserQuestProgressOrderByWithRelationInput | UserQuestProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserQuestProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuestProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuestProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserQuestProgresses
    **/
    _count?: true | UserQuestProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserQuestProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserQuestProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserQuestProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserQuestProgressMaxAggregateInputType
  }

  export type GetUserQuestProgressAggregateType<T extends UserQuestProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateUserQuestProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserQuestProgress[P]>
      : GetScalarType<T[P], AggregateUserQuestProgress[P]>
  }




  export type UserQuestProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserQuestProgressWhereInput
    orderBy?: UserQuestProgressOrderByWithAggregationInput | UserQuestProgressOrderByWithAggregationInput[]
    by: UserQuestProgressScalarFieldEnum[] | UserQuestProgressScalarFieldEnum
    having?: UserQuestProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserQuestProgressCountAggregateInputType | true
    _avg?: UserQuestProgressAvgAggregateInputType
    _sum?: UserQuestProgressSumAggregateInputType
    _min?: UserQuestProgressMinAggregateInputType
    _max?: UserQuestProgressMaxAggregateInputType
  }

  export type UserQuestProgressGroupByOutputType = {
    id: number
    userId: number
    questId: number
    status: $Enums.QuestStatus
    progressData: JsonValue | null
    startDate: Date
    completionDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserQuestProgressCountAggregateOutputType | null
    _avg: UserQuestProgressAvgAggregateOutputType | null
    _sum: UserQuestProgressSumAggregateOutputType | null
    _min: UserQuestProgressMinAggregateOutputType | null
    _max: UserQuestProgressMaxAggregateOutputType | null
  }

  type GetUserQuestProgressGroupByPayload<T extends UserQuestProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserQuestProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserQuestProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserQuestProgressGroupByOutputType[P]>
            : GetScalarType<T[P], UserQuestProgressGroupByOutputType[P]>
        }
      >
    >


  export type UserQuestProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    questId?: boolean
    status?: boolean
    progressData?: boolean
    startDate?: boolean
    completionDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    quest?: boolean | QuestDefinitionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userQuestProgress"]>

  export type UserQuestProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    questId?: boolean
    status?: boolean
    progressData?: boolean
    startDate?: boolean
    completionDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    quest?: boolean | QuestDefinitionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userQuestProgress"]>

  export type UserQuestProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    questId?: boolean
    status?: boolean
    progressData?: boolean
    startDate?: boolean
    completionDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    quest?: boolean | QuestDefinitionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userQuestProgress"]>

  export type UserQuestProgressSelectScalar = {
    id?: boolean
    userId?: boolean
    questId?: boolean
    status?: boolean
    progressData?: boolean
    startDate?: boolean
    completionDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserQuestProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "questId" | "status" | "progressData" | "startDate" | "completionDate" | "createdAt" | "updatedAt", ExtArgs["result"]["userQuestProgress"]>
  export type UserQuestProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    quest?: boolean | QuestDefinitionDefaultArgs<ExtArgs>
  }
  export type UserQuestProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    quest?: boolean | QuestDefinitionDefaultArgs<ExtArgs>
  }
  export type UserQuestProgressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    quest?: boolean | QuestDefinitionDefaultArgs<ExtArgs>
  }

  export type $UserQuestProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserQuestProgress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      quest: Prisma.$QuestDefinitionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      questId: number
      status: $Enums.QuestStatus
      progressData: Prisma.JsonValue | null
      startDate: Date
      completionDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userQuestProgress"]>
    composites: {}
  }

  type UserQuestProgressGetPayload<S extends boolean | null | undefined | UserQuestProgressDefaultArgs> = $Result.GetResult<Prisma.$UserQuestProgressPayload, S>

  type UserQuestProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserQuestProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserQuestProgressCountAggregateInputType | true
    }

  export interface UserQuestProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserQuestProgress'], meta: { name: 'UserQuestProgress' } }
    /**
     * Find zero or one UserQuestProgress that matches the filter.
     * @param {UserQuestProgressFindUniqueArgs} args - Arguments to find a UserQuestProgress
     * @example
     * // Get one UserQuestProgress
     * const userQuestProgress = await prisma.userQuestProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserQuestProgressFindUniqueArgs>(args: SelectSubset<T, UserQuestProgressFindUniqueArgs<ExtArgs>>): Prisma__UserQuestProgressClient<$Result.GetResult<Prisma.$UserQuestProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserQuestProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserQuestProgressFindUniqueOrThrowArgs} args - Arguments to find a UserQuestProgress
     * @example
     * // Get one UserQuestProgress
     * const userQuestProgress = await prisma.userQuestProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserQuestProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, UserQuestProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserQuestProgressClient<$Result.GetResult<Prisma.$UserQuestProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserQuestProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestProgressFindFirstArgs} args - Arguments to find a UserQuestProgress
     * @example
     * // Get one UserQuestProgress
     * const userQuestProgress = await prisma.userQuestProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserQuestProgressFindFirstArgs>(args?: SelectSubset<T, UserQuestProgressFindFirstArgs<ExtArgs>>): Prisma__UserQuestProgressClient<$Result.GetResult<Prisma.$UserQuestProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserQuestProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestProgressFindFirstOrThrowArgs} args - Arguments to find a UserQuestProgress
     * @example
     * // Get one UserQuestProgress
     * const userQuestProgress = await prisma.userQuestProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserQuestProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, UserQuestProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserQuestProgressClient<$Result.GetResult<Prisma.$UserQuestProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserQuestProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserQuestProgresses
     * const userQuestProgresses = await prisma.userQuestProgress.findMany()
     * 
     * // Get first 10 UserQuestProgresses
     * const userQuestProgresses = await prisma.userQuestProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userQuestProgressWithIdOnly = await prisma.userQuestProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserQuestProgressFindManyArgs>(args?: SelectSubset<T, UserQuestProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuestProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserQuestProgress.
     * @param {UserQuestProgressCreateArgs} args - Arguments to create a UserQuestProgress.
     * @example
     * // Create one UserQuestProgress
     * const UserQuestProgress = await prisma.userQuestProgress.create({
     *   data: {
     *     // ... data to create a UserQuestProgress
     *   }
     * })
     * 
     */
    create<T extends UserQuestProgressCreateArgs>(args: SelectSubset<T, UserQuestProgressCreateArgs<ExtArgs>>): Prisma__UserQuestProgressClient<$Result.GetResult<Prisma.$UserQuestProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserQuestProgresses.
     * @param {UserQuestProgressCreateManyArgs} args - Arguments to create many UserQuestProgresses.
     * @example
     * // Create many UserQuestProgresses
     * const userQuestProgress = await prisma.userQuestProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserQuestProgressCreateManyArgs>(args?: SelectSubset<T, UserQuestProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserQuestProgresses and returns the data saved in the database.
     * @param {UserQuestProgressCreateManyAndReturnArgs} args - Arguments to create many UserQuestProgresses.
     * @example
     * // Create many UserQuestProgresses
     * const userQuestProgress = await prisma.userQuestProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserQuestProgresses and only return the `id`
     * const userQuestProgressWithIdOnly = await prisma.userQuestProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserQuestProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, UserQuestProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuestProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserQuestProgress.
     * @param {UserQuestProgressDeleteArgs} args - Arguments to delete one UserQuestProgress.
     * @example
     * // Delete one UserQuestProgress
     * const UserQuestProgress = await prisma.userQuestProgress.delete({
     *   where: {
     *     // ... filter to delete one UserQuestProgress
     *   }
     * })
     * 
     */
    delete<T extends UserQuestProgressDeleteArgs>(args: SelectSubset<T, UserQuestProgressDeleteArgs<ExtArgs>>): Prisma__UserQuestProgressClient<$Result.GetResult<Prisma.$UserQuestProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserQuestProgress.
     * @param {UserQuestProgressUpdateArgs} args - Arguments to update one UserQuestProgress.
     * @example
     * // Update one UserQuestProgress
     * const userQuestProgress = await prisma.userQuestProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserQuestProgressUpdateArgs>(args: SelectSubset<T, UserQuestProgressUpdateArgs<ExtArgs>>): Prisma__UserQuestProgressClient<$Result.GetResult<Prisma.$UserQuestProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserQuestProgresses.
     * @param {UserQuestProgressDeleteManyArgs} args - Arguments to filter UserQuestProgresses to delete.
     * @example
     * // Delete a few UserQuestProgresses
     * const { count } = await prisma.userQuestProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserQuestProgressDeleteManyArgs>(args?: SelectSubset<T, UserQuestProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserQuestProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserQuestProgresses
     * const userQuestProgress = await prisma.userQuestProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserQuestProgressUpdateManyArgs>(args: SelectSubset<T, UserQuestProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserQuestProgresses and returns the data updated in the database.
     * @param {UserQuestProgressUpdateManyAndReturnArgs} args - Arguments to update many UserQuestProgresses.
     * @example
     * // Update many UserQuestProgresses
     * const userQuestProgress = await prisma.userQuestProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserQuestProgresses and only return the `id`
     * const userQuestProgressWithIdOnly = await prisma.userQuestProgress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserQuestProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, UserQuestProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuestProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserQuestProgress.
     * @param {UserQuestProgressUpsertArgs} args - Arguments to update or create a UserQuestProgress.
     * @example
     * // Update or create a UserQuestProgress
     * const userQuestProgress = await prisma.userQuestProgress.upsert({
     *   create: {
     *     // ... data to create a UserQuestProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserQuestProgress we want to update
     *   }
     * })
     */
    upsert<T extends UserQuestProgressUpsertArgs>(args: SelectSubset<T, UserQuestProgressUpsertArgs<ExtArgs>>): Prisma__UserQuestProgressClient<$Result.GetResult<Prisma.$UserQuestProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserQuestProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestProgressCountArgs} args - Arguments to filter UserQuestProgresses to count.
     * @example
     * // Count the number of UserQuestProgresses
     * const count = await prisma.userQuestProgress.count({
     *   where: {
     *     // ... the filter for the UserQuestProgresses we want to count
     *   }
     * })
    **/
    count<T extends UserQuestProgressCountArgs>(
      args?: Subset<T, UserQuestProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserQuestProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserQuestProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserQuestProgressAggregateArgs>(args: Subset<T, UserQuestProgressAggregateArgs>): Prisma.PrismaPromise<GetUserQuestProgressAggregateType<T>>

    /**
     * Group by UserQuestProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestProgressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserQuestProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserQuestProgressGroupByArgs['orderBy'] }
        : { orderBy?: UserQuestProgressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserQuestProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserQuestProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserQuestProgress model
   */
  readonly fields: UserQuestProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserQuestProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserQuestProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quest<T extends QuestDefinitionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestDefinitionDefaultArgs<ExtArgs>>): Prisma__QuestDefinitionClient<$Result.GetResult<Prisma.$QuestDefinitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserQuestProgress model
   */
  interface UserQuestProgressFieldRefs {
    readonly id: FieldRef<"UserQuestProgress", 'Int'>
    readonly userId: FieldRef<"UserQuestProgress", 'Int'>
    readonly questId: FieldRef<"UserQuestProgress", 'Int'>
    readonly status: FieldRef<"UserQuestProgress", 'QuestStatus'>
    readonly progressData: FieldRef<"UserQuestProgress", 'Json'>
    readonly startDate: FieldRef<"UserQuestProgress", 'DateTime'>
    readonly completionDate: FieldRef<"UserQuestProgress", 'DateTime'>
    readonly createdAt: FieldRef<"UserQuestProgress", 'DateTime'>
    readonly updatedAt: FieldRef<"UserQuestProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserQuestProgress findUnique
   */
  export type UserQuestProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestProgress
     */
    select?: UserQuestProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestProgress
     */
    omit?: UserQuestProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserQuestProgress to fetch.
     */
    where: UserQuestProgressWhereUniqueInput
  }

  /**
   * UserQuestProgress findUniqueOrThrow
   */
  export type UserQuestProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestProgress
     */
    select?: UserQuestProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestProgress
     */
    omit?: UserQuestProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserQuestProgress to fetch.
     */
    where: UserQuestProgressWhereUniqueInput
  }

  /**
   * UserQuestProgress findFirst
   */
  export type UserQuestProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestProgress
     */
    select?: UserQuestProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestProgress
     */
    omit?: UserQuestProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserQuestProgress to fetch.
     */
    where?: UserQuestProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuestProgresses to fetch.
     */
    orderBy?: UserQuestProgressOrderByWithRelationInput | UserQuestProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserQuestProgresses.
     */
    cursor?: UserQuestProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuestProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuestProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserQuestProgresses.
     */
    distinct?: UserQuestProgressScalarFieldEnum | UserQuestProgressScalarFieldEnum[]
  }

  /**
   * UserQuestProgress findFirstOrThrow
   */
  export type UserQuestProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestProgress
     */
    select?: UserQuestProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestProgress
     */
    omit?: UserQuestProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserQuestProgress to fetch.
     */
    where?: UserQuestProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuestProgresses to fetch.
     */
    orderBy?: UserQuestProgressOrderByWithRelationInput | UserQuestProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserQuestProgresses.
     */
    cursor?: UserQuestProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuestProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuestProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserQuestProgresses.
     */
    distinct?: UserQuestProgressScalarFieldEnum | UserQuestProgressScalarFieldEnum[]
  }

  /**
   * UserQuestProgress findMany
   */
  export type UserQuestProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestProgress
     */
    select?: UserQuestProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestProgress
     */
    omit?: UserQuestProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserQuestProgresses to fetch.
     */
    where?: UserQuestProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuestProgresses to fetch.
     */
    orderBy?: UserQuestProgressOrderByWithRelationInput | UserQuestProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserQuestProgresses.
     */
    cursor?: UserQuestProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuestProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuestProgresses.
     */
    skip?: number
    distinct?: UserQuestProgressScalarFieldEnum | UserQuestProgressScalarFieldEnum[]
  }

  /**
   * UserQuestProgress create
   */
  export type UserQuestProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestProgress
     */
    select?: UserQuestProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestProgress
     */
    omit?: UserQuestProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a UserQuestProgress.
     */
    data: XOR<UserQuestProgressCreateInput, UserQuestProgressUncheckedCreateInput>
  }

  /**
   * UserQuestProgress createMany
   */
  export type UserQuestProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserQuestProgresses.
     */
    data: UserQuestProgressCreateManyInput | UserQuestProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserQuestProgress createManyAndReturn
   */
  export type UserQuestProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestProgress
     */
    select?: UserQuestProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestProgress
     */
    omit?: UserQuestProgressOmit<ExtArgs> | null
    /**
     * The data used to create many UserQuestProgresses.
     */
    data: UserQuestProgressCreateManyInput | UserQuestProgressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserQuestProgress update
   */
  export type UserQuestProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestProgress
     */
    select?: UserQuestProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestProgress
     */
    omit?: UserQuestProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a UserQuestProgress.
     */
    data: XOR<UserQuestProgressUpdateInput, UserQuestProgressUncheckedUpdateInput>
    /**
     * Choose, which UserQuestProgress to update.
     */
    where: UserQuestProgressWhereUniqueInput
  }

  /**
   * UserQuestProgress updateMany
   */
  export type UserQuestProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserQuestProgresses.
     */
    data: XOR<UserQuestProgressUpdateManyMutationInput, UserQuestProgressUncheckedUpdateManyInput>
    /**
     * Filter which UserQuestProgresses to update
     */
    where?: UserQuestProgressWhereInput
    /**
     * Limit how many UserQuestProgresses to update.
     */
    limit?: number
  }

  /**
   * UserQuestProgress updateManyAndReturn
   */
  export type UserQuestProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestProgress
     */
    select?: UserQuestProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestProgress
     */
    omit?: UserQuestProgressOmit<ExtArgs> | null
    /**
     * The data used to update UserQuestProgresses.
     */
    data: XOR<UserQuestProgressUpdateManyMutationInput, UserQuestProgressUncheckedUpdateManyInput>
    /**
     * Filter which UserQuestProgresses to update
     */
    where?: UserQuestProgressWhereInput
    /**
     * Limit how many UserQuestProgresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestProgressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserQuestProgress upsert
   */
  export type UserQuestProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestProgress
     */
    select?: UserQuestProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestProgress
     */
    omit?: UserQuestProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the UserQuestProgress to update in case it exists.
     */
    where: UserQuestProgressWhereUniqueInput
    /**
     * In case the UserQuestProgress found by the `where` argument doesn't exist, create a new UserQuestProgress with this data.
     */
    create: XOR<UserQuestProgressCreateInput, UserQuestProgressUncheckedCreateInput>
    /**
     * In case the UserQuestProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserQuestProgressUpdateInput, UserQuestProgressUncheckedUpdateInput>
  }

  /**
   * UserQuestProgress delete
   */
  export type UserQuestProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestProgress
     */
    select?: UserQuestProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestProgress
     */
    omit?: UserQuestProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestProgressInclude<ExtArgs> | null
    /**
     * Filter which UserQuestProgress to delete.
     */
    where: UserQuestProgressWhereUniqueInput
  }

  /**
   * UserQuestProgress deleteMany
   */
  export type UserQuestProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserQuestProgresses to delete
     */
    where?: UserQuestProgressWhereInput
    /**
     * Limit how many UserQuestProgresses to delete.
     */
    limit?: number
  }

  /**
   * UserQuestProgress without action
   */
  export type UserQuestProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestProgress
     */
    select?: UserQuestProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestProgress
     */
    omit?: UserQuestProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestProgressInclude<ExtArgs> | null
  }


  /**
   * Model AIOutput
   */

  export type AggregateAIOutput = {
    _count: AIOutputCountAggregateOutputType | null
    _avg: AIOutputAvgAggregateOutputType | null
    _sum: AIOutputSumAggregateOutputType | null
    _min: AIOutputMinAggregateOutputType | null
    _max: AIOutputMaxAggregateOutputType | null
  }

  export type AIOutputAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    relatedQuestId: number | null
  }

  export type AIOutputSumAggregateOutputType = {
    id: number | null
    userId: number | null
    relatedQuestId: number | null
  }

  export type AIOutputMinAggregateOutputType = {
    id: number | null
    userId: number | null
    type: $Enums.AIOutputType | null
    text: string | null
    relatedQuestId: number | null
    createdAt: Date | null
    seenByUser: boolean | null
  }

  export type AIOutputMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    type: $Enums.AIOutputType | null
    text: string | null
    relatedQuestId: number | null
    createdAt: Date | null
    seenByUser: boolean | null
  }

  export type AIOutputCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    text: number
    relatedQuestId: number
    createdAt: number
    seenByUser: number
    _all: number
  }


  export type AIOutputAvgAggregateInputType = {
    id?: true
    userId?: true
    relatedQuestId?: true
  }

  export type AIOutputSumAggregateInputType = {
    id?: true
    userId?: true
    relatedQuestId?: true
  }

  export type AIOutputMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    text?: true
    relatedQuestId?: true
    createdAt?: true
    seenByUser?: true
  }

  export type AIOutputMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    text?: true
    relatedQuestId?: true
    createdAt?: true
    seenByUser?: true
  }

  export type AIOutputCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    text?: true
    relatedQuestId?: true
    createdAt?: true
    seenByUser?: true
    _all?: true
  }

  export type AIOutputAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIOutput to aggregate.
     */
    where?: AIOutputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIOutputs to fetch.
     */
    orderBy?: AIOutputOrderByWithRelationInput | AIOutputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AIOutputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIOutputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIOutputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AIOutputs
    **/
    _count?: true | AIOutputCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AIOutputAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AIOutputSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AIOutputMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AIOutputMaxAggregateInputType
  }

  export type GetAIOutputAggregateType<T extends AIOutputAggregateArgs> = {
        [P in keyof T & keyof AggregateAIOutput]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAIOutput[P]>
      : GetScalarType<T[P], AggregateAIOutput[P]>
  }




  export type AIOutputGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIOutputWhereInput
    orderBy?: AIOutputOrderByWithAggregationInput | AIOutputOrderByWithAggregationInput[]
    by: AIOutputScalarFieldEnum[] | AIOutputScalarFieldEnum
    having?: AIOutputScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AIOutputCountAggregateInputType | true
    _avg?: AIOutputAvgAggregateInputType
    _sum?: AIOutputSumAggregateInputType
    _min?: AIOutputMinAggregateInputType
    _max?: AIOutputMaxAggregateInputType
  }

  export type AIOutputGroupByOutputType = {
    id: number
    userId: number
    type: $Enums.AIOutputType
    text: string
    relatedQuestId: number | null
    createdAt: Date
    seenByUser: boolean
    _count: AIOutputCountAggregateOutputType | null
    _avg: AIOutputAvgAggregateOutputType | null
    _sum: AIOutputSumAggregateOutputType | null
    _min: AIOutputMinAggregateOutputType | null
    _max: AIOutputMaxAggregateOutputType | null
  }

  type GetAIOutputGroupByPayload<T extends AIOutputGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AIOutputGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AIOutputGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AIOutputGroupByOutputType[P]>
            : GetScalarType<T[P], AIOutputGroupByOutputType[P]>
        }
      >
    >


  export type AIOutputSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    text?: boolean
    relatedQuestId?: boolean
    createdAt?: boolean
    seenByUser?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    relatedQuest?: boolean | AIOutput$relatedQuestArgs<ExtArgs>
  }, ExtArgs["result"]["aIOutput"]>

  export type AIOutputSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    text?: boolean
    relatedQuestId?: boolean
    createdAt?: boolean
    seenByUser?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    relatedQuest?: boolean | AIOutput$relatedQuestArgs<ExtArgs>
  }, ExtArgs["result"]["aIOutput"]>

  export type AIOutputSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    text?: boolean
    relatedQuestId?: boolean
    createdAt?: boolean
    seenByUser?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    relatedQuest?: boolean | AIOutput$relatedQuestArgs<ExtArgs>
  }, ExtArgs["result"]["aIOutput"]>

  export type AIOutputSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    text?: boolean
    relatedQuestId?: boolean
    createdAt?: boolean
    seenByUser?: boolean
  }

  export type AIOutputOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "text" | "relatedQuestId" | "createdAt" | "seenByUser", ExtArgs["result"]["aIOutput"]>
  export type AIOutputInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    relatedQuest?: boolean | AIOutput$relatedQuestArgs<ExtArgs>
  }
  export type AIOutputIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    relatedQuest?: boolean | AIOutput$relatedQuestArgs<ExtArgs>
  }
  export type AIOutputIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    relatedQuest?: boolean | AIOutput$relatedQuestArgs<ExtArgs>
  }

  export type $AIOutputPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AIOutput"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      relatedQuest: Prisma.$QuestDefinitionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      type: $Enums.AIOutputType
      text: string
      relatedQuestId: number | null
      createdAt: Date
      seenByUser: boolean
    }, ExtArgs["result"]["aIOutput"]>
    composites: {}
  }

  type AIOutputGetPayload<S extends boolean | null | undefined | AIOutputDefaultArgs> = $Result.GetResult<Prisma.$AIOutputPayload, S>

  type AIOutputCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AIOutputFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AIOutputCountAggregateInputType | true
    }

  export interface AIOutputDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AIOutput'], meta: { name: 'AIOutput' } }
    /**
     * Find zero or one AIOutput that matches the filter.
     * @param {AIOutputFindUniqueArgs} args - Arguments to find a AIOutput
     * @example
     * // Get one AIOutput
     * const aIOutput = await prisma.aIOutput.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AIOutputFindUniqueArgs>(args: SelectSubset<T, AIOutputFindUniqueArgs<ExtArgs>>): Prisma__AIOutputClient<$Result.GetResult<Prisma.$AIOutputPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AIOutput that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AIOutputFindUniqueOrThrowArgs} args - Arguments to find a AIOutput
     * @example
     * // Get one AIOutput
     * const aIOutput = await prisma.aIOutput.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AIOutputFindUniqueOrThrowArgs>(args: SelectSubset<T, AIOutputFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AIOutputClient<$Result.GetResult<Prisma.$AIOutputPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIOutput that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIOutputFindFirstArgs} args - Arguments to find a AIOutput
     * @example
     * // Get one AIOutput
     * const aIOutput = await prisma.aIOutput.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AIOutputFindFirstArgs>(args?: SelectSubset<T, AIOutputFindFirstArgs<ExtArgs>>): Prisma__AIOutputClient<$Result.GetResult<Prisma.$AIOutputPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIOutput that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIOutputFindFirstOrThrowArgs} args - Arguments to find a AIOutput
     * @example
     * // Get one AIOutput
     * const aIOutput = await prisma.aIOutput.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AIOutputFindFirstOrThrowArgs>(args?: SelectSubset<T, AIOutputFindFirstOrThrowArgs<ExtArgs>>): Prisma__AIOutputClient<$Result.GetResult<Prisma.$AIOutputPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AIOutputs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIOutputFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AIOutputs
     * const aIOutputs = await prisma.aIOutput.findMany()
     * 
     * // Get first 10 AIOutputs
     * const aIOutputs = await prisma.aIOutput.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aIOutputWithIdOnly = await prisma.aIOutput.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AIOutputFindManyArgs>(args?: SelectSubset<T, AIOutputFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIOutputPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AIOutput.
     * @param {AIOutputCreateArgs} args - Arguments to create a AIOutput.
     * @example
     * // Create one AIOutput
     * const AIOutput = await prisma.aIOutput.create({
     *   data: {
     *     // ... data to create a AIOutput
     *   }
     * })
     * 
     */
    create<T extends AIOutputCreateArgs>(args: SelectSubset<T, AIOutputCreateArgs<ExtArgs>>): Prisma__AIOutputClient<$Result.GetResult<Prisma.$AIOutputPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AIOutputs.
     * @param {AIOutputCreateManyArgs} args - Arguments to create many AIOutputs.
     * @example
     * // Create many AIOutputs
     * const aIOutput = await prisma.aIOutput.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AIOutputCreateManyArgs>(args?: SelectSubset<T, AIOutputCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AIOutputs and returns the data saved in the database.
     * @param {AIOutputCreateManyAndReturnArgs} args - Arguments to create many AIOutputs.
     * @example
     * // Create many AIOutputs
     * const aIOutput = await prisma.aIOutput.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AIOutputs and only return the `id`
     * const aIOutputWithIdOnly = await prisma.aIOutput.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AIOutputCreateManyAndReturnArgs>(args?: SelectSubset<T, AIOutputCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIOutputPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AIOutput.
     * @param {AIOutputDeleteArgs} args - Arguments to delete one AIOutput.
     * @example
     * // Delete one AIOutput
     * const AIOutput = await prisma.aIOutput.delete({
     *   where: {
     *     // ... filter to delete one AIOutput
     *   }
     * })
     * 
     */
    delete<T extends AIOutputDeleteArgs>(args: SelectSubset<T, AIOutputDeleteArgs<ExtArgs>>): Prisma__AIOutputClient<$Result.GetResult<Prisma.$AIOutputPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AIOutput.
     * @param {AIOutputUpdateArgs} args - Arguments to update one AIOutput.
     * @example
     * // Update one AIOutput
     * const aIOutput = await prisma.aIOutput.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AIOutputUpdateArgs>(args: SelectSubset<T, AIOutputUpdateArgs<ExtArgs>>): Prisma__AIOutputClient<$Result.GetResult<Prisma.$AIOutputPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AIOutputs.
     * @param {AIOutputDeleteManyArgs} args - Arguments to filter AIOutputs to delete.
     * @example
     * // Delete a few AIOutputs
     * const { count } = await prisma.aIOutput.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AIOutputDeleteManyArgs>(args?: SelectSubset<T, AIOutputDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIOutputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIOutputUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AIOutputs
     * const aIOutput = await prisma.aIOutput.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AIOutputUpdateManyArgs>(args: SelectSubset<T, AIOutputUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIOutputs and returns the data updated in the database.
     * @param {AIOutputUpdateManyAndReturnArgs} args - Arguments to update many AIOutputs.
     * @example
     * // Update many AIOutputs
     * const aIOutput = await prisma.aIOutput.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AIOutputs and only return the `id`
     * const aIOutputWithIdOnly = await prisma.aIOutput.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AIOutputUpdateManyAndReturnArgs>(args: SelectSubset<T, AIOutputUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIOutputPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AIOutput.
     * @param {AIOutputUpsertArgs} args - Arguments to update or create a AIOutput.
     * @example
     * // Update or create a AIOutput
     * const aIOutput = await prisma.aIOutput.upsert({
     *   create: {
     *     // ... data to create a AIOutput
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AIOutput we want to update
     *   }
     * })
     */
    upsert<T extends AIOutputUpsertArgs>(args: SelectSubset<T, AIOutputUpsertArgs<ExtArgs>>): Prisma__AIOutputClient<$Result.GetResult<Prisma.$AIOutputPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AIOutputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIOutputCountArgs} args - Arguments to filter AIOutputs to count.
     * @example
     * // Count the number of AIOutputs
     * const count = await prisma.aIOutput.count({
     *   where: {
     *     // ... the filter for the AIOutputs we want to count
     *   }
     * })
    **/
    count<T extends AIOutputCountArgs>(
      args?: Subset<T, AIOutputCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AIOutputCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AIOutput.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIOutputAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AIOutputAggregateArgs>(args: Subset<T, AIOutputAggregateArgs>): Prisma.PrismaPromise<GetAIOutputAggregateType<T>>

    /**
     * Group by AIOutput.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIOutputGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AIOutputGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AIOutputGroupByArgs['orderBy'] }
        : { orderBy?: AIOutputGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AIOutputGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAIOutputGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AIOutput model
   */
  readonly fields: AIOutputFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AIOutput.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AIOutputClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    relatedQuest<T extends AIOutput$relatedQuestArgs<ExtArgs> = {}>(args?: Subset<T, AIOutput$relatedQuestArgs<ExtArgs>>): Prisma__QuestDefinitionClient<$Result.GetResult<Prisma.$QuestDefinitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AIOutput model
   */
  interface AIOutputFieldRefs {
    readonly id: FieldRef<"AIOutput", 'Int'>
    readonly userId: FieldRef<"AIOutput", 'Int'>
    readonly type: FieldRef<"AIOutput", 'AIOutputType'>
    readonly text: FieldRef<"AIOutput", 'String'>
    readonly relatedQuestId: FieldRef<"AIOutput", 'Int'>
    readonly createdAt: FieldRef<"AIOutput", 'DateTime'>
    readonly seenByUser: FieldRef<"AIOutput", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * AIOutput findUnique
   */
  export type AIOutputFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIOutput
     */
    select?: AIOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIOutput
     */
    omit?: AIOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIOutputInclude<ExtArgs> | null
    /**
     * Filter, which AIOutput to fetch.
     */
    where: AIOutputWhereUniqueInput
  }

  /**
   * AIOutput findUniqueOrThrow
   */
  export type AIOutputFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIOutput
     */
    select?: AIOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIOutput
     */
    omit?: AIOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIOutputInclude<ExtArgs> | null
    /**
     * Filter, which AIOutput to fetch.
     */
    where: AIOutputWhereUniqueInput
  }

  /**
   * AIOutput findFirst
   */
  export type AIOutputFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIOutput
     */
    select?: AIOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIOutput
     */
    omit?: AIOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIOutputInclude<ExtArgs> | null
    /**
     * Filter, which AIOutput to fetch.
     */
    where?: AIOutputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIOutputs to fetch.
     */
    orderBy?: AIOutputOrderByWithRelationInput | AIOutputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIOutputs.
     */
    cursor?: AIOutputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIOutputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIOutputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIOutputs.
     */
    distinct?: AIOutputScalarFieldEnum | AIOutputScalarFieldEnum[]
  }

  /**
   * AIOutput findFirstOrThrow
   */
  export type AIOutputFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIOutput
     */
    select?: AIOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIOutput
     */
    omit?: AIOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIOutputInclude<ExtArgs> | null
    /**
     * Filter, which AIOutput to fetch.
     */
    where?: AIOutputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIOutputs to fetch.
     */
    orderBy?: AIOutputOrderByWithRelationInput | AIOutputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIOutputs.
     */
    cursor?: AIOutputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIOutputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIOutputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIOutputs.
     */
    distinct?: AIOutputScalarFieldEnum | AIOutputScalarFieldEnum[]
  }

  /**
   * AIOutput findMany
   */
  export type AIOutputFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIOutput
     */
    select?: AIOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIOutput
     */
    omit?: AIOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIOutputInclude<ExtArgs> | null
    /**
     * Filter, which AIOutputs to fetch.
     */
    where?: AIOutputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIOutputs to fetch.
     */
    orderBy?: AIOutputOrderByWithRelationInput | AIOutputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AIOutputs.
     */
    cursor?: AIOutputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIOutputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIOutputs.
     */
    skip?: number
    distinct?: AIOutputScalarFieldEnum | AIOutputScalarFieldEnum[]
  }

  /**
   * AIOutput create
   */
  export type AIOutputCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIOutput
     */
    select?: AIOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIOutput
     */
    omit?: AIOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIOutputInclude<ExtArgs> | null
    /**
     * The data needed to create a AIOutput.
     */
    data: XOR<AIOutputCreateInput, AIOutputUncheckedCreateInput>
  }

  /**
   * AIOutput createMany
   */
  export type AIOutputCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AIOutputs.
     */
    data: AIOutputCreateManyInput | AIOutputCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AIOutput createManyAndReturn
   */
  export type AIOutputCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIOutput
     */
    select?: AIOutputSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIOutput
     */
    omit?: AIOutputOmit<ExtArgs> | null
    /**
     * The data used to create many AIOutputs.
     */
    data: AIOutputCreateManyInput | AIOutputCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIOutputIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AIOutput update
   */
  export type AIOutputUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIOutput
     */
    select?: AIOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIOutput
     */
    omit?: AIOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIOutputInclude<ExtArgs> | null
    /**
     * The data needed to update a AIOutput.
     */
    data: XOR<AIOutputUpdateInput, AIOutputUncheckedUpdateInput>
    /**
     * Choose, which AIOutput to update.
     */
    where: AIOutputWhereUniqueInput
  }

  /**
   * AIOutput updateMany
   */
  export type AIOutputUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AIOutputs.
     */
    data: XOR<AIOutputUpdateManyMutationInput, AIOutputUncheckedUpdateManyInput>
    /**
     * Filter which AIOutputs to update
     */
    where?: AIOutputWhereInput
    /**
     * Limit how many AIOutputs to update.
     */
    limit?: number
  }

  /**
   * AIOutput updateManyAndReturn
   */
  export type AIOutputUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIOutput
     */
    select?: AIOutputSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIOutput
     */
    omit?: AIOutputOmit<ExtArgs> | null
    /**
     * The data used to update AIOutputs.
     */
    data: XOR<AIOutputUpdateManyMutationInput, AIOutputUncheckedUpdateManyInput>
    /**
     * Filter which AIOutputs to update
     */
    where?: AIOutputWhereInput
    /**
     * Limit how many AIOutputs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIOutputIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AIOutput upsert
   */
  export type AIOutputUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIOutput
     */
    select?: AIOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIOutput
     */
    omit?: AIOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIOutputInclude<ExtArgs> | null
    /**
     * The filter to search for the AIOutput to update in case it exists.
     */
    where: AIOutputWhereUniqueInput
    /**
     * In case the AIOutput found by the `where` argument doesn't exist, create a new AIOutput with this data.
     */
    create: XOR<AIOutputCreateInput, AIOutputUncheckedCreateInput>
    /**
     * In case the AIOutput was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AIOutputUpdateInput, AIOutputUncheckedUpdateInput>
  }

  /**
   * AIOutput delete
   */
  export type AIOutputDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIOutput
     */
    select?: AIOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIOutput
     */
    omit?: AIOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIOutputInclude<ExtArgs> | null
    /**
     * Filter which AIOutput to delete.
     */
    where: AIOutputWhereUniqueInput
  }

  /**
   * AIOutput deleteMany
   */
  export type AIOutputDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIOutputs to delete
     */
    where?: AIOutputWhereInput
    /**
     * Limit how many AIOutputs to delete.
     */
    limit?: number
  }

  /**
   * AIOutput.relatedQuest
   */
  export type AIOutput$relatedQuestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestDefinition
     */
    select?: QuestDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestDefinition
     */
    omit?: QuestDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestDefinitionInclude<ExtArgs> | null
    where?: QuestDefinitionWhereInput
  }

  /**
   * AIOutput without action
   */
  export type AIOutputDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIOutput
     */
    select?: AIOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIOutput
     */
    omit?: AIOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIOutputInclude<ExtArgs> | null
  }


  /**
   * Model UserSettings
   */

  export type AggregateUserSettings = {
    _count: UserSettingsCountAggregateOutputType | null
    _avg: UserSettingsAvgAggregateOutputType | null
    _sum: UserSettingsSumAggregateOutputType | null
    _min: UserSettingsMinAggregateOutputType | null
    _max: UserSettingsMaxAggregateOutputType | null
  }

  export type UserSettingsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserSettingsSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserSettingsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    aiInteractionLevel: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSettingsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    aiInteractionLevel: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSettingsCountAggregateOutputType = {
    id: number
    userId: number
    notificationPrefs: number
    privacyFlags: number
    aiInteractionLevel: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserSettingsAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserSettingsSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserSettingsMinAggregateInputType = {
    id?: true
    userId?: true
    aiInteractionLevel?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSettingsMaxAggregateInputType = {
    id?: true
    userId?: true
    aiInteractionLevel?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSettingsCountAggregateInputType = {
    id?: true
    userId?: true
    notificationPrefs?: true
    privacyFlags?: true
    aiInteractionLevel?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSettings to aggregate.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSettings
    **/
    _count?: true | UserSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserSettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSettingsMaxAggregateInputType
  }

  export type GetUserSettingsAggregateType<T extends UserSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSettings[P]>
      : GetScalarType<T[P], AggregateUserSettings[P]>
  }




  export type UserSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSettingsWhereInput
    orderBy?: UserSettingsOrderByWithAggregationInput | UserSettingsOrderByWithAggregationInput[]
    by: UserSettingsScalarFieldEnum[] | UserSettingsScalarFieldEnum
    having?: UserSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSettingsCountAggregateInputType | true
    _avg?: UserSettingsAvgAggregateInputType
    _sum?: UserSettingsSumAggregateInputType
    _min?: UserSettingsMinAggregateInputType
    _max?: UserSettingsMaxAggregateInputType
  }

  export type UserSettingsGroupByOutputType = {
    id: number
    userId: number
    notificationPrefs: JsonValue | null
    privacyFlags: JsonValue | null
    aiInteractionLevel: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserSettingsCountAggregateOutputType | null
    _avg: UserSettingsAvgAggregateOutputType | null
    _sum: UserSettingsSumAggregateOutputType | null
    _min: UserSettingsMinAggregateOutputType | null
    _max: UserSettingsMaxAggregateOutputType | null
  }

  type GetUserSettingsGroupByPayload<T extends UserSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], UserSettingsGroupByOutputType[P]>
        }
      >
    >


  export type UserSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    notificationPrefs?: boolean
    privacyFlags?: boolean
    aiInteractionLevel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSettings"]>

  export type UserSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    notificationPrefs?: boolean
    privacyFlags?: boolean
    aiInteractionLevel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSettings"]>

  export type UserSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    notificationPrefs?: boolean
    privacyFlags?: boolean
    aiInteractionLevel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSettings"]>

  export type UserSettingsSelectScalar = {
    id?: boolean
    userId?: boolean
    notificationPrefs?: boolean
    privacyFlags?: boolean
    aiInteractionLevel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "notificationPrefs" | "privacyFlags" | "aiInteractionLevel" | "createdAt" | "updatedAt", ExtArgs["result"]["userSettings"]>
  export type UserSettingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSettingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSettingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSettings"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      notificationPrefs: Prisma.JsonValue | null
      privacyFlags: Prisma.JsonValue | null
      aiInteractionLevel: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userSettings"]>
    composites: {}
  }

  type UserSettingsGetPayload<S extends boolean | null | undefined | UserSettingsDefaultArgs> = $Result.GetResult<Prisma.$UserSettingsPayload, S>

  type UserSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSettingsCountAggregateInputType | true
    }

  export interface UserSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSettings'], meta: { name: 'UserSettings' } }
    /**
     * Find zero or one UserSettings that matches the filter.
     * @param {UserSettingsFindUniqueArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSettingsFindUniqueArgs>(args: SelectSubset<T, UserSettingsFindUniqueArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSettingsFindUniqueOrThrowArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsFindFirstArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSettingsFindFirstArgs>(args?: SelectSubset<T, UserSettingsFindFirstArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsFindFirstOrThrowArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSettings
     * const userSettings = await prisma.userSettings.findMany()
     * 
     * // Get first 10 UserSettings
     * const userSettings = await prisma.userSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSettingsWithIdOnly = await prisma.userSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSettingsFindManyArgs>(args?: SelectSubset<T, UserSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSettings.
     * @param {UserSettingsCreateArgs} args - Arguments to create a UserSettings.
     * @example
     * // Create one UserSettings
     * const UserSettings = await prisma.userSettings.create({
     *   data: {
     *     // ... data to create a UserSettings
     *   }
     * })
     * 
     */
    create<T extends UserSettingsCreateArgs>(args: SelectSubset<T, UserSettingsCreateArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSettings.
     * @param {UserSettingsCreateManyArgs} args - Arguments to create many UserSettings.
     * @example
     * // Create many UserSettings
     * const userSettings = await prisma.userSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSettingsCreateManyArgs>(args?: SelectSubset<T, UserSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSettings and returns the data saved in the database.
     * @param {UserSettingsCreateManyAndReturnArgs} args - Arguments to create many UserSettings.
     * @example
     * // Create many UserSettings
     * const userSettings = await prisma.userSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSettings and only return the `id`
     * const userSettingsWithIdOnly = await prisma.userSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSettings.
     * @param {UserSettingsDeleteArgs} args - Arguments to delete one UserSettings.
     * @example
     * // Delete one UserSettings
     * const UserSettings = await prisma.userSettings.delete({
     *   where: {
     *     // ... filter to delete one UserSettings
     *   }
     * })
     * 
     */
    delete<T extends UserSettingsDeleteArgs>(args: SelectSubset<T, UserSettingsDeleteArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSettings.
     * @param {UserSettingsUpdateArgs} args - Arguments to update one UserSettings.
     * @example
     * // Update one UserSettings
     * const userSettings = await prisma.userSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSettingsUpdateArgs>(args: SelectSubset<T, UserSettingsUpdateArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSettings.
     * @param {UserSettingsDeleteManyArgs} args - Arguments to filter UserSettings to delete.
     * @example
     * // Delete a few UserSettings
     * const { count } = await prisma.userSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSettingsDeleteManyArgs>(args?: SelectSubset<T, UserSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSettings
     * const userSettings = await prisma.userSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSettingsUpdateManyArgs>(args: SelectSubset<T, UserSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSettings and returns the data updated in the database.
     * @param {UserSettingsUpdateManyAndReturnArgs} args - Arguments to update many UserSettings.
     * @example
     * // Update many UserSettings
     * const userSettings = await prisma.userSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSettings and only return the `id`
     * const userSettingsWithIdOnly = await prisma.userSettings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSettings.
     * @param {UserSettingsUpsertArgs} args - Arguments to update or create a UserSettings.
     * @example
     * // Update or create a UserSettings
     * const userSettings = await prisma.userSettings.upsert({
     *   create: {
     *     // ... data to create a UserSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSettings we want to update
     *   }
     * })
     */
    upsert<T extends UserSettingsUpsertArgs>(args: SelectSubset<T, UserSettingsUpsertArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsCountArgs} args - Arguments to filter UserSettings to count.
     * @example
     * // Count the number of UserSettings
     * const count = await prisma.userSettings.count({
     *   where: {
     *     // ... the filter for the UserSettings we want to count
     *   }
     * })
    **/
    count<T extends UserSettingsCountArgs>(
      args?: Subset<T, UserSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserSettingsAggregateArgs>(args: Subset<T, UserSettingsAggregateArgs>): Prisma.PrismaPromise<GetUserSettingsAggregateType<T>>

    /**
     * Group by UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSettingsGroupByArgs['orderBy'] }
        : { orderBy?: UserSettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSettings model
   */
  readonly fields: UserSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserSettings model
   */
  interface UserSettingsFieldRefs {
    readonly id: FieldRef<"UserSettings", 'Int'>
    readonly userId: FieldRef<"UserSettings", 'Int'>
    readonly notificationPrefs: FieldRef<"UserSettings", 'Json'>
    readonly privacyFlags: FieldRef<"UserSettings", 'Json'>
    readonly aiInteractionLevel: FieldRef<"UserSettings", 'String'>
    readonly createdAt: FieldRef<"UserSettings", 'DateTime'>
    readonly updatedAt: FieldRef<"UserSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSettings findUnique
   */
  export type UserSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings findUniqueOrThrow
   */
  export type UserSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings findFirst
   */
  export type UserSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSettings.
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSettings.
     */
    distinct?: UserSettingsScalarFieldEnum | UserSettingsScalarFieldEnum[]
  }

  /**
   * UserSettings findFirstOrThrow
   */
  export type UserSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSettings.
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSettings.
     */
    distinct?: UserSettingsScalarFieldEnum | UserSettingsScalarFieldEnum[]
  }

  /**
   * UserSettings findMany
   */
  export type UserSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSettings.
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    distinct?: UserSettingsScalarFieldEnum | UserSettingsScalarFieldEnum[]
  }

  /**
   * UserSettings create
   */
  export type UserSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSettings.
     */
    data: XOR<UserSettingsCreateInput, UserSettingsUncheckedCreateInput>
  }

  /**
   * UserSettings createMany
   */
  export type UserSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSettings.
     */
    data: UserSettingsCreateManyInput | UserSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSettings createManyAndReturn
   */
  export type UserSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many UserSettings.
     */
    data: UserSettingsCreateManyInput | UserSettingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSettings update
   */
  export type UserSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSettings.
     */
    data: XOR<UserSettingsUpdateInput, UserSettingsUncheckedUpdateInput>
    /**
     * Choose, which UserSettings to update.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings updateMany
   */
  export type UserSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSettings.
     */
    data: XOR<UserSettingsUpdateManyMutationInput, UserSettingsUncheckedUpdateManyInput>
    /**
     * Filter which UserSettings to update
     */
    where?: UserSettingsWhereInput
    /**
     * Limit how many UserSettings to update.
     */
    limit?: number
  }

  /**
   * UserSettings updateManyAndReturn
   */
  export type UserSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * The data used to update UserSettings.
     */
    data: XOR<UserSettingsUpdateManyMutationInput, UserSettingsUncheckedUpdateManyInput>
    /**
     * Filter which UserSettings to update
     */
    where?: UserSettingsWhereInput
    /**
     * Limit how many UserSettings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSettings upsert
   */
  export type UserSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSettings to update in case it exists.
     */
    where: UserSettingsWhereUniqueInput
    /**
     * In case the UserSettings found by the `where` argument doesn't exist, create a new UserSettings with this data.
     */
    create: XOR<UserSettingsCreateInput, UserSettingsUncheckedCreateInput>
    /**
     * In case the UserSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSettingsUpdateInput, UserSettingsUncheckedUpdateInput>
  }

  /**
   * UserSettings delete
   */
  export type UserSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter which UserSettings to delete.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings deleteMany
   */
  export type UserSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSettings to delete
     */
    where?: UserSettingsWhereInput
    /**
     * Limit how many UserSettings to delete.
     */
    limit?: number
  }

  /**
   * UserSettings without action
   */
  export type UserSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    email: 'email',
    password: 'password',
    name: 'name',
    hashedRefreshToken: 'hashedRefreshToken'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    username: 'username',
    avatarConfig: 'avatarConfig',
    currentLevel: 'currentLevel',
    currentXP: 'currentXP',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const HabitDefinitionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    description: 'description',
    frequency: 'frequency',
    target: 'target',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HabitDefinitionScalarFieldEnum = (typeof HabitDefinitionScalarFieldEnum)[keyof typeof HabitDefinitionScalarFieldEnum]


  export const HabitLogScalarFieldEnum: {
    id: 'id',
    habitId: 'habitId',
    userId: 'userId',
    completionDate: 'completionDate',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type HabitLogScalarFieldEnum = (typeof HabitLogScalarFieldEnum)[keyof typeof HabitLogScalarFieldEnum]


  export const HealthLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    metricType: 'metricType',
    value: 'value',
    source: 'source',
    createdAt: 'createdAt'
  };

  export type HealthLogScalarFieldEnum = (typeof HealthLogScalarFieldEnum)[keyof typeof HealthLogScalarFieldEnum]


  export const BadgeDefinitionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    criteria: 'criteria',
    icon: 'icon',
    createdAt: 'createdAt'
  };

  export type BadgeDefinitionScalarFieldEnum = (typeof BadgeDefinitionScalarFieldEnum)[keyof typeof BadgeDefinitionScalarFieldEnum]


  export const UserBadgeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    badgeId: 'badgeId',
    earnedDate: 'earnedDate'
  };

  export type UserBadgeScalarFieldEnum = (typeof UserBadgeScalarFieldEnum)[keyof typeof UserBadgeScalarFieldEnum]


  export const QuestDefinitionScalarFieldEnum: {
    id: 'id',
    type: 'type',
    title: 'title',
    description: 'description',
    criteria: 'criteria',
    xpReward: 'xpReward',
    badgeRewardId: 'badgeRewardId',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type QuestDefinitionScalarFieldEnum = (typeof QuestDefinitionScalarFieldEnum)[keyof typeof QuestDefinitionScalarFieldEnum]


  export const UserQuestProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    questId: 'questId',
    status: 'status',
    progressData: 'progressData',
    startDate: 'startDate',
    completionDate: 'completionDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserQuestProgressScalarFieldEnum = (typeof UserQuestProgressScalarFieldEnum)[keyof typeof UserQuestProgressScalarFieldEnum]


  export const AIOutputScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    text: 'text',
    relatedQuestId: 'relatedQuestId',
    createdAt: 'createdAt',
    seenByUser: 'seenByUser'
  };

  export type AIOutputScalarFieldEnum = (typeof AIOutputScalarFieldEnum)[keyof typeof AIOutputScalarFieldEnum]


  export const UserSettingsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    notificationPrefs: 'notificationPrefs',
    privacyFlags: 'privacyFlags',
    aiInteractionLevel: 'aiInteractionLevel',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserSettingsScalarFieldEnum = (typeof UserSettingsScalarFieldEnum)[keyof typeof UserSettingsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'HealthMetricType'
   */
  export type EnumHealthMetricTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HealthMetricType'>
    


  /**
   * Reference to a field of type 'HealthMetricType[]'
   */
  export type ListEnumHealthMetricTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HealthMetricType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'HealthDataSource'
   */
  export type EnumHealthDataSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HealthDataSource'>
    


  /**
   * Reference to a field of type 'HealthDataSource[]'
   */
  export type ListEnumHealthDataSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HealthDataSource[]'>
    


  /**
   * Reference to a field of type 'QuestType'
   */
  export type EnumQuestTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestType'>
    


  /**
   * Reference to a field of type 'QuestType[]'
   */
  export type ListEnumQuestTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'QuestStatus'
   */
  export type EnumQuestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestStatus'>
    


  /**
   * Reference to a field of type 'QuestStatus[]'
   */
  export type ListEnumQuestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestStatus[]'>
    


  /**
   * Reference to a field of type 'AIOutputType'
   */
  export type EnumAIOutputTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AIOutputType'>
    


  /**
   * Reference to a field of type 'AIOutputType[]'
   */
  export type ListEnumAIOutputTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AIOutputType[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    hashedRefreshToken?: StringNullableFilter<"User"> | string | null
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    habitDefinitions?: HabitDefinitionListRelationFilter
    habitLogs?: HabitLogListRelationFilter
    healthLogs?: HealthLogListRelationFilter
    userBadges?: UserBadgeListRelationFilter
    userQuests?: UserQuestProgressListRelationFilter
    settings?: XOR<UserSettingsNullableScalarRelationFilter, UserSettingsWhereInput> | null
    aiOutputs?: AIOutputListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    hashedRefreshToken?: SortOrderInput | SortOrder
    profile?: ProfileOrderByWithRelationInput
    habitDefinitions?: HabitDefinitionOrderByRelationAggregateInput
    habitLogs?: HabitLogOrderByRelationAggregateInput
    healthLogs?: HealthLogOrderByRelationAggregateInput
    userBadges?: UserBadgeOrderByRelationAggregateInput
    userQuests?: UserQuestProgressOrderByRelationAggregateInput
    settings?: UserSettingsOrderByWithRelationInput
    aiOutputs?: AIOutputOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    hashedRefreshToken?: StringNullableFilter<"User"> | string | null
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    habitDefinitions?: HabitDefinitionListRelationFilter
    habitLogs?: HabitLogListRelationFilter
    healthLogs?: HealthLogListRelationFilter
    userBadges?: UserBadgeListRelationFilter
    userQuests?: UserQuestProgressListRelationFilter
    settings?: XOR<UserSettingsNullableScalarRelationFilter, UserSettingsWhereInput> | null
    aiOutputs?: AIOutputListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    hashedRefreshToken?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    hashedRefreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: IntFilter<"Profile"> | number
    userId?: IntFilter<"Profile"> | number
    username?: StringNullableFilter<"Profile"> | string | null
    avatarConfig?: JsonNullableFilter<"Profile">
    currentLevel?: IntFilter<"Profile"> | number
    currentXP?: IntFilter<"Profile"> | number
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrderInput | SortOrder
    avatarConfig?: SortOrderInput | SortOrder
    currentLevel?: SortOrder
    currentXP?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    username?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    avatarConfig?: JsonNullableFilter<"Profile">
    currentLevel?: IntFilter<"Profile"> | number
    currentXP?: IntFilter<"Profile"> | number
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId" | "username">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrderInput | SortOrder
    avatarConfig?: SortOrderInput | SortOrder
    currentLevel?: SortOrder
    currentXP?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Profile"> | number
    userId?: IntWithAggregatesFilter<"Profile"> | number
    username?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    avatarConfig?: JsonNullableWithAggregatesFilter<"Profile">
    currentLevel?: IntWithAggregatesFilter<"Profile"> | number
    currentXP?: IntWithAggregatesFilter<"Profile"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
  }

  export type HabitDefinitionWhereInput = {
    AND?: HabitDefinitionWhereInput | HabitDefinitionWhereInput[]
    OR?: HabitDefinitionWhereInput[]
    NOT?: HabitDefinitionWhereInput | HabitDefinitionWhereInput[]
    id?: IntFilter<"HabitDefinition"> | number
    userId?: IntFilter<"HabitDefinition"> | number
    name?: StringFilter<"HabitDefinition"> | string
    description?: StringNullableFilter<"HabitDefinition"> | string | null
    frequency?: StringFilter<"HabitDefinition"> | string
    target?: IntNullableFilter<"HabitDefinition"> | number | null
    createdAt?: DateTimeFilter<"HabitDefinition"> | Date | string
    updatedAt?: DateTimeFilter<"HabitDefinition"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    habitLogs?: HabitLogListRelationFilter
  }

  export type HabitDefinitionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    frequency?: SortOrder
    target?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    habitLogs?: HabitLogOrderByRelationAggregateInput
  }

  export type HabitDefinitionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HabitDefinitionWhereInput | HabitDefinitionWhereInput[]
    OR?: HabitDefinitionWhereInput[]
    NOT?: HabitDefinitionWhereInput | HabitDefinitionWhereInput[]
    userId?: IntFilter<"HabitDefinition"> | number
    name?: StringFilter<"HabitDefinition"> | string
    description?: StringNullableFilter<"HabitDefinition"> | string | null
    frequency?: StringFilter<"HabitDefinition"> | string
    target?: IntNullableFilter<"HabitDefinition"> | number | null
    createdAt?: DateTimeFilter<"HabitDefinition"> | Date | string
    updatedAt?: DateTimeFilter<"HabitDefinition"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    habitLogs?: HabitLogListRelationFilter
  }, "id">

  export type HabitDefinitionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    frequency?: SortOrder
    target?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HabitDefinitionCountOrderByAggregateInput
    _avg?: HabitDefinitionAvgOrderByAggregateInput
    _max?: HabitDefinitionMaxOrderByAggregateInput
    _min?: HabitDefinitionMinOrderByAggregateInput
    _sum?: HabitDefinitionSumOrderByAggregateInput
  }

  export type HabitDefinitionScalarWhereWithAggregatesInput = {
    AND?: HabitDefinitionScalarWhereWithAggregatesInput | HabitDefinitionScalarWhereWithAggregatesInput[]
    OR?: HabitDefinitionScalarWhereWithAggregatesInput[]
    NOT?: HabitDefinitionScalarWhereWithAggregatesInput | HabitDefinitionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HabitDefinition"> | number
    userId?: IntWithAggregatesFilter<"HabitDefinition"> | number
    name?: StringWithAggregatesFilter<"HabitDefinition"> | string
    description?: StringNullableWithAggregatesFilter<"HabitDefinition"> | string | null
    frequency?: StringWithAggregatesFilter<"HabitDefinition"> | string
    target?: IntNullableWithAggregatesFilter<"HabitDefinition"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"HabitDefinition"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HabitDefinition"> | Date | string
  }

  export type HabitLogWhereInput = {
    AND?: HabitLogWhereInput | HabitLogWhereInput[]
    OR?: HabitLogWhereInput[]
    NOT?: HabitLogWhereInput | HabitLogWhereInput[]
    id?: IntFilter<"HabitLog"> | number
    habitId?: IntFilter<"HabitLog"> | number
    userId?: IntFilter<"HabitLog"> | number
    completionDate?: DateTimeFilter<"HabitLog"> | Date | string
    notes?: StringNullableFilter<"HabitLog"> | string | null
    createdAt?: DateTimeFilter<"HabitLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    habitDefinition?: XOR<HabitDefinitionScalarRelationFilter, HabitDefinitionWhereInput>
  }

  export type HabitLogOrderByWithRelationInput = {
    id?: SortOrder
    habitId?: SortOrder
    userId?: SortOrder
    completionDate?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    habitDefinition?: HabitDefinitionOrderByWithRelationInput
  }

  export type HabitLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HabitLogWhereInput | HabitLogWhereInput[]
    OR?: HabitLogWhereInput[]
    NOT?: HabitLogWhereInput | HabitLogWhereInput[]
    habitId?: IntFilter<"HabitLog"> | number
    userId?: IntFilter<"HabitLog"> | number
    completionDate?: DateTimeFilter<"HabitLog"> | Date | string
    notes?: StringNullableFilter<"HabitLog"> | string | null
    createdAt?: DateTimeFilter<"HabitLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    habitDefinition?: XOR<HabitDefinitionScalarRelationFilter, HabitDefinitionWhereInput>
  }, "id">

  export type HabitLogOrderByWithAggregationInput = {
    id?: SortOrder
    habitId?: SortOrder
    userId?: SortOrder
    completionDate?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: HabitLogCountOrderByAggregateInput
    _avg?: HabitLogAvgOrderByAggregateInput
    _max?: HabitLogMaxOrderByAggregateInput
    _min?: HabitLogMinOrderByAggregateInput
    _sum?: HabitLogSumOrderByAggregateInput
  }

  export type HabitLogScalarWhereWithAggregatesInput = {
    AND?: HabitLogScalarWhereWithAggregatesInput | HabitLogScalarWhereWithAggregatesInput[]
    OR?: HabitLogScalarWhereWithAggregatesInput[]
    NOT?: HabitLogScalarWhereWithAggregatesInput | HabitLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HabitLog"> | number
    habitId?: IntWithAggregatesFilter<"HabitLog"> | number
    userId?: IntWithAggregatesFilter<"HabitLog"> | number
    completionDate?: DateTimeWithAggregatesFilter<"HabitLog"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"HabitLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"HabitLog"> | Date | string
  }

  export type HealthLogWhereInput = {
    AND?: HealthLogWhereInput | HealthLogWhereInput[]
    OR?: HealthLogWhereInput[]
    NOT?: HealthLogWhereInput | HealthLogWhereInput[]
    id?: IntFilter<"HealthLog"> | number
    userId?: IntFilter<"HealthLog"> | number
    date?: DateTimeFilter<"HealthLog"> | Date | string
    metricType?: EnumHealthMetricTypeFilter<"HealthLog"> | $Enums.HealthMetricType
    value?: FloatFilter<"HealthLog"> | number
    source?: EnumHealthDataSourceFilter<"HealthLog"> | $Enums.HealthDataSource
    createdAt?: DateTimeFilter<"HealthLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type HealthLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    metricType?: SortOrder
    value?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type HealthLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HealthLogWhereInput | HealthLogWhereInput[]
    OR?: HealthLogWhereInput[]
    NOT?: HealthLogWhereInput | HealthLogWhereInput[]
    userId?: IntFilter<"HealthLog"> | number
    date?: DateTimeFilter<"HealthLog"> | Date | string
    metricType?: EnumHealthMetricTypeFilter<"HealthLog"> | $Enums.HealthMetricType
    value?: FloatFilter<"HealthLog"> | number
    source?: EnumHealthDataSourceFilter<"HealthLog"> | $Enums.HealthDataSource
    createdAt?: DateTimeFilter<"HealthLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type HealthLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    metricType?: SortOrder
    value?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    _count?: HealthLogCountOrderByAggregateInput
    _avg?: HealthLogAvgOrderByAggregateInput
    _max?: HealthLogMaxOrderByAggregateInput
    _min?: HealthLogMinOrderByAggregateInput
    _sum?: HealthLogSumOrderByAggregateInput
  }

  export type HealthLogScalarWhereWithAggregatesInput = {
    AND?: HealthLogScalarWhereWithAggregatesInput | HealthLogScalarWhereWithAggregatesInput[]
    OR?: HealthLogScalarWhereWithAggregatesInput[]
    NOT?: HealthLogScalarWhereWithAggregatesInput | HealthLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HealthLog"> | number
    userId?: IntWithAggregatesFilter<"HealthLog"> | number
    date?: DateTimeWithAggregatesFilter<"HealthLog"> | Date | string
    metricType?: EnumHealthMetricTypeWithAggregatesFilter<"HealthLog"> | $Enums.HealthMetricType
    value?: FloatWithAggregatesFilter<"HealthLog"> | number
    source?: EnumHealthDataSourceWithAggregatesFilter<"HealthLog"> | $Enums.HealthDataSource
    createdAt?: DateTimeWithAggregatesFilter<"HealthLog"> | Date | string
  }

  export type BadgeDefinitionWhereInput = {
    AND?: BadgeDefinitionWhereInput | BadgeDefinitionWhereInput[]
    OR?: BadgeDefinitionWhereInput[]
    NOT?: BadgeDefinitionWhereInput | BadgeDefinitionWhereInput[]
    id?: IntFilter<"BadgeDefinition"> | number
    name?: StringFilter<"BadgeDefinition"> | string
    description?: StringFilter<"BadgeDefinition"> | string
    criteria?: JsonFilter<"BadgeDefinition">
    icon?: StringNullableFilter<"BadgeDefinition"> | string | null
    createdAt?: DateTimeFilter<"BadgeDefinition"> | Date | string
    userBadges?: UserBadgeListRelationFilter
    questsRewarded?: QuestDefinitionListRelationFilter
  }

  export type BadgeDefinitionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    criteria?: SortOrder
    icon?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userBadges?: UserBadgeOrderByRelationAggregateInput
    questsRewarded?: QuestDefinitionOrderByRelationAggregateInput
  }

  export type BadgeDefinitionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: BadgeDefinitionWhereInput | BadgeDefinitionWhereInput[]
    OR?: BadgeDefinitionWhereInput[]
    NOT?: BadgeDefinitionWhereInput | BadgeDefinitionWhereInput[]
    description?: StringFilter<"BadgeDefinition"> | string
    criteria?: JsonFilter<"BadgeDefinition">
    icon?: StringNullableFilter<"BadgeDefinition"> | string | null
    createdAt?: DateTimeFilter<"BadgeDefinition"> | Date | string
    userBadges?: UserBadgeListRelationFilter
    questsRewarded?: QuestDefinitionListRelationFilter
  }, "id" | "name">

  export type BadgeDefinitionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    criteria?: SortOrder
    icon?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: BadgeDefinitionCountOrderByAggregateInput
    _avg?: BadgeDefinitionAvgOrderByAggregateInput
    _max?: BadgeDefinitionMaxOrderByAggregateInput
    _min?: BadgeDefinitionMinOrderByAggregateInput
    _sum?: BadgeDefinitionSumOrderByAggregateInput
  }

  export type BadgeDefinitionScalarWhereWithAggregatesInput = {
    AND?: BadgeDefinitionScalarWhereWithAggregatesInput | BadgeDefinitionScalarWhereWithAggregatesInput[]
    OR?: BadgeDefinitionScalarWhereWithAggregatesInput[]
    NOT?: BadgeDefinitionScalarWhereWithAggregatesInput | BadgeDefinitionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BadgeDefinition"> | number
    name?: StringWithAggregatesFilter<"BadgeDefinition"> | string
    description?: StringWithAggregatesFilter<"BadgeDefinition"> | string
    criteria?: JsonWithAggregatesFilter<"BadgeDefinition">
    icon?: StringNullableWithAggregatesFilter<"BadgeDefinition"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BadgeDefinition"> | Date | string
  }

  export type UserBadgeWhereInput = {
    AND?: UserBadgeWhereInput | UserBadgeWhereInput[]
    OR?: UserBadgeWhereInput[]
    NOT?: UserBadgeWhereInput | UserBadgeWhereInput[]
    id?: IntFilter<"UserBadge"> | number
    userId?: IntFilter<"UserBadge"> | number
    badgeId?: IntFilter<"UserBadge"> | number
    earnedDate?: DateTimeFilter<"UserBadge"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    badge?: XOR<BadgeDefinitionScalarRelationFilter, BadgeDefinitionWhereInput>
  }

  export type UserBadgeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    badgeId?: SortOrder
    earnedDate?: SortOrder
    user?: UserOrderByWithRelationInput
    badge?: BadgeDefinitionOrderByWithRelationInput
  }

  export type UserBadgeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_badgeId?: UserBadgeUserIdBadgeIdCompoundUniqueInput
    AND?: UserBadgeWhereInput | UserBadgeWhereInput[]
    OR?: UserBadgeWhereInput[]
    NOT?: UserBadgeWhereInput | UserBadgeWhereInput[]
    userId?: IntFilter<"UserBadge"> | number
    badgeId?: IntFilter<"UserBadge"> | number
    earnedDate?: DateTimeFilter<"UserBadge"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    badge?: XOR<BadgeDefinitionScalarRelationFilter, BadgeDefinitionWhereInput>
  }, "id" | "userId_badgeId">

  export type UserBadgeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    badgeId?: SortOrder
    earnedDate?: SortOrder
    _count?: UserBadgeCountOrderByAggregateInput
    _avg?: UserBadgeAvgOrderByAggregateInput
    _max?: UserBadgeMaxOrderByAggregateInput
    _min?: UserBadgeMinOrderByAggregateInput
    _sum?: UserBadgeSumOrderByAggregateInput
  }

  export type UserBadgeScalarWhereWithAggregatesInput = {
    AND?: UserBadgeScalarWhereWithAggregatesInput | UserBadgeScalarWhereWithAggregatesInput[]
    OR?: UserBadgeScalarWhereWithAggregatesInput[]
    NOT?: UserBadgeScalarWhereWithAggregatesInput | UserBadgeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserBadge"> | number
    userId?: IntWithAggregatesFilter<"UserBadge"> | number
    badgeId?: IntWithAggregatesFilter<"UserBadge"> | number
    earnedDate?: DateTimeWithAggregatesFilter<"UserBadge"> | Date | string
  }

  export type QuestDefinitionWhereInput = {
    AND?: QuestDefinitionWhereInput | QuestDefinitionWhereInput[]
    OR?: QuestDefinitionWhereInput[]
    NOT?: QuestDefinitionWhereInput | QuestDefinitionWhereInput[]
    id?: IntFilter<"QuestDefinition"> | number
    type?: EnumQuestTypeFilter<"QuestDefinition"> | $Enums.QuestType
    title?: StringFilter<"QuestDefinition"> | string
    description?: StringFilter<"QuestDefinition"> | string
    criteria?: JsonFilter<"QuestDefinition">
    xpReward?: IntFilter<"QuestDefinition"> | number
    badgeRewardId?: IntNullableFilter<"QuestDefinition"> | number | null
    isActive?: BoolFilter<"QuestDefinition"> | boolean
    createdAt?: DateTimeFilter<"QuestDefinition"> | Date | string
    badgeReward?: XOR<BadgeDefinitionNullableScalarRelationFilter, BadgeDefinitionWhereInput> | null
    userQuests?: UserQuestProgressListRelationFilter
    aiOutputs?: AIOutputListRelationFilter
  }

  export type QuestDefinitionOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    criteria?: SortOrder
    xpReward?: SortOrder
    badgeRewardId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    badgeReward?: BadgeDefinitionOrderByWithRelationInput
    userQuests?: UserQuestProgressOrderByRelationAggregateInput
    aiOutputs?: AIOutputOrderByRelationAggregateInput
  }

  export type QuestDefinitionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuestDefinitionWhereInput | QuestDefinitionWhereInput[]
    OR?: QuestDefinitionWhereInput[]
    NOT?: QuestDefinitionWhereInput | QuestDefinitionWhereInput[]
    type?: EnumQuestTypeFilter<"QuestDefinition"> | $Enums.QuestType
    title?: StringFilter<"QuestDefinition"> | string
    description?: StringFilter<"QuestDefinition"> | string
    criteria?: JsonFilter<"QuestDefinition">
    xpReward?: IntFilter<"QuestDefinition"> | number
    badgeRewardId?: IntNullableFilter<"QuestDefinition"> | number | null
    isActive?: BoolFilter<"QuestDefinition"> | boolean
    createdAt?: DateTimeFilter<"QuestDefinition"> | Date | string
    badgeReward?: XOR<BadgeDefinitionNullableScalarRelationFilter, BadgeDefinitionWhereInput> | null
    userQuests?: UserQuestProgressListRelationFilter
    aiOutputs?: AIOutputListRelationFilter
  }, "id">

  export type QuestDefinitionOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    criteria?: SortOrder
    xpReward?: SortOrder
    badgeRewardId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: QuestDefinitionCountOrderByAggregateInput
    _avg?: QuestDefinitionAvgOrderByAggregateInput
    _max?: QuestDefinitionMaxOrderByAggregateInput
    _min?: QuestDefinitionMinOrderByAggregateInput
    _sum?: QuestDefinitionSumOrderByAggregateInput
  }

  export type QuestDefinitionScalarWhereWithAggregatesInput = {
    AND?: QuestDefinitionScalarWhereWithAggregatesInput | QuestDefinitionScalarWhereWithAggregatesInput[]
    OR?: QuestDefinitionScalarWhereWithAggregatesInput[]
    NOT?: QuestDefinitionScalarWhereWithAggregatesInput | QuestDefinitionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"QuestDefinition"> | number
    type?: EnumQuestTypeWithAggregatesFilter<"QuestDefinition"> | $Enums.QuestType
    title?: StringWithAggregatesFilter<"QuestDefinition"> | string
    description?: StringWithAggregatesFilter<"QuestDefinition"> | string
    criteria?: JsonWithAggregatesFilter<"QuestDefinition">
    xpReward?: IntWithAggregatesFilter<"QuestDefinition"> | number
    badgeRewardId?: IntNullableWithAggregatesFilter<"QuestDefinition"> | number | null
    isActive?: BoolWithAggregatesFilter<"QuestDefinition"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"QuestDefinition"> | Date | string
  }

  export type UserQuestProgressWhereInput = {
    AND?: UserQuestProgressWhereInput | UserQuestProgressWhereInput[]
    OR?: UserQuestProgressWhereInput[]
    NOT?: UserQuestProgressWhereInput | UserQuestProgressWhereInput[]
    id?: IntFilter<"UserQuestProgress"> | number
    userId?: IntFilter<"UserQuestProgress"> | number
    questId?: IntFilter<"UserQuestProgress"> | number
    status?: EnumQuestStatusFilter<"UserQuestProgress"> | $Enums.QuestStatus
    progressData?: JsonNullableFilter<"UserQuestProgress">
    startDate?: DateTimeFilter<"UserQuestProgress"> | Date | string
    completionDate?: DateTimeNullableFilter<"UserQuestProgress"> | Date | string | null
    createdAt?: DateTimeFilter<"UserQuestProgress"> | Date | string
    updatedAt?: DateTimeFilter<"UserQuestProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    quest?: XOR<QuestDefinitionScalarRelationFilter, QuestDefinitionWhereInput>
  }

  export type UserQuestProgressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    questId?: SortOrder
    status?: SortOrder
    progressData?: SortOrderInput | SortOrder
    startDate?: SortOrder
    completionDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    quest?: QuestDefinitionOrderByWithRelationInput
  }

  export type UserQuestProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_questId?: UserQuestProgressUserIdQuestIdCompoundUniqueInput
    AND?: UserQuestProgressWhereInput | UserQuestProgressWhereInput[]
    OR?: UserQuestProgressWhereInput[]
    NOT?: UserQuestProgressWhereInput | UserQuestProgressWhereInput[]
    userId?: IntFilter<"UserQuestProgress"> | number
    questId?: IntFilter<"UserQuestProgress"> | number
    status?: EnumQuestStatusFilter<"UserQuestProgress"> | $Enums.QuestStatus
    progressData?: JsonNullableFilter<"UserQuestProgress">
    startDate?: DateTimeFilter<"UserQuestProgress"> | Date | string
    completionDate?: DateTimeNullableFilter<"UserQuestProgress"> | Date | string | null
    createdAt?: DateTimeFilter<"UserQuestProgress"> | Date | string
    updatedAt?: DateTimeFilter<"UserQuestProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    quest?: XOR<QuestDefinitionScalarRelationFilter, QuestDefinitionWhereInput>
  }, "id" | "userId_questId">

  export type UserQuestProgressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    questId?: SortOrder
    status?: SortOrder
    progressData?: SortOrderInput | SortOrder
    startDate?: SortOrder
    completionDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserQuestProgressCountOrderByAggregateInput
    _avg?: UserQuestProgressAvgOrderByAggregateInput
    _max?: UserQuestProgressMaxOrderByAggregateInput
    _min?: UserQuestProgressMinOrderByAggregateInput
    _sum?: UserQuestProgressSumOrderByAggregateInput
  }

  export type UserQuestProgressScalarWhereWithAggregatesInput = {
    AND?: UserQuestProgressScalarWhereWithAggregatesInput | UserQuestProgressScalarWhereWithAggregatesInput[]
    OR?: UserQuestProgressScalarWhereWithAggregatesInput[]
    NOT?: UserQuestProgressScalarWhereWithAggregatesInput | UserQuestProgressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserQuestProgress"> | number
    userId?: IntWithAggregatesFilter<"UserQuestProgress"> | number
    questId?: IntWithAggregatesFilter<"UserQuestProgress"> | number
    status?: EnumQuestStatusWithAggregatesFilter<"UserQuestProgress"> | $Enums.QuestStatus
    progressData?: JsonNullableWithAggregatesFilter<"UserQuestProgress">
    startDate?: DateTimeWithAggregatesFilter<"UserQuestProgress"> | Date | string
    completionDate?: DateTimeNullableWithAggregatesFilter<"UserQuestProgress"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserQuestProgress"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserQuestProgress"> | Date | string
  }

  export type AIOutputWhereInput = {
    AND?: AIOutputWhereInput | AIOutputWhereInput[]
    OR?: AIOutputWhereInput[]
    NOT?: AIOutputWhereInput | AIOutputWhereInput[]
    id?: IntFilter<"AIOutput"> | number
    userId?: IntFilter<"AIOutput"> | number
    type?: EnumAIOutputTypeFilter<"AIOutput"> | $Enums.AIOutputType
    text?: StringFilter<"AIOutput"> | string
    relatedQuestId?: IntNullableFilter<"AIOutput"> | number | null
    createdAt?: DateTimeFilter<"AIOutput"> | Date | string
    seenByUser?: BoolFilter<"AIOutput"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    relatedQuest?: XOR<QuestDefinitionNullableScalarRelationFilter, QuestDefinitionWhereInput> | null
  }

  export type AIOutputOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    text?: SortOrder
    relatedQuestId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    seenByUser?: SortOrder
    user?: UserOrderByWithRelationInput
    relatedQuest?: QuestDefinitionOrderByWithRelationInput
  }

  export type AIOutputWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AIOutputWhereInput | AIOutputWhereInput[]
    OR?: AIOutputWhereInput[]
    NOT?: AIOutputWhereInput | AIOutputWhereInput[]
    userId?: IntFilter<"AIOutput"> | number
    type?: EnumAIOutputTypeFilter<"AIOutput"> | $Enums.AIOutputType
    text?: StringFilter<"AIOutput"> | string
    relatedQuestId?: IntNullableFilter<"AIOutput"> | number | null
    createdAt?: DateTimeFilter<"AIOutput"> | Date | string
    seenByUser?: BoolFilter<"AIOutput"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    relatedQuest?: XOR<QuestDefinitionNullableScalarRelationFilter, QuestDefinitionWhereInput> | null
  }, "id">

  export type AIOutputOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    text?: SortOrder
    relatedQuestId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    seenByUser?: SortOrder
    _count?: AIOutputCountOrderByAggregateInput
    _avg?: AIOutputAvgOrderByAggregateInput
    _max?: AIOutputMaxOrderByAggregateInput
    _min?: AIOutputMinOrderByAggregateInput
    _sum?: AIOutputSumOrderByAggregateInput
  }

  export type AIOutputScalarWhereWithAggregatesInput = {
    AND?: AIOutputScalarWhereWithAggregatesInput | AIOutputScalarWhereWithAggregatesInput[]
    OR?: AIOutputScalarWhereWithAggregatesInput[]
    NOT?: AIOutputScalarWhereWithAggregatesInput | AIOutputScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AIOutput"> | number
    userId?: IntWithAggregatesFilter<"AIOutput"> | number
    type?: EnumAIOutputTypeWithAggregatesFilter<"AIOutput"> | $Enums.AIOutputType
    text?: StringWithAggregatesFilter<"AIOutput"> | string
    relatedQuestId?: IntNullableWithAggregatesFilter<"AIOutput"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"AIOutput"> | Date | string
    seenByUser?: BoolWithAggregatesFilter<"AIOutput"> | boolean
  }

  export type UserSettingsWhereInput = {
    AND?: UserSettingsWhereInput | UserSettingsWhereInput[]
    OR?: UserSettingsWhereInput[]
    NOT?: UserSettingsWhereInput | UserSettingsWhereInput[]
    id?: IntFilter<"UserSettings"> | number
    userId?: IntFilter<"UserSettings"> | number
    notificationPrefs?: JsonNullableFilter<"UserSettings">
    privacyFlags?: JsonNullableFilter<"UserSettings">
    aiInteractionLevel?: StringNullableFilter<"UserSettings"> | string | null
    createdAt?: DateTimeFilter<"UserSettings"> | Date | string
    updatedAt?: DateTimeFilter<"UserSettings"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserSettingsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    notificationPrefs?: SortOrderInput | SortOrder
    privacyFlags?: SortOrderInput | SortOrder
    aiInteractionLevel?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: UserSettingsWhereInput | UserSettingsWhereInput[]
    OR?: UserSettingsWhereInput[]
    NOT?: UserSettingsWhereInput | UserSettingsWhereInput[]
    notificationPrefs?: JsonNullableFilter<"UserSettings">
    privacyFlags?: JsonNullableFilter<"UserSettings">
    aiInteractionLevel?: StringNullableFilter<"UserSettings"> | string | null
    createdAt?: DateTimeFilter<"UserSettings"> | Date | string
    updatedAt?: DateTimeFilter<"UserSettings"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    notificationPrefs?: SortOrderInput | SortOrder
    privacyFlags?: SortOrderInput | SortOrder
    aiInteractionLevel?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserSettingsCountOrderByAggregateInput
    _avg?: UserSettingsAvgOrderByAggregateInput
    _max?: UserSettingsMaxOrderByAggregateInput
    _min?: UserSettingsMinOrderByAggregateInput
    _sum?: UserSettingsSumOrderByAggregateInput
  }

  export type UserSettingsScalarWhereWithAggregatesInput = {
    AND?: UserSettingsScalarWhereWithAggregatesInput | UserSettingsScalarWhereWithAggregatesInput[]
    OR?: UserSettingsScalarWhereWithAggregatesInput[]
    NOT?: UserSettingsScalarWhereWithAggregatesInput | UserSettingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserSettings"> | number
    userId?: IntWithAggregatesFilter<"UserSettings"> | number
    notificationPrefs?: JsonNullableWithAggregatesFilter<"UserSettings">
    privacyFlags?: JsonNullableWithAggregatesFilter<"UserSettings">
    aiInteractionLevel?: StringNullableWithAggregatesFilter<"UserSettings"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserSettings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserSettings"> | Date | string
  }

  export type UserCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    name?: string | null
    hashedRefreshToken?: string | null
    profile?: ProfileCreateNestedOneWithoutUserInput
    habitDefinitions?: HabitDefinitionCreateNestedManyWithoutUserInput
    habitLogs?: HabitLogCreateNestedManyWithoutUserInput
    healthLogs?: HealthLogCreateNestedManyWithoutUserInput
    userBadges?: UserBadgeCreateNestedManyWithoutUserInput
    userQuests?: UserQuestProgressCreateNestedManyWithoutUserInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
    aiOutputs?: AIOutputCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    name?: string | null
    hashedRefreshToken?: string | null
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    habitDefinitions?: HabitDefinitionUncheckedCreateNestedManyWithoutUserInput
    habitLogs?: HabitLogUncheckedCreateNestedManyWithoutUserInput
    healthLogs?: HealthLogUncheckedCreateNestedManyWithoutUserInput
    userBadges?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
    userQuests?: UserQuestProgressUncheckedCreateNestedManyWithoutUserInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    aiOutputs?: AIOutputUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: ProfileUpdateOneWithoutUserNestedInput
    habitDefinitions?: HabitDefinitionUpdateManyWithoutUserNestedInput
    habitLogs?: HabitLogUpdateManyWithoutUserNestedInput
    healthLogs?: HealthLogUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgeUpdateManyWithoutUserNestedInput
    userQuests?: UserQuestProgressUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
    aiOutputs?: AIOutputUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    habitDefinitions?: HabitDefinitionUncheckedUpdateManyWithoutUserNestedInput
    habitLogs?: HabitLogUncheckedUpdateManyWithoutUserNestedInput
    healthLogs?: HealthLogUncheckedUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgeUncheckedUpdateManyWithoutUserNestedInput
    userQuests?: UserQuestProgressUncheckedUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    aiOutputs?: AIOutputUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    name?: string | null
    hashedRefreshToken?: string | null
  }

  export type UserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileCreateInput = {
    username?: string | null
    avatarConfig?: NullableJsonNullValueInput | InputJsonValue
    currentLevel?: number
    currentXP?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: number
    userId: number
    username?: string | null
    avatarConfig?: NullableJsonNullValueInput | InputJsonValue
    currentLevel?: number
    currentXP?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarConfig?: NullableJsonNullValueInput | InputJsonValue
    currentLevel?: IntFieldUpdateOperationsInput | number
    currentXP?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarConfig?: NullableJsonNullValueInput | InputJsonValue
    currentLevel?: IntFieldUpdateOperationsInput | number
    currentXP?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateManyInput = {
    id?: number
    userId: number
    username?: string | null
    avatarConfig?: NullableJsonNullValueInput | InputJsonValue
    currentLevel?: number
    currentXP?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateManyMutationInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarConfig?: NullableJsonNullValueInput | InputJsonValue
    currentLevel?: IntFieldUpdateOperationsInput | number
    currentXP?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarConfig?: NullableJsonNullValueInput | InputJsonValue
    currentLevel?: IntFieldUpdateOperationsInput | number
    currentXP?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitDefinitionCreateInput = {
    name: string
    description?: string | null
    frequency: string
    target?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutHabitDefinitionsInput
    habitLogs?: HabitLogCreateNestedManyWithoutHabitDefinitionInput
  }

  export type HabitDefinitionUncheckedCreateInput = {
    id?: number
    userId: number
    name: string
    description?: string | null
    frequency: string
    target?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    habitLogs?: HabitLogUncheckedCreateNestedManyWithoutHabitDefinitionInput
  }

  export type HabitDefinitionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: StringFieldUpdateOperationsInput | string
    target?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHabitDefinitionsNestedInput
    habitLogs?: HabitLogUpdateManyWithoutHabitDefinitionNestedInput
  }

  export type HabitDefinitionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: StringFieldUpdateOperationsInput | string
    target?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habitLogs?: HabitLogUncheckedUpdateManyWithoutHabitDefinitionNestedInput
  }

  export type HabitDefinitionCreateManyInput = {
    id?: number
    userId: number
    name: string
    description?: string | null
    frequency: string
    target?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HabitDefinitionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: StringFieldUpdateOperationsInput | string
    target?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitDefinitionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: StringFieldUpdateOperationsInput | string
    target?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitLogCreateInput = {
    completionDate: Date | string
    notes?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutHabitLogsInput
    habitDefinition: HabitDefinitionCreateNestedOneWithoutHabitLogsInput
  }

  export type HabitLogUncheckedCreateInput = {
    id?: number
    habitId: number
    userId: number
    completionDate: Date | string
    notes?: string | null
    createdAt?: Date | string
  }

  export type HabitLogUpdateInput = {
    completionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHabitLogsNestedInput
    habitDefinition?: HabitDefinitionUpdateOneRequiredWithoutHabitLogsNestedInput
  }

  export type HabitLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    habitId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    completionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitLogCreateManyInput = {
    id?: number
    habitId: number
    userId: number
    completionDate: Date | string
    notes?: string | null
    createdAt?: Date | string
  }

  export type HabitLogUpdateManyMutationInput = {
    completionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    habitId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    completionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HealthLogCreateInput = {
    date: Date | string
    metricType: $Enums.HealthMetricType
    value: number
    source?: $Enums.HealthDataSource
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutHealthLogsInput
  }

  export type HealthLogUncheckedCreateInput = {
    id?: number
    userId: number
    date: Date | string
    metricType: $Enums.HealthMetricType
    value: number
    source?: $Enums.HealthDataSource
    createdAt?: Date | string
  }

  export type HealthLogUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    metricType?: EnumHealthMetricTypeFieldUpdateOperationsInput | $Enums.HealthMetricType
    value?: FloatFieldUpdateOperationsInput | number
    source?: EnumHealthDataSourceFieldUpdateOperationsInput | $Enums.HealthDataSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHealthLogsNestedInput
  }

  export type HealthLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    metricType?: EnumHealthMetricTypeFieldUpdateOperationsInput | $Enums.HealthMetricType
    value?: FloatFieldUpdateOperationsInput | number
    source?: EnumHealthDataSourceFieldUpdateOperationsInput | $Enums.HealthDataSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HealthLogCreateManyInput = {
    id?: number
    userId: number
    date: Date | string
    metricType: $Enums.HealthMetricType
    value: number
    source?: $Enums.HealthDataSource
    createdAt?: Date | string
  }

  export type HealthLogUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    metricType?: EnumHealthMetricTypeFieldUpdateOperationsInput | $Enums.HealthMetricType
    value?: FloatFieldUpdateOperationsInput | number
    source?: EnumHealthDataSourceFieldUpdateOperationsInput | $Enums.HealthDataSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HealthLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    metricType?: EnumHealthMetricTypeFieldUpdateOperationsInput | $Enums.HealthMetricType
    value?: FloatFieldUpdateOperationsInput | number
    source?: EnumHealthDataSourceFieldUpdateOperationsInput | $Enums.HealthDataSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BadgeDefinitionCreateInput = {
    name: string
    description: string
    criteria: JsonNullValueInput | InputJsonValue
    icon?: string | null
    createdAt?: Date | string
    userBadges?: UserBadgeCreateNestedManyWithoutBadgeInput
    questsRewarded?: QuestDefinitionCreateNestedManyWithoutBadgeRewardInput
  }

  export type BadgeDefinitionUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    criteria: JsonNullValueInput | InputJsonValue
    icon?: string | null
    createdAt?: Date | string
    userBadges?: UserBadgeUncheckedCreateNestedManyWithoutBadgeInput
    questsRewarded?: QuestDefinitionUncheckedCreateNestedManyWithoutBadgeRewardInput
  }

  export type BadgeDefinitionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    criteria?: JsonNullValueInput | InputJsonValue
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userBadges?: UserBadgeUpdateManyWithoutBadgeNestedInput
    questsRewarded?: QuestDefinitionUpdateManyWithoutBadgeRewardNestedInput
  }

  export type BadgeDefinitionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    criteria?: JsonNullValueInput | InputJsonValue
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userBadges?: UserBadgeUncheckedUpdateManyWithoutBadgeNestedInput
    questsRewarded?: QuestDefinitionUncheckedUpdateManyWithoutBadgeRewardNestedInput
  }

  export type BadgeDefinitionCreateManyInput = {
    id?: number
    name: string
    description: string
    criteria: JsonNullValueInput | InputJsonValue
    icon?: string | null
    createdAt?: Date | string
  }

  export type BadgeDefinitionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    criteria?: JsonNullValueInput | InputJsonValue
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BadgeDefinitionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    criteria?: JsonNullValueInput | InputJsonValue
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeCreateInput = {
    earnedDate?: Date | string
    user: UserCreateNestedOneWithoutUserBadgesInput
    badge: BadgeDefinitionCreateNestedOneWithoutUserBadgesInput
  }

  export type UserBadgeUncheckedCreateInput = {
    id?: number
    userId: number
    badgeId: number
    earnedDate?: Date | string
  }

  export type UserBadgeUpdateInput = {
    earnedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserBadgesNestedInput
    badge?: BadgeDefinitionUpdateOneRequiredWithoutUserBadgesNestedInput
  }

  export type UserBadgeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    badgeId?: IntFieldUpdateOperationsInput | number
    earnedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeCreateManyInput = {
    id?: number
    userId: number
    badgeId: number
    earnedDate?: Date | string
  }

  export type UserBadgeUpdateManyMutationInput = {
    earnedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    badgeId?: IntFieldUpdateOperationsInput | number
    earnedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestDefinitionCreateInput = {
    type: $Enums.QuestType
    title: string
    description: string
    criteria: JsonNullValueInput | InputJsonValue
    xpReward?: number
    isActive?: boolean
    createdAt?: Date | string
    badgeReward?: BadgeDefinitionCreateNestedOneWithoutQuestsRewardedInput
    userQuests?: UserQuestProgressCreateNestedManyWithoutQuestInput
    aiOutputs?: AIOutputCreateNestedManyWithoutRelatedQuestInput
  }

  export type QuestDefinitionUncheckedCreateInput = {
    id?: number
    type: $Enums.QuestType
    title: string
    description: string
    criteria: JsonNullValueInput | InputJsonValue
    xpReward?: number
    badgeRewardId?: number | null
    isActive?: boolean
    createdAt?: Date | string
    userQuests?: UserQuestProgressUncheckedCreateNestedManyWithoutQuestInput
    aiOutputs?: AIOutputUncheckedCreateNestedManyWithoutRelatedQuestInput
  }

  export type QuestDefinitionUpdateInput = {
    type?: EnumQuestTypeFieldUpdateOperationsInput | $Enums.QuestType
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    criteria?: JsonNullValueInput | InputJsonValue
    xpReward?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badgeReward?: BadgeDefinitionUpdateOneWithoutQuestsRewardedNestedInput
    userQuests?: UserQuestProgressUpdateManyWithoutQuestNestedInput
    aiOutputs?: AIOutputUpdateManyWithoutRelatedQuestNestedInput
  }

  export type QuestDefinitionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumQuestTypeFieldUpdateOperationsInput | $Enums.QuestType
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    criteria?: JsonNullValueInput | InputJsonValue
    xpReward?: IntFieldUpdateOperationsInput | number
    badgeRewardId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userQuests?: UserQuestProgressUncheckedUpdateManyWithoutQuestNestedInput
    aiOutputs?: AIOutputUncheckedUpdateManyWithoutRelatedQuestNestedInput
  }

  export type QuestDefinitionCreateManyInput = {
    id?: number
    type: $Enums.QuestType
    title: string
    description: string
    criteria: JsonNullValueInput | InputJsonValue
    xpReward?: number
    badgeRewardId?: number | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type QuestDefinitionUpdateManyMutationInput = {
    type?: EnumQuestTypeFieldUpdateOperationsInput | $Enums.QuestType
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    criteria?: JsonNullValueInput | InputJsonValue
    xpReward?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestDefinitionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumQuestTypeFieldUpdateOperationsInput | $Enums.QuestType
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    criteria?: JsonNullValueInput | InputJsonValue
    xpReward?: IntFieldUpdateOperationsInput | number
    badgeRewardId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuestProgressCreateInput = {
    status?: $Enums.QuestStatus
    progressData?: NullableJsonNullValueInput | InputJsonValue
    startDate?: Date | string
    completionDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserQuestsInput
    quest: QuestDefinitionCreateNestedOneWithoutUserQuestsInput
  }

  export type UserQuestProgressUncheckedCreateInput = {
    id?: number
    userId: number
    questId: number
    status?: $Enums.QuestStatus
    progressData?: NullableJsonNullValueInput | InputJsonValue
    startDate?: Date | string
    completionDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserQuestProgressUpdateInput = {
    status?: EnumQuestStatusFieldUpdateOperationsInput | $Enums.QuestStatus
    progressData?: NullableJsonNullValueInput | InputJsonValue
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserQuestsNestedInput
    quest?: QuestDefinitionUpdateOneRequiredWithoutUserQuestsNestedInput
  }

  export type UserQuestProgressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    questId?: IntFieldUpdateOperationsInput | number
    status?: EnumQuestStatusFieldUpdateOperationsInput | $Enums.QuestStatus
    progressData?: NullableJsonNullValueInput | InputJsonValue
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuestProgressCreateManyInput = {
    id?: number
    userId: number
    questId: number
    status?: $Enums.QuestStatus
    progressData?: NullableJsonNullValueInput | InputJsonValue
    startDate?: Date | string
    completionDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserQuestProgressUpdateManyMutationInput = {
    status?: EnumQuestStatusFieldUpdateOperationsInput | $Enums.QuestStatus
    progressData?: NullableJsonNullValueInput | InputJsonValue
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuestProgressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    questId?: IntFieldUpdateOperationsInput | number
    status?: EnumQuestStatusFieldUpdateOperationsInput | $Enums.QuestStatus
    progressData?: NullableJsonNullValueInput | InputJsonValue
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIOutputCreateInput = {
    type: $Enums.AIOutputType
    text: string
    createdAt?: Date | string
    seenByUser?: boolean
    user: UserCreateNestedOneWithoutAiOutputsInput
    relatedQuest?: QuestDefinitionCreateNestedOneWithoutAiOutputsInput
  }

  export type AIOutputUncheckedCreateInput = {
    id?: number
    userId: number
    type: $Enums.AIOutputType
    text: string
    relatedQuestId?: number | null
    createdAt?: Date | string
    seenByUser?: boolean
  }

  export type AIOutputUpdateInput = {
    type?: EnumAIOutputTypeFieldUpdateOperationsInput | $Enums.AIOutputType
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seenByUser?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutAiOutputsNestedInput
    relatedQuest?: QuestDefinitionUpdateOneWithoutAiOutputsNestedInput
  }

  export type AIOutputUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumAIOutputTypeFieldUpdateOperationsInput | $Enums.AIOutputType
    text?: StringFieldUpdateOperationsInput | string
    relatedQuestId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seenByUser?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AIOutputCreateManyInput = {
    id?: number
    userId: number
    type: $Enums.AIOutputType
    text: string
    relatedQuestId?: number | null
    createdAt?: Date | string
    seenByUser?: boolean
  }

  export type AIOutputUpdateManyMutationInput = {
    type?: EnumAIOutputTypeFieldUpdateOperationsInput | $Enums.AIOutputType
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seenByUser?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AIOutputUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumAIOutputTypeFieldUpdateOperationsInput | $Enums.AIOutputType
    text?: StringFieldUpdateOperationsInput | string
    relatedQuestId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seenByUser?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserSettingsCreateInput = {
    notificationPrefs?: NullableJsonNullValueInput | InputJsonValue
    privacyFlags?: NullableJsonNullValueInput | InputJsonValue
    aiInteractionLevel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSettingsInput
  }

  export type UserSettingsUncheckedCreateInput = {
    id?: number
    userId: number
    notificationPrefs?: NullableJsonNullValueInput | InputJsonValue
    privacyFlags?: NullableJsonNullValueInput | InputJsonValue
    aiInteractionLevel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSettingsUpdateInput = {
    notificationPrefs?: NullableJsonNullValueInput | InputJsonValue
    privacyFlags?: NullableJsonNullValueInput | InputJsonValue
    aiInteractionLevel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSettingsNestedInput
  }

  export type UserSettingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    notificationPrefs?: NullableJsonNullValueInput | InputJsonValue
    privacyFlags?: NullableJsonNullValueInput | InputJsonValue
    aiInteractionLevel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSettingsCreateManyInput = {
    id?: number
    userId: number
    notificationPrefs?: NullableJsonNullValueInput | InputJsonValue
    privacyFlags?: NullableJsonNullValueInput | InputJsonValue
    aiInteractionLevel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSettingsUpdateManyMutationInput = {
    notificationPrefs?: NullableJsonNullValueInput | InputJsonValue
    privacyFlags?: NullableJsonNullValueInput | InputJsonValue
    aiInteractionLevel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSettingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    notificationPrefs?: NullableJsonNullValueInput | InputJsonValue
    privacyFlags?: NullableJsonNullValueInput | InputJsonValue
    aiInteractionLevel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type HabitDefinitionListRelationFilter = {
    every?: HabitDefinitionWhereInput
    some?: HabitDefinitionWhereInput
    none?: HabitDefinitionWhereInput
  }

  export type HabitLogListRelationFilter = {
    every?: HabitLogWhereInput
    some?: HabitLogWhereInput
    none?: HabitLogWhereInput
  }

  export type HealthLogListRelationFilter = {
    every?: HealthLogWhereInput
    some?: HealthLogWhereInput
    none?: HealthLogWhereInput
  }

  export type UserBadgeListRelationFilter = {
    every?: UserBadgeWhereInput
    some?: UserBadgeWhereInput
    none?: UserBadgeWhereInput
  }

  export type UserQuestProgressListRelationFilter = {
    every?: UserQuestProgressWhereInput
    some?: UserQuestProgressWhereInput
    none?: UserQuestProgressWhereInput
  }

  export type UserSettingsNullableScalarRelationFilter = {
    is?: UserSettingsWhereInput | null
    isNot?: UserSettingsWhereInput | null
  }

  export type AIOutputListRelationFilter = {
    every?: AIOutputWhereInput
    some?: AIOutputWhereInput
    none?: AIOutputWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type HabitDefinitionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HabitLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HealthLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserBadgeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserQuestProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AIOutputOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    hashedRefreshToken?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    hashedRefreshToken?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    hashedRefreshToken?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    avatarConfig?: SortOrder
    currentLevel?: SortOrder
    currentXP?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currentLevel?: SortOrder
    currentXP?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    currentLevel?: SortOrder
    currentXP?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    currentLevel?: SortOrder
    currentXP?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currentLevel?: SortOrder
    currentXP?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type HabitDefinitionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    frequency?: SortOrder
    target?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HabitDefinitionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    target?: SortOrder
  }

  export type HabitDefinitionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    frequency?: SortOrder
    target?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HabitDefinitionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    frequency?: SortOrder
    target?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HabitDefinitionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    target?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type HabitDefinitionScalarRelationFilter = {
    is?: HabitDefinitionWhereInput
    isNot?: HabitDefinitionWhereInput
  }

  export type HabitLogCountOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    userId?: SortOrder
    completionDate?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type HabitLogAvgOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    userId?: SortOrder
  }

  export type HabitLogMaxOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    userId?: SortOrder
    completionDate?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type HabitLogMinOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    userId?: SortOrder
    completionDate?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type HabitLogSumOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    userId?: SortOrder
  }

  export type EnumHealthMetricTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.HealthMetricType | EnumHealthMetricTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HealthMetricType[] | ListEnumHealthMetricTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HealthMetricType[] | ListEnumHealthMetricTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHealthMetricTypeFilter<$PrismaModel> | $Enums.HealthMetricType
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumHealthDataSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.HealthDataSource | EnumHealthDataSourceFieldRefInput<$PrismaModel>
    in?: $Enums.HealthDataSource[] | ListEnumHealthDataSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.HealthDataSource[] | ListEnumHealthDataSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumHealthDataSourceFilter<$PrismaModel> | $Enums.HealthDataSource
  }

  export type HealthLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    metricType?: SortOrder
    value?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type HealthLogAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    value?: SortOrder
  }

  export type HealthLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    metricType?: SortOrder
    value?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type HealthLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    metricType?: SortOrder
    value?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type HealthLogSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    value?: SortOrder
  }

  export type EnumHealthMetricTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HealthMetricType | EnumHealthMetricTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HealthMetricType[] | ListEnumHealthMetricTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HealthMetricType[] | ListEnumHealthMetricTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHealthMetricTypeWithAggregatesFilter<$PrismaModel> | $Enums.HealthMetricType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHealthMetricTypeFilter<$PrismaModel>
    _max?: NestedEnumHealthMetricTypeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumHealthDataSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HealthDataSource | EnumHealthDataSourceFieldRefInput<$PrismaModel>
    in?: $Enums.HealthDataSource[] | ListEnumHealthDataSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.HealthDataSource[] | ListEnumHealthDataSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumHealthDataSourceWithAggregatesFilter<$PrismaModel> | $Enums.HealthDataSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHealthDataSourceFilter<$PrismaModel>
    _max?: NestedEnumHealthDataSourceFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type QuestDefinitionListRelationFilter = {
    every?: QuestDefinitionWhereInput
    some?: QuestDefinitionWhereInput
    none?: QuestDefinitionWhereInput
  }

  export type QuestDefinitionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BadgeDefinitionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    criteria?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
  }

  export type BadgeDefinitionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BadgeDefinitionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
  }

  export type BadgeDefinitionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
  }

  export type BadgeDefinitionSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BadgeDefinitionScalarRelationFilter = {
    is?: BadgeDefinitionWhereInput
    isNot?: BadgeDefinitionWhereInput
  }

  export type UserBadgeUserIdBadgeIdCompoundUniqueInput = {
    userId: number
    badgeId: number
  }

  export type UserBadgeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    badgeId?: SortOrder
    earnedDate?: SortOrder
  }

  export type UserBadgeAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    badgeId?: SortOrder
  }

  export type UserBadgeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    badgeId?: SortOrder
    earnedDate?: SortOrder
  }

  export type UserBadgeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    badgeId?: SortOrder
    earnedDate?: SortOrder
  }

  export type UserBadgeSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    badgeId?: SortOrder
  }

  export type EnumQuestTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestType | EnumQuestTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestType[] | ListEnumQuestTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestType[] | ListEnumQuestTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestTypeFilter<$PrismaModel> | $Enums.QuestType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BadgeDefinitionNullableScalarRelationFilter = {
    is?: BadgeDefinitionWhereInput | null
    isNot?: BadgeDefinitionWhereInput | null
  }

  export type QuestDefinitionCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    criteria?: SortOrder
    xpReward?: SortOrder
    badgeRewardId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestDefinitionAvgOrderByAggregateInput = {
    id?: SortOrder
    xpReward?: SortOrder
    badgeRewardId?: SortOrder
  }

  export type QuestDefinitionMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    xpReward?: SortOrder
    badgeRewardId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestDefinitionMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    xpReward?: SortOrder
    badgeRewardId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestDefinitionSumOrderByAggregateInput = {
    id?: SortOrder
    xpReward?: SortOrder
    badgeRewardId?: SortOrder
  }

  export type EnumQuestTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestType | EnumQuestTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestType[] | ListEnumQuestTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestType[] | ListEnumQuestTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestTypeWithAggregatesFilter<$PrismaModel> | $Enums.QuestType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestTypeFilter<$PrismaModel>
    _max?: NestedEnumQuestTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumQuestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestStatus | EnumQuestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuestStatus[] | ListEnumQuestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestStatus[] | ListEnumQuestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestStatusFilter<$PrismaModel> | $Enums.QuestStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type QuestDefinitionScalarRelationFilter = {
    is?: QuestDefinitionWhereInput
    isNot?: QuestDefinitionWhereInput
  }

  export type UserQuestProgressUserIdQuestIdCompoundUniqueInput = {
    userId: number
    questId: number
  }

  export type UserQuestProgressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questId?: SortOrder
    status?: SortOrder
    progressData?: SortOrder
    startDate?: SortOrder
    completionDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserQuestProgressAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questId?: SortOrder
  }

  export type UserQuestProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questId?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    completionDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserQuestProgressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questId?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    completionDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserQuestProgressSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questId?: SortOrder
  }

  export type EnumQuestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestStatus | EnumQuestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuestStatus[] | ListEnumQuestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestStatus[] | ListEnumQuestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestStatusWithAggregatesFilter<$PrismaModel> | $Enums.QuestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestStatusFilter<$PrismaModel>
    _max?: NestedEnumQuestStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumAIOutputTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AIOutputType | EnumAIOutputTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AIOutputType[] | ListEnumAIOutputTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AIOutputType[] | ListEnumAIOutputTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAIOutputTypeFilter<$PrismaModel> | $Enums.AIOutputType
  }

  export type QuestDefinitionNullableScalarRelationFilter = {
    is?: QuestDefinitionWhereInput | null
    isNot?: QuestDefinitionWhereInput | null
  }

  export type AIOutputCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    text?: SortOrder
    relatedQuestId?: SortOrder
    createdAt?: SortOrder
    seenByUser?: SortOrder
  }

  export type AIOutputAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    relatedQuestId?: SortOrder
  }

  export type AIOutputMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    text?: SortOrder
    relatedQuestId?: SortOrder
    createdAt?: SortOrder
    seenByUser?: SortOrder
  }

  export type AIOutputMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    text?: SortOrder
    relatedQuestId?: SortOrder
    createdAt?: SortOrder
    seenByUser?: SortOrder
  }

  export type AIOutputSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    relatedQuestId?: SortOrder
  }

  export type EnumAIOutputTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AIOutputType | EnumAIOutputTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AIOutputType[] | ListEnumAIOutputTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AIOutputType[] | ListEnumAIOutputTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAIOutputTypeWithAggregatesFilter<$PrismaModel> | $Enums.AIOutputType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAIOutputTypeFilter<$PrismaModel>
    _max?: NestedEnumAIOutputTypeFilter<$PrismaModel>
  }

  export type UserSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    notificationPrefs?: SortOrder
    privacyFlags?: SortOrder
    aiInteractionLevel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSettingsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    aiInteractionLevel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    aiInteractionLevel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSettingsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type HabitDefinitionCreateNestedManyWithoutUserInput = {
    create?: XOR<HabitDefinitionCreateWithoutUserInput, HabitDefinitionUncheckedCreateWithoutUserInput> | HabitDefinitionCreateWithoutUserInput[] | HabitDefinitionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitDefinitionCreateOrConnectWithoutUserInput | HabitDefinitionCreateOrConnectWithoutUserInput[]
    createMany?: HabitDefinitionCreateManyUserInputEnvelope
    connect?: HabitDefinitionWhereUniqueInput | HabitDefinitionWhereUniqueInput[]
  }

  export type HabitLogCreateNestedManyWithoutUserInput = {
    create?: XOR<HabitLogCreateWithoutUserInput, HabitLogUncheckedCreateWithoutUserInput> | HabitLogCreateWithoutUserInput[] | HabitLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitLogCreateOrConnectWithoutUserInput | HabitLogCreateOrConnectWithoutUserInput[]
    createMany?: HabitLogCreateManyUserInputEnvelope
    connect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
  }

  export type HealthLogCreateNestedManyWithoutUserInput = {
    create?: XOR<HealthLogCreateWithoutUserInput, HealthLogUncheckedCreateWithoutUserInput> | HealthLogCreateWithoutUserInput[] | HealthLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HealthLogCreateOrConnectWithoutUserInput | HealthLogCreateOrConnectWithoutUserInput[]
    createMany?: HealthLogCreateManyUserInputEnvelope
    connect?: HealthLogWhereUniqueInput | HealthLogWhereUniqueInput[]
  }

  export type UserBadgeCreateNestedManyWithoutUserInput = {
    create?: XOR<UserBadgeCreateWithoutUserInput, UserBadgeUncheckedCreateWithoutUserInput> | UserBadgeCreateWithoutUserInput[] | UserBadgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutUserInput | UserBadgeCreateOrConnectWithoutUserInput[]
    createMany?: UserBadgeCreateManyUserInputEnvelope
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
  }

  export type UserQuestProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<UserQuestProgressCreateWithoutUserInput, UserQuestProgressUncheckedCreateWithoutUserInput> | UserQuestProgressCreateWithoutUserInput[] | UserQuestProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserQuestProgressCreateOrConnectWithoutUserInput | UserQuestProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserQuestProgressCreateManyUserInputEnvelope
    connect?: UserQuestProgressWhereUniqueInput | UserQuestProgressWhereUniqueInput[]
  }

  export type UserSettingsCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    connect?: UserSettingsWhereUniqueInput
  }

  export type AIOutputCreateNestedManyWithoutUserInput = {
    create?: XOR<AIOutputCreateWithoutUserInput, AIOutputUncheckedCreateWithoutUserInput> | AIOutputCreateWithoutUserInput[] | AIOutputUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AIOutputCreateOrConnectWithoutUserInput | AIOutputCreateOrConnectWithoutUserInput[]
    createMany?: AIOutputCreateManyUserInputEnvelope
    connect?: AIOutputWhereUniqueInput | AIOutputWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type HabitDefinitionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HabitDefinitionCreateWithoutUserInput, HabitDefinitionUncheckedCreateWithoutUserInput> | HabitDefinitionCreateWithoutUserInput[] | HabitDefinitionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitDefinitionCreateOrConnectWithoutUserInput | HabitDefinitionCreateOrConnectWithoutUserInput[]
    createMany?: HabitDefinitionCreateManyUserInputEnvelope
    connect?: HabitDefinitionWhereUniqueInput | HabitDefinitionWhereUniqueInput[]
  }

  export type HabitLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HabitLogCreateWithoutUserInput, HabitLogUncheckedCreateWithoutUserInput> | HabitLogCreateWithoutUserInput[] | HabitLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitLogCreateOrConnectWithoutUserInput | HabitLogCreateOrConnectWithoutUserInput[]
    createMany?: HabitLogCreateManyUserInputEnvelope
    connect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
  }

  export type HealthLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HealthLogCreateWithoutUserInput, HealthLogUncheckedCreateWithoutUserInput> | HealthLogCreateWithoutUserInput[] | HealthLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HealthLogCreateOrConnectWithoutUserInput | HealthLogCreateOrConnectWithoutUserInput[]
    createMany?: HealthLogCreateManyUserInputEnvelope
    connect?: HealthLogWhereUniqueInput | HealthLogWhereUniqueInput[]
  }

  export type UserBadgeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserBadgeCreateWithoutUserInput, UserBadgeUncheckedCreateWithoutUserInput> | UserBadgeCreateWithoutUserInput[] | UserBadgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutUserInput | UserBadgeCreateOrConnectWithoutUserInput[]
    createMany?: UserBadgeCreateManyUserInputEnvelope
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
  }

  export type UserQuestProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserQuestProgressCreateWithoutUserInput, UserQuestProgressUncheckedCreateWithoutUserInput> | UserQuestProgressCreateWithoutUserInput[] | UserQuestProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserQuestProgressCreateOrConnectWithoutUserInput | UserQuestProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserQuestProgressCreateManyUserInputEnvelope
    connect?: UserQuestProgressWhereUniqueInput | UserQuestProgressWhereUniqueInput[]
  }

  export type UserSettingsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    connect?: UserSettingsWhereUniqueInput
  }

  export type AIOutputUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AIOutputCreateWithoutUserInput, AIOutputUncheckedCreateWithoutUserInput> | AIOutputCreateWithoutUserInput[] | AIOutputUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AIOutputCreateOrConnectWithoutUserInput | AIOutputCreateOrConnectWithoutUserInput[]
    createMany?: AIOutputCreateManyUserInputEnvelope
    connect?: AIOutputWhereUniqueInput | AIOutputWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type HabitDefinitionUpdateManyWithoutUserNestedInput = {
    create?: XOR<HabitDefinitionCreateWithoutUserInput, HabitDefinitionUncheckedCreateWithoutUserInput> | HabitDefinitionCreateWithoutUserInput[] | HabitDefinitionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitDefinitionCreateOrConnectWithoutUserInput | HabitDefinitionCreateOrConnectWithoutUserInput[]
    upsert?: HabitDefinitionUpsertWithWhereUniqueWithoutUserInput | HabitDefinitionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HabitDefinitionCreateManyUserInputEnvelope
    set?: HabitDefinitionWhereUniqueInput | HabitDefinitionWhereUniqueInput[]
    disconnect?: HabitDefinitionWhereUniqueInput | HabitDefinitionWhereUniqueInput[]
    delete?: HabitDefinitionWhereUniqueInput | HabitDefinitionWhereUniqueInput[]
    connect?: HabitDefinitionWhereUniqueInput | HabitDefinitionWhereUniqueInput[]
    update?: HabitDefinitionUpdateWithWhereUniqueWithoutUserInput | HabitDefinitionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HabitDefinitionUpdateManyWithWhereWithoutUserInput | HabitDefinitionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HabitDefinitionScalarWhereInput | HabitDefinitionScalarWhereInput[]
  }

  export type HabitLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<HabitLogCreateWithoutUserInput, HabitLogUncheckedCreateWithoutUserInput> | HabitLogCreateWithoutUserInput[] | HabitLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitLogCreateOrConnectWithoutUserInput | HabitLogCreateOrConnectWithoutUserInput[]
    upsert?: HabitLogUpsertWithWhereUniqueWithoutUserInput | HabitLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HabitLogCreateManyUserInputEnvelope
    set?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    disconnect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    delete?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    connect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    update?: HabitLogUpdateWithWhereUniqueWithoutUserInput | HabitLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HabitLogUpdateManyWithWhereWithoutUserInput | HabitLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HabitLogScalarWhereInput | HabitLogScalarWhereInput[]
  }

  export type HealthLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<HealthLogCreateWithoutUserInput, HealthLogUncheckedCreateWithoutUserInput> | HealthLogCreateWithoutUserInput[] | HealthLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HealthLogCreateOrConnectWithoutUserInput | HealthLogCreateOrConnectWithoutUserInput[]
    upsert?: HealthLogUpsertWithWhereUniqueWithoutUserInput | HealthLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HealthLogCreateManyUserInputEnvelope
    set?: HealthLogWhereUniqueInput | HealthLogWhereUniqueInput[]
    disconnect?: HealthLogWhereUniqueInput | HealthLogWhereUniqueInput[]
    delete?: HealthLogWhereUniqueInput | HealthLogWhereUniqueInput[]
    connect?: HealthLogWhereUniqueInput | HealthLogWhereUniqueInput[]
    update?: HealthLogUpdateWithWhereUniqueWithoutUserInput | HealthLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HealthLogUpdateManyWithWhereWithoutUserInput | HealthLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HealthLogScalarWhereInput | HealthLogScalarWhereInput[]
  }

  export type UserBadgeUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserBadgeCreateWithoutUserInput, UserBadgeUncheckedCreateWithoutUserInput> | UserBadgeCreateWithoutUserInput[] | UserBadgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutUserInput | UserBadgeCreateOrConnectWithoutUserInput[]
    upsert?: UserBadgeUpsertWithWhereUniqueWithoutUserInput | UserBadgeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserBadgeCreateManyUserInputEnvelope
    set?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    disconnect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    delete?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    update?: UserBadgeUpdateWithWhereUniqueWithoutUserInput | UserBadgeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserBadgeUpdateManyWithWhereWithoutUserInput | UserBadgeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
  }

  export type UserQuestProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserQuestProgressCreateWithoutUserInput, UserQuestProgressUncheckedCreateWithoutUserInput> | UserQuestProgressCreateWithoutUserInput[] | UserQuestProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserQuestProgressCreateOrConnectWithoutUserInput | UserQuestProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserQuestProgressUpsertWithWhereUniqueWithoutUserInput | UserQuestProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserQuestProgressCreateManyUserInputEnvelope
    set?: UserQuestProgressWhereUniqueInput | UserQuestProgressWhereUniqueInput[]
    disconnect?: UserQuestProgressWhereUniqueInput | UserQuestProgressWhereUniqueInput[]
    delete?: UserQuestProgressWhereUniqueInput | UserQuestProgressWhereUniqueInput[]
    connect?: UserQuestProgressWhereUniqueInput | UserQuestProgressWhereUniqueInput[]
    update?: UserQuestProgressUpdateWithWhereUniqueWithoutUserInput | UserQuestProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserQuestProgressUpdateManyWithWhereWithoutUserInput | UserQuestProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserQuestProgressScalarWhereInput | UserQuestProgressScalarWhereInput[]
  }

  export type UserSettingsUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    upsert?: UserSettingsUpsertWithoutUserInput
    disconnect?: UserSettingsWhereInput | boolean
    delete?: UserSettingsWhereInput | boolean
    connect?: UserSettingsWhereUniqueInput
    update?: XOR<XOR<UserSettingsUpdateToOneWithWhereWithoutUserInput, UserSettingsUpdateWithoutUserInput>, UserSettingsUncheckedUpdateWithoutUserInput>
  }

  export type AIOutputUpdateManyWithoutUserNestedInput = {
    create?: XOR<AIOutputCreateWithoutUserInput, AIOutputUncheckedCreateWithoutUserInput> | AIOutputCreateWithoutUserInput[] | AIOutputUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AIOutputCreateOrConnectWithoutUserInput | AIOutputCreateOrConnectWithoutUserInput[]
    upsert?: AIOutputUpsertWithWhereUniqueWithoutUserInput | AIOutputUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AIOutputCreateManyUserInputEnvelope
    set?: AIOutputWhereUniqueInput | AIOutputWhereUniqueInput[]
    disconnect?: AIOutputWhereUniqueInput | AIOutputWhereUniqueInput[]
    delete?: AIOutputWhereUniqueInput | AIOutputWhereUniqueInput[]
    connect?: AIOutputWhereUniqueInput | AIOutputWhereUniqueInput[]
    update?: AIOutputUpdateWithWhereUniqueWithoutUserInput | AIOutputUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AIOutputUpdateManyWithWhereWithoutUserInput | AIOutputUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AIOutputScalarWhereInput | AIOutputScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type HabitDefinitionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HabitDefinitionCreateWithoutUserInput, HabitDefinitionUncheckedCreateWithoutUserInput> | HabitDefinitionCreateWithoutUserInput[] | HabitDefinitionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitDefinitionCreateOrConnectWithoutUserInput | HabitDefinitionCreateOrConnectWithoutUserInput[]
    upsert?: HabitDefinitionUpsertWithWhereUniqueWithoutUserInput | HabitDefinitionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HabitDefinitionCreateManyUserInputEnvelope
    set?: HabitDefinitionWhereUniqueInput | HabitDefinitionWhereUniqueInput[]
    disconnect?: HabitDefinitionWhereUniqueInput | HabitDefinitionWhereUniqueInput[]
    delete?: HabitDefinitionWhereUniqueInput | HabitDefinitionWhereUniqueInput[]
    connect?: HabitDefinitionWhereUniqueInput | HabitDefinitionWhereUniqueInput[]
    update?: HabitDefinitionUpdateWithWhereUniqueWithoutUserInput | HabitDefinitionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HabitDefinitionUpdateManyWithWhereWithoutUserInput | HabitDefinitionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HabitDefinitionScalarWhereInput | HabitDefinitionScalarWhereInput[]
  }

  export type HabitLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HabitLogCreateWithoutUserInput, HabitLogUncheckedCreateWithoutUserInput> | HabitLogCreateWithoutUserInput[] | HabitLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitLogCreateOrConnectWithoutUserInput | HabitLogCreateOrConnectWithoutUserInput[]
    upsert?: HabitLogUpsertWithWhereUniqueWithoutUserInput | HabitLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HabitLogCreateManyUserInputEnvelope
    set?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    disconnect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    delete?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    connect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    update?: HabitLogUpdateWithWhereUniqueWithoutUserInput | HabitLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HabitLogUpdateManyWithWhereWithoutUserInput | HabitLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HabitLogScalarWhereInput | HabitLogScalarWhereInput[]
  }

  export type HealthLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HealthLogCreateWithoutUserInput, HealthLogUncheckedCreateWithoutUserInput> | HealthLogCreateWithoutUserInput[] | HealthLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HealthLogCreateOrConnectWithoutUserInput | HealthLogCreateOrConnectWithoutUserInput[]
    upsert?: HealthLogUpsertWithWhereUniqueWithoutUserInput | HealthLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HealthLogCreateManyUserInputEnvelope
    set?: HealthLogWhereUniqueInput | HealthLogWhereUniqueInput[]
    disconnect?: HealthLogWhereUniqueInput | HealthLogWhereUniqueInput[]
    delete?: HealthLogWhereUniqueInput | HealthLogWhereUniqueInput[]
    connect?: HealthLogWhereUniqueInput | HealthLogWhereUniqueInput[]
    update?: HealthLogUpdateWithWhereUniqueWithoutUserInput | HealthLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HealthLogUpdateManyWithWhereWithoutUserInput | HealthLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HealthLogScalarWhereInput | HealthLogScalarWhereInput[]
  }

  export type UserBadgeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserBadgeCreateWithoutUserInput, UserBadgeUncheckedCreateWithoutUserInput> | UserBadgeCreateWithoutUserInput[] | UserBadgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutUserInput | UserBadgeCreateOrConnectWithoutUserInput[]
    upsert?: UserBadgeUpsertWithWhereUniqueWithoutUserInput | UserBadgeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserBadgeCreateManyUserInputEnvelope
    set?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    disconnect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    delete?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    update?: UserBadgeUpdateWithWhereUniqueWithoutUserInput | UserBadgeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserBadgeUpdateManyWithWhereWithoutUserInput | UserBadgeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
  }

  export type UserQuestProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserQuestProgressCreateWithoutUserInput, UserQuestProgressUncheckedCreateWithoutUserInput> | UserQuestProgressCreateWithoutUserInput[] | UserQuestProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserQuestProgressCreateOrConnectWithoutUserInput | UserQuestProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserQuestProgressUpsertWithWhereUniqueWithoutUserInput | UserQuestProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserQuestProgressCreateManyUserInputEnvelope
    set?: UserQuestProgressWhereUniqueInput | UserQuestProgressWhereUniqueInput[]
    disconnect?: UserQuestProgressWhereUniqueInput | UserQuestProgressWhereUniqueInput[]
    delete?: UserQuestProgressWhereUniqueInput | UserQuestProgressWhereUniqueInput[]
    connect?: UserQuestProgressWhereUniqueInput | UserQuestProgressWhereUniqueInput[]
    update?: UserQuestProgressUpdateWithWhereUniqueWithoutUserInput | UserQuestProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserQuestProgressUpdateManyWithWhereWithoutUserInput | UserQuestProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserQuestProgressScalarWhereInput | UserQuestProgressScalarWhereInput[]
  }

  export type UserSettingsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    upsert?: UserSettingsUpsertWithoutUserInput
    disconnect?: UserSettingsWhereInput | boolean
    delete?: UserSettingsWhereInput | boolean
    connect?: UserSettingsWhereUniqueInput
    update?: XOR<XOR<UserSettingsUpdateToOneWithWhereWithoutUserInput, UserSettingsUpdateWithoutUserInput>, UserSettingsUncheckedUpdateWithoutUserInput>
  }

  export type AIOutputUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AIOutputCreateWithoutUserInput, AIOutputUncheckedCreateWithoutUserInput> | AIOutputCreateWithoutUserInput[] | AIOutputUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AIOutputCreateOrConnectWithoutUserInput | AIOutputCreateOrConnectWithoutUserInput[]
    upsert?: AIOutputUpsertWithWhereUniqueWithoutUserInput | AIOutputUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AIOutputCreateManyUserInputEnvelope
    set?: AIOutputWhereUniqueInput | AIOutputWhereUniqueInput[]
    disconnect?: AIOutputWhereUniqueInput | AIOutputWhereUniqueInput[]
    delete?: AIOutputWhereUniqueInput | AIOutputWhereUniqueInput[]
    connect?: AIOutputWhereUniqueInput | AIOutputWhereUniqueInput[]
    update?: AIOutputUpdateWithWhereUniqueWithoutUserInput | AIOutputUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AIOutputUpdateManyWithWhereWithoutUserInput | AIOutputUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AIOutputScalarWhereInput | AIOutputScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserCreateNestedOneWithoutHabitDefinitionsInput = {
    create?: XOR<UserCreateWithoutHabitDefinitionsInput, UserUncheckedCreateWithoutHabitDefinitionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHabitDefinitionsInput
    connect?: UserWhereUniqueInput
  }

  export type HabitLogCreateNestedManyWithoutHabitDefinitionInput = {
    create?: XOR<HabitLogCreateWithoutHabitDefinitionInput, HabitLogUncheckedCreateWithoutHabitDefinitionInput> | HabitLogCreateWithoutHabitDefinitionInput[] | HabitLogUncheckedCreateWithoutHabitDefinitionInput[]
    connectOrCreate?: HabitLogCreateOrConnectWithoutHabitDefinitionInput | HabitLogCreateOrConnectWithoutHabitDefinitionInput[]
    createMany?: HabitLogCreateManyHabitDefinitionInputEnvelope
    connect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
  }

  export type HabitLogUncheckedCreateNestedManyWithoutHabitDefinitionInput = {
    create?: XOR<HabitLogCreateWithoutHabitDefinitionInput, HabitLogUncheckedCreateWithoutHabitDefinitionInput> | HabitLogCreateWithoutHabitDefinitionInput[] | HabitLogUncheckedCreateWithoutHabitDefinitionInput[]
    connectOrCreate?: HabitLogCreateOrConnectWithoutHabitDefinitionInput | HabitLogCreateOrConnectWithoutHabitDefinitionInput[]
    createMany?: HabitLogCreateManyHabitDefinitionInputEnvelope
    connect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutHabitDefinitionsNestedInput = {
    create?: XOR<UserCreateWithoutHabitDefinitionsInput, UserUncheckedCreateWithoutHabitDefinitionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHabitDefinitionsInput
    upsert?: UserUpsertWithoutHabitDefinitionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHabitDefinitionsInput, UserUpdateWithoutHabitDefinitionsInput>, UserUncheckedUpdateWithoutHabitDefinitionsInput>
  }

  export type HabitLogUpdateManyWithoutHabitDefinitionNestedInput = {
    create?: XOR<HabitLogCreateWithoutHabitDefinitionInput, HabitLogUncheckedCreateWithoutHabitDefinitionInput> | HabitLogCreateWithoutHabitDefinitionInput[] | HabitLogUncheckedCreateWithoutHabitDefinitionInput[]
    connectOrCreate?: HabitLogCreateOrConnectWithoutHabitDefinitionInput | HabitLogCreateOrConnectWithoutHabitDefinitionInput[]
    upsert?: HabitLogUpsertWithWhereUniqueWithoutHabitDefinitionInput | HabitLogUpsertWithWhereUniqueWithoutHabitDefinitionInput[]
    createMany?: HabitLogCreateManyHabitDefinitionInputEnvelope
    set?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    disconnect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    delete?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    connect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    update?: HabitLogUpdateWithWhereUniqueWithoutHabitDefinitionInput | HabitLogUpdateWithWhereUniqueWithoutHabitDefinitionInput[]
    updateMany?: HabitLogUpdateManyWithWhereWithoutHabitDefinitionInput | HabitLogUpdateManyWithWhereWithoutHabitDefinitionInput[]
    deleteMany?: HabitLogScalarWhereInput | HabitLogScalarWhereInput[]
  }

  export type HabitLogUncheckedUpdateManyWithoutHabitDefinitionNestedInput = {
    create?: XOR<HabitLogCreateWithoutHabitDefinitionInput, HabitLogUncheckedCreateWithoutHabitDefinitionInput> | HabitLogCreateWithoutHabitDefinitionInput[] | HabitLogUncheckedCreateWithoutHabitDefinitionInput[]
    connectOrCreate?: HabitLogCreateOrConnectWithoutHabitDefinitionInput | HabitLogCreateOrConnectWithoutHabitDefinitionInput[]
    upsert?: HabitLogUpsertWithWhereUniqueWithoutHabitDefinitionInput | HabitLogUpsertWithWhereUniqueWithoutHabitDefinitionInput[]
    createMany?: HabitLogCreateManyHabitDefinitionInputEnvelope
    set?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    disconnect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    delete?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    connect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    update?: HabitLogUpdateWithWhereUniqueWithoutHabitDefinitionInput | HabitLogUpdateWithWhereUniqueWithoutHabitDefinitionInput[]
    updateMany?: HabitLogUpdateManyWithWhereWithoutHabitDefinitionInput | HabitLogUpdateManyWithWhereWithoutHabitDefinitionInput[]
    deleteMany?: HabitLogScalarWhereInput | HabitLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutHabitLogsInput = {
    create?: XOR<UserCreateWithoutHabitLogsInput, UserUncheckedCreateWithoutHabitLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHabitLogsInput
    connect?: UserWhereUniqueInput
  }

  export type HabitDefinitionCreateNestedOneWithoutHabitLogsInput = {
    create?: XOR<HabitDefinitionCreateWithoutHabitLogsInput, HabitDefinitionUncheckedCreateWithoutHabitLogsInput>
    connectOrCreate?: HabitDefinitionCreateOrConnectWithoutHabitLogsInput
    connect?: HabitDefinitionWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutHabitLogsNestedInput = {
    create?: XOR<UserCreateWithoutHabitLogsInput, UserUncheckedCreateWithoutHabitLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHabitLogsInput
    upsert?: UserUpsertWithoutHabitLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHabitLogsInput, UserUpdateWithoutHabitLogsInput>, UserUncheckedUpdateWithoutHabitLogsInput>
  }

  export type HabitDefinitionUpdateOneRequiredWithoutHabitLogsNestedInput = {
    create?: XOR<HabitDefinitionCreateWithoutHabitLogsInput, HabitDefinitionUncheckedCreateWithoutHabitLogsInput>
    connectOrCreate?: HabitDefinitionCreateOrConnectWithoutHabitLogsInput
    upsert?: HabitDefinitionUpsertWithoutHabitLogsInput
    connect?: HabitDefinitionWhereUniqueInput
    update?: XOR<XOR<HabitDefinitionUpdateToOneWithWhereWithoutHabitLogsInput, HabitDefinitionUpdateWithoutHabitLogsInput>, HabitDefinitionUncheckedUpdateWithoutHabitLogsInput>
  }

  export type UserCreateNestedOneWithoutHealthLogsInput = {
    create?: XOR<UserCreateWithoutHealthLogsInput, UserUncheckedCreateWithoutHealthLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHealthLogsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumHealthMetricTypeFieldUpdateOperationsInput = {
    set?: $Enums.HealthMetricType
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumHealthDataSourceFieldUpdateOperationsInput = {
    set?: $Enums.HealthDataSource
  }

  export type UserUpdateOneRequiredWithoutHealthLogsNestedInput = {
    create?: XOR<UserCreateWithoutHealthLogsInput, UserUncheckedCreateWithoutHealthLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHealthLogsInput
    upsert?: UserUpsertWithoutHealthLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHealthLogsInput, UserUpdateWithoutHealthLogsInput>, UserUncheckedUpdateWithoutHealthLogsInput>
  }

  export type UserBadgeCreateNestedManyWithoutBadgeInput = {
    create?: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput> | UserBadgeCreateWithoutBadgeInput[] | UserBadgeUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutBadgeInput | UserBadgeCreateOrConnectWithoutBadgeInput[]
    createMany?: UserBadgeCreateManyBadgeInputEnvelope
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
  }

  export type QuestDefinitionCreateNestedManyWithoutBadgeRewardInput = {
    create?: XOR<QuestDefinitionCreateWithoutBadgeRewardInput, QuestDefinitionUncheckedCreateWithoutBadgeRewardInput> | QuestDefinitionCreateWithoutBadgeRewardInput[] | QuestDefinitionUncheckedCreateWithoutBadgeRewardInput[]
    connectOrCreate?: QuestDefinitionCreateOrConnectWithoutBadgeRewardInput | QuestDefinitionCreateOrConnectWithoutBadgeRewardInput[]
    createMany?: QuestDefinitionCreateManyBadgeRewardInputEnvelope
    connect?: QuestDefinitionWhereUniqueInput | QuestDefinitionWhereUniqueInput[]
  }

  export type UserBadgeUncheckedCreateNestedManyWithoutBadgeInput = {
    create?: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput> | UserBadgeCreateWithoutBadgeInput[] | UserBadgeUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutBadgeInput | UserBadgeCreateOrConnectWithoutBadgeInput[]
    createMany?: UserBadgeCreateManyBadgeInputEnvelope
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
  }

  export type QuestDefinitionUncheckedCreateNestedManyWithoutBadgeRewardInput = {
    create?: XOR<QuestDefinitionCreateWithoutBadgeRewardInput, QuestDefinitionUncheckedCreateWithoutBadgeRewardInput> | QuestDefinitionCreateWithoutBadgeRewardInput[] | QuestDefinitionUncheckedCreateWithoutBadgeRewardInput[]
    connectOrCreate?: QuestDefinitionCreateOrConnectWithoutBadgeRewardInput | QuestDefinitionCreateOrConnectWithoutBadgeRewardInput[]
    createMany?: QuestDefinitionCreateManyBadgeRewardInputEnvelope
    connect?: QuestDefinitionWhereUniqueInput | QuestDefinitionWhereUniqueInput[]
  }

  export type UserBadgeUpdateManyWithoutBadgeNestedInput = {
    create?: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput> | UserBadgeCreateWithoutBadgeInput[] | UserBadgeUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutBadgeInput | UserBadgeCreateOrConnectWithoutBadgeInput[]
    upsert?: UserBadgeUpsertWithWhereUniqueWithoutBadgeInput | UserBadgeUpsertWithWhereUniqueWithoutBadgeInput[]
    createMany?: UserBadgeCreateManyBadgeInputEnvelope
    set?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    disconnect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    delete?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    update?: UserBadgeUpdateWithWhereUniqueWithoutBadgeInput | UserBadgeUpdateWithWhereUniqueWithoutBadgeInput[]
    updateMany?: UserBadgeUpdateManyWithWhereWithoutBadgeInput | UserBadgeUpdateManyWithWhereWithoutBadgeInput[]
    deleteMany?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
  }

  export type QuestDefinitionUpdateManyWithoutBadgeRewardNestedInput = {
    create?: XOR<QuestDefinitionCreateWithoutBadgeRewardInput, QuestDefinitionUncheckedCreateWithoutBadgeRewardInput> | QuestDefinitionCreateWithoutBadgeRewardInput[] | QuestDefinitionUncheckedCreateWithoutBadgeRewardInput[]
    connectOrCreate?: QuestDefinitionCreateOrConnectWithoutBadgeRewardInput | QuestDefinitionCreateOrConnectWithoutBadgeRewardInput[]
    upsert?: QuestDefinitionUpsertWithWhereUniqueWithoutBadgeRewardInput | QuestDefinitionUpsertWithWhereUniqueWithoutBadgeRewardInput[]
    createMany?: QuestDefinitionCreateManyBadgeRewardInputEnvelope
    set?: QuestDefinitionWhereUniqueInput | QuestDefinitionWhereUniqueInput[]
    disconnect?: QuestDefinitionWhereUniqueInput | QuestDefinitionWhereUniqueInput[]
    delete?: QuestDefinitionWhereUniqueInput | QuestDefinitionWhereUniqueInput[]
    connect?: QuestDefinitionWhereUniqueInput | QuestDefinitionWhereUniqueInput[]
    update?: QuestDefinitionUpdateWithWhereUniqueWithoutBadgeRewardInput | QuestDefinitionUpdateWithWhereUniqueWithoutBadgeRewardInput[]
    updateMany?: QuestDefinitionUpdateManyWithWhereWithoutBadgeRewardInput | QuestDefinitionUpdateManyWithWhereWithoutBadgeRewardInput[]
    deleteMany?: QuestDefinitionScalarWhereInput | QuestDefinitionScalarWhereInput[]
  }

  export type UserBadgeUncheckedUpdateManyWithoutBadgeNestedInput = {
    create?: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput> | UserBadgeCreateWithoutBadgeInput[] | UserBadgeUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutBadgeInput | UserBadgeCreateOrConnectWithoutBadgeInput[]
    upsert?: UserBadgeUpsertWithWhereUniqueWithoutBadgeInput | UserBadgeUpsertWithWhereUniqueWithoutBadgeInput[]
    createMany?: UserBadgeCreateManyBadgeInputEnvelope
    set?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    disconnect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    delete?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    update?: UserBadgeUpdateWithWhereUniqueWithoutBadgeInput | UserBadgeUpdateWithWhereUniqueWithoutBadgeInput[]
    updateMany?: UserBadgeUpdateManyWithWhereWithoutBadgeInput | UserBadgeUpdateManyWithWhereWithoutBadgeInput[]
    deleteMany?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
  }

  export type QuestDefinitionUncheckedUpdateManyWithoutBadgeRewardNestedInput = {
    create?: XOR<QuestDefinitionCreateWithoutBadgeRewardInput, QuestDefinitionUncheckedCreateWithoutBadgeRewardInput> | QuestDefinitionCreateWithoutBadgeRewardInput[] | QuestDefinitionUncheckedCreateWithoutBadgeRewardInput[]
    connectOrCreate?: QuestDefinitionCreateOrConnectWithoutBadgeRewardInput | QuestDefinitionCreateOrConnectWithoutBadgeRewardInput[]
    upsert?: QuestDefinitionUpsertWithWhereUniqueWithoutBadgeRewardInput | QuestDefinitionUpsertWithWhereUniqueWithoutBadgeRewardInput[]
    createMany?: QuestDefinitionCreateManyBadgeRewardInputEnvelope
    set?: QuestDefinitionWhereUniqueInput | QuestDefinitionWhereUniqueInput[]
    disconnect?: QuestDefinitionWhereUniqueInput | QuestDefinitionWhereUniqueInput[]
    delete?: QuestDefinitionWhereUniqueInput | QuestDefinitionWhereUniqueInput[]
    connect?: QuestDefinitionWhereUniqueInput | QuestDefinitionWhereUniqueInput[]
    update?: QuestDefinitionUpdateWithWhereUniqueWithoutBadgeRewardInput | QuestDefinitionUpdateWithWhereUniqueWithoutBadgeRewardInput[]
    updateMany?: QuestDefinitionUpdateManyWithWhereWithoutBadgeRewardInput | QuestDefinitionUpdateManyWithWhereWithoutBadgeRewardInput[]
    deleteMany?: QuestDefinitionScalarWhereInput | QuestDefinitionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserBadgesInput = {
    create?: XOR<UserCreateWithoutUserBadgesInput, UserUncheckedCreateWithoutUserBadgesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserBadgesInput
    connect?: UserWhereUniqueInput
  }

  export type BadgeDefinitionCreateNestedOneWithoutUserBadgesInput = {
    create?: XOR<BadgeDefinitionCreateWithoutUserBadgesInput, BadgeDefinitionUncheckedCreateWithoutUserBadgesInput>
    connectOrCreate?: BadgeDefinitionCreateOrConnectWithoutUserBadgesInput
    connect?: BadgeDefinitionWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserBadgesNestedInput = {
    create?: XOR<UserCreateWithoutUserBadgesInput, UserUncheckedCreateWithoutUserBadgesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserBadgesInput
    upsert?: UserUpsertWithoutUserBadgesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserBadgesInput, UserUpdateWithoutUserBadgesInput>, UserUncheckedUpdateWithoutUserBadgesInput>
  }

  export type BadgeDefinitionUpdateOneRequiredWithoutUserBadgesNestedInput = {
    create?: XOR<BadgeDefinitionCreateWithoutUserBadgesInput, BadgeDefinitionUncheckedCreateWithoutUserBadgesInput>
    connectOrCreate?: BadgeDefinitionCreateOrConnectWithoutUserBadgesInput
    upsert?: BadgeDefinitionUpsertWithoutUserBadgesInput
    connect?: BadgeDefinitionWhereUniqueInput
    update?: XOR<XOR<BadgeDefinitionUpdateToOneWithWhereWithoutUserBadgesInput, BadgeDefinitionUpdateWithoutUserBadgesInput>, BadgeDefinitionUncheckedUpdateWithoutUserBadgesInput>
  }

  export type BadgeDefinitionCreateNestedOneWithoutQuestsRewardedInput = {
    create?: XOR<BadgeDefinitionCreateWithoutQuestsRewardedInput, BadgeDefinitionUncheckedCreateWithoutQuestsRewardedInput>
    connectOrCreate?: BadgeDefinitionCreateOrConnectWithoutQuestsRewardedInput
    connect?: BadgeDefinitionWhereUniqueInput
  }

  export type UserQuestProgressCreateNestedManyWithoutQuestInput = {
    create?: XOR<UserQuestProgressCreateWithoutQuestInput, UserQuestProgressUncheckedCreateWithoutQuestInput> | UserQuestProgressCreateWithoutQuestInput[] | UserQuestProgressUncheckedCreateWithoutQuestInput[]
    connectOrCreate?: UserQuestProgressCreateOrConnectWithoutQuestInput | UserQuestProgressCreateOrConnectWithoutQuestInput[]
    createMany?: UserQuestProgressCreateManyQuestInputEnvelope
    connect?: UserQuestProgressWhereUniqueInput | UserQuestProgressWhereUniqueInput[]
  }

  export type AIOutputCreateNestedManyWithoutRelatedQuestInput = {
    create?: XOR<AIOutputCreateWithoutRelatedQuestInput, AIOutputUncheckedCreateWithoutRelatedQuestInput> | AIOutputCreateWithoutRelatedQuestInput[] | AIOutputUncheckedCreateWithoutRelatedQuestInput[]
    connectOrCreate?: AIOutputCreateOrConnectWithoutRelatedQuestInput | AIOutputCreateOrConnectWithoutRelatedQuestInput[]
    createMany?: AIOutputCreateManyRelatedQuestInputEnvelope
    connect?: AIOutputWhereUniqueInput | AIOutputWhereUniqueInput[]
  }

  export type UserQuestProgressUncheckedCreateNestedManyWithoutQuestInput = {
    create?: XOR<UserQuestProgressCreateWithoutQuestInput, UserQuestProgressUncheckedCreateWithoutQuestInput> | UserQuestProgressCreateWithoutQuestInput[] | UserQuestProgressUncheckedCreateWithoutQuestInput[]
    connectOrCreate?: UserQuestProgressCreateOrConnectWithoutQuestInput | UserQuestProgressCreateOrConnectWithoutQuestInput[]
    createMany?: UserQuestProgressCreateManyQuestInputEnvelope
    connect?: UserQuestProgressWhereUniqueInput | UserQuestProgressWhereUniqueInput[]
  }

  export type AIOutputUncheckedCreateNestedManyWithoutRelatedQuestInput = {
    create?: XOR<AIOutputCreateWithoutRelatedQuestInput, AIOutputUncheckedCreateWithoutRelatedQuestInput> | AIOutputCreateWithoutRelatedQuestInput[] | AIOutputUncheckedCreateWithoutRelatedQuestInput[]
    connectOrCreate?: AIOutputCreateOrConnectWithoutRelatedQuestInput | AIOutputCreateOrConnectWithoutRelatedQuestInput[]
    createMany?: AIOutputCreateManyRelatedQuestInputEnvelope
    connect?: AIOutputWhereUniqueInput | AIOutputWhereUniqueInput[]
  }

  export type EnumQuestTypeFieldUpdateOperationsInput = {
    set?: $Enums.QuestType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BadgeDefinitionUpdateOneWithoutQuestsRewardedNestedInput = {
    create?: XOR<BadgeDefinitionCreateWithoutQuestsRewardedInput, BadgeDefinitionUncheckedCreateWithoutQuestsRewardedInput>
    connectOrCreate?: BadgeDefinitionCreateOrConnectWithoutQuestsRewardedInput
    upsert?: BadgeDefinitionUpsertWithoutQuestsRewardedInput
    disconnect?: BadgeDefinitionWhereInput | boolean
    delete?: BadgeDefinitionWhereInput | boolean
    connect?: BadgeDefinitionWhereUniqueInput
    update?: XOR<XOR<BadgeDefinitionUpdateToOneWithWhereWithoutQuestsRewardedInput, BadgeDefinitionUpdateWithoutQuestsRewardedInput>, BadgeDefinitionUncheckedUpdateWithoutQuestsRewardedInput>
  }

  export type UserQuestProgressUpdateManyWithoutQuestNestedInput = {
    create?: XOR<UserQuestProgressCreateWithoutQuestInput, UserQuestProgressUncheckedCreateWithoutQuestInput> | UserQuestProgressCreateWithoutQuestInput[] | UserQuestProgressUncheckedCreateWithoutQuestInput[]
    connectOrCreate?: UserQuestProgressCreateOrConnectWithoutQuestInput | UserQuestProgressCreateOrConnectWithoutQuestInput[]
    upsert?: UserQuestProgressUpsertWithWhereUniqueWithoutQuestInput | UserQuestProgressUpsertWithWhereUniqueWithoutQuestInput[]
    createMany?: UserQuestProgressCreateManyQuestInputEnvelope
    set?: UserQuestProgressWhereUniqueInput | UserQuestProgressWhereUniqueInput[]
    disconnect?: UserQuestProgressWhereUniqueInput | UserQuestProgressWhereUniqueInput[]
    delete?: UserQuestProgressWhereUniqueInput | UserQuestProgressWhereUniqueInput[]
    connect?: UserQuestProgressWhereUniqueInput | UserQuestProgressWhereUniqueInput[]
    update?: UserQuestProgressUpdateWithWhereUniqueWithoutQuestInput | UserQuestProgressUpdateWithWhereUniqueWithoutQuestInput[]
    updateMany?: UserQuestProgressUpdateManyWithWhereWithoutQuestInput | UserQuestProgressUpdateManyWithWhereWithoutQuestInput[]
    deleteMany?: UserQuestProgressScalarWhereInput | UserQuestProgressScalarWhereInput[]
  }

  export type AIOutputUpdateManyWithoutRelatedQuestNestedInput = {
    create?: XOR<AIOutputCreateWithoutRelatedQuestInput, AIOutputUncheckedCreateWithoutRelatedQuestInput> | AIOutputCreateWithoutRelatedQuestInput[] | AIOutputUncheckedCreateWithoutRelatedQuestInput[]
    connectOrCreate?: AIOutputCreateOrConnectWithoutRelatedQuestInput | AIOutputCreateOrConnectWithoutRelatedQuestInput[]
    upsert?: AIOutputUpsertWithWhereUniqueWithoutRelatedQuestInput | AIOutputUpsertWithWhereUniqueWithoutRelatedQuestInput[]
    createMany?: AIOutputCreateManyRelatedQuestInputEnvelope
    set?: AIOutputWhereUniqueInput | AIOutputWhereUniqueInput[]
    disconnect?: AIOutputWhereUniqueInput | AIOutputWhereUniqueInput[]
    delete?: AIOutputWhereUniqueInput | AIOutputWhereUniqueInput[]
    connect?: AIOutputWhereUniqueInput | AIOutputWhereUniqueInput[]
    update?: AIOutputUpdateWithWhereUniqueWithoutRelatedQuestInput | AIOutputUpdateWithWhereUniqueWithoutRelatedQuestInput[]
    updateMany?: AIOutputUpdateManyWithWhereWithoutRelatedQuestInput | AIOutputUpdateManyWithWhereWithoutRelatedQuestInput[]
    deleteMany?: AIOutputScalarWhereInput | AIOutputScalarWhereInput[]
  }

  export type UserQuestProgressUncheckedUpdateManyWithoutQuestNestedInput = {
    create?: XOR<UserQuestProgressCreateWithoutQuestInput, UserQuestProgressUncheckedCreateWithoutQuestInput> | UserQuestProgressCreateWithoutQuestInput[] | UserQuestProgressUncheckedCreateWithoutQuestInput[]
    connectOrCreate?: UserQuestProgressCreateOrConnectWithoutQuestInput | UserQuestProgressCreateOrConnectWithoutQuestInput[]
    upsert?: UserQuestProgressUpsertWithWhereUniqueWithoutQuestInput | UserQuestProgressUpsertWithWhereUniqueWithoutQuestInput[]
    createMany?: UserQuestProgressCreateManyQuestInputEnvelope
    set?: UserQuestProgressWhereUniqueInput | UserQuestProgressWhereUniqueInput[]
    disconnect?: UserQuestProgressWhereUniqueInput | UserQuestProgressWhereUniqueInput[]
    delete?: UserQuestProgressWhereUniqueInput | UserQuestProgressWhereUniqueInput[]
    connect?: UserQuestProgressWhereUniqueInput | UserQuestProgressWhereUniqueInput[]
    update?: UserQuestProgressUpdateWithWhereUniqueWithoutQuestInput | UserQuestProgressUpdateWithWhereUniqueWithoutQuestInput[]
    updateMany?: UserQuestProgressUpdateManyWithWhereWithoutQuestInput | UserQuestProgressUpdateManyWithWhereWithoutQuestInput[]
    deleteMany?: UserQuestProgressScalarWhereInput | UserQuestProgressScalarWhereInput[]
  }

  export type AIOutputUncheckedUpdateManyWithoutRelatedQuestNestedInput = {
    create?: XOR<AIOutputCreateWithoutRelatedQuestInput, AIOutputUncheckedCreateWithoutRelatedQuestInput> | AIOutputCreateWithoutRelatedQuestInput[] | AIOutputUncheckedCreateWithoutRelatedQuestInput[]
    connectOrCreate?: AIOutputCreateOrConnectWithoutRelatedQuestInput | AIOutputCreateOrConnectWithoutRelatedQuestInput[]
    upsert?: AIOutputUpsertWithWhereUniqueWithoutRelatedQuestInput | AIOutputUpsertWithWhereUniqueWithoutRelatedQuestInput[]
    createMany?: AIOutputCreateManyRelatedQuestInputEnvelope
    set?: AIOutputWhereUniqueInput | AIOutputWhereUniqueInput[]
    disconnect?: AIOutputWhereUniqueInput | AIOutputWhereUniqueInput[]
    delete?: AIOutputWhereUniqueInput | AIOutputWhereUniqueInput[]
    connect?: AIOutputWhereUniqueInput | AIOutputWhereUniqueInput[]
    update?: AIOutputUpdateWithWhereUniqueWithoutRelatedQuestInput | AIOutputUpdateWithWhereUniqueWithoutRelatedQuestInput[]
    updateMany?: AIOutputUpdateManyWithWhereWithoutRelatedQuestInput | AIOutputUpdateManyWithWhereWithoutRelatedQuestInput[]
    deleteMany?: AIOutputScalarWhereInput | AIOutputScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserQuestsInput = {
    create?: XOR<UserCreateWithoutUserQuestsInput, UserUncheckedCreateWithoutUserQuestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserQuestsInput
    connect?: UserWhereUniqueInput
  }

  export type QuestDefinitionCreateNestedOneWithoutUserQuestsInput = {
    create?: XOR<QuestDefinitionCreateWithoutUserQuestsInput, QuestDefinitionUncheckedCreateWithoutUserQuestsInput>
    connectOrCreate?: QuestDefinitionCreateOrConnectWithoutUserQuestsInput
    connect?: QuestDefinitionWhereUniqueInput
  }

  export type EnumQuestStatusFieldUpdateOperationsInput = {
    set?: $Enums.QuestStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutUserQuestsNestedInput = {
    create?: XOR<UserCreateWithoutUserQuestsInput, UserUncheckedCreateWithoutUserQuestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserQuestsInput
    upsert?: UserUpsertWithoutUserQuestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserQuestsInput, UserUpdateWithoutUserQuestsInput>, UserUncheckedUpdateWithoutUserQuestsInput>
  }

  export type QuestDefinitionUpdateOneRequiredWithoutUserQuestsNestedInput = {
    create?: XOR<QuestDefinitionCreateWithoutUserQuestsInput, QuestDefinitionUncheckedCreateWithoutUserQuestsInput>
    connectOrCreate?: QuestDefinitionCreateOrConnectWithoutUserQuestsInput
    upsert?: QuestDefinitionUpsertWithoutUserQuestsInput
    connect?: QuestDefinitionWhereUniqueInput
    update?: XOR<XOR<QuestDefinitionUpdateToOneWithWhereWithoutUserQuestsInput, QuestDefinitionUpdateWithoutUserQuestsInput>, QuestDefinitionUncheckedUpdateWithoutUserQuestsInput>
  }

  export type UserCreateNestedOneWithoutAiOutputsInput = {
    create?: XOR<UserCreateWithoutAiOutputsInput, UserUncheckedCreateWithoutAiOutputsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAiOutputsInput
    connect?: UserWhereUniqueInput
  }

  export type QuestDefinitionCreateNestedOneWithoutAiOutputsInput = {
    create?: XOR<QuestDefinitionCreateWithoutAiOutputsInput, QuestDefinitionUncheckedCreateWithoutAiOutputsInput>
    connectOrCreate?: QuestDefinitionCreateOrConnectWithoutAiOutputsInput
    connect?: QuestDefinitionWhereUniqueInput
  }

  export type EnumAIOutputTypeFieldUpdateOperationsInput = {
    set?: $Enums.AIOutputType
  }

  export type UserUpdateOneRequiredWithoutAiOutputsNestedInput = {
    create?: XOR<UserCreateWithoutAiOutputsInput, UserUncheckedCreateWithoutAiOutputsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAiOutputsInput
    upsert?: UserUpsertWithoutAiOutputsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAiOutputsInput, UserUpdateWithoutAiOutputsInput>, UserUncheckedUpdateWithoutAiOutputsInput>
  }

  export type QuestDefinitionUpdateOneWithoutAiOutputsNestedInput = {
    create?: XOR<QuestDefinitionCreateWithoutAiOutputsInput, QuestDefinitionUncheckedCreateWithoutAiOutputsInput>
    connectOrCreate?: QuestDefinitionCreateOrConnectWithoutAiOutputsInput
    upsert?: QuestDefinitionUpsertWithoutAiOutputsInput
    disconnect?: QuestDefinitionWhereInput | boolean
    delete?: QuestDefinitionWhereInput | boolean
    connect?: QuestDefinitionWhereUniqueInput
    update?: XOR<XOR<QuestDefinitionUpdateToOneWithWhereWithoutAiOutputsInput, QuestDefinitionUpdateWithoutAiOutputsInput>, QuestDefinitionUncheckedUpdateWithoutAiOutputsInput>
  }

  export type UserCreateNestedOneWithoutSettingsInput = {
    create?: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettingsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSettingsNestedInput = {
    create?: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettingsInput
    upsert?: UserUpsertWithoutSettingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSettingsInput, UserUpdateWithoutSettingsInput>, UserUncheckedUpdateWithoutSettingsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumHealthMetricTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.HealthMetricType | EnumHealthMetricTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HealthMetricType[] | ListEnumHealthMetricTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HealthMetricType[] | ListEnumHealthMetricTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHealthMetricTypeFilter<$PrismaModel> | $Enums.HealthMetricType
  }

  export type NestedEnumHealthDataSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.HealthDataSource | EnumHealthDataSourceFieldRefInput<$PrismaModel>
    in?: $Enums.HealthDataSource[] | ListEnumHealthDataSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.HealthDataSource[] | ListEnumHealthDataSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumHealthDataSourceFilter<$PrismaModel> | $Enums.HealthDataSource
  }

  export type NestedEnumHealthMetricTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HealthMetricType | EnumHealthMetricTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HealthMetricType[] | ListEnumHealthMetricTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HealthMetricType[] | ListEnumHealthMetricTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHealthMetricTypeWithAggregatesFilter<$PrismaModel> | $Enums.HealthMetricType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHealthMetricTypeFilter<$PrismaModel>
    _max?: NestedEnumHealthMetricTypeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumHealthDataSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HealthDataSource | EnumHealthDataSourceFieldRefInput<$PrismaModel>
    in?: $Enums.HealthDataSource[] | ListEnumHealthDataSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.HealthDataSource[] | ListEnumHealthDataSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumHealthDataSourceWithAggregatesFilter<$PrismaModel> | $Enums.HealthDataSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHealthDataSourceFilter<$PrismaModel>
    _max?: NestedEnumHealthDataSourceFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumQuestTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestType | EnumQuestTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestType[] | ListEnumQuestTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestType[] | ListEnumQuestTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestTypeFilter<$PrismaModel> | $Enums.QuestType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumQuestTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestType | EnumQuestTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestType[] | ListEnumQuestTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestType[] | ListEnumQuestTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestTypeWithAggregatesFilter<$PrismaModel> | $Enums.QuestType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestTypeFilter<$PrismaModel>
    _max?: NestedEnumQuestTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumQuestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestStatus | EnumQuestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuestStatus[] | ListEnumQuestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestStatus[] | ListEnumQuestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestStatusFilter<$PrismaModel> | $Enums.QuestStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumQuestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestStatus | EnumQuestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuestStatus[] | ListEnumQuestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestStatus[] | ListEnumQuestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestStatusWithAggregatesFilter<$PrismaModel> | $Enums.QuestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestStatusFilter<$PrismaModel>
    _max?: NestedEnumQuestStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumAIOutputTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AIOutputType | EnumAIOutputTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AIOutputType[] | ListEnumAIOutputTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AIOutputType[] | ListEnumAIOutputTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAIOutputTypeFilter<$PrismaModel> | $Enums.AIOutputType
  }

  export type NestedEnumAIOutputTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AIOutputType | EnumAIOutputTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AIOutputType[] | ListEnumAIOutputTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AIOutputType[] | ListEnumAIOutputTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAIOutputTypeWithAggregatesFilter<$PrismaModel> | $Enums.AIOutputType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAIOutputTypeFilter<$PrismaModel>
    _max?: NestedEnumAIOutputTypeFilter<$PrismaModel>
  }

  export type ProfileCreateWithoutUserInput = {
    username?: string | null
    avatarConfig?: NullableJsonNullValueInput | InputJsonValue
    currentLevel?: number
    currentXP?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: number
    username?: string | null
    avatarConfig?: NullableJsonNullValueInput | InputJsonValue
    currentLevel?: number
    currentXP?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type HabitDefinitionCreateWithoutUserInput = {
    name: string
    description?: string | null
    frequency: string
    target?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    habitLogs?: HabitLogCreateNestedManyWithoutHabitDefinitionInput
  }

  export type HabitDefinitionUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    description?: string | null
    frequency: string
    target?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    habitLogs?: HabitLogUncheckedCreateNestedManyWithoutHabitDefinitionInput
  }

  export type HabitDefinitionCreateOrConnectWithoutUserInput = {
    where: HabitDefinitionWhereUniqueInput
    create: XOR<HabitDefinitionCreateWithoutUserInput, HabitDefinitionUncheckedCreateWithoutUserInput>
  }

  export type HabitDefinitionCreateManyUserInputEnvelope = {
    data: HabitDefinitionCreateManyUserInput | HabitDefinitionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HabitLogCreateWithoutUserInput = {
    completionDate: Date | string
    notes?: string | null
    createdAt?: Date | string
    habitDefinition: HabitDefinitionCreateNestedOneWithoutHabitLogsInput
  }

  export type HabitLogUncheckedCreateWithoutUserInput = {
    id?: number
    habitId: number
    completionDate: Date | string
    notes?: string | null
    createdAt?: Date | string
  }

  export type HabitLogCreateOrConnectWithoutUserInput = {
    where: HabitLogWhereUniqueInput
    create: XOR<HabitLogCreateWithoutUserInput, HabitLogUncheckedCreateWithoutUserInput>
  }

  export type HabitLogCreateManyUserInputEnvelope = {
    data: HabitLogCreateManyUserInput | HabitLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HealthLogCreateWithoutUserInput = {
    date: Date | string
    metricType: $Enums.HealthMetricType
    value: number
    source?: $Enums.HealthDataSource
    createdAt?: Date | string
  }

  export type HealthLogUncheckedCreateWithoutUserInput = {
    id?: number
    date: Date | string
    metricType: $Enums.HealthMetricType
    value: number
    source?: $Enums.HealthDataSource
    createdAt?: Date | string
  }

  export type HealthLogCreateOrConnectWithoutUserInput = {
    where: HealthLogWhereUniqueInput
    create: XOR<HealthLogCreateWithoutUserInput, HealthLogUncheckedCreateWithoutUserInput>
  }

  export type HealthLogCreateManyUserInputEnvelope = {
    data: HealthLogCreateManyUserInput | HealthLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserBadgeCreateWithoutUserInput = {
    earnedDate?: Date | string
    badge: BadgeDefinitionCreateNestedOneWithoutUserBadgesInput
  }

  export type UserBadgeUncheckedCreateWithoutUserInput = {
    id?: number
    badgeId: number
    earnedDate?: Date | string
  }

  export type UserBadgeCreateOrConnectWithoutUserInput = {
    where: UserBadgeWhereUniqueInput
    create: XOR<UserBadgeCreateWithoutUserInput, UserBadgeUncheckedCreateWithoutUserInput>
  }

  export type UserBadgeCreateManyUserInputEnvelope = {
    data: UserBadgeCreateManyUserInput | UserBadgeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserQuestProgressCreateWithoutUserInput = {
    status?: $Enums.QuestStatus
    progressData?: NullableJsonNullValueInput | InputJsonValue
    startDate?: Date | string
    completionDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quest: QuestDefinitionCreateNestedOneWithoutUserQuestsInput
  }

  export type UserQuestProgressUncheckedCreateWithoutUserInput = {
    id?: number
    questId: number
    status?: $Enums.QuestStatus
    progressData?: NullableJsonNullValueInput | InputJsonValue
    startDate?: Date | string
    completionDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserQuestProgressCreateOrConnectWithoutUserInput = {
    where: UserQuestProgressWhereUniqueInput
    create: XOR<UserQuestProgressCreateWithoutUserInput, UserQuestProgressUncheckedCreateWithoutUserInput>
  }

  export type UserQuestProgressCreateManyUserInputEnvelope = {
    data: UserQuestProgressCreateManyUserInput | UserQuestProgressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserSettingsCreateWithoutUserInput = {
    notificationPrefs?: NullableJsonNullValueInput | InputJsonValue
    privacyFlags?: NullableJsonNullValueInput | InputJsonValue
    aiInteractionLevel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSettingsUncheckedCreateWithoutUserInput = {
    id?: number
    notificationPrefs?: NullableJsonNullValueInput | InputJsonValue
    privacyFlags?: NullableJsonNullValueInput | InputJsonValue
    aiInteractionLevel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSettingsCreateOrConnectWithoutUserInput = {
    where: UserSettingsWhereUniqueInput
    create: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
  }

  export type AIOutputCreateWithoutUserInput = {
    type: $Enums.AIOutputType
    text: string
    createdAt?: Date | string
    seenByUser?: boolean
    relatedQuest?: QuestDefinitionCreateNestedOneWithoutAiOutputsInput
  }

  export type AIOutputUncheckedCreateWithoutUserInput = {
    id?: number
    type: $Enums.AIOutputType
    text: string
    relatedQuestId?: number | null
    createdAt?: Date | string
    seenByUser?: boolean
  }

  export type AIOutputCreateOrConnectWithoutUserInput = {
    where: AIOutputWhereUniqueInput
    create: XOR<AIOutputCreateWithoutUserInput, AIOutputUncheckedCreateWithoutUserInput>
  }

  export type AIOutputCreateManyUserInputEnvelope = {
    data: AIOutputCreateManyUserInput | AIOutputCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarConfig?: NullableJsonNullValueInput | InputJsonValue
    currentLevel?: IntFieldUpdateOperationsInput | number
    currentXP?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarConfig?: NullableJsonNullValueInput | InputJsonValue
    currentLevel?: IntFieldUpdateOperationsInput | number
    currentXP?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitDefinitionUpsertWithWhereUniqueWithoutUserInput = {
    where: HabitDefinitionWhereUniqueInput
    update: XOR<HabitDefinitionUpdateWithoutUserInput, HabitDefinitionUncheckedUpdateWithoutUserInput>
    create: XOR<HabitDefinitionCreateWithoutUserInput, HabitDefinitionUncheckedCreateWithoutUserInput>
  }

  export type HabitDefinitionUpdateWithWhereUniqueWithoutUserInput = {
    where: HabitDefinitionWhereUniqueInput
    data: XOR<HabitDefinitionUpdateWithoutUserInput, HabitDefinitionUncheckedUpdateWithoutUserInput>
  }

  export type HabitDefinitionUpdateManyWithWhereWithoutUserInput = {
    where: HabitDefinitionScalarWhereInput
    data: XOR<HabitDefinitionUpdateManyMutationInput, HabitDefinitionUncheckedUpdateManyWithoutUserInput>
  }

  export type HabitDefinitionScalarWhereInput = {
    AND?: HabitDefinitionScalarWhereInput | HabitDefinitionScalarWhereInput[]
    OR?: HabitDefinitionScalarWhereInput[]
    NOT?: HabitDefinitionScalarWhereInput | HabitDefinitionScalarWhereInput[]
    id?: IntFilter<"HabitDefinition"> | number
    userId?: IntFilter<"HabitDefinition"> | number
    name?: StringFilter<"HabitDefinition"> | string
    description?: StringNullableFilter<"HabitDefinition"> | string | null
    frequency?: StringFilter<"HabitDefinition"> | string
    target?: IntNullableFilter<"HabitDefinition"> | number | null
    createdAt?: DateTimeFilter<"HabitDefinition"> | Date | string
    updatedAt?: DateTimeFilter<"HabitDefinition"> | Date | string
  }

  export type HabitLogUpsertWithWhereUniqueWithoutUserInput = {
    where: HabitLogWhereUniqueInput
    update: XOR<HabitLogUpdateWithoutUserInput, HabitLogUncheckedUpdateWithoutUserInput>
    create: XOR<HabitLogCreateWithoutUserInput, HabitLogUncheckedCreateWithoutUserInput>
  }

  export type HabitLogUpdateWithWhereUniqueWithoutUserInput = {
    where: HabitLogWhereUniqueInput
    data: XOR<HabitLogUpdateWithoutUserInput, HabitLogUncheckedUpdateWithoutUserInput>
  }

  export type HabitLogUpdateManyWithWhereWithoutUserInput = {
    where: HabitLogScalarWhereInput
    data: XOR<HabitLogUpdateManyMutationInput, HabitLogUncheckedUpdateManyWithoutUserInput>
  }

  export type HabitLogScalarWhereInput = {
    AND?: HabitLogScalarWhereInput | HabitLogScalarWhereInput[]
    OR?: HabitLogScalarWhereInput[]
    NOT?: HabitLogScalarWhereInput | HabitLogScalarWhereInput[]
    id?: IntFilter<"HabitLog"> | number
    habitId?: IntFilter<"HabitLog"> | number
    userId?: IntFilter<"HabitLog"> | number
    completionDate?: DateTimeFilter<"HabitLog"> | Date | string
    notes?: StringNullableFilter<"HabitLog"> | string | null
    createdAt?: DateTimeFilter<"HabitLog"> | Date | string
  }

  export type HealthLogUpsertWithWhereUniqueWithoutUserInput = {
    where: HealthLogWhereUniqueInput
    update: XOR<HealthLogUpdateWithoutUserInput, HealthLogUncheckedUpdateWithoutUserInput>
    create: XOR<HealthLogCreateWithoutUserInput, HealthLogUncheckedCreateWithoutUserInput>
  }

  export type HealthLogUpdateWithWhereUniqueWithoutUserInput = {
    where: HealthLogWhereUniqueInput
    data: XOR<HealthLogUpdateWithoutUserInput, HealthLogUncheckedUpdateWithoutUserInput>
  }

  export type HealthLogUpdateManyWithWhereWithoutUserInput = {
    where: HealthLogScalarWhereInput
    data: XOR<HealthLogUpdateManyMutationInput, HealthLogUncheckedUpdateManyWithoutUserInput>
  }

  export type HealthLogScalarWhereInput = {
    AND?: HealthLogScalarWhereInput | HealthLogScalarWhereInput[]
    OR?: HealthLogScalarWhereInput[]
    NOT?: HealthLogScalarWhereInput | HealthLogScalarWhereInput[]
    id?: IntFilter<"HealthLog"> | number
    userId?: IntFilter<"HealthLog"> | number
    date?: DateTimeFilter<"HealthLog"> | Date | string
    metricType?: EnumHealthMetricTypeFilter<"HealthLog"> | $Enums.HealthMetricType
    value?: FloatFilter<"HealthLog"> | number
    source?: EnumHealthDataSourceFilter<"HealthLog"> | $Enums.HealthDataSource
    createdAt?: DateTimeFilter<"HealthLog"> | Date | string
  }

  export type UserBadgeUpsertWithWhereUniqueWithoutUserInput = {
    where: UserBadgeWhereUniqueInput
    update: XOR<UserBadgeUpdateWithoutUserInput, UserBadgeUncheckedUpdateWithoutUserInput>
    create: XOR<UserBadgeCreateWithoutUserInput, UserBadgeUncheckedCreateWithoutUserInput>
  }

  export type UserBadgeUpdateWithWhereUniqueWithoutUserInput = {
    where: UserBadgeWhereUniqueInput
    data: XOR<UserBadgeUpdateWithoutUserInput, UserBadgeUncheckedUpdateWithoutUserInput>
  }

  export type UserBadgeUpdateManyWithWhereWithoutUserInput = {
    where: UserBadgeScalarWhereInput
    data: XOR<UserBadgeUpdateManyMutationInput, UserBadgeUncheckedUpdateManyWithoutUserInput>
  }

  export type UserBadgeScalarWhereInput = {
    AND?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
    OR?: UserBadgeScalarWhereInput[]
    NOT?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
    id?: IntFilter<"UserBadge"> | number
    userId?: IntFilter<"UserBadge"> | number
    badgeId?: IntFilter<"UserBadge"> | number
    earnedDate?: DateTimeFilter<"UserBadge"> | Date | string
  }

  export type UserQuestProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: UserQuestProgressWhereUniqueInput
    update: XOR<UserQuestProgressUpdateWithoutUserInput, UserQuestProgressUncheckedUpdateWithoutUserInput>
    create: XOR<UserQuestProgressCreateWithoutUserInput, UserQuestProgressUncheckedCreateWithoutUserInput>
  }

  export type UserQuestProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: UserQuestProgressWhereUniqueInput
    data: XOR<UserQuestProgressUpdateWithoutUserInput, UserQuestProgressUncheckedUpdateWithoutUserInput>
  }

  export type UserQuestProgressUpdateManyWithWhereWithoutUserInput = {
    where: UserQuestProgressScalarWhereInput
    data: XOR<UserQuestProgressUpdateManyMutationInput, UserQuestProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type UserQuestProgressScalarWhereInput = {
    AND?: UserQuestProgressScalarWhereInput | UserQuestProgressScalarWhereInput[]
    OR?: UserQuestProgressScalarWhereInput[]
    NOT?: UserQuestProgressScalarWhereInput | UserQuestProgressScalarWhereInput[]
    id?: IntFilter<"UserQuestProgress"> | number
    userId?: IntFilter<"UserQuestProgress"> | number
    questId?: IntFilter<"UserQuestProgress"> | number
    status?: EnumQuestStatusFilter<"UserQuestProgress"> | $Enums.QuestStatus
    progressData?: JsonNullableFilter<"UserQuestProgress">
    startDate?: DateTimeFilter<"UserQuestProgress"> | Date | string
    completionDate?: DateTimeNullableFilter<"UserQuestProgress"> | Date | string | null
    createdAt?: DateTimeFilter<"UserQuestProgress"> | Date | string
    updatedAt?: DateTimeFilter<"UserQuestProgress"> | Date | string
  }

  export type UserSettingsUpsertWithoutUserInput = {
    update: XOR<UserSettingsUpdateWithoutUserInput, UserSettingsUncheckedUpdateWithoutUserInput>
    create: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    where?: UserSettingsWhereInput
  }

  export type UserSettingsUpdateToOneWithWhereWithoutUserInput = {
    where?: UserSettingsWhereInput
    data: XOR<UserSettingsUpdateWithoutUserInput, UserSettingsUncheckedUpdateWithoutUserInput>
  }

  export type UserSettingsUpdateWithoutUserInput = {
    notificationPrefs?: NullableJsonNullValueInput | InputJsonValue
    privacyFlags?: NullableJsonNullValueInput | InputJsonValue
    aiInteractionLevel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSettingsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    notificationPrefs?: NullableJsonNullValueInput | InputJsonValue
    privacyFlags?: NullableJsonNullValueInput | InputJsonValue
    aiInteractionLevel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIOutputUpsertWithWhereUniqueWithoutUserInput = {
    where: AIOutputWhereUniqueInput
    update: XOR<AIOutputUpdateWithoutUserInput, AIOutputUncheckedUpdateWithoutUserInput>
    create: XOR<AIOutputCreateWithoutUserInput, AIOutputUncheckedCreateWithoutUserInput>
  }

  export type AIOutputUpdateWithWhereUniqueWithoutUserInput = {
    where: AIOutputWhereUniqueInput
    data: XOR<AIOutputUpdateWithoutUserInput, AIOutputUncheckedUpdateWithoutUserInput>
  }

  export type AIOutputUpdateManyWithWhereWithoutUserInput = {
    where: AIOutputScalarWhereInput
    data: XOR<AIOutputUpdateManyMutationInput, AIOutputUncheckedUpdateManyWithoutUserInput>
  }

  export type AIOutputScalarWhereInput = {
    AND?: AIOutputScalarWhereInput | AIOutputScalarWhereInput[]
    OR?: AIOutputScalarWhereInput[]
    NOT?: AIOutputScalarWhereInput | AIOutputScalarWhereInput[]
    id?: IntFilter<"AIOutput"> | number
    userId?: IntFilter<"AIOutput"> | number
    type?: EnumAIOutputTypeFilter<"AIOutput"> | $Enums.AIOutputType
    text?: StringFilter<"AIOutput"> | string
    relatedQuestId?: IntNullableFilter<"AIOutput"> | number | null
    createdAt?: DateTimeFilter<"AIOutput"> | Date | string
    seenByUser?: BoolFilter<"AIOutput"> | boolean
  }

  export type UserCreateWithoutProfileInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    name?: string | null
    hashedRefreshToken?: string | null
    habitDefinitions?: HabitDefinitionCreateNestedManyWithoutUserInput
    habitLogs?: HabitLogCreateNestedManyWithoutUserInput
    healthLogs?: HealthLogCreateNestedManyWithoutUserInput
    userBadges?: UserBadgeCreateNestedManyWithoutUserInput
    userQuests?: UserQuestProgressCreateNestedManyWithoutUserInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
    aiOutputs?: AIOutputCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    name?: string | null
    hashedRefreshToken?: string | null
    habitDefinitions?: HabitDefinitionUncheckedCreateNestedManyWithoutUserInput
    habitLogs?: HabitLogUncheckedCreateNestedManyWithoutUserInput
    healthLogs?: HealthLogUncheckedCreateNestedManyWithoutUserInput
    userBadges?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
    userQuests?: UserQuestProgressUncheckedCreateNestedManyWithoutUserInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    aiOutputs?: AIOutputUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    habitDefinitions?: HabitDefinitionUpdateManyWithoutUserNestedInput
    habitLogs?: HabitLogUpdateManyWithoutUserNestedInput
    healthLogs?: HealthLogUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgeUpdateManyWithoutUserNestedInput
    userQuests?: UserQuestProgressUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
    aiOutputs?: AIOutputUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    habitDefinitions?: HabitDefinitionUncheckedUpdateManyWithoutUserNestedInput
    habitLogs?: HabitLogUncheckedUpdateManyWithoutUserNestedInput
    healthLogs?: HealthLogUncheckedUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgeUncheckedUpdateManyWithoutUserNestedInput
    userQuests?: UserQuestProgressUncheckedUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    aiOutputs?: AIOutputUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutHabitDefinitionsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    name?: string | null
    hashedRefreshToken?: string | null
    profile?: ProfileCreateNestedOneWithoutUserInput
    habitLogs?: HabitLogCreateNestedManyWithoutUserInput
    healthLogs?: HealthLogCreateNestedManyWithoutUserInput
    userBadges?: UserBadgeCreateNestedManyWithoutUserInput
    userQuests?: UserQuestProgressCreateNestedManyWithoutUserInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
    aiOutputs?: AIOutputCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHabitDefinitionsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    name?: string | null
    hashedRefreshToken?: string | null
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    habitLogs?: HabitLogUncheckedCreateNestedManyWithoutUserInput
    healthLogs?: HealthLogUncheckedCreateNestedManyWithoutUserInput
    userBadges?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
    userQuests?: UserQuestProgressUncheckedCreateNestedManyWithoutUserInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    aiOutputs?: AIOutputUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHabitDefinitionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHabitDefinitionsInput, UserUncheckedCreateWithoutHabitDefinitionsInput>
  }

  export type HabitLogCreateWithoutHabitDefinitionInput = {
    completionDate: Date | string
    notes?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutHabitLogsInput
  }

  export type HabitLogUncheckedCreateWithoutHabitDefinitionInput = {
    id?: number
    userId: number
    completionDate: Date | string
    notes?: string | null
    createdAt?: Date | string
  }

  export type HabitLogCreateOrConnectWithoutHabitDefinitionInput = {
    where: HabitLogWhereUniqueInput
    create: XOR<HabitLogCreateWithoutHabitDefinitionInput, HabitLogUncheckedCreateWithoutHabitDefinitionInput>
  }

  export type HabitLogCreateManyHabitDefinitionInputEnvelope = {
    data: HabitLogCreateManyHabitDefinitionInput | HabitLogCreateManyHabitDefinitionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutHabitDefinitionsInput = {
    update: XOR<UserUpdateWithoutHabitDefinitionsInput, UserUncheckedUpdateWithoutHabitDefinitionsInput>
    create: XOR<UserCreateWithoutHabitDefinitionsInput, UserUncheckedCreateWithoutHabitDefinitionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHabitDefinitionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHabitDefinitionsInput, UserUncheckedUpdateWithoutHabitDefinitionsInput>
  }

  export type UserUpdateWithoutHabitDefinitionsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: ProfileUpdateOneWithoutUserNestedInput
    habitLogs?: HabitLogUpdateManyWithoutUserNestedInput
    healthLogs?: HealthLogUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgeUpdateManyWithoutUserNestedInput
    userQuests?: UserQuestProgressUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
    aiOutputs?: AIOutputUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHabitDefinitionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    habitLogs?: HabitLogUncheckedUpdateManyWithoutUserNestedInput
    healthLogs?: HealthLogUncheckedUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgeUncheckedUpdateManyWithoutUserNestedInput
    userQuests?: UserQuestProgressUncheckedUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    aiOutputs?: AIOutputUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HabitLogUpsertWithWhereUniqueWithoutHabitDefinitionInput = {
    where: HabitLogWhereUniqueInput
    update: XOR<HabitLogUpdateWithoutHabitDefinitionInput, HabitLogUncheckedUpdateWithoutHabitDefinitionInput>
    create: XOR<HabitLogCreateWithoutHabitDefinitionInput, HabitLogUncheckedCreateWithoutHabitDefinitionInput>
  }

  export type HabitLogUpdateWithWhereUniqueWithoutHabitDefinitionInput = {
    where: HabitLogWhereUniqueInput
    data: XOR<HabitLogUpdateWithoutHabitDefinitionInput, HabitLogUncheckedUpdateWithoutHabitDefinitionInput>
  }

  export type HabitLogUpdateManyWithWhereWithoutHabitDefinitionInput = {
    where: HabitLogScalarWhereInput
    data: XOR<HabitLogUpdateManyMutationInput, HabitLogUncheckedUpdateManyWithoutHabitDefinitionInput>
  }

  export type UserCreateWithoutHabitLogsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    name?: string | null
    hashedRefreshToken?: string | null
    profile?: ProfileCreateNestedOneWithoutUserInput
    habitDefinitions?: HabitDefinitionCreateNestedManyWithoutUserInput
    healthLogs?: HealthLogCreateNestedManyWithoutUserInput
    userBadges?: UserBadgeCreateNestedManyWithoutUserInput
    userQuests?: UserQuestProgressCreateNestedManyWithoutUserInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
    aiOutputs?: AIOutputCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHabitLogsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    name?: string | null
    hashedRefreshToken?: string | null
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    habitDefinitions?: HabitDefinitionUncheckedCreateNestedManyWithoutUserInput
    healthLogs?: HealthLogUncheckedCreateNestedManyWithoutUserInput
    userBadges?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
    userQuests?: UserQuestProgressUncheckedCreateNestedManyWithoutUserInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    aiOutputs?: AIOutputUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHabitLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHabitLogsInput, UserUncheckedCreateWithoutHabitLogsInput>
  }

  export type HabitDefinitionCreateWithoutHabitLogsInput = {
    name: string
    description?: string | null
    frequency: string
    target?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutHabitDefinitionsInput
  }

  export type HabitDefinitionUncheckedCreateWithoutHabitLogsInput = {
    id?: number
    userId: number
    name: string
    description?: string | null
    frequency: string
    target?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HabitDefinitionCreateOrConnectWithoutHabitLogsInput = {
    where: HabitDefinitionWhereUniqueInput
    create: XOR<HabitDefinitionCreateWithoutHabitLogsInput, HabitDefinitionUncheckedCreateWithoutHabitLogsInput>
  }

  export type UserUpsertWithoutHabitLogsInput = {
    update: XOR<UserUpdateWithoutHabitLogsInput, UserUncheckedUpdateWithoutHabitLogsInput>
    create: XOR<UserCreateWithoutHabitLogsInput, UserUncheckedCreateWithoutHabitLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHabitLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHabitLogsInput, UserUncheckedUpdateWithoutHabitLogsInput>
  }

  export type UserUpdateWithoutHabitLogsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: ProfileUpdateOneWithoutUserNestedInput
    habitDefinitions?: HabitDefinitionUpdateManyWithoutUserNestedInput
    healthLogs?: HealthLogUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgeUpdateManyWithoutUserNestedInput
    userQuests?: UserQuestProgressUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
    aiOutputs?: AIOutputUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHabitLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    habitDefinitions?: HabitDefinitionUncheckedUpdateManyWithoutUserNestedInput
    healthLogs?: HealthLogUncheckedUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgeUncheckedUpdateManyWithoutUserNestedInput
    userQuests?: UserQuestProgressUncheckedUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    aiOutputs?: AIOutputUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HabitDefinitionUpsertWithoutHabitLogsInput = {
    update: XOR<HabitDefinitionUpdateWithoutHabitLogsInput, HabitDefinitionUncheckedUpdateWithoutHabitLogsInput>
    create: XOR<HabitDefinitionCreateWithoutHabitLogsInput, HabitDefinitionUncheckedCreateWithoutHabitLogsInput>
    where?: HabitDefinitionWhereInput
  }

  export type HabitDefinitionUpdateToOneWithWhereWithoutHabitLogsInput = {
    where?: HabitDefinitionWhereInput
    data: XOR<HabitDefinitionUpdateWithoutHabitLogsInput, HabitDefinitionUncheckedUpdateWithoutHabitLogsInput>
  }

  export type HabitDefinitionUpdateWithoutHabitLogsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: StringFieldUpdateOperationsInput | string
    target?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHabitDefinitionsNestedInput
  }

  export type HabitDefinitionUncheckedUpdateWithoutHabitLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: StringFieldUpdateOperationsInput | string
    target?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutHealthLogsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    name?: string | null
    hashedRefreshToken?: string | null
    profile?: ProfileCreateNestedOneWithoutUserInput
    habitDefinitions?: HabitDefinitionCreateNestedManyWithoutUserInput
    habitLogs?: HabitLogCreateNestedManyWithoutUserInput
    userBadges?: UserBadgeCreateNestedManyWithoutUserInput
    userQuests?: UserQuestProgressCreateNestedManyWithoutUserInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
    aiOutputs?: AIOutputCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHealthLogsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    name?: string | null
    hashedRefreshToken?: string | null
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    habitDefinitions?: HabitDefinitionUncheckedCreateNestedManyWithoutUserInput
    habitLogs?: HabitLogUncheckedCreateNestedManyWithoutUserInput
    userBadges?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
    userQuests?: UserQuestProgressUncheckedCreateNestedManyWithoutUserInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    aiOutputs?: AIOutputUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHealthLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHealthLogsInput, UserUncheckedCreateWithoutHealthLogsInput>
  }

  export type UserUpsertWithoutHealthLogsInput = {
    update: XOR<UserUpdateWithoutHealthLogsInput, UserUncheckedUpdateWithoutHealthLogsInput>
    create: XOR<UserCreateWithoutHealthLogsInput, UserUncheckedCreateWithoutHealthLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHealthLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHealthLogsInput, UserUncheckedUpdateWithoutHealthLogsInput>
  }

  export type UserUpdateWithoutHealthLogsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: ProfileUpdateOneWithoutUserNestedInput
    habitDefinitions?: HabitDefinitionUpdateManyWithoutUserNestedInput
    habitLogs?: HabitLogUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgeUpdateManyWithoutUserNestedInput
    userQuests?: UserQuestProgressUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
    aiOutputs?: AIOutputUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHealthLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    habitDefinitions?: HabitDefinitionUncheckedUpdateManyWithoutUserNestedInput
    habitLogs?: HabitLogUncheckedUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgeUncheckedUpdateManyWithoutUserNestedInput
    userQuests?: UserQuestProgressUncheckedUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    aiOutputs?: AIOutputUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserBadgeCreateWithoutBadgeInput = {
    earnedDate?: Date | string
    user: UserCreateNestedOneWithoutUserBadgesInput
  }

  export type UserBadgeUncheckedCreateWithoutBadgeInput = {
    id?: number
    userId: number
    earnedDate?: Date | string
  }

  export type UserBadgeCreateOrConnectWithoutBadgeInput = {
    where: UserBadgeWhereUniqueInput
    create: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput>
  }

  export type UserBadgeCreateManyBadgeInputEnvelope = {
    data: UserBadgeCreateManyBadgeInput | UserBadgeCreateManyBadgeInput[]
    skipDuplicates?: boolean
  }

  export type QuestDefinitionCreateWithoutBadgeRewardInput = {
    type: $Enums.QuestType
    title: string
    description: string
    criteria: JsonNullValueInput | InputJsonValue
    xpReward?: number
    isActive?: boolean
    createdAt?: Date | string
    userQuests?: UserQuestProgressCreateNestedManyWithoutQuestInput
    aiOutputs?: AIOutputCreateNestedManyWithoutRelatedQuestInput
  }

  export type QuestDefinitionUncheckedCreateWithoutBadgeRewardInput = {
    id?: number
    type: $Enums.QuestType
    title: string
    description: string
    criteria: JsonNullValueInput | InputJsonValue
    xpReward?: number
    isActive?: boolean
    createdAt?: Date | string
    userQuests?: UserQuestProgressUncheckedCreateNestedManyWithoutQuestInput
    aiOutputs?: AIOutputUncheckedCreateNestedManyWithoutRelatedQuestInput
  }

  export type QuestDefinitionCreateOrConnectWithoutBadgeRewardInput = {
    where: QuestDefinitionWhereUniqueInput
    create: XOR<QuestDefinitionCreateWithoutBadgeRewardInput, QuestDefinitionUncheckedCreateWithoutBadgeRewardInput>
  }

  export type QuestDefinitionCreateManyBadgeRewardInputEnvelope = {
    data: QuestDefinitionCreateManyBadgeRewardInput | QuestDefinitionCreateManyBadgeRewardInput[]
    skipDuplicates?: boolean
  }

  export type UserBadgeUpsertWithWhereUniqueWithoutBadgeInput = {
    where: UserBadgeWhereUniqueInput
    update: XOR<UserBadgeUpdateWithoutBadgeInput, UserBadgeUncheckedUpdateWithoutBadgeInput>
    create: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput>
  }

  export type UserBadgeUpdateWithWhereUniqueWithoutBadgeInput = {
    where: UserBadgeWhereUniqueInput
    data: XOR<UserBadgeUpdateWithoutBadgeInput, UserBadgeUncheckedUpdateWithoutBadgeInput>
  }

  export type UserBadgeUpdateManyWithWhereWithoutBadgeInput = {
    where: UserBadgeScalarWhereInput
    data: XOR<UserBadgeUpdateManyMutationInput, UserBadgeUncheckedUpdateManyWithoutBadgeInput>
  }

  export type QuestDefinitionUpsertWithWhereUniqueWithoutBadgeRewardInput = {
    where: QuestDefinitionWhereUniqueInput
    update: XOR<QuestDefinitionUpdateWithoutBadgeRewardInput, QuestDefinitionUncheckedUpdateWithoutBadgeRewardInput>
    create: XOR<QuestDefinitionCreateWithoutBadgeRewardInput, QuestDefinitionUncheckedCreateWithoutBadgeRewardInput>
  }

  export type QuestDefinitionUpdateWithWhereUniqueWithoutBadgeRewardInput = {
    where: QuestDefinitionWhereUniqueInput
    data: XOR<QuestDefinitionUpdateWithoutBadgeRewardInput, QuestDefinitionUncheckedUpdateWithoutBadgeRewardInput>
  }

  export type QuestDefinitionUpdateManyWithWhereWithoutBadgeRewardInput = {
    where: QuestDefinitionScalarWhereInput
    data: XOR<QuestDefinitionUpdateManyMutationInput, QuestDefinitionUncheckedUpdateManyWithoutBadgeRewardInput>
  }

  export type QuestDefinitionScalarWhereInput = {
    AND?: QuestDefinitionScalarWhereInput | QuestDefinitionScalarWhereInput[]
    OR?: QuestDefinitionScalarWhereInput[]
    NOT?: QuestDefinitionScalarWhereInput | QuestDefinitionScalarWhereInput[]
    id?: IntFilter<"QuestDefinition"> | number
    type?: EnumQuestTypeFilter<"QuestDefinition"> | $Enums.QuestType
    title?: StringFilter<"QuestDefinition"> | string
    description?: StringFilter<"QuestDefinition"> | string
    criteria?: JsonFilter<"QuestDefinition">
    xpReward?: IntFilter<"QuestDefinition"> | number
    badgeRewardId?: IntNullableFilter<"QuestDefinition"> | number | null
    isActive?: BoolFilter<"QuestDefinition"> | boolean
    createdAt?: DateTimeFilter<"QuestDefinition"> | Date | string
  }

  export type UserCreateWithoutUserBadgesInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    name?: string | null
    hashedRefreshToken?: string | null
    profile?: ProfileCreateNestedOneWithoutUserInput
    habitDefinitions?: HabitDefinitionCreateNestedManyWithoutUserInput
    habitLogs?: HabitLogCreateNestedManyWithoutUserInput
    healthLogs?: HealthLogCreateNestedManyWithoutUserInput
    userQuests?: UserQuestProgressCreateNestedManyWithoutUserInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
    aiOutputs?: AIOutputCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserBadgesInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    name?: string | null
    hashedRefreshToken?: string | null
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    habitDefinitions?: HabitDefinitionUncheckedCreateNestedManyWithoutUserInput
    habitLogs?: HabitLogUncheckedCreateNestedManyWithoutUserInput
    healthLogs?: HealthLogUncheckedCreateNestedManyWithoutUserInput
    userQuests?: UserQuestProgressUncheckedCreateNestedManyWithoutUserInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    aiOutputs?: AIOutputUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserBadgesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserBadgesInput, UserUncheckedCreateWithoutUserBadgesInput>
  }

  export type BadgeDefinitionCreateWithoutUserBadgesInput = {
    name: string
    description: string
    criteria: JsonNullValueInput | InputJsonValue
    icon?: string | null
    createdAt?: Date | string
    questsRewarded?: QuestDefinitionCreateNestedManyWithoutBadgeRewardInput
  }

  export type BadgeDefinitionUncheckedCreateWithoutUserBadgesInput = {
    id?: number
    name: string
    description: string
    criteria: JsonNullValueInput | InputJsonValue
    icon?: string | null
    createdAt?: Date | string
    questsRewarded?: QuestDefinitionUncheckedCreateNestedManyWithoutBadgeRewardInput
  }

  export type BadgeDefinitionCreateOrConnectWithoutUserBadgesInput = {
    where: BadgeDefinitionWhereUniqueInput
    create: XOR<BadgeDefinitionCreateWithoutUserBadgesInput, BadgeDefinitionUncheckedCreateWithoutUserBadgesInput>
  }

  export type UserUpsertWithoutUserBadgesInput = {
    update: XOR<UserUpdateWithoutUserBadgesInput, UserUncheckedUpdateWithoutUserBadgesInput>
    create: XOR<UserCreateWithoutUserBadgesInput, UserUncheckedCreateWithoutUserBadgesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserBadgesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserBadgesInput, UserUncheckedUpdateWithoutUserBadgesInput>
  }

  export type UserUpdateWithoutUserBadgesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: ProfileUpdateOneWithoutUserNestedInput
    habitDefinitions?: HabitDefinitionUpdateManyWithoutUserNestedInput
    habitLogs?: HabitLogUpdateManyWithoutUserNestedInput
    healthLogs?: HealthLogUpdateManyWithoutUserNestedInput
    userQuests?: UserQuestProgressUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
    aiOutputs?: AIOutputUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserBadgesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    habitDefinitions?: HabitDefinitionUncheckedUpdateManyWithoutUserNestedInput
    habitLogs?: HabitLogUncheckedUpdateManyWithoutUserNestedInput
    healthLogs?: HealthLogUncheckedUpdateManyWithoutUserNestedInput
    userQuests?: UserQuestProgressUncheckedUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    aiOutputs?: AIOutputUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BadgeDefinitionUpsertWithoutUserBadgesInput = {
    update: XOR<BadgeDefinitionUpdateWithoutUserBadgesInput, BadgeDefinitionUncheckedUpdateWithoutUserBadgesInput>
    create: XOR<BadgeDefinitionCreateWithoutUserBadgesInput, BadgeDefinitionUncheckedCreateWithoutUserBadgesInput>
    where?: BadgeDefinitionWhereInput
  }

  export type BadgeDefinitionUpdateToOneWithWhereWithoutUserBadgesInput = {
    where?: BadgeDefinitionWhereInput
    data: XOR<BadgeDefinitionUpdateWithoutUserBadgesInput, BadgeDefinitionUncheckedUpdateWithoutUserBadgesInput>
  }

  export type BadgeDefinitionUpdateWithoutUserBadgesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    criteria?: JsonNullValueInput | InputJsonValue
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questsRewarded?: QuestDefinitionUpdateManyWithoutBadgeRewardNestedInput
  }

  export type BadgeDefinitionUncheckedUpdateWithoutUserBadgesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    criteria?: JsonNullValueInput | InputJsonValue
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questsRewarded?: QuestDefinitionUncheckedUpdateManyWithoutBadgeRewardNestedInput
  }

  export type BadgeDefinitionCreateWithoutQuestsRewardedInput = {
    name: string
    description: string
    criteria: JsonNullValueInput | InputJsonValue
    icon?: string | null
    createdAt?: Date | string
    userBadges?: UserBadgeCreateNestedManyWithoutBadgeInput
  }

  export type BadgeDefinitionUncheckedCreateWithoutQuestsRewardedInput = {
    id?: number
    name: string
    description: string
    criteria: JsonNullValueInput | InputJsonValue
    icon?: string | null
    createdAt?: Date | string
    userBadges?: UserBadgeUncheckedCreateNestedManyWithoutBadgeInput
  }

  export type BadgeDefinitionCreateOrConnectWithoutQuestsRewardedInput = {
    where: BadgeDefinitionWhereUniqueInput
    create: XOR<BadgeDefinitionCreateWithoutQuestsRewardedInput, BadgeDefinitionUncheckedCreateWithoutQuestsRewardedInput>
  }

  export type UserQuestProgressCreateWithoutQuestInput = {
    status?: $Enums.QuestStatus
    progressData?: NullableJsonNullValueInput | InputJsonValue
    startDate?: Date | string
    completionDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserQuestsInput
  }

  export type UserQuestProgressUncheckedCreateWithoutQuestInput = {
    id?: number
    userId: number
    status?: $Enums.QuestStatus
    progressData?: NullableJsonNullValueInput | InputJsonValue
    startDate?: Date | string
    completionDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserQuestProgressCreateOrConnectWithoutQuestInput = {
    where: UserQuestProgressWhereUniqueInput
    create: XOR<UserQuestProgressCreateWithoutQuestInput, UserQuestProgressUncheckedCreateWithoutQuestInput>
  }

  export type UserQuestProgressCreateManyQuestInputEnvelope = {
    data: UserQuestProgressCreateManyQuestInput | UserQuestProgressCreateManyQuestInput[]
    skipDuplicates?: boolean
  }

  export type AIOutputCreateWithoutRelatedQuestInput = {
    type: $Enums.AIOutputType
    text: string
    createdAt?: Date | string
    seenByUser?: boolean
    user: UserCreateNestedOneWithoutAiOutputsInput
  }

  export type AIOutputUncheckedCreateWithoutRelatedQuestInput = {
    id?: number
    userId: number
    type: $Enums.AIOutputType
    text: string
    createdAt?: Date | string
    seenByUser?: boolean
  }

  export type AIOutputCreateOrConnectWithoutRelatedQuestInput = {
    where: AIOutputWhereUniqueInput
    create: XOR<AIOutputCreateWithoutRelatedQuestInput, AIOutputUncheckedCreateWithoutRelatedQuestInput>
  }

  export type AIOutputCreateManyRelatedQuestInputEnvelope = {
    data: AIOutputCreateManyRelatedQuestInput | AIOutputCreateManyRelatedQuestInput[]
    skipDuplicates?: boolean
  }

  export type BadgeDefinitionUpsertWithoutQuestsRewardedInput = {
    update: XOR<BadgeDefinitionUpdateWithoutQuestsRewardedInput, BadgeDefinitionUncheckedUpdateWithoutQuestsRewardedInput>
    create: XOR<BadgeDefinitionCreateWithoutQuestsRewardedInput, BadgeDefinitionUncheckedCreateWithoutQuestsRewardedInput>
    where?: BadgeDefinitionWhereInput
  }

  export type BadgeDefinitionUpdateToOneWithWhereWithoutQuestsRewardedInput = {
    where?: BadgeDefinitionWhereInput
    data: XOR<BadgeDefinitionUpdateWithoutQuestsRewardedInput, BadgeDefinitionUncheckedUpdateWithoutQuestsRewardedInput>
  }

  export type BadgeDefinitionUpdateWithoutQuestsRewardedInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    criteria?: JsonNullValueInput | InputJsonValue
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userBadges?: UserBadgeUpdateManyWithoutBadgeNestedInput
  }

  export type BadgeDefinitionUncheckedUpdateWithoutQuestsRewardedInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    criteria?: JsonNullValueInput | InputJsonValue
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userBadges?: UserBadgeUncheckedUpdateManyWithoutBadgeNestedInput
  }

  export type UserQuestProgressUpsertWithWhereUniqueWithoutQuestInput = {
    where: UserQuestProgressWhereUniqueInput
    update: XOR<UserQuestProgressUpdateWithoutQuestInput, UserQuestProgressUncheckedUpdateWithoutQuestInput>
    create: XOR<UserQuestProgressCreateWithoutQuestInput, UserQuestProgressUncheckedCreateWithoutQuestInput>
  }

  export type UserQuestProgressUpdateWithWhereUniqueWithoutQuestInput = {
    where: UserQuestProgressWhereUniqueInput
    data: XOR<UserQuestProgressUpdateWithoutQuestInput, UserQuestProgressUncheckedUpdateWithoutQuestInput>
  }

  export type UserQuestProgressUpdateManyWithWhereWithoutQuestInput = {
    where: UserQuestProgressScalarWhereInput
    data: XOR<UserQuestProgressUpdateManyMutationInput, UserQuestProgressUncheckedUpdateManyWithoutQuestInput>
  }

  export type AIOutputUpsertWithWhereUniqueWithoutRelatedQuestInput = {
    where: AIOutputWhereUniqueInput
    update: XOR<AIOutputUpdateWithoutRelatedQuestInput, AIOutputUncheckedUpdateWithoutRelatedQuestInput>
    create: XOR<AIOutputCreateWithoutRelatedQuestInput, AIOutputUncheckedCreateWithoutRelatedQuestInput>
  }

  export type AIOutputUpdateWithWhereUniqueWithoutRelatedQuestInput = {
    where: AIOutputWhereUniqueInput
    data: XOR<AIOutputUpdateWithoutRelatedQuestInput, AIOutputUncheckedUpdateWithoutRelatedQuestInput>
  }

  export type AIOutputUpdateManyWithWhereWithoutRelatedQuestInput = {
    where: AIOutputScalarWhereInput
    data: XOR<AIOutputUpdateManyMutationInput, AIOutputUncheckedUpdateManyWithoutRelatedQuestInput>
  }

  export type UserCreateWithoutUserQuestsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    name?: string | null
    hashedRefreshToken?: string | null
    profile?: ProfileCreateNestedOneWithoutUserInput
    habitDefinitions?: HabitDefinitionCreateNestedManyWithoutUserInput
    habitLogs?: HabitLogCreateNestedManyWithoutUserInput
    healthLogs?: HealthLogCreateNestedManyWithoutUserInput
    userBadges?: UserBadgeCreateNestedManyWithoutUserInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
    aiOutputs?: AIOutputCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserQuestsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    name?: string | null
    hashedRefreshToken?: string | null
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    habitDefinitions?: HabitDefinitionUncheckedCreateNestedManyWithoutUserInput
    habitLogs?: HabitLogUncheckedCreateNestedManyWithoutUserInput
    healthLogs?: HealthLogUncheckedCreateNestedManyWithoutUserInput
    userBadges?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    aiOutputs?: AIOutputUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserQuestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserQuestsInput, UserUncheckedCreateWithoutUserQuestsInput>
  }

  export type QuestDefinitionCreateWithoutUserQuestsInput = {
    type: $Enums.QuestType
    title: string
    description: string
    criteria: JsonNullValueInput | InputJsonValue
    xpReward?: number
    isActive?: boolean
    createdAt?: Date | string
    badgeReward?: BadgeDefinitionCreateNestedOneWithoutQuestsRewardedInput
    aiOutputs?: AIOutputCreateNestedManyWithoutRelatedQuestInput
  }

  export type QuestDefinitionUncheckedCreateWithoutUserQuestsInput = {
    id?: number
    type: $Enums.QuestType
    title: string
    description: string
    criteria: JsonNullValueInput | InputJsonValue
    xpReward?: number
    badgeRewardId?: number | null
    isActive?: boolean
    createdAt?: Date | string
    aiOutputs?: AIOutputUncheckedCreateNestedManyWithoutRelatedQuestInput
  }

  export type QuestDefinitionCreateOrConnectWithoutUserQuestsInput = {
    where: QuestDefinitionWhereUniqueInput
    create: XOR<QuestDefinitionCreateWithoutUserQuestsInput, QuestDefinitionUncheckedCreateWithoutUserQuestsInput>
  }

  export type UserUpsertWithoutUserQuestsInput = {
    update: XOR<UserUpdateWithoutUserQuestsInput, UserUncheckedUpdateWithoutUserQuestsInput>
    create: XOR<UserCreateWithoutUserQuestsInput, UserUncheckedCreateWithoutUserQuestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserQuestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserQuestsInput, UserUncheckedUpdateWithoutUserQuestsInput>
  }

  export type UserUpdateWithoutUserQuestsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: ProfileUpdateOneWithoutUserNestedInput
    habitDefinitions?: HabitDefinitionUpdateManyWithoutUserNestedInput
    habitLogs?: HabitLogUpdateManyWithoutUserNestedInput
    healthLogs?: HealthLogUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgeUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
    aiOutputs?: AIOutputUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserQuestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    habitDefinitions?: HabitDefinitionUncheckedUpdateManyWithoutUserNestedInput
    habitLogs?: HabitLogUncheckedUpdateManyWithoutUserNestedInput
    healthLogs?: HealthLogUncheckedUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgeUncheckedUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    aiOutputs?: AIOutputUncheckedUpdateManyWithoutUserNestedInput
  }

  export type QuestDefinitionUpsertWithoutUserQuestsInput = {
    update: XOR<QuestDefinitionUpdateWithoutUserQuestsInput, QuestDefinitionUncheckedUpdateWithoutUserQuestsInput>
    create: XOR<QuestDefinitionCreateWithoutUserQuestsInput, QuestDefinitionUncheckedCreateWithoutUserQuestsInput>
    where?: QuestDefinitionWhereInput
  }

  export type QuestDefinitionUpdateToOneWithWhereWithoutUserQuestsInput = {
    where?: QuestDefinitionWhereInput
    data: XOR<QuestDefinitionUpdateWithoutUserQuestsInput, QuestDefinitionUncheckedUpdateWithoutUserQuestsInput>
  }

  export type QuestDefinitionUpdateWithoutUserQuestsInput = {
    type?: EnumQuestTypeFieldUpdateOperationsInput | $Enums.QuestType
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    criteria?: JsonNullValueInput | InputJsonValue
    xpReward?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badgeReward?: BadgeDefinitionUpdateOneWithoutQuestsRewardedNestedInput
    aiOutputs?: AIOutputUpdateManyWithoutRelatedQuestNestedInput
  }

  export type QuestDefinitionUncheckedUpdateWithoutUserQuestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumQuestTypeFieldUpdateOperationsInput | $Enums.QuestType
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    criteria?: JsonNullValueInput | InputJsonValue
    xpReward?: IntFieldUpdateOperationsInput | number
    badgeRewardId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiOutputs?: AIOutputUncheckedUpdateManyWithoutRelatedQuestNestedInput
  }

  export type UserCreateWithoutAiOutputsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    name?: string | null
    hashedRefreshToken?: string | null
    profile?: ProfileCreateNestedOneWithoutUserInput
    habitDefinitions?: HabitDefinitionCreateNestedManyWithoutUserInput
    habitLogs?: HabitLogCreateNestedManyWithoutUserInput
    healthLogs?: HealthLogCreateNestedManyWithoutUserInput
    userBadges?: UserBadgeCreateNestedManyWithoutUserInput
    userQuests?: UserQuestProgressCreateNestedManyWithoutUserInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAiOutputsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    name?: string | null
    hashedRefreshToken?: string | null
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    habitDefinitions?: HabitDefinitionUncheckedCreateNestedManyWithoutUserInput
    habitLogs?: HabitLogUncheckedCreateNestedManyWithoutUserInput
    healthLogs?: HealthLogUncheckedCreateNestedManyWithoutUserInput
    userBadges?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
    userQuests?: UserQuestProgressUncheckedCreateNestedManyWithoutUserInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAiOutputsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAiOutputsInput, UserUncheckedCreateWithoutAiOutputsInput>
  }

  export type QuestDefinitionCreateWithoutAiOutputsInput = {
    type: $Enums.QuestType
    title: string
    description: string
    criteria: JsonNullValueInput | InputJsonValue
    xpReward?: number
    isActive?: boolean
    createdAt?: Date | string
    badgeReward?: BadgeDefinitionCreateNestedOneWithoutQuestsRewardedInput
    userQuests?: UserQuestProgressCreateNestedManyWithoutQuestInput
  }

  export type QuestDefinitionUncheckedCreateWithoutAiOutputsInput = {
    id?: number
    type: $Enums.QuestType
    title: string
    description: string
    criteria: JsonNullValueInput | InputJsonValue
    xpReward?: number
    badgeRewardId?: number | null
    isActive?: boolean
    createdAt?: Date | string
    userQuests?: UserQuestProgressUncheckedCreateNestedManyWithoutQuestInput
  }

  export type QuestDefinitionCreateOrConnectWithoutAiOutputsInput = {
    where: QuestDefinitionWhereUniqueInput
    create: XOR<QuestDefinitionCreateWithoutAiOutputsInput, QuestDefinitionUncheckedCreateWithoutAiOutputsInput>
  }

  export type UserUpsertWithoutAiOutputsInput = {
    update: XOR<UserUpdateWithoutAiOutputsInput, UserUncheckedUpdateWithoutAiOutputsInput>
    create: XOR<UserCreateWithoutAiOutputsInput, UserUncheckedCreateWithoutAiOutputsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAiOutputsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAiOutputsInput, UserUncheckedUpdateWithoutAiOutputsInput>
  }

  export type UserUpdateWithoutAiOutputsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: ProfileUpdateOneWithoutUserNestedInput
    habitDefinitions?: HabitDefinitionUpdateManyWithoutUserNestedInput
    habitLogs?: HabitLogUpdateManyWithoutUserNestedInput
    healthLogs?: HealthLogUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgeUpdateManyWithoutUserNestedInput
    userQuests?: UserQuestProgressUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAiOutputsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    habitDefinitions?: HabitDefinitionUncheckedUpdateManyWithoutUserNestedInput
    habitLogs?: HabitLogUncheckedUpdateManyWithoutUserNestedInput
    healthLogs?: HealthLogUncheckedUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgeUncheckedUpdateManyWithoutUserNestedInput
    userQuests?: UserQuestProgressUncheckedUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type QuestDefinitionUpsertWithoutAiOutputsInput = {
    update: XOR<QuestDefinitionUpdateWithoutAiOutputsInput, QuestDefinitionUncheckedUpdateWithoutAiOutputsInput>
    create: XOR<QuestDefinitionCreateWithoutAiOutputsInput, QuestDefinitionUncheckedCreateWithoutAiOutputsInput>
    where?: QuestDefinitionWhereInput
  }

  export type QuestDefinitionUpdateToOneWithWhereWithoutAiOutputsInput = {
    where?: QuestDefinitionWhereInput
    data: XOR<QuestDefinitionUpdateWithoutAiOutputsInput, QuestDefinitionUncheckedUpdateWithoutAiOutputsInput>
  }

  export type QuestDefinitionUpdateWithoutAiOutputsInput = {
    type?: EnumQuestTypeFieldUpdateOperationsInput | $Enums.QuestType
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    criteria?: JsonNullValueInput | InputJsonValue
    xpReward?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badgeReward?: BadgeDefinitionUpdateOneWithoutQuestsRewardedNestedInput
    userQuests?: UserQuestProgressUpdateManyWithoutQuestNestedInput
  }

  export type QuestDefinitionUncheckedUpdateWithoutAiOutputsInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumQuestTypeFieldUpdateOperationsInput | $Enums.QuestType
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    criteria?: JsonNullValueInput | InputJsonValue
    xpReward?: IntFieldUpdateOperationsInput | number
    badgeRewardId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userQuests?: UserQuestProgressUncheckedUpdateManyWithoutQuestNestedInput
  }

  export type UserCreateWithoutSettingsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    name?: string | null
    hashedRefreshToken?: string | null
    profile?: ProfileCreateNestedOneWithoutUserInput
    habitDefinitions?: HabitDefinitionCreateNestedManyWithoutUserInput
    habitLogs?: HabitLogCreateNestedManyWithoutUserInput
    healthLogs?: HealthLogCreateNestedManyWithoutUserInput
    userBadges?: UserBadgeCreateNestedManyWithoutUserInput
    userQuests?: UserQuestProgressCreateNestedManyWithoutUserInput
    aiOutputs?: AIOutputCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSettingsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    name?: string | null
    hashedRefreshToken?: string | null
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    habitDefinitions?: HabitDefinitionUncheckedCreateNestedManyWithoutUserInput
    habitLogs?: HabitLogUncheckedCreateNestedManyWithoutUserInput
    healthLogs?: HealthLogUncheckedCreateNestedManyWithoutUserInput
    userBadges?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
    userQuests?: UserQuestProgressUncheckedCreateNestedManyWithoutUserInput
    aiOutputs?: AIOutputUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSettingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
  }

  export type UserUpsertWithoutSettingsInput = {
    update: XOR<UserUpdateWithoutSettingsInput, UserUncheckedUpdateWithoutSettingsInput>
    create: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSettingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSettingsInput, UserUncheckedUpdateWithoutSettingsInput>
  }

  export type UserUpdateWithoutSettingsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: ProfileUpdateOneWithoutUserNestedInput
    habitDefinitions?: HabitDefinitionUpdateManyWithoutUserNestedInput
    habitLogs?: HabitLogUpdateManyWithoutUserNestedInput
    healthLogs?: HealthLogUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgeUpdateManyWithoutUserNestedInput
    userQuests?: UserQuestProgressUpdateManyWithoutUserNestedInput
    aiOutputs?: AIOutputUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSettingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    habitDefinitions?: HabitDefinitionUncheckedUpdateManyWithoutUserNestedInput
    habitLogs?: HabitLogUncheckedUpdateManyWithoutUserNestedInput
    healthLogs?: HealthLogUncheckedUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgeUncheckedUpdateManyWithoutUserNestedInput
    userQuests?: UserQuestProgressUncheckedUpdateManyWithoutUserNestedInput
    aiOutputs?: AIOutputUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HabitDefinitionCreateManyUserInput = {
    id?: number
    name: string
    description?: string | null
    frequency: string
    target?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HabitLogCreateManyUserInput = {
    id?: number
    habitId: number
    completionDate: Date | string
    notes?: string | null
    createdAt?: Date | string
  }

  export type HealthLogCreateManyUserInput = {
    id?: number
    date: Date | string
    metricType: $Enums.HealthMetricType
    value: number
    source?: $Enums.HealthDataSource
    createdAt?: Date | string
  }

  export type UserBadgeCreateManyUserInput = {
    id?: number
    badgeId: number
    earnedDate?: Date | string
  }

  export type UserQuestProgressCreateManyUserInput = {
    id?: number
    questId: number
    status?: $Enums.QuestStatus
    progressData?: NullableJsonNullValueInput | InputJsonValue
    startDate?: Date | string
    completionDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AIOutputCreateManyUserInput = {
    id?: number
    type: $Enums.AIOutputType
    text: string
    relatedQuestId?: number | null
    createdAt?: Date | string
    seenByUser?: boolean
  }

  export type HabitDefinitionUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: StringFieldUpdateOperationsInput | string
    target?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habitLogs?: HabitLogUpdateManyWithoutHabitDefinitionNestedInput
  }

  export type HabitDefinitionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: StringFieldUpdateOperationsInput | string
    target?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habitLogs?: HabitLogUncheckedUpdateManyWithoutHabitDefinitionNestedInput
  }

  export type HabitDefinitionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: StringFieldUpdateOperationsInput | string
    target?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitLogUpdateWithoutUserInput = {
    completionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habitDefinition?: HabitDefinitionUpdateOneRequiredWithoutHabitLogsNestedInput
  }

  export type HabitLogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    habitId?: IntFieldUpdateOperationsInput | number
    completionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitLogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    habitId?: IntFieldUpdateOperationsInput | number
    completionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HealthLogUpdateWithoutUserInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    metricType?: EnumHealthMetricTypeFieldUpdateOperationsInput | $Enums.HealthMetricType
    value?: FloatFieldUpdateOperationsInput | number
    source?: EnumHealthDataSourceFieldUpdateOperationsInput | $Enums.HealthDataSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HealthLogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    metricType?: EnumHealthMetricTypeFieldUpdateOperationsInput | $Enums.HealthMetricType
    value?: FloatFieldUpdateOperationsInput | number
    source?: EnumHealthDataSourceFieldUpdateOperationsInput | $Enums.HealthDataSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HealthLogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    metricType?: EnumHealthMetricTypeFieldUpdateOperationsInput | $Enums.HealthMetricType
    value?: FloatFieldUpdateOperationsInput | number
    source?: EnumHealthDataSourceFieldUpdateOperationsInput | $Enums.HealthDataSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeUpdateWithoutUserInput = {
    earnedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    badge?: BadgeDefinitionUpdateOneRequiredWithoutUserBadgesNestedInput
  }

  export type UserBadgeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    badgeId?: IntFieldUpdateOperationsInput | number
    earnedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    badgeId?: IntFieldUpdateOperationsInput | number
    earnedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuestProgressUpdateWithoutUserInput = {
    status?: EnumQuestStatusFieldUpdateOperationsInput | $Enums.QuestStatus
    progressData?: NullableJsonNullValueInput | InputJsonValue
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quest?: QuestDefinitionUpdateOneRequiredWithoutUserQuestsNestedInput
  }

  export type UserQuestProgressUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    questId?: IntFieldUpdateOperationsInput | number
    status?: EnumQuestStatusFieldUpdateOperationsInput | $Enums.QuestStatus
    progressData?: NullableJsonNullValueInput | InputJsonValue
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuestProgressUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    questId?: IntFieldUpdateOperationsInput | number
    status?: EnumQuestStatusFieldUpdateOperationsInput | $Enums.QuestStatus
    progressData?: NullableJsonNullValueInput | InputJsonValue
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIOutputUpdateWithoutUserInput = {
    type?: EnumAIOutputTypeFieldUpdateOperationsInput | $Enums.AIOutputType
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seenByUser?: BoolFieldUpdateOperationsInput | boolean
    relatedQuest?: QuestDefinitionUpdateOneWithoutAiOutputsNestedInput
  }

  export type AIOutputUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumAIOutputTypeFieldUpdateOperationsInput | $Enums.AIOutputType
    text?: StringFieldUpdateOperationsInput | string
    relatedQuestId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seenByUser?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AIOutputUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumAIOutputTypeFieldUpdateOperationsInput | $Enums.AIOutputType
    text?: StringFieldUpdateOperationsInput | string
    relatedQuestId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seenByUser?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HabitLogCreateManyHabitDefinitionInput = {
    id?: number
    userId: number
    completionDate: Date | string
    notes?: string | null
    createdAt?: Date | string
  }

  export type HabitLogUpdateWithoutHabitDefinitionInput = {
    completionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHabitLogsNestedInput
  }

  export type HabitLogUncheckedUpdateWithoutHabitDefinitionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    completionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitLogUncheckedUpdateManyWithoutHabitDefinitionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    completionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeCreateManyBadgeInput = {
    id?: number
    userId: number
    earnedDate?: Date | string
  }

  export type QuestDefinitionCreateManyBadgeRewardInput = {
    id?: number
    type: $Enums.QuestType
    title: string
    description: string
    criteria: JsonNullValueInput | InputJsonValue
    xpReward?: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type UserBadgeUpdateWithoutBadgeInput = {
    earnedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserBadgesNestedInput
  }

  export type UserBadgeUncheckedUpdateWithoutBadgeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    earnedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeUncheckedUpdateManyWithoutBadgeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    earnedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestDefinitionUpdateWithoutBadgeRewardInput = {
    type?: EnumQuestTypeFieldUpdateOperationsInput | $Enums.QuestType
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    criteria?: JsonNullValueInput | InputJsonValue
    xpReward?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userQuests?: UserQuestProgressUpdateManyWithoutQuestNestedInput
    aiOutputs?: AIOutputUpdateManyWithoutRelatedQuestNestedInput
  }

  export type QuestDefinitionUncheckedUpdateWithoutBadgeRewardInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumQuestTypeFieldUpdateOperationsInput | $Enums.QuestType
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    criteria?: JsonNullValueInput | InputJsonValue
    xpReward?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userQuests?: UserQuestProgressUncheckedUpdateManyWithoutQuestNestedInput
    aiOutputs?: AIOutputUncheckedUpdateManyWithoutRelatedQuestNestedInput
  }

  export type QuestDefinitionUncheckedUpdateManyWithoutBadgeRewardInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumQuestTypeFieldUpdateOperationsInput | $Enums.QuestType
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    criteria?: JsonNullValueInput | InputJsonValue
    xpReward?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuestProgressCreateManyQuestInput = {
    id?: number
    userId: number
    status?: $Enums.QuestStatus
    progressData?: NullableJsonNullValueInput | InputJsonValue
    startDate?: Date | string
    completionDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AIOutputCreateManyRelatedQuestInput = {
    id?: number
    userId: number
    type: $Enums.AIOutputType
    text: string
    createdAt?: Date | string
    seenByUser?: boolean
  }

  export type UserQuestProgressUpdateWithoutQuestInput = {
    status?: EnumQuestStatusFieldUpdateOperationsInput | $Enums.QuestStatus
    progressData?: NullableJsonNullValueInput | InputJsonValue
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserQuestsNestedInput
  }

  export type UserQuestProgressUncheckedUpdateWithoutQuestInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumQuestStatusFieldUpdateOperationsInput | $Enums.QuestStatus
    progressData?: NullableJsonNullValueInput | InputJsonValue
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuestProgressUncheckedUpdateManyWithoutQuestInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumQuestStatusFieldUpdateOperationsInput | $Enums.QuestStatus
    progressData?: NullableJsonNullValueInput | InputJsonValue
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIOutputUpdateWithoutRelatedQuestInput = {
    type?: EnumAIOutputTypeFieldUpdateOperationsInput | $Enums.AIOutputType
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seenByUser?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutAiOutputsNestedInput
  }

  export type AIOutputUncheckedUpdateWithoutRelatedQuestInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumAIOutputTypeFieldUpdateOperationsInput | $Enums.AIOutputType
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seenByUser?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AIOutputUncheckedUpdateManyWithoutRelatedQuestInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumAIOutputTypeFieldUpdateOperationsInput | $Enums.AIOutputType
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seenByUser?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}