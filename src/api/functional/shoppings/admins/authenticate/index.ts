/**
 * @packageDocumentation
 * @module api.functional.shoppings.admins.authenticate
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import type { IShoppingAdministrator } from "../../../../structures/shoppings/actors/IShoppingAdministrator";
import type { IShoppingMember } from "../../../../structures/shoppings/actors/IShoppingMember";

/**
 * Get administrator information.
 *
 * Get {@link IShoppingAdministrator.IInvert administrator} information of
 * current {@link IShoppingCustomer customer}.
 *
 * If current {@link IShoppingMember member} is not an administrator,
 * it throws 403 forbidden exception.
 *
 * @returns Admin info
 * @tag Authenticate
 * @author Samchon
 *
 * @controller ShoppingAdminAuthenticateController.get
 * @path GET /shoppings/admins/authenticate
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function get(connection: IConnection): Promise<get.Output> {
  return !!connection.simulate
    ? get.simulate(connection)
    : PlainFetcher.fetch(connection, {
        ...get.METADATA,
        template: get.METADATA.path,
        path: get.path(),
      });
}
export namespace get {
  export type Output = IShoppingAdministrator.IInvert;

  export const METADATA = {
    method: "GET",
    path: "/shoppings/admins/authenticate",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = () => "/shoppings/admins/authenticate";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IShoppingAdministrator.IInvert =>
    typia.random<IShoppingAdministrator.IInvert>(g);
  export const simulate = (connection: IConnection): Output => {
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * Join as an administrator.
 *
 * Join as an administrator with {@link IShoppingAdministrator.IJoin joining info}.
 *
 * This method is allowed only when the {@link IShoppingCustomer customer} already
 * has joined the {@link IShoppingMember membership}. IF not, he (she) must
 * accomplish it before. If not, 403 forbidden exception would be thrown.
 *
 * @param input Joining request info
 * @returns Administrator info
 * @tag Authenticate
 * @todo Need to add approval process
 * @author Samchon
 *
 * @controller ShoppingAdminAuthenticateController.join
 * @path POST /shoppings/admins/authenticate
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function join(
  connection: IConnection,
  input: IShoppingAdministrator.IJoin,
): Promise<join.Output> {
  return !!connection.simulate
    ? join.simulate(connection, input)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...join.METADATA,
          template: join.METADATA.path,
          path: join.path(),
        },
        input,
      );
}
export namespace join {
  export type Input = IShoppingAdministrator.IJoin;
  export type Output = IShoppingAdministrator.IInvert;

  export const METADATA = {
    method: "POST",
    path: "/shoppings/admins/authenticate",
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

  export const path = () => "/shoppings/admins/authenticate";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IShoppingAdministrator.IInvert =>
    typia.random<IShoppingAdministrator.IInvert>(g);
  export const simulate = (
    connection: IConnection,
    input: IShoppingAdministrator.IJoin,
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
 * Login as an administrator.
 *
 * Login as an administrator with {@link IShoppingAdministrator.ILogin login info}.
 *
 * This method has exactly same effect with
 * {@link ShoppingApi.functional.customers.authenticate.login } function, but
 * returned type is a llttle different. The similar function returns
 * {@link IShoppingCustomer } type that starting from the customer information, so
 * that you have to access to the administrator info through
 * `customer.member.administrator`. In contrast with that, this method returns
 * {@link IShoppingAdministrator.IInvert } type that starting from the administrator
 * info, so that can access to the customer info through `administrator.customer`.
 *
 * Of course, to use this function, you had to {@link join } as an administrator
 * before. If not, 403 forbidden exception would be thrown,
 *
 * @param input Login request info
 * @returns Administrator info
 * @tag Authenticate
 * @author Samchon
 *
 * @controller ShoppingAdminAuthenticateController.login
 * @path PUT /shoppings/admins/authenticate/login
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function login(
  connection: IConnection,
  input: IShoppingMember.ILogin,
): Promise<login.Output> {
  return !!connection.simulate
    ? login.simulate(connection, input)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...login.METADATA,
          template: login.METADATA.path,
          path: login.path(),
        },
        input,
      );
}
export namespace login {
  export type Input = IShoppingMember.ILogin;
  export type Output = IShoppingAdministrator.IInvert;

  export const METADATA = {
    method: "PUT",
    path: "/shoppings/admins/authenticate/login",
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

  export const path = () => "/shoppings/admins/authenticate/login";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IShoppingAdministrator.IInvert =>
    typia.random<IShoppingAdministrator.IInvert>(g);
  export const simulate = (
    connection: IConnection,
    input: IShoppingMember.ILogin,
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
