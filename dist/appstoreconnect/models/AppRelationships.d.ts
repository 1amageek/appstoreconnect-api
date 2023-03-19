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
import type { AppEncryptionDeclarationRelationshipsBuilds } from './AppEncryptionDeclarationRelationshipsBuilds';
import type { AppRelationshipsAppClips } from './AppRelationshipsAppClips';
import type { AppRelationshipsAppCustomProductPages } from './AppRelationshipsAppCustomProductPages';
import type { AppRelationshipsAppEvents } from './AppRelationshipsAppEvents';
import type { AppRelationshipsAppInfos } from './AppRelationshipsAppInfos';
import type { AppRelationshipsAppStoreVersions } from './AppRelationshipsAppStoreVersions';
import type { AppRelationshipsBetaAppLocalizations } from './AppRelationshipsBetaAppLocalizations';
import type { AppRelationshipsBetaAppReviewDetail } from './AppRelationshipsBetaAppReviewDetail';
import type { AppRelationshipsBetaGroups } from './AppRelationshipsBetaGroups';
import type { AppRelationshipsBetaLicenseAgreement } from './AppRelationshipsBetaLicenseAgreement';
import type { AppRelationshipsCiProduct } from './AppRelationshipsCiProduct';
import type { AppRelationshipsEndUserLicenseAgreement } from './AppRelationshipsEndUserLicenseAgreement';
import type { AppRelationshipsGameCenterEnabledVersions } from './AppRelationshipsGameCenterEnabledVersions';
import type { AppRelationshipsInAppPurchasesV2 } from './AppRelationshipsInAppPurchasesV2';
import type { AppRelationshipsPreOrder } from './AppRelationshipsPreOrder';
import type { AppRelationshipsPreReleaseVersions } from './AppRelationshipsPreReleaseVersions';
import type { AppRelationshipsPromotedPurchases } from './AppRelationshipsPromotedPurchases';
import type { AppRelationshipsReviewSubmissions } from './AppRelationshipsReviewSubmissions';
import type { AppRelationshipsSubscriptionGracePeriod } from './AppRelationshipsSubscriptionGracePeriod';
import type { AppRelationshipsSubscriptionGroups } from './AppRelationshipsSubscriptionGroups';
/**
 *
 * @export
 * @interface AppRelationships
 */
export interface AppRelationships {
    /**
     *
     * @type {AppRelationshipsCiProduct}
     * @memberof AppRelationships
     */
    ciProduct?: AppRelationshipsCiProduct;
    /**
     *
     * @type {AppRelationshipsBetaGroups}
     * @memberof AppRelationships
     */
    betaGroups?: AppRelationshipsBetaGroups;
    /**
     *
     * @type {AppRelationshipsAppStoreVersions}
     * @memberof AppRelationships
     */
    appStoreVersions?: AppRelationshipsAppStoreVersions;
    /**
     *
     * @type {AppRelationshipsPreReleaseVersions}
     * @memberof AppRelationships
     */
    preReleaseVersions?: AppRelationshipsPreReleaseVersions;
    /**
     *
     * @type {AppRelationshipsBetaAppLocalizations}
     * @memberof AppRelationships
     */
    betaAppLocalizations?: AppRelationshipsBetaAppLocalizations;
    /**
     *
     * @type {AppEncryptionDeclarationRelationshipsBuilds}
     * @memberof AppRelationships
     */
    builds?: AppEncryptionDeclarationRelationshipsBuilds;
    /**
     *
     * @type {AppRelationshipsBetaLicenseAgreement}
     * @memberof AppRelationships
     */
    betaLicenseAgreement?: AppRelationshipsBetaLicenseAgreement;
    /**
     *
     * @type {AppRelationshipsBetaAppReviewDetail}
     * @memberof AppRelationships
     */
    betaAppReviewDetail?: AppRelationshipsBetaAppReviewDetail;
    /**
     *
     * @type {AppRelationshipsAppInfos}
     * @memberof AppRelationships
     */
    appInfos?: AppRelationshipsAppInfos;
    /**
     *
     * @type {AppRelationshipsAppClips}
     * @memberof AppRelationships
     */
    appClips?: AppRelationshipsAppClips;
    /**
     *
     * @type {AppRelationshipsEndUserLicenseAgreement}
     * @memberof AppRelationships
     */
    endUserLicenseAgreement?: AppRelationshipsEndUserLicenseAgreement;
    /**
     *
     * @type {AppRelationshipsPreOrder}
     * @memberof AppRelationships
     */
    preOrder?: AppRelationshipsPreOrder;
    /**
     *
     * @type {AppRelationshipsSubscriptionGroups}
     * @memberof AppRelationships
     */
    subscriptionGroups?: AppRelationshipsSubscriptionGroups;
    /**
     *
     * @type {AppRelationshipsGameCenterEnabledVersions}
     * @memberof AppRelationships
     */
    gameCenterEnabledVersions?: AppRelationshipsGameCenterEnabledVersions;
    /**
     *
     * @type {AppRelationshipsAppCustomProductPages}
     * @memberof AppRelationships
     */
    appCustomProductPages?: AppRelationshipsAppCustomProductPages;
    /**
     *
     * @type {AppRelationshipsInAppPurchasesV2}
     * @memberof AppRelationships
     */
    inAppPurchasesV2?: AppRelationshipsInAppPurchasesV2;
    /**
     *
     * @type {AppRelationshipsPromotedPurchases}
     * @memberof AppRelationships
     */
    promotedPurchases?: AppRelationshipsPromotedPurchases;
    /**
     *
     * @type {AppRelationshipsAppEvents}
     * @memberof AppRelationships
     */
    appEvents?: AppRelationshipsAppEvents;
    /**
     *
     * @type {AppRelationshipsReviewSubmissions}
     * @memberof AppRelationships
     */
    reviewSubmissions?: AppRelationshipsReviewSubmissions;
    /**
     *
     * @type {AppRelationshipsSubscriptionGracePeriod}
     * @memberof AppRelationships
     */
    subscriptionGracePeriod?: AppRelationshipsSubscriptionGracePeriod;
}
/**
 * Check if a given object implements the AppRelationships interface.
 */
export declare function instanceOfAppRelationships(value: object): boolean;
export declare function AppRelationshipsFromJSON(json: any): AppRelationships;
export declare function AppRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRelationships;
export declare function AppRelationshipsToJSON(value?: AppRelationships | null): any;
