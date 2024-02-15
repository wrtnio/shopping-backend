/**
 * @packageDocumentation
 * @module api.functional.shoppings.admins.systematic.channels
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import type { Format } from "typia/lib/tags/Format";

import type { IPage } from "../../../../../structures/common/IPage";
import type { IRecordMerge } from "../../../../../structures/common/IRecordMerge";
import type { IShoppingChannel } from "../../../../../structures/shoppings/systematic/IShoppingChannel";

export * as categories from "./categories";

/**
 * Create a new channel.
 *
 * Create a new {@link IShoppingChannel channel} with given code and name.
 *
 * As channel means an individual market,
 * {@link IShoppingAdministrator administrator} should perform this action
 * only when a new application being registered.
 *
 * @param input Creation info of the channel
 * @returns Newly created channel
 * @tag Systematic
 * @author Samchon
 *
 * @controller ShoppingAdminSystematicChannelController.create
 * @path POST /shoppings/admins/systematic/channels
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function create(
  connection: IConnection,
  input: IShoppingChannel.ICreate,
): Promise<create.Output> {
  return !!connection.simulate
    ? create.simulate(connection, input)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...create.METADATA,
          path: create.path(),
        },
        input,
      );
}
export namespace create {
  export type Input = IShoppingChannel.ICreate;
  export type Output = IShoppingChannel;

  export const METADATA = {
    method: "POST",
    path: "/shoppings/admins/systematic/channels",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = () => "/shoppings/admins/systematic/channels";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IShoppingChannel => typia.random<IShoppingChannel>(g);
  export const simulate = (
    connection: IConnection,
    input: IShoppingChannel.ICreate,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(),
      contentType: "application/json",
    });
    assert.body(() => typia.assert(input));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * Update a channel.
 *
 * Update a {@link IShoppingChannel channel}'s name.
 *
 * Note that, it is not possible to change the channel's code. If you want to
 * to do it forcibly, then {@link create } new one and {@link merge } with it.
 *
 * @param id Target channel's {@link IShoppingChannel.code}
 * @param input Update info of the channel
 * @tag Systematic
 * @author Samchon
 *
 * @controller ShoppingAdminSystematicChannelController.update
 * @path PUT /shoppings/admins/systematic/channels/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function update(
  connection: IConnection,
  id: string & Format<"uuid">,
  input: IShoppingChannel.IUpdate,
): Promise<void> {
  return !!connection.simulate
    ? update.simulate(connection, id, input)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...update.METADATA,
          path: update.path(id),
        },
        input,
      );
}
export namespace update {
  export type Input = IShoppingChannel.IUpdate;

  export const METADATA = {
    method: "PUT",
    path: "/shoppings/admins/systematic/channels/:id",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (id: string & Format<"uuid">) =>
    `/shoppings/admins/systematic/channels/${encodeURIComponent(id ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection,
    id: string & Format<"uuid">,
    input: IShoppingChannel.IUpdate,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(id),
      contentType: "application/json",
    });
    assert.param("id")(() => typia.assert(id));
    assert.body(() => typia.assert(input));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * Merge multiple channels into one.
 *
 * In this shopping mall system, it is not possible to delete a
 * {@link IShoppingChannel channel}, because it is a systematic entity
 * affecting to all other core entities like customers, members and
 * sales. Instead of deleting, you can merge multiple channels into one.
 *
 * If you specify a channel to absorb others, then all of other channels
 * will be merged into the specified one. Also, subsidiary entities of
 * channels also be merged and their references also be merged cascadingly.
 *
 * @param input Request info of the merge
 * @tag Systematic
 * @author Samchon
 *
 * @controller ShoppingAdminSystematicChannelController.merge
 * @path DELETE /shoppings/admins/systematic/channels/merge
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function merge(
  connection: IConnection,
  input: IRecordMerge,
): Promise<void> {
  return !!connection.simulate
    ? merge.simulate(connection, input)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...merge.METADATA,
          path: merge.path(),
        },
        input,
      );
}
export namespace merge {
  export type Input = IRecordMerge;

  export const METADATA = {
    method: "DELETE",
    path: "/shoppings/admins/systematic/channels/merge",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = () => "/shoppings/admins/systematic/channels/merge";
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection,
    input: IRecordMerge,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(),
      contentType: "application/json",
    });
    assert.body(() => typia.assert(input));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * List up every channels.
 *
 * List up every {@link IShoppingChannel channels} with pagination.
 *
 * If you want, you can limit the result by configuring
 * {@link IShoppingChannel.IRequest.search search condition} in the request
 * body. Also, it is possible to customize sequence order of records by
 * configuring {@link IShoppingChannel.IRequest.sort sort condition}.
 *
 * @param input Request info of pagination, searching and sorting
 * @returns Paginated channels
 * @tag Systematic
 * @author Samchon
 *
 * @controller ShoppingAdminSystematicChannelController.index
 * @path PATCH /shoppings/admins/systematic/channels
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function index(
  connection: IConnection,
  input: IShoppingChannel.IRequest,
): Promise<index.Output> {
  return !!connection.simulate
    ? index.simulate(connection, input)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...index.METADATA,
          path: index.path(),
        },
        input,
      );
}
export namespace index {
  export type Input = IShoppingChannel.IRequest;
  export type Output = IPage<IShoppingChannel>;

  export const METADATA = {
    method: "PATCH",
    path: "/shoppings/admins/systematic/channels",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = () => "/shoppings/admins/systematic/channels";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IPage<IShoppingChannel> => typia.random<IPage<IShoppingChannel>>(g);
  export const simulate = (
    connection: IConnection,
    input: IShoppingChannel.IRequest,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(),
      contentType: "application/json",
    });
    assert.body(() => typia.assert(input));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * List up every channels with nested categories.
 *
 * List up every {@link IShoppingChannel.IHierarchical channels} with
 * {@link IPage pagination}. Returned channels contain nested hierarchical
 * {@link IShoppingChannelCategory.IHierarchical categories}.
 *
 * If you want, you can limit the result by configuring
 * {@link IShoppingChannel.IRequest.search search condition} in the request
 * body. Also, it is possible to customize sequence order of records by
 * configuring {@link IShoppingChannel.IRequest.sort sort condition}.
 *
 * @param input Request info of pagination, searching and sorting
 * @returns Paginated channels with nested categories
 * @tag Systematic
 * @author Samchon
 *
 * @controller ShoppingAdminSystematicChannelController.hierarchical
 * @path PATCH /shoppings/admins/systematic/channels/hierarchical
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function hierarchical(
  connection: IConnection,
  input: IShoppingChannel.IRequest,
): Promise<hierarchical.Output> {
  return !!connection.simulate
    ? hierarchical.simulate(connection, input)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...hierarchical.METADATA,
          path: hierarchical.path(),
        },
        input,
      );
}
export namespace hierarchical {
  export type Input = IShoppingChannel.IRequest;
  export type Output = IPage<IShoppingChannel.IHierarchical>;

  export const METADATA = {
    method: "PATCH",
    path: "/shoppings/admins/systematic/channels/hierarchical",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = () =>
    "/shoppings/admins/systematic/channels/hierarchical";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IPage<IShoppingChannel.IHierarchical> =>
    typia.random<IPage<IShoppingChannel.IHierarchical>>(g);
  export const simulate = (
    connection: IConnection,
    input: IShoppingChannel.IRequest,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(),
      contentType: "application/json",
    });
    assert.body(() => typia.assert(input));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * Get a channel info.
 *
 * Get a detailed {@link IShoppingChannel.IHierarchical channel} information.
 *
 * Returned channel instance also contains the nested
 * {@link IShoppingChannelCategory.IHierarchical hierarchical category}
 * informations.
 *
 * @param id Target channel's {@link IShoppingChannel.id}
 * @returns Detailed channel info
 * @tag Systematic
 * @author Samchon
 *
 * @controller ShoppingAdminSystematicChannelController.at
 * @path GET /shoppings/admins/systematic/channels/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function at(
  connection: IConnection,
  id: string & Format<"uuid">,
): Promise<at.Output> {
  return !!connection.simulate
    ? at.simulate(connection, id)
    : PlainFetcher.fetch(connection, {
        ...at.METADATA,
        path: at.path(id),
      });
}
export namespace at {
  export type Output = IShoppingChannel.IHierarchical;

  export const METADATA = {
    method: "GET",
    path: "/shoppings/admins/systematic/channels/:id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (id: string & Format<"uuid">) =>
    `/shoppings/admins/systematic/channels/${encodeURIComponent(id ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IShoppingChannel.IHierarchical =>
    typia.random<IShoppingChannel.IHierarchical>(g);
  export const simulate = (
    connection: IConnection,
    id: string & Format<"uuid">,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(id),
      contentType: "application/json",
    });
    assert.param("id")(() => typia.assert(id));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * Get a channel info by its code.
 *
 * Get a detailed {@link IShoppingChannel.IHierarchical channel} information
 * by its code.
 *
 * Returned channel instance also contains the nested
 * {@link IShoppingChannelCategory.IHierarchical hierarchical category}
 * informations.
 *
 * @param code Target channel's {@link IShoppingChannel.code}
 * @returns Detailed channel info
 * @tag Systematic
 * @author Samchon
 *
 * @controller ShoppingAdminSystematicChannelController.get
 * @path GET /shoppings/admins/systematic/channels/:code/get
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function get(
  connection: IConnection,
  code: string,
): Promise<get.Output> {
  return !!connection.simulate
    ? get.simulate(connection, code)
    : PlainFetcher.fetch(connection, {
        ...get.METADATA,
        path: get.path(code),
      });
}
export namespace get {
  export type Output = IShoppingChannel.IHierarchical;

  export const METADATA = {
    method: "GET",
    path: "/shoppings/admins/systematic/channels/:code/get",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (code: string) =>
    `/shoppings/admins/systematic/channels/${encodeURIComponent(code ?? "null")}/get`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IShoppingChannel.IHierarchical =>
    typia.random<IShoppingChannel.IHierarchical>(g);
  export const simulate = (connection: IConnection, code: string): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(code),
      contentType: "application/json",
    });
    assert.param("code")(() => typia.assert(code));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}
