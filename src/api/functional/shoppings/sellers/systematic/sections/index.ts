/**
 * @packageDocumentation
 * @module api.functional.shoppings.sellers.systematic.sections
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import type { Format } from "typia/lib/tags/Format";

import type { IPage } from "../../../../../structures/common/IPage";
import type { IShoppingSection } from "../../../../../structures/shoppings/systematic/IShoppingSection";

/**
 * List up every sections.
 *
 * List up every {@link IShoppingSection sections} with pagination.
 *
 * If you want, you can limit the result by configuring
 * {@link IShoppingSection.IRequest.search search condition} in the request
 * body. Also, it is possible to customize sequence order of records by
 * configuring {@link IShoppingSection.IRequest.sort sort condition}.
 *
 * @param input Request info of pagination, searching and sorting
 * @returns Paginated sections
 * @tag Section
 * @author Samchon
 *
 * @controller ShoppingSellerSystematicSectionController.index
 * @path PATCH /shoppings/sellers/systematic/sections
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function index(
  connection: IConnection,
  input: IShoppingSection.IRequest,
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
  export type Input = IShoppingSection.IRequest;
  export type Output = IPage<IShoppingSection>;

  export const METADATA = {
    method: "PATCH",
    path: "/shoppings/sellers/systematic/sections",
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

  export const path = () => "/shoppings/sellers/systematic/sections";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IPage<IShoppingSection> => typia.random<IPage<IShoppingSection>>(g);
  export const simulate = (
    connection: IConnection,
    input: IShoppingSection.IRequest,
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
 * Get a section info.
 *
 * Get a detailed {@link IShoppingSection section} information.
 *
 * @param id Target section's {@link IShoppingSection.id }
 * @returns Detailed section info
 * @tag Section
 * @author Samchon
 *
 * @controller ShoppingSellerSystematicSectionController.at
 * @path GET /shoppings/sellers/systematic/sections/:id
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
  export type Output = IShoppingSection;

  export const METADATA = {
    method: "GET",
    path: "/shoppings/sellers/systematic/sections/:id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 200,
  } as const;

  export const path = (id: string & Format<"uuid">) =>
    `/shoppings/sellers/systematic/sections/${encodeURIComponent(id?.toString() ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IShoppingSection => typia.random<IShoppingSection>(g);
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
 * Get a section info by its code.
 *
 * Get a detailed {@link IShoppingSection section} information by its code.
 *
 * @param code Target section's {@link IShoppingSection.code }
 * @returns Detailed section info
 * @tag Section
 * @author Samchon
 *
 * @controller ShoppingSellerSystematicSectionController.get
 * @path GET /shoppings/sellers/systematic/sections/:code/get
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function get(
  connection: IConnection,
  code: string,
): Promise<get.Output> {
  return !!connection.simulate
    ? get.simulate(connection, code)
    : PlainFetcher.fetch(connection, {
        ...get.METADATA,
        template: get.METADATA.path,
        path: get.path(code),
      });
}
export namespace get {
  export type Output = IShoppingSection;

  export const METADATA = {
    method: "GET",
    path: "/shoppings/sellers/systematic/sections/:code/get",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 200,
  } as const;

  export const path = (code: string) =>
    `/shoppings/sellers/systematic/sections/${encodeURIComponent(code?.toString() ?? "null")}/get`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IShoppingSection => typia.random<IShoppingSection>(g);
  export const simulate = (connection: IConnection, code: string): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(code),
      contentType: "application/json",
    });
    assert.param("code")(() => typia.assert(code));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}
