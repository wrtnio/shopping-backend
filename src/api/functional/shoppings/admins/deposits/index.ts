/**
 * @packageDocumentation
 * @module api.functional.shoppings.admins.deposits
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import type { Format } from "typia/lib/tags/Format";

import type { IPage } from "../../../../structures/common/IPage";
import type { IShoppingDeposit } from "../../../../structures/shoppings/deposits/IShoppingDeposit";

/**
 * Get deposit metadata list.
 *
 * List up every {@link IShoppingDeposit deposit} metadata informations
 * with {@link IPage pagination}.
 *
 * If you want, you can limit the result by configuring
 * {@link IShoppingDeposit.IRequest.search search condition} in the request body.
 * Also, it is possible to customize sequence order of records by configuring
 * {@link IShoppingDeposit.IRequest.sort sort condition}.
 *
 * @param input Request info of pagination, searching and sorting
 * @returns Paginated deposit metadata list
 * @tag Discount
 * @author Samchon
 *
 * @controller ShoppingAdminDepositController.index
 * @path PATCH /shoppings/admins/deposits
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function index(
  connection: IConnection,
  input: IShoppingDeposit.IRequest,
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
  export type Input = IShoppingDeposit.IRequest;
  export type Output = IPage<IShoppingDeposit>;

  export const METADATA = {
    method: "PATCH",
    path: "/shoppings/admins/deposits",
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

  export const path = () => "/shoppings/admins/deposits";
}

/**
 * Get a deposit metadata.
 *
 * Get a {@link IShoppingDeposit deposit} metadata information with its ID.
 *
 * @param id Target deposit's {@link IShoppingDeposit.id }
 * @returns Deposit metadata
 * @tag Discount
 * @author Samchon
 *
 * @controller ShoppingAdminDepositController.at
 * @path GET /shoppings/admins/deposits/:id
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
  export type Output = IShoppingDeposit;

  export const METADATA = {
    method: "GET",
    path: "/shoppings/admins/deposits/:id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 200,
  } as const;

  export const path = (id: string & Format<"uuid">) =>
    `/shoppings/admins/deposits/${encodeURIComponent(id?.toString() ?? "null")}`;
}

/**
 * Get a deposit metadata by its code.
 *
 * Get a {@link IShoppingDeposit deposit} metadata information with its code.
 *
 * @returns Deposit metadata
 * @tag Discount
 * @author Samchon
 *
 * @controller ShoppingAdminDepositController.get
 * @path GET /shoppings/admins/deposits/:code/get
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function get(
  connection: IConnection,
  code: string,
): Promise<get.Output> {
  return PlainFetcher.fetch(connection, {
    ...get.METADATA,
    template: get.METADATA.path,
    path: get.path(code),
  });
}
export namespace get {
  export type Output = IShoppingDeposit;

  export const METADATA = {
    method: "GET",
    path: "/shoppings/admins/deposits/:code/get",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 200,
  } as const;

  export const path = (code: string) =>
    `/shoppings/admins/deposits/${encodeURIComponent(code?.toString() ?? "null")}/get`;
}

/**
 * Create a new deposit metadata.
 *
 * Create a new {@link IShoppingDeposit deposit} metadata.
 *
 * This action means that adding a new origin reason of deposit's income/outcome.
 * Of course, creating a new deposit record does not mean that automatically
 * increase or decrease the {@link IShoppingCustomer customer}'s balance
 * following the record's reason why. The logic must be developed manually
 * in the backend side.
 *
 * @param input Creation information of deposit metadata
 * @returns Newly created deposit metadata
 * @tag Discount
 * @author Samchon
 *
 * @controller ShoppingAdminDepositController.create
 * @path POST /shoppings/admins/deposits
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function create(
  connection: IConnection,
  input: IShoppingDeposit.ICreate,
): Promise<create.Output> {
  return PlainFetcher.fetch(
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
      path: create.path(),
    },
    input,
  );
}
export namespace create {
  export type Input = IShoppingDeposit.ICreate;
  export type Output = IShoppingDeposit;

  export const METADATA = {
    method: "POST",
    path: "/shoppings/admins/deposits",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 201,
  } as const;

  export const path = () => "/shoppings/admins/deposits";
}

/**
 * Erase a deposit metadata.
 *
 * Erase a {@link IShoppingDeposit deposit} metadata, so that no more
 * {@link IShoppingCustomer customer}'s balance does not be increased or
 * decreased by the deposit's reason why.
 *
 * @param id Target deposit's {@link IShoppingDeposit.id }
 * @tag Discount
 * @author Samchon
 *
 * @controller ShoppingAdminDepositController.erase
 * @path DELETE /shoppings/admins/deposits/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function erase(
  connection: IConnection,
  id: string & Format<"uuid">,
): Promise<void> {
  return PlainFetcher.fetch(connection, {
    ...erase.METADATA,
    template: erase.METADATA.path,
    path: erase.path(id),
  });
}
export namespace erase {
  export const METADATA = {
    method: "DELETE",
    path: "/shoppings/admins/deposits/:id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 200,
  } as const;

  export const path = (id: string & Format<"uuid">) =>
    `/shoppings/admins/deposits/${encodeURIComponent(id?.toString() ?? "null")}`;
}
