class IOrder {
    fulfillOrder(order) {
        throw new Error('You have to implement the method doSomething!');
    };
}

class Warehouse extends IOrder {
    stock = {};
    constructor(_stock, _addresss) {
        this.stock = _stock;
        this._addresss = _addresss;
    }
    fulfillOrder(order) {
        order.itemList.forEach(item => this.stock[item.sku] = this.stock[item.sku] - 1);
    }

    currnetInventory(item) {
        if (this.stock[item.sku])
            return this.stock[item.sku];
        return 0;
    }
}

class OrderFulfillment extends IOrder {
    warehouses = [];

    constructor(_warehouses) {
        this.warehouses = _warehouses;
    }

    fulfillOrder(order) {
        // do some
    }
}