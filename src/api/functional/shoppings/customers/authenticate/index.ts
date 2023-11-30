/**
 * @packageDocumentation
 * @module api.functional.shoppings.customers.authenticate
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import type { IConnection, Primitive } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import type { IShoppingCitizen } from "../../../../structures/shoppings/actors/IShoppingCitizen";
import type { IShoppingCustomer } from "../../../../structures/shoppings/actors/IShoppingCustomer";
import type { IShoppingMember } from "../../../../structures/shoppings/actors/IShoppingMember";
import { NestiaSimulator } from "../../../../utils/NestiaSimulator";

/**
 * @controller ShoppingCustomerAuthenticateController.create
 * @path POST /shoppings/customers/authenticate
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
    export type Input = Primitive<IShoppingCustomer.ICreate>;
    export type Output = Primitive<IShoppingCustomer.IAuthorized>;

    export const METADATA = {
        method: "POST",
        path: "/shoppings/customers/authenticate",
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
        return `/shoppings/customers/authenticate`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingCustomer.IAuthorized> =>
        typia.random<Primitive<IShoppingCustomer.IAuthorized>>(g);
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
 * @controller ShoppingCustomerAuthenticateController.join
 * @path POST /shoppings/customers/authenticate/join
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function join(
    connection: IConnection,
    input: join.Input,
): Promise<join.Output> {
    return !!connection.simulate
        ? join.simulate(
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
                  ...join.METADATA,
                  path: join.path(),
              } as const,
              input,
          );
}
export namespace join {
    export type Input = Primitive<IShoppingMember.IJoin>;
    export type Output = Primitive<IShoppingCustomer>;

    export const METADATA = {
        method: "POST",
        path: "/shoppings/customers/authenticate/join",
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
        return `/shoppings/customers/authenticate/join`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingCustomer> =>
        typia.random<Primitive<IShoppingCustomer>>(g);
    export const simulate = async (
        connection: IConnection,
        input: join.Input,
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
 * @controller ShoppingCustomerAuthenticateController.login
 * @path PUT /shoppings/customers/authenticate/login
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function login(
    connection: IConnection,
    input: login.Input,
): Promise<login.Output> {
    return !!connection.simulate
        ? login.simulate(
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
                  ...login.METADATA,
                  path: login.path(),
              } as const,
              input,
          );
}
export namespace login {
    export type Input = Primitive<IShoppingMember.ILogin>;
    export type Output = Primitive<IShoppingCustomer>;

    export const METADATA = {
        method: "PUT",
        path: "/shoppings/customers/authenticate/login",
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
        return `/shoppings/customers/authenticate/login`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingCustomer> =>
        typia.random<Primitive<IShoppingCustomer>>(g);
    export const simulate = async (
        connection: IConnection,
        input: login.Input,
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
 * @controller ShoppingCustomerAuthenticateController.activate
 * @path POST /shoppings/customers/authenticate/activate
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function activate(
    connection: IConnection,
    input: activate.Input,
): Promise<activate.Output> {
    return !!connection.simulate
        ? activate.simulate(
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
                  ...activate.METADATA,
                  path: activate.path(),
              } as const,
              input,
          );
}
export namespace activate {
    export type Input = Primitive<IShoppingCitizen.ICreate>;
    export type Output = Primitive<IShoppingCustomer>;

    export const METADATA = {
        method: "POST",
        path: "/shoppings/customers/authenticate/activate",
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
        return `/shoppings/customers/authenticate/activate`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingCustomer> =>
        typia.random<Primitive<IShoppingCustomer>>(g);
    export const simulate = async (
        connection: IConnection,
        input: activate.Input,
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