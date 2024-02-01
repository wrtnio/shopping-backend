/**
 * @packageDocumentation
 * @module api.functional.shoppings.sellers.sales
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, Primitive } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import type { Format } from "typia/lib/tags/Format";

import type { IPage } from "../../../../structures/common/IPage";
import type { IShoppingSale } from "../../../../structures/shoppings/sales/IShoppingSale";
import type { IShoppingSaleSnapshot } from "../../../../structures/shoppings/sales/IShoppingSaleSnapshot";

export * as questions from "./questions";
export * as reviews from "./reviews";
export * as snapshots from "./snapshots";
export * as units from "./units";

/**
 * Create a sale.
 *
 * {@link IShoppingSeller Seller} creates a new {@link IShoppingSale } for
 * operation.
 *
 * For reference, sale has complicate hierarchical structure that composing
 * with {@link IShoppingSaleUnit units}, {@link IShoppingSaleUnitOption options}
 * and {@link IShoppingSaleUnitStock stocks}. Therefore, I recommend you to
 * read the {@link IShoppingSale } and related DTOs' documents before creating
 * a new sale.
 *
 * ERD (Entity Relationship Diagram) and its description document also would
 * be helpful, too.
 *
 * @param input Creation info of the sale
 * @returns Newly created sale
 * @tag Sale
 * @author Samchon
 *
 * @controller ShoppingSellerSaleController.create
 * @path POST /shoppings/sellers/sales
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function create(
  connection: IConnection,
  input: create.Input,
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
          path: create.path(),
        },
        input,
      );
}
export namespace create {
  export type Input = Primitive<IShoppingSale.ICreate>;
  export type Output = Primitive<IShoppingSale>;

  export const METADATA = {
    method: "POST",
    path: "/shoppings/sellers/sales",
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

  export const path = () => "/shoppings/sellers/sales";
  export const random = (g?: Partial<typia.IRandomGenerator>) =>
    typia.random<Primitive<IShoppingSale>>(g);
  export const simulate = (
    connection: IConnection,
    input: create.Input,
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
 * Update a sale.
 *
 * Update a {@link IShoppingSale sale} with new information.
 *
 * By the way, the sale actually does not being modified, but just make a new
 * {@link IShoppingSaleSnapshot snapshot} record of the sale. Its 1st purpose
 * is to keeping the integrity of the sale, due to modification of the sale
 * must not affect to the {@link IShoppingOrder orders} that already had been
 * applied to the sale.
 *
 * The 2nd purpose is for the A/B tests. {@link IShoppingSeller Seller} needs
 * to demonstrate operating performance by chaning price, content, and
 * composition of the product. This snapshot concept would be helpful for it.
 *
 * @param id Target sale's {@link IShoppingSale.id}
 * @param input New information of the sale
 * @returns Updated sale with new snapshot
 * @tag Sale
 * @author Samchon
 *
 * @controller ShoppingSellerSaleController.update
 * @path PUT /shoppings/sellers/sales/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function update(
  connection: IConnection,
  id: string & Format<"uuid">,
  input: update.Input,
): Promise<update.Output> {
  return !!connection.simulate
    ? update.simulate(connection, id, input)
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
          path: update.path(id),
        },
        input,
      );
}
export namespace update {
  export type Input = Primitive<IShoppingSaleSnapshot.ICreate>;
  export type Output = Primitive<IShoppingSale>;

  export const METADATA = {
    method: "PUT",
    path: "/shoppings/sellers/sales/:id",
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

  export const path = (id: string & Format<"uuid">) =>
    `/shoppings/sellers/sales/${encodeURIComponent(id ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>) =>
    typia.random<Primitive<IShoppingSale>>(g);
  export const simulate = (
    connection: IConnection,
    id: string & Format<"uuid">,
    input: update.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(id),
      contentType: "application/json",
    });
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
 * Change opening and closing time of a sale.
 *
 * Update a {@link IShoppingSale sale}'s opening and closing time.
 *
 * By the way, if the sale still be opened or closed, it is not possible to
 * change the opening time. In contrary, if the sale already had been opened
 * but still not closed, it is possible to change the closing time.
 *
 * Of course, if closing time is less than opening time or not,
 * 428 unprocessable entity error would be thrown.
 *
 * @param id Target sale's {@link IShoppingSale.id}
 * @param input New opening and closing time
 * @tag Sale
 * @author Samchon
 *
 * @controller ShoppingSellerSaleController.open
 * @path PUT /shoppings/sellers/sales/:id/open
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function open(
  connection: IConnection,
  id: string & Format<"uuid">,
  input: open.Input,
): Promise<void> {
  return !!connection.simulate
    ? open.simulate(connection, id, input)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...open.METADATA,
          path: open.path(id),
        },
        input,
      );
}
export namespace open {
  export type Input = Primitive<IShoppingSale.IUpdateOpeningTime>;

  export const METADATA = {
    method: "PUT",
    path: "/shoppings/sellers/sales/:id/open",
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

  export const path = (id: string & Format<"uuid">) =>
    `/shoppings/sellers/sales/${encodeURIComponent(id ?? "null")}/open`;
  export const random = (g?: Partial<typia.IRandomGenerator>) =>
    typia.random<Primitive<void>>(g);
  export const simulate = (
    connection: IConnection,
    id: string & Format<"uuid">,
    input: open.Input,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(id),
      contentType: "application/json",
    });
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
 * Get replica of a sale.
 *
 * Get a {@link IShoppingSale.ICreate } typed info of the target sale for
 * replication.
 *
 * It would be useful for creating a new replication
 * {@link IShoppingSale sale} with similar innformatiopn.
 *
 * @param id Target sale's {@link IShoppingSale.id}
 * @returns Creation info of the sale for replication
 * @tag Sale
 * @author Samchon
 *
 * @controller ShoppingSellerSaleController.replica
 * @path POST /shoppings/sellers/sales/:id/replica
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function replica(
  connection: IConnection,
  id: string & Format<"uuid">,
): Promise<replica.Output> {
  return !!connection.simulate
    ? replica.simulate(connection, id)
    : PlainFetcher.fetch(connection, {
        ...replica.METADATA,
        path: replica.path(id),
      });
}
export namespace replica {
  export type Output = Primitive<IShoppingSale.ICreate>;

  export const METADATA = {
    method: "POST",
    path: "/shoppings/sellers/sales/:id/replica",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (id: string & Format<"uuid">) =>
    `/shoppings/sellers/sales/${encodeURIComponent(id ?? "null")}/replica`;
  export const random = (g?: Partial<typia.IRandomGenerator>) =>
    typia.random<Primitive<IShoppingSale.ICreate>>(g);
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

/**
 * Pause a sale.
 *
 * Pause a {@link IShoppingSale sale} from {@link open opened} state.
 * Therefore, the sale can not be operated again until it be
 * {@link restore restored}. By the way, {@link IShoppingCustomer customer}
 * still can sale from the {@link index } and {@link at } API endpints, but
 * "paused" label would be attached.
 *
 * Also, customer no more can put into the shopping cart, either.
 * Even the sale already had been put into the shopping cart, the
 * {@link IShoppingCartCommodity commodity} will not be listed on the
 * shopping cart. Also, it is not possible to appling an
 * {@link IShoppingOrder order} with the paused sale's commodity, either.
 *
 * By the way, if the sale already had been applied to an order, the order
 * can be {@link IShoppingOrderPublish published} and
 * {@link IShoppingSeller seller} must {@link IShoppingDelivery deliver} the
 * good to the customer.
 *
 * @param id Target sale's {@link IShoppingSale.id}
 * @tag Sale
 * @author Samchon
 *
 * @controller ShoppingSellerSaleController.pause
 * @path DELETE /shoppings/sellers/sales/:id/pause
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function pause(
  connection: IConnection,
  id: string & Format<"uuid">,
): Promise<void> {
  return !!connection.simulate
    ? pause.simulate(connection, id)
    : PlainFetcher.fetch(connection, {
        ...pause.METADATA,
        path: pause.path(id),
      });
}
export namespace pause {
  export const METADATA = {
    method: "DELETE",
    path: "/shoppings/sellers/sales/:id/pause",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (id: string & Format<"uuid">) =>
    `/shoppings/sellers/sales/${encodeURIComponent(id ?? "null")}/pause`;
  export const random = (g?: Partial<typia.IRandomGenerator>) =>
    typia.random<Primitive<void>>(g);
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
 * Suspend a sale.
 *
 * Suspend a {@link IShoppingSale sale} from {@link open opened} state.
 * Therefore, the sale can not be operated again until it be
 * {@link restore restored} and {@link IShoppingCustomer customer} cannot
 * see the sale from the {@link index } and {@link at } API.
 *
 * Also, customer no more can put into the shopping cart, either.
 * Even the sale already had been put into the shopping cart, the
 * {@link IShoppingCartCommodity commodity} will not be listed on the
 * shopping cart. Also, it is not possible to appling an
 * {@link IShoppingOrder order} with the suspended sale's commodity, either.
 *
 * By the way, if the sale already had been applied to an order, the order
 * can be {@link IShoppingOrderPublish published} and
 * {@link IShoppingSeller seller} must {@link IShoppingDelivery deliver} the
 * good to the customer.
 *
 * @param id Target sale's {@link IShoppingSale.id}
 * @tag Sale
 * @author Samchon
 *
 * @controller ShoppingSellerSaleController.suspend
 * @path DELETE /shoppings/sellers/sales/:id/suspend
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function suspend(
  connection: IConnection,
  id: string & Format<"uuid">,
): Promise<void> {
  return !!connection.simulate
    ? suspend.simulate(connection, id)
    : PlainFetcher.fetch(connection, {
        ...suspend.METADATA,
        path: suspend.path(id),
      });
}
export namespace suspend {
  export const METADATA = {
    method: "DELETE",
    path: "/shoppings/sellers/sales/:id/suspend",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (id: string & Format<"uuid">) =>
    `/shoppings/sellers/sales/${encodeURIComponent(id ?? "null")}/suspend`;
  export const random = (g?: Partial<typia.IRandomGenerator>) =>
    typia.random<Primitive<void>>(g);
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
 * Restore a sale
 *
 * Restore a {@link IShoppingSale sale} from {@link pause paused} or
 * {@link suspend suspended} state
 *
 * Therefore the sale can be operated again if its
 * {@link IShoppingSale.closed_at closing time} has not been reached.
 * Also, if a {@link IShoppingCustomer customer} had put the sale into the
 * shopping cart when being paused or suspended, the
 * {@link IShoppingCartCommodity commodity} will be listed again on the
 * shopping cart.
 *
 * @param id Target sale's {@link IShoppingSale.id}
 * @tag Sale
 * @author Samchon
 *
 * @controller ShoppingSellerSaleController.restore
 * @path PUT /shoppings/sellers/sales/:id/restore
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function restore(
  connection: IConnection,
  id: string & Format<"uuid">,
): Promise<void> {
  return !!connection.simulate
    ? restore.simulate(connection, id)
    : PlainFetcher.fetch(connection, {
        ...restore.METADATA,
        path: restore.path(id),
      });
}
export namespace restore {
  export const METADATA = {
    method: "PUT",
    path: "/shoppings/sellers/sales/:id/restore",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (id: string & Format<"uuid">) =>
    `/shoppings/sellers/sales/${encodeURIComponent(id ?? "null")}/restore`;
  export const random = (g?: Partial<typia.IRandomGenerator>) =>
    typia.random<Primitive<void>>(g);
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
 * @controller ShoppingSellerSaleController.index
 * @path PATCH /shoppings/sellers/sales
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function index(
  connection: IConnection,
  input: index.Input,
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
          path: index.path(),
        },
        input,
      );
}
export namespace index {
  export type Input = Primitive<IShoppingSale.IRequest>;
  export type Output = Primitive<IPage<IShoppingSale.ISummary>>;

  export const METADATA = {
    method: "PATCH",
    path: "/shoppings/sellers/sales",
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

  export const path = () => "/shoppings/sellers/sales";
  export const random = (g?: Partial<typia.IRandomGenerator>) =>
    typia.random<Primitive<IPage<IShoppingSale.ISummary>>>(g);
  export const simulate = (
    connection: IConnection,
    input: index.Input,
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
 * @controller ShoppingSellerSaleController.at
 * @path GET /shoppings/sellers/sales/:id
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
        path: at.path(id),
      });
}
export namespace at {
  export type Output = Primitive<IShoppingSale>;

  export const METADATA = {
    method: "GET",
    path: "/shoppings/sellers/sales/:id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (id: string & Format<"uuid">) =>
    `/shoppings/sellers/sales/${encodeURIComponent(id ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>) =>
    typia.random<Primitive<IShoppingSale>>(g);
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
