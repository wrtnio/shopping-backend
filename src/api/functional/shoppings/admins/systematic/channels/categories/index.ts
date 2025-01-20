/**
 * @packageDocumentation
 * @module api.functional.shoppings.admins.systematic.channels.categories
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import type { Format } from "typia/lib/tags/Format";

import type { IRecordMerge } from "../../../../../../structures/common/IRecordMerge";
import type { IShoppingChannelCategory } from "../../../../../../structures/shoppings/systematic/IShoppingChannelCategory";

/**
 * Create a new category.
 *
 * Create a new {@link IShoppingChannelCategory category} of a
 * {@link IShoppingChannel channel} with given name. If required, it is
 * possible to specify the parent category by its ID.
 *
 * @param channelCode Belonged channel's {@link IShoppingChannel.code }
 * @param input Creation info of the category
 * @returns Newly created category
 * @tag Systematic
 * @author Samchon
 *
 * @controller ShoppingAdminSystematicChannelCategoryController.create
 * @path POST /shoppings/admins/systematic/channels/:channelCode/categories
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function create(
  connection: IConnection,
  channelCode: string,
  input: IShoppingChannelCategory.ICreate,
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
      path: create.path(channelCode),
    },
    input,
  );
}
export namespace create {
  export type Input = IShoppingChannelCategory.ICreate;
  export type Output = IShoppingChannelCategory;

  export const METADATA = {
    method: "POST",
    path: "/shoppings/admins/systematic/channels/:channelCode/categories",
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

  export const path = (channelCode: string) =>
    `/shoppings/admins/systematic/channels/${encodeURIComponent(channelCode?.toString() ?? "null")}/categories`;
}

/**
 * Update a category.
 *
 * Update a {@link IShoppingChannelCategory category}'s name. If required,
 * it is possible to change the parent category by its ID. Of course, detaching
 * from the parent category so that becoming the root category is also possible.
 *
 * @param channelCode Belonged channel's {@link IShoppingChannel.code }
 * @param id Target category's {@link IShoppingChannelCategory.id }
 * @param input Update info of the category
 * @tag Systematic
 * @author Samchon
 *
 * @controller ShoppingAdminSystematicChannelCategoryController.update
 * @path PUT /shoppings/admins/systematic/channels/:channelCode/categories/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function update(
  connection: IConnection,
  channelCode: string,
  id: string,
  input: IShoppingChannelCategory.ICreate,
): Promise<void> {
  return PlainFetcher.fetch(
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
      path: update.path(channelCode, id),
    },
    input,
  );
}
export namespace update {
  export type Input = IShoppingChannelCategory.ICreate;

  export const METADATA = {
    method: "PUT",
    path: "/shoppings/admins/systematic/channels/:channelCode/categories/:id",
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

  export const path = (channelCode: string, id: string) =>
    `/shoppings/admins/systematic/channels/${encodeURIComponent(channelCode?.toString() ?? "null")}/categories/${encodeURIComponent(id?.toString() ?? "null")}`;
}

/**
 * Merge multiple categories into one.
 *
 * In this shopping mall system, it is not possible to delete a
 * {@link IShoppingChannelCategory category}, because it is a systematic
 * entity affecting to all other core entities like
 * {@link IShoppingSale sales}. Instead of deleting, you can merge multiple
 * categories into one.
 *
 * If you specify a category to absorb others, then all of other categories
 * will be merged into the specified one. Also, subsidiary entities of
 * categories also be merged and their references also be merged cascadingly.
 *
 * @param channelCode Belonged channel's {@link IShoppingChannel.code }
 * @param input Merge info of the categories
 * @tag Systematic
 * @author Samchon
 *
 * @controller ShoppingAdminSystematicChannelCategoryController.merge
 * @path DELETE /shoppings/admins/systematic/channels/:channelCode/categories/merge
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function merge(
  connection: IConnection,
  channelCode: string,
  input: IRecordMerge,
): Promise<void> {
  return PlainFetcher.fetch(
    {
      ...connection,
      headers: {
        ...connection.headers,
        "Content-Type": "application/json",
      },
    },
    {
      ...merge.METADATA,
      template: merge.METADATA.path,
      path: merge.path(channelCode),
    },
    input,
  );
}
export namespace merge {
  export type Input = IRecordMerge;

  export const METADATA = {
    method: "DELETE",
    path: "/shoppings/admins/systematic/channels/:channelCode/categories/merge",
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

  export const path = (channelCode: string) =>
    `/shoppings/admins/systematic/channels/${encodeURIComponent(channelCode?.toString() ?? "null")}/categories/merge`;
}

/**
 * List up every categories with children records.
 *
 * List up every {@link IShoppingChannelCategory.IHierarchical categories}
 * of a {@link IShoppingChannel channel} with pagination. Returned categories
 * contain children categories, too.
 *
 * If you want, you can limit the result by configuring
 * {@link IShoppingChannelCategory.IRequest.search search condition} in the
 * request body. Also, it is possible to customize sequence order of records
 * by configuring {@link IShoppingChannelCategory.IRequest.sort sort condition}.
 *
 * @param channelCode Belonged channel's {@link IShoppingChannel.code }
 * @returns Paginated categories with children categories
 * @tag Systematic
 * @author Samchon
 *
 * @controller ShoppingAdminSystematicChannelCategoryController.index
 * @path PATCH /shoppings/admins/systematic/channels/:channelCode/categories
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function index(
  connection: IConnection,
  channelCode: string,
): Promise<index.Output> {
  return PlainFetcher.fetch(connection, {
    ...index.METADATA,
    template: index.METADATA.path,
    path: index.path(channelCode),
  });
}
export namespace index {
  export type Output = Array<IShoppingChannelCategory.IHierarchical>;

  export const METADATA = {
    method: "PATCH",
    path: "/shoppings/admins/systematic/channels/:channelCode/categories",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 200,
  } as const;

  export const path = (channelCode: string) =>
    `/shoppings/admins/systematic/channels/${encodeURIComponent(channelCode?.toString() ?? "null")}/categories`;
}

/**
 * Get a category info.
 *
 * Get a detailed {@link IShoppingChannelCategory category} information.
 *
 * Returned category contains hierarchical children categories, and also
 * contains the recursive parent categories, too.
 *
 * @param channelCode Belonged channel's {@link IShoppingChannel.code }
 * @param id Target category's {@link IShoppingChannelCategory.id }
 * @returns Detailed category info
 * @tag Systematic
 * @author Samchon
 *
 * @controller ShoppingAdminSystematicChannelCategoryController.at
 * @path GET /shoppings/admins/systematic/channels/:channelCode/categories/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function at(
  connection: IConnection,
  channelCode: string,
  id: string & Format<"uuid">,
): Promise<at.Output> {
  return PlainFetcher.fetch(connection, {
    ...at.METADATA,
    template: at.METADATA.path,
    path: at.path(channelCode, id),
  });
}
export namespace at {
  export type Output = IShoppingChannelCategory;

  export const METADATA = {
    method: "GET",
    path: "/shoppings/admins/systematic/channels/:channelCode/categories/:id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 200,
  } as const;

  export const path = (channelCode: string, id: string & Format<"uuid">) =>
    `/shoppings/admins/systematic/channels/${encodeURIComponent(channelCode?.toString() ?? "null")}/categories/${encodeURIComponent(id?.toString() ?? "null")}`;
}

/**
 * Get a category info of inverted.
 *
 * Get a inverted {@link IShoppingChannelCategory.IInvert category} information.
 *
 * Returned category contains the recursive parent categories, but not contains
 * the hierarchical children categories.
 *
 * @param channelCode Belonged channel's {@link IShoppingChannel.code }
 * @param id Target category's {@link IShoppingChannelCategory.id }
 * @returns Detailed category info
 * @tag Systematic
 * @author Samchon
 *
 * @controller ShoppingAdminSystematicChannelCategoryController.invert
 * @path GET /shoppings/admins/systematic/channels/:channelCode/categories/:id/invert
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function invert(
  connection: IConnection,
  channelCode: string,
  id: string & Format<"uuid">,
): Promise<invert.Output> {
  return PlainFetcher.fetch(connection, {
    ...invert.METADATA,
    template: invert.METADATA.path,
    path: invert.path(channelCode, id),
  });
}
export namespace invert {
  export type Output = IShoppingChannelCategory.IInvert;

  export const METADATA = {
    method: "GET",
    path: "/shoppings/admins/systematic/channels/:channelCode/categories/:id/invert",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 200,
  } as const;

  export const path = (channelCode: string, id: string & Format<"uuid">) =>
    `/shoppings/admins/systematic/channels/${encodeURIComponent(channelCode?.toString() ?? "null")}/categories/${encodeURIComponent(id?.toString() ?? "null")}/invert`;
}
