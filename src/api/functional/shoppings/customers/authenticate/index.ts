/**
 * @packageDocumentation
 * @module api.functional.shoppings.customers.authenticate
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import type { IShoppingCitizen } from "../../../../structures/shoppings/actors/IShoppingCitizen";
import type { IShoppingCustomer } from "../../../../structures/shoppings/actors/IShoppingCustomer";
import type { IShoppingExternalUser } from "../../../../structures/shoppings/actors/IShoppingExternalUser";
import type { IShoppingMember } from "../../../../structures/shoppings/actors/IShoppingMember";

export * as password from "./password";

/**
 * Refresh the authentication token.
 *
 * Create a new {@link IShoppingCustomer.IToken.access access token} of a
 * {@link IShoppingCustomer customer} with the pre-issued
 * {@link IShoppingCustomer.IToken.refresh refresh} token.
 *
 * Note that, this function is available until the
 * {@link IShoppingCustomer.IToken.refreshable_until } value.
 *
 * @param input Refresh token.
 * @returns Customer information with new token
 * @tag Authenticate
 * @assignHeaders setHeaders
 * @author Samchon
 *
 * @controller ShoppingCustomerAuthenticateController.refresh
 * @path PATCH /shoppings/customers/authenticate/refresh
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function refresh(
  connection: IConnection,
  input: IShoppingCustomer.IRefresh,
): Promise<refresh.Output> {
  const output: refresh.Output = !!connection.simulate
    ? refresh.simulate(connection, input)
    : await PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...refresh.METADATA,
          template: refresh.METADATA.path,
          path: refresh.path(),
        },
        input,
      );
  connection.headers ??= {};
  Object.assign(connection.headers, output.setHeaders);
  return output;
}
export namespace refresh {
  export type Input = IShoppingCustomer.IRefresh;
  export type Output = IShoppingCustomer.IAuthorized;

  export const METADATA = {
    method: "PATCH",
    path: "/shoppings/customers/authenticate/refresh",
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

  export const path = () => "/shoppings/customers/authenticate/refresh";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IShoppingCustomer.IAuthorized =>
    typia.random<IShoppingCustomer.IAuthorized>(g);
  export const simulate = (
    connection: IConnection,
    input: IShoppingCustomer.IRefresh,
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
 * Get current customer info.
 *
 * Get current {@link IShoppingCustomer customer} information from the
 * {@link IShoppingCustomer.IToken.access access token}.
 *
 * @returns Current customer information
 * @tag Authenticate
 * @author Samchon
 *
 * @controller ShoppingCustomerAuthenticateController.get
 * @path GET /shoppings/customers/authenticate
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
  export type Output = IShoppingCustomer;

  export const METADATA = {
    method: "GET",
    path: "/shoppings/customers/authenticate",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = () => "/shoppings/customers/authenticate";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IShoppingCustomer => typia.random<IShoppingCustomer>(g);
  export const simulate = (connection: IConnection): Output => {
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * Create a new customer record.
 *
 * This shopping mall system defines everyone participating in this market as
 * a "customer". And the customer records are not archived based on individual
 * {@link IShoppingCitizen people}, but based on the unit of connection.
 * Therefore, even if it is the same person, a new {@link IShoppingCustomer }
 * record is created every time a connection is made.
 *
 * Therefore, all Client Applications that access this service must first call
 * this function, report the customer's inflow path to the server, and create
 * an {@link IShoppingCustomer.IToken.access access token}. If you skip this
 * function call, all the other API functions would be prohibited. There is no
 * exception, even if you want to {@link activate } your citizenship or
 * {@link login } with your {@link IShoppingMember member account}. Before
 * authenticating yourself or logging in, be sure to call this function first.
 * This also applies when an {@link IShoppingAdministrator administrator} or
 * {@link IShoppingSeller seller} logs in.
 *
 * Also, the authentication token has an
 * {@link IShoppingCustomer.IToken.expired_at expiration time}
 * and cannot be used permanently. For reference, the authentication token is
 * valid for 3 hours, and if you want to maintain customer authentication even
 * after 3 hours, you must call the {@link refresh } function.
 *
 * @param input Creation information of the customer.
 * @returns Created customer information with token.
 * @tag Authenticate
 * @assignHeaders setHeaders
 * @author Samchon
 *
 * @controller ShoppingCustomerAuthenticateController.create
 * @path POST /shoppings/customers/authenticate
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function create(
  connection: IConnection,
  input: IShoppingCustomer.ICreate,
): Promise<create.Output> {
  const output: create.Output = !!connection.simulate
    ? create.simulate(connection, input)
    : await PlainFetcher.fetch(
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
          path: create.path(),
        },
        input,
      );
  connection.headers ??= {};
  Object.assign(connection.headers, output.setHeaders);
  return output;
}
export namespace create {
  export type Input = IShoppingCustomer.ICreate;
  export type Output = IShoppingCustomer.IAuthorized;

  export const METADATA = {
    method: "POST",
    path: "/shoppings/customers/authenticate",
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

  export const path = () => "/shoppings/customers/authenticate";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IShoppingCustomer.IAuthorized =>
    typia.random<IShoppingCustomer.IAuthorized>(g);
  export const simulate = (
    connection: IConnection,
    input: IShoppingCustomer.ICreate,
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
 * Join membership.
 *
 * {@link IShoppingCustomer Customer} signs up for
 * {@link IShoppingMember membership} of current shopping mall system.
 *
 * If you've performed the {@link IShoppingCitizen citizenship}
 * {@link activate activation} too, then you can skip the {@link activate }
 * function calling everytime you log in from now on. Also, if the person had
 * {@link IShoppingOrder purchased} with {@link activate } and {@link external }
 * function calling, you can also access to the order history too. In other
 * words, activity details prior to membership registration can also be
 * accessed with continuity.
 *
 * For reference, as described in the {@link create } function, before calling
 * this `join` function, you must first create a customer record and token by
 * calling the {@link create } function.
 *
 * @param input Join information of the member
 * @returns Joined customer information
 * @tag Authenticate
 * @author Samchon
 *
 * @controller ShoppingCustomerAuthenticateController.join
 * @path POST /shoppings/customers/authenticate/join
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function join(
  connection: IConnection,
  input: IShoppingMember.IJoin,
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
  export type Input = IShoppingMember.IJoin;
  export type Output = IShoppingCustomer;

  export const METADATA = {
    method: "POST",
    path: "/shoppings/customers/authenticate/join",
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

  export const path = () => "/shoppings/customers/authenticate/join";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IShoppingCustomer => typia.random<IShoppingCustomer>(g);
  export const simulate = (
    connection: IConnection,
    input: IShoppingMember.IJoin,
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
 * Membership login.
 *
 * {@link IShoppingCustomer Customer} logs in with his/her
 * {@link IShoppingMember membership} account with the email and password.
 *
 * If the {@link IShoppingMember member} has previously performed
 * {@link activate citizenship activation}, the {@link IShoppingCustomer.citizen }
 * value would be filled in accordingly. And if the member has also signed up
 * as an {@link IShoppingAdministrator administrator} or
 * {@link IShoppingSeller seller}, the relevant information is also entered
 * accordingly.
 *
 * For reference, as described in the {@link create } function, before calling
 * this `login` function, you must first create a customer record and token by
 * calling the {@link create } function.
 *
 * @param input Login request info
 * @returns Logged in Customer information
 * @tag Authenticate
 * @author Samchon
 *
 * @controller ShoppingCustomerAuthenticateController.login
 * @path PUT /shoppings/customers/authenticate/login
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
  export type Output = IShoppingCustomer;

  export const METADATA = {
    method: "PUT",
    path: "/shoppings/customers/authenticate/login",
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

  export const path = () => "/shoppings/customers/authenticate/login";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IShoppingCustomer => typia.random<IShoppingCustomer>(g);
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

/**
 * Activate citizenship.
 *
 * {@link IShoppingCustomer Customer} activates his/her
 * {@link IShoppingCitizen citizenship} with mobile number and real name.
 *
 * If the custommer already {@link join joined} to the
 * {@link IShoppingMember membership}, then you can skip the citizenship
 * {@link activation } function calling everytime you log in from now on.
 * Of course, such story would be same to the {@link external } function, too.
 *
 * For reference, as described in the {@link create } function, before calling
 * this `activate` function, you must first create a customer record and token
 * by calling the {@link create } function.
 *
 * @param input Activation information of the citizenship
 * @returns Activated customer information
 * @tag Authenticate
 * @author Samchon
 *
 * @controller ShoppingCustomerAuthenticateController.activate
 * @path POST /shoppings/customers/authenticate/activate
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function activate(
  connection: IConnection,
  input: IShoppingCitizen.ICreate,
): Promise<activate.Output> {
  return !!connection.simulate
    ? activate.simulate(connection, input)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...activate.METADATA,
          template: activate.METADATA.path,
          path: activate.path(),
        },
        input,
      );
}
export namespace activate {
  export type Input = IShoppingCitizen.ICreate;
  export type Output = IShoppingCustomer;

  export const METADATA = {
    method: "POST",
    path: "/shoppings/customers/authenticate/activate",
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

  export const path = () => "/shoppings/customers/authenticate/activate";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IShoppingCustomer => typia.random<IShoppingCustomer>(g);
  export const simulate = (
    connection: IConnection,
    input: IShoppingCitizen.ICreate,
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
 * Enroll external user info.
 *
 * {@link IShoppingCustomer Customer} enrolls his/her
 * {@link IShoppingExternalUser external user} information from other service.
 *
 * It has similar effect with the {@link join membership joining} function,
 * so that if you've performed the {@link IShoppingCitizen citizenship}
 * {@link activate activation} too, then you can skip the {@link activate }
 * function calling everytime you call this `external` function with same
 * info from now on. Also, if the person had
 * {@link IShoppingOrder purchased} with {@link activate } and {@link join }
 * function calling, you can also access to the order history too. In other
 * words, activity details prior to external server registration can also be
 * accessed with continuity.
 *
 * For reference, as described in the {@link create } function, before calling
 * this `external` function, you must first create a customer record and token
 * by calling the {@link create } function.
 *
 * @param input Enroll information of the external user
 * @returns External user enrolled customer information
 * @tag Authenticate
 * @todo Must be shifted to the ShoppingCustomerProvider
 * @author Samchon
 *
 * @controller ShoppingCustomerAuthenticateController.external
 * @path POST /shoppings/customers/authenticate/external
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function external(
  connection: IConnection,
  input: IShoppingExternalUser.ICreate,
): Promise<external.Output> {
  return !!connection.simulate
    ? external.simulate(connection, input)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...external.METADATA,
          template: external.METADATA.path,
          path: external.path(),
        },
        input,
      );
}
export namespace external {
  export type Input = IShoppingExternalUser.ICreate;
  export type Output = IShoppingCustomer;

  export const METADATA = {
    method: "POST",
    path: "/shoppings/customers/authenticate/external",
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

  export const path = () => "/shoppings/customers/authenticate/external";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IShoppingCustomer => typia.random<IShoppingCustomer>(g);
  export const simulate = (
    connection: IConnection,
    input: IShoppingExternalUser.ICreate,
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
