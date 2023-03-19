"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.InAppPurchaseV2CreateRequestToJSON = exports.InAppPurchaseV2CreateRequestFromJSONTyped = exports.InAppPurchaseV2CreateRequestFromJSON = exports.instanceOfInAppPurchaseV2CreateRequest = void 0;
const InAppPurchaseV2CreateRequestData_1 = require("./InAppPurchaseV2CreateRequestData");
/**
 * Check if a given object implements the InAppPurchaseV2CreateRequest interface.
 */
function instanceOfInAppPurchaseV2CreateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
exports.instanceOfInAppPurchaseV2CreateRequest = instanceOfInAppPurchaseV2CreateRequest;
function InAppPurchaseV2CreateRequestFromJSON(json) {
    return InAppPurchaseV2CreateRequestFromJSONTyped(json, false);
}
exports.InAppPurchaseV2CreateRequestFromJSON = InAppPurchaseV2CreateRequestFromJSON;
function InAppPurchaseV2CreateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (0, InAppPurchaseV2CreateRequestData_1.InAppPurchaseV2CreateRequestDataFromJSON)(json['data']),
    };
}
exports.InAppPurchaseV2CreateRequestFromJSONTyped = InAppPurchaseV2CreateRequestFromJSONTyped;
function InAppPurchaseV2CreateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (0, InAppPurchaseV2CreateRequestData_1.InAppPurchaseV2CreateRequestDataToJSON)(value.data),
    };
}
exports.InAppPurchaseV2CreateRequestToJSON = InAppPurchaseV2CreateRequestToJSON;
//# sourceMappingURL=InAppPurchaseV2CreateRequest.js.map