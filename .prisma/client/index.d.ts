
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model IndexSource
 * 
 */
export type IndexSource = $Result.DefaultSelection<Prisma.$IndexSourcePayload>
/**
 * Model IndexTerm
 * 
 */
export type IndexTerm = $Result.DefaultSelection<Prisma.$IndexTermPayload>
/**
 * Model IndexJob
 * 
 */
export type IndexJob = $Result.DefaultSelection<Prisma.$IndexJobPayload>
/**
 * Model LibraryItem
 * 
 */
export type LibraryItem = $Result.DefaultSelection<Prisma.$LibraryItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  EDITOR: 'EDITOR'
};

export type Role = (typeof Role)[keyof typeof Role]


export const LibraryItemType: {
  DRIVE_FILE: 'DRIVE_FILE',
  DRIVE_DOC: 'DRIVE_DOC',
  DRIVE_SHEET: 'DRIVE_SHEET',
  DRIVE_SLIDE: 'DRIVE_SLIDE',
  PDF: 'PDF',
  HTML: 'HTML',
  JS: 'JS',
  SHELL: 'SHELL',
  ARCHIVE: 'ARCHIVE',
  UNKNOWN: 'UNKNOWN'
};

export type LibraryItemType = (typeof LibraryItemType)[keyof typeof LibraryItemType]


export const LibraryItemStatus: {
  DISCOVERED: 'DISCOVERED',
  VERIFIED: 'VERIFIED',
  BLOCKED: 'BLOCKED'
};

export type LibraryItemStatus = (typeof LibraryItemStatus)[keyof typeof LibraryItemStatus]


