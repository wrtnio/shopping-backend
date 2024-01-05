/**
 * @packageDocumentation
 * @module api.functional.shoppings.admins.mileages
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import type { IConnection, Primitive } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import type { Format } from "typia/lib/tags/Format";

import type { IPage } from "../../../../structures/common/IPage";
import type { IShoppingMileage } from "../../../../structures/shoppings/mileages/IShoppingMileage";
import { NestiaSimulator } from "../../../../utils/NestiaSimulator";

export * as donations from "./donations";

/**
 * @controller ShoppingAdminMileagesController.index
 * @path PATCH /shoppings/admins/mileages
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
    export type Input = Primitive<IPage.IRequest>;
    export type Output = Primitive<IPage<IShoppingMileage>>;

    export const METADATA = {
        method: "PATCH",
        path: "/shoppings/admins/mileages",
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
        return `/shoppings/admins/mileages`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IPage<IShoppingMileage>> =>
        typia.random<Primitive<IPage<IShoppingMileage>>>(g);
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
 * @controller ShoppingAdminMileagesController.at
 * @path GET /shoppings/admins/mileages/:id
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
    export type Output = Primitive<IShoppingMileage>;

    export const METADATA = {
        method: "GET",
        path: "/shoppings/admins/mileages/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (id: string & Format<"uuid">): string => {
        return `/shoppings/admins/mileages/${encodeURIComponent(id ?? "null")}`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingMileage> =>
        typia.random<Primitive<IShoppingMileage>>(g);
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
 * @controller ShoppingAdminMileagesController.get
 * @path GET /shoppings/admins/mileages/:code/get
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function get(
    connection: IConnection,
    code: string,
): Promise<get.Output> {
    return !!connection.simulate
        ? get.simulate(
              connection,
              code,
          )
        : PlainFetcher.fetch(
              connection,
              {
                  ...get.METADATA,
                  path: get.path(code),
              } as const,
          );
}
export namespace get {
    export type Output = Primitive<IShoppingMileage>;

    export const METADATA = {
        method: "GET",
        path: "/shoppings/admins/mileages/:code/get",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (code: string): string => {
        return `/shoppings/admins/mileages/${encodeURIComponent(code ?? "null")}/get`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingMileage> =>
        typia.random<Primitive<IShoppingMileage>>(g);
    export const simulate = async (
        connection: IConnection,
        code: string,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(code),
            contentType: "application/json",
        });
        assert.param("code")(() => typia.assert(code));
        return random(
            typeof connection.simulate === 'object' &&
                connection.simulate !== null
                ? connection.simulate
                : undefined
        );
    }
}

/**
 * @controller ShoppingAdminMileagesController.create
 * @path POST /shoppings/admins/mileages
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
    export type Input = Primitive<IShoppingMileage.ICreate>;
    export type Output = Primitive<IShoppingMileage>;

    export const METADATA = {
        method: "POST",
        path: "/shoppings/admins/mileages",
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
        return `/shoppings/admins/mileages`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingMileage> =>
        typia.random<Primitive<IShoppingMileage>>(g);
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
 * @controller ShoppingAdminMileagesController.erase
 * @path DELETE /shoppings/admins/mileages/:id
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
        path: "/shoppings/admins/mileages/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (id: string & Format<"uuid">): string => {
        return `/shoppings/admins/mileages/${encodeURIComponent(id ?? "null")}`;
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