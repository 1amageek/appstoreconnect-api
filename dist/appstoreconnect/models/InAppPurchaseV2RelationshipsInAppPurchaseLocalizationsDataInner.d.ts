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
 * @interface InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInner
 */
export interface InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInner {
    /**
     *
     * @type {string}
     * @memberof InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInner
     */
    type: InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInnerTypeEnum;
    /**
     *
     * @type {string}
     * @memberof InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInner
     */
    id: string;
}
/**
 * @export
 */
export declare const InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInnerTypeEnum: {
    readonly InAppPurchaseLocalizations: "inAppPurchaseLocalizations";
};
export type InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInnerTypeEnum = typeof InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInnerTypeEnum[keyof typeof InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInnerTypeEnum];
/**
 * Check if a given object implements the InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInner interface.
 */
export declare function instanceOfInAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInner(value: object): boolean;
export declare function InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInnerFromJSON(json: any): InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInner;
export declare function InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInner;
export declare function InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInnerToJSON(value?: InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInner | null): any;
