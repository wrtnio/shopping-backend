/**
 * @packageDocumentation
 * @module api.functional.shoppings.customers.orders.cart.commodities
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import type { IConnection, Primitive } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import type { Format } from "typia/lib/tags/Format";

import type { IShoppingCartCommodity } from "../../../../../../structures/shoppings/orders/IShoppingCartCommodity";
import { NestiaSimulator } from "../../../../../../utils/NestiaSimulator";

/**
 * @controller ShoppingCustomerCartCommoditiesController.at
 * @path GET /shoppings/customers/orders/cart/:cartId/commodities/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function at(
    connection: IConnection,
    cartId: null | string & Format<"uuid">,
    id: string & Format<"uuid">,
): Promise<at.Output> {
    return !!connection.simulate
        ? at.simulate(
              connection,
              cartId,
              id,
          )
        : PlainFetcher.fetch(
              connection,
              {
                  ...at.METADATA,
                  path: at.path(cartId, id),
              } as const,
          );
}
export namespace at {
    export type Output = Primitive<IShoppingCartCommodity>;

    export const METADATA = {
        method: "GET",
        path: "/shoppings/customers/orders/cart/:cartId/commodities/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (cartId: null | string & Format<"uuid">, id: string & Format<"uuid">): string => {
        return `/shoppings/customers/orders/cart/${encodeURIComponent(cartId ?? "null")}/commodities/${encodeURIComponent(id ?? "null")}`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingCartCommodity> =>
        typia.random<Primitive<IShoppingCartCommodity>>(g);
    export const simulate = async (
        connection: IConnection,
        cartId: null | string & Format<"uuid">,
        id: string & Format<"uuid">,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(cartId, id),
            contentType: "application/json",
        });
        assert.param("cartId")(() => typia.assert(cartId));
        assert.param("id")(() => typia.assert(id));
        return random(
            typeof connection.simulate === 'object' &&
                connection.simulate !== null
                ? connection.simulate
                : undefined
        );
    }
}

/**
 * @controller ShoppingCustomerCartCommoditiesController.create
 * @path POST /shoppings/customers/orders/cart/:cartId/commodities
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function create(
    connection: IConnection,
    cartId: null | string & Format<"uuid">,
    input: create.Input,
): Promise<create.Output> {
    return !!connection.simulate
        ? create.simulate(
              connection,
              cartId,
              input,
          )
        : PlainFetcher.fetch(
              {
                  ...connection,
                  headers: {
                      ...(connection.headers ?? {}),
                      "Content-Type": "application/json",
                  },
              },
              {
                  ...create.METADATA,
                  path: create.path(cartId),
              } as const,
              input,
          );
}
export namespace create {
    export type Input = Primitive<IShoppingCartCommodity.ICreate>;
    export type Output = Primitive<IShoppingCartCommodity>;

    export const METADATA = {
        method: "POST",
        path: "/shoppings/customers/orders/cart/:cartId/commodities",
        request: {
            type: "application/json",
            encrypted: false
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (cartId: null | string & Format<"uuid">): string => {
        return `/shoppings/customers/orders/cart/${encodeURIComponent(cartId ?? "null")}/commodities`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingCartCommodity> =>
        typia.random<Primitive<IShoppingCartCommodity>>(g);
    export const simulate = async (
        connection: IConnection,
        cartId: null | string & Format<"uuid">,
        input: create.Input,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(cartId),
            contentType: "application/json",
        });
        assert.param("cartId")(() => typia.assert(cartId));
        assert.body(() => typia.assert(input));
        return random(
            typeof connection.simulate === 'object' &&
                connection.simulate !== null
                ? connection.simulate
                : undefined
        );
    }
}

/**
 * @controller ShoppingCustomerCartCommoditiesController.update
 * @path PUT /shoppings/customers/orders/cart/:cartId/commodities/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function update(
    connection: IConnection,
    cartId: null | string & Format<"uuid">,
    id: string & Format<"uuid">,
    input: update.Input,
): Promise<update.Output> {
    return !!connection.simulate
        ? update.simulate(
              connection,
              cartId,
              id,
              input,
          )
        : PlainFetcher.fetch(
              {
                  ...connection,
                  headers: {
                      ...(connection.headers ?? {}),
                      "Content-Type": "application/json",
                  },
              },
              {
                  ...update.METADATA,
                  path: update.path(cartId, id),
              } as const,
              input,
          );
}
export namespace update {
    export type Input = Primitive<IShoppingCartCommodity.IUpdate>;
    export type Output = Primitive<IShoppingCartCommodity>;

    export const METADATA = {
        method: "PUT",
        path: "/shoppings/customers/orders/cart/:cartId/commodities/:id",
        request: {
            type: "application/json",
            encrypted: false
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (cartId: null | string & Format<"uuid">, id: string & Format<"uuid">): string => {
        return `/shoppings/customers/orders/cart/${encodeURIComponent(cartId ?? "null")}/commodities/${encodeURIComponent(id ?? "null")}`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingCartCommodity> =>
        typia.random<Primitive<IShoppingCartCommodity>>(g);
    export const simulate = async (
        connection: IConnection,
        cartId: null | string & Format<"uuid">,
        id: string & Format<"uuid">,
        input: update.Input,
    ): Promise<Output> => {
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
            typeof connection.simulate === 'object' &&
                connection.simulate !== null
                ? connection.simulate
                : undefined
        );
    }
}

/**
 * @controller ShoppingCustomerCartCommoditiesController.erase
 * @path DELETE /shoppings/customers/orders/cart/:cartId/commodities/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function erase(
    connection: IConnection,
    cartId: null | string & Format<"uuid">,
    id: string & Format<"uuid">,
): Promise<void> {
    return !!connection.simulate
        ? erase.simulate(
              connection,
              cartId,
              id,
          )
        : PlainFetcher.fetch(
              connection,
              {
                  ...erase.METADATA,
                  path: erase.path(cartId, id),
              } as const,
          );
}
export namespace erase {

    export const METADATA = {
        method: "DELETE",
        path: "/shoppings/customers/orders/cart/:cartId/commodities/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (cartId: null | string & Format<"uuid">, id: string & Format<"uuid">): string => {
        return `/shoppings/customers/orders/cart/${encodeURIComponent(cartId ?? "null")}/commodities/${encodeURIComponent(id ?? "null")}`;
    }
    export const simulate = async (
        connection: IConnection,
        cartId: null | string & Format<"uuid">,
        id: string & Format<"uuid">,
    ): Promise<void> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(cartId, id),
            contentType: "application/json",
        });
        assert.param("cartId")(() => typia.assert(cartId));
        assert.param("id")(() => typia.assert(id));
    }
}