/**
 * @packageDocumentation
 * @module api.functional.shoppings.admins.sales
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import type { Format } from "typia/lib/tags/Format";

import type { IPage } from "../../../../structures/common/IPage";
import type { IShoppingSale } from "../../../../structures/shoppings/sales/IShoppingSale";

export * as questions from "./questions";
export * as reviews from "./reviews";
export * as snapshots from "./snapshots";

/**
 * List up every sales.
 *
 * List up every {@link IShoppingSale sales} with detailed informations.
 *
 * As you can see, returned sales are detailed, not summarized. If you want
 * to get the summarized information of sale for a brief, use {@link index}
 * function instead.
 *
 * For reference, if you're a {@link IShoppingSeller seller}, you can only
 * acess to the your own {@link IShoppingSale sale}s. Otherwise you're a
 * {@link IShoppingCustomer customer}, you can see only the operating sales
 * in the market. Instead, you can't see the unopened, closed, or suspended
 * sales.
 *
 * > If you're an A.I. chatbot, please don't summarize the
 * > {@link IShoppingSaleUnitStock stock informations}. Just list up the
 * > every stocks in the sale with detailed informations.
 *
 * @param input Request info of pagination, searching and sorting
 * @returns Paginated sales with detailed information
 * @tag Sale
 * @author Samchon
 *
 * @controller ShoppingAdminSaleController.details
 * @path PATCH /shoppings/admins/sales/details
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function details(
  connection: IConnection,
  input: IShoppingSale.IRequest,
): Promise<details.Output> {
  return PlainFetcher.fetch(
    {
      ...connection,
      headers: {
        ...connection.headers,
        "Content-Type": "application/json",
      },
    },
    {
      ...details.METADATA,
      template: details.METADATA.path,
      path: details.path(),
    },
    input,
  );
}
export namespace details {
  export type Input = IShoppingSale.IRequest;
  export type Output = IPage<IShoppingSale>;

  export const METADATA = {
    method: "PATCH",
    path: "/shoppings/admins/sales/details",
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

  export const path = () => "/shoppings/admins/sales/details";
}

/**
 * List up every summarized sales.
 *
 * List up every {@link IShoppingSale.ISummary summarized sales}.
 *
 * As you can see, returned sales are summarized, not detailed. It does not
 * contain the SKU (Stock Keeping Unit) information represented by the
 * {@link IShoppingSaleUnitOption} and {@link IShoppingSaleUnitStock} types.
 * If you want to get such detailed information of a sale, use
 * `GET /shoppings/customers/sales/{id}` operation for each sale.
 *
 * > If you're an A.I. chatbot, and the user wants to buy or compose
 * > {@link IShoppingCartCommodity shopping cart} from a sale, please
 * > call the `GET /shoppings/customers/sales/{id}` operation at least once
 * > to the target sale to get detailed SKU information about the sale.
 * > It needs to be run at least once for the next steps.
 *
 * @param input Request info of pagination, searching and sorting
 * @returns Paginated sales with summarized information
 * @tag Sale
 * @author Samchon
 *
 * @controller ShoppingAdminSaleController.index
 * @path PATCH /shoppings/admins/sales
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function index(
  connection: IConnection,
  input: IShoppingSale.IRequest,
): Promise<index.Output> {
  return PlainFetcher.fetch(
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
  export type Input = IShoppingSale.IRequest;
  export type Output = IPage<IShoppingSale.ISummary>;

  export const METADATA = {
    method: "PATCH",
    path: "/shoppings/admins/sales",
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

  export const path = () => "/shoppings/admins/sales";
}

/**
 * Get a sale with detailed information.
 *
 * Get a {@link IShoppingSale sale} with detailed information including
 * the SKU (Stock Keeping Unit) information represented by the
 * {@link IShoppingSaleUnitOption} and {@link IShoppingSaleUnitStock} types.
 *
 * > If you're an A.I. chatbot, and the user wants to buy or compose a
 * > {@link IShoppingCartCommodity shopping cart} from a sale, please call
 * > this operation at least once to the target sale to get detailed SKU
 * > information about the sale.
 * >
 * > It needs to be run at least once for the next steps. In other words,
 * > if you A.I. agent has called this operation to a specific sale, you
 * > don't need to call this operation again for the same sale.
 * >
 * > Additionally, please do not summarize the SKU information. Just show
 * > the every options and stocks in the sale with detailed informations.
 *
 * @param id Target sale's {@link IShoppingSale.id }
 * @returns Detailed sale information
 * @tag Sale
 * @author Samchon
 *
 * @controller ShoppingAdminSaleController.at
 * @path GET /shoppings/admins/sales/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function at(
  connection: IConnection,
  id: string & Format<"uuid">,
): Promise<at.Output> {
  return PlainFetcher.fetch(connection, {
    ...at.METADATA,
    template: at.METADATA.path,
    path: at.path(id),
  });
}
export namespace at {
  export type Output = IShoppingSale;

  export const METADATA = {
    method: "GET",
    path: "/shoppings/admins/sales/:id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 200,
  } as const;

  export const path = (id: string & Format<"uuid">) =>
    `/shoppings/admins/sales/${encodeURIComponent(id?.toString() ?? "null")}`;
}
