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
exports.UserUpdateRequestDataToJSON = exports.UserUpdateRequestDataFromJSONTyped = exports.UserUpdateRequestDataFromJSON = exports.instanceOfUserUpdateRequestData = exports.UserUpdateRequestDataTypeEnum = void 0;
const runtime_1 = require("../runtime");
const UserInvitationCreateRequestDataRelationships_1 = require("./UserInvitationCreateRequestDataRelationships");
const UserUpdateRequestDataAttributes_1 = require("./UserUpdateRequestDataAttributes");
/**
 * @export
 */
exports.UserUpdateRequestDataTypeEnum = {
    Users: 'users'
};
/**
 * Check if a given object implements the UserUpdateRequestData interface.
 */
function instanceOfUserUpdateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
exports.instanceOfUserUpdateRequestData = instanceOfUserUpdateRequestData;
function UserUpdateRequestDataFromJSON(json) {
    return UserUpdateRequestDataFromJSONTyped(json, false);
}
exports.UserUpdateRequestDataFromJSON = UserUpdateRequestDataFromJSON;
function UserUpdateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'id': json['id'],
        'attributes': !(0, runtime_1.exists)(json, 'attributes') ? undefined : (0, UserUpdateRequestDataAttributes_1.UserUpdateRequestDataAttributesFromJSON)(json['attributes']),
        'relationships': !(0, runtime_1.exists)(json, 'relationships') ? undefined : (0, UserInvitationCreateRequestDataRelationships_1.UserInvitationCreateRequestDataRelationshipsFromJSON)(json['relationships']),
    };
}
exports.UserUpdateRequestDataFromJSONTyped = UserUpdateRequestDataFromJSONTyped;
function UserUpdateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
        'id': value.id,
        'attributes': (0, UserUpdateRequestDataAttributes_1.UserUpdateRequestDataAttributesToJSON)(value.attributes),
        'relationships': (0, UserInvitationCreateRequestDataRelationships_1.UserInvitationCreateRequestDataRelationshipsToJSON)(value.relationships),
    };
}
exports.UserUpdateRequestDataToJSON = UserUpdateRequestDataToJSON;
//# sourceMappingURL=UserUpdateRequestData.js.map