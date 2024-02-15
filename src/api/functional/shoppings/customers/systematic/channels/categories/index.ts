/**
 * @packageDocumentation
 * @module api.functional.shoppings.customers.systematic.channels.categories
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import type { Format } from "typia/lib/tags/Format";

import type { IShoppingChannelCategory } from "../../../../../../structures/shoppings/systematic/IShoppingChannelCategory";

/**
 * List up every categories with children records.
 *
 * List up every {@link IShoppingChannelCategory.IHierarchical categories}
 * of a {@link IShoppingChannel channel} with pagination. Returned categories
 * contain children categories, too.
 *
 * If you want, you can limit the result by configuring
 * {@link IShoppingChannelCategory.IRequest.search search condition} in the
 * request body. Also, it is possible to customize sequence order of records
 * by configuring {@link IShoppingChannelCategory.IRequest.sort sort condition}.
 *
 * @param channelCode Belonged channel's {@link IShoppingChannel.code }
 * @returns Paginated categories with children categories
 * @tag Systematic
 * @author Samchon
 *
 * @controller ShoppingCustomerSystematicChannelCategoryController.index
 * @path PATCH /shoppings/customers/systematic/channels/:channelCode/categories
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function index(
  connection: IConnection,
  channelCode: string,
): Promise<index.Output> {
  return !!connection.simulate
    ? index.simulate(connection, channelCode)
    : PlainFetcher.fetch(connection, {
        ...index.METADATA,
        path: index.path(channelCode),
      });
}
export namespace index {
  export type Output = Array<IShoppingChannelCategory.IHierarchical>;

  export const METADATA = {
    method: "PATCH",
    path: "/shoppings/customers/systematic/channels/:channelCode/categories",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (channelCode: string) =>
    `/shoppings/customers/systematic/channels/${encodeURIComponent(channelCode ?? "null")}/categories`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): Array<IShoppingChannelCategory.IHierarchical> =>
    typia.random<Array<IShoppingChannelCategory.IHierarchical>>(g);
  export const simulate = (
    connection: IConnection,
    channelCode: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(channelCode),
      contentType: "application/json",
    });
    assert.param("channelCode")(() => typia.assert(channelCode));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * Get a category info.
 *
 * Get a detailed {@link IShoppingChannelCategory category} information.
 *
 * Returned category contains hierarchical children categories, and also
 * contains the recursive parent categories, too.
 *
 * @param channelCode Belonged channel's {@link IShoppingChannel.code }
 * @param id Target category's {@link IShoppingChannelCategory.id}
 * @returns Detailed category info
 * @tag Systematic
 * @author Samchon
 *
 * @controller ShoppingCustomerSystematicChannelCategoryController.at
 * @path GET /shoppings/customers/systematic/channels/:channelCode/categories/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function at(
  connection: IConnection,
  channelCode: string,
  id: string & Format<"uuid">,
): Promise<at.Output> {
  return !!connection.simulate
    ? at.simulate(connection, channelCode, id)
    : PlainFetcher.fetch(connection, {
        ...at.METADATA,
        path: at.path(channelCode, id),
      });
}
export namespace at {
  export type Output = IShoppingChannelCategory;

  export const METADATA = {
    method: "GET",
    path: "/shoppings/customers/systematic/channels/:channelCode/categories/:id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (channelCode: string, id: string & Format<"uuid">) =>
    `/shoppings/customers/systematic/channels/${encodeURIComponent(channelCode ?? "null")}/categories/${encodeURIComponent(id ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IShoppingChannelCategory => typia.random<IShoppingChannelCategory>(g);
  export const simulate = (
    connection: IConnection,
    channelCode: string,
    id: string & Format<"uuid">,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(channelCode, id),
      contentType: "application/json",
    });
    assert.param("channelCode")(() => typia.assert(channelCode));
    assert.param("id")(() => typia.assert(id));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * Get a category info of inverted.
 *
 * Get a inverted {@link IShoppingChannelCategory.IInvert category} information.
 *
 * Returned category contains the recursive parent categories, but not contains
 * the hierarchical children categories.
 *
 * @param channelCode Belonged channel's {@link IShoppingChannel.code }
 * @param id Target category's {@link IShoppingChannelCategory.id}
 * @returns Detailed category info
 * @tag Systematic
 * @author Samchon
 *
 * @controller ShoppingCustomerSystematicChannelCategoryController.invert
 * @path GET /shoppings/customers/systematic/channels/:channelCode/categories/:id/invert
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function invert(
  connection: IConnection,
  channelCode: string,
  id: string & Format<"uuid">,
): Promise<invert.Output> {
  return !!connection.simulate
    ? invert.simulate(connection, channelCode, id)
    : PlainFetcher.fetch(connection, {
        ...invert.METADATA,
        path: invert.path(channelCode, id),
      });
}
export namespace invert {
  export type Output = IShoppingChannelCategory.IInvert;

  export const METADATA = {
    method: "GET",
    path: "/shoppings/customers/systematic/channels/:channelCode/categories/:id/invert",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (channelCode: string, id: string & Format<"uuid">) =>
    `/shoppings/customers/systematic/channels/${encodeURIComponent(channelCode ?? "null")}/categories/${encodeURIComponent(id ?? "null")}/invert`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IShoppingChannelCategory.IInvert =>
    typia.random<IShoppingChannelCategory.IInvert>(g);
  export const simulate = (
    connection: IConnection,
    channelCode: string,
    id: string & Format<"uuid">,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(channelCode, id),
      contentType: "application/json",
    });
    assert.param("channelCode")(() => typia.assert(channelCode));
    assert.param("id")(() => typia.assert(id));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}
