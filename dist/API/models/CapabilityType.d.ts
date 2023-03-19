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
export declare const CapabilityType: {
    readonly Icloud: "ICLOUD";
    readonly InAppPurchase: "IN_APP_PURCHASE";
    readonly GameCenter: "GAME_CENTER";
    readonly PushNotifications: "PUSH_NOTIFICATIONS";
    readonly Wallet: "WALLET";
    readonly InterAppAudio: "INTER_APP_AUDIO";
    readonly Maps: "MAPS";
    readonly AssociatedDomains: "ASSOCIATED_DOMAINS";
    readonly PersonalVpn: "PERSONAL_VPN";
    readonly AppGroups: "APP_GROUPS";
    readonly Healthkit: "HEALTHKIT";
    readonly Homekit: "HOMEKIT";
    readonly WirelessAccessoryConfiguration: "WIRELESS_ACCESSORY_CONFIGURATION";
    readonly ApplePay: "APPLE_PAY";
    readonly DataProtection: "DATA_PROTECTION";
    readonly Sirikit: "SIRIKIT";
    readonly NetworkExtensions: "NETWORK_EXTENSIONS";
    readonly Multipath: "MULTIPATH";
    readonly HotSpot: "HOT_SPOT";
    readonly NfcTagReading: "NFC_TAG_READING";
    readonly Classkit: "CLASSKIT";
    readonly AutofillCredentialProvider: "AUTOFILL_CREDENTIAL_PROVIDER";
    readonly AccessWifiInformation: "ACCESS_WIFI_INFORMATION";
    readonly NetworkCustomProtocol: "NETWORK_CUSTOM_PROTOCOL";
    readonly CoremediaHlsLowLatency: "COREMEDIA_HLS_LOW_LATENCY";
    readonly SystemExtensionInstall: "SYSTEM_EXTENSION_INSTALL";
    readonly UserManagement: "USER_MANAGEMENT";
    readonly AppleIdAuth: "APPLE_ID_AUTH";
};
export type CapabilityType = typeof CapabilityType[keyof typeof CapabilityType];
export declare function CapabilityTypeFromJSON(json: any): CapabilityType;
export declare function CapabilityTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CapabilityType;
export declare function CapabilityTypeToJSON(value?: CapabilityType | null): any;
