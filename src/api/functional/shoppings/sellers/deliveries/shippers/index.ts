/**
 * @packageDocumentation
 * @module api.functional.shoppings.sellers.deliveries.shippers
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import type { Format } from "typia/lib/tags/Format";

import type { IShoppingDeliveryShipper } from "../../../../../structures/shoppings/orders/IShoppingDeliveryShipper";

/**
 * Create a new shipper.
 *
 * Create a new {@link IShoppingDeliveryShipper shipper} of the
 * {@link IShoppingDelivery delivery}.
 *
 * This action does not affect to the related {@link IShoppingOrder orders} or
 * {@link IShoppingOrderGood goods} like {@link IShoppingDeliveryJourney}
 * or {@link IShoppingDeliveryPiece} case, but just informs to the
 * {@link IShoppingCustomer customer}.
 *
 * @param deliveryId Belonged delivery's {@link IShoppingDelivery.id }
 * @param input Creation info of the shipper
 * @returns Newly created shipper
 * @tag Order
 * @author Samchon
 *
 * @controller ShoppingSellerDeliveryShipperController.create
 * @path POST /shoppings/sellers/deliveries/:deliveryId/shippers
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function create(
  connection: IConnection,
  deliveryId: string & Format<"uuid">,
  input: IShoppingDeliveryShipper.ICreate,
): Promise<create.Output> {
  return !!connection.simulate
    ? create.simulate(connection, deliveryId, input)
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
          path: create.path(deliveryId),
        },
        input,
      );
}
export namespace create {
  export type Input = IShoppingDeliveryShipper.ICreate;
  export type Output = IShoppingDeliveryShipper;

  export const METADATA = {
    method: "POST",
    path: "/shoppings/sellers/deliveries/:deliveryId/shippers",
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

  export const path = (deliveryId: string & Format<"uuid">) =>
    `/shoppings/sellers/deliveries/${encodeURIComponent(deliveryId ?? "null")}/shippers`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IShoppingDeliveryShipper => typia.random<IShoppingDeliveryShipper>(g);
  export const simulate = (
    connection: IConnection,
    deliveryId: string & Format<"uuid">,
    input: IShoppingDeliveryShipper.ICreate,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(deliveryId),
      contentType: "application/json",
    });
    assert.param("deliveryId")(() => typia.assert(deliveryId));
    assert.body(() => typia.assert(input));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}
