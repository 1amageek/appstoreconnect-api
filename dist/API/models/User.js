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
exports.UserToJSON = exports.UserFromJSONTyped = exports.UserFromJSON = exports.instanceOfUser = exports.UserTypeEnum = void 0;
const runtime_1 = require("../runtime");
const ResourceLinks_1 = require("./ResourceLinks");
const UserAttributes_1 = require("./UserAttributes");
const UserInvitationRelationships_1 = require("./UserInvitationRelationships");
/**
 * @export
 */
exports.UserTypeEnum = {
    Users: 'users'
};
/**
 * Check if a given object implements the User interface.
 */
function instanceOfUser(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
exports.instanceOfUser = instanceOfUser;
function UserFromJSON(json) {
    return UserFromJSONTyped(json, false);
}
exports.UserFromJSON = UserFromJSON;
function UserFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'id': json['id'],
        'attributes': !(0, runtime_1.exists)(json, 'attributes') ? undefined : (0, UserAttributes_1.UserAttributesFromJSON)(json['attributes']),
        'relationships': !(0, runtime_1.exists)(json, 'relationships') ? undefined : (0, UserInvitationRelationships_1.UserInvitationRelationshipsFromJSON)(json['relationships']),
        'links': (0, ResourceLinks_1.ResourceLinksFromJSON)(json['links']),
    };
}
exports.UserFromJSONTyped = UserFromJSONTyped;
function UserToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
        'id': value.id,
        'attributes': (0, UserAttributes_1.UserAttributesToJSON)(value.attributes),
        'relationships': (0, UserInvitationRelationships_1.UserInvitationRelationshipsToJSON)(value.relationships),
        'links': (0, ResourceLinks_1.ResourceLinksToJSON)(value.links),
    };
}
exports.UserToJSON = UserToJSON;
//# sourceMappingURL=User.js.map