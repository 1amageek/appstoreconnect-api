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
exports.AppRelationshipsToJSON = exports.AppRelationshipsFromJSONTyped = exports.AppRelationshipsFromJSON = exports.instanceOfAppRelationships = void 0;
const runtime_1 = require("../runtime");
const AppEncryptionDeclarationRelationshipsBuilds_1 = require("./AppEncryptionDeclarationRelationshipsBuilds");
const AppRelationshipsAppClips_1 = require("./AppRelationshipsAppClips");
const AppRelationshipsAppCustomProductPages_1 = require("./AppRelationshipsAppCustomProductPages");
const AppRelationshipsAppEvents_1 = require("./AppRelationshipsAppEvents");
const AppRelationshipsAppInfos_1 = require("./AppRelationshipsAppInfos");
const AppRelationshipsAppStoreVersions_1 = require("./AppRelationshipsAppStoreVersions");
const AppRelationshipsBetaAppLocalizations_1 = require("./AppRelationshipsBetaAppLocalizations");
const AppRelationshipsBetaAppReviewDetail_1 = require("./AppRelationshipsBetaAppReviewDetail");
const AppRelationshipsBetaGroups_1 = require("./AppRelationshipsBetaGroups");
const AppRelationshipsBetaLicenseAgreement_1 = require("./AppRelationshipsBetaLicenseAgreement");
const AppRelationshipsCiProduct_1 = require("./AppRelationshipsCiProduct");
const AppRelationshipsEndUserLicenseAgreement_1 = require("./AppRelationshipsEndUserLicenseAgreement");
const AppRelationshipsGameCenterEnabledVersions_1 = require("./AppRelationshipsGameCenterEnabledVersions");
const AppRelationshipsInAppPurchasesV2_1 = require("./AppRelationshipsInAppPurchasesV2");
const AppRelationshipsPreOrder_1 = require("./AppRelationshipsPreOrder");
const AppRelationshipsPreReleaseVersions_1 = require("./AppRelationshipsPreReleaseVersions");
const AppRelationshipsPromotedPurchases_1 = require("./AppRelationshipsPromotedPurchases");
const AppRelationshipsReviewSubmissions_1 = require("./AppRelationshipsReviewSubmissions");
const AppRelationshipsSubscriptionGracePeriod_1 = require("./AppRelationshipsSubscriptionGracePeriod");
const AppRelationshipsSubscriptionGroups_1 = require("./AppRelationshipsSubscriptionGroups");
/**
 * Check if a given object implements the AppRelationships interface.
 */
