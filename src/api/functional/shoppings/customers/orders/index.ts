/**
 * @packageDocumentation
 * @module api.functional.shoppings.customers.orders
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import type { IConnection, Primitive } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import type { Format } from "typia/lib/tags/Format";

import type { IShoppingOrder } from "../../../../structures/shoppings/orders/IShoppingOrder";
import type { IShoppingOrderDiscountable } from "../../../../structures/shoppings/orders/IShoppingOrderDiscountable";
import type { IShoppingOrderPrice } from "../../../../structures/shoppings/orders/IShoppingOrderPrice";
import { NestiaSimulator } from "../../../../utils/NestiaSimulator";

export * as publish from "./publish";

/**
 * @controller ShoppingCustomerOrdersController.create
 * @path POST /shoppings/customers/orders
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function create(
    connection: IConnection,
    input: create.Input,
): Promise<create.Output> {
    return !!connection.simulate
        ? create.simulate(
              connection,
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
                  path: create.path(),
              } as const,
              input,
          );
}
export namespace create {
    export type Input = Primitive<IShoppingOrder.ICreate>;
    export type Output = Primitive<IShoppingOrder>;

    export const METADATA = {
        method: "POST",
        path: "/shoppings/customers/orders",
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

    export const path = (): string => {
        return `/shoppings/customers/orders`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingOrder> =>
        typia.random<Primitive<IShoppingOrder>>(g);
    export const simulate = async (
        connection: IConnection,
        input: create.Input,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(),
            contentType: "application/json",
        });
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
 * @controller ShoppingCustomerOrdersController.erase
 * @path DELETE /shoppings/customers/orders/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function erase(
    connection: IConnection,
    id: string & Format<"uuid">,
): Promise<void> {
    return !!connection.simulate
        ? erase.simulate(
              connection,
              id,
          )
        : PlainFetcher.fetch(
              connection,
              {
                  ...erase.METADATA,
                  path: erase.path(id),
              } as const,
          );
}
export namespace erase {

    export const METADATA = {
        method: "DELETE",
        path: "/shoppings/customers/orders/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (id: string & Format<"uuid">): string => {
        return `/shoppings/customers/orders/${encodeURIComponent(id ?? "null")}`;
    }
    export const simulate = async (
        connection: IConnection,
        id: string & Format<"uuid">,
    ): Promise<void> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(id),
            contentType: "application/json",
        });
        assert.param("id")(() => typia.assert(id));
    }
}

/**
 * @controller ShoppingCustomerOrdersController.price
 * @path GET /shoppings/customers/orders/:id/price
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function price(
    connection: IConnection,
    id: string & Format<"uuid">,
): Promise<price.Output> {
    return !!connection.simulate
        ? price.simulate(
              connection,
              id,
          )
        : PlainFetcher.fetch(
              connection,
              {
                  ...price.METADATA,
                  path: price.path(id),
              } as const,
          );
}
export namespace price {
    export type Output = Primitive<IShoppingOrderPrice>;

    export const METADATA = {
        method: "GET",
        path: "/shoppings/customers/orders/:id/price",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (id: string & Format<"uuid">): string => {
        return `/shoppings/customers/orders/${encodeURIComponent(id ?? "null")}/price`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingOrderPrice> =>
        typia.random<Primitive<IShoppingOrderPrice>>(g);
    export const simulate = async (
        connection: IConnection,
        id: string & Format<"uuid">,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(id),
            contentType: "application/json",
        });
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
 * @controller ShoppingCustomerOrdersController.discountable
 * @path PATCH /shoppings/customers/orders/:id/discountable
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function discountable(
    connection: IConnection,
    id: string & Format<"uuid">,
    input: discountable.Input,
): Promise<discountable.Output> {
    return !!connection.simulate
        ? discountable.simulate(
              connection,
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
                  ...discountable.METADATA,
                  path: discountable.path(id),
              } as const,
              input,
          );
}
export namespace discountable {
    export type Input = Primitive<IShoppingOrderDiscountable.IRequest>;
    export type Output = Primitive<IShoppingOrderDiscountable>;

    export const METADATA = {
        method: "PATCH",
        path: "/shoppings/customers/orders/:id/discountable",
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

    export const path = (id: string & Format<"uuid">): string => {
        return `/shoppings/customers/orders/${encodeURIComponent(id ?? "null")}/discountable`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingOrderDiscountable> =>
        typia.random<Primitive<IShoppingOrderDiscountable>>(g);
    export const simulate = async (
        connection: IConnection,
        id: string & Format<"uuid">,
        input: discountable.Input,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(id),
            contentType: "application/json",
        });
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
 * @controller ShoppingCustomerOrdersController.discount
 * @path PUT /shoppings/customers/orders/:id/discount
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function discount(
    connection: IConnection,
    id: string & Format<"uuid">,
    input: discount.Input,
): Promise<discount.Output> {
    return !!connection.simulate
        ? discount.simulate(
              connection,
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
                  ...discount.METADATA,
                  path: discount.path(id),
              } as const,
              input,
          );
}
export namespace discount {
    export type Input = Primitive<IShoppingOrderPrice.ICreate>;
    export type Output = Primitive<IShoppingOrderPrice>;

    export const METADATA = {
        method: "PUT",
        path: "/shoppings/customers/orders/:id/discount",
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

    export const path = (id: string & Format<"uuid">): string => {
        return `/shoppings/customers/orders/${encodeURIComponent(id ?? "null")}/discount`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingOrderPrice> =>
        typia.random<Primitive<IShoppingOrderPrice>>(g);
    export const simulate = async (
        connection: IConnection,
        id: string & Format<"uuid">,
        input: discount.Input,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(id),
            contentType: "application/json",
        });
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
 * @controller ShoppingCustomerOrdersController.at
 * @path GET /shoppings/customers/orders/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function at(
    connection: IConnection,
    id: string & Format<"uuid">,
): Promise<at.Output> {
    return !!connection.simulate
        ? at.simulate(
              connection,
              id,
          )
        : PlainFetcher.fetch(
              connection,
              {
                  ...at.METADATA,
                  path: at.path(id),
              } as const,
          );
}
export namespace at {
    export type Output = Primitive<IShoppingOrder>;

    export const METADATA = {
        method: "GET",
        path: "/shoppings/customers/orders/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (id: string & Format<"uuid">): string => {
        return `/shoppings/customers/orders/${encodeURIComponent(id ?? "null")}`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingOrder> =>
        typia.random<Primitive<IShoppingOrder>>(g);
    export const simulate = async (
        connection: IConnection,
        id: string & Format<"uuid">,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(id),
            contentType: "application/json",
        });
        assert.param("id")(() => typia.assert(id));
        return random(
            typeof connection.simulate === 'object' &&
                connection.simulate !== null
                ? connection.simulate
                : undefined
        );
    }
}