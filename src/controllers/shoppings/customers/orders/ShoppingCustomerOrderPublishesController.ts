import nest from "@modules/nestjs";
import core from "@nestia/core";
import { tags } from "typia";

import { IShoppingCustomer } from "samchon/shopping-api/lib/structures/shoppings/actors/IShoppingCustomer";
import { IShoppingOrderPublish } from "samchon/shopping-api/lib/structures/shoppings/orders/IShoppingOrderPublish";

import { ShoppingCustomerAuth } from "../../../../decorators/ShoppingCustomerAuth";

@nest.Controller(`shoppings/customers/orders/:orderId/publish`)
export class ShoppingCustomerOrderPublishesController {
    public async able(
        @ShoppingCustomerAuth("citizen") customer: IShoppingCustomer,
        @core.TypedParam("orderId") orderId: string & tags.Format<"uuid">,
    ): Promise<boolean> {
        customer;
        orderId;
        return null!;
    }

    @core.TypedRoute.Post()
    public async create(
        @ShoppingCustomerAuth("citizen") customer: IShoppingCustomer,
        @core.TypedParam("orderId") orderId: string & tags.Format<"uuid">,
        @core.TypedBody() input: IShoppingOrderPublish.ICreate,
    ): Promise<IShoppingOrderPublish> {
        customer;
        orderId;
        input;
        return null!;
    }

    @core.TypedRoute.Delete()
    public async erase(
        @ShoppingCustomerAuth("citizen") customer: IShoppingCustomer,
        @core.TypedParam("orderId") orderId: string & tags.Format<"uuid">,
    ): Promise<void> {
        customer;
        orderId;
    }
}
