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
exports.SubscriptionLocalizationUpdateRequestToJSON = exports.SubscriptionLocalizationUpdateRequestFromJSONTyped = exports.SubscriptionLocalizationUpdateRequestFromJSON = exports.instanceOfSubscriptionLocalizationUpdateRequest = void 0;
const SubscriptionLocalizationUpdateRequestData_1 = require("./SubscriptionLocalizationUpdateRequestData");
/**
 * Check if a given object implements the SubscriptionLocalizationUpdateRequest interface.
 */
function instanceOfSubscriptionLocalizationUpdateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
exports.instanceOfSubscriptionLocalizationUpdateRequest = instanceOfSubscriptionLocalizationUpdateRequest;
function SubscriptionLocalizationUpdateRequestFromJSON(json) {
    return SubscriptionLocalizationUpdateRequestFromJSONTyped(json, false);
}
exports.SubscriptionLocalizationUpdateRequestFromJSON = SubscriptionLocalizationUpdateRequestFromJSON;
function SubscriptionLocalizationUpdateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (0, SubscriptionLocalizationUpdateRequestData_1.SubscriptionLocalizationUpdateRequestDataFromJSON)(json['data']),
    };
}
exports.SubscriptionLocalizationUpdateRequestFromJSONTyped = SubscriptionLocalizationUpdateRequestFromJSONTyped;
function SubscriptionLocalizationUpdateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (0, SubscriptionLocalizationUpdateRequestData_1.SubscriptionLocalizationUpdateRequestDataToJSON)(value.data),
    };
}
exports.SubscriptionLocalizationUpdateRequestToJSON = SubscriptionLocalizationUpdateRequestToJSON;
//# sourceMappingURL=SubscriptionLocalizationUpdateRequest.js.map