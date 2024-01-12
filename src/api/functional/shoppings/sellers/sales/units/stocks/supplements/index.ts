/**
 * @packageDocumentation
 * @module api.functional.shoppings.sellers.sales.units.stocks.supplements
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import type { IConnection, Primitive } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import type { Format } from "typia/lib/tags/Format";

import type { IPage } from "../../../../../../../structures/common/IPage";
import type { IShoppingSaleUnitStockSupplement } from "../../../../../../../structures/shoppings/sales/IShoppingSaleUnitStockSupplement";
import { NestiaSimulator } from "../../../../../../../utils/NestiaSimulator";

/**
 * List up every supplements.
 * 
 * List up every {@link IShoppingSaleUnitStockSupplement supplement histories}
 * of a specific {@link IShoppingSaleUnitStock stock}.
 * 
 * If you want, you can limit the result by configuring
 * {@link IShoppingSaleUnitStockSupplement.IRequest.search search condition} in
 * the request body. Also, it is possible to customize sequence order of
 * records by configuring {@link IShoppingSaleUnitStockSupplement.IRequest.sort }
 * property.
 * 
 * @param saleId Belonged sale's {@link IShoppingSale.id }
 * @param unitId Belonged unit's {@link IShoppingSaleUnit.id }
 * @param stockId Target stock's {@link IShoppingSaleUnitStock.id }
 * @param input Request info of pagination, searching and sorting
 * @returns Paginated supplements
 * @tag Sale
 * @author Samchon
 * 
 * @controller ShoppingSellerSaleUnitStockSupplementController.index
 * @path PATCH /shoppings/sellers/sales/:saleId/units/:unitId/stocks/:stockId/supplements
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function index(
    connection: IConnection,
    saleId: string & Format<"uuid">,
    unitId: string & Format<"uuid">,
    stockId: string & Format<"uuid">,
    input: index.Input,
): Promise<index.Output> {
    return !!connection.simulate
        ? index.simulate(
              connection,
              saleId,
              unitId,
              stockId,
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
                  path: index.path(saleId, unitId, stockId),
              } as const,
              input,
          );
}
export namespace index {
    export type Input = Primitive<IShoppingSaleUnitStockSupplement.IRequest>;
    export type Output = Primitive<IPage<IShoppingSaleUnitStockSupplement>>;

    export const METADATA = {
        method: "PATCH",
        path: "/shoppings/sellers/sales/:saleId/units/:unitId/stocks/:stockId/supplements",
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

    export const path = (saleId: string & Format<"uuid">, unitId: string & Format<"uuid">, stockId: string & Format<"uuid">): string => {
        return `/shoppings/sellers/sales/${encodeURIComponent(saleId ?? "null")}/units/${encodeURIComponent(unitId ?? "null")}/stocks/${encodeURIComponent(stockId ?? "null")}/supplements`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IPage<IShoppingSaleUnitStockSupplement>> =>
        typia.random<Primitive<IPage<IShoppingSaleUnitStockSupplement>>>(g);
    export const simulate = async (
        connection: IConnection,
        saleId: string & Format<"uuid">,
        unitId: string & Format<"uuid">,
        stockId: string & Format<"uuid">,
        input: index.Input,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(saleId, unitId, stockId),
            contentType: "application/json",
        });
        assert.param("saleId")(() => typia.assert(saleId));
        assert.param("unitId")(() => typia.assert(unitId));
        assert.param("stockId")(() => typia.assert(stockId));
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
 * Create a supplement.
 * 
 * Create a {@link IShoppingSaleUnitStockSupplement supplement history} of a
 * specific {@link IShoppingSaleUnitStock stock}.
 * 
 * Therefore, {@link IShoppingSaleUnitStockInventory.income inventory} of the
 * target stock will be increased by the
 * {@link IShoppingSaleUnitStockSupplement.value supplement's value}.
 * 
 * @param saleId Belonged sale's {@link IShoppingSale.id }
 * @param unitId Belonged unit's {@link IShoppingSaleUnit.id }
 * @param stockId Target stock's {@link IShoppingSaleUnitStock.id }
 * @param input Ceate info of the supplement
 * @returns Created supplement
 * @tag Sale
 * @author Samchon
 * 
 * @controller ShoppingSellerSaleUnitStockSupplementController.create
 * @path POST /shoppings/sellers/sales/:saleId/units/:unitId/stocks/:stockId/supplements
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function create(
    connection: IConnection,
    saleId: string & Format<"uuid">,
    unitId: string & Format<"uuid">,
    stockId: string & Format<"uuid">,
    input: create.Input,
): Promise<create.Output> {
    return !!connection.simulate
        ? create.simulate(
              connection,
              saleId,
              unitId,
              stockId,
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
                  path: create.path(saleId, unitId, stockId),
              } as const,
              input,
          );
}
export namespace create {
    export type Input = Primitive<IShoppingSaleUnitStockSupplement.ICreate>;
    export type Output = Primitive<IShoppingSaleUnitStockSupplement>;

    export const METADATA = {
        method: "POST",
        path: "/shoppings/sellers/sales/:saleId/units/:unitId/stocks/:stockId/supplements",
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

    export const path = (saleId: string & Format<"uuid">, unitId: string & Format<"uuid">, stockId: string & Format<"uuid">): string => {
        return `/shoppings/sellers/sales/${encodeURIComponent(saleId ?? "null")}/units/${encodeURIComponent(unitId ?? "null")}/stocks/${encodeURIComponent(stockId ?? "null")}/supplements`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingSaleUnitStockSupplement> =>
        typia.random<Primitive<IShoppingSaleUnitStockSupplement>>(g);
    export const simulate = async (
        connection: IConnection,
        saleId: string & Format<"uuid">,
        unitId: string & Format<"uuid">,
        stockId: string & Format<"uuid">,
        input: create.Input,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(saleId, unitId, stockId),
            contentType: "application/json",
        });
        assert.param("saleId")(() => typia.assert(saleId));
        assert.param("unitId")(() => typia.assert(unitId));
        assert.param("stockId")(() => typia.assert(stockId));
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
 * Update a supplement.
 * 
 * Update quantity value of a {@link IShoppingSaleUnitStockSupplement supplement}
 * of a specific {@link IShoppingSaleUnitStock stock}.
 * 
 * Therefore, {@link IShoppingSaleUnitStockInventory.income inventory} of the
 * target stock will be changed by the
 * {@link IShoppingSaleUnitStockSupplement.value supplement's value}.
 * 
 * @param saleId Belonged sale's {@link IShoppingSale.id }
 * @param unitId Belonged unit's {@link IShoppingSaleUnit.id }
 * @param stockId Target stock's {@link IShoppingSaleUnitStock.id }
 * @param id Target supplement's {@link IShoppingSaleUnitStockSupplement.id}
 * @param input Update info (quantity) of the supplement
 * @tag Sale
 * @author Samchon
 * 
 * @controller ShoppingSellerSaleUnitStockSupplementController.update
 * @path PUT /shoppings/sellers/sales/:saleId/units/:unitId/stocks/:stockId/supplements/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function update(
    connection: IConnection,
    saleId: string & Format<"uuid">,
    unitId: string & Format<"uuid">,
    stockId: string & Format<"uuid">,
    id: string & Format<"uuid">,
    input: update.Input,
): Promise<void> {
    return !!connection.simulate
        ? update.simulate(
              connection,
              saleId,
              unitId,
              stockId,
              id,
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
                  ...update.METADATA,
                  path: update.path(saleId, unitId, stockId, id),
              } as const,
              input,
          );
}
export namespace update {
    export type Input = Primitive<IShoppingSaleUnitStockSupplement.ICreate>;

    export const METADATA = {
        method: "PUT",
        path: "/shoppings/sellers/sales/:saleId/units/:unitId/stocks/:stockId/supplements/:id",
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

    export const path = (saleId: string & Format<"uuid">, unitId: string & Format<"uuid">, stockId: string & Format<"uuid">, id: string & Format<"uuid">): string => {
        return `/shoppings/sellers/sales/${encodeURIComponent(saleId ?? "null")}/units/${encodeURIComponent(unitId ?? "null")}/stocks/${encodeURIComponent(stockId ?? "null")}/supplements/${encodeURIComponent(id ?? "null")}`;
    }
    export const simulate = async (
        connection: IConnection,
        saleId: string & Format<"uuid">,
        unitId: string & Format<"uuid">,
        stockId: string & Format<"uuid">,
        id: string & Format<"uuid">,
        input: update.Input,
    ): Promise<void> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(saleId, unitId, stockId, id),
            contentType: "application/json",
        });
        assert.param("saleId")(() => typia.assert(saleId));
        assert.param("unitId")(() => typia.assert(unitId));
        assert.param("stockId")(() => typia.assert(stockId));
        assert.param("id")(() => typia.assert(id));
        assert.body(() => typia.assert(input));
    }
}

/**
 * Erase a supplement.
 * 
 * Erase a {@link IShoppingSaleUnitStockSupplement supplement} of a specific
 * {@link IShoppingSaleUnitStock stock}.
 * 
 * Therefore, {@link IShoppingSaleUnitStockInventory.income inventory} of the
 * target stock will be decreased by the
 * {@link IShoppingSaleUnitStockSupplement.value supplement's value}.
 * 
 * @param saleId Belonged sale's {@link IShoppingSale.id }
 * @param unitId Belonged unit's {@link IShoppingSaleUnit.id }
 * @param stockId Target stock's {@link IShoppingSaleUnitStock.id }
 * @param id Target supplement's {@link IShoppingSaleUnitStockSupplement.id}
 * @tag Sale
 * @author Samchon
 * 
 * @controller ShoppingSellerSaleUnitStockSupplementController.erase
 * @path DELETE /shoppings/sellers/sales/:saleId/units/:unitId/stocks/:stockId/supplements/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function erase(
    connection: IConnection,
    saleId: string & Format<"uuid">,
    unitId: string & Format<"uuid">,
    stockId: string & Format<"uuid">,
    id: string & Format<"uuid">,
): Promise<void> {
    return !!connection.simulate
        ? erase.simulate(
              connection,
              saleId,
              unitId,
              stockId,
              id,
          )
        : PlainFetcher.fetch(
              connection,
              {
                  ...erase.METADATA,
                  path: erase.path(saleId, unitId, stockId, id),
              } as const,
          );
}
export namespace erase {

    export const METADATA = {
        method: "DELETE",
        path: "/shoppings/sellers/sales/:saleId/units/:unitId/stocks/:stockId/supplements/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (saleId: string & Format<"uuid">, unitId: string & Format<"uuid">, stockId: string & Format<"uuid">, id: string & Format<"uuid">): string => {
        return `/shoppings/sellers/sales/${encodeURIComponent(saleId ?? "null")}/units/${encodeURIComponent(unitId ?? "null")}/stocks/${encodeURIComponent(stockId ?? "null")}/supplements/${encodeURIComponent(id ?? "null")}`;
    }
    export const simulate = async (
        connection: IConnection,
        saleId: string & Format<"uuid">,
        unitId: string & Format<"uuid">,
        stockId: string & Format<"uuid">,
        id: string & Format<"uuid">,
    ): Promise<void> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(saleId, unitId, stockId, id),
            contentType: "application/json",
        });
        assert.param("saleId")(() => typia.assert(saleId));
        assert.param("unitId")(() => typia.assert(unitId));
        assert.param("stockId")(() => typia.assert(stockId));
        assert.param("id")(() => typia.assert(id));
    }
}