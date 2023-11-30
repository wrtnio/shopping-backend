/**
 * @packageDocumentation
 * @module api.functional.shoppings.customers.authenticate.password
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import type { IConnection, Primitive } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import type { IShoppingMember } from "../../../../../structures/shoppings/actors/IShoppingMember";
import { NestiaSimulator } from "../../../../../utils/NestiaSimulator";

/**
 * @controller ShoppingCustomerAuthenticatePasswordController.change
 * @path PUT /shoppings/customers/authenticate/password/change
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function change(
    connection: IConnection,
    input: change.Input,
): Promise<void> {
    return !!connection.simulate
        ? change.simulate(
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
                  ...change.METADATA,
                  path: change.path(),
              } as const,
              input,
          );
}
export namespace change {
    export type Input = Primitive<IShoppingMember.IPasswordChange>;

    export const METADATA = {
        method: "PUT",
        path: "/shoppings/customers/authenticate/password/change",
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
        return `/shoppings/customers/authenticate/password/change`;
    }
    export const simulate = async (
        connection: IConnection,
        input: change.Input,
    ): Promise<void> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(),
            contentType: "application/json",
        });
        assert.body(() => typia.assert(input));
    }
}

/**
 * @controller ShoppingCustomerAuthenticatePasswordController.reset
 * @path DELETE /shoppings/customers/authenticate/password/reset
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function reset(
    connection: IConnection,
    input: reset.Input,
): Promise<void> {
    return !!connection.simulate
        ? reset.simulate(
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
                  ...reset.METADATA,
                  path: reset.path(),
              } as const,
              input,
          );
}
export namespace reset {
    export type Input = Primitive<IShoppingMember.IPasswordReset>;

    export const METADATA = {
        method: "DELETE",
        path: "/shoppings/customers/authenticate/password/reset",
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
        return `/shoppings/customers/authenticate/password/reset`;
    }
    export const simulate = async (
        connection: IConnection,
        input: reset.Input,
    ): Promise<void> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(),
            contentType: "application/json",
        });
        assert.body(() => typia.assert(input));
    }
}

/**
 * @controller ShoppingCustomerAuthenticatePasswordController.confirm
 * @path GET /shoppings/customers/authenticate/password/:token
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function confirm(
    connection: IConnection,
    input: string,
): Promise<void> {
    return !!connection.simulate
        ? confirm.simulate(
              connection,
              input,
          )
        : PlainFetcher.fetch(
              connection,
              {
                  ...confirm.METADATA,
                  path: confirm.path(input),
              } as const,
          );
}
export namespace confirm {

    export const METADATA = {
        method: "GET",
        path: "/shoppings/customers/authenticate/password/:token",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (input: string): string => {
        return `/shoppings/customers/authenticate/password/${encodeURIComponent(input ?? "null")}`;
    }
    export const simulate = async (
        connection: IConnection,
        input: string,
    ): Promise<void> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(input),
            contentType: "application/json",
        });
        assert.param("token")(() => typia.assert(input));
    }
}