/**
 * @packageDocumentation
 * @module api.functional.shoppings.customers.carts.commodities
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import type { Format } from "typia/lib/tags/Format";

import type { IPage } from "../../../../../structures/common/IPage";
import type { IShoppingCartCommodity } from "../../../../../structures/shoppings/orders/IShoppingCartCommodity";
import type { IShoppingCartDiscountable } from "../../../../../structures/shoppings/orders/IShoppingCartDiscountable";

/**
 * List of every commodities.
 *
 * List up every {@link IShoppingCartCommodity commodities} in the
 * shopping cart with {@link IPage pagination}.
 *
 * If the *cartId* is not specified but `null` value assigned, then every
 * cart would be targetted. Also, you can limit the result by configuring
 * {@link IShoppingCartCommodity.IRequest.search search condition} in the
 * request body. Furthermore, it is possible to customize sequence order of
 * records by configuring {@link IShoppingCartCommodity.IRequest.sort }.
 *
 * For reference, when some commodity be {@link IShoppingOrder ordered} and
 * {@link IShoppingOrderPublish published}, then it would not be appread in
 * the shopping cart more. Otherwise, the order has not been published yet,
 * it would be appread in the shopping cart and still enable to create a new
 * {@link IShoppingOrder order application} with the same commodity.
 *
 * Of course, if the target {@link IShoppingSale sale} has been suspended, or
 * {@link IShoppingSaleUnitStockInventory out of stock}, then it would not be
 * appread in the shopping cart more, either.
 *
 * @param cartId Belonged cart's ID
 * @param input Request info of pagination, searching and sorting
 * @returns Paginated commodities
 * @tag Order
 * @author Samchon
 *
 * @controller ShoppingCustomerCartCommodityController.index
 * @path PATCH /shoppings/customers/carts/:cartId/commodities
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function index(
  connection: IConnection,
  cartId: null | (string & Format<"uuid">),
  input: IShoppingCartCommodity.IRequest,
): Promise<index.Output> {
  return !!connection.simulate
    ? index.simulate(connection, cartId, input)
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
          template: index.METADATA.path,
          path: index.path(cartId),
        },
        input,
      );
}
export namespace index {
  export type Input = IShoppingCartCommodity.IRequest;
  export type Output = IPage<IShoppingCartCommodity>;

  export const METADATA = {
    method: "PATCH",
    path: "/shoppings/customers/carts/:cartId/commodities",
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

  export const path = (cartId: null | (string & Format<"uuid">)) =>
    `/shoppings/customers/carts/${encodeURIComponent(cartId ?? "null")}/commodities`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IPage<IShoppingCartCommodity> =>
    typia.random<IPage<IShoppingCartCommodity>>(g);
  export const simulate = (
    connection: IConnection,
    cartId: null | (string & Format<"uuid">),
    input: IShoppingCartCommodity.IRequest,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(cartId),
      contentType: "application/json",
    });
    assert.param("cartId")(() => typia.assert(cartId));
    assert.body(() => typia.assert(input));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * Get a commodity.
 *
 * Get a {@link IShoppingCartCommodity commodity} record of the shopping cart.
 *
 * If the *cartId* is different with the belonged cart's ID, then 404 not
 * found exception would be thrown. Otherwise, the *cartId* has `null` value,
 * such dependency checking would be skipped, but still ownership would be
 * validated.
 *
 * Also, if target {@link IShoppingSale sale} has been suspended or
 * {@link IShoppingSaleUnitStockInventory out of stock}, then 410 gone error
 * would be thrown. Therefore, even if you've created a commodity successfully
 * with the {@link create } method, it still can be failed when you access the
 * commodity with this {@link at } method.
 *
 * @param cartId Belonged cart's ID
 * @param id Target commodity's {@link IShoppingCartCommodity.id}
 * @returns Detailed commodity info
 * @tag Order
 * @author Samchon
 *
 * @controller ShoppingCustomerCartCommodityController.at
 * @path GET /shoppings/customers/carts/:cartId/commodities/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function at(
  connection: IConnection,
  cartId: null | (string & Format<"uuid">),
  id: string & Format<"uuid">,
): Promise<at.Output> {
  return !!connection.simulate
    ? at.simulate(connection, cartId, id)
    : PlainFetcher.fetch(connection, {
        ...at.METADATA,
        template: at.METADATA.path,
        path: at.path(cartId, id),
      });
}
export namespace at {
  export type Output = IShoppingCartCommodity;

  export const METADATA = {
    method: "GET",
    path: "/shoppings/customers/carts/:cartId/commodities/:id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (
    cartId: null | (string & Format<"uuid">),
    id: string & Format<"uuid">,
  ) =>
    `/shoppings/customers/carts/${encodeURIComponent(cartId ?? "null")}/commodities/${encodeURIComponent(id ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IShoppingCartCommodity => typia.random<IShoppingCartCommodity>(g);
  export const simulate = (
    connection: IConnection,
    cartId: null | (string & Format<"uuid">),
    id: string & Format<"uuid">,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(cartId, id),
      contentType: "application/json",
    });
    assert.param("cartId")(() => typia.assert(cartId));
    assert.param("id")(() => typia.assert(id));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * Create a new commodity.
 *
 * Create a new {@link IShoppingCartCommodity commodity} into a specific
 * shopping cart.
 *
 * If {@link IShoppingCartCommodity.ICreate.accumulate } has `true` value
 * and there's some same commodity that composed with same
 * {@link IShoppingSaleUnitStock.IInvert stocks and quantities},
 * then new commodity would not be created but the volume would be accumulated.
 *
 * Also, if the *cartId* is not specified but `null` value assigned, then
 * ordinary cart would be utilized or create new one considering the
 * existence of the previous cart.
 *
 * By the way, if the target {@link IShoppingSale sale} has been suspended or
 * {@link IShoppingSaleUnitStockInventory out of stock}, then 410 gone error
 * would be thrown. Therefore, it would better to check the target sale and
 * {@link IShoppingSaleUnitStock stock}'s status before.
 *
 * @param cartId Belonged cart's ID
 * @param input Creation info of the commodity
 * @returns Newly created commodity
 * @tag Order
 * @author Samchon
 *
 * @controller ShoppingCustomerCartCommodityController.create
 * @path POST /shoppings/customers/carts/:cartId/commodities
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function create(
  connection: IConnection,
  cartId: null | (string & Format<"uuid">),
  input: IShoppingCartCommodity.ICreate,
): Promise<create.Output> {
  return !!connection.simulate
    ? create.simulate(connection, cartId, input)
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
          template: create.METADATA.path,
          path: create.path(cartId),
        },
        input,
      );
}
export namespace create {
  export type Input = IShoppingCartCommodity.ICreate;
  export type Output = IShoppingCartCommodity;

  export const METADATA = {
    method: "POST",
    path: "/shoppings/customers/carts/:cartId/commodities",
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

  export const path = (cartId: null | (string & Format<"uuid">)) =>
    `/shoppings/customers/carts/${encodeURIComponent(cartId ?? "null")}/commodities`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IShoppingCartCommodity => typia.random<IShoppingCartCommodity>(g);
  export const simulate = (
    connection: IConnection,
    cartId: null | (string & Format<"uuid">),
    input: IShoppingCartCommodity.ICreate,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(cartId),
      contentType: "application/json",
    });
    assert.param("cartId")(() => typia.assert(cartId));
    assert.body(() => typia.assert(input));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * Update a commodity (volume).
 *
 * Update a {@link IShoppingCartCommodity commodity}'s volume in the
 * shopping cart.
 *
 * If the *cartId* is different with the belonged cart's ID, then 404 not
 * found exception would be thrown. Otherwise, the *cartId* has `null` value,
 * such dependency checking would be skipped, but still ownership would be
 * validated.
 *
 * Also, if target {@link IShoppingSale sale} has been suspended or
 * {@link IShoppingSaleUnitStockInventory out of stock} suddenly, then 410
 * gone error would be thrown, either.
 *
 * @param cartId Belonged cart's ID
 * @param id Target commodity's {@link IShoppingCartCommodity.id}
 * @param input Update info of the commodity (volume)
 * @tag Order
 * @author Samchon
 *
 * @controller ShoppingCustomerCartCommodityController.update
 * @path PUT /shoppings/customers/carts/:cartId/commodities/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function update(
  connection: IConnection,
  cartId: null | (string & Format<"uuid">),
  id: string & Format<"uuid">,
  input: IShoppingCartCommodity.IUpdate,
): Promise<void> {
  return !!connection.simulate
    ? update.simulate(connection, cartId, id, input)
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
          template: update.METADATA.path,
          path: update.path(cartId, id),
        },
        input,
      );
}
export namespace update {
  export type Input = IShoppingCartCommodity.IUpdate;

  export const METADATA = {
    method: "PUT",
    path: "/shoppings/customers/carts/:cartId/commodities/:id",
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

  export const path = (
    cartId: null | (string & Format<"uuid">),
    id: string & Format<"uuid">,
  ) =>
    `/shoppings/customers/carts/${encodeURIComponent(cartId ?? "null")}/commodities/${encodeURIComponent(id ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection,
    cartId: null | (string & Format<"uuid">),
    id: string & Format<"uuid">,
    input: IShoppingCartCommodity.IUpdate,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(cartId, id),
      contentType: "application/json",
    });
    assert.param("cartId")(() => typia.assert(cartId));
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
 * Get replica of a commodity.
 *
 * Get a {@link IShoppingCartCommodity.ICreate } typed info of the target
 * commodity for replication.
 *
 * By the way, if the *cartId* is different with the belonged cart's ID,
 * then 404 not found exception would be thrown. Otherwise, the *cartId*
 * has `null` value, such dependency checking would be skipped, but still
 * ownership would be validated.
 *
 * Also, if target {@link IShoppingSale sale} has been suspended or
 * {@link IShoppingSaleUnitStockInventory out of stock} suddenly,
 * then 410 gone error would be thrown, either.
 *
 * @param cartId Belonged cart's ID
 * @param id Target commodity's {@link IShoppingCartCommodity.id}
 * @returns Creation info of the commodity for replication
 * @tag Order
 * @author Samchon
 *
 * @controller ShoppingCustomerCartCommodityController.replica
 * @path GET /shoppings/customers/carts/:cartId/commodities/:id/replica
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function replica(
  connection: IConnection,
  cartId: null | (string & Format<"uuid">),
  id: string & Format<"uuid">,
): Promise<replica.Output> {
  return !!connection.simulate
    ? replica.simulate(connection, cartId, id)
    : PlainFetcher.fetch(connection, {
        ...replica.METADATA,
        template: replica.METADATA.path,
        path: replica.path(cartId, id),
      });
}
export namespace replica {
  export type Output = IShoppingCartCommodity.ICreate;

  export const METADATA = {
    method: "GET",
    path: "/shoppings/customers/carts/:cartId/commodities/:id/replica",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (
    cartId: null | (string & Format<"uuid">),
    id: string & Format<"uuid">,
  ) =>
    `/shoppings/customers/carts/${encodeURIComponent(cartId ?? "null")}/commodities/${encodeURIComponent(id ?? "null")}/replica`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IShoppingCartCommodity.ICreate =>
    typia.random<IShoppingCartCommodity.ICreate>(g);
  export const simulate = (
    connection: IConnection,
    cartId: null | (string & Format<"uuid">),
    id: string & Format<"uuid">,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(cartId, id),
      contentType: "application/json",
    });
    assert.param("cartId")(() => typia.assert(cartId));
    assert.param("id")(() => typia.assert(id));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * Erase a commodity.
 *
 * Erase a {@link IShoppingCartCommodity commodity} from the shopping cart.
 *
 * If the commodity is on an {@link IShoppingOrder order} process, it is not
 * possible to erase it. Instead, if the order has been
 * {@link IShoppingOrderPublish published}, then it would not be appread in
 * the shopping cart more. If the order be erased, then you also can continue
 * erasinng the commodity, neither.
 *
 * @param cartId Belonged cart's ID
 * @param id Target commodity's {@link IShoppingCartCommodity.id}
 * @returns Newly created commodity
 * @tag Order
 * @author Samchon
 *
 * @controller ShoppingCustomerCartCommodityController.erase
 * @path DELETE /shoppings/customers/carts/:cartId/commodities/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function erase(
  connection: IConnection,
  cartId: null | (string & Format<"uuid">),
  id: string & Format<"uuid">,
): Promise<void> {
  return !!connection.simulate
    ? erase.simulate(connection, cartId, id)
    : PlainFetcher.fetch(connection, {
        ...erase.METADATA,
        template: erase.METADATA.path,
        path: erase.path(cartId, id),
      });
}
export namespace erase {
  export const METADATA = {
    method: "DELETE",
    path: "/shoppings/customers/carts/:cartId/commodities/:id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (
    cartId: null | (string & Format<"uuid">),
    id: string & Format<"uuid">,
  ) =>
    `/shoppings/customers/carts/${encodeURIComponent(cartId ?? "null")}/commodities/${encodeURIComponent(id ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection,
    cartId: null | (string & Format<"uuid">),
    id: string & Format<"uuid">,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(cartId, id),
      contentType: "application/json",
    });
    assert.param("cartId")(() => typia.assert(cartId));
    assert.param("id")(() => typia.assert(id));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * Get discountable info.
 *
 * Compute discountable features about the
 *  {@link IShoppingCartCommodity shopping cart} even including
 * non-carted {@link IShoppingSale sales}.
 *
 * Returned {@link IShoppingCartDiscountable } contains including
 * combinations of adjustable {@link IShoppingCoupon coupons},
 * withdrawable {@link IShoppingDepositHistory deposits} and
 * {@link IShoppingMileageHistory mileages}.
 *
 * Also, if you want to know the discountable info about some specific
 * sales that have not been carted yet, specify the sales
 * to the {@link IShoppingCartDiscountable.pseudos } property with composing
 * {@link IShoppingCartCommodity.ICreate creation info of the commodities}.
 * Then, they would be included in the discountable info.
 *
 * @param cartId Belonged cart's ID
 * @param input Request info for discountable
 * @returns Discountable info
 * @tag Order
 * @author Samchon
 *
 * @controller ShoppingCustomerCartCommodityController.discountable
 * @path PATCH /shoppings/customers/carts/:cartId/commodities/discountable
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function discountable(
  connection: IConnection,
  cartId: null | (string & Format<"uuid">),
  input: IShoppingCartDiscountable.IRequest,
): Promise<discountable.Output> {
  return !!connection.simulate
    ? discountable.simulate(connection, cartId, input)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...discountable.METADATA,
          template: discountable.METADATA.path,
          path: discountable.path(cartId),
        },
        input,
      );
}
export namespace discountable {
  export type Input = IShoppingCartDiscountable.IRequest;
  export type Output = IShoppingCartDiscountable;

  export const METADATA = {
    method: "PATCH",
    path: "/shoppings/customers/carts/:cartId/commodities/discountable",
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

  export const path = (cartId: null | (string & Format<"uuid">)) =>
    `/shoppings/customers/carts/${encodeURIComponent(cartId ?? "null")}/commodities/discountable`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IShoppingCartDiscountable => typia.random<IShoppingCartDiscountable>(g);
  export const simulate = (
    connection: IConnection,
    cartId: null | (string & Format<"uuid">),
    input: IShoppingCartDiscountable.IRequest,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(cartId),
      contentType: "application/json",
    });
    assert.param("cartId")(() => typia.assert(cartId));
    assert.body(() => typia.assert(input));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}
