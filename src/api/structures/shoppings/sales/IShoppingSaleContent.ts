import { tags } from "typia";

import { IAttachmentFile } from "../../common/IAttachmentFile";

/**
 * Content information of sale snapshot.
 *
 * `IShoppingSaleContent` is an entity embodies the description contents
 * of {@link IShoppingSale}.
 *
 * @author Samchon
 */
export interface IShoppingSaleContent {
    /**
     * Primary Key.
     */
    id: string & tags.Format<"uuid">;

    /**
     * Title of the content.
     */
    title: string;

    /**
     * Format of the body content.
     *
     * Same meaning with file extension like `html`, `md`, and `txt`.
     */
    format: IShoppingSaleContent.Type;

    /**
     * The main body content.
     */
    body: string;

    /**
     * List of attached files.
     */
    files: IAttachmentFile[];
}
export namespace IShoppingSaleContent {
    export type Type = "html" | "md" | "txt";

    export interface IInvert {
        id: string & tags.Format<"uuid">;
        title: string;
    }
    export type ISummary = IInvert;

    export interface IStore {
        title: string;
        format: IShoppingSaleContent.Type;
        body: string;
        files: IAttachmentFile.IStore[];
    }
}
