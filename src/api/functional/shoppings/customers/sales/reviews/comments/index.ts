/**
 * @packageDocumentation
 * @module api.functional.shoppings.customers.sales.reviews.comments
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import type { Format } from "typia/lib/tags/Format";

import type { IPage } from "../../../../../../structures/common/IPage";
import type { IShoppingSaleInquiryComment } from "../../../../../../structures/shoppings/sales/inquiries/IShoppingSaleInquiryComment";

/**
 * List up every inquiry comments.
 *
 * List up every {@link IShoppingSaleInquiryComment inquiry comments} of a
 * {@link IShoppingSaleQuestion question} or {@link IShoppingSaleReview review}
 * with {@link IPage pagination}.
 *
 * If you want, you can limit the result by configuring
 * {@link IShoppingSaleInquiryComment.IRequest.search search condition} in the
 * request body. Also, it is possible to customize sequence order of records
 * by configuring {@link IShoppingSaleInquiryComment.IRequest.sort sort condition}.
 *
 * By the way, if you're a {@link IShoppingSeller seller}, you can only access
 * to the your own {@link IShoppingSale sale}'s inquiries. Otherwise, you
 * can access to every inquiries of the sales.
 *
 * @param saleId Belonged sale's {@link IShoppingSale.id }
 * @param inquiryId Belonged inquiry's {@link IShoppingSaleInquiry.id }
 * @param input Request info of pagination, searching and sorting
 * @returns Paginated inquiry comments
 * @tag Sale
 * @author Samchon
 *
 * @controller ShoppingCustomerSaleReviewCommentController.index
 * @path PATCH /shoppings/customers/sales/:saleId/reviews/:inquiryId/comments
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function index(
  connection: IConnection,
  saleId: string & Format<"uuid">,
  inquiryId: string & Format<"uuid">,
  input: IShoppingSaleInquiryComment.IRequest,
): Promise<index.Output> {
  return !!connection.simulate
    ? index.simulate(connection, saleId, inquiryId, input)
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
          path: index.path(saleId, inquiryId),
        },
        input,
      );
}
export namespace index {
  export type Input = IShoppingSaleInquiryComment.IRequest;
  export type Output = IPage<IShoppingSaleInquiryComment>;

  export const METADATA = {
    method: "PATCH",
    path: "/shoppings/customers/sales/:saleId/reviews/:inquiryId/comments",
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
    inquiryId: string & Format<"uuid">,
  ) =>
    `/shoppings/customers/sales/${encodeURIComponent(saleId ?? "null")}/reviews/${encodeURIComponent(inquiryId ?? "null")}/comments`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IPage<IShoppingSaleInquiryComment> =>
    typia.random<IPage<IShoppingSaleInquiryComment>>(g);
  export const simulate = (
    connection: IConnection,
    saleId: string & Format<"uuid">,
    inquiryId: string & Format<"uuid">,
    input: IShoppingSaleInquiryComment.IRequest,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(saleId, inquiryId),
      contentType: "application/json",
    });
    assert.param("saleId")(() => typia.assert(saleId));
    assert.param("inquiryId")(() => typia.assert(inquiryId));
    assert.body(() => typia.assert(input));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * Get an inquiry comment info.
 *
 * Get a detailed {@link IShoppingSaleInquiryComment inquiry comment}
 * information of a {@link IShoppingSaleQuestion question} or
 * {@link IShoppingSaleReview review}.
 *
 * For reference, if you're a {@link IShoppingSeller seller}, you can only
 * access to the your own {@link IShoppingSale sale}'s inquiry comment.
 * Otherwise, you can access to every inquiry comments of the sales.
 *
 * @param saleId Belonged sale's {@link IShoppingSale.id }
 * @param inquiryId Belonged inquiry's {@link IShoppingSaleInquiry.id }
 * @param id Target inquiry comment's {@link IShoppingSaleInquiryComment.id}
 * @returns Detailed inquiry comment info
 * @tag Sale
 * @author Samchon
 *
 * @controller ShoppingCustomerSaleReviewCommentController.at
 * @path GET /shoppings/customers/sales/:saleId/reviews/:inquiryId/comments/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function at(
  connection: IConnection,
  saleId: string & Format<"uuid">,
  inquiryId: string & Format<"uuid">,
  id: string & Format<"uuid">,
): Promise<at.Output> {
  return !!connection.simulate
    ? at.simulate(connection, saleId, inquiryId, id)
    : PlainFetcher.fetch(connection, {
        ...at.METADATA,
        template: at.METADATA.path,
        path: at.path(saleId, inquiryId, id),
      });
}
export namespace at {
  export type Output = IShoppingSaleInquiryComment;

  export const METADATA = {
    method: "GET",
    path: "/shoppings/customers/sales/:saleId/reviews/:inquiryId/comments/:id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (
    saleId: string & Format<"uuid">,
    inquiryId: string & Format<"uuid">,
    id: string & Format<"uuid">,
  ) =>
    `/shoppings/customers/sales/${encodeURIComponent(saleId ?? "null")}/reviews/${encodeURIComponent(inquiryId ?? "null")}/comments/${encodeURIComponent(id ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IShoppingSaleInquiryComment =>
    typia.random<IShoppingSaleInquiryComment>(g);
  export const simulate = (
    connection: IConnection,
    saleId: string & Format<"uuid">,
    inquiryId: string & Format<"uuid">,
    id: string & Format<"uuid">,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(saleId, inquiryId, id),
      contentType: "application/json",
    });
    assert.param("saleId")(() => typia.assert(saleId));
    assert.param("inquiryId")(() => typia.assert(inquiryId));
    assert.param("id")(() => typia.assert(id));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * Create an inquiry comment.
 *
 * Create an {@link IShoppingSaleInquiryComment inquiry comment} of a
 * {@link IShoppingSaleQuestion question} or {@link IShoppingSaleReview review}.
 *
 * For reference, if you're a {@link IShoppingSeller seller}, you can only
 * create an inquiry comment to your own {@link IShoppingSale sale}'s inquiry.
 * Otherwise, you can create an inquiry comment to every inquiries of the sales.
 *
 * @param saleId Belonged sale's {@link IShoppingSale.id }
 * @param inquiryId Target inquiry's {@link IShoppingSaleInquiry.id }
 * @param input Creation info of the inquiry comment
 * @returns Newly created inquiry comment
 * @tag Sale
 * @author Samchon
 *
 * @controller ShoppingCustomerSaleReviewCommentController.create
 * @path POST /shoppings/customers/sales/:saleId/reviews/:inquiryId/comments
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function create(
  connection: IConnection,
  saleId: string & Format<"uuid">,
  inquiryId: string & Format<"uuid">,
  input: IShoppingSaleInquiryComment.ICreate,
): Promise<create.Output> {
  return !!connection.simulate
    ? create.simulate(connection, saleId, inquiryId, input)
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
          path: create.path(saleId, inquiryId),
        },
        input,
      );
}
export namespace create {
  export type Input = IShoppingSaleInquiryComment.ICreate;
  export type Output = IShoppingSaleInquiryComment;

  export const METADATA = {
    method: "POST",
    path: "/shoppings/customers/sales/:saleId/reviews/:inquiryId/comments",
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
    inquiryId: string & Format<"uuid">,
  ) =>
    `/shoppings/customers/sales/${encodeURIComponent(saleId ?? "null")}/reviews/${encodeURIComponent(inquiryId ?? "null")}/comments`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IShoppingSaleInquiryComment =>
    typia.random<IShoppingSaleInquiryComment>(g);
  export const simulate = (
    connection: IConnection,
    saleId: string & Format<"uuid">,
    inquiryId: string & Format<"uuid">,
    input: IShoppingSaleInquiryComment.ICreate,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(saleId, inquiryId),
      contentType: "application/json",
    });
    assert.param("saleId")(() => typia.assert(saleId));
    assert.param("inquiryId")(() => typia.assert(inquiryId));
    assert.body(() => typia.assert(input));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * Update an inquiry comment.
 *
 * Update an {@link IShoppingSaleInquiryComment inquiry comment} to a specific
 * {@link IShoppingSaleQuestion question} or {@link IShoppingSaleReview review}.
 *
 * By the way, as is the general policy of this shopping mall regarding
 * comments, modifying a comment does not actually change the existing content.
 * Modified content is accumulated and recorded in the existing comment record
 * as a new {@link IShoppingSaleInquiryComment.ISnapshot snapshot}. And this
 * is made public to everyone, who can read this inquiry comment.
 *
 * This is to prevent customers or sellers from modifying their comments and
 * manipulating the circumstances due to the nature of e-commerce, where
 * disputes easily arise. That is, to preserve evidence.
 *
 * @param saleId Belonged sale's {@link IShoppingSale.id }
 * @param inquiryId Belonged inquiry's {@link IShoppingSaleInquiry.id }
 * @param id Target inquiry comment's {@link IShoppingSaleInquiryComment.id}
 * @param input Update info of the inquiry comment
 * @returns Newly created snapshot record of the inquiry comment
 * @tag Sale
 * @author Samchon
 *
 * @controller ShoppingCustomerSaleReviewCommentController.update
 * @path PUT /shoppings/customers/sales/:saleId/reviews/:inquiryId/comments/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function update(
  connection: IConnection,
  saleId: string & Format<"uuid">,
  inquiryId: string & Format<"uuid">,
  id: string & Format<"uuid">,
  input: IShoppingSaleInquiryComment.ICreate,
): Promise<update.Output> {
  return !!connection.simulate
    ? update.simulate(connection, saleId, inquiryId, id, input)
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
          path: update.path(saleId, inquiryId, id),
        },
        input,
      );
}
export namespace update {
  export type Input = IShoppingSaleInquiryComment.ICreate;
  export type Output = IShoppingSaleInquiryComment.ISnapshot;

  export const METADATA = {
    method: "PUT",
    path: "/shoppings/customers/sales/:saleId/reviews/:inquiryId/comments/:id",
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
    inquiryId: string & Format<"uuid">,
    id: string & Format<"uuid">,
  ) =>
    `/shoppings/customers/sales/${encodeURIComponent(saleId ?? "null")}/reviews/${encodeURIComponent(inquiryId ?? "null")}/comments/${encodeURIComponent(id ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IShoppingSaleInquiryComment.ISnapshot =>
    typia.random<IShoppingSaleInquiryComment.ISnapshot>(g);
  export const simulate = (
    connection: IConnection,
    saleId: string & Format<"uuid">,
    inquiryId: string & Format<"uuid">,
    id: string & Format<"uuid">,
    input: IShoppingSaleInquiryComment.ICreate,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(saleId, inquiryId, id),
      contentType: "application/json",
    });
    assert.param("saleId")(() => typia.assert(saleId));
    assert.param("inquiryId")(() => typia.assert(inquiryId));
    assert.param("id")(() => typia.assert(id));
    assert.body(() => typia.assert(input));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}
