/**
 * @packageDocumentation
 * @module api.functional.shoppings.sellers.sales.units.stocks.supplements
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import type { Format } from "typia/lib/tags/Format";

import type { IPage } from "../../../../../../../structures/common/IPage";
import type { IShoppingSaleUnitStockSupplement } from "../../../../../../../structures/shoppings/sales/IShoppingSaleUnitStockSupplement";

/**
 * List up every supplements.
 *
 * List up every {@link IShoppingSaleUnitStockSupplement supplement histories}
 * of a specific {@link IShoppingSaleUnitStock stock}.
 *
 * If you want, you can limit the result by configuring
 * {@link IShoppingSaleUnitStockSupplement.IRequest.search search condition} in
 * the request body. Also, it is possible to customize sequence order of
 * records by configuring {@link IShoppingSaleUnitStockSupplement.IRequest.sort}
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
  input: IShoppingSaleUnitStockSupplement.IRequest,
): Promise<index.Output> {
  return !!connection.simulate
    ? index.simulate(connection, saleId, unitId, stockId, input)
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
          path: index.path(saleId, unitId, stockId),
        },
        input,
      );
}
export namespace index {
  export type Input = IShoppingSaleUnitStockSupplement.IRequest;
  export type Output = IPage<IShoppingSaleUnitStockSupplement>;

  export const METADATA = {
    method: "PATCH",
    path: "/shoppings/sellers/sales/:saleId/units/:unitId/stocks/:stockId/supplements",
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

  export const path = (
    saleId: string & Format<"uuid">,
    unitId: string & Format<"uuid">,
    stockId: string & Format<"uuid">,
  ) =>
    `/shoppings/sellers/sales/${encodeURIComponent(saleId ?? "null")}/units/${encodeURIComponent(unitId ?? "null")}/stocks/${encodeURIComponent(stockId ?? "null")}/supplements`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IPage<IShoppingSaleUnitStockSupplement> =>
    typia.random<IPage<IShoppingSaleUnitStockSupplement>>(g);
  export const simulate = (
    connection: IConnection,
    saleId: string & Format<"uuid">,
    unitId: string & Format<"uuid">,
    stockId: string & Format<"uuid">,
    input: IShoppingSaleUnitStockSupplement.IRequest,
  ): Output => {
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
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
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
  input: IShoppingSaleUnitStockSupplement.ICreate,
): Promise<create.Output> {
  return !!connection.simulate
    ? create.simulate(connection, saleId, unitId, stockId, input)
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
          path: create.path(saleId, unitId, stockId),
        },
        input,
      );
}
export namespace create {
  export type Input = IShoppingSaleUnitStockSupplement.ICreate;
  export type Output = IShoppingSaleUnitStockSupplement;

  export const METADATA = {
    method: "POST",
    path: "/shoppings/sellers/sales/:saleId/units/:unitId/stocks/:stockId/supplements",
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

  export const path = (
    saleId: string & Format<"uuid">,
    unitId: string & Format<"uuid">,
    stockId: string & Format<"uuid">,
  ) =>
    `/shoppings/sellers/sales/${encodeURIComponent(saleId ?? "null")}/units/${encodeURIComponent(unitId ?? "null")}/stocks/${encodeURIComponent(stockId ?? "null")}/supplements`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IShoppingSaleUnitStockSupplement =>
    typia.random<IShoppingSaleUnitStockSupplement>(g);
  export const simulate = (
    connection: IConnection,
    saleId: string & Format<"uuid">,
    unitId: string & Format<"uuid">,
    stockId: string & Format<"uuid">,
    input: IShoppingSaleUnitStockSupplement.ICreate,
  ): Output => {
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
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
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
  input: IShoppingSaleUnitStockSupplement.ICreate,
): Promise<void> {
  return !!connection.simulate
    ? update.simulate(connection, saleId, unitId, stockId, id, input)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...update.METADATA,
          template: update.METADATA.path,
          path: update.path(saleId, unitId, stockId, id),
        },
        input,
      );
}
export namespace update {
  export type Input = IShoppingSaleUnitStockSupplement.ICreate;

  export const METADATA = {
    method: "PUT",
    path: "/shoppings/sellers/sales/:saleId/units/:unitId/stocks/:stockId/supplements/:id",
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

  export const path = (
    saleId: string & Format<"uuid">,
    unitId: string & Format<"uuid">,
    stockId: string & Format<"uuid">,
    id: string & Format<"uuid">,
  ) =>
    `/shoppings/sellers/sales/${encodeURIComponent(saleId ?? "null")}/units/${encodeURIComponent(unitId ?? "null")}/stocks/${encodeURIComponent(stockId ?? "null")}/supplements/${encodeURIComponent(id ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection,
    saleId: string & Format<"uuid">,
    unitId: string & Format<"uuid">,
    stockId: string & Format<"uuid">,
    id: string & Format<"uuid">,
    input: IShoppingSaleUnitStockSupplement.ICreate,
  ): void => {
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
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
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
    ? erase.simulate(connection, saleId, unitId, stockId, id)
    : PlainFetcher.fetch(connection, {
        ...erase.METADATA,
        template: erase.METADATA.path,
        path: erase.path(saleId, unitId, stockId, id),
      });
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

  export const path = (
    saleId: string & Format<"uuid">,
    unitId: string & Format<"uuid">,
    stockId: string & Format<"uuid">,
    id: string & Format<"uuid">,
  ) =>
    `/shoppings/sellers/sales/${encodeURIComponent(saleId ?? "null")}/units/${encodeURIComponent(unitId ?? "null")}/stocks/${encodeURIComponent(stockId ?? "null")}/supplements/${encodeURIComponent(id ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection,
    saleId: string & Format<"uuid">,
    unitId: string & Format<"uuid">,
    stockId: string & Format<"uuid">,
    id: string & Format<"uuid">,
  ): void => {
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
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}
