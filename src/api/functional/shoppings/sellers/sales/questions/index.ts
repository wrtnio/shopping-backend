/**
 * @packageDocumentation
 * @module api.functional.shoppings.sellers.sales.questions
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import type { Format } from "typia/lib/tags/Format";

import type { IPage } from "../../../../../structures/common/IPage";
import type { IShoppingSaleQuestion } from "../../../../../structures/shoppings/sales/inquiries/IShoppingSaleQuestion";

export * as answer from "./answer";
export * as comments from "./comments";

/**
 * List up every summarized questions.
 *
 * List up every {@link IShoppingSaleQuestion.ISummary summarized questions} of a
 * {@link IShoppingSale sale}.
 *
 * As you can see, returned questions are summarized, not detailed. If you want
 * to get the detailed information of a question, use {@link adridges} function
 * or {@link at} function for each article.
 *
 * Also, returned question has {@link IShoppingSaleQuestion.ISummary.answer}
 * property which means the formal answer from the {@link IShoppingSeller}.
 * Additionally, returned question has another special property
 * {@link IShoppingSaleQuestion.ISummary.secret} with masking to other
 * princple properties, and it means only related actors can {@link at read}
 * the question.
 *
 * For reference, if you're a {@link IShoppingSeller seller}, you can only
 * access to the your own {@link IShoppingSale sale}'s questions. Otherwise,
 * you can access to every questions of the sales.
 *
 * By the way, if you want, you can limit the result by configuring
 * {@link IShoppingSaleQuestion.IRequest.search search condition} in the
 * request body. Also, it is possible to customize sequence order of records
 * by configuring {@link IShoppingSaleQuestion.IRequest.sort sort condition}.
 *
 * @param saleId Belonged sale's {@link IShoppingSale.id }
 * @param input Request info of pagination, searching and sorting
 * @returns Paginated questions with summarized information
 * @tag Sale
 * @author Samchon
 *
 * @controller ShoppingSellerSaleQuestionController.index
 * @path PATCH /shoppings/sellers/sales/:saleId/questions
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function index(
  connection: IConnection,
  saleId: string & Format<"uuid">,
  input: IShoppingSaleQuestion.IRequest,
): Promise<index.Output> {
  return !!connection.simulate
    ? index.simulate(connection, saleId, input)
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
          path: index.path(saleId),
        },
        input,
      );
}
export namespace index {
  export type Input = IShoppingSaleQuestion.IRequest;
  export type Output = IPage<IShoppingSaleQuestion.ISummary>;

  export const METADATA = {
    method: "PATCH",
    path: "/shoppings/sellers/sales/:saleId/questions",
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

  export const path = (saleId: string & Format<"uuid">) =>
    `/shoppings/sellers/sales/${encodeURIComponent(saleId ?? "null")}/questions`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IPage<IShoppingSaleQuestion.ISummary> =>
    typia.random<IPage<IShoppingSaleQuestion.ISummary>>(g);
  export const simulate = (
    connection: IConnection,
    saleId: string & Format<"uuid">,
    input: IShoppingSaleQuestion.IRequest,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(saleId),
      contentType: "application/json",
    });
    assert.param("saleId")(() => typia.assert(saleId));
    assert.body(() => typia.assert(input));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * List up every abridged questions.
 *
 * List up every {@link IShoppingSaleQuestion.IAbridge abridged questions} of
 * a {@link IShoppingSale sale}.
 *
 * As you can see, returned questions are abridged, not detailed. If you want
 * to get the detailed information of a question, use {@link at} function
 * for each article.
 *
 * Also, returned question has {@link IShoppingSaleQuestion.IAridge.answer}
 * property which means the formal answer from the {@link IShoppingSeller}.
 * Additionally, returned question has another special property
 * {@link IShoppingSaleQuestion.IAridge.secret} with masking to other
 * princple properties, and it means only related actors can {@link at read}
 * the question.
 *
 * For reference, if you're a {@link IShoppingSeller seller}, you can only
 * access to the your own {@link IShoppingSale sale}'s questions. Otherwise,
 * you can access to every questions of the sales.
 *
 * By the way, if you want, you can limit the result by configuring
 * {@link IShoppingSaleQuestion.IRequest.search search condition} in the
 * request body. Also, it is possible to customize sequence order of records
 * by configuring {@link IShoppingSaleQuestion.IRequest.sort sort condition}.
 *
 * @param saleId Belonged sale's {@link IShoppingSale.id }
 * @param input Request info of pagination, searching and sorting
 * @returns Paginated questions with abridged information
 * @tag Sale
 * @author Samchon
 *
 * @controller ShoppingSellerSaleQuestionController.abridges
 * @path PATCH /shoppings/sellers/sales/:saleId/questions/abridges
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function abridges(
  connection: IConnection,
  saleId: string & Format<"uuid">,
  input: IShoppingSaleQuestion.IRequest,
): Promise<abridges.Output> {
  return !!connection.simulate
    ? abridges.simulate(connection, saleId, input)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...abridges.METADATA,
          template: abridges.METADATA.path,
          path: abridges.path(saleId),
        },
        input,
      );
}
export namespace abridges {
  export type Input = IShoppingSaleQuestion.IRequest;
  export type Output = IPage<IShoppingSaleQuestion.IAbridge>;

  export const METADATA = {
    method: "PATCH",
    path: "/shoppings/sellers/sales/:saleId/questions/abridges",
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

  export const path = (saleId: string & Format<"uuid">) =>
    `/shoppings/sellers/sales/${encodeURIComponent(saleId ?? "null")}/questions/abridges`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IPage<IShoppingSaleQuestion.IAbridge> =>
    typia.random<IPage<IShoppingSaleQuestion.IAbridge>>(g);
  export const simulate = (
    connection: IConnection,
    saleId: string & Format<"uuid">,
    input: IShoppingSaleQuestion.IRequest,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(saleId),
      contentType: "application/json",
    });
    assert.param("saleId")(() => typia.assert(saleId));
    assert.body(() => typia.assert(input));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * Get a question info.
 *
 * Get a detailed {@link IShoppingSaleQuestion question} information of a
 * {@link IShoppingSale sale}.
 *
 * For reference, if you're a {@link IShoppingSeller seller}, you can only
 * access to the your own {@link IShoppingSale sale}'s question. Otherwise
 * you are a {@link IShoppingCustomer customer}, you can access to every
 * questions of the sales except the {@link IShoppingSaleQuestion.secret}
 * value is `false`.
 *
 * @param saleId Belonged sale's {@link IShoppingSale.id }
 * @param id Target question's {@link IShoppingSaleQuestion.id}
 * @returns Detailed question info
 * @tag Sale
 * @author Samchon
 *
 * @controller ShoppingSellerSaleQuestionController.at
 * @path GET /shoppings/sellers/sales/:saleId/questions/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function at(
  connection: IConnection,
  saleId: string & Format<"uuid">,
  id: string & Format<"uuid">,
): Promise<at.Output> {
  return !!connection.simulate
    ? at.simulate(connection, saleId, id)
    : PlainFetcher.fetch(connection, {
        ...at.METADATA,
        template: at.METADATA.path,
        path: at.path(saleId, id),
      });
}
export namespace at {
  export type Output = IShoppingSaleQuestion;

  export const METADATA = {
    method: "GET",
    path: "/shoppings/sellers/sales/:saleId/questions/:id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (
    saleId: string & Format<"uuid">,
    id: string & Format<"uuid">,
  ) =>
    `/shoppings/sellers/sales/${encodeURIComponent(saleId ?? "null")}/questions/${encodeURIComponent(id ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IShoppingSaleQuestion => typia.random<IShoppingSaleQuestion>(g);
  export const simulate = (
    connection: IConnection,
    saleId: string & Format<"uuid">,
    id: string & Format<"uuid">,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(saleId, id),
      contentType: "application/json",
    });
    assert.param("saleId")(() => typia.assert(saleId));
    assert.param("id")(() => typia.assert(id));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}
