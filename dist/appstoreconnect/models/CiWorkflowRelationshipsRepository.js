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
exports.CiWorkflowRelationshipsRepositoryToJSON = exports.CiWorkflowRelationshipsRepositoryFromJSONTyped = exports.CiWorkflowRelationshipsRepositoryFromJSON = exports.instanceOfCiWorkflowRelationshipsRepository = void 0;
const runtime_1 = require("../runtime");
const AppAvailabilityRelationshipsAppLinks_1 = require("./AppAvailabilityRelationshipsAppLinks");
const CiProductRelationshipsPrimaryRepositoriesDataInner_1 = require("./CiProductRelationshipsPrimaryRepositoriesDataInner");
/**
 * Check if a given object implements the CiWorkflowRelationshipsRepository interface.
 */
function instanceOfCiWorkflowRelationshipsRepository(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCiWorkflowRelationshipsRepository = instanceOfCiWorkflowRelationshipsRepository;
function CiWorkflowRelationshipsRepositoryFromJSON(json) {
    return CiWorkflowRelationshipsRepositoryFromJSONTyped(json, false);
}
exports.CiWorkflowRelationshipsRepositoryFromJSON = CiWorkflowRelationshipsRepositoryFromJSON;
function CiWorkflowRelationshipsRepositoryFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, AppAvailabilityRelationshipsAppLinks_1.AppAvailabilityRelationshipsAppLinksFromJSON)(json['links']),
        'data': !(0, runtime_1.exists)(json, 'data') ? undefined : (0, CiProductRelationshipsPrimaryRepositoriesDataInner_1.CiProductRelationshipsPrimaryRepositoriesDataInnerFromJSON)(json['data']),
    };
}
exports.CiWorkflowRelationshipsRepositoryFromJSONTyped = CiWorkflowRelationshipsRepositoryFromJSONTyped;
function CiWorkflowRelationshipsRepositoryToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': (0, AppAvailabilityRelationshipsAppLinks_1.AppAvailabilityRelationshipsAppLinksToJSON)(value.links),
        'data': (0, CiProductRelationshipsPrimaryRepositoriesDataInner_1.CiProductRelationshipsPrimaryRepositoriesDataInnerToJSON)(value.data),
    };
}
exports.CiWorkflowRelationshipsRepositoryToJSON = CiWorkflowRelationshipsRepositoryToJSON;
//# sourceMappingURL=CiWorkflowRelationshipsRepository.js.map