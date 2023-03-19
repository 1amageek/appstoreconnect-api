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
export declare const BrazilAgeRating: {
    readonly L: "L";
    readonly Ten: "TEN";
    readonly Twelve: "TWELVE";
    readonly Fourteen: "FOURTEEN";
    readonly Sixteen: "SIXTEEN";
    readonly Eighteen: "EIGHTEEN";
};
export type BrazilAgeRating = typeof BrazilAgeRating[keyof typeof BrazilAgeRating];
export declare function BrazilAgeRatingFromJSON(json: any): BrazilAgeRating;
export declare function BrazilAgeRatingFromJSONTyped(json: any, ignoreDiscriminator: boolean): BrazilAgeRating;
export declare function BrazilAgeRatingToJSON(value?: BrazilAgeRating | null): any;
