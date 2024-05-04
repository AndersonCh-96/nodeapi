"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerController = void 0;
class CustomerController {
    getAll(req, resp) {
        resp.status(200).json({
            user: "Anderson",
        });
    }
}
exports.CustomerController = CustomerController;
