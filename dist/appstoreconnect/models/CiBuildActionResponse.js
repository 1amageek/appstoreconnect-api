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
exports.CiBuildActionResponseToJSON = exports.CiBuildActionResponseFromJSONTyped = exports.CiBuildActionResponseFromJSON = exports.instanceOfCiBuildActionResponse = void 0;
const runtime_1 = require("../runtime");
const CiBuildAction_1 = require("./CiBuildAction");
const CiBuildRun_1 = require("./CiBuildRun");
const DocumentLinks_1 = require("./DocumentLinks");
/**
 * Check if a given object implements the CiBuildActionResponse interface.
 */
function instanceOfCiBuildActionResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
exports.instanceOfCiBuildActionResponse = instanceOfCiBuildActionResponse;
function CiBuildActionResponseFromJSON(json) {
    return CiBuildActionResponseFromJSONTyped(json, false);
}
exports.CiBuildActionResponseFromJSON = CiBuildActionResponseFromJSON;
function CiBuildActionResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (0, CiBuildAction_1.CiBuildActionFromJSON)(json['data']),
        'included': !(0, runtime_1.exists)(json, 'included') ? undefined : (json['included'].map(CiBuildRun_1.CiBuildRunFromJSON)),
        'links': (0, DocumentLinks_1.DocumentLinksFromJSON)(json['links']),
    };
}
exports.CiBuildActionResponseFromJSONTyped = CiBuildActionResponseFromJSONTyped;
function CiBuildActionResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (0, CiBuildAction_1.CiBuildActionToJSON)(value.data),
        'included': value.included === undefined ? undefined : (value.included.map(CiBuildRun_1.CiBuildRunToJSON)),
        'links': (0, DocumentLinks_1.DocumentLinksToJSON)(value.links),
    };
}
exports.CiBuildActionResponseToJSON = CiBuildActionResponseToJSON;
//# sourceMappingURL=CiBuildActionResponse.js.map