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
exports.AppPreviewRelationshipsToJSON = exports.AppPreviewRelationshipsFromJSONTyped = exports.AppPreviewRelationshipsFromJSON = exports.instanceOfAppPreviewRelationships = void 0;
const runtime_1 = require("../runtime");
const AppPreviewRelationshipsAppPreviewSet_1 = require("./AppPreviewRelationshipsAppPreviewSet");
/**
 * Check if a given object implements the AppPreviewRelationships interface.
 */
function instanceOfAppPreviewRelationships(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAppPreviewRelationships = instanceOfAppPreviewRelationships;
function AppPreviewRelationshipsFromJSON(json) {
    return AppPreviewRelationshipsFromJSONTyped(json, false);
}
exports.AppPreviewRelationshipsFromJSON = AppPreviewRelationshipsFromJSON;
function AppPreviewRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'appPreviewSet': !(0, runtime_1.exists)(json, 'appPreviewSet') ? undefined : (0, AppPreviewRelationshipsAppPreviewSet_1.AppPreviewRelationshipsAppPreviewSetFromJSON)(json['appPreviewSet']),
    };
}
exports.AppPreviewRelationshipsFromJSONTyped = AppPreviewRelationshipsFromJSONTyped;
function AppPreviewRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'appPreviewSet': (0, AppPreviewRelationshipsAppPreviewSet_1.AppPreviewRelationshipsAppPreviewSetToJSON)(value.appPreviewSet),
    };
}
exports.AppPreviewRelationshipsToJSON = AppPreviewRelationshipsToJSON;
//# sourceMappingURL=AppPreviewRelationships.js.map