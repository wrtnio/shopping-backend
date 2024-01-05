/**
 * @packageDocumentation
 * @module api.functional.shoppings.admins.coupons
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import type { IConnection, Primitive } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import type { Format } from "typia/lib/tags/Format";

import type { IPage } from "../../../../structures/common/IPage";
import type { IShoppingCoupon } from "../../../../structures/shoppings/coupons/IShoppingCoupon";
import { NestiaSimulator } from "../../../../utils/NestiaSimulator";

/**
 * 
 * @internal
 * 
 * @controller ShoppingAdminCouponsController.destroy
 * @path DELETE /shoppings/admins/coupons/:id/destroy
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function destroy(
    connection: IConnection,
    id: string & Format<"uuid">,
): Promise<void> {
    return !!connection.simulate
        ? destroy.simulate(
              connection,
              id,
          )
        : PlainFetcher.fetch(
              connection,
              {
                  ...destroy.METADATA,
                  path: destroy.path(id),
              } as const,
          );
}
export namespace destroy {

    export const METADATA = {
        method: "DELETE",
        path: "/shoppings/admins/coupons/:id/destroy",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (id: string & Format<"uuid">): string => {
        return `/shoppings/admins/coupons/${encodeURIComponent(id ?? "null")}/destroy`;
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
 * @controller ShoppingAdminCouponsController.create
 * @path POST /shoppings/admins/coupons
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
    export type Input = Primitive<IShoppingCoupon.ICreate>;
    export type Output = Primitive<IShoppingCoupon>;

    export const METADATA = {
        method: "POST",
        path: "/shoppings/admins/coupons",
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
        return `/shoppings/admins/coupons`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingCoupon> =>
        typia.random<Primitive<IShoppingCoupon>>(g);
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
 * @controller ShoppingAdminCouponsController.erase
 * @path DELETE /shoppings/admins/coupons/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function erase(
    connection: IConnection,
    id: string,
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
        path: "/shoppings/admins/coupons/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (id: string): string => {
        return `/shoppings/admins/coupons/${encodeURIComponent(id ?? "null")}`;
    }
    export const simulate = async (
        connection: IConnection,
        id: string,
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
 * @controller ShoppingAdminCouponsController.index
 * @path PATCH /shoppings/admins/coupons
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function index(
    connection: IConnection,
    input: index.Input,
): Promise<index.Output> {
    return !!connection.simulate
        ? index.simulate(
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
                  ...index.METADATA,
                  path: index.path(),
              } as const,
              input,
          );
}
export namespace index {
    export type Input = Primitive<IShoppingCoupon.IRequest>;
    export type Output = Primitive<IPage<IShoppingCoupon>>;

    export const METADATA = {
        method: "PATCH",
        path: "/shoppings/admins/coupons",
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
        return `/shoppings/admins/coupons`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IPage<IShoppingCoupon>> =>
        typia.random<Primitive<IPage<IShoppingCoupon>>>(g);
    export const simulate = async (
        connection: IConnection,
        input: index.Input,
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
 * @controller ShoppingAdminCouponsController.at
 * @path GET /shoppings/admins/coupons/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function at(
    connection: IConnection,
    id: string,
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
    export type Output = Primitive<IShoppingCoupon>;

    export const METADATA = {
        method: "GET",
        path: "/shoppings/admins/coupons/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (id: string): string => {
        return `/shoppings/admins/coupons/${encodeURIComponent(id ?? "null")}`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingCoupon> =>
        typia.random<Primitive<IShoppingCoupon>>(g);
    export const simulate = async (
        connection: IConnection,
        id: string,
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