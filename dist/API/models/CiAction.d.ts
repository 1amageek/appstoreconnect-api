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
import type { BuildAudienceType } from './BuildAudienceType';
import type { CiActionTestConfiguration } from './CiActionTestConfiguration';
import type { CiActionType } from './CiActionType';
/**
 *
 * @export
 * @interface CiAction
 */
export interface CiAction {
    /**
     *
     * @type {string}
     * @memberof CiAction
     */
    name?: string;
    /**
     *
     * @type {CiActionType}
     * @memberof CiAction
     */
    actionType?: CiActionType;
    /**
     *
     * @type {string}
     * @memberof CiAction
     */
    destination?: CiActionDestinationEnum;
    /**
     *
     * @type {BuildAudienceType}
     * @memberof CiAction
     */
    buildDistributionAudience?: BuildAudienceType;
    /**
     *
     * @type {CiActionTestConfiguration}
     * @memberof CiAction
     */
    testConfiguration?: CiActionTestConfiguration;
    /**
     *
     * @type {string}
     * @memberof CiAction
     */
    scheme?: string;
    /**
     *
     * @type {string}
     * @memberof CiAction
     */
    platform?: CiActionPlatformEnum;
    /**
     *
     * @type {boolean}
     * @memberof CiAction
     */
    isRequiredToPass?: boolean;
}
/**
 * @export
 */
export declare const CiActionDestinationEnum: {
    readonly IosDevice: "ANY_IOS_DEVICE";
    readonly IosSimulator: "ANY_IOS_SIMULATOR";
    readonly TvosDevice: "ANY_TVOS_DEVICE";
    readonly TvosSimulator: "ANY_TVOS_SIMULATOR";
    readonly WatchosDevice: "ANY_WATCHOS_DEVICE";
    readonly WatchosSimulator: "ANY_WATCHOS_SIMULATOR";
    readonly Mac: "ANY_MAC";
    readonly MacCatalyst: "ANY_MAC_CATALYST";
};
export type CiActionDestinationEnum = typeof CiActionDestinationEnum[keyof typeof CiActionDestinationEnum];
/**
 * @export
 */
export declare const CiActionPlatformEnum: {
    readonly Macos: "MACOS";
    readonly Ios: "IOS";
    readonly Tvos: "TVOS";
    readonly Watchos: "WATCHOS";
};
export type CiActionPlatformEnum = typeof CiActionPlatformEnum[keyof typeof CiActionPlatformEnum];
/**
 * Check if a given object implements the CiAction interface.
 */
export declare function instanceOfCiAction(value: object): boolean;
export declare function CiActionFromJSON(json: any): CiAction;
export declare function CiActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiAction;
export declare function CiActionToJSON(value?: CiAction | null): any;
