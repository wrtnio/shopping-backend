/**
 * @packageDocumentation
 * @module api.functional.shoppings.admins.sales.questions
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import type { IConnection, Primitive } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import type { Format } from "typia/lib/tags/Format";

import type { IPage } from "../../../../../structures/common/IPage";
import type { IShoppingSaleQuestion } from "../../../../../structures/shoppings/sales/inquiries/IShoppingSaleQuestion";
import { NestiaSimulator } from "../../../../../utils/NestiaSimulator";

export * as comments from "./comments";

/**
 * @controller ShoppingAdminSaleQuestionController.index
 * @path PATCH /shoppings/admins/sales/:saleId/questions
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function index(
    connection: IConnection,
    saleId: string & Format<"uuid">,
    input: index.Input,
): Promise<index.Output> {
    return !!connection.simulate
        ? index.simulate(
              connection,
              saleId,
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
                  path: index.path(saleId),
              } as const,
              input,
          );
}
export namespace index {
    export type Input = Primitive<IShoppingSaleQuestion.IRequest>;
    export type Output = Primitive<IPage<IShoppingSaleQuestion.ISummary>>;

    export const METADATA = {
        method: "PATCH",
        path: "/shoppings/admins/sales/:saleId/questions",
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

    export const path = (saleId: string & Format<"uuid">): string => {
        return `/shoppings/admins/sales/${encodeURIComponent(saleId ?? "null")}/questions`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IPage<IShoppingSaleQuestion.ISummary>> =>
        typia.random<Primitive<IPage<IShoppingSaleQuestion.ISummary>>>(g);
    export const simulate = async (
        connection: IConnection,
        saleId: string & Format<"uuid">,
        input: index.Input,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(saleId),
            contentType: "application/json",
        });
        assert.param("saleId")(() => typia.assert(saleId));
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
 * @controller ShoppingAdminSaleQuestionController.abridges
 * @path PATCH /shoppings/admins/sales/:saleId/questions/abridges
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function abridges(
    connection: IConnection,
    saleId: string & Format<"uuid">,
    input: abridges.Input,
): Promise<abridges.Output> {
    return !!connection.simulate
        ? abridges.simulate(
              connection,
              saleId,
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
                  ...abridges.METADATA,
                  path: abridges.path(saleId),
              } as const,
              input,
          );
}
export namespace abridges {
    export type Input = Primitive<IShoppingSaleQuestion.IRequest>;
    export type Output = Primitive<IPage<IShoppingSaleQuestion.IAbridge>>;

    export const METADATA = {
        method: "PATCH",
        path: "/shoppings/admins/sales/:saleId/questions/abridges",
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

    export const path = (saleId: string & Format<"uuid">): string => {
        return `/shoppings/admins/sales/${encodeURIComponent(saleId ?? "null")}/questions/abridges`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IPage<IShoppingSaleQuestion.IAbridge>> =>
        typia.random<Primitive<IPage<IShoppingSaleQuestion.IAbridge>>>(g);
    export const simulate = async (
        connection: IConnection,
        saleId: string & Format<"uuid">,
        input: abridges.Input,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(saleId),
            contentType: "application/json",
        });
        assert.param("saleId")(() => typia.assert(saleId));
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
 * @controller ShoppingAdminSaleQuestionController.at
 * @path GET /shoppings/admins/sales/:saleId/questions/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function at(
    connection: IConnection,
    saleId: string & Format<"uuid">,
    id: string & Format<"uuid">,
): Promise<at.Output> {
    return !!connection.simulate
        ? at.simulate(
              connection,
              saleId,
              id,
          )
        : PlainFetcher.fetch(
              connection,
              {
                  ...at.METADATA,
                  path: at.path(saleId, id),
              } as const,
          );
}
export namespace at {
    export type Output = Primitive<IShoppingSaleQuestion>;

    export const METADATA = {
        method: "GET",
        path: "/shoppings/admins/sales/:saleId/questions/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (saleId: string & Format<"uuid">, id: string & Format<"uuid">): string => {
        return `/shoppings/admins/sales/${encodeURIComponent(saleId ?? "null")}/questions/${encodeURIComponent(id ?? "null")}`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingSaleQuestion> =>
        typia.random<Primitive<IShoppingSaleQuestion>>(g);
    export const simulate = async (
        connection: IConnection,
        saleId: string & Format<"uuid">,
        id: string & Format<"uuid">,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(saleId, id),
            contentType: "application/json",
        });
        assert.param("saleId")(() => typia.assert(saleId));
        assert.param("id")(() => typia.assert(id));
        return random(
            typeof connection.simulate === 'object' &&
                connection.simulate !== null
                ? connection.simulate
                : undefined
        );
    }
}