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
exports.AppClipDomainStatusAttributesToJSON = exports.AppClipDomainStatusAttributesFromJSONTyped = exports.AppClipDomainStatusAttributesFromJSON = exports.instanceOfAppClipDomainStatusAttributes = void 0;
const runtime_1 = require("../runtime");
const AppClipDomainStatusAttributesDomainsInner_1 = require("./AppClipDomainStatusAttributesDomainsInner");
/**
 * Check if a given object implements the AppClipDomainStatusAttributes interface.
 */
function instanceOfAppClipDomainStatusAttributes(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAppClipDomainStatusAttributes = instanceOfAppClipDomainStatusAttributes;
function AppClipDomainStatusAttributesFromJSON(json) {
    return AppClipDomainStatusAttributesFromJSONTyped(json, false);
}
exports.AppClipDomainStatusAttributesFromJSON = AppClipDomainStatusAttributesFromJSON;
function AppClipDomainStatusAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'domains': !(0, runtime_1.exists)(json, 'domains') ? undefined : (json['domains'].map(AppClipDomainStatusAttributesDomainsInner_1.AppClipDomainStatusAttributesDomainsInnerFromJSON)),
        'lastUpdatedDate': !(0, runtime_1.exists)(json, 'lastUpdatedDate') ? undefined : (new Date(json['lastUpdatedDate'])),
    };
}
exports.AppClipDomainStatusAttributesFromJSONTyped = AppClipDomainStatusAttributesFromJSONTyped;
function AppClipDomainStatusAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'domains': value.domains === undefined ? undefined : (value.domains.map(AppClipDomainStatusAttributesDomainsInner_1.AppClipDomainStatusAttributesDomainsInnerToJSON)),
        'lastUpdatedDate': value.lastUpdatedDate === undefined ? undefined : (value.lastUpdatedDate.toISOString()),
    };
}
exports.AppClipDomainStatusAttributesToJSON = AppClipDomainStatusAttributesToJSON;
//# sourceMappingURL=AppClipDomainStatusAttributes.js.map