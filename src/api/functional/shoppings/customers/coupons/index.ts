/**
 * @packageDocumentation
 * @module api.functional.shoppings.customers.coupons
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import type { IPage } from "../../../../structures/common/IPage";
import type { IShoppingCoupon } from "../../../../structures/shoppings/coupons/IShoppingCoupon";

export * as tickets from "./tickets";

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
 * @controller ShoppingCustomerCouponController.index
 * @path PATCH /shoppings/customers/coupons
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
    path: "/shoppings/customers/coupons",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 200,
  } as const;

  export const path = () => "/shoppings/customers/coupons";
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
 * @param id Target coupon's {@link IShoppingCoupon.id }
 * @returns Coupon info
 * @tag Discount
 * @author Samchon
 *
 * @controller ShoppingCustomerCouponController.at
 * @path GET /shoppings/customers/coupons/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function at(
  connection: IConnection,
  id: string,
): Promise<at.Output> {
  return !!connection.simulate
    ? at.simulate(connection, id)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...at.METADATA,
          template: at.METADATA.path,
          path: at.path(id),
        },
      );
}
export namespace at {
  export type Output = IShoppingCoupon;

  export const METADATA = {
    method: "GET",
    path: "/shoppings/customers/coupons/:id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 200,
  } as const;

  export const path = (id: string) =>
    `/shoppings/customers/coupons/${encodeURIComponent(id?.toString() ?? "null")}`;
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
