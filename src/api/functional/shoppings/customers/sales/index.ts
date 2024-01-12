/**
 * @packageDocumentation
 * @module api.functional.shoppings.customers.sales
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import type { IConnection, Primitive } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import type { Format } from "typia/lib/tags/Format";

import type { IPage } from "../../../../structures/common/IPage";
import type { IShoppingSale } from "../../../../structures/shoppings/sales/IShoppingSale";
import { NestiaSimulator } from "../../../../utils/NestiaSimulator";

export * as questions from "./questions";
export * as reviews from "./reviews";
export * as snapshots from "./snapshots";

/**
 * List up every summarized sales.
 * 
 * List up every {@link IShoppingSale.ISummary summarized sales}.
 * 
 * As you can see, returned sales are summarized, not detailed. If you want
 * to get the detailed information of a sale, use {@link at } function for
 * each sale.
 * 
 * For reference, if you're a {@link IShoppingSeller seller}, you can only
 * access to the your own {@link IShoppingSale sale}s. Otherwise you're a
 * {@link IShoppingCustomer customer}, you can see only the operating
 * sales in the market. You can't see the unopened, closed, or suspended
 * sales.
 * 
 * By the way, if you want, you can limit the result by configuring
 * {@link IShoppingSale.IRequest.search search condition} in the request
 * body. Also, it is possible to customize sequence order of records by
 * configuring {@link IShoppingSale.IRequest.sort sort condition}.
 * 
 * @param input Request info of pagination, searching and sorting
 * @returns Paginated sales with summarized information
 * @tag Sale
 * @author Samchon
 * 
 * @controller ShoppingCustomerSaleController.index
 * @path PATCH /shoppings/customers/sales
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function index(
    connection: IConnection,
    input: index.Input,
): Promise<index.Output> {
    return !!connection.simulate
        ? index.simulate(
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
                  ...index.METADATA,
                  path: index.path(),
              } as const,
              input,
          );
}
export namespace index {
    export type Input = Primitive<IShoppingSale.IRequest>;
    export type Output = Primitive<IPage<IShoppingSale.ISummary>>;

    export const METADATA = {
        method: "PATCH",
        path: "/shoppings/customers/sales",
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
        return `/shoppings/customers/sales`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IPage<IShoppingSale.ISummary>> =>
        typia.random<Primitive<IPage<IShoppingSale.ISummary>>>(g);
    export const simulate = async (
        connection: IConnection,
        input: index.Input,
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
 * Get a sale info.
 * 
 * Get a {@link IShoppingSale sale} with detailed information.
 * 
 * If you're a {@link IShoppingSeller seller}, you can only access to the
 * your own {@link IShoppingSale sale}. Otherwise you're a
 * {@link IShoppingCustomer customer}, you can access to only the operating
 * sales in the market. You can't access to the unopened, closed, or suspended
 * sales.
 * 
 * @param id Target sale's {@link IShoppingSale.id}
 * @returns Detailed sale information
 * @tag Sale
 * @author Samchon
 * 
 * @controller ShoppingCustomerSaleController.at
 * @path GET /shoppings/customers/sales/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function at(
    connection: IConnection,
    id: string & Format<"uuid">,
): Promise<at.Output> {
    return !!connection.simulate
        ? at.simulate(
              connection,
              id,
          )
        : PlainFetcher.fetch(
              connection,
              {
                  ...at.METADATA,
                  path: at.path(id),
              } as const,
          );
}
export namespace at {
    export type Output = Primitive<IShoppingSale>;

    export const METADATA = {
        method: "GET",
        path: "/shoppings/customers/sales/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (id: string & Format<"uuid">): string => {
        return `/shoppings/customers/sales/${encodeURIComponent(id ?? "null")}`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingSale> =>
        typia.random<Primitive<IShoppingSale>>(g);
    export const simulate = async (
        connection: IConnection,
        id: string & Format<"uuid">,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(id),
            contentType: "application/json",
        });
        assert.param("id")(() => typia.assert(id));
        return random(
            typeof connection.simulate === 'object' &&
                connection.simulate !== null
                ? connection.simulate
                : undefined
        );
    }
}