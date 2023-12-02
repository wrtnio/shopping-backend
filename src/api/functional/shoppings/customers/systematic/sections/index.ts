/**
 * @packageDocumentation
 * @module api.functional.shoppings.customers.systematic.sections
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import type { IConnection, Primitive } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import type { Format } from "typia/lib/tags/Format";

import type { IShoppingSection } from "../../../../../structures/shoppings/systematic/IShoppingSection";
import { NestiaSimulator } from "../../../../../utils/NestiaSimulator";

/**
 * @controller ShoppingCustomerSystematicSectionsController.at
 * @path GET /shoppings/customers/systematic/sections/:id
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
    export type Output = Primitive<IShoppingSection>;

    export const METADATA = {
        method: "GET",
        path: "/shoppings/customers/systematic/sections/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (id: string & Format<"uuid">): string => {
        return `/shoppings/customers/systematic/sections/${encodeURIComponent(id ?? "null")}`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingSection> =>
        typia.random<Primitive<IShoppingSection>>(g);
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
 * @controller ShoppingCustomerSystematicSectionsController.get
 * @path GET /shoppings/customers/systematic/sections/:code/get
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
    export type Output = Primitive<IShoppingSection>;

    export const METADATA = {
        method: "GET",
        path: "/shoppings/customers/systematic/sections/:code/get",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (code: string): string => {
        return `/shoppings/customers/systematic/sections/${encodeURIComponent(code ?? "null")}/get`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingSection> =>
        typia.random<Primitive<IShoppingSection>>(g);
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