export const IndexJobStatus: {
  QUEUED: 'QUEUED',
  RUNNING: 'RUNNING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type IndexJobStatus = (typeof IndexJobStatus)[keyof typeof IndexJobStatus]


export const IndexSourceKind: {
  SEARCH_ENGINE: 'SEARCH_ENGINE',
  MANUAL: 'MANUAL'
};

export type IndexSourceKind = (typeof IndexSourceKind)[keyof typeof IndexSourceKind]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type LibraryItemType = $Enums.LibraryItemType

export const LibraryItemType: typeof $Enums.LibraryItemType

export type LibraryItemStatus = $Enums.LibraryItemStatus

export const LibraryItemStatus: typeof $Enums.LibraryItemStatus

export type IndexJobStatus = $Enums.IndexJobStatus

export const IndexJobStatus: typeof $Enums.IndexJobStatus

export type IndexSourceKind = $Enums.IndexSourceKind

export const IndexSourceKind: typeof $Enums.IndexSourceKind

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

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
   * `prisma.indexSource`: Exposes CRUD operations for the **IndexSource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IndexSources
    * const indexSources = await prisma.indexSource.findMany()
    * ```
    */
  get indexSource(): Prisma.IndexSourceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.indexTerm`: Exposes CRUD operations for the **IndexTerm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IndexTerms
    * const indexTerms = await prisma.indexTerm.findMany()
    * ```
    */
  get indexTerm(): Prisma.IndexTermDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.indexJob`: Exposes CRUD operations for the **IndexJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IndexJobs
    * const indexJobs = await prisma.indexJob.findMany()
    * ```
    */
  get indexJob(): Prisma.IndexJobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.libraryItem`: Exposes CRUD operations for the **LibraryItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LibraryItems
    * const libraryItems = await prisma.libraryItem.findMany()
    * ```
    */
  get libraryItem(): Prisma.LibraryItemDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    IndexSource: 'IndexSource',
    IndexTerm: 'IndexTerm',
    IndexJob: 'IndexJob',
    LibraryItem: 'LibraryItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "indexSource" | "indexTerm" | "indexJob" | "libraryItem"
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
      IndexSource: {
        payload: Prisma.$IndexSourcePayload<ExtArgs>
        fields: Prisma.IndexSourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IndexSourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexSourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IndexSourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexSourcePayload>
          }
          findFirst: {
            args: Prisma.IndexSourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexSourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IndexSourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexSourcePayload>
          }
          findMany: {
            args: Prisma.IndexSourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexSourcePayload>[]
          }
          create: {
            args: Prisma.IndexSourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexSourcePayload>
          }
          createMany: {
            args: Prisma.IndexSourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IndexSourceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexSourcePayload>[]
          }
          delete: {
            args: Prisma.IndexSourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexSourcePayload>
          }
          update: {
            args: Prisma.IndexSourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexSourcePayload>
          }
          deleteMany: {
            args: Prisma.IndexSourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IndexSourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IndexSourceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexSourcePayload>[]
          }
          upsert: {
            args: Prisma.IndexSourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexSourcePayload>
          }
          aggregate: {
            args: Prisma.IndexSourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIndexSource>
          }
          groupBy: {
            args: Prisma.IndexSourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<IndexSourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.IndexSourceCountArgs<ExtArgs>
            result: $Utils.Optional<IndexSourceCountAggregateOutputType> | number
          }
        }
      }
      IndexTerm: {
        payload: Prisma.$IndexTermPayload<ExtArgs>
        fields: Prisma.IndexTermFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IndexTermFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexTermPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IndexTermFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexTermPayload>
          }
          findFirst: {
            args: Prisma.IndexTermFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexTermPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IndexTermFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexTermPayload>
          }
          findMany: {
            args: Prisma.IndexTermFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexTermPayload>[]
          }
          create: {
            args: Prisma.IndexTermCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexTermPayload>
          }
          createMany: {
            args: Prisma.IndexTermCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IndexTermCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexTermPayload>[]
          }
          delete: {
            args: Prisma.IndexTermDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexTermPayload>
          }
          update: {
            args: Prisma.IndexTermUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexTermPayload>
          }
          deleteMany: {
            args: Prisma.IndexTermDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IndexTermUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IndexTermUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexTermPayload>[]
          }
          upsert: {
            args: Prisma.IndexTermUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexTermPayload>
          }
          aggregate: {
            args: Prisma.IndexTermAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIndexTerm>
          }
          groupBy: {
            args: Prisma.IndexTermGroupByArgs<ExtArgs>
            result: $Utils.Optional<IndexTermGroupByOutputType>[]
          }
          count: {
            args: Prisma.IndexTermCountArgs<ExtArgs>
            result: $Utils.Optional<IndexTermCountAggregateOutputType> | number
          }
        }
      }
      IndexJob: {
        payload: Prisma.$IndexJobPayload<ExtArgs>
        fields: Prisma.IndexJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IndexJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IndexJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexJobPayload>
          }
          findFirst: {
            args: Prisma.IndexJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IndexJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexJobPayload>
          }
          findMany: {
            args: Prisma.IndexJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexJobPayload>[]
          }
          create: {
            args: Prisma.IndexJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexJobPayload>
          }
          createMany: {
            args: Prisma.IndexJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IndexJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexJobPayload>[]
          }
          delete: {
            args: Prisma.IndexJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexJobPayload>
          }
          update: {
            args: Prisma.IndexJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexJobPayload>
          }
          deleteMany: {
            args: Prisma.IndexJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IndexJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IndexJobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexJobPayload>[]
          }
          upsert: {
            args: Prisma.IndexJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexJobPayload>
          }
          aggregate: {
            args: Prisma.IndexJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIndexJob>
          }
          groupBy: {
            args: Prisma.IndexJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<IndexJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.IndexJobCountArgs<ExtArgs>
            result: $Utils.Optional<IndexJobCountAggregateOutputType> | number
          }
        }
      }
      LibraryItem: {
        payload: Prisma.$LibraryItemPayload<ExtArgs>
        fields: Prisma.LibraryItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LibraryItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LibraryItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryItemPayload>
          }
          findFirst: {
            args: Prisma.LibraryItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LibraryItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryItemPayload>
          }
          findMany: {
            args: Prisma.LibraryItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryItemPayload>[]
          }
          create: {
            args: Prisma.LibraryItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryItemPayload>
          }
          createMany: {
            args: Prisma.LibraryItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LibraryItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryItemPayload>[]
          }
          delete: {
            args: Prisma.LibraryItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryItemPayload>
          }
          update: {
            args: Prisma.LibraryItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryItemPayload>
          }
          deleteMany: {
            args: Prisma.LibraryItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LibraryItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LibraryItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryItemPayload>[]
          }
          upsert: {
            args: Prisma.LibraryItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryItemPayload>
          }
          aggregate: {
            args: Prisma.LibraryItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLibraryItem>
          }
          groupBy: {
            args: Prisma.LibraryItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<LibraryItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.LibraryItemCountArgs<ExtArgs>
            result: $Utils.Optional<LibraryItemCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    indexSource?: IndexSourceOmit
    indexTerm?: IndexTermOmit
    indexJob?: IndexJobOmit
    libraryItem?: LibraryItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type IndexSourceCountOutputType
   */

  export type IndexSourceCountOutputType = {
    terms: number
    jobs: number
    items: number
  }

  export type IndexSourceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    terms?: boolean | IndexSourceCountOutputTypeCountTermsArgs
    jobs?: boolean | IndexSourceCountOutputTypeCountJobsArgs
    items?: boolean | IndexSourceCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * IndexSourceCountOutputType without action
   */
  export type IndexSourceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexSourceCountOutputType
     */
    select?: IndexSourceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IndexSourceCountOutputType without action
   */
  export type IndexSourceCountOutputTypeCountTermsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IndexTermWhereInput
  }

  /**
   * IndexSourceCountOutputType without action
   */
  export type IndexSourceCountOutputTypeCountJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IndexJobWhereInput
  }

  /**
   * IndexSourceCountOutputType without action
   */
  export type IndexSourceCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LibraryItemWhereInput
  }


  /**
   * Count Type IndexTermCountOutputType
   */

  export type IndexTermCountOutputType = {
    jobs: number
  }

  export type IndexTermCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobs?: boolean | IndexTermCountOutputTypeCountJobsArgs
  }

  // Custom InputTypes
  /**
   * IndexTermCountOutputType without action
   */
  export type IndexTermCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexTermCountOutputType
     */
    select?: IndexTermCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IndexTermCountOutputType without action
   */
  export type IndexTermCountOutputTypeCountJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IndexJobWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      passwordHash: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
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
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
  }


  /**
   * Model IndexSource
   */

  export type AggregateIndexSource = {
    _count: IndexSourceCountAggregateOutputType | null
    _min: IndexSourceMinAggregateOutputType | null
    _max: IndexSourceMaxAggregateOutputType | null
  }

  export type IndexSourceMinAggregateOutputType = {
    id: string | null
    name: string | null
    query: string | null
    kind: $Enums.IndexSourceKind | null
    enabled: boolean | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IndexSourceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    query: string | null
    kind: $Enums.IndexSourceKind | null
    enabled: boolean | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IndexSourceCountAggregateOutputType = {
    id: number
    name: number
    query: number
    kind: number
    enabled: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IndexSourceMinAggregateInputType = {
    id?: true
    name?: true
    query?: true
    kind?: true
    enabled?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IndexSourceMaxAggregateInputType = {
    id?: true
    name?: true
    query?: true
    kind?: true
    enabled?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IndexSourceCountAggregateInputType = {
    id?: true
    name?: true
    query?: true
    kind?: true
    enabled?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IndexSourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IndexSource to aggregate.
     */
    where?: IndexSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndexSources to fetch.
     */
    orderBy?: IndexSourceOrderByWithRelationInput | IndexSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IndexSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndexSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndexSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IndexSources
    **/
    _count?: true | IndexSourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IndexSourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IndexSourceMaxAggregateInputType
  }

  export type GetIndexSourceAggregateType<T extends IndexSourceAggregateArgs> = {
        [P in keyof T & keyof AggregateIndexSource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIndexSource[P]>
      : GetScalarType<T[P], AggregateIndexSource[P]>
  }




  export type IndexSourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IndexSourceWhereInput
    orderBy?: IndexSourceOrderByWithAggregationInput | IndexSourceOrderByWithAggregationInput[]
    by: IndexSourceScalarFieldEnum[] | IndexSourceScalarFieldEnum
    having?: IndexSourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IndexSourceCountAggregateInputType | true
    _min?: IndexSourceMinAggregateInputType
    _max?: IndexSourceMaxAggregateInputType
  }

  export type IndexSourceGroupByOutputType = {
    id: string
    name: string
    query: string
    kind: $Enums.IndexSourceKind
    enabled: boolean
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: IndexSourceCountAggregateOutputType | null
    _min: IndexSourceMinAggregateOutputType | null
    _max: IndexSourceMaxAggregateOutputType | null
  }

  type GetIndexSourceGroupByPayload<T extends IndexSourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IndexSourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IndexSourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IndexSourceGroupByOutputType[P]>
            : GetScalarType<T[P], IndexSourceGroupByOutputType[P]>
        }
      >
    >


  export type IndexSourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    query?: boolean
    kind?: boolean
    enabled?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    terms?: boolean | IndexSource$termsArgs<ExtArgs>
    jobs?: boolean | IndexSource$jobsArgs<ExtArgs>
    items?: boolean | IndexSource$itemsArgs<ExtArgs>
    _count?: boolean | IndexSourceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["indexSource"]>

  export type IndexSourceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    query?: boolean
    kind?: boolean
    enabled?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["indexSource"]>

  export type IndexSourceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    query?: boolean
    kind?: boolean
    enabled?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["indexSource"]>

  export type IndexSourceSelectScalar = {
    id?: boolean
    name?: boolean
    query?: boolean
    kind?: boolean
    enabled?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IndexSourceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "query" | "kind" | "enabled" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["indexSource"]>
  export type IndexSourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    terms?: boolean | IndexSource$termsArgs<ExtArgs>
    jobs?: boolean | IndexSource$jobsArgs<ExtArgs>
    items?: boolean | IndexSource$itemsArgs<ExtArgs>
    _count?: boolean | IndexSourceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IndexSourceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type IndexSourceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $IndexSourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IndexSource"
    objects: {
      terms: Prisma.$IndexTermPayload<ExtArgs>[]
      jobs: Prisma.$IndexJobPayload<ExtArgs>[]
      items: Prisma.$LibraryItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      query: string
      kind: $Enums.IndexSourceKind
      enabled: boolean
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["indexSource"]>
    composites: {}
  }

  type IndexSourceGetPayload<S extends boolean | null | undefined | IndexSourceDefaultArgs> = $Result.GetResult<Prisma.$IndexSourcePayload, S>

  type IndexSourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IndexSourceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IndexSourceCountAggregateInputType | true
    }

  export interface IndexSourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IndexSource'], meta: { name: 'IndexSource' } }
    /**
     * Find zero or one IndexSource that matches the filter.
     * @param {IndexSourceFindUniqueArgs} args - Arguments to find a IndexSource
     * @example
     * // Get one IndexSource
     * const indexSource = await prisma.indexSource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IndexSourceFindUniqueArgs>(args: SelectSubset<T, IndexSourceFindUniqueArgs<ExtArgs>>): Prisma__IndexSourceClient<$Result.GetResult<Prisma.$IndexSourcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IndexSource that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IndexSourceFindUniqueOrThrowArgs} args - Arguments to find a IndexSource
     * @example
     * // Get one IndexSource
     * const indexSource = await prisma.indexSource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IndexSourceFindUniqueOrThrowArgs>(args: SelectSubset<T, IndexSourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IndexSourceClient<$Result.GetResult<Prisma.$IndexSourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IndexSource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexSourceFindFirstArgs} args - Arguments to find a IndexSource
     * @example
     * // Get one IndexSource
     * const indexSource = await prisma.indexSource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IndexSourceFindFirstArgs>(args?: SelectSubset<T, IndexSourceFindFirstArgs<ExtArgs>>): Prisma__IndexSourceClient<$Result.GetResult<Prisma.$IndexSourcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IndexSource that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexSourceFindFirstOrThrowArgs} args - Arguments to find a IndexSource
     * @example
     * // Get one IndexSource
     * const indexSource = await prisma.indexSource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IndexSourceFindFirstOrThrowArgs>(args?: SelectSubset<T, IndexSourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__IndexSourceClient<$Result.GetResult<Prisma.$IndexSourcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IndexSources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexSourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IndexSources
     * const indexSources = await prisma.indexSource.findMany()
     * 
     * // Get first 10 IndexSources
     * const indexSources = await prisma.indexSource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const indexSourceWithIdOnly = await prisma.indexSource.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IndexSourceFindManyArgs>(args?: SelectSubset<T, IndexSourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndexSourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IndexSource.
     * @param {IndexSourceCreateArgs} args - Arguments to create a IndexSource.
     * @example
     * // Create one IndexSource
     * const IndexSource = await prisma.indexSource.create({
     *   data: {
     *     // ... data to create a IndexSource
     *   }
     * })
     * 
     */
    create<T extends IndexSourceCreateArgs>(args: SelectSubset<T, IndexSourceCreateArgs<ExtArgs>>): Prisma__IndexSourceClient<$Result.GetResult<Prisma.$IndexSourcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IndexSources.
     * @param {IndexSourceCreateManyArgs} args - Arguments to create many IndexSources.
     * @example
     * // Create many IndexSources
     * const indexSource = await prisma.indexSource.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IndexSourceCreateManyArgs>(args?: SelectSubset<T, IndexSourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IndexSources and returns the data saved in the database.
     * @param {IndexSourceCreateManyAndReturnArgs} args - Arguments to create many IndexSources.
     * @example
     * // Create many IndexSources
     * const indexSource = await prisma.indexSource.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IndexSources and only return the `id`
     * const indexSourceWithIdOnly = await prisma.indexSource.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IndexSourceCreateManyAndReturnArgs>(args?: SelectSubset<T, IndexSourceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndexSourcePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IndexSource.
     * @param {IndexSourceDeleteArgs} args - Arguments to delete one IndexSource.
     * @example
     * // Delete one IndexSource
     * const IndexSource = await prisma.indexSource.delete({
     *   where: {
     *     // ... filter to delete one IndexSource
     *   }
     * })
     * 
     */
    delete<T extends IndexSourceDeleteArgs>(args: SelectSubset<T, IndexSourceDeleteArgs<ExtArgs>>): Prisma__IndexSourceClient<$Result.GetResult<Prisma.$IndexSourcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IndexSource.
     * @param {IndexSourceUpdateArgs} args - Arguments to update one IndexSource.
     * @example
     * // Update one IndexSource
     * const indexSource = await prisma.indexSource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IndexSourceUpdateArgs>(args: SelectSubset<T, IndexSourceUpdateArgs<ExtArgs>>): Prisma__IndexSourceClient<$Result.GetResult<Prisma.$IndexSourcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IndexSources.
     * @param {IndexSourceDeleteManyArgs} args - Arguments to filter IndexSources to delete.
     * @example
     * // Delete a few IndexSources
     * const { count } = await prisma.indexSource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IndexSourceDeleteManyArgs>(args?: SelectSubset<T, IndexSourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IndexSources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexSourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IndexSources
     * const indexSource = await prisma.indexSource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IndexSourceUpdateManyArgs>(args: SelectSubset<T, IndexSourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IndexSources and returns the data updated in the database.
     * @param {IndexSourceUpdateManyAndReturnArgs} args - Arguments to update many IndexSources.
     * @example
     * // Update many IndexSources
     * const indexSource = await prisma.indexSource.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IndexSources and only return the `id`
     * const indexSourceWithIdOnly = await prisma.indexSource.updateManyAndReturn({
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
    updateManyAndReturn<T extends IndexSourceUpdateManyAndReturnArgs>(args: SelectSubset<T, IndexSourceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndexSourcePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IndexSource.
     * @param {IndexSourceUpsertArgs} args - Arguments to update or create a IndexSource.
     * @example
     * // Update or create a IndexSource
     * const indexSource = await prisma.indexSource.upsert({
     *   create: {
     *     // ... data to create a IndexSource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IndexSource we want to update
     *   }
     * })
     */
    upsert<T extends IndexSourceUpsertArgs>(args: SelectSubset<T, IndexSourceUpsertArgs<ExtArgs>>): Prisma__IndexSourceClient<$Result.GetResult<Prisma.$IndexSourcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IndexSources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexSourceCountArgs} args - Arguments to filter IndexSources to count.
     * @example
     * // Count the number of IndexSources
     * const count = await prisma.indexSource.count({
     *   where: {
     *     // ... the filter for the IndexSources we want to count
     *   }
     * })
    **/
    count<T extends IndexSourceCountArgs>(
      args?: Subset<T, IndexSourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IndexSourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IndexSource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexSourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IndexSourceAggregateArgs>(args: Subset<T, IndexSourceAggregateArgs>): Prisma.PrismaPromise<GetIndexSourceAggregateType<T>>

    /**
     * Group by IndexSource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexSourceGroupByArgs} args - Group by arguments.
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
      T extends IndexSourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IndexSourceGroupByArgs['orderBy'] }
        : { orderBy?: IndexSourceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IndexSourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIndexSourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IndexSource model
   */
  readonly fields: IndexSourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IndexSource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IndexSourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    terms<T extends IndexSource$termsArgs<ExtArgs> = {}>(args?: Subset<T, IndexSource$termsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndexTermPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    jobs<T extends IndexSource$jobsArgs<ExtArgs> = {}>(args?: Subset<T, IndexSource$jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndexJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    items<T extends IndexSource$itemsArgs<ExtArgs> = {}>(args?: Subset<T, IndexSource$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibraryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the IndexSource model
   */
  interface IndexSourceFieldRefs {
    readonly id: FieldRef<"IndexSource", 'String'>
    readonly name: FieldRef<"IndexSource", 'String'>
    readonly query: FieldRef<"IndexSource", 'String'>
    readonly kind: FieldRef<"IndexSource", 'IndexSourceKind'>
    readonly enabled: FieldRef<"IndexSource", 'Boolean'>
    readonly notes: FieldRef<"IndexSource", 'String'>
    readonly createdAt: FieldRef<"IndexSource", 'DateTime'>
    readonly updatedAt: FieldRef<"IndexSource", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IndexSource findUnique
   */
  export type IndexSourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexSource
     */
    select?: IndexSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexSource
     */
    omit?: IndexSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexSourceInclude<ExtArgs> | null
    /**
     * Filter, which IndexSource to fetch.
     */
    where: IndexSourceWhereUniqueInput
  }

  /**
   * IndexSource findUniqueOrThrow
   */
  export type IndexSourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexSource
     */
    select?: IndexSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexSource
     */
    omit?: IndexSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexSourceInclude<ExtArgs> | null
    /**
     * Filter, which IndexSource to fetch.
     */
    where: IndexSourceWhereUniqueInput
  }

  /**
   * IndexSource findFirst
   */
  export type IndexSourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexSource
     */
    select?: IndexSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexSource
     */
    omit?: IndexSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexSourceInclude<ExtArgs> | null
    /**
     * Filter, which IndexSource to fetch.
     */
    where?: IndexSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndexSources to fetch.
     */
    orderBy?: IndexSourceOrderByWithRelationInput | IndexSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IndexSources.
     */
    cursor?: IndexSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndexSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndexSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndexSources.
     */
    distinct?: IndexSourceScalarFieldEnum | IndexSourceScalarFieldEnum[]
  }

  /**
   * IndexSource findFirstOrThrow
   */
  export type IndexSourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexSource
     */
    select?: IndexSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexSource
     */
    omit?: IndexSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexSourceInclude<ExtArgs> | null
    /**
     * Filter, which IndexSource to fetch.
     */
    where?: IndexSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndexSources to fetch.
     */
    orderBy?: IndexSourceOrderByWithRelationInput | IndexSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IndexSources.
     */
    cursor?: IndexSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndexSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndexSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndexSources.
     */
    distinct?: IndexSourceScalarFieldEnum | IndexSourceScalarFieldEnum[]
  }

  /**
   * IndexSource findMany
   */
  export type IndexSourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexSource
     */
    select?: IndexSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexSource
     */
    omit?: IndexSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexSourceInclude<ExtArgs> | null
    /**
     * Filter, which IndexSources to fetch.
     */
    where?: IndexSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndexSources to fetch.
     */
    orderBy?: IndexSourceOrderByWithRelationInput | IndexSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IndexSources.
     */
    cursor?: IndexSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndexSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndexSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndexSources.
     */
    distinct?: IndexSourceScalarFieldEnum | IndexSourceScalarFieldEnum[]
  }

  /**
   * IndexSource create
   */
  export type IndexSourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexSource
     */
    select?: IndexSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexSource
     */
    omit?: IndexSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexSourceInclude<ExtArgs> | null
    /**
     * The data needed to create a IndexSource.
     */
    data: XOR<IndexSourceCreateInput, IndexSourceUncheckedCreateInput>
  }

  /**
   * IndexSource createMany
   */
  export type IndexSourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IndexSources.
     */
    data: IndexSourceCreateManyInput | IndexSourceCreateManyInput[]
  }

  /**
   * IndexSource createManyAndReturn
   */
  export type IndexSourceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexSource
     */
    select?: IndexSourceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IndexSource
     */
    omit?: IndexSourceOmit<ExtArgs> | null
    /**
     * The data used to create many IndexSources.
     */
    data: IndexSourceCreateManyInput | IndexSourceCreateManyInput[]
  }

  /**
   * IndexSource update
   */
  export type IndexSourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexSource
     */
    select?: IndexSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexSource
     */
    omit?: IndexSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexSourceInclude<ExtArgs> | null
    /**
     * The data needed to update a IndexSource.
     */
    data: XOR<IndexSourceUpdateInput, IndexSourceUncheckedUpdateInput>
    /**
     * Choose, which IndexSource to update.
     */
    where: IndexSourceWhereUniqueInput
  }

  /**
   * IndexSource updateMany
   */
  export type IndexSourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IndexSources.
     */
    data: XOR<IndexSourceUpdateManyMutationInput, IndexSourceUncheckedUpdateManyInput>
    /**
     * Filter which IndexSources to update
     */
    where?: IndexSourceWhereInput
    /**
     * Limit how many IndexSources to update.
     */
    limit?: number
  }

  /**
   * IndexSource updateManyAndReturn
   */
  export type IndexSourceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexSource
     */
    select?: IndexSourceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IndexSource
     */
    omit?: IndexSourceOmit<ExtArgs> | null
    /**
     * The data used to update IndexSources.
     */
    data: XOR<IndexSourceUpdateManyMutationInput, IndexSourceUncheckedUpdateManyInput>
    /**
     * Filter which IndexSources to update
     */
    where?: IndexSourceWhereInput
    /**
     * Limit how many IndexSources to update.
     */
    limit?: number
  }

  /**
   * IndexSource upsert
   */
  export type IndexSourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexSource
     */
    select?: IndexSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexSource
     */
    omit?: IndexSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexSourceInclude<ExtArgs> | null
    /**
     * The filter to search for the IndexSource to update in case it exists.
     */
    where: IndexSourceWhereUniqueInput
    /**
     * In case the IndexSource found by the `where` argument doesn't exist, create a new IndexSource with this data.
     */
    create: XOR<IndexSourceCreateInput, IndexSourceUncheckedCreateInput>
    /**
     * In case the IndexSource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IndexSourceUpdateInput, IndexSourceUncheckedUpdateInput>
  }

  /**
   * IndexSource delete
   */
  export type IndexSourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexSource
     */
    select?: IndexSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexSource
     */
    omit?: IndexSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexSourceInclude<ExtArgs> | null
    /**
     * Filter which IndexSource to delete.
     */
    where: IndexSourceWhereUniqueInput
  }

  /**
   * IndexSource deleteMany
   */
  export type IndexSourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IndexSources to delete
     */
    where?: IndexSourceWhereInput
    /**
     * Limit how many IndexSources to delete.
     */
    limit?: number
  }

  /**
   * IndexSource.terms
   */
  export type IndexSource$termsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexTerm
     */
    select?: IndexTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexTerm
     */
    omit?: IndexTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexTermInclude<ExtArgs> | null
    where?: IndexTermWhereInput
    orderBy?: IndexTermOrderByWithRelationInput | IndexTermOrderByWithRelationInput[]
    cursor?: IndexTermWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IndexTermScalarFieldEnum | IndexTermScalarFieldEnum[]
  }

  /**
   * IndexSource.jobs
   */
  export type IndexSource$jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexJob
     */
    select?: IndexJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexJob
     */
    omit?: IndexJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexJobInclude<ExtArgs> | null
    where?: IndexJobWhereInput
    orderBy?: IndexJobOrderByWithRelationInput | IndexJobOrderByWithRelationInput[]
    cursor?: IndexJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IndexJobScalarFieldEnum | IndexJobScalarFieldEnum[]
  }

  /**
   * IndexSource.items
   */
  export type IndexSource$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryItem
     */
    select?: LibraryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryItem
     */
    omit?: LibraryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryItemInclude<ExtArgs> | null
    where?: LibraryItemWhereInput
    orderBy?: LibraryItemOrderByWithRelationInput | LibraryItemOrderByWithRelationInput[]
    cursor?: LibraryItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LibraryItemScalarFieldEnum | LibraryItemScalarFieldEnum[]
  }

  /**
   * IndexSource without action
   */
  export type IndexSourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexSource
     */
    select?: IndexSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexSource
     */
    omit?: IndexSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexSourceInclude<ExtArgs> | null
  }


  /**
   * Model IndexTerm
   */

  export type AggregateIndexTerm = {
    _count: IndexTermCountAggregateOutputType | null
    _min: IndexTermMinAggregateOutputType | null
    _max: IndexTermMaxAggregateOutputType | null
  }

  export type IndexTermMinAggregateOutputType = {
    id: string | null
    term: string | null
    enabled: boolean | null
    sourceHint: string | null
    createdAt: Date | null
    updatedAt: Date | null
    sourceId: string | null
  }

  export type IndexTermMaxAggregateOutputType = {
    id: string | null
    term: string | null
    enabled: boolean | null
    sourceHint: string | null
    createdAt: Date | null
    updatedAt: Date | null
    sourceId: string | null
  }

  export type IndexTermCountAggregateOutputType = {
    id: number
    term: number
    enabled: number
    sourceHint: number
    createdAt: number
    updatedAt: number
    sourceId: number
    _all: number
  }


  export type IndexTermMinAggregateInputType = {
    id?: true
    term?: true
    enabled?: true
    sourceHint?: true
    createdAt?: true
    updatedAt?: true
    sourceId?: true
  }

  export type IndexTermMaxAggregateInputType = {
    id?: true
    term?: true
    enabled?: true
    sourceHint?: true
    createdAt?: true
    updatedAt?: true
    sourceId?: true
  }

  export type IndexTermCountAggregateInputType = {
    id?: true
    term?: true
    enabled?: true
    sourceHint?: true
    createdAt?: true
    updatedAt?: true
    sourceId?: true
    _all?: true
  }

  export type IndexTermAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IndexTerm to aggregate.
     */
    where?: IndexTermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndexTerms to fetch.
     */
    orderBy?: IndexTermOrderByWithRelationInput | IndexTermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IndexTermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndexTerms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndexTerms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IndexTerms
    **/
    _count?: true | IndexTermCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IndexTermMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IndexTermMaxAggregateInputType
  }

  export type GetIndexTermAggregateType<T extends IndexTermAggregateArgs> = {
        [P in keyof T & keyof AggregateIndexTerm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIndexTerm[P]>
      : GetScalarType<T[P], AggregateIndexTerm[P]>
  }




  export type IndexTermGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IndexTermWhereInput
    orderBy?: IndexTermOrderByWithAggregationInput | IndexTermOrderByWithAggregationInput[]
    by: IndexTermScalarFieldEnum[] | IndexTermScalarFieldEnum
    having?: IndexTermScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IndexTermCountAggregateInputType | true
    _min?: IndexTermMinAggregateInputType
    _max?: IndexTermMaxAggregateInputType
  }

  export type IndexTermGroupByOutputType = {
    id: string
    term: string
    enabled: boolean
    sourceHint: string | null
    createdAt: Date
    updatedAt: Date
    sourceId: string | null
    _count: IndexTermCountAggregateOutputType | null
    _min: IndexTermMinAggregateOutputType | null
    _max: IndexTermMaxAggregateOutputType | null
  }

  type GetIndexTermGroupByPayload<T extends IndexTermGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IndexTermGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IndexTermGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IndexTermGroupByOutputType[P]>
            : GetScalarType<T[P], IndexTermGroupByOutputType[P]>
        }
      >
    >


  export type IndexTermSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    term?: boolean
    enabled?: boolean
    sourceHint?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sourceId?: boolean
    source?: boolean | IndexTerm$sourceArgs<ExtArgs>
    jobs?: boolean | IndexTerm$jobsArgs<ExtArgs>
    _count?: boolean | IndexTermCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["indexTerm"]>

  export type IndexTermSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    term?: boolean
    enabled?: boolean
    sourceHint?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sourceId?: boolean
    source?: boolean | IndexTerm$sourceArgs<ExtArgs>
  }, ExtArgs["result"]["indexTerm"]>

  export type IndexTermSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    term?: boolean
    enabled?: boolean
    sourceHint?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sourceId?: boolean
    source?: boolean | IndexTerm$sourceArgs<ExtArgs>
  }, ExtArgs["result"]["indexTerm"]>

  export type IndexTermSelectScalar = {
    id?: boolean
    term?: boolean
    enabled?: boolean
    sourceHint?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sourceId?: boolean
  }

  export type IndexTermOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "term" | "enabled" | "sourceHint" | "createdAt" | "updatedAt" | "sourceId", ExtArgs["result"]["indexTerm"]>
  export type IndexTermInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    source?: boolean | IndexTerm$sourceArgs<ExtArgs>
    jobs?: boolean | IndexTerm$jobsArgs<ExtArgs>
    _count?: boolean | IndexTermCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IndexTermIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    source?: boolean | IndexTerm$sourceArgs<ExtArgs>
  }
  export type IndexTermIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    source?: boolean | IndexTerm$sourceArgs<ExtArgs>
  }

  export type $IndexTermPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IndexTerm"
    objects: {
      source: Prisma.$IndexSourcePayload<ExtArgs> | null
      jobs: Prisma.$IndexJobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      term: string
      enabled: boolean
      sourceHint: string | null
      createdAt: Date
      updatedAt: Date
      sourceId: string | null
    }, ExtArgs["result"]["indexTerm"]>
    composites: {}
  }

  type IndexTermGetPayload<S extends boolean | null | undefined | IndexTermDefaultArgs> = $Result.GetResult<Prisma.$IndexTermPayload, S>

  type IndexTermCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IndexTermFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IndexTermCountAggregateInputType | true
    }

  export interface IndexTermDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IndexTerm'], meta: { name: 'IndexTerm' } }
    /**
     * Find zero or one IndexTerm that matches the filter.
     * @param {IndexTermFindUniqueArgs} args - Arguments to find a IndexTerm
     * @example
     * // Get one IndexTerm
     * const indexTerm = await prisma.indexTerm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IndexTermFindUniqueArgs>(args: SelectSubset<T, IndexTermFindUniqueArgs<ExtArgs>>): Prisma__IndexTermClient<$Result.GetResult<Prisma.$IndexTermPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IndexTerm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IndexTermFindUniqueOrThrowArgs} args - Arguments to find a IndexTerm
     * @example
     * // Get one IndexTerm
     * const indexTerm = await prisma.indexTerm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IndexTermFindUniqueOrThrowArgs>(args: SelectSubset<T, IndexTermFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IndexTermClient<$Result.GetResult<Prisma.$IndexTermPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IndexTerm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexTermFindFirstArgs} args - Arguments to find a IndexTerm
     * @example
     * // Get one IndexTerm
     * const indexTerm = await prisma.indexTerm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IndexTermFindFirstArgs>(args?: SelectSubset<T, IndexTermFindFirstArgs<ExtArgs>>): Prisma__IndexTermClient<$Result.GetResult<Prisma.$IndexTermPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IndexTerm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexTermFindFirstOrThrowArgs} args - Arguments to find a IndexTerm
     * @example
     * // Get one IndexTerm
     * const indexTerm = await prisma.indexTerm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IndexTermFindFirstOrThrowArgs>(args?: SelectSubset<T, IndexTermFindFirstOrThrowArgs<ExtArgs>>): Prisma__IndexTermClient<$Result.GetResult<Prisma.$IndexTermPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IndexTerms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexTermFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IndexTerms
     * const indexTerms = await prisma.indexTerm.findMany()
     * 
     * // Get first 10 IndexTerms
     * const indexTerms = await prisma.indexTerm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const indexTermWithIdOnly = await prisma.indexTerm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IndexTermFindManyArgs>(args?: SelectSubset<T, IndexTermFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndexTermPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IndexTerm.
     * @param {IndexTermCreateArgs} args - Arguments to create a IndexTerm.
     * @example
     * // Create one IndexTerm
     * const IndexTerm = await prisma.indexTerm.create({
     *   data: {
     *     // ... data to create a IndexTerm
     *   }
     * })
     * 
     */
    create<T extends IndexTermCreateArgs>(args: SelectSubset<T, IndexTermCreateArgs<ExtArgs>>): Prisma__IndexTermClient<$Result.GetResult<Prisma.$IndexTermPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IndexTerms.
     * @param {IndexTermCreateManyArgs} args - Arguments to create many IndexTerms.
     * @example
     * // Create many IndexTerms
     * const indexTerm = await prisma.indexTerm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IndexTermCreateManyArgs>(args?: SelectSubset<T, IndexTermCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IndexTerms and returns the data saved in the database.
     * @param {IndexTermCreateManyAndReturnArgs} args - Arguments to create many IndexTerms.
     * @example
     * // Create many IndexTerms
     * const indexTerm = await prisma.indexTerm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IndexTerms and only return the `id`
     * const indexTermWithIdOnly = await prisma.indexTerm.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IndexTermCreateManyAndReturnArgs>(args?: SelectSubset<T, IndexTermCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndexTermPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IndexTerm.
     * @param {IndexTermDeleteArgs} args - Arguments to delete one IndexTerm.
     * @example
     * // Delete one IndexTerm
     * const IndexTerm = await prisma.indexTerm.delete({
     *   where: {
     *     // ... filter to delete one IndexTerm
     *   }
     * })
     * 
     */
    delete<T extends IndexTermDeleteArgs>(args: SelectSubset<T, IndexTermDeleteArgs<ExtArgs>>): Prisma__IndexTermClient<$Result.GetResult<Prisma.$IndexTermPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IndexTerm.
     * @param {IndexTermUpdateArgs} args - Arguments to update one IndexTerm.
     * @example
     * // Update one IndexTerm
     * const indexTerm = await prisma.indexTerm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IndexTermUpdateArgs>(args: SelectSubset<T, IndexTermUpdateArgs<ExtArgs>>): Prisma__IndexTermClient<$Result.GetResult<Prisma.$IndexTermPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IndexTerms.
     * @param {IndexTermDeleteManyArgs} args - Arguments to filter IndexTerms to delete.
     * @example
     * // Delete a few IndexTerms
     * const { count } = await prisma.indexTerm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IndexTermDeleteManyArgs>(args?: SelectSubset<T, IndexTermDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IndexTerms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexTermUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IndexTerms
     * const indexTerm = await prisma.indexTerm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IndexTermUpdateManyArgs>(args: SelectSubset<T, IndexTermUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IndexTerms and returns the data updated in the database.
     * @param {IndexTermUpdateManyAndReturnArgs} args - Arguments to update many IndexTerms.
     * @example
     * // Update many IndexTerms
     * const indexTerm = await prisma.indexTerm.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IndexTerms and only return the `id`
     * const indexTermWithIdOnly = await prisma.indexTerm.updateManyAndReturn({
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
    updateManyAndReturn<T extends IndexTermUpdateManyAndReturnArgs>(args: SelectSubset<T, IndexTermUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndexTermPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IndexTerm.
     * @param {IndexTermUpsertArgs} args - Arguments to update or create a IndexTerm.
     * @example
     * // Update or create a IndexTerm
     * const indexTerm = await prisma.indexTerm.upsert({
     *   create: {
     *     // ... data to create a IndexTerm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IndexTerm we want to update
     *   }
     * })
     */
    upsert<T extends IndexTermUpsertArgs>(args: SelectSubset<T, IndexTermUpsertArgs<ExtArgs>>): Prisma__IndexTermClient<$Result.GetResult<Prisma.$IndexTermPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IndexTerms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexTermCountArgs} args - Arguments to filter IndexTerms to count.
     * @example
     * // Count the number of IndexTerms
     * const count = await prisma.indexTerm.count({
     *   where: {
     *     // ... the filter for the IndexTerms we want to count
     *   }
     * })
    **/
    count<T extends IndexTermCountArgs>(
      args?: Subset<T, IndexTermCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IndexTermCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IndexTerm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexTermAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IndexTermAggregateArgs>(args: Subset<T, IndexTermAggregateArgs>): Prisma.PrismaPromise<GetIndexTermAggregateType<T>>

    /**
     * Group by IndexTerm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexTermGroupByArgs} args - Group by arguments.
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
      T extends IndexTermGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IndexTermGroupByArgs['orderBy'] }
        : { orderBy?: IndexTermGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IndexTermGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIndexTermGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IndexTerm model
   */
  readonly fields: IndexTermFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IndexTerm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IndexTermClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    source<T extends IndexTerm$sourceArgs<ExtArgs> = {}>(args?: Subset<T, IndexTerm$sourceArgs<ExtArgs>>): Prisma__IndexSourceClient<$Result.GetResult<Prisma.$IndexSourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    jobs<T extends IndexTerm$jobsArgs<ExtArgs> = {}>(args?: Subset<T, IndexTerm$jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndexJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the IndexTerm model
   */
  interface IndexTermFieldRefs {
    readonly id: FieldRef<"IndexTerm", 'String'>
    readonly term: FieldRef<"IndexTerm", 'String'>
    readonly enabled: FieldRef<"IndexTerm", 'Boolean'>
    readonly sourceHint: FieldRef<"IndexTerm", 'String'>
    readonly createdAt: FieldRef<"IndexTerm", 'DateTime'>
    readonly updatedAt: FieldRef<"IndexTerm", 'DateTime'>
    readonly sourceId: FieldRef<"IndexTerm", 'String'>
  }
    

  // Custom InputTypes
  /**
   * IndexTerm findUnique
   */
  export type IndexTermFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexTerm
     */
    select?: IndexTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexTerm
     */
    omit?: IndexTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexTermInclude<ExtArgs> | null
    /**
     * Filter, which IndexTerm to fetch.
     */
    where: IndexTermWhereUniqueInput
  }

  /**
   * IndexTerm findUniqueOrThrow
   */
  export type IndexTermFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexTerm
     */
    select?: IndexTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexTerm
     */
    omit?: IndexTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexTermInclude<ExtArgs> | null
    /**
     * Filter, which IndexTerm to fetch.
     */
    where: IndexTermWhereUniqueInput
  }

  /**
   * IndexTerm findFirst
   */
  export type IndexTermFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexTerm
     */
    select?: IndexTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexTerm
     */
    omit?: IndexTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexTermInclude<ExtArgs> | null
    /**
     * Filter, which IndexTerm to fetch.
     */
    where?: IndexTermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndexTerms to fetch.
     */
    orderBy?: IndexTermOrderByWithRelationInput | IndexTermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IndexTerms.
     */
    cursor?: IndexTermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndexTerms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndexTerms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndexTerms.
     */
    distinct?: IndexTermScalarFieldEnum | IndexTermScalarFieldEnum[]
  }

  /**
   * IndexTerm findFirstOrThrow
   */
  export type IndexTermFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexTerm
     */
    select?: IndexTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexTerm
     */
    omit?: IndexTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexTermInclude<ExtArgs> | null
    /**
     * Filter, which IndexTerm to fetch.
     */
    where?: IndexTermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndexTerms to fetch.
     */
    orderBy?: IndexTermOrderByWithRelationInput | IndexTermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IndexTerms.
     */
    cursor?: IndexTermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndexTerms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndexTerms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndexTerms.
     */
    distinct?: IndexTermScalarFieldEnum | IndexTermScalarFieldEnum[]
  }

  /**
   * IndexTerm findMany
   */
  export type IndexTermFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexTerm
     */
    select?: IndexTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexTerm
     */
    omit?: IndexTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexTermInclude<ExtArgs> | null
    /**
     * Filter, which IndexTerms to fetch.
     */
    where?: IndexTermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndexTerms to fetch.
     */
    orderBy?: IndexTermOrderByWithRelationInput | IndexTermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IndexTerms.
     */
    cursor?: IndexTermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndexTerms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndexTerms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndexTerms.
     */
    distinct?: IndexTermScalarFieldEnum | IndexTermScalarFieldEnum[]
  }

  /**
   * IndexTerm create
   */
  export type IndexTermCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexTerm
     */
    select?: IndexTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexTerm
     */
    omit?: IndexTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexTermInclude<ExtArgs> | null
    /**
     * The data needed to create a IndexTerm.
     */
    data: XOR<IndexTermCreateInput, IndexTermUncheckedCreateInput>
  }

  /**
   * IndexTerm createMany
   */
  export type IndexTermCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IndexTerms.
     */
    data: IndexTermCreateManyInput | IndexTermCreateManyInput[]
  }

  /**
   * IndexTerm createManyAndReturn
   */
  export type IndexTermCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexTerm
     */
    select?: IndexTermSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IndexTerm
     */
    omit?: IndexTermOmit<ExtArgs> | null
    /**
     * The data used to create many IndexTerms.
     */
    data: IndexTermCreateManyInput | IndexTermCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexTermIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IndexTerm update
   */
  export type IndexTermUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexTerm
     */
    select?: IndexTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexTerm
     */
    omit?: IndexTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexTermInclude<ExtArgs> | null
    /**
     * The data needed to update a IndexTerm.
     */
    data: XOR<IndexTermUpdateInput, IndexTermUncheckedUpdateInput>
    /**
     * Choose, which IndexTerm to update.
     */
    where: IndexTermWhereUniqueInput
  }

  /**
   * IndexTerm updateMany
   */
  export type IndexTermUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IndexTerms.
     */
    data: XOR<IndexTermUpdateManyMutationInput, IndexTermUncheckedUpdateManyInput>
    /**
     * Filter which IndexTerms to update
     */
    where?: IndexTermWhereInput
    /**
     * Limit how many IndexTerms to update.
     */
    limit?: number
  }

  /**
   * IndexTerm updateManyAndReturn
   */
  export type IndexTermUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexTerm
     */
    select?: IndexTermSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IndexTerm
     */
    omit?: IndexTermOmit<ExtArgs> | null
    /**
     * The data used to update IndexTerms.
     */
    data: XOR<IndexTermUpdateManyMutationInput, IndexTermUncheckedUpdateManyInput>
    /**
     * Filter which IndexTerms to update
     */
    where?: IndexTermWhereInput
    /**
     * Limit how many IndexTerms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexTermIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IndexTerm upsert
   */
  export type IndexTermUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexTerm
     */
    select?: IndexTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexTerm
     */
    omit?: IndexTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexTermInclude<ExtArgs> | null
    /**
     * The filter to search for the IndexTerm to update in case it exists.
     */
    where: IndexTermWhereUniqueInput
    /**
     * In case the IndexTerm found by the `where` argument doesn't exist, create a new IndexTerm with this data.
     */
    create: XOR<IndexTermCreateInput, IndexTermUncheckedCreateInput>
    /**
     * In case the IndexTerm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IndexTermUpdateInput, IndexTermUncheckedUpdateInput>
  }

  /**
   * IndexTerm delete
   */
  export type IndexTermDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexTerm
     */
    select?: IndexTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexTerm
     */
    omit?: IndexTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexTermInclude<ExtArgs> | null
    /**
     * Filter which IndexTerm to delete.
     */
    where: IndexTermWhereUniqueInput
  }

  /**
   * IndexTerm deleteMany
   */
  export type IndexTermDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IndexTerms to delete
     */
    where?: IndexTermWhereInput
    /**
     * Limit how many IndexTerms to delete.
     */
    limit?: number
  }

  /**
   * IndexTerm.source
   */
  export type IndexTerm$sourceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexSource
     */
    select?: IndexSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexSource
     */
    omit?: IndexSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexSourceInclude<ExtArgs> | null
    where?: IndexSourceWhereInput
  }

  /**
   * IndexTerm.jobs
   */
  export type IndexTerm$jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexJob
     */
    select?: IndexJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexJob
     */
    omit?: IndexJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexJobInclude<ExtArgs> | null
    where?: IndexJobWhereInput
    orderBy?: IndexJobOrderByWithRelationInput | IndexJobOrderByWithRelationInput[]
    cursor?: IndexJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IndexJobScalarFieldEnum | IndexJobScalarFieldEnum[]
  }

  /**
   * IndexTerm without action
   */
  export type IndexTermDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexTerm
     */
    select?: IndexTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexTerm
     */
    omit?: IndexTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexTermInclude<ExtArgs> | null
  }


  /**
   * Model IndexJob
   */

  export type AggregateIndexJob = {
    _count: IndexJobCountAggregateOutputType | null
    _avg: IndexJobAvgAggregateOutputType | null
    _sum: IndexJobSumAggregateOutputType | null
    _min: IndexJobMinAggregateOutputType | null
    _max: IndexJobMaxAggregateOutputType | null
  }

  export type IndexJobAvgAggregateOutputType = {
    resultCount: number | null
  }

  export type IndexJobSumAggregateOutputType = {
    resultCount: number | null
  }

  export type IndexJobMinAggregateOutputType = {
    id: string | null
    term: string | null
    query: string | null
    status: $Enums.IndexJobStatus | null
    resultCount: number | null
    errorMessage: string | null
    startedAt: Date | null
    finishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    termId: string | null
    sourceId: string | null
  }

  export type IndexJobMaxAggregateOutputType = {
    id: string | null
    term: string | null
    query: string | null
    status: $Enums.IndexJobStatus | null
    resultCount: number | null
    errorMessage: string | null
    startedAt: Date | null
    finishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    termId: string | null
    sourceId: string | null
  }

  export type IndexJobCountAggregateOutputType = {
    id: number
    term: number
    query: number
    status: number
    resultCount: number
    errorMessage: number
    startedAt: number
    finishedAt: number
    createdAt: number
    updatedAt: number
    termId: number
    sourceId: number
    _all: number
  }


  export type IndexJobAvgAggregateInputType = {
    resultCount?: true
  }

  export type IndexJobSumAggregateInputType = {
    resultCount?: true
  }

  export type IndexJobMinAggregateInputType = {
    id?: true
    term?: true
    query?: true
    status?: true
    resultCount?: true
    errorMessage?: true
    startedAt?: true
    finishedAt?: true
    createdAt?: true
    updatedAt?: true
    termId?: true
    sourceId?: true
  }

  export type IndexJobMaxAggregateInputType = {
    id?: true
    term?: true
    query?: true
    status?: true
    resultCount?: true
    errorMessage?: true
    startedAt?: true
    finishedAt?: true
    createdAt?: true
    updatedAt?: true
    termId?: true
    sourceId?: true
  }

  export type IndexJobCountAggregateInputType = {
    id?: true
    term?: true
    query?: true
    status?: true
    resultCount?: true
    errorMessage?: true
    startedAt?: true
    finishedAt?: true
    createdAt?: true
    updatedAt?: true
    termId?: true
    sourceId?: true
    _all?: true
  }

  export type IndexJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IndexJob to aggregate.
     */
    where?: IndexJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndexJobs to fetch.
     */
    orderBy?: IndexJobOrderByWithRelationInput | IndexJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IndexJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndexJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndexJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IndexJobs
    **/
    _count?: true | IndexJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IndexJobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IndexJobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IndexJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IndexJobMaxAggregateInputType
  }

  export type GetIndexJobAggregateType<T extends IndexJobAggregateArgs> = {
        [P in keyof T & keyof AggregateIndexJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIndexJob[P]>
      : GetScalarType<T[P], AggregateIndexJob[P]>
  }




  export type IndexJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IndexJobWhereInput
    orderBy?: IndexJobOrderByWithAggregationInput | IndexJobOrderByWithAggregationInput[]
    by: IndexJobScalarFieldEnum[] | IndexJobScalarFieldEnum
    having?: IndexJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IndexJobCountAggregateInputType | true
    _avg?: IndexJobAvgAggregateInputType
    _sum?: IndexJobSumAggregateInputType
    _min?: IndexJobMinAggregateInputType
    _max?: IndexJobMaxAggregateInputType
  }

  export type IndexJobGroupByOutputType = {
    id: string
    term: string
    query: string
    status: $Enums.IndexJobStatus
    resultCount: number
    errorMessage: string | null
    startedAt: Date | null
    finishedAt: Date | null
    createdAt: Date
    updatedAt: Date
    termId: string | null
    sourceId: string | null
    _count: IndexJobCountAggregateOutputType | null
    _avg: IndexJobAvgAggregateOutputType | null
    _sum: IndexJobSumAggregateOutputType | null
    _min: IndexJobMinAggregateOutputType | null
    _max: IndexJobMaxAggregateOutputType | null
  }

  type GetIndexJobGroupByPayload<T extends IndexJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IndexJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IndexJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IndexJobGroupByOutputType[P]>
            : GetScalarType<T[P], IndexJobGroupByOutputType[P]>
        }
      >
    >


  export type IndexJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    term?: boolean
    query?: boolean
    status?: boolean
    resultCount?: boolean
    errorMessage?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    termId?: boolean
    sourceId?: boolean
    termRelation?: boolean | IndexJob$termRelationArgs<ExtArgs>
    source?: boolean | IndexJob$sourceArgs<ExtArgs>
  }, ExtArgs["result"]["indexJob"]>

  export type IndexJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    term?: boolean
    query?: boolean
    status?: boolean
    resultCount?: boolean
    errorMessage?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    termId?: boolean
    sourceId?: boolean
    termRelation?: boolean | IndexJob$termRelationArgs<ExtArgs>
    source?: boolean | IndexJob$sourceArgs<ExtArgs>
  }, ExtArgs["result"]["indexJob"]>

  export type IndexJobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    term?: boolean
    query?: boolean
    status?: boolean
    resultCount?: boolean
    errorMessage?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    termId?: boolean
    sourceId?: boolean
    termRelation?: boolean | IndexJob$termRelationArgs<ExtArgs>
    source?: boolean | IndexJob$sourceArgs<ExtArgs>
  }, ExtArgs["result"]["indexJob"]>

  export type IndexJobSelectScalar = {
    id?: boolean
    term?: boolean
    query?: boolean
    status?: boolean
    resultCount?: boolean
    errorMessage?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    termId?: boolean
    sourceId?: boolean
  }

  export type IndexJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "term" | "query" | "status" | "resultCount" | "errorMessage" | "startedAt" | "finishedAt" | "createdAt" | "updatedAt" | "termId" | "sourceId", ExtArgs["result"]["indexJob"]>
  export type IndexJobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    termRelation?: boolean | IndexJob$termRelationArgs<ExtArgs>
    source?: boolean | IndexJob$sourceArgs<ExtArgs>
  }
  export type IndexJobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    termRelation?: boolean | IndexJob$termRelationArgs<ExtArgs>
    source?: boolean | IndexJob$sourceArgs<ExtArgs>
  }
  export type IndexJobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    termRelation?: boolean | IndexJob$termRelationArgs<ExtArgs>
    source?: boolean | IndexJob$sourceArgs<ExtArgs>
  }

  export type $IndexJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IndexJob"
    objects: {
      termRelation: Prisma.$IndexTermPayload<ExtArgs> | null
      source: Prisma.$IndexSourcePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      term: string
      query: string
      status: $Enums.IndexJobStatus
      resultCount: number
      errorMessage: string | null
      startedAt: Date | null
      finishedAt: Date | null
      createdAt: Date
      updatedAt: Date
      termId: string | null
      sourceId: string | null
    }, ExtArgs["result"]["indexJob"]>
    composites: {}
  }

  type IndexJobGetPayload<S extends boolean | null | undefined | IndexJobDefaultArgs> = $Result.GetResult<Prisma.$IndexJobPayload, S>

  type IndexJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IndexJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IndexJobCountAggregateInputType | true
    }

  export interface IndexJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IndexJob'], meta: { name: 'IndexJob' } }
    /**
     * Find zero or one IndexJob that matches the filter.
     * @param {IndexJobFindUniqueArgs} args - Arguments to find a IndexJob
     * @example
     * // Get one IndexJob
     * const indexJob = await prisma.indexJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IndexJobFindUniqueArgs>(args: SelectSubset<T, IndexJobFindUniqueArgs<ExtArgs>>): Prisma__IndexJobClient<$Result.GetResult<Prisma.$IndexJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IndexJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IndexJobFindUniqueOrThrowArgs} args - Arguments to find a IndexJob
     * @example
     * // Get one IndexJob
     * const indexJob = await prisma.indexJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IndexJobFindUniqueOrThrowArgs>(args: SelectSubset<T, IndexJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IndexJobClient<$Result.GetResult<Prisma.$IndexJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IndexJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexJobFindFirstArgs} args - Arguments to find a IndexJob
     * @example
     * // Get one IndexJob
     * const indexJob = await prisma.indexJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IndexJobFindFirstArgs>(args?: SelectSubset<T, IndexJobFindFirstArgs<ExtArgs>>): Prisma__IndexJobClient<$Result.GetResult<Prisma.$IndexJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IndexJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexJobFindFirstOrThrowArgs} args - Arguments to find a IndexJob
     * @example
     * // Get one IndexJob
     * const indexJob = await prisma.indexJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IndexJobFindFirstOrThrowArgs>(args?: SelectSubset<T, IndexJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__IndexJobClient<$Result.GetResult<Prisma.$IndexJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IndexJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IndexJobs
     * const indexJobs = await prisma.indexJob.findMany()
     * 
     * // Get first 10 IndexJobs
     * const indexJobs = await prisma.indexJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const indexJobWithIdOnly = await prisma.indexJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IndexJobFindManyArgs>(args?: SelectSubset<T, IndexJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndexJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IndexJob.
     * @param {IndexJobCreateArgs} args - Arguments to create a IndexJob.
     * @example
     * // Create one IndexJob
     * const IndexJob = await prisma.indexJob.create({
     *   data: {
     *     // ... data to create a IndexJob
     *   }
     * })
     * 
     */
    create<T extends IndexJobCreateArgs>(args: SelectSubset<T, IndexJobCreateArgs<ExtArgs>>): Prisma__IndexJobClient<$Result.GetResult<Prisma.$IndexJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IndexJobs.
     * @param {IndexJobCreateManyArgs} args - Arguments to create many IndexJobs.
     * @example
     * // Create many IndexJobs
     * const indexJob = await prisma.indexJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IndexJobCreateManyArgs>(args?: SelectSubset<T, IndexJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IndexJobs and returns the data saved in the database.
     * @param {IndexJobCreateManyAndReturnArgs} args - Arguments to create many IndexJobs.
     * @example
     * // Create many IndexJobs
     * const indexJob = await prisma.indexJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IndexJobs and only return the `id`
     * const indexJobWithIdOnly = await prisma.indexJob.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IndexJobCreateManyAndReturnArgs>(args?: SelectSubset<T, IndexJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndexJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IndexJob.
     * @param {IndexJobDeleteArgs} args - Arguments to delete one IndexJob.
     * @example
     * // Delete one IndexJob
     * const IndexJob = await prisma.indexJob.delete({
     *   where: {
     *     // ... filter to delete one IndexJob
     *   }
     * })
     * 
     */
    delete<T extends IndexJobDeleteArgs>(args: SelectSubset<T, IndexJobDeleteArgs<ExtArgs>>): Prisma__IndexJobClient<$Result.GetResult<Prisma.$IndexJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IndexJob.
     * @param {IndexJobUpdateArgs} args - Arguments to update one IndexJob.
     * @example
     * // Update one IndexJob
     * const indexJob = await prisma.indexJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IndexJobUpdateArgs>(args: SelectSubset<T, IndexJobUpdateArgs<ExtArgs>>): Prisma__IndexJobClient<$Result.GetResult<Prisma.$IndexJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IndexJobs.
     * @param {IndexJobDeleteManyArgs} args - Arguments to filter IndexJobs to delete.
     * @example
     * // Delete a few IndexJobs
     * const { count } = await prisma.indexJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IndexJobDeleteManyArgs>(args?: SelectSubset<T, IndexJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IndexJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IndexJobs
     * const indexJob = await prisma.indexJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IndexJobUpdateManyArgs>(args: SelectSubset<T, IndexJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IndexJobs and returns the data updated in the database.
     * @param {IndexJobUpdateManyAndReturnArgs} args - Arguments to update many IndexJobs.
     * @example
     * // Update many IndexJobs
     * const indexJob = await prisma.indexJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IndexJobs and only return the `id`
     * const indexJobWithIdOnly = await prisma.indexJob.updateManyAndReturn({
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
    updateManyAndReturn<T extends IndexJobUpdateManyAndReturnArgs>(args: SelectSubset<T, IndexJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndexJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IndexJob.
     * @param {IndexJobUpsertArgs} args - Arguments to update or create a IndexJob.
     * @example
     * // Update or create a IndexJob
     * const indexJob = await prisma.indexJob.upsert({
     *   create: {
     *     // ... data to create a IndexJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IndexJob we want to update
     *   }
     * })
     */
    upsert<T extends IndexJobUpsertArgs>(args: SelectSubset<T, IndexJobUpsertArgs<ExtArgs>>): Prisma__IndexJobClient<$Result.GetResult<Prisma.$IndexJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IndexJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexJobCountArgs} args - Arguments to filter IndexJobs to count.
     * @example
     * // Count the number of IndexJobs
     * const count = await prisma.indexJob.count({
     *   where: {
     *     // ... the filter for the IndexJobs we want to count
     *   }
     * })
    **/
    count<T extends IndexJobCountArgs>(
      args?: Subset<T, IndexJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IndexJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IndexJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IndexJobAggregateArgs>(args: Subset<T, IndexJobAggregateArgs>): Prisma.PrismaPromise<GetIndexJobAggregateType<T>>

    /**
     * Group by IndexJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexJobGroupByArgs} args - Group by arguments.
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
      T extends IndexJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IndexJobGroupByArgs['orderBy'] }
        : { orderBy?: IndexJobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IndexJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIndexJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IndexJob model
   */
  readonly fields: IndexJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IndexJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IndexJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    termRelation<T extends IndexJob$termRelationArgs<ExtArgs> = {}>(args?: Subset<T, IndexJob$termRelationArgs<ExtArgs>>): Prisma__IndexTermClient<$Result.GetResult<Prisma.$IndexTermPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    source<T extends IndexJob$sourceArgs<ExtArgs> = {}>(args?: Subset<T, IndexJob$sourceArgs<ExtArgs>>): Prisma__IndexSourceClient<$Result.GetResult<Prisma.$IndexSourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the IndexJob model
   */
  interface IndexJobFieldRefs {
    readonly id: FieldRef<"IndexJob", 'String'>
    readonly term: FieldRef<"IndexJob", 'String'>
    readonly query: FieldRef<"IndexJob", 'String'>
    readonly status: FieldRef<"IndexJob", 'IndexJobStatus'>
    readonly resultCount: FieldRef<"IndexJob", 'Int'>
    readonly errorMessage: FieldRef<"IndexJob", 'String'>
    readonly startedAt: FieldRef<"IndexJob", 'DateTime'>
    readonly finishedAt: FieldRef<"IndexJob", 'DateTime'>
    readonly createdAt: FieldRef<"IndexJob", 'DateTime'>
    readonly updatedAt: FieldRef<"IndexJob", 'DateTime'>
    readonly termId: FieldRef<"IndexJob", 'String'>
    readonly sourceId: FieldRef<"IndexJob", 'String'>
  }
    

  // Custom InputTypes
  /**
   * IndexJob findUnique
   */
  export type IndexJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexJob
     */
    select?: IndexJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexJob
     */
    omit?: IndexJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexJobInclude<ExtArgs> | null
    /**
     * Filter, which IndexJob to fetch.
     */
    where: IndexJobWhereUniqueInput
  }

  /**
   * IndexJob findUniqueOrThrow
   */
  export type IndexJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexJob
     */
    select?: IndexJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexJob
     */
    omit?: IndexJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexJobInclude<ExtArgs> | null
    /**
     * Filter, which IndexJob to fetch.
     */
    where: IndexJobWhereUniqueInput
  }

  /**
   * IndexJob findFirst
   */
  export type IndexJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexJob
     */
    select?: IndexJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexJob
     */
    omit?: IndexJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexJobInclude<ExtArgs> | null
    /**
     * Filter, which IndexJob to fetch.
     */
    where?: IndexJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndexJobs to fetch.
     */
    orderBy?: IndexJobOrderByWithRelationInput | IndexJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IndexJobs.
     */
    cursor?: IndexJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndexJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndexJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndexJobs.
     */
    distinct?: IndexJobScalarFieldEnum | IndexJobScalarFieldEnum[]
  }

  /**
   * IndexJob findFirstOrThrow
   */
  export type IndexJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexJob
     */
    select?: IndexJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexJob
     */
    omit?: IndexJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexJobInclude<ExtArgs> | null
    /**
     * Filter, which IndexJob to fetch.
     */
    where?: IndexJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndexJobs to fetch.
     */
    orderBy?: IndexJobOrderByWithRelationInput | IndexJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IndexJobs.
     */
    cursor?: IndexJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndexJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndexJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndexJobs.
     */
    distinct?: IndexJobScalarFieldEnum | IndexJobScalarFieldEnum[]
  }

  /**
   * IndexJob findMany
   */
  export type IndexJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexJob
     */
    select?: IndexJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexJob
     */
    omit?: IndexJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexJobInclude<ExtArgs> | null
    /**
     * Filter, which IndexJobs to fetch.
     */
    where?: IndexJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndexJobs to fetch.
     */
    orderBy?: IndexJobOrderByWithRelationInput | IndexJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IndexJobs.
     */
    cursor?: IndexJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndexJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndexJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndexJobs.
     */
    distinct?: IndexJobScalarFieldEnum | IndexJobScalarFieldEnum[]
  }

  /**
   * IndexJob create
   */
  export type IndexJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexJob
     */
    select?: IndexJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexJob
     */
    omit?: IndexJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexJobInclude<ExtArgs> | null
    /**
     * The data needed to create a IndexJob.
     */
    data: XOR<IndexJobCreateInput, IndexJobUncheckedCreateInput>
  }

  /**
   * IndexJob createMany
   */
  export type IndexJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IndexJobs.
     */
    data: IndexJobCreateManyInput | IndexJobCreateManyInput[]
  }

  /**
   * IndexJob createManyAndReturn
   */
  export type IndexJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexJob
     */
    select?: IndexJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IndexJob
     */
    omit?: IndexJobOmit<ExtArgs> | null
    /**
     * The data used to create many IndexJobs.
     */
    data: IndexJobCreateManyInput | IndexJobCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexJobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IndexJob update
   */
  export type IndexJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexJob
     */
    select?: IndexJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexJob
     */
    omit?: IndexJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexJobInclude<ExtArgs> | null
    /**
     * The data needed to update a IndexJob.
     */
    data: XOR<IndexJobUpdateInput, IndexJobUncheckedUpdateInput>
    /**
     * Choose, which IndexJob to update.
     */
    where: IndexJobWhereUniqueInput
  }

  /**
   * IndexJob updateMany
   */
  export type IndexJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IndexJobs.
     */
    data: XOR<IndexJobUpdateManyMutationInput, IndexJobUncheckedUpdateManyInput>
    /**
     * Filter which IndexJobs to update
     */
    where?: IndexJobWhereInput
    /**
     * Limit how many IndexJobs to update.
     */
    limit?: number
  }

  /**
   * IndexJob updateManyAndReturn
   */
  export type IndexJobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexJob
     */
    select?: IndexJobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IndexJob
     */
    omit?: IndexJobOmit<ExtArgs> | null
    /**
     * The data used to update IndexJobs.
     */
    data: XOR<IndexJobUpdateManyMutationInput, IndexJobUncheckedUpdateManyInput>
    /**
     * Filter which IndexJobs to update
     */
    where?: IndexJobWhereInput
    /**
     * Limit how many IndexJobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexJobIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IndexJob upsert
   */
  export type IndexJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexJob
     */
    select?: IndexJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexJob
     */
    omit?: IndexJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexJobInclude<ExtArgs> | null
    /**
     * The filter to search for the IndexJob to update in case it exists.
     */
    where: IndexJobWhereUniqueInput
    /**
     * In case the IndexJob found by the `where` argument doesn't exist, create a new IndexJob with this data.
     */
    create: XOR<IndexJobCreateInput, IndexJobUncheckedCreateInput>
    /**
     * In case the IndexJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IndexJobUpdateInput, IndexJobUncheckedUpdateInput>
  }

  /**
   * IndexJob delete
   */
  export type IndexJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexJob
     */
    select?: IndexJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexJob
     */
    omit?: IndexJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexJobInclude<ExtArgs> | null
    /**
     * Filter which IndexJob to delete.
     */
    where: IndexJobWhereUniqueInput
  }

  /**
   * IndexJob deleteMany
   */
  export type IndexJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IndexJobs to delete
     */
    where?: IndexJobWhereInput
    /**
     * Limit how many IndexJobs to delete.
     */
    limit?: number
  }

  /**
   * IndexJob.termRelation
   */
  export type IndexJob$termRelationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexTerm
     */
    select?: IndexTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexTerm
     */
    omit?: IndexTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexTermInclude<ExtArgs> | null
    where?: IndexTermWhereInput
  }

  /**
   * IndexJob.source
   */
  export type IndexJob$sourceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexSource
     */
    select?: IndexSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexSource
     */
    omit?: IndexSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexSourceInclude<ExtArgs> | null
    where?: IndexSourceWhereInput
  }

  /**
   * IndexJob without action
   */
  export type IndexJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexJob
     */
    select?: IndexJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexJob
     */
    omit?: IndexJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexJobInclude<ExtArgs> | null
  }


  /**
   * Model LibraryItem
   */

  export type AggregateLibraryItem = {
    _count: LibraryItemCountAggregateOutputType | null
    _min: LibraryItemMinAggregateOutputType | null
    _max: LibraryItemMaxAggregateOutputType | null
  }

  export type LibraryItemMinAggregateOutputType = {
    id: string | null
    title: string | null
    originalUrl: string | null
    normalizedUrl: string | null
    fileId: string | null
    estimatedType: $Enums.LibraryItemType | null
    origin: string | null
    status: $Enums.LibraryItemStatus | null
    extension: string | null
    downloadUrl: string | null
    previewPolicy: string | null
    summary: string | null
    discoveredAt: Date | null
    indexedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    sourceId: string | null
  }

  export type LibraryItemMaxAggregateOutputType = {
    id: string | null
    title: string | null
    originalUrl: string | null
    normalizedUrl: string | null
    fileId: string | null
    estimatedType: $Enums.LibraryItemType | null
    origin: string | null
    status: $Enums.LibraryItemStatus | null
    extension: string | null
    downloadUrl: string | null
    previewPolicy: string | null
    summary: string | null
    discoveredAt: Date | null
    indexedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    sourceId: string | null
  }

  export type LibraryItemCountAggregateOutputType = {
    id: number
    title: number
    originalUrl: number
    normalizedUrl: number
    fileId: number
    estimatedType: number
    origin: number
    status: number
    extension: number
    downloadUrl: number
    previewPolicy: number
    summary: number
    discoveredAt: number
    indexedAt: number
    createdAt: number
    updatedAt: number
    sourceId: number
    _all: number
  }


  export type LibraryItemMinAggregateInputType = {
    id?: true
    title?: true
    originalUrl?: true
    normalizedUrl?: true
    fileId?: true
    estimatedType?: true
    origin?: true
    status?: true
    extension?: true
    downloadUrl?: true
    previewPolicy?: true
    summary?: true
    discoveredAt?: true
    indexedAt?: true
    createdAt?: true
    updatedAt?: true
    sourceId?: true
  }

  export type LibraryItemMaxAggregateInputType = {
    id?: true
    title?: true
    originalUrl?: true
    normalizedUrl?: true
    fileId?: true
    estimatedType?: true
    origin?: true
    status?: true
    extension?: true
    downloadUrl?: true
    previewPolicy?: true
    summary?: true
    discoveredAt?: true
    indexedAt?: true
    createdAt?: true
    updatedAt?: true
    sourceId?: true
  }

  export type LibraryItemCountAggregateInputType = {
    id?: true
    title?: true
    originalUrl?: true
    normalizedUrl?: true
    fileId?: true
    estimatedType?: true
    origin?: true
    status?: true
    extension?: true
    downloadUrl?: true
    previewPolicy?: true
    summary?: true
    discoveredAt?: true
    indexedAt?: true
    createdAt?: true
    updatedAt?: true
    sourceId?: true
    _all?: true
  }

  export type LibraryItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LibraryItem to aggregate.
     */
    where?: LibraryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LibraryItems to fetch.
     */
    orderBy?: LibraryItemOrderByWithRelationInput | LibraryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LibraryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LibraryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LibraryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LibraryItems
    **/
    _count?: true | LibraryItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LibraryItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LibraryItemMaxAggregateInputType
  }

  export type GetLibraryItemAggregateType<T extends LibraryItemAggregateArgs> = {
        [P in keyof T & keyof AggregateLibraryItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLibraryItem[P]>
      : GetScalarType<T[P], AggregateLibraryItem[P]>
  }




  export type LibraryItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LibraryItemWhereInput
    orderBy?: LibraryItemOrderByWithAggregationInput | LibraryItemOrderByWithAggregationInput[]
    by: LibraryItemScalarFieldEnum[] | LibraryItemScalarFieldEnum
    having?: LibraryItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LibraryItemCountAggregateInputType | true
    _min?: LibraryItemMinAggregateInputType
    _max?: LibraryItemMaxAggregateInputType
  }

  export type LibraryItemGroupByOutputType = {
    id: string
    title: string
    originalUrl: string
    normalizedUrl: string
    fileId: string | null
    estimatedType: $Enums.LibraryItemType
    origin: string
    status: $Enums.LibraryItemStatus
    extension: string | null
    downloadUrl: string | null
    previewPolicy: string
    summary: string | null
    discoveredAt: Date
    indexedAt: Date
    createdAt: Date
    updatedAt: Date
    sourceId: string | null
    _count: LibraryItemCountAggregateOutputType | null
    _min: LibraryItemMinAggregateOutputType | null
    _max: LibraryItemMaxAggregateOutputType | null
  }

  type GetLibraryItemGroupByPayload<T extends LibraryItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LibraryItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LibraryItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LibraryItemGroupByOutputType[P]>
            : GetScalarType<T[P], LibraryItemGroupByOutputType[P]>
        }
      >
    >


  export type LibraryItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    originalUrl?: boolean
    normalizedUrl?: boolean
    fileId?: boolean
    estimatedType?: boolean
    origin?: boolean
    status?: boolean
    extension?: boolean
    downloadUrl?: boolean
    previewPolicy?: boolean
    summary?: boolean
    discoveredAt?: boolean
    indexedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sourceId?: boolean
    source?: boolean | LibraryItem$sourceArgs<ExtArgs>
  }, ExtArgs["result"]["libraryItem"]>

  export type LibraryItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    originalUrl?: boolean
    normalizedUrl?: boolean
    fileId?: boolean
    estimatedType?: boolean
    origin?: boolean
    status?: boolean
    extension?: boolean
    downloadUrl?: boolean
    previewPolicy?: boolean
    summary?: boolean
    discoveredAt?: boolean
    indexedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sourceId?: boolean
    source?: boolean | LibraryItem$sourceArgs<ExtArgs>
  }, ExtArgs["result"]["libraryItem"]>

  export type LibraryItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    originalUrl?: boolean
    normalizedUrl?: boolean
    fileId?: boolean
    estimatedType?: boolean
    origin?: boolean
    status?: boolean
    extension?: boolean
    downloadUrl?: boolean
    previewPolicy?: boolean
    summary?: boolean
    discoveredAt?: boolean
    indexedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sourceId?: boolean
    source?: boolean | LibraryItem$sourceArgs<ExtArgs>
  }, ExtArgs["result"]["libraryItem"]>

  export type LibraryItemSelectScalar = {
    id?: boolean
    title?: boolean
    originalUrl?: boolean
    normalizedUrl?: boolean
    fileId?: boolean
    estimatedType?: boolean
    origin?: boolean
    status?: boolean
    extension?: boolean
    downloadUrl?: boolean
    previewPolicy?: boolean
    summary?: boolean
    discoveredAt?: boolean
    indexedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sourceId?: boolean
  }

  export type LibraryItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "originalUrl" | "normalizedUrl" | "fileId" | "estimatedType" | "origin" | "status" | "extension" | "downloadUrl" | "previewPolicy" | "summary" | "discoveredAt" | "indexedAt" | "createdAt" | "updatedAt" | "sourceId", ExtArgs["result"]["libraryItem"]>
  export type LibraryItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    source?: boolean | LibraryItem$sourceArgs<ExtArgs>
  }
  export type LibraryItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    source?: boolean | LibraryItem$sourceArgs<ExtArgs>
  }
  export type LibraryItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    source?: boolean | LibraryItem$sourceArgs<ExtArgs>
  }

  export type $LibraryItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LibraryItem"
    objects: {
      source: Prisma.$IndexSourcePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      originalUrl: string
      normalizedUrl: string
      fileId: string | null
      estimatedType: $Enums.LibraryItemType
      origin: string
      status: $Enums.LibraryItemStatus
      extension: string | null
      downloadUrl: string | null
      previewPolicy: string
      summary: string | null
      discoveredAt: Date
      indexedAt: Date
      createdAt: Date
      updatedAt: Date
      sourceId: string | null
    }, ExtArgs["result"]["libraryItem"]>
    composites: {}
  }

  type LibraryItemGetPayload<S extends boolean | null | undefined | LibraryItemDefaultArgs> = $Result.GetResult<Prisma.$LibraryItemPayload, S>

  type LibraryItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LibraryItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LibraryItemCountAggregateInputType | true
    }

  export interface LibraryItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LibraryItem'], meta: { name: 'LibraryItem' } }
    /**
     * Find zero or one LibraryItem that matches the filter.
     * @param {LibraryItemFindUniqueArgs} args - Arguments to find a LibraryItem
     * @example
     * // Get one LibraryItem
     * const libraryItem = await prisma.libraryItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LibraryItemFindUniqueArgs>(args: SelectSubset<T, LibraryItemFindUniqueArgs<ExtArgs>>): Prisma__LibraryItemClient<$Result.GetResult<Prisma.$LibraryItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LibraryItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LibraryItemFindUniqueOrThrowArgs} args - Arguments to find a LibraryItem
     * @example
     * // Get one LibraryItem
     * const libraryItem = await prisma.libraryItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LibraryItemFindUniqueOrThrowArgs>(args: SelectSubset<T, LibraryItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LibraryItemClient<$Result.GetResult<Prisma.$LibraryItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LibraryItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryItemFindFirstArgs} args - Arguments to find a LibraryItem
     * @example
     * // Get one LibraryItem
     * const libraryItem = await prisma.libraryItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LibraryItemFindFirstArgs>(args?: SelectSubset<T, LibraryItemFindFirstArgs<ExtArgs>>): Prisma__LibraryItemClient<$Result.GetResult<Prisma.$LibraryItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LibraryItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryItemFindFirstOrThrowArgs} args - Arguments to find a LibraryItem
     * @example
     * // Get one LibraryItem
     * const libraryItem = await prisma.libraryItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LibraryItemFindFirstOrThrowArgs>(args?: SelectSubset<T, LibraryItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__LibraryItemClient<$Result.GetResult<Prisma.$LibraryItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LibraryItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LibraryItems
     * const libraryItems = await prisma.libraryItem.findMany()
     * 
     * // Get first 10 LibraryItems
     * const libraryItems = await prisma.libraryItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const libraryItemWithIdOnly = await prisma.libraryItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LibraryItemFindManyArgs>(args?: SelectSubset<T, LibraryItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibraryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LibraryItem.
     * @param {LibraryItemCreateArgs} args - Arguments to create a LibraryItem.
     * @example
     * // Create one LibraryItem
     * const LibraryItem = await prisma.libraryItem.create({
     *   data: {
     *     // ... data to create a LibraryItem
     *   }
     * })
     * 
     */
    create<T extends LibraryItemCreateArgs>(args: SelectSubset<T, LibraryItemCreateArgs<ExtArgs>>): Prisma__LibraryItemClient<$Result.GetResult<Prisma.$LibraryItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LibraryItems.
     * @param {LibraryItemCreateManyArgs} args - Arguments to create many LibraryItems.
     * @example
     * // Create many LibraryItems
     * const libraryItem = await prisma.libraryItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LibraryItemCreateManyArgs>(args?: SelectSubset<T, LibraryItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LibraryItems and returns the data saved in the database.
     * @param {LibraryItemCreateManyAndReturnArgs} args - Arguments to create many LibraryItems.
     * @example
     * // Create many LibraryItems
     * const libraryItem = await prisma.libraryItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LibraryItems and only return the `id`
     * const libraryItemWithIdOnly = await prisma.libraryItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LibraryItemCreateManyAndReturnArgs>(args?: SelectSubset<T, LibraryItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibraryItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LibraryItem.
     * @param {LibraryItemDeleteArgs} args - Arguments to delete one LibraryItem.
     * @example
     * // Delete one LibraryItem
     * const LibraryItem = await prisma.libraryItem.delete({
     *   where: {
     *     // ... filter to delete one LibraryItem
     *   }
     * })
     * 
     */
    delete<T extends LibraryItemDeleteArgs>(args: SelectSubset<T, LibraryItemDeleteArgs<ExtArgs>>): Prisma__LibraryItemClient<$Result.GetResult<Prisma.$LibraryItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LibraryItem.
     * @param {LibraryItemUpdateArgs} args - Arguments to update one LibraryItem.
     * @example
     * // Update one LibraryItem
     * const libraryItem = await prisma.libraryItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LibraryItemUpdateArgs>(args: SelectSubset<T, LibraryItemUpdateArgs<ExtArgs>>): Prisma__LibraryItemClient<$Result.GetResult<Prisma.$LibraryItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LibraryItems.
     * @param {LibraryItemDeleteManyArgs} args - Arguments to filter LibraryItems to delete.
     * @example
     * // Delete a few LibraryItems
     * const { count } = await prisma.libraryItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LibraryItemDeleteManyArgs>(args?: SelectSubset<T, LibraryItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LibraryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LibraryItems
     * const libraryItem = await prisma.libraryItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LibraryItemUpdateManyArgs>(args: SelectSubset<T, LibraryItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LibraryItems and returns the data updated in the database.
     * @param {LibraryItemUpdateManyAndReturnArgs} args - Arguments to update many LibraryItems.
     * @example
     * // Update many LibraryItems
     * const libraryItem = await prisma.libraryItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LibraryItems and only return the `id`
     * const libraryItemWithIdOnly = await prisma.libraryItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends LibraryItemUpdateManyAndReturnArgs>(args: SelectSubset<T, LibraryItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibraryItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LibraryItem.
     * @param {LibraryItemUpsertArgs} args - Arguments to update or create a LibraryItem.
     * @example
     * // Update or create a LibraryItem
     * const libraryItem = await prisma.libraryItem.upsert({
     *   create: {
     *     // ... data to create a LibraryItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LibraryItem we want to update
     *   }
     * })
     */
    upsert<T extends LibraryItemUpsertArgs>(args: SelectSubset<T, LibraryItemUpsertArgs<ExtArgs>>): Prisma__LibraryItemClient<$Result.GetResult<Prisma.$LibraryItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LibraryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryItemCountArgs} args - Arguments to filter LibraryItems to count.
     * @example
     * // Count the number of LibraryItems
     * const count = await prisma.libraryItem.count({
     *   where: {
     *     // ... the filter for the LibraryItems we want to count
     *   }
     * })
    **/
    count<T extends LibraryItemCountArgs>(
      args?: Subset<T, LibraryItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LibraryItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LibraryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LibraryItemAggregateArgs>(args: Subset<T, LibraryItemAggregateArgs>): Prisma.PrismaPromise<GetLibraryItemAggregateType<T>>

    /**
     * Group by LibraryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryItemGroupByArgs} args - Group by arguments.
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
      T extends LibraryItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LibraryItemGroupByArgs['orderBy'] }
        : { orderBy?: LibraryItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LibraryItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLibraryItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LibraryItem model
   */
  readonly fields: LibraryItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LibraryItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LibraryItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    source<T extends LibraryItem$sourceArgs<ExtArgs> = {}>(args?: Subset<T, LibraryItem$sourceArgs<ExtArgs>>): Prisma__IndexSourceClient<$Result.GetResult<Prisma.$IndexSourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LibraryItem model
   */
  interface LibraryItemFieldRefs {
    readonly id: FieldRef<"LibraryItem", 'String'>
    readonly title: FieldRef<"LibraryItem", 'String'>
    readonly originalUrl: FieldRef<"LibraryItem", 'String'>
    readonly normalizedUrl: FieldRef<"LibraryItem", 'String'>
    readonly fileId: FieldRef<"LibraryItem", 'String'>
    readonly estimatedType: FieldRef<"LibraryItem", 'LibraryItemType'>
    readonly origin: FieldRef<"LibraryItem", 'String'>
    readonly status: FieldRef<"LibraryItem", 'LibraryItemStatus'>
    readonly extension: FieldRef<"LibraryItem", 'String'>
    readonly downloadUrl: FieldRef<"LibraryItem", 'String'>
    readonly previewPolicy: FieldRef<"LibraryItem", 'String'>
    readonly summary: FieldRef<"LibraryItem", 'String'>
    readonly discoveredAt: FieldRef<"LibraryItem", 'DateTime'>
    readonly indexedAt: FieldRef<"LibraryItem", 'DateTime'>
    readonly createdAt: FieldRef<"LibraryItem", 'DateTime'>
    readonly updatedAt: FieldRef<"LibraryItem", 'DateTime'>
    readonly sourceId: FieldRef<"LibraryItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LibraryItem findUnique
   */
  export type LibraryItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryItem
     */
    select?: LibraryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryItem
     */
    omit?: LibraryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryItemInclude<ExtArgs> | null
    /**
     * Filter, which LibraryItem to fetch.
     */
    where: LibraryItemWhereUniqueInput
  }

  /**
   * LibraryItem findUniqueOrThrow
   */
  export type LibraryItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryItem
     */
    select?: LibraryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryItem
     */
    omit?: LibraryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryItemInclude<ExtArgs> | null
    /**
     * Filter, which LibraryItem to fetch.
     */
    where: LibraryItemWhereUniqueInput
  }

  /**
   * LibraryItem findFirst
   */
  export type LibraryItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryItem
     */
    select?: LibraryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryItem
     */
    omit?: LibraryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryItemInclude<ExtArgs> | null
    /**
     * Filter, which LibraryItem to fetch.
     */
    where?: LibraryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LibraryItems to fetch.
     */
    orderBy?: LibraryItemOrderByWithRelationInput | LibraryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LibraryItems.
     */
    cursor?: LibraryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LibraryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LibraryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LibraryItems.
     */
    distinct?: LibraryItemScalarFieldEnum | LibraryItemScalarFieldEnum[]
  }

  /**
   * LibraryItem findFirstOrThrow
   */
  export type LibraryItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryItem
     */
    select?: LibraryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryItem
     */
    omit?: LibraryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryItemInclude<ExtArgs> | null
    /**
     * Filter, which LibraryItem to fetch.
     */
    where?: LibraryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LibraryItems to fetch.
     */
    orderBy?: LibraryItemOrderByWithRelationInput | LibraryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LibraryItems.
     */
    cursor?: LibraryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LibraryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LibraryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LibraryItems.
     */
    distinct?: LibraryItemScalarFieldEnum | LibraryItemScalarFieldEnum[]
  }

  /**
   * LibraryItem findMany
   */
  export type LibraryItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryItem
     */
    select?: LibraryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryItem
     */
    omit?: LibraryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryItemInclude<ExtArgs> | null
    /**
     * Filter, which LibraryItems to fetch.
     */
    where?: LibraryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LibraryItems to fetch.
     */
    orderBy?: LibraryItemOrderByWithRelationInput | LibraryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LibraryItems.
     */
    cursor?: LibraryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LibraryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LibraryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LibraryItems.
     */
    distinct?: LibraryItemScalarFieldEnum | LibraryItemScalarFieldEnum[]
  }

  /**
   * LibraryItem create
   */
  export type LibraryItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryItem
     */
    select?: LibraryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryItem
     */
    omit?: LibraryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryItemInclude<ExtArgs> | null
    /**
     * The data needed to create a LibraryItem.
     */
    data: XOR<LibraryItemCreateInput, LibraryItemUncheckedCreateInput>
  }

  /**
   * LibraryItem createMany
   */
  export type LibraryItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LibraryItems.
     */
    data: LibraryItemCreateManyInput | LibraryItemCreateManyInput[]
  }

  /**
   * LibraryItem createManyAndReturn
   */
  export type LibraryItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryItem
     */
    select?: LibraryItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryItem
     */
    omit?: LibraryItemOmit<ExtArgs> | null
    /**
     * The data used to create many LibraryItems.
     */
    data: LibraryItemCreateManyInput | LibraryItemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LibraryItem update
   */
  export type LibraryItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryItem
     */
    select?: LibraryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryItem
     */
    omit?: LibraryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryItemInclude<ExtArgs> | null
    /**
     * The data needed to update a LibraryItem.
     */
    data: XOR<LibraryItemUpdateInput, LibraryItemUncheckedUpdateInput>
    /**
     * Choose, which LibraryItem to update.
     */
    where: LibraryItemWhereUniqueInput
  }

  /**
   * LibraryItem updateMany
   */
  export type LibraryItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LibraryItems.
     */
    data: XOR<LibraryItemUpdateManyMutationInput, LibraryItemUncheckedUpdateManyInput>
    /**
     * Filter which LibraryItems to update
     */
    where?: LibraryItemWhereInput
    /**
     * Limit how many LibraryItems to update.
     */
    limit?: number
  }

  /**
   * LibraryItem updateManyAndReturn
   */
  export type LibraryItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryItem
     */
    select?: LibraryItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryItem
     */
    omit?: LibraryItemOmit<ExtArgs> | null
    /**
     * The data used to update LibraryItems.
     */
    data: XOR<LibraryItemUpdateManyMutationInput, LibraryItemUncheckedUpdateManyInput>
    /**
     * Filter which LibraryItems to update
     */
    where?: LibraryItemWhereInput
    /**
     * Limit how many LibraryItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LibraryItem upsert
   */
  export type LibraryItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryItem
     */
    select?: LibraryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryItem
     */
    omit?: LibraryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryItemInclude<ExtArgs> | null
    /**
     * The filter to search for the LibraryItem to update in case it exists.
     */
    where: LibraryItemWhereUniqueInput
    /**
     * In case the LibraryItem found by the `where` argument doesn't exist, create a new LibraryItem with this data.
     */
    create: XOR<LibraryItemCreateInput, LibraryItemUncheckedCreateInput>
    /**
     * In case the LibraryItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LibraryItemUpdateInput, LibraryItemUncheckedUpdateInput>
  }

  /**
   * LibraryItem delete
   */
  export type LibraryItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryItem
     */
    select?: LibraryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryItem
     */
    omit?: LibraryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryItemInclude<ExtArgs> | null
    /**
     * Filter which LibraryItem to delete.
     */
    where: LibraryItemWhereUniqueInput
  }

  /**
   * LibraryItem deleteMany
   */
  export type LibraryItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LibraryItems to delete
     */
    where?: LibraryItemWhereInput
    /**
     * Limit how many LibraryItems to delete.
     */
    limit?: number
  }

  /**
   * LibraryItem.source
   */
  export type LibraryItem$sourceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexSource
     */
    select?: IndexSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexSource
     */
    omit?: IndexSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexSourceInclude<ExtArgs> | null
    where?: IndexSourceWhereInput
  }

  /**
   * LibraryItem without action
   */
  export type LibraryItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryItem
     */
    select?: LibraryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryItem
     */
    omit?: LibraryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const IndexSourceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    query: 'query',
    kind: 'kind',
    enabled: 'enabled',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IndexSourceScalarFieldEnum = (typeof IndexSourceScalarFieldEnum)[keyof typeof IndexSourceScalarFieldEnum]


  export const IndexTermScalarFieldEnum: {
    id: 'id',
    term: 'term',
    enabled: 'enabled',
    sourceHint: 'sourceHint',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    sourceId: 'sourceId'
  };

  export type IndexTermScalarFieldEnum = (typeof IndexTermScalarFieldEnum)[keyof typeof IndexTermScalarFieldEnum]


  export const IndexJobScalarFieldEnum: {
    id: 'id',
    term: 'term',
    query: 'query',
    status: 'status',
    resultCount: 'resultCount',
    errorMessage: 'errorMessage',
    startedAt: 'startedAt',
    finishedAt: 'finishedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    termId: 'termId',
    sourceId: 'sourceId'
  };

  export type IndexJobScalarFieldEnum = (typeof IndexJobScalarFieldEnum)[keyof typeof IndexJobScalarFieldEnum]


  export const LibraryItemScalarFieldEnum: {
    id: 'id',
    title: 'title',
    originalUrl: 'originalUrl',
    normalizedUrl: 'normalizedUrl',
    fileId: 'fileId',
    estimatedType: 'estimatedType',
    origin: 'origin',
    status: 'status',
    extension: 'extension',
    downloadUrl: 'downloadUrl',
    previewPolicy: 'previewPolicy',
    summary: 'summary',
    discoveredAt: 'discoveredAt',
    indexedAt: 'indexedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    sourceId: 'sourceId'
  };

  export type LibraryItemScalarFieldEnum = (typeof LibraryItemScalarFieldEnum)[keyof typeof LibraryItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'IndexSourceKind'
   */
  export type EnumIndexSourceKindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IndexSourceKind'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'IndexJobStatus'
   */
  export type EnumIndexJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IndexJobStatus'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'LibraryItemType'
   */
  export type EnumLibraryItemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LibraryItemType'>
    


  /**
   * Reference to a field of type 'LibraryItemStatus'
   */
  export type EnumLibraryItemStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LibraryItemStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type IndexSourceWhereInput = {
    AND?: IndexSourceWhereInput | IndexSourceWhereInput[]
    OR?: IndexSourceWhereInput[]
    NOT?: IndexSourceWhereInput | IndexSourceWhereInput[]
    id?: StringFilter<"IndexSource"> | string
    name?: StringFilter<"IndexSource"> | string
    query?: StringFilter<"IndexSource"> | string
    kind?: EnumIndexSourceKindFilter<"IndexSource"> | $Enums.IndexSourceKind
    enabled?: BoolFilter<"IndexSource"> | boolean
    notes?: StringNullableFilter<"IndexSource"> | string | null
    createdAt?: DateTimeFilter<"IndexSource"> | Date | string
    updatedAt?: DateTimeFilter<"IndexSource"> | Date | string
    terms?: IndexTermListRelationFilter
    jobs?: IndexJobListRelationFilter
    items?: LibraryItemListRelationFilter
  }

  export type IndexSourceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    query?: SortOrder
    kind?: SortOrder
    enabled?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    terms?: IndexTermOrderByRelationAggregateInput
    jobs?: IndexJobOrderByRelationAggregateInput
    items?: LibraryItemOrderByRelationAggregateInput
  }

  export type IndexSourceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: IndexSourceWhereInput | IndexSourceWhereInput[]
    OR?: IndexSourceWhereInput[]
    NOT?: IndexSourceWhereInput | IndexSourceWhereInput[]
    query?: StringFilter<"IndexSource"> | string
    kind?: EnumIndexSourceKindFilter<"IndexSource"> | $Enums.IndexSourceKind
    enabled?: BoolFilter<"IndexSource"> | boolean
    notes?: StringNullableFilter<"IndexSource"> | string | null
    createdAt?: DateTimeFilter<"IndexSource"> | Date | string
    updatedAt?: DateTimeFilter<"IndexSource"> | Date | string
    terms?: IndexTermListRelationFilter
    jobs?: IndexJobListRelationFilter
    items?: LibraryItemListRelationFilter
  }, "id" | "name">

  export type IndexSourceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    query?: SortOrder
    kind?: SortOrder
    enabled?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IndexSourceCountOrderByAggregateInput
    _max?: IndexSourceMaxOrderByAggregateInput
    _min?: IndexSourceMinOrderByAggregateInput
  }

  export type IndexSourceScalarWhereWithAggregatesInput = {
    AND?: IndexSourceScalarWhereWithAggregatesInput | IndexSourceScalarWhereWithAggregatesInput[]
    OR?: IndexSourceScalarWhereWithAggregatesInput[]
    NOT?: IndexSourceScalarWhereWithAggregatesInput | IndexSourceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IndexSource"> | string
    name?: StringWithAggregatesFilter<"IndexSource"> | string
    query?: StringWithAggregatesFilter<"IndexSource"> | string
    kind?: EnumIndexSourceKindWithAggregatesFilter<"IndexSource"> | $Enums.IndexSourceKind
    enabled?: BoolWithAggregatesFilter<"IndexSource"> | boolean
    notes?: StringNullableWithAggregatesFilter<"IndexSource"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"IndexSource"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"IndexSource"> | Date | string
  }

  export type IndexTermWhereInput = {
    AND?: IndexTermWhereInput | IndexTermWhereInput[]
    OR?: IndexTermWhereInput[]
    NOT?: IndexTermWhereInput | IndexTermWhereInput[]
    id?: StringFilter<"IndexTerm"> | string
    term?: StringFilter<"IndexTerm"> | string
    enabled?: BoolFilter<"IndexTerm"> | boolean
    sourceHint?: StringNullableFilter<"IndexTerm"> | string | null
    createdAt?: DateTimeFilter<"IndexTerm"> | Date | string
    updatedAt?: DateTimeFilter<"IndexTerm"> | Date | string
    sourceId?: StringNullableFilter<"IndexTerm"> | string | null
    source?: XOR<IndexSourceNullableScalarRelationFilter, IndexSourceWhereInput> | null
    jobs?: IndexJobListRelationFilter
  }

  export type IndexTermOrderByWithRelationInput = {
    id?: SortOrder
    term?: SortOrder
    enabled?: SortOrder
    sourceHint?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sourceId?: SortOrderInput | SortOrder
    source?: IndexSourceOrderByWithRelationInput
    jobs?: IndexJobOrderByRelationAggregateInput
  }

  export type IndexTermWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    term?: string
    AND?: IndexTermWhereInput | IndexTermWhereInput[]
    OR?: IndexTermWhereInput[]
    NOT?: IndexTermWhereInput | IndexTermWhereInput[]
    enabled?: BoolFilter<"IndexTerm"> | boolean
    sourceHint?: StringNullableFilter<"IndexTerm"> | string | null
    createdAt?: DateTimeFilter<"IndexTerm"> | Date | string
    updatedAt?: DateTimeFilter<"IndexTerm"> | Date | string
    sourceId?: StringNullableFilter<"IndexTerm"> | string | null
    source?: XOR<IndexSourceNullableScalarRelationFilter, IndexSourceWhereInput> | null
    jobs?: IndexJobListRelationFilter
  }, "id" | "term">

  export type IndexTermOrderByWithAggregationInput = {
    id?: SortOrder
    term?: SortOrder
    enabled?: SortOrder
    sourceHint?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sourceId?: SortOrderInput | SortOrder
    _count?: IndexTermCountOrderByAggregateInput
    _max?: IndexTermMaxOrderByAggregateInput
    _min?: IndexTermMinOrderByAggregateInput
  }

  export type IndexTermScalarWhereWithAggregatesInput = {
    AND?: IndexTermScalarWhereWithAggregatesInput | IndexTermScalarWhereWithAggregatesInput[]
    OR?: IndexTermScalarWhereWithAggregatesInput[]
    NOT?: IndexTermScalarWhereWithAggregatesInput | IndexTermScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IndexTerm"> | string
    term?: StringWithAggregatesFilter<"IndexTerm"> | string
    enabled?: BoolWithAggregatesFilter<"IndexTerm"> | boolean
    sourceHint?: StringNullableWithAggregatesFilter<"IndexTerm"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"IndexTerm"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"IndexTerm"> | Date | string
    sourceId?: StringNullableWithAggregatesFilter<"IndexTerm"> | string | null
  }

  export type IndexJobWhereInput = {
    AND?: IndexJobWhereInput | IndexJobWhereInput[]
    OR?: IndexJobWhereInput[]
    NOT?: IndexJobWhereInput | IndexJobWhereInput[]
    id?: StringFilter<"IndexJob"> | string
    term?: StringFilter<"IndexJob"> | string
    query?: StringFilter<"IndexJob"> | string
    status?: EnumIndexJobStatusFilter<"IndexJob"> | $Enums.IndexJobStatus
    resultCount?: IntFilter<"IndexJob"> | number
    errorMessage?: StringNullableFilter<"IndexJob"> | string | null
    startedAt?: DateTimeNullableFilter<"IndexJob"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"IndexJob"> | Date | string | null
    createdAt?: DateTimeFilter<"IndexJob"> | Date | string
    updatedAt?: DateTimeFilter<"IndexJob"> | Date | string
    termId?: StringNullableFilter<"IndexJob"> | string | null
    sourceId?: StringNullableFilter<"IndexJob"> | string | null
    termRelation?: XOR<IndexTermNullableScalarRelationFilter, IndexTermWhereInput> | null
    source?: XOR<IndexSourceNullableScalarRelationFilter, IndexSourceWhereInput> | null
  }

  export type IndexJobOrderByWithRelationInput = {
    id?: SortOrder
    term?: SortOrder
    query?: SortOrder
    status?: SortOrder
    resultCount?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    finishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    termId?: SortOrderInput | SortOrder
    sourceId?: SortOrderInput | SortOrder
    termRelation?: IndexTermOrderByWithRelationInput
    source?: IndexSourceOrderByWithRelationInput
  }

  export type IndexJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IndexJobWhereInput | IndexJobWhereInput[]
    OR?: IndexJobWhereInput[]
    NOT?: IndexJobWhereInput | IndexJobWhereInput[]
    term?: StringFilter<"IndexJob"> | string
    query?: StringFilter<"IndexJob"> | string
    status?: EnumIndexJobStatusFilter<"IndexJob"> | $Enums.IndexJobStatus
    resultCount?: IntFilter<"IndexJob"> | number
    errorMessage?: StringNullableFilter<"IndexJob"> | string | null
    startedAt?: DateTimeNullableFilter<"IndexJob"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"IndexJob"> | Date | string | null
    createdAt?: DateTimeFilter<"IndexJob"> | Date | string
    updatedAt?: DateTimeFilter<"IndexJob"> | Date | string
    termId?: StringNullableFilter<"IndexJob"> | string | null
    sourceId?: StringNullableFilter<"IndexJob"> | string | null
    termRelation?: XOR<IndexTermNullableScalarRelationFilter, IndexTermWhereInput> | null
    source?: XOR<IndexSourceNullableScalarRelationFilter, IndexSourceWhereInput> | null
  }, "id">

  export type IndexJobOrderByWithAggregationInput = {
    id?: SortOrder
    term?: SortOrder
    query?: SortOrder
    status?: SortOrder
    resultCount?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    finishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    termId?: SortOrderInput | SortOrder
    sourceId?: SortOrderInput | SortOrder
    _count?: IndexJobCountOrderByAggregateInput
    _avg?: IndexJobAvgOrderByAggregateInput
    _max?: IndexJobMaxOrderByAggregateInput
    _min?: IndexJobMinOrderByAggregateInput
    _sum?: IndexJobSumOrderByAggregateInput
  }

  export type IndexJobScalarWhereWithAggregatesInput = {
    AND?: IndexJobScalarWhereWithAggregatesInput | IndexJobScalarWhereWithAggregatesInput[]
    OR?: IndexJobScalarWhereWithAggregatesInput[]
    NOT?: IndexJobScalarWhereWithAggregatesInput | IndexJobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IndexJob"> | string
    term?: StringWithAggregatesFilter<"IndexJob"> | string
    query?: StringWithAggregatesFilter<"IndexJob"> | string
    status?: EnumIndexJobStatusWithAggregatesFilter<"IndexJob"> | $Enums.IndexJobStatus
    resultCount?: IntWithAggregatesFilter<"IndexJob"> | number
    errorMessage?: StringNullableWithAggregatesFilter<"IndexJob"> | string | null
    startedAt?: DateTimeNullableWithAggregatesFilter<"IndexJob"> | Date | string | null
    finishedAt?: DateTimeNullableWithAggregatesFilter<"IndexJob"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"IndexJob"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"IndexJob"> | Date | string
    termId?: StringNullableWithAggregatesFilter<"IndexJob"> | string | null
    sourceId?: StringNullableWithAggregatesFilter<"IndexJob"> | string | null
  }

  export type LibraryItemWhereInput = {
    AND?: LibraryItemWhereInput | LibraryItemWhereInput[]
    OR?: LibraryItemWhereInput[]
    NOT?: LibraryItemWhereInput | LibraryItemWhereInput[]
    id?: StringFilter<"LibraryItem"> | string
    title?: StringFilter<"LibraryItem"> | string
    originalUrl?: StringFilter<"LibraryItem"> | string
    normalizedUrl?: StringFilter<"LibraryItem"> | string
    fileId?: StringNullableFilter<"LibraryItem"> | string | null
    estimatedType?: EnumLibraryItemTypeFilter<"LibraryItem"> | $Enums.LibraryItemType
    origin?: StringFilter<"LibraryItem"> | string
    status?: EnumLibraryItemStatusFilter<"LibraryItem"> | $Enums.LibraryItemStatus
    extension?: StringNullableFilter<"LibraryItem"> | string | null
    downloadUrl?: StringNullableFilter<"LibraryItem"> | string | null
    previewPolicy?: StringFilter<"LibraryItem"> | string
    summary?: StringNullableFilter<"LibraryItem"> | string | null
    discoveredAt?: DateTimeFilter<"LibraryItem"> | Date | string
    indexedAt?: DateTimeFilter<"LibraryItem"> | Date | string
    createdAt?: DateTimeFilter<"LibraryItem"> | Date | string
    updatedAt?: DateTimeFilter<"LibraryItem"> | Date | string
    sourceId?: StringNullableFilter<"LibraryItem"> | string | null
    source?: XOR<IndexSourceNullableScalarRelationFilter, IndexSourceWhereInput> | null
  }

  export type LibraryItemOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    originalUrl?: SortOrder
    normalizedUrl?: SortOrder
    fileId?: SortOrderInput | SortOrder
    estimatedType?: SortOrder
    origin?: SortOrder
    status?: SortOrder
    extension?: SortOrderInput | SortOrder
    downloadUrl?: SortOrderInput | SortOrder
    previewPolicy?: SortOrder
    summary?: SortOrderInput | SortOrder
    discoveredAt?: SortOrder
    indexedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sourceId?: SortOrderInput | SortOrder
    source?: IndexSourceOrderByWithRelationInput
  }

  export type LibraryItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    originalUrl?: string
    normalizedUrl?: string
    AND?: LibraryItemWhereInput | LibraryItemWhereInput[]
    OR?: LibraryItemWhereInput[]
    NOT?: LibraryItemWhereInput | LibraryItemWhereInput[]
    title?: StringFilter<"LibraryItem"> | string
    fileId?: StringNullableFilter<"LibraryItem"> | string | null
    estimatedType?: EnumLibraryItemTypeFilter<"LibraryItem"> | $Enums.LibraryItemType
    origin?: StringFilter<"LibraryItem"> | string
    status?: EnumLibraryItemStatusFilter<"LibraryItem"> | $Enums.LibraryItemStatus
    extension?: StringNullableFilter<"LibraryItem"> | string | null
    downloadUrl?: StringNullableFilter<"LibraryItem"> | string | null
    previewPolicy?: StringFilter<"LibraryItem"> | string
    summary?: StringNullableFilter<"LibraryItem"> | string | null
    discoveredAt?: DateTimeFilter<"LibraryItem"> | Date | string
    indexedAt?: DateTimeFilter<"LibraryItem"> | Date | string
    createdAt?: DateTimeFilter<"LibraryItem"> | Date | string
    updatedAt?: DateTimeFilter<"LibraryItem"> | Date | string
    sourceId?: StringNullableFilter<"LibraryItem"> | string | null
    source?: XOR<IndexSourceNullableScalarRelationFilter, IndexSourceWhereInput> | null
  }, "id" | "originalUrl" | "normalizedUrl">

  export type LibraryItemOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    originalUrl?: SortOrder
    normalizedUrl?: SortOrder
    fileId?: SortOrderInput | SortOrder
    estimatedType?: SortOrder
    origin?: SortOrder
    status?: SortOrder
    extension?: SortOrderInput | SortOrder
    downloadUrl?: SortOrderInput | SortOrder
    previewPolicy?: SortOrder
    summary?: SortOrderInput | SortOrder
    discoveredAt?: SortOrder
    indexedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sourceId?: SortOrderInput | SortOrder
    _count?: LibraryItemCountOrderByAggregateInput
    _max?: LibraryItemMaxOrderByAggregateInput
    _min?: LibraryItemMinOrderByAggregateInput
  }

  export type LibraryItemScalarWhereWithAggregatesInput = {
    AND?: LibraryItemScalarWhereWithAggregatesInput | LibraryItemScalarWhereWithAggregatesInput[]
    OR?: LibraryItemScalarWhereWithAggregatesInput[]
    NOT?: LibraryItemScalarWhereWithAggregatesInput | LibraryItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LibraryItem"> | string
    title?: StringWithAggregatesFilter<"LibraryItem"> | string
    originalUrl?: StringWithAggregatesFilter<"LibraryItem"> | string
    normalizedUrl?: StringWithAggregatesFilter<"LibraryItem"> | string
    fileId?: StringNullableWithAggregatesFilter<"LibraryItem"> | string | null
    estimatedType?: EnumLibraryItemTypeWithAggregatesFilter<"LibraryItem"> | $Enums.LibraryItemType
    origin?: StringWithAggregatesFilter<"LibraryItem"> | string
    status?: EnumLibraryItemStatusWithAggregatesFilter<"LibraryItem"> | $Enums.LibraryItemStatus
    extension?: StringNullableWithAggregatesFilter<"LibraryItem"> | string | null
    downloadUrl?: StringNullableWithAggregatesFilter<"LibraryItem"> | string | null
    previewPolicy?: StringWithAggregatesFilter<"LibraryItem"> | string
    summary?: StringNullableWithAggregatesFilter<"LibraryItem"> | string | null
    discoveredAt?: DateTimeWithAggregatesFilter<"LibraryItem"> | Date | string
    indexedAt?: DateTimeWithAggregatesFilter<"LibraryItem"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"LibraryItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LibraryItem"> | Date | string
    sourceId?: StringNullableWithAggregatesFilter<"LibraryItem"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndexSourceCreateInput = {
    id?: string
    name: string
    query: string
    kind?: $Enums.IndexSourceKind
    enabled?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    terms?: IndexTermCreateNestedManyWithoutSourceInput
    jobs?: IndexJobCreateNestedManyWithoutSourceInput
    items?: LibraryItemCreateNestedManyWithoutSourceInput
  }

  export type IndexSourceUncheckedCreateInput = {
    id?: string
    name: string
    query: string
    kind?: $Enums.IndexSourceKind
    enabled?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    terms?: IndexTermUncheckedCreateNestedManyWithoutSourceInput
    jobs?: IndexJobUncheckedCreateNestedManyWithoutSourceInput
    items?: LibraryItemUncheckedCreateNestedManyWithoutSourceInput
  }

  export type IndexSourceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    kind?: EnumIndexSourceKindFieldUpdateOperationsInput | $Enums.IndexSourceKind
    enabled?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    terms?: IndexTermUpdateManyWithoutSourceNestedInput
    jobs?: IndexJobUpdateManyWithoutSourceNestedInput
    items?: LibraryItemUpdateManyWithoutSourceNestedInput
  }

  export type IndexSourceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    kind?: EnumIndexSourceKindFieldUpdateOperationsInput | $Enums.IndexSourceKind
    enabled?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    terms?: IndexTermUncheckedUpdateManyWithoutSourceNestedInput
    jobs?: IndexJobUncheckedUpdateManyWithoutSourceNestedInput
    items?: LibraryItemUncheckedUpdateManyWithoutSourceNestedInput
  }

  export type IndexSourceCreateManyInput = {
    id?: string
    name: string
    query: string
    kind?: $Enums.IndexSourceKind
    enabled?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IndexSourceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    kind?: EnumIndexSourceKindFieldUpdateOperationsInput | $Enums.IndexSourceKind
    enabled?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndexSourceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    kind?: EnumIndexSourceKindFieldUpdateOperationsInput | $Enums.IndexSourceKind
    enabled?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndexTermCreateInput = {
    id?: string
    term: string
    enabled?: boolean
    sourceHint?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    source?: IndexSourceCreateNestedOneWithoutTermsInput
    jobs?: IndexJobCreateNestedManyWithoutTermRelationInput
  }

  export type IndexTermUncheckedCreateInput = {
    id?: string
    term: string
    enabled?: boolean
    sourceHint?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sourceId?: string | null
    jobs?: IndexJobUncheckedCreateNestedManyWithoutTermRelationInput
  }

  export type IndexTermUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    sourceHint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: IndexSourceUpdateOneWithoutTermsNestedInput
    jobs?: IndexJobUpdateManyWithoutTermRelationNestedInput
  }

  export type IndexTermUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    sourceHint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    jobs?: IndexJobUncheckedUpdateManyWithoutTermRelationNestedInput
  }

  export type IndexTermCreateManyInput = {
    id?: string
    term: string
    enabled?: boolean
    sourceHint?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sourceId?: string | null
  }

  export type IndexTermUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    sourceHint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndexTermUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    sourceHint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IndexJobCreateInput = {
    id?: string
    term: string
    query: string
    status?: $Enums.IndexJobStatus
    resultCount?: number
    errorMessage?: string | null
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    termRelation?: IndexTermCreateNestedOneWithoutJobsInput
    source?: IndexSourceCreateNestedOneWithoutJobsInput
  }

  export type IndexJobUncheckedCreateInput = {
    id?: string
    term: string
    query: string
    status?: $Enums.IndexJobStatus
    resultCount?: number
    errorMessage?: string | null
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    termId?: string | null
    sourceId?: string | null
  }

  export type IndexJobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    status?: EnumIndexJobStatusFieldUpdateOperationsInput | $Enums.IndexJobStatus
    resultCount?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    termRelation?: IndexTermUpdateOneWithoutJobsNestedInput
    source?: IndexSourceUpdateOneWithoutJobsNestedInput
  }

  export type IndexJobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    status?: EnumIndexJobStatusFieldUpdateOperationsInput | $Enums.IndexJobStatus
    resultCount?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    termId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IndexJobCreateManyInput = {
    id?: string
    term: string
    query: string
    status?: $Enums.IndexJobStatus
    resultCount?: number
    errorMessage?: string | null
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    termId?: string | null
    sourceId?: string | null
  }

  export type IndexJobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    status?: EnumIndexJobStatusFieldUpdateOperationsInput | $Enums.IndexJobStatus
    resultCount?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndexJobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    status?: EnumIndexJobStatusFieldUpdateOperationsInput | $Enums.IndexJobStatus
    resultCount?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    termId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LibraryItemCreateInput = {
    id?: string
    title: string
    originalUrl: string
    normalizedUrl: string
    fileId?: string | null
    estimatedType?: $Enums.LibraryItemType
    origin: string
    status?: $Enums.LibraryItemStatus
    extension?: string | null
    downloadUrl?: string | null
    previewPolicy?: string
    summary?: string | null
    discoveredAt?: Date | string
    indexedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    source?: IndexSourceCreateNestedOneWithoutItemsInput
  }

  export type LibraryItemUncheckedCreateInput = {
    id?: string
    title: string
    originalUrl: string
    normalizedUrl: string
    fileId?: string | null
    estimatedType?: $Enums.LibraryItemType
    origin: string
    status?: $Enums.LibraryItemStatus
    extension?: string | null
    downloadUrl?: string | null
    previewPolicy?: string
    summary?: string | null
    discoveredAt?: Date | string
    indexedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    sourceId?: string | null
  }

  export type LibraryItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    normalizedUrl?: StringFieldUpdateOperationsInput | string
    fileId?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedType?: EnumLibraryItemTypeFieldUpdateOperationsInput | $Enums.LibraryItemType
    origin?: StringFieldUpdateOperationsInput | string
    status?: EnumLibraryItemStatusFieldUpdateOperationsInput | $Enums.LibraryItemStatus
    extension?: NullableStringFieldUpdateOperationsInput | string | null
    downloadUrl?: NullableStringFieldUpdateOperationsInput | string | null
    previewPolicy?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    discoveredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    indexedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: IndexSourceUpdateOneWithoutItemsNestedInput
  }

  export type LibraryItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    normalizedUrl?: StringFieldUpdateOperationsInput | string
    fileId?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedType?: EnumLibraryItemTypeFieldUpdateOperationsInput | $Enums.LibraryItemType
    origin?: StringFieldUpdateOperationsInput | string
    status?: EnumLibraryItemStatusFieldUpdateOperationsInput | $Enums.LibraryItemStatus
    extension?: NullableStringFieldUpdateOperationsInput | string | null
    downloadUrl?: NullableStringFieldUpdateOperationsInput | string | null
    previewPolicy?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    discoveredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    indexedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LibraryItemCreateManyInput = {
    id?: string
    title: string
    originalUrl: string
    normalizedUrl: string
    fileId?: string | null
    estimatedType?: $Enums.LibraryItemType
    origin: string
    status?: $Enums.LibraryItemStatus
    extension?: string | null
    downloadUrl?: string | null
    previewPolicy?: string
    summary?: string | null
    discoveredAt?: Date | string
    indexedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    sourceId?: string | null
  }

  export type LibraryItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    normalizedUrl?: StringFieldUpdateOperationsInput | string
    fileId?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedType?: EnumLibraryItemTypeFieldUpdateOperationsInput | $Enums.LibraryItemType
    origin?: StringFieldUpdateOperationsInput | string
    status?: EnumLibraryItemStatusFieldUpdateOperationsInput | $Enums.LibraryItemStatus
    extension?: NullableStringFieldUpdateOperationsInput | string | null
    downloadUrl?: NullableStringFieldUpdateOperationsInput | string | null
    previewPolicy?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    discoveredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    indexedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LibraryItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    normalizedUrl?: StringFieldUpdateOperationsInput | string
    fileId?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedType?: EnumLibraryItemTypeFieldUpdateOperationsInput | $Enums.LibraryItemType
    origin?: StringFieldUpdateOperationsInput | string
    status?: EnumLibraryItemStatusFieldUpdateOperationsInput | $Enums.LibraryItemStatus
    extension?: NullableStringFieldUpdateOperationsInput | string | null
    downloadUrl?: NullableStringFieldUpdateOperationsInput | string | null
    previewPolicy?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    discoveredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    indexedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumIndexSourceKindFilter<$PrismaModel = never> = {
    equals?: $Enums.IndexSourceKind | EnumIndexSourceKindFieldRefInput<$PrismaModel>
    in?: $Enums.IndexSourceKind[]
    notIn?: $Enums.IndexSourceKind[]
    not?: NestedEnumIndexSourceKindFilter<$PrismaModel> | $Enums.IndexSourceKind
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IndexTermListRelationFilter = {
    every?: IndexTermWhereInput
    some?: IndexTermWhereInput
    none?: IndexTermWhereInput
  }

  export type IndexJobListRelationFilter = {
    every?: IndexJobWhereInput
    some?: IndexJobWhereInput
    none?: IndexJobWhereInput
  }

  export type LibraryItemListRelationFilter = {
    every?: LibraryItemWhereInput
    some?: LibraryItemWhereInput
    none?: LibraryItemWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type IndexTermOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IndexJobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LibraryItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IndexSourceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    query?: SortOrder
    kind?: SortOrder
    enabled?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IndexSourceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    query?: SortOrder
    kind?: SortOrder
    enabled?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IndexSourceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    query?: SortOrder
    kind?: SortOrder
    enabled?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumIndexSourceKindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IndexSourceKind | EnumIndexSourceKindFieldRefInput<$PrismaModel>
    in?: $Enums.IndexSourceKind[]
    notIn?: $Enums.IndexSourceKind[]
    not?: NestedEnumIndexSourceKindWithAggregatesFilter<$PrismaModel> | $Enums.IndexSourceKind
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIndexSourceKindFilter<$PrismaModel>
    _max?: NestedEnumIndexSourceKindFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type IndexSourceNullableScalarRelationFilter = {
    is?: IndexSourceWhereInput | null
    isNot?: IndexSourceWhereInput | null
  }

  export type IndexTermCountOrderByAggregateInput = {
    id?: SortOrder
    term?: SortOrder
    enabled?: SortOrder
    sourceHint?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sourceId?: SortOrder
  }

  export type IndexTermMaxOrderByAggregateInput = {
    id?: SortOrder
    term?: SortOrder
    enabled?: SortOrder
    sourceHint?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sourceId?: SortOrder
  }

  export type IndexTermMinOrderByAggregateInput = {
    id?: SortOrder
    term?: SortOrder
    enabled?: SortOrder
    sourceHint?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sourceId?: SortOrder
  }

  export type EnumIndexJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.IndexJobStatus | EnumIndexJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IndexJobStatus[]
    notIn?: $Enums.IndexJobStatus[]
    not?: NestedEnumIndexJobStatusFilter<$PrismaModel> | $Enums.IndexJobStatus
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IndexTermNullableScalarRelationFilter = {
    is?: IndexTermWhereInput | null
    isNot?: IndexTermWhereInput | null
  }

  export type IndexJobCountOrderByAggregateInput = {
    id?: SortOrder
    term?: SortOrder
    query?: SortOrder
    status?: SortOrder
    resultCount?: SortOrder
    errorMessage?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    termId?: SortOrder
    sourceId?: SortOrder
  }

  export type IndexJobAvgOrderByAggregateInput = {
    resultCount?: SortOrder
  }

  export type IndexJobMaxOrderByAggregateInput = {
    id?: SortOrder
    term?: SortOrder
    query?: SortOrder
    status?: SortOrder
    resultCount?: SortOrder
    errorMessage?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    termId?: SortOrder
    sourceId?: SortOrder
  }

  export type IndexJobMinOrderByAggregateInput = {
    id?: SortOrder
    term?: SortOrder
    query?: SortOrder
    status?: SortOrder
    resultCount?: SortOrder
    errorMessage?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    termId?: SortOrder
    sourceId?: SortOrder
  }

  export type IndexJobSumOrderByAggregateInput = {
    resultCount?: SortOrder
  }

  export type EnumIndexJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IndexJobStatus | EnumIndexJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IndexJobStatus[]
    notIn?: $Enums.IndexJobStatus[]
    not?: NestedEnumIndexJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.IndexJobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIndexJobStatusFilter<$PrismaModel>
    _max?: NestedEnumIndexJobStatusFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumLibraryItemTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LibraryItemType | EnumLibraryItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LibraryItemType[]
    notIn?: $Enums.LibraryItemType[]
    not?: NestedEnumLibraryItemTypeFilter<$PrismaModel> | $Enums.LibraryItemType
  }

  export type EnumLibraryItemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LibraryItemStatus | EnumLibraryItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LibraryItemStatus[]
    notIn?: $Enums.LibraryItemStatus[]
    not?: NestedEnumLibraryItemStatusFilter<$PrismaModel> | $Enums.LibraryItemStatus
  }

  export type LibraryItemCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    originalUrl?: SortOrder
    normalizedUrl?: SortOrder
    fileId?: SortOrder
    estimatedType?: SortOrder
    origin?: SortOrder
    status?: SortOrder
    extension?: SortOrder
    downloadUrl?: SortOrder
    previewPolicy?: SortOrder
    summary?: SortOrder
    discoveredAt?: SortOrder
    indexedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sourceId?: SortOrder
  }

  export type LibraryItemMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    originalUrl?: SortOrder
    normalizedUrl?: SortOrder
    fileId?: SortOrder
    estimatedType?: SortOrder
    origin?: SortOrder
    status?: SortOrder
    extension?: SortOrder
    downloadUrl?: SortOrder
    previewPolicy?: SortOrder
    summary?: SortOrder
    discoveredAt?: SortOrder
    indexedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sourceId?: SortOrder
  }

  export type LibraryItemMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    originalUrl?: SortOrder
    normalizedUrl?: SortOrder
    fileId?: SortOrder
    estimatedType?: SortOrder
    origin?: SortOrder
    status?: SortOrder
    extension?: SortOrder
    downloadUrl?: SortOrder
    previewPolicy?: SortOrder
    summary?: SortOrder
    discoveredAt?: SortOrder
    indexedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sourceId?: SortOrder
  }

  export type EnumLibraryItemTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LibraryItemType | EnumLibraryItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LibraryItemType[]
    notIn?: $Enums.LibraryItemType[]
    not?: NestedEnumLibraryItemTypeWithAggregatesFilter<$PrismaModel> | $Enums.LibraryItemType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLibraryItemTypeFilter<$PrismaModel>
    _max?: NestedEnumLibraryItemTypeFilter<$PrismaModel>
  }

  export type EnumLibraryItemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LibraryItemStatus | EnumLibraryItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LibraryItemStatus[]
    notIn?: $Enums.LibraryItemStatus[]
    not?: NestedEnumLibraryItemStatusWithAggregatesFilter<$PrismaModel> | $Enums.LibraryItemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLibraryItemStatusFilter<$PrismaModel>
    _max?: NestedEnumLibraryItemStatusFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IndexTermCreateNestedManyWithoutSourceInput = {
    create?: XOR<IndexTermCreateWithoutSourceInput, IndexTermUncheckedCreateWithoutSourceInput> | IndexTermCreateWithoutSourceInput[] | IndexTermUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: IndexTermCreateOrConnectWithoutSourceInput | IndexTermCreateOrConnectWithoutSourceInput[]
    createMany?: IndexTermCreateManySourceInputEnvelope
    connect?: IndexTermWhereUniqueInput | IndexTermWhereUniqueInput[]
  }

  export type IndexJobCreateNestedManyWithoutSourceInput = {
    create?: XOR<IndexJobCreateWithoutSourceInput, IndexJobUncheckedCreateWithoutSourceInput> | IndexJobCreateWithoutSourceInput[] | IndexJobUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: IndexJobCreateOrConnectWithoutSourceInput | IndexJobCreateOrConnectWithoutSourceInput[]
    createMany?: IndexJobCreateManySourceInputEnvelope
    connect?: IndexJobWhereUniqueInput | IndexJobWhereUniqueInput[]
  }

  export type LibraryItemCreateNestedManyWithoutSourceInput = {
    create?: XOR<LibraryItemCreateWithoutSourceInput, LibraryItemUncheckedCreateWithoutSourceInput> | LibraryItemCreateWithoutSourceInput[] | LibraryItemUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: LibraryItemCreateOrConnectWithoutSourceInput | LibraryItemCreateOrConnectWithoutSourceInput[]
    createMany?: LibraryItemCreateManySourceInputEnvelope
    connect?: LibraryItemWhereUniqueInput | LibraryItemWhereUniqueInput[]
  }

  export type IndexTermUncheckedCreateNestedManyWithoutSourceInput = {
    create?: XOR<IndexTermCreateWithoutSourceInput, IndexTermUncheckedCreateWithoutSourceInput> | IndexTermCreateWithoutSourceInput[] | IndexTermUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: IndexTermCreateOrConnectWithoutSourceInput | IndexTermCreateOrConnectWithoutSourceInput[]
    createMany?: IndexTermCreateManySourceInputEnvelope
    connect?: IndexTermWhereUniqueInput | IndexTermWhereUniqueInput[]
  }

  export type IndexJobUncheckedCreateNestedManyWithoutSourceInput = {
    create?: XOR<IndexJobCreateWithoutSourceInput, IndexJobUncheckedCreateWithoutSourceInput> | IndexJobCreateWithoutSourceInput[] | IndexJobUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: IndexJobCreateOrConnectWithoutSourceInput | IndexJobCreateOrConnectWithoutSourceInput[]
    createMany?: IndexJobCreateManySourceInputEnvelope
    connect?: IndexJobWhereUniqueInput | IndexJobWhereUniqueInput[]
  }

  export type LibraryItemUncheckedCreateNestedManyWithoutSourceInput = {
    create?: XOR<LibraryItemCreateWithoutSourceInput, LibraryItemUncheckedCreateWithoutSourceInput> | LibraryItemCreateWithoutSourceInput[] | LibraryItemUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: LibraryItemCreateOrConnectWithoutSourceInput | LibraryItemCreateOrConnectWithoutSourceInput[]
    createMany?: LibraryItemCreateManySourceInputEnvelope
    connect?: LibraryItemWhereUniqueInput | LibraryItemWhereUniqueInput[]
  }

  export type EnumIndexSourceKindFieldUpdateOperationsInput = {
    set?: $Enums.IndexSourceKind
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IndexTermUpdateManyWithoutSourceNestedInput = {
    create?: XOR<IndexTermCreateWithoutSourceInput, IndexTermUncheckedCreateWithoutSourceInput> | IndexTermCreateWithoutSourceInput[] | IndexTermUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: IndexTermCreateOrConnectWithoutSourceInput | IndexTermCreateOrConnectWithoutSourceInput[]
    upsert?: IndexTermUpsertWithWhereUniqueWithoutSourceInput | IndexTermUpsertWithWhereUniqueWithoutSourceInput[]
    createMany?: IndexTermCreateManySourceInputEnvelope
    set?: IndexTermWhereUniqueInput | IndexTermWhereUniqueInput[]
    disconnect?: IndexTermWhereUniqueInput | IndexTermWhereUniqueInput[]
    delete?: IndexTermWhereUniqueInput | IndexTermWhereUniqueInput[]
    connect?: IndexTermWhereUniqueInput | IndexTermWhereUniqueInput[]
    update?: IndexTermUpdateWithWhereUniqueWithoutSourceInput | IndexTermUpdateWithWhereUniqueWithoutSourceInput[]
    updateMany?: IndexTermUpdateManyWithWhereWithoutSourceInput | IndexTermUpdateManyWithWhereWithoutSourceInput[]
    deleteMany?: IndexTermScalarWhereInput | IndexTermScalarWhereInput[]
  }

  export type IndexJobUpdateManyWithoutSourceNestedInput = {
    create?: XOR<IndexJobCreateWithoutSourceInput, IndexJobUncheckedCreateWithoutSourceInput> | IndexJobCreateWithoutSourceInput[] | IndexJobUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: IndexJobCreateOrConnectWithoutSourceInput | IndexJobCreateOrConnectWithoutSourceInput[]
    upsert?: IndexJobUpsertWithWhereUniqueWithoutSourceInput | IndexJobUpsertWithWhereUniqueWithoutSourceInput[]
    createMany?: IndexJobCreateManySourceInputEnvelope
    set?: IndexJobWhereUniqueInput | IndexJobWhereUniqueInput[]
    disconnect?: IndexJobWhereUniqueInput | IndexJobWhereUniqueInput[]
    delete?: IndexJobWhereUniqueInput | IndexJobWhereUniqueInput[]
    connect?: IndexJobWhereUniqueInput | IndexJobWhereUniqueInput[]
    update?: IndexJobUpdateWithWhereUniqueWithoutSourceInput | IndexJobUpdateWithWhereUniqueWithoutSourceInput[]
    updateMany?: IndexJobUpdateManyWithWhereWithoutSourceInput | IndexJobUpdateManyWithWhereWithoutSourceInput[]
    deleteMany?: IndexJobScalarWhereInput | IndexJobScalarWhereInput[]
  }

  export type LibraryItemUpdateManyWithoutSourceNestedInput = {
    create?: XOR<LibraryItemCreateWithoutSourceInput, LibraryItemUncheckedCreateWithoutSourceInput> | LibraryItemCreateWithoutSourceInput[] | LibraryItemUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: LibraryItemCreateOrConnectWithoutSourceInput | LibraryItemCreateOrConnectWithoutSourceInput[]
    upsert?: LibraryItemUpsertWithWhereUniqueWithoutSourceInput | LibraryItemUpsertWithWhereUniqueWithoutSourceInput[]
    createMany?: LibraryItemCreateManySourceInputEnvelope
    set?: LibraryItemWhereUniqueInput | LibraryItemWhereUniqueInput[]
    disconnect?: LibraryItemWhereUniqueInput | LibraryItemWhereUniqueInput[]
    delete?: LibraryItemWhereUniqueInput | LibraryItemWhereUniqueInput[]
    connect?: LibraryItemWhereUniqueInput | LibraryItemWhereUniqueInput[]
    update?: LibraryItemUpdateWithWhereUniqueWithoutSourceInput | LibraryItemUpdateWithWhereUniqueWithoutSourceInput[]
    updateMany?: LibraryItemUpdateManyWithWhereWithoutSourceInput | LibraryItemUpdateManyWithWhereWithoutSourceInput[]
    deleteMany?: LibraryItemScalarWhereInput | LibraryItemScalarWhereInput[]
  }

  export type IndexTermUncheckedUpdateManyWithoutSourceNestedInput = {
    create?: XOR<IndexTermCreateWithoutSourceInput, IndexTermUncheckedCreateWithoutSourceInput> | IndexTermCreateWithoutSourceInput[] | IndexTermUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: IndexTermCreateOrConnectWithoutSourceInput | IndexTermCreateOrConnectWithoutSourceInput[]
    upsert?: IndexTermUpsertWithWhereUniqueWithoutSourceInput | IndexTermUpsertWithWhereUniqueWithoutSourceInput[]
    createMany?: IndexTermCreateManySourceInputEnvelope
    set?: IndexTermWhereUniqueInput | IndexTermWhereUniqueInput[]
    disconnect?: IndexTermWhereUniqueInput | IndexTermWhereUniqueInput[]
    delete?: IndexTermWhereUniqueInput | IndexTermWhereUniqueInput[]
    connect?: IndexTermWhereUniqueInput | IndexTermWhereUniqueInput[]
    update?: IndexTermUpdateWithWhereUniqueWithoutSourceInput | IndexTermUpdateWithWhereUniqueWithoutSourceInput[]
    updateMany?: IndexTermUpdateManyWithWhereWithoutSourceInput | IndexTermUpdateManyWithWhereWithoutSourceInput[]
    deleteMany?: IndexTermScalarWhereInput | IndexTermScalarWhereInput[]
  }

  export type IndexJobUncheckedUpdateManyWithoutSourceNestedInput = {
    create?: XOR<IndexJobCreateWithoutSourceInput, IndexJobUncheckedCreateWithoutSourceInput> | IndexJobCreateWithoutSourceInput[] | IndexJobUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: IndexJobCreateOrConnectWithoutSourceInput | IndexJobCreateOrConnectWithoutSourceInput[]
    upsert?: IndexJobUpsertWithWhereUniqueWithoutSourceInput | IndexJobUpsertWithWhereUniqueWithoutSourceInput[]
    createMany?: IndexJobCreateManySourceInputEnvelope
    set?: IndexJobWhereUniqueInput | IndexJobWhereUniqueInput[]
    disconnect?: IndexJobWhereUniqueInput | IndexJobWhereUniqueInput[]
    delete?: IndexJobWhereUniqueInput | IndexJobWhereUniqueInput[]
    connect?: IndexJobWhereUniqueInput | IndexJobWhereUniqueInput[]
    update?: IndexJobUpdateWithWhereUniqueWithoutSourceInput | IndexJobUpdateWithWhereUniqueWithoutSourceInput[]
    updateMany?: IndexJobUpdateManyWithWhereWithoutSourceInput | IndexJobUpdateManyWithWhereWithoutSourceInput[]
    deleteMany?: IndexJobScalarWhereInput | IndexJobScalarWhereInput[]
  }

  export type LibraryItemUncheckedUpdateManyWithoutSourceNestedInput = {
    create?: XOR<LibraryItemCreateWithoutSourceInput, LibraryItemUncheckedCreateWithoutSourceInput> | LibraryItemCreateWithoutSourceInput[] | LibraryItemUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: LibraryItemCreateOrConnectWithoutSourceInput | LibraryItemCreateOrConnectWithoutSourceInput[]
    upsert?: LibraryItemUpsertWithWhereUniqueWithoutSourceInput | LibraryItemUpsertWithWhereUniqueWithoutSourceInput[]
    createMany?: LibraryItemCreateManySourceInputEnvelope
    set?: LibraryItemWhereUniqueInput | LibraryItemWhereUniqueInput[]
    disconnect?: LibraryItemWhereUniqueInput | LibraryItemWhereUniqueInput[]
    delete?: LibraryItemWhereUniqueInput | LibraryItemWhereUniqueInput[]
    connect?: LibraryItemWhereUniqueInput | LibraryItemWhereUniqueInput[]
    update?: LibraryItemUpdateWithWhereUniqueWithoutSourceInput | LibraryItemUpdateWithWhereUniqueWithoutSourceInput[]
    updateMany?: LibraryItemUpdateManyWithWhereWithoutSourceInput | LibraryItemUpdateManyWithWhereWithoutSourceInput[]
    deleteMany?: LibraryItemScalarWhereInput | LibraryItemScalarWhereInput[]
  }

  export type IndexSourceCreateNestedOneWithoutTermsInput = {
    create?: XOR<IndexSourceCreateWithoutTermsInput, IndexSourceUncheckedCreateWithoutTermsInput>
    connectOrCreate?: IndexSourceCreateOrConnectWithoutTermsInput
    connect?: IndexSourceWhereUniqueInput
  }

  export type IndexJobCreateNestedManyWithoutTermRelationInput = {
    create?: XOR<IndexJobCreateWithoutTermRelationInput, IndexJobUncheckedCreateWithoutTermRelationInput> | IndexJobCreateWithoutTermRelationInput[] | IndexJobUncheckedCreateWithoutTermRelationInput[]
    connectOrCreate?: IndexJobCreateOrConnectWithoutTermRelationInput | IndexJobCreateOrConnectWithoutTermRelationInput[]
    createMany?: IndexJobCreateManyTermRelationInputEnvelope
    connect?: IndexJobWhereUniqueInput | IndexJobWhereUniqueInput[]
  }

  export type IndexJobUncheckedCreateNestedManyWithoutTermRelationInput = {
    create?: XOR<IndexJobCreateWithoutTermRelationInput, IndexJobUncheckedCreateWithoutTermRelationInput> | IndexJobCreateWithoutTermRelationInput[] | IndexJobUncheckedCreateWithoutTermRelationInput[]
    connectOrCreate?: IndexJobCreateOrConnectWithoutTermRelationInput | IndexJobCreateOrConnectWithoutTermRelationInput[]
    createMany?: IndexJobCreateManyTermRelationInputEnvelope
    connect?: IndexJobWhereUniqueInput | IndexJobWhereUniqueInput[]
  }

  export type IndexSourceUpdateOneWithoutTermsNestedInput = {
    create?: XOR<IndexSourceCreateWithoutTermsInput, IndexSourceUncheckedCreateWithoutTermsInput>
    connectOrCreate?: IndexSourceCreateOrConnectWithoutTermsInput
    upsert?: IndexSourceUpsertWithoutTermsInput
    disconnect?: IndexSourceWhereInput | boolean
    delete?: IndexSourceWhereInput | boolean
    connect?: IndexSourceWhereUniqueInput
    update?: XOR<XOR<IndexSourceUpdateToOneWithWhereWithoutTermsInput, IndexSourceUpdateWithoutTermsInput>, IndexSourceUncheckedUpdateWithoutTermsInput>
  }

  export type IndexJobUpdateManyWithoutTermRelationNestedInput = {
    create?: XOR<IndexJobCreateWithoutTermRelationInput, IndexJobUncheckedCreateWithoutTermRelationInput> | IndexJobCreateWithoutTermRelationInput[] | IndexJobUncheckedCreateWithoutTermRelationInput[]
    connectOrCreate?: IndexJobCreateOrConnectWithoutTermRelationInput | IndexJobCreateOrConnectWithoutTermRelationInput[]
    upsert?: IndexJobUpsertWithWhereUniqueWithoutTermRelationInput | IndexJobUpsertWithWhereUniqueWithoutTermRelationInput[]
    createMany?: IndexJobCreateManyTermRelationInputEnvelope
    set?: IndexJobWhereUniqueInput | IndexJobWhereUniqueInput[]
    disconnect?: IndexJobWhereUniqueInput | IndexJobWhereUniqueInput[]
    delete?: IndexJobWhereUniqueInput | IndexJobWhereUniqueInput[]
    connect?: IndexJobWhereUniqueInput | IndexJobWhereUniqueInput[]
    update?: IndexJobUpdateWithWhereUniqueWithoutTermRelationInput | IndexJobUpdateWithWhereUniqueWithoutTermRelationInput[]
    updateMany?: IndexJobUpdateManyWithWhereWithoutTermRelationInput | IndexJobUpdateManyWithWhereWithoutTermRelationInput[]
    deleteMany?: IndexJobScalarWhereInput | IndexJobScalarWhereInput[]
  }

  export type IndexJobUncheckedUpdateManyWithoutTermRelationNestedInput = {
    create?: XOR<IndexJobCreateWithoutTermRelationInput, IndexJobUncheckedCreateWithoutTermRelationInput> | IndexJobCreateWithoutTermRelationInput[] | IndexJobUncheckedCreateWithoutTermRelationInput[]
    connectOrCreate?: IndexJobCreateOrConnectWithoutTermRelationInput | IndexJobCreateOrConnectWithoutTermRelationInput[]
    upsert?: IndexJobUpsertWithWhereUniqueWithoutTermRelationInput | IndexJobUpsertWithWhereUniqueWithoutTermRelationInput[]
    createMany?: IndexJobCreateManyTermRelationInputEnvelope
    set?: IndexJobWhereUniqueInput | IndexJobWhereUniqueInput[]
    disconnect?: IndexJobWhereUniqueInput | IndexJobWhereUniqueInput[]
    delete?: IndexJobWhereUniqueInput | IndexJobWhereUniqueInput[]
    connect?: IndexJobWhereUniqueInput | IndexJobWhereUniqueInput[]
    update?: IndexJobUpdateWithWhereUniqueWithoutTermRelationInput | IndexJobUpdateWithWhereUniqueWithoutTermRelationInput[]
    updateMany?: IndexJobUpdateManyWithWhereWithoutTermRelationInput | IndexJobUpdateManyWithWhereWithoutTermRelationInput[]
    deleteMany?: IndexJobScalarWhereInput | IndexJobScalarWhereInput[]
  }

  export type IndexTermCreateNestedOneWithoutJobsInput = {
    create?: XOR<IndexTermCreateWithoutJobsInput, IndexTermUncheckedCreateWithoutJobsInput>
    connectOrCreate?: IndexTermCreateOrConnectWithoutJobsInput
    connect?: IndexTermWhereUniqueInput
  }

  export type IndexSourceCreateNestedOneWithoutJobsInput = {
    create?: XOR<IndexSourceCreateWithoutJobsInput, IndexSourceUncheckedCreateWithoutJobsInput>
    connectOrCreate?: IndexSourceCreateOrConnectWithoutJobsInput
    connect?: IndexSourceWhereUniqueInput
  }

  export type EnumIndexJobStatusFieldUpdateOperationsInput = {
    set?: $Enums.IndexJobStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IndexTermUpdateOneWithoutJobsNestedInput = {
    create?: XOR<IndexTermCreateWithoutJobsInput, IndexTermUncheckedCreateWithoutJobsInput>
    connectOrCreate?: IndexTermCreateOrConnectWithoutJobsInput
    upsert?: IndexTermUpsertWithoutJobsInput
    disconnect?: IndexTermWhereInput | boolean
    delete?: IndexTermWhereInput | boolean
    connect?: IndexTermWhereUniqueInput
    update?: XOR<XOR<IndexTermUpdateToOneWithWhereWithoutJobsInput, IndexTermUpdateWithoutJobsInput>, IndexTermUncheckedUpdateWithoutJobsInput>
  }

  export type IndexSourceUpdateOneWithoutJobsNestedInput = {
    create?: XOR<IndexSourceCreateWithoutJobsInput, IndexSourceUncheckedCreateWithoutJobsInput>
    connectOrCreate?: IndexSourceCreateOrConnectWithoutJobsInput
    upsert?: IndexSourceUpsertWithoutJobsInput
    disconnect?: IndexSourceWhereInput | boolean
    delete?: IndexSourceWhereInput | boolean
    connect?: IndexSourceWhereUniqueInput
    update?: XOR<XOR<IndexSourceUpdateToOneWithWhereWithoutJobsInput, IndexSourceUpdateWithoutJobsInput>, IndexSourceUncheckedUpdateWithoutJobsInput>
  }

  export type IndexSourceCreateNestedOneWithoutItemsInput = {
    create?: XOR<IndexSourceCreateWithoutItemsInput, IndexSourceUncheckedCreateWithoutItemsInput>
    connectOrCreate?: IndexSourceCreateOrConnectWithoutItemsInput
    connect?: IndexSourceWhereUniqueInput
  }

  export type EnumLibraryItemTypeFieldUpdateOperationsInput = {
    set?: $Enums.LibraryItemType
  }

  export type EnumLibraryItemStatusFieldUpdateOperationsInput = {
    set?: $Enums.LibraryItemStatus
  }

  export type IndexSourceUpdateOneWithoutItemsNestedInput = {
    create?: XOR<IndexSourceCreateWithoutItemsInput, IndexSourceUncheckedCreateWithoutItemsInput>
    connectOrCreate?: IndexSourceCreateOrConnectWithoutItemsInput
    upsert?: IndexSourceUpsertWithoutItemsInput
    disconnect?: IndexSourceWhereInput | boolean
    delete?: IndexSourceWhereInput | boolean
    connect?: IndexSourceWhereUniqueInput
    update?: XOR<XOR<IndexSourceUpdateToOneWithWhereWithoutItemsInput, IndexSourceUpdateWithoutItemsInput>, IndexSourceUncheckedUpdateWithoutItemsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumIndexSourceKindFilter<$PrismaModel = never> = {
    equals?: $Enums.IndexSourceKind | EnumIndexSourceKindFieldRefInput<$PrismaModel>
    in?: $Enums.IndexSourceKind[]
    notIn?: $Enums.IndexSourceKind[]
    not?: NestedEnumIndexSourceKindFilter<$PrismaModel> | $Enums.IndexSourceKind
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumIndexSourceKindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IndexSourceKind | EnumIndexSourceKindFieldRefInput<$PrismaModel>
    in?: $Enums.IndexSourceKind[]
    notIn?: $Enums.IndexSourceKind[]
    not?: NestedEnumIndexSourceKindWithAggregatesFilter<$PrismaModel> | $Enums.IndexSourceKind
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIndexSourceKindFilter<$PrismaModel>
    _max?: NestedEnumIndexSourceKindFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumIndexJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.IndexJobStatus | EnumIndexJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IndexJobStatus[]
    notIn?: $Enums.IndexJobStatus[]
    not?: NestedEnumIndexJobStatusFilter<$PrismaModel> | $Enums.IndexJobStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumIndexJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IndexJobStatus | EnumIndexJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IndexJobStatus[]
    notIn?: $Enums.IndexJobStatus[]
    not?: NestedEnumIndexJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.IndexJobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIndexJobStatusFilter<$PrismaModel>
    _max?: NestedEnumIndexJobStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumLibraryItemTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LibraryItemType | EnumLibraryItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LibraryItemType[]
    notIn?: $Enums.LibraryItemType[]
    not?: NestedEnumLibraryItemTypeFilter<$PrismaModel> | $Enums.LibraryItemType
  }

  export type NestedEnumLibraryItemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LibraryItemStatus | EnumLibraryItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LibraryItemStatus[]
    notIn?: $Enums.LibraryItemStatus[]
    not?: NestedEnumLibraryItemStatusFilter<$PrismaModel> | $Enums.LibraryItemStatus
  }

  export type NestedEnumLibraryItemTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LibraryItemType | EnumLibraryItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LibraryItemType[]
    notIn?: $Enums.LibraryItemType[]
    not?: NestedEnumLibraryItemTypeWithAggregatesFilter<$PrismaModel> | $Enums.LibraryItemType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLibraryItemTypeFilter<$PrismaModel>
    _max?: NestedEnumLibraryItemTypeFilter<$PrismaModel>
  }

  export type NestedEnumLibraryItemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LibraryItemStatus | EnumLibraryItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LibraryItemStatus[]
    notIn?: $Enums.LibraryItemStatus[]
    not?: NestedEnumLibraryItemStatusWithAggregatesFilter<$PrismaModel> | $Enums.LibraryItemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLibraryItemStatusFilter<$PrismaModel>
    _max?: NestedEnumLibraryItemStatusFilter<$PrismaModel>
  }

  export type IndexTermCreateWithoutSourceInput = {
    id?: string
    term: string
    enabled?: boolean
    sourceHint?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobs?: IndexJobCreateNestedManyWithoutTermRelationInput
  }

  export type IndexTermUncheckedCreateWithoutSourceInput = {
    id?: string
    term: string
    enabled?: boolean
    sourceHint?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobs?: IndexJobUncheckedCreateNestedManyWithoutTermRelationInput
  }

  export type IndexTermCreateOrConnectWithoutSourceInput = {
    where: IndexTermWhereUniqueInput
    create: XOR<IndexTermCreateWithoutSourceInput, IndexTermUncheckedCreateWithoutSourceInput>
  }

  export type IndexTermCreateManySourceInputEnvelope = {
    data: IndexTermCreateManySourceInput | IndexTermCreateManySourceInput[]
  }

  export type IndexJobCreateWithoutSourceInput = {
    id?: string
    term: string
    query: string
    status?: $Enums.IndexJobStatus
    resultCount?: number
    errorMessage?: string | null
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    termRelation?: IndexTermCreateNestedOneWithoutJobsInput
  }

  export type IndexJobUncheckedCreateWithoutSourceInput = {
    id?: string
    term: string
    query: string
    status?: $Enums.IndexJobStatus
    resultCount?: number
    errorMessage?: string | null
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    termId?: string | null
  }

  export type IndexJobCreateOrConnectWithoutSourceInput = {
    where: IndexJobWhereUniqueInput
    create: XOR<IndexJobCreateWithoutSourceInput, IndexJobUncheckedCreateWithoutSourceInput>
  }

  export type IndexJobCreateManySourceInputEnvelope = {
    data: IndexJobCreateManySourceInput | IndexJobCreateManySourceInput[]
  }

  export type LibraryItemCreateWithoutSourceInput = {
    id?: string
    title: string
    originalUrl: string
    normalizedUrl: string
    fileId?: string | null
    estimatedType?: $Enums.LibraryItemType
    origin: string
    status?: $Enums.LibraryItemStatus
    extension?: string | null
    downloadUrl?: string | null
    previewPolicy?: string
    summary?: string | null
    discoveredAt?: Date | string
    indexedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LibraryItemUncheckedCreateWithoutSourceInput = {
    id?: string
    title: string
    originalUrl: string
    normalizedUrl: string
    fileId?: string | null
    estimatedType?: $Enums.LibraryItemType
    origin: string
    status?: $Enums.LibraryItemStatus
    extension?: string | null
    downloadUrl?: string | null
    previewPolicy?: string
    summary?: string | null
    discoveredAt?: Date | string
    indexedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LibraryItemCreateOrConnectWithoutSourceInput = {
    where: LibraryItemWhereUniqueInput
    create: XOR<LibraryItemCreateWithoutSourceInput, LibraryItemUncheckedCreateWithoutSourceInput>
  }

  export type LibraryItemCreateManySourceInputEnvelope = {
    data: LibraryItemCreateManySourceInput | LibraryItemCreateManySourceInput[]
  }

  export type IndexTermUpsertWithWhereUniqueWithoutSourceInput = {
    where: IndexTermWhereUniqueInput
    update: XOR<IndexTermUpdateWithoutSourceInput, IndexTermUncheckedUpdateWithoutSourceInput>
    create: XOR<IndexTermCreateWithoutSourceInput, IndexTermUncheckedCreateWithoutSourceInput>
  }

  export type IndexTermUpdateWithWhereUniqueWithoutSourceInput = {
    where: IndexTermWhereUniqueInput
    data: XOR<IndexTermUpdateWithoutSourceInput, IndexTermUncheckedUpdateWithoutSourceInput>
  }

  export type IndexTermUpdateManyWithWhereWithoutSourceInput = {
    where: IndexTermScalarWhereInput
    data: XOR<IndexTermUpdateManyMutationInput, IndexTermUncheckedUpdateManyWithoutSourceInput>
  }

  export type IndexTermScalarWhereInput = {
    AND?: IndexTermScalarWhereInput | IndexTermScalarWhereInput[]
    OR?: IndexTermScalarWhereInput[]
    NOT?: IndexTermScalarWhereInput | IndexTermScalarWhereInput[]
    id?: StringFilter<"IndexTerm"> | string
    term?: StringFilter<"IndexTerm"> | string
    enabled?: BoolFilter<"IndexTerm"> | boolean
    sourceHint?: StringNullableFilter<"IndexTerm"> | string | null
    createdAt?: DateTimeFilter<"IndexTerm"> | Date | string
    updatedAt?: DateTimeFilter<"IndexTerm"> | Date | string
    sourceId?: StringNullableFilter<"IndexTerm"> | string | null
  }

  export type IndexJobUpsertWithWhereUniqueWithoutSourceInput = {
    where: IndexJobWhereUniqueInput
    update: XOR<IndexJobUpdateWithoutSourceInput, IndexJobUncheckedUpdateWithoutSourceInput>
    create: XOR<IndexJobCreateWithoutSourceInput, IndexJobUncheckedCreateWithoutSourceInput>
  }

  export type IndexJobUpdateWithWhereUniqueWithoutSourceInput = {
    where: IndexJobWhereUniqueInput
    data: XOR<IndexJobUpdateWithoutSourceInput, IndexJobUncheckedUpdateWithoutSourceInput>
  }

  export type IndexJobUpdateManyWithWhereWithoutSourceInput = {
    where: IndexJobScalarWhereInput
    data: XOR<IndexJobUpdateManyMutationInput, IndexJobUncheckedUpdateManyWithoutSourceInput>
  }

  export type IndexJobScalarWhereInput = {
    AND?: IndexJobScalarWhereInput | IndexJobScalarWhereInput[]
    OR?: IndexJobScalarWhereInput[]
    NOT?: IndexJobScalarWhereInput | IndexJobScalarWhereInput[]
    id?: StringFilter<"IndexJob"> | string
    term?: StringFilter<"IndexJob"> | string
    query?: StringFilter<"IndexJob"> | string
    status?: EnumIndexJobStatusFilter<"IndexJob"> | $Enums.IndexJobStatus
    resultCount?: IntFilter<"IndexJob"> | number
    errorMessage?: StringNullableFilter<"IndexJob"> | string | null
    startedAt?: DateTimeNullableFilter<"IndexJob"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"IndexJob"> | Date | string | null
    createdAt?: DateTimeFilter<"IndexJob"> | Date | string
    updatedAt?: DateTimeFilter<"IndexJob"> | Date | string
    termId?: StringNullableFilter<"IndexJob"> | string | null
    sourceId?: StringNullableFilter<"IndexJob"> | string | null
  }

  export type LibraryItemUpsertWithWhereUniqueWithoutSourceInput = {
    where: LibraryItemWhereUniqueInput
    update: XOR<LibraryItemUpdateWithoutSourceInput, LibraryItemUncheckedUpdateWithoutSourceInput>
    create: XOR<LibraryItemCreateWithoutSourceInput, LibraryItemUncheckedCreateWithoutSourceInput>
  }

  export type LibraryItemUpdateWithWhereUniqueWithoutSourceInput = {
    where: LibraryItemWhereUniqueInput
    data: XOR<LibraryItemUpdateWithoutSourceInput, LibraryItemUncheckedUpdateWithoutSourceInput>
  }

  export type LibraryItemUpdateManyWithWhereWithoutSourceInput = {
    where: LibraryItemScalarWhereInput
    data: XOR<LibraryItemUpdateManyMutationInput, LibraryItemUncheckedUpdateManyWithoutSourceInput>
  }

  export type LibraryItemScalarWhereInput = {
    AND?: LibraryItemScalarWhereInput | LibraryItemScalarWhereInput[]
    OR?: LibraryItemScalarWhereInput[]
    NOT?: LibraryItemScalarWhereInput | LibraryItemScalarWhereInput[]
    id?: StringFilter<"LibraryItem"> | string
    title?: StringFilter<"LibraryItem"> | string
    originalUrl?: StringFilter<"LibraryItem"> | string
    normalizedUrl?: StringFilter<"LibraryItem"> | string
    fileId?: StringNullableFilter<"LibraryItem"> | string | null
    estimatedType?: EnumLibraryItemTypeFilter<"LibraryItem"> | $Enums.LibraryItemType
    origin?: StringFilter<"LibraryItem"> | string
    status?: EnumLibraryItemStatusFilter<"LibraryItem"> | $Enums.LibraryItemStatus
    extension?: StringNullableFilter<"LibraryItem"> | string | null
    downloadUrl?: StringNullableFilter<"LibraryItem"> | string | null
    previewPolicy?: StringFilter<"LibraryItem"> | string
    summary?: StringNullableFilter<"LibraryItem"> | string | null
    discoveredAt?: DateTimeFilter<"LibraryItem"> | Date | string
    indexedAt?: DateTimeFilter<"LibraryItem"> | Date | string
    createdAt?: DateTimeFilter<"LibraryItem"> | Date | string
    updatedAt?: DateTimeFilter<"LibraryItem"> | Date | string
    sourceId?: StringNullableFilter<"LibraryItem"> | string | null
  }

  export type IndexSourceCreateWithoutTermsInput = {
    id?: string
    name: string
    query: string
    kind?: $Enums.IndexSourceKind
    enabled?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobs?: IndexJobCreateNestedManyWithoutSourceInput
    items?: LibraryItemCreateNestedManyWithoutSourceInput
  }

  export type IndexSourceUncheckedCreateWithoutTermsInput = {
    id?: string
    name: string
    query: string
    kind?: $Enums.IndexSourceKind
    enabled?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobs?: IndexJobUncheckedCreateNestedManyWithoutSourceInput
    items?: LibraryItemUncheckedCreateNestedManyWithoutSourceInput
  }

  export type IndexSourceCreateOrConnectWithoutTermsInput = {
    where: IndexSourceWhereUniqueInput
    create: XOR<IndexSourceCreateWithoutTermsInput, IndexSourceUncheckedCreateWithoutTermsInput>
  }

  export type IndexJobCreateWithoutTermRelationInput = {
    id?: string
    term: string
    query: string
    status?: $Enums.IndexJobStatus
    resultCount?: number
    errorMessage?: string | null
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    source?: IndexSourceCreateNestedOneWithoutJobsInput
  }

  export type IndexJobUncheckedCreateWithoutTermRelationInput = {
    id?: string
    term: string
    query: string
    status?: $Enums.IndexJobStatus
    resultCount?: number
    errorMessage?: string | null
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sourceId?: string | null
  }

  export type IndexJobCreateOrConnectWithoutTermRelationInput = {
    where: IndexJobWhereUniqueInput
    create: XOR<IndexJobCreateWithoutTermRelationInput, IndexJobUncheckedCreateWithoutTermRelationInput>
  }

  export type IndexJobCreateManyTermRelationInputEnvelope = {
    data: IndexJobCreateManyTermRelationInput | IndexJobCreateManyTermRelationInput[]
  }

  export type IndexSourceUpsertWithoutTermsInput = {
    update: XOR<IndexSourceUpdateWithoutTermsInput, IndexSourceUncheckedUpdateWithoutTermsInput>
    create: XOR<IndexSourceCreateWithoutTermsInput, IndexSourceUncheckedCreateWithoutTermsInput>
    where?: IndexSourceWhereInput
  }

  export type IndexSourceUpdateToOneWithWhereWithoutTermsInput = {
    where?: IndexSourceWhereInput
    data: XOR<IndexSourceUpdateWithoutTermsInput, IndexSourceUncheckedUpdateWithoutTermsInput>
  }

  export type IndexSourceUpdateWithoutTermsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    kind?: EnumIndexSourceKindFieldUpdateOperationsInput | $Enums.IndexSourceKind
    enabled?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: IndexJobUpdateManyWithoutSourceNestedInput
    items?: LibraryItemUpdateManyWithoutSourceNestedInput
  }

  export type IndexSourceUncheckedUpdateWithoutTermsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    kind?: EnumIndexSourceKindFieldUpdateOperationsInput | $Enums.IndexSourceKind
    enabled?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: IndexJobUncheckedUpdateManyWithoutSourceNestedInput
    items?: LibraryItemUncheckedUpdateManyWithoutSourceNestedInput
  }

  export type IndexJobUpsertWithWhereUniqueWithoutTermRelationInput = {
    where: IndexJobWhereUniqueInput
    update: XOR<IndexJobUpdateWithoutTermRelationInput, IndexJobUncheckedUpdateWithoutTermRelationInput>
    create: XOR<IndexJobCreateWithoutTermRelationInput, IndexJobUncheckedCreateWithoutTermRelationInput>
  }

  export type IndexJobUpdateWithWhereUniqueWithoutTermRelationInput = {
    where: IndexJobWhereUniqueInput
    data: XOR<IndexJobUpdateWithoutTermRelationInput, IndexJobUncheckedUpdateWithoutTermRelationInput>
  }

  export type IndexJobUpdateManyWithWhereWithoutTermRelationInput = {
    where: IndexJobScalarWhereInput
    data: XOR<IndexJobUpdateManyMutationInput, IndexJobUncheckedUpdateManyWithoutTermRelationInput>
  }

  export type IndexTermCreateWithoutJobsInput = {
    id?: string
    term: string
    enabled?: boolean
    sourceHint?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    source?: IndexSourceCreateNestedOneWithoutTermsInput
  }

  export type IndexTermUncheckedCreateWithoutJobsInput = {
    id?: string
    term: string
    enabled?: boolean
    sourceHint?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sourceId?: string | null
  }

  export type IndexTermCreateOrConnectWithoutJobsInput = {
    where: IndexTermWhereUniqueInput
    create: XOR<IndexTermCreateWithoutJobsInput, IndexTermUncheckedCreateWithoutJobsInput>
  }

  export type IndexSourceCreateWithoutJobsInput = {
    id?: string
    name: string
    query: string
    kind?: $Enums.IndexSourceKind
    enabled?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    terms?: IndexTermCreateNestedManyWithoutSourceInput
    items?: LibraryItemCreateNestedManyWithoutSourceInput
  }

  export type IndexSourceUncheckedCreateWithoutJobsInput = {
    id?: string
    name: string
    query: string
    kind?: $Enums.IndexSourceKind
    enabled?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    terms?: IndexTermUncheckedCreateNestedManyWithoutSourceInput
    items?: LibraryItemUncheckedCreateNestedManyWithoutSourceInput
  }

  export type IndexSourceCreateOrConnectWithoutJobsInput = {
    where: IndexSourceWhereUniqueInput
    create: XOR<IndexSourceCreateWithoutJobsInput, IndexSourceUncheckedCreateWithoutJobsInput>
  }

  export type IndexTermUpsertWithoutJobsInput = {
    update: XOR<IndexTermUpdateWithoutJobsInput, IndexTermUncheckedUpdateWithoutJobsInput>
    create: XOR<IndexTermCreateWithoutJobsInput, IndexTermUncheckedCreateWithoutJobsInput>
    where?: IndexTermWhereInput
  }

  export type IndexTermUpdateToOneWithWhereWithoutJobsInput = {
    where?: IndexTermWhereInput
    data: XOR<IndexTermUpdateWithoutJobsInput, IndexTermUncheckedUpdateWithoutJobsInput>
  }

  export type IndexTermUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    sourceHint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: IndexSourceUpdateOneWithoutTermsNestedInput
  }

  export type IndexTermUncheckedUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    sourceHint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IndexSourceUpsertWithoutJobsInput = {
    update: XOR<IndexSourceUpdateWithoutJobsInput, IndexSourceUncheckedUpdateWithoutJobsInput>
    create: XOR<IndexSourceCreateWithoutJobsInput, IndexSourceUncheckedCreateWithoutJobsInput>
    where?: IndexSourceWhereInput
  }

  export type IndexSourceUpdateToOneWithWhereWithoutJobsInput = {
    where?: IndexSourceWhereInput
    data: XOR<IndexSourceUpdateWithoutJobsInput, IndexSourceUncheckedUpdateWithoutJobsInput>
  }

  export type IndexSourceUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    kind?: EnumIndexSourceKindFieldUpdateOperationsInput | $Enums.IndexSourceKind
    enabled?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    terms?: IndexTermUpdateManyWithoutSourceNestedInput
    items?: LibraryItemUpdateManyWithoutSourceNestedInput
  }

  export type IndexSourceUncheckedUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    kind?: EnumIndexSourceKindFieldUpdateOperationsInput | $Enums.IndexSourceKind
    enabled?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    terms?: IndexTermUncheckedUpdateManyWithoutSourceNestedInput
    items?: LibraryItemUncheckedUpdateManyWithoutSourceNestedInput
  }

  export type IndexSourceCreateWithoutItemsInput = {
    id?: string
    name: string
    query: string
    kind?: $Enums.IndexSourceKind
    enabled?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    terms?: IndexTermCreateNestedManyWithoutSourceInput
    jobs?: IndexJobCreateNestedManyWithoutSourceInput
  }

  export type IndexSourceUncheckedCreateWithoutItemsInput = {
    id?: string
    name: string
    query: string
    kind?: $Enums.IndexSourceKind
    enabled?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    terms?: IndexTermUncheckedCreateNestedManyWithoutSourceInput
    jobs?: IndexJobUncheckedCreateNestedManyWithoutSourceInput
  }

  export type IndexSourceCreateOrConnectWithoutItemsInput = {
    where: IndexSourceWhereUniqueInput
    create: XOR<IndexSourceCreateWithoutItemsInput, IndexSourceUncheckedCreateWithoutItemsInput>
  }

  export type IndexSourceUpsertWithoutItemsInput = {
    update: XOR<IndexSourceUpdateWithoutItemsInput, IndexSourceUncheckedUpdateWithoutItemsInput>
    create: XOR<IndexSourceCreateWithoutItemsInput, IndexSourceUncheckedCreateWithoutItemsInput>
    where?: IndexSourceWhereInput
  }

  export type IndexSourceUpdateToOneWithWhereWithoutItemsInput = {
    where?: IndexSourceWhereInput
    data: XOR<IndexSourceUpdateWithoutItemsInput, IndexSourceUncheckedUpdateWithoutItemsInput>
  }

  export type IndexSourceUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    kind?: EnumIndexSourceKindFieldUpdateOperationsInput | $Enums.IndexSourceKind
    enabled?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    terms?: IndexTermUpdateManyWithoutSourceNestedInput
    jobs?: IndexJobUpdateManyWithoutSourceNestedInput
  }

  export type IndexSourceUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    kind?: EnumIndexSourceKindFieldUpdateOperationsInput | $Enums.IndexSourceKind
    enabled?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    terms?: IndexTermUncheckedUpdateManyWithoutSourceNestedInput
    jobs?: IndexJobUncheckedUpdateManyWithoutSourceNestedInput
  }

  export type IndexTermCreateManySourceInput = {
    id?: string
    term: string
    enabled?: boolean
    sourceHint?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IndexJobCreateManySourceInput = {
    id?: string
    term: string
    query: string
    status?: $Enums.IndexJobStatus
    resultCount?: number
    errorMessage?: string | null
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    termId?: string | null
  }

  export type LibraryItemCreateManySourceInput = {
    id?: string
    title: string
    originalUrl: string
    normalizedUrl: string
    fileId?: string | null
    estimatedType?: $Enums.LibraryItemType
    origin: string
    status?: $Enums.LibraryItemStatus
    extension?: string | null
    downloadUrl?: string | null
    previewPolicy?: string
    summary?: string | null
    discoveredAt?: Date | string
    indexedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IndexTermUpdateWithoutSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    sourceHint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: IndexJobUpdateManyWithoutTermRelationNestedInput
  }

  export type IndexTermUncheckedUpdateWithoutSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    sourceHint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: IndexJobUncheckedUpdateManyWithoutTermRelationNestedInput
  }

  export type IndexTermUncheckedUpdateManyWithoutSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    sourceHint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndexJobUpdateWithoutSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    status?: EnumIndexJobStatusFieldUpdateOperationsInput | $Enums.IndexJobStatus
    resultCount?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    termRelation?: IndexTermUpdateOneWithoutJobsNestedInput
  }

  export type IndexJobUncheckedUpdateWithoutSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    status?: EnumIndexJobStatusFieldUpdateOperationsInput | $Enums.IndexJobStatus
    resultCount?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    termId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IndexJobUncheckedUpdateManyWithoutSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    status?: EnumIndexJobStatusFieldUpdateOperationsInput | $Enums.IndexJobStatus
    resultCount?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    termId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LibraryItemUpdateWithoutSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    normalizedUrl?: StringFieldUpdateOperationsInput | string
    fileId?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedType?: EnumLibraryItemTypeFieldUpdateOperationsInput | $Enums.LibraryItemType
    origin?: StringFieldUpdateOperationsInput | string
    status?: EnumLibraryItemStatusFieldUpdateOperationsInput | $Enums.LibraryItemStatus
    extension?: NullableStringFieldUpdateOperationsInput | string | null
    downloadUrl?: NullableStringFieldUpdateOperationsInput | string | null
    previewPolicy?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    discoveredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    indexedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LibraryItemUncheckedUpdateWithoutSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    normalizedUrl?: StringFieldUpdateOperationsInput | string
    fileId?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedType?: EnumLibraryItemTypeFieldUpdateOperationsInput | $Enums.LibraryItemType
    origin?: StringFieldUpdateOperationsInput | string
    status?: EnumLibraryItemStatusFieldUpdateOperationsInput | $Enums.LibraryItemStatus
    extension?: NullableStringFieldUpdateOperationsInput | string | null
    downloadUrl?: NullableStringFieldUpdateOperationsInput | string | null
    previewPolicy?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    discoveredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    indexedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LibraryItemUncheckedUpdateManyWithoutSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    normalizedUrl?: StringFieldUpdateOperationsInput | string
    fileId?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedType?: EnumLibraryItemTypeFieldUpdateOperationsInput | $Enums.LibraryItemType
    origin?: StringFieldUpdateOperationsInput | string
    status?: EnumLibraryItemStatusFieldUpdateOperationsInput | $Enums.LibraryItemStatus
    extension?: NullableStringFieldUpdateOperationsInput | string | null
    downloadUrl?: NullableStringFieldUpdateOperationsInput | string | null
    previewPolicy?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    discoveredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    indexedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndexJobCreateManyTermRelationInput = {
    id?: string
    term: string
    query: string
    status?: $Enums.IndexJobStatus
    resultCount?: number
    errorMessage?: string | null
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sourceId?: string | null
  }

  export type IndexJobUpdateWithoutTermRelationInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    status?: EnumIndexJobStatusFieldUpdateOperationsInput | $Enums.IndexJobStatus
    resultCount?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: IndexSourceUpdateOneWithoutJobsNestedInput
  }

  export type IndexJobUncheckedUpdateWithoutTermRelationInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    status?: EnumIndexJobStatusFieldUpdateOperationsInput | $Enums.IndexJobStatus
    resultCount?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IndexJobUncheckedUpdateManyWithoutTermRelationInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    status?: EnumIndexJobStatusFieldUpdateOperationsInput | $Enums.IndexJobStatus
    resultCount?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
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