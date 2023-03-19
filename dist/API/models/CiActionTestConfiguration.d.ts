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
import type { CiTestDestination } from './CiTestDestination';
/**
 *
 * @export
 * @interface CiActionTestConfiguration
 */
export interface CiActionTestConfiguration {
    /**
     *
     * @type {string}
     * @memberof CiActionTestConfiguration
     */
    kind?: CiActionTestConfigurationKindEnum;
    /**
     *
     * @type {string}
     * @memberof CiActionTestConfiguration
     */
    testPlanName?: string;
    /**
     *
     * @type {Array<CiTestDestination>}
     * @memberof CiActionTestConfiguration
     */
    testDestinations?: Array<CiTestDestination>;
}
/**
 * @export
 */
export declare const CiActionTestConfigurationKindEnum: {
    readonly UseSchemeSettings: "USE_SCHEME_SETTINGS";
    readonly SpecificTestPlans: "SPECIFIC_TEST_PLANS";
};
export type CiActionTestConfigurationKindEnum = typeof CiActionTestConfigurationKindEnum[keyof typeof CiActionTestConfigurationKindEnum];
/**
 * Check if a given object implements the CiActionTestConfiguration interface.
 */
export declare function instanceOfCiActionTestConfiguration(value: object): boolean;
export declare function CiActionTestConfigurationFromJSON(json: any): CiActionTestConfiguration;
export declare function CiActionTestConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiActionTestConfiguration;
export declare function CiActionTestConfigurationToJSON(value?: CiActionTestConfiguration | null): any;
