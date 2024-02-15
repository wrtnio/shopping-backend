/**
 * @packageDocumentation
 * @module api.functional.shoppings.customers.orders.publish
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import type { Format } from "typia/lib/tags/Format";

import type { IShoppingOrderPublish } from "../../../../../structures/shoppings/orders/IShoppingOrderPublish";

/**
 * Check publishable.
 *
 * Test whether the {@link IShoppingOrder order} is publishable or not.
 *
 * If the order has not been {@link IShoppingOrderPublish published} and
 * not deleted yet, then it is possible to publish the order. Even thouogh
 * target {@link IShoppingSale sale} is suspended or
 * {@link IShoppingSaleUnitStockInventory out of stock}, it is still possible
 * to publish because the order already has been applied.
 *
 * @param orderId Target order's {@link IShoppingOrder.id }
 * @returns Whether the order is publishable or not
 * @tag Order
 * @author Samchon
 *
 * @controller ShoppingCustomerOrderPublishController.able
 * @path GET /shoppings/customers/orders/:orderId/publish/able
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function able(
  connection: IConnection,
  orderId: string & Format<"uuid">,
): Promise<able.Output> {
  return !!connection.simulate
    ? able.simulate(connection, orderId)
    : PlainFetcher.fetch(connection, {
        ...able.METADATA,
        path: able.path(orderId),
      });
}
export namespace able {
  export type Output = false | true;

  export const METADATA = {
    method: "GET",
    path: "/shoppings/customers/orders/:orderId/publish/able",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (orderId: string & Format<"uuid">) =>
    `/shoppings/customers/orders/${encodeURIComponent(orderId ?? "null")}/publish/able`;
  export const random = (g?: Partial<typia.IRandomGenerator>): false | true =>
    typia.random<false | true>(g);
  export const simulate = (
    connection: IConnection,
    orderId: string & Format<"uuid">,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(orderId),
      contentType: "application/json",
    });
    assert.param("orderId")(() => typia.assert(orderId));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * Publish an order.
 *
 * {@link IShoppingOrderPublish Publish} an {@link IShoppingOrder order} that
 * has been applied by the {@link IShoppingCustomer } with
 * {@link IShoppingAddress address} to delivery and payment information gotten
 * from the payment vendor system.
 *
 * If the order has been discounted for entire order price, then no need
 * to send payment vendor info. Instead, only address info is required.
 *
 * Also, the payment time can be different with the publish time. For example,
 * if the payment method is manual bank account transfer, then the payment
 * would be delayed until the customer actually transfer the money. In that
 * case, {@link IShoppingOrderPublish.paid_at } would be `null` value, so
 * that you have to check it after calling this publish function.
 *
 * @param orderId Target order's {@link IShoppingOrder.id }
 * @param input Creation info of the publish
 * @returns Newly created publish
 * @tag Order
 * @author Samchon
 *
 * @controller ShoppingCustomerOrderPublishController.create
 * @path POST /shoppings/customers/orders/:orderId/publish
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function create(
  connection: IConnection,
  orderId: string & Format<"uuid">,
  input: IShoppingOrderPublish.ICreate,
): Promise<create.Output> {
  return !!connection.simulate
    ? create.simulate(connection, orderId, input)
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
          path: create.path(orderId),
        },
        input,
      );
}
export namespace create {
  export type Input = IShoppingOrderPublish.ICreate;
  export type Output = IShoppingOrderPublish;

  export const METADATA = {
    method: "POST",
    path: "/shoppings/customers/orders/:orderId/publish",
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

  export const path = (orderId: string & Format<"uuid">) =>
    `/shoppings/customers/orders/${encodeURIComponent(orderId ?? "null")}/publish`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IShoppingOrderPublish => typia.random<IShoppingOrderPublish>(g);
  export const simulate = (
    connection: IConnection,
    orderId: string & Format<"uuid">,
    input: IShoppingOrderPublish.ICreate,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(orderId),
      contentType: "application/json",
    });
    assert.param("orderId")(() => typia.assert(orderId));
    assert.body(() => typia.assert(input));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * Cancel the publish (payment).
 *
 * Cancel payment of an {@link IShoppingOrder order} that has been
 * {@link IShoppingOrderPublish published}.
 *
 * If target publish's payment method is manual bank account transfer,
 * then it would be cancelled directly. If not, then payment cancel
 * request would be sent to the payment vendor system.
 *
 * @param orderId Target order's {@link IShoppingOrder.id }
 * @tag Order
 * @author Samchon
 *
 * @controller ShoppingCustomerOrderPublishController.cancel
 * @path DELETE /shoppings/customers/orders/:orderId/publish
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function cancel(
  connection: IConnection,
  orderId: string & Format<"uuid">,
): Promise<void> {
  return !!connection.simulate
    ? cancel.simulate(connection, orderId)
    : PlainFetcher.fetch(connection, {
        ...cancel.METADATA,
        path: cancel.path(orderId),
      });
}
export namespace cancel {
  export const METADATA = {
    method: "DELETE",
    path: "/shoppings/customers/orders/:orderId/publish",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (orderId: string & Format<"uuid">) =>
    `/shoppings/customers/orders/${encodeURIComponent(orderId ?? "null")}/publish`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection,
    orderId: string & Format<"uuid">,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(orderId),
      contentType: "application/json",
    });
    assert.param("orderId")(() => typia.assert(orderId));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}
