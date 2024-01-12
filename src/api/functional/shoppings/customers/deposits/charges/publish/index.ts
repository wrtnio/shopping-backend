/**
 * @packageDocumentation
 * @module api.functional.shoppings.customers.deposits.charges.publish
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import type { IConnection, Primitive } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import type { Format } from "typia/lib/tags/Format";

import type { IShoppingDepositChargePublish } from "../../../../../../structures/shoppings/deposits/IShoppingDepositChargePublish";
import { NestiaSimulator } from "../../../../../../utils/NestiaSimulator";

/**
 * Check publishable.
 * 
 * Test whether the {@link IShoppingDepositCharge charge} is publishable or not.
 * 
 * If the charge has not been {@link IShoppingDepositChargePublish published} and
 * not deleted yet, then it is possible to publish the charge
 * 
 * @param chargeId Target charge's {@link IShoppingDepositCharge.id }
 * @returns Whether the charge is publishable or not
 * @tag Discount
 * @author Samchon
 * 
 * @controller ShoppingCustomerDepositChargePublishController.able
 * @path GET /shoppings/customers/deposits/charges/:chargeId/publish/able
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function able(
    connection: IConnection,
    chargeId: string & Format<"uuid">,
): Promise<able.Output> {
    return !!connection.simulate
        ? able.simulate(
              connection,
              chargeId,
          )
        : PlainFetcher.fetch(
              connection,
              {
                  ...able.METADATA,
                  path: able.path(chargeId),
              } as const,
          );
}
export namespace able {
    export type Output = Primitive<false | true>;

    export const METADATA = {
        method: "GET",
        path: "/shoppings/customers/deposits/charges/:chargeId/publish/able",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (chargeId: string & Format<"uuid">): string => {
        return `/shoppings/customers/deposits/charges/${encodeURIComponent(chargeId ?? "null")}/publish/able`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<false | true> =>
        typia.random<Primitive<false | true>>(g);
    export const simulate = async (
        connection: IConnection,
        chargeId: string & Format<"uuid">,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(chargeId),
            contentType: "application/json",
        });
        assert.param("chargeId")(() => typia.assert(chargeId));
        return random(
            typeof connection.simulate === 'object' &&
                connection.simulate !== null
                ? connection.simulate
                : undefined
        );
    }
}

/**
 * Publish a charge.
 * 
 * {@link IShoppingDepositChargePublish Publish} a
 * {@link IShoppingDepositCharge charge} that has been applied by the
 * {@link IShoppingCustomer } with payment information gotten from the
 * payment vendor system.
 * 
 * Also, the payment time can be different with the publish time. For example,
 * if the payment method is manual bank account transfer, then the payment
 * would be delayed until the customer actually transfer the money. In that
 * case, {@link IShoppingDepositChargePublish.paid_at } would be `null` value,
 * so that you have to check it after calling this publish function.
 * 
 * @param chargeId Target charge's {@link IShoppingDepositCharge.id }
 * @param input Creation info of the publish
 * @returns Newly created publish
 * @tag Discount
 * @author Samchon
 * 
 * @controller ShoppingCustomerDepositChargePublishController.create
 * @path POST /shoppings/customers/deposits/charges/:chargeId/publish
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function create(
    connection: IConnection,
    chargeId: string & Format<"uuid">,
    input: create.Input,
): Promise<create.Output> {
    return !!connection.simulate
        ? create.simulate(
              connection,
              chargeId,
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
                  path: create.path(chargeId),
              } as const,
              input,
          );
}
export namespace create {
    export type Input = Primitive<IShoppingDepositChargePublish.ICreate>;
    export type Output = Primitive<IShoppingDepositChargePublish>;

    export const METADATA = {
        method: "POST",
        path: "/shoppings/customers/deposits/charges/:chargeId/publish",
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

    export const path = (chargeId: string & Format<"uuid">): string => {
        return `/shoppings/customers/deposits/charges/${encodeURIComponent(chargeId ?? "null")}/publish`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingDepositChargePublish> =>
        typia.random<Primitive<IShoppingDepositChargePublish>>(g);
    export const simulate = async (
        connection: IConnection,
        chargeId: string & Format<"uuid">,
        input: create.Input,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(chargeId),
            contentType: "application/json",
        });
        assert.param("chargeId")(() => typia.assert(chargeId));
        assert.body(() => typia.assert(input));
        return random(
            typeof connection.simulate === 'object' &&
                connection.simulate !== null
                ? connection.simulate
                : undefined
        );
    }
}