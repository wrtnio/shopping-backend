import { tags } from "typia";

import { IPage } from "../../common/IPage";
import { IShoppingCustomer } from "../actors/IShoppingCustomer";
import { IShoppingSale } from "../sales/IShoppingSale";
import { IShoppingOrderGood } from "./IShoppingOrderGood";
import { IShoppingOrderPrice } from "./IShoppingOrderPrice";
import { IShoppingOrderPublish } from "./IShoppingOrderPublish";

/**
 * Order application information.
 *
 * `IShoppingOrder` is an entity that embodies {@link IShoppingCustomer customer}'s
 * order application information. However, please note that at this time, you are
 * still at the "order application" stage and not the "order confirmation" stage.
 *
 * And as soon as a customer applies for an order, all
 * {@link IShoppingCartCommodity commodities} in the target shopping cart are
 * promoted to {@link IShoppingOrderGood goods}, and those good records are created
 * under this `IShoppingOrder`.
 *
 * Of course, not all commodities in the target shopping cart become
 * {@link IShoppingOrderGood}, but only those selected by the customer become the
 * {@link IShoppingOrderGood}.
 *
 * @author Samchon
 */
export interface IShoppingOrder {
  /**
   * Primary Key.
   */
  id: string & tags.Format<"uuid">;

  /**
   * Customer who've applied for the order.
   */
  customer: IShoppingCustomer;

  /**
   * List of goods in the order.
   */
  goods: IShoppingOrderGood[] & tags.MinItems<1>;

  /**
   * Price information including discounts.
   */
  price: IShoppingOrderPrice;

  /**
   * Order completion and payment information.
   */
  publish: null | IShoppingOrderPublish;

  /**
   * Creation time of the record.
   */
  created_at: string & tags.Format<"date-time">;
}
export namespace IShoppingOrder {
  /**
   * Request of orders with pagination and searching/sorting conditions.
   */
  export interface IRequest extends IPage.IRequest {
    search?: IRequest.ISearch;
    sort?: IPage.Sort<IRequest.SortableColumns>;
  }

  export namespace IRequest {
    export interface ISearch {
      min_price?: number;
      max_price?: number;
      paid?: null | boolean;
      sale?: IShoppingSale.IRequest.ISearch;
    }
    export type SortableColumns =
      | "order.price"
      | `order.quantity`
      | "order.created_at"
      | `order.publish.paid_at`;
  }

  /**
   * Invert information from delivery.
   */
  export interface IInvertFromDelivery {
    /**
     * Primary Key.
     */
    id: string & tags.Format<"uuid">;

    /**
     * Customer who've applied for the order.
     */
    customer: IShoppingCustomer;

    /**
     * List of goods in the order.
     */
    goods: IShoppingOrderGood[] & tags.MinItems<1>;

    /**
     * Price information including discounts.
     */
    price: IShoppingOrderPrice;

    /**
     * Order completion and payment information.
     */
    publish: null | IShoppingOrderPublish.IInvertFromDelivery;

    /**
     * Creation time of the record.
     */
    created_at: string & tags.Format<"date-time">;
  }

  /**
   * Creation information of the order appliance.
   */
  export interface ICreate {
    /**
     * List of goods in the order.
     */
    goods: IShoppingOrderGood.ICreate[];
  }
}
