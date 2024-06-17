/**
 * @packageDocumentation
 * @module api.functional.shoppings.admins.coupons
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import type { Format } from "typia/lib/tags/Format";

import type { IPage } from "../../../../structures/common/IPage";
import type { IShoppingCoupon } from "../../../../structures/shoppings/coupons/IShoppingCoupon";

/**
 *
 * @internal
 *
 * @controller ShoppingAdminCouponController.destroy
 * @path DELETE /shoppings/admins/coupons/:id/destroy
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function destroy(
  connection: IConnection,
  id: string & Format<"uuid">,
): Promise<void> {
  return !!connection.simulate
    ? destroy.simulate(connection, id)
    : PlainFetcher.fetch(connection, {
        ...destroy.METADATA,
        template: destroy.METADATA.path,
        path: destroy.path(id),
      });
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

  export const path = (id: string & Format<"uuid">) =>
    `/shoppings/admins/coupons/${encodeURIComponent(id ?? "null")}/destroy`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection,
    id: string & Format<"uuid">,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(id),
      contentType: "application/json",
    });
    assert.param("id")(() => typia.assert(id));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * Create a new coupon.
 *
 * Create a new {@link IShoppingCoupon coupon} with given information.
 *
 * By the way, if you are a {@link IShoppingSeller seller}, you have to
 * add include direction's {@link IShoppingCouponSellerCriteria } or
 * {@link IShoppingCouponSaleCriteria } condition. This is because only
 * {@link IShoppingAdministrator administrators} can create a coupon
 * which can be used throughout the market. Seller must limit the usage
 * range by his/her {@link IShoppingSale sale(s)}.
 *
 * Of course, when adminstrator is planning to make a general coupon
 * that can be used throughout the market, the administrator must
 * get agree from the sellers who are going to be affected.
 *
 * @param input Creation info of the coupon
 * @returns Newly created coupon
 * @tag Discount
 * @author Samchon
 *
 * @controller ShoppingAdminCouponController.create
 * @path POST /shoppings/admins/coupons
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function create(
  connection: IConnection,
  input: IShoppingCoupon.ICreate,
): Promise<create.Output> {
  return !!connection.simulate
    ? create.simulate(connection, input)
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
          path: create.path(),
        },
        input,
      );
}
export namespace create {
  export type Input = IShoppingCoupon.ICreate;
  export type Output = IShoppingCoupon;

  export const METADATA = {
    method: "POST",
    path: "/shoppings/admins/coupons",
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

  export const path = () => "/shoppings/admins/coupons";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IShoppingCoupon => typia.random<IShoppingCoupon>(g);
  export const simulate = (
    connection: IConnection,
    input: IShoppingCoupon.ICreate,
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
 * Erase a coupon.
 *
 * Erase a {@link IShoppingCoupon coupon} with given ID.
 *
 * For reference, if there're some {@link IShoppingCouponTicket tickets}
 * which are already issued from the target coupon, they would not be affected.
 * Those tickets are still valid until their expration time.
 *
 * @param id Target coupon's {@link IShoppingCoupon.id}
 * @tag Discount
 * @author Samchon
 *
 * @controller ShoppingAdminCouponController.erase
 * @path DELETE /shoppings/admins/coupons/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function erase(
  connection: IConnection,
  id: string,
): Promise<void> {
  return !!connection.simulate
    ? erase.simulate(connection, id)
    : PlainFetcher.fetch(connection, {
        ...erase.METADATA,
        template: erase.METADATA.path,
        path: erase.path(id),
      });
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

  export const path = (id: string) =>
    `/shoppings/admins/coupons/${encodeURIComponent(id ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (connection: IConnection, id: string): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(id),
      contentType: "application/json",
    });
    assert.param("id")(() => typia.assert(id));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * List up every coupons.
 *
 * List up every {@link IShoppingCoupon coupons} with pagination.
 *
 * If you want, you can limit the result by configuring
 * {@link IShoppingCoupon.IRequest.search search condition} in the request
 * body. Also, it is possible to customize sequence order of records by
 * configuring {@link IShoppingCoupon.IRequest.sort sort condition}.
 *
 * For reference, if you are a {@link IShoppingCustomer customer}, then
 * only {@link IShoppingCouponTicket ticketable} coupons would be listed up.
 * Otherwise, non-ticketable coupons would also be listed up.
 *
 * @param input Request info of pagination, searching and sorting
 * @returns Paginated coupons
 * @tag Discount
 * @author Samchon
 *
 * @controller ShoppingAdminCouponController.index
 * @path PATCH /shoppings/admins/coupons
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function index(
  connection: IConnection,
  input: IShoppingCoupon.IRequest,
): Promise<index.Output> {
  return !!connection.simulate
    ? index.simulate(connection, input)
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
          path: index.path(),
        },
        input,
      );
}
export namespace index {
  export type Input = IShoppingCoupon.IRequest;
  export type Output = IPage<IShoppingCoupon>;

  export const METADATA = {
    method: "PATCH",
    path: "/shoppings/admins/coupons",
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

  export const path = () => "/shoppings/admins/coupons";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IPage<IShoppingCoupon> => typia.random<IPage<IShoppingCoupon>>(g);
  export const simulate = (
    connection: IConnection,
    input: IShoppingCoupon.IRequest,
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
 * Get a coupon info.
 *
 * Get a {@link IShoppingCoupon coupon} information.
 *
 * If you are a {@link IShoppingCustomer customer}, then only
 * {@link IShoppingCouponTicket ticketable} coupons are accessible. Non
 * ticketable coupons cause 410 gone error. Otherwise you are a
 * {@link IShoppingSeller seller} or {@link IShoppingAdministrator administrator},
 * non-ticketable coupons are also accessible.
 *
 * @param id Target coupon's {@link IShoppingCoupon.id}
 * @returns Coupon info
 * @tag Discount
 * @author Samchon
 *
 * @controller ShoppingAdminCouponController.at
 * @path GET /shoppings/admins/coupons/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function at(
  connection: IConnection,
  id: string,
): Promise<at.Output> {
  return !!connection.simulate
    ? at.simulate(connection, id)
    : PlainFetcher.fetch(connection, {
        ...at.METADATA,
        template: at.METADATA.path,
        path: at.path(id),
      });
}
export namespace at {
  export type Output = IShoppingCoupon;

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

  export const path = (id: string) =>
    `/shoppings/admins/coupons/${encodeURIComponent(id ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IShoppingCoupon => typia.random<IShoppingCoupon>(g);
  export const simulate = (connection: IConnection, id: string): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(id),
      contentType: "application/json",
    });
    assert.param("id")(() => typia.assert(id));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}