function instanceOfAppRelationships(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAppRelationships = instanceOfAppRelationships;
function AppRelationshipsFromJSON(json) {
    return AppRelationshipsFromJSONTyped(json, false);
}
exports.AppRelationshipsFromJSON = AppRelationshipsFromJSON;
function AppRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'ciProduct': !(0, runtime_1.exists)(json, 'ciProduct') ? undefined : (0, AppRelationshipsCiProduct_1.AppRelationshipsCiProductFromJSON)(json['ciProduct']),
        'betaGroups': !(0, runtime_1.exists)(json, 'betaGroups') ? undefined : (0, AppRelationshipsBetaGroups_1.AppRelationshipsBetaGroupsFromJSON)(json['betaGroups']),
        'appStoreVersions': !(0, runtime_1.exists)(json, 'appStoreVersions') ? undefined : (0, AppRelationshipsAppStoreVersions_1.AppRelationshipsAppStoreVersionsFromJSON)(json['appStoreVersions']),
        'preReleaseVersions': !(0, runtime_1.exists)(json, 'preReleaseVersions') ? undefined : (0, AppRelationshipsPreReleaseVersions_1.AppRelationshipsPreReleaseVersionsFromJSON)(json['preReleaseVersions']),
        'betaAppLocalizations': !(0, runtime_1.exists)(json, 'betaAppLocalizations') ? undefined : (0, AppRelationshipsBetaAppLocalizations_1.AppRelationshipsBetaAppLocalizationsFromJSON)(json['betaAppLocalizations']),
        'builds': !(0, runtime_1.exists)(json, 'builds') ? undefined : (0, AppEncryptionDeclarationRelationshipsBuilds_1.AppEncryptionDeclarationRelationshipsBuildsFromJSON)(json['builds']),
        'betaLicenseAgreement': !(0, runtime_1.exists)(json, 'betaLicenseAgreement') ? undefined : (0, AppRelationshipsBetaLicenseAgreement_1.AppRelationshipsBetaLicenseAgreementFromJSON)(json['betaLicenseAgreement']),
        'betaAppReviewDetail': !(0, runtime_1.exists)(json, 'betaAppReviewDetail') ? undefined : (0, AppRelationshipsBetaAppReviewDetail_1.AppRelationshipsBetaAppReviewDetailFromJSON)(json['betaAppReviewDetail']),
        'appInfos': !(0, runtime_1.exists)(json, 'appInfos') ? undefined : (0, AppRelationshipsAppInfos_1.AppRelationshipsAppInfosFromJSON)(json['appInfos']),
        'appClips': !(0, runtime_1.exists)(json, 'appClips') ? undefined : (0, AppRelationshipsAppClips_1.AppRelationshipsAppClipsFromJSON)(json['appClips']),
        'endUserLicenseAgreement': !(0, runtime_1.exists)(json, 'endUserLicenseAgreement') ? undefined : (0, AppRelationshipsEndUserLicenseAgreement_1.AppRelationshipsEndUserLicenseAgreementFromJSON)(json['endUserLicenseAgreement']),
        'preOrder': !(0, runtime_1.exists)(json, 'preOrder') ? undefined : (0, AppRelationshipsPreOrder_1.AppRelationshipsPreOrderFromJSON)(json['preOrder']),
        'subscriptionGroups': !(0, runtime_1.exists)(json, 'subscriptionGroups') ? undefined : (0, AppRelationshipsSubscriptionGroups_1.AppRelationshipsSubscriptionGroupsFromJSON)(json['subscriptionGroups']),
        'gameCenterEnabledVersions': !(0, runtime_1.exists)(json, 'gameCenterEnabledVersions') ? undefined : (0, AppRelationshipsGameCenterEnabledVersions_1.AppRelationshipsGameCenterEnabledVersionsFromJSON)(json['gameCenterEnabledVersions']),
        'appCustomProductPages': !(0, runtime_1.exists)(json, 'appCustomProductPages') ? undefined : (0, AppRelationshipsAppCustomProductPages_1.AppRelationshipsAppCustomProductPagesFromJSON)(json['appCustomProductPages']),
        'inAppPurchasesV2': !(0, runtime_1.exists)(json, 'inAppPurchasesV2') ? undefined : (0, AppRelationshipsInAppPurchasesV2_1.AppRelationshipsInAppPurchasesV2FromJSON)(json['inAppPurchasesV2']),
        'promotedPurchases': !(0, runtime_1.exists)(json, 'promotedPurchases') ? undefined : (0, AppRelationshipsPromotedPurchases_1.AppRelationshipsPromotedPurchasesFromJSON)(json['promotedPurchases']),
        'appEvents': !(0, runtime_1.exists)(json, 'appEvents') ? undefined : (0, AppRelationshipsAppEvents_1.AppRelationshipsAppEventsFromJSON)(json['appEvents']),
        'reviewSubmissions': !(0, runtime_1.exists)(json, 'reviewSubmissions') ? undefined : (0, AppRelationshipsReviewSubmissions_1.AppRelationshipsReviewSubmissionsFromJSON)(json['reviewSubmissions']),
        'subscriptionGracePeriod': !(0, runtime_1.exists)(json, 'subscriptionGracePeriod') ? undefined : (0, AppRelationshipsSubscriptionGracePeriod_1.AppRelationshipsSubscriptionGracePeriodFromJSON)(json['subscriptionGracePeriod']),
    };
}
exports.AppRelationshipsFromJSONTyped = AppRelationshipsFromJSONTyped;
function AppRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'ciProduct': (0, AppRelationshipsCiProduct_1.AppRelationshipsCiProductToJSON)(value.ciProduct),
        'betaGroups': (0, AppRelationshipsBetaGroups_1.AppRelationshipsBetaGroupsToJSON)(value.betaGroups),
        'appStoreVersions': (0, AppRelationshipsAppStoreVersions_1.AppRelationshipsAppStoreVersionsToJSON)(value.appStoreVersions),
        'preReleaseVersions': (0, AppRelationshipsPreReleaseVersions_1.AppRelationshipsPreReleaseVersionsToJSON)(value.preReleaseVersions),
        'betaAppLocalizations': (0, AppRelationshipsBetaAppLocalizations_1.AppRelationshipsBetaAppLocalizationsToJSON)(value.betaAppLocalizations),
        'builds': (0, AppEncryptionDeclarationRelationshipsBuilds_1.AppEncryptionDeclarationRelationshipsBuildsToJSON)(value.builds),
        'betaLicenseAgreement': (0, AppRelationshipsBetaLicenseAgreement_1.AppRelationshipsBetaLicenseAgreementToJSON)(value.betaLicenseAgreement),
        'betaAppReviewDetail': (0, AppRelationshipsBetaAppReviewDetail_1.AppRelationshipsBetaAppReviewDetailToJSON)(value.betaAppReviewDetail),
        'appInfos': (0, AppRelationshipsAppInfos_1.AppRelationshipsAppInfosToJSON)(value.appInfos),
        'appClips': (0, AppRelationshipsAppClips_1.AppRelationshipsAppClipsToJSON)(value.appClips),
        'endUserLicenseAgreement': (0, AppRelationshipsEndUserLicenseAgreement_1.AppRelationshipsEndUserLicenseAgreementToJSON)(value.endUserLicenseAgreement),
        'preOrder': (0, AppRelationshipsPreOrder_1.AppRelationshipsPreOrderToJSON)(value.preOrder),
        'subscriptionGroups': (0, AppRelationshipsSubscriptionGroups_1.AppRelationshipsSubscriptionGroupsToJSON)(value.subscriptionGroups),
        'gameCenterEnabledVersions': (0, AppRelationshipsGameCenterEnabledVersions_1.AppRelationshipsGameCenterEnabledVersionsToJSON)(value.gameCenterEnabledVersions),
        'appCustomProductPages': (0, AppRelationshipsAppCustomProductPages_1.AppRelationshipsAppCustomProductPagesToJSON)(value.appCustomProductPages),
        'inAppPurchasesV2': (0, AppRelationshipsInAppPurchasesV2_1.AppRelationshipsInAppPurchasesV2ToJSON)(value.inAppPurchasesV2),
        'promotedPurchases': (0, AppRelationshipsPromotedPurchases_1.AppRelationshipsPromotedPurchasesToJSON)(value.promotedPurchases),
        'appEvents': (0, AppRelationshipsAppEvents_1.AppRelationshipsAppEventsToJSON)(value.appEvents),
        'reviewSubmissions': (0, AppRelationshipsReviewSubmissions_1.AppRelationshipsReviewSubmissionsToJSON)(value.reviewSubmissions),
        'subscriptionGracePeriod': (0, AppRelationshipsSubscriptionGracePeriod_1.AppRelationshipsSubscriptionGracePeriodToJSON)(value.subscriptionGracePeriod),
    };
}
exports.AppRelationshipsToJSON = AppRelationshipsToJSON;
//# sourceMappingURL=AppRelationships.js.map