/**
 * @packageDocumentation
 * @module api.functional.shoppings.admins.orders
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import type { Format } from "typia/lib/tags/Format";

import type { IPage } from "../../../../structures/common/IPage";
import type { IShoppingOrder } from "../../../../structures/shoppings/orders/IShoppingOrder";

/**
 * List up every orders.
 *
 * List up every {@link IShoppingOrder orders} with pagination.
 *
 * If you want, you can limit the result by configuring
 * {@link IShoppingOrder.IRequest.search search condition} in the request
 * body. Also, it is possible to customize sequence order of records by
 * configuring {@link IShoppingOrder.IRequest.sort sort condition}.
 *
 * For reference, if you are a {@link IShoppingCustomer customer}, then
 * you can list up your own orders, and it is not a matter whether the
 * order has been {@link IShoppingOrderPublish.paid_at paid} or not.
 *
 * Otherwise you are a {@link IShoppingSeller seller} or
 * {@link IShoppingAdministrator administrator}, then you can list up
 * only paid orders. Also, in the seller case, only related
 * {@link IShoppingOrder.goods goods} would be listed up in the order.
 *
 * @param input Request info of pagination, searching and sorting
 * @returns Paginated orders
 * @tag Order
 * @author Samchon
 *
 * @controller ShoppingAdminOrderController.index
 * @path PATCH /shoppings/admins/orders
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function index(
  connection: IConnection,
  input: IShoppingOrder.IRequest,
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
  export type Input = IShoppingOrder.IRequest;
  export type Output = IPage<IShoppingOrder>;

  export const METADATA = {
    method: "PATCH",
    path: "/shoppings/admins/orders",
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

  export const path = () => "/shoppings/admins/orders";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IPage<IShoppingOrder> => typia.random<IPage<IShoppingOrder>>(g);
  export const simulate = (
    connection: IConnection,
    input: IShoppingOrder.IRequest,
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
 * Get an order info.
 *
 * Get a detailed {@link IShoppingOrder order} information.
 *
 * If you are not a {@link IShoppingCustomer customer}, then you can't
 * access to the order which has not been
 * {@link IShoppingOrderPublish.paid_at paid} yet. In that case,
 * 404 not found error would be thrown.
 *
 * @param id Target order's {@link IShoppingOrder.id }
 * @returns Order info
 * @tag Order
 * @author Samchon
 *
 * @controller ShoppingAdminOrderController.at
 * @path GET /shoppings/admins/orders/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function at(
  connection: IConnection,
  id: string & Format<"uuid">,
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
  export type Output = IShoppingOrder;

  export const METADATA = {
    method: "GET",
    path: "/shoppings/admins/orders/:id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 200,
  } as const;

  export const path = (id: string & Format<"uuid">) =>
    `/shoppings/admins/orders/${encodeURIComponent(id?.toString() ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): IShoppingOrder =>
    typia.random<IShoppingOrder>(g);
  export const simulate = (
    connection: IConnection,
    id: string & Format<"uuid">,
  ): Output => {
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
