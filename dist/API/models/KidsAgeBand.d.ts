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
/**
 *
 * @export
 */
export declare const KidsAgeBand: {
    readonly FiveAndUnder: "FIVE_AND_UNDER";
    readonly SixToEight: "SIX_TO_EIGHT";
    readonly NineToEleven: "NINE_TO_ELEVEN";
};
export type KidsAgeBand = typeof KidsAgeBand[keyof typeof KidsAgeBand];
export declare function KidsAgeBandFromJSON(json: any): KidsAgeBand;
export declare function KidsAgeBandFromJSONTyped(json: any, ignoreDiscriminator: boolean): KidsAgeBand;
export declare function KidsAgeBandToJSON(value?: KidsAgeBand | null): any;
