"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppStoreConnectClient = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const appstoreconnect_1 = require("./appstoreconnect");
const appstoreconnect_2 = require("./appstoreconnect");
const appstoreconnect_3 = require("./appstoreconnect");
const appstoreconnect_4 = require("./appstoreconnect");
const appstoreconnect_5 = require("./appstoreconnect");
const appstoreconnect_6 = require("./appstoreconnect");
const appstoreconnect_7 = require("./appstoreconnect");
const appstoreconnect_8 = require("./appstoreconnect");
const appstoreconnect_9 = require("./appstoreconnect");
const appstoreconnect_10 = require("./appstoreconnect");
const appstoreconnect_11 = require("./appstoreconnect");
const appstoreconnect_12 = require("./appstoreconnect");
const appstoreconnect_13 = require("./appstoreconnect");
const appstoreconnect_14 = require("./appstoreconnect");
const appstoreconnect_15 = require("./appstoreconnect");
const appstoreconnect_16 = require("./appstoreconnect");
const appstoreconnect_17 = require("./appstoreconnect");
const appstoreconnect_18 = require("./appstoreconnect");
const appstoreconnect_19 = require("./appstoreconnect");
const appstoreconnect_20 = require("./appstoreconnect");
const appstoreconnect_21 = require("./appstoreconnect");
const appstoreconnect_22 = require("./appstoreconnect");
const appstoreconnect_23 = require("./appstoreconnect");
const appstoreconnect_24 = require("./appstoreconnect");
const appstoreconnect_25 = require("./appstoreconnect");
const appstoreconnect_26 = require("./appstoreconnect");
const appstoreconnect_27 = require("./appstoreconnect");
const appstoreconnect_28 = require("./appstoreconnect");
const appstoreconnect_29 = require("./appstoreconnect");
const appstoreconnect_30 = require("./appstoreconnect");
const appstoreconnect_31 = require("./appstoreconnect");
const appstoreconnect_32 = require("./appstoreconnect");
const appstoreconnect_33 = require("./appstoreconnect");
const appstoreconnect_34 = require("./appstoreconnect");
const appstoreconnect_35 = require("./appstoreconnect");
const appstoreconnect_36 = require("./appstoreconnect");
const appstoreconnect_37 = require("./appstoreconnect");
const appstoreconnect_38 = require("./appstoreconnect");
const appstoreconnect_39 = require("./appstoreconnect");
const appstoreconnect_40 = require("./appstoreconnect");
const appstoreconnect_41 = require("./appstoreconnect");
const appstoreconnect_42 = require("./appstoreconnect");
const appstoreconnect_43 = require("./appstoreconnect");
const appstoreconnect_44 = require("./appstoreconnect");
const appstoreconnect_45 = require("./appstoreconnect");
const appstoreconnect_46 = require("./appstoreconnect");
const appstoreconnect_47 = require("./appstoreconnect");
const appstoreconnect_48 = require("./appstoreconnect");
const appstoreconnect_49 = require("./appstoreconnect");
const appstoreconnect_50 = require("./appstoreconnect");
const appstoreconnect_51 = require("./appstoreconnect");
const appstoreconnect_52 = require("./appstoreconnect");
const appstoreconnect_53 = require("./appstoreconnect");
const appstoreconnect_54 = require("./appstoreconnect");
const appstoreconnect_55 = require("./appstoreconnect");
const appstoreconnect_56 = require("./appstoreconnect");
const appstoreconnect_57 = require("./appstoreconnect");
const appstoreconnect_58 = require("./appstoreconnect");
const appstoreconnect_59 = require("./appstoreconnect");
const appstoreconnect_60 = require("./appstoreconnect");
const appstoreconnect_61 = require("./appstoreconnect");
const appstoreconnect_62 = require("./appstoreconnect");
const appstoreconnect_63 = require("./appstoreconnect");
const appstoreconnect_64 = require("./appstoreconnect");
const appstoreconnect_65 = require("./appstoreconnect");
const appstoreconnect_66 = require("./appstoreconnect");
const appstoreconnect_67 = require("./appstoreconnect");
const appstoreconnect_68 = require("./appstoreconnect");
const appstoreconnect_69 = require("./appstoreconnect");
const appstoreconnect_70 = require("./appstoreconnect");
const appstoreconnect_71 = require("./appstoreconnect");
const appstoreconnect_72 = require("./appstoreconnect");
const appstoreconnect_73 = require("./appstoreconnect");
const appstoreconnect_74 = require("./appstoreconnect");
const appstoreconnect_75 = require("./appstoreconnect");
const appstoreconnect_76 = require("./appstoreconnect");
const appstoreconnect_77 = require("./appstoreconnect");
const appstoreconnect_78 = require("./appstoreconnect");
const appstoreconnect_79 = require("./appstoreconnect");
const appstoreconnect_80 = require("./appstoreconnect");
const appstoreconnect_81 = require("./appstoreconnect");
const appstoreconnect_82 = require("./appstoreconnect");
const appstoreconnect_83 = require("./appstoreconnect");
const appstoreconnect_84 = require("./appstoreconnect");
const appstoreconnect_85 = require("./appstoreconnect");
const appstoreconnect_86 = require("./appstoreconnect");
const appstoreconnect_87 = require("./appstoreconnect");
const appstoreconnect_88 = require("./appstoreconnect");
const appstoreconnect_89 = require("./appstoreconnect");
const appstoreconnect_90 = require("./appstoreconnect");
const appstoreconnect_91 = require("./appstoreconnect");
const appstoreconnect_92 = require("./appstoreconnect");
const appstoreconnect_93 = require("./appstoreconnect");
const appstoreconnect_94 = require("./appstoreconnect");
const appstoreconnect_95 = require("./appstoreconnect");
const appstoreconnect_96 = require("./appstoreconnect");
const appstoreconnect_97 = require("./appstoreconnect");
const appstoreconnect_98 = require("./appstoreconnect");
const appstoreconnect_99 = require("./appstoreconnect");
const appstoreconnect_100 = require("./appstoreconnect");
const appstoreconnect_101 = require("./appstoreconnect");
const appstoreconnect_102 = require("./appstoreconnect");
const appstoreconnect_103 = require("./appstoreconnect");
const appstoreconnect_104 = require("./appstoreconnect");
const appstoreconnect_105 = require("./appstoreconnect");
const appstoreconnect_106 = require("./appstoreconnect");
const appstoreconnect_107 = require("./appstoreconnect");
const appstoreconnect_108 = require("./appstoreconnect");
const appstoreconnect_109 = require("./appstoreconnect");
const appstoreconnect_110 = require("./appstoreconnect");
const appstoreconnect_111 = require("./appstoreconnect");
const appstoreconnect_112 = require("./appstoreconnect");
const appstoreconnect_113 = require("./appstoreconnect");
class AppStoreConnectClient {
    constructor(options, basePath) {
        this.options = options;
        this.basePath = basePath;
        this.bearerTokenGeneratedAt = 0;
    }
    getConfiguration(options) {
        var _a;
        const expirationTime = (_a = options.expirationTime) !== null && _a !== void 0 ? _a : 600;
        const hasExpired = this.bearerTokenGeneratedAt && (Date.now() - this.bearerTokenGeneratedAt) > (1000 * expirationTime);
        if (hasExpired) {
            options.bearerToken = undefined;
        }
        const accessToken = this.createBearerToken(options);
        return new appstoreconnect_1.Configuration({ accessToken });
    }
    createBearerToken(options) {
        if (options.bearerToken) {
            return options.bearerToken;
        }
        const now = Date.now();
        const expirationTime = options.expirationTime || 600;
        const payload = {
            iss: options.issuerId,
            exp: Math.floor(now / 1000) + expirationTime,
        };
        const signOptions = {
            algorithm: "ES256",
            audience: "appstoreconnect-v1",
            header: {
                // The algorithm used to sign the token (ECDSA with SHA-256)
                alg: "ES256",
                // The ID of the private key used to sign the token
                kid: options.privateKeyId,
                // The type of the token (JWT)
                typ: "JWT",
            },
        };
        this.bearerTokenGeneratedAt = now;
        return (0, jsonwebtoken_1.sign)(payload, options.privateKey, signOptions);
    }
    getAgeRatingDeclarationsApi() {
        const api = new appstoreconnect_2.AgeRatingDeclarationsApi(this.getConfiguration(this.options));
        return api;
    }
    getAppAvailabilitiesApi() {
        const api = new appstoreconnect_3.AppAvailabilitiesApi(this.getConfiguration(this.options));
        return api;
    }
    getAppCategoriesApi() {
        const api = new appstoreconnect_4.AppCategoriesApi(this.getConfiguration(this.options));
        return api;
    }
    getAppClipAdvancedExperienceImagesApi() {
        const api = new appstoreconnect_5.AppClipAdvancedExperienceImagesApi(this.getConfiguration(this.options));
        return api;
    }
    getAppClipAdvancedExperiencesApi() {
        const api = new appstoreconnect_6.AppClipAdvancedExperiencesApi(this.getConfiguration(this.options));
        return api;
    }
    getAppClipAppStoreReviewDetailsApi() {
        const api = new appstoreconnect_7.AppClipAppStoreReviewDetailsApi(this.getConfiguration(this.options));
        return api;
    }
    getAppClipDefaultExperienceLocalizationsApi() {
        const api = new appstoreconnect_8.AppClipDefaultExperienceLocalizationsApi(this.getConfiguration(this.options));
        return api;
    }
    getAppClipDefaultExperiencesApi() {
        const api = new appstoreconnect_9.AppClipDefaultExperiencesApi(this.getConfiguration(this.options));
        return api;
    }
    getAppClipHeaderImagesApi() {
        const api = new appstoreconnect_10.AppClipHeaderImagesApi(this.getConfiguration(this.options));
        return api;
    }
    getAppClipsApi() {
        const api = new appstoreconnect_11.AppClipsApi(this.getConfiguration(this.options));
        return api;
    }
    getAppCustomProductPageLocalizationsApi() {
        const api = new appstoreconnect_12.AppCustomProductPageLocalizationsApi(this.getConfiguration(this.options));
        return api;
    }
    getAppCustomProductPageVersionsApi() {
        const api = new appstoreconnect_13.AppCustomProductPageVersionsApi(this.getConfiguration(this.options));
        return api;
    }
    getAppCustomProductPagesApi() {
        const api = new appstoreconnect_14.AppCustomProductPagesApi(this.getConfiguration(this.options));
        return api;
    }
    getAppEncryptionDeclarationDocumentsApi() {
        const api = new appstoreconnect_15.AppEncryptionDeclarationDocumentsApi(this.getConfiguration(this.options));
        return api;
    }
    getAppEncryptionDeclarationsApi() {
        const api = new appstoreconnect_16.AppEncryptionDeclarationsApi(this.getConfiguration(this.options));
        return api;
    }
    getAppEventLocalizationsApi() {
        const api = new appstoreconnect_17.AppEventLocalizationsApi(this.getConfiguration(this.options));
        return api;
    }
    getAppEventScreenshotsApi() {
        const api = new appstoreconnect_18.AppEventScreenshotsApi(this.getConfiguration(this.options));
        return api;
    }
    getAppEventVideoClipsApi() {
        const api = new appstoreconnect_19.AppEventVideoClipsApi(this.getConfiguration(this.options));
        return api;
    }
    getAppEventsApi() {
        const api = new appstoreconnect_20.AppEventsApi(this.getConfiguration(this.options));
        return api;
    }
    getAppInfoLocalizationsApi() {
        const api = new appstoreconnect_21.AppInfoLocalizationsApi(this.getConfiguration(this.options));
        return api;
    }
    getAppInfosApi() {
        const api = new appstoreconnect_22.AppInfosApi(this.getConfiguration(this.options));
        return api;
    }
    getAppPreOrdersApi() {
        const api = new appstoreconnect_23.AppPreOrdersApi(this.getConfiguration(this.options));
        return api;
    }
    getAppPreviewSetsApi() {
        const api = new appstoreconnect_24.AppPreviewSetsApi(this.getConfiguration(this.options));
        return api;
    }
    getAppPreviewsApi() {
        const api = new appstoreconnect_25.AppPreviewsApi(this.getConfiguration(this.options));
        return api;
    }
    getAppPricePointsApi() {
        const api = new appstoreconnect_26.AppPricePointsApi(this.getConfiguration(this.options));
        return api;
    }
    getAppPriceSchedulesApi() {
        const api = new appstoreconnect_27.AppPriceSchedulesApi(this.getConfiguration(this.options));
        return api;
    }
    getAppScreenshotSetsApi() {
        const api = new appstoreconnect_28.AppScreenshotSetsApi(this.getConfiguration(this.options));
        return api;
    }
    getAppScreenshotsApi() {
        const api = new appstoreconnect_29.AppScreenshotsApi(this.getConfiguration(this.options));
        return api;
    }
    getAppStoreReviewAttachmentsApi() {
        const api = new appstoreconnect_30.AppStoreReviewAttachmentsApi(this.getConfiguration(this.options));
        return api;
    }
    getAppStoreReviewDetailsApi() {
        const api = new appstoreconnect_31.AppStoreReviewDetailsApi(this.getConfiguration(this.options));
        return api;
    }
    getAppStoreVersionExperimentTreatmentLocalizationsApi() {
        const api = new appstoreconnect_32.AppStoreVersionExperimentTreatmentLocalizationsApi(this.getConfiguration(this.options));
        return api;
    }
    getAppStoreVersionExperimentTreatmentsApi() {
        const api = new appstoreconnect_33.AppStoreVersionExperimentTreatmentsApi(this.getConfiguration(this.options));
        return api;
    }
    getAppStoreVersionExperimentsApi() {
        const api = new appstoreconnect_34.AppStoreVersionExperimentsApi(this.getConfiguration(this.options));
        return api;
    }
    getAppStoreVersionLocalizationsApi() {
        const api = new appstoreconnect_35.AppStoreVersionLocalizationsApi(this.getConfiguration(this.options));
        return api;
    }
    getAppStoreVersionPhasedReleasesApi() {
        const api = new appstoreconnect_36.AppStoreVersionPhasedReleasesApi(this.getConfiguration(this.options));
        return api;
    }
    getAppStoreVersionPromotionsApi() {
        const api = new appstoreconnect_37.AppStoreVersionPromotionsApi(this.getConfiguration(this.options));
        return api;
    }
    getAppStoreVersionReleaseRequestsApi() {
        const api = new appstoreconnect_38.AppStoreVersionReleaseRequestsApi(this.getConfiguration(this.options));
        return api;
    }
    getAppStoreVersionsApi() {
        const api = new appstoreconnect_39.AppStoreVersionsApi(this.getConfiguration(this.options));
        return api;
    }
    getAppsApi() {
        const api = new appstoreconnect_40.AppsApi(this.getConfiguration(this.options));
        return api;
    }
    getBetaAppClipInvocationLocalizationsApi() {
        const api = new appstoreconnect_41.BetaAppClipInvocationLocalizationsApi(this.getConfiguration(this.options));
        return api;
    }
    getBetaAppClipInvocationsApi() {
        const api = new appstoreconnect_42.BetaAppClipInvocationsApi(this.getConfiguration(this.options));
        return api;
    }
    getBetaAppLocalizationsApi() {
        const api = new appstoreconnect_43.BetaAppLocalizationsApi(this.getConfiguration(this.options));
        return api;
    }
    getBetaAppReviewDetailsApi() {
        const api = new appstoreconnect_44.BetaAppReviewDetailsApi(this.getConfiguration(this.options));
        return api;
    }
    getBetaAppReviewSubmissionsApi() {
        const api = new appstoreconnect_45.BetaAppReviewSubmissionsApi(this.getConfiguration(this.options));
        return api;
    }
    getBetaBuildLocalizationsApi() {
        const api = new appstoreconnect_46.BetaBuildLocalizationsApi(this.getConfiguration(this.options));
        return api;
    }
    getBetaGroupsApi() {
        const api = new appstoreconnect_47.BetaGroupsApi(this.getConfiguration(this.options));
        return api;
    }
    getBetaLicenseAgreementsApi() {
        const api = new appstoreconnect_48.BetaLicenseAgreementsApi(this.getConfiguration(this.options));
        return api;
    }
    getBetaTesterInvitationsApi() {
        const api = new appstoreconnect_49.BetaTesterInvitationsApi(this.getConfiguration(this.options));
        return api;
    }
    getBetaTestersApi() {
        const api = new appstoreconnect_50.BetaTestersApi(this.getConfiguration(this.options));
        return api;
    }
    getBuildBetaDetailsApi() {
        const api = new appstoreconnect_51.BuildBetaDetailsApi(this.getConfiguration(this.options));
        return api;
    }
    getBuildBetaNotificationsApi() {
        const api = new appstoreconnect_52.BuildBetaNotificationsApi(this.getConfiguration(this.options));
        return api;
    }
    getBuildBundlesApi() {
        const api = new appstoreconnect_53.BuildBundlesApi(this.getConfiguration(this.options));
        return api;
    }
    getBuildsApi() {
        const api = new appstoreconnect_54.BuildsApi(this.getConfiguration(this.options));
        return api;
    }
    getBundleIdCapabilitiesApi() {
        const api = new appstoreconnect_55.BundleIdCapabilitiesApi(this.getConfiguration(this.options));
        return api;
    }
    getBundleIdsApi() {
        const api = new appstoreconnect_56.BundleIdsApi(this.getConfiguration(this.options));
        return api;
    }
    getCertificatesApi() {
        const api = new appstoreconnect_57.CertificatesApi(this.getConfiguration(this.options));
        return api;
    }
    getCiArtifactsApi() {
        const api = new appstoreconnect_58.CiArtifactsApi(this.getConfiguration(this.options));
        return api;
    }
    getCiBuildActionsApi() {
        const api = new appstoreconnect_59.CiBuildActionsApi(this.getConfiguration(this.options));
        return api;
    }
    getCiBuildRunsApi() {
        const api = new appstoreconnect_60.CiBuildRunsApi(this.getConfiguration(this.options));
        return api;
    }
    getCiIssuesApi() {
        const api = new appstoreconnect_61.CiIssuesApi(this.getConfiguration(this.options));
        return api;
    }
    getCiMacOsVersionsApi() {
        const api = new appstoreconnect_62.CiMacOsVersionsApi(this.getConfiguration(this.options));
        return api;
    }
    getCiProductsApi() {
        const api = new appstoreconnect_63.CiProductsApi(this.getConfiguration(this.options));
        return api;
    }
    getCiTestResultsApi() {
        const api = new appstoreconnect_64.CiTestResultsApi(this.getConfiguration(this.options));
        return api;
    }
    getCiWorkflowsApi() {
        const api = new appstoreconnect_65.CiWorkflowsApi(this.getConfiguration(this.options));
        return api;
    }
    getCiXcodeVersionsApi() {
        const api = new appstoreconnect_66.CiXcodeVersionsApi(this.getConfiguration(this.options));
        return api;
    }
    getCustomerReviewResponsesApi() {
        const api = new appstoreconnect_67.CustomerReviewResponsesApi(this.getConfiguration(this.options));
        return api;
    }
    getCustomerReviewsApi() {
        const api = new appstoreconnect_68.CustomerReviewsApi(this.getConfiguration(this.options));
        return api;
    }
    getDevicesApi() {
        const api = new appstoreconnect_69.DevicesApi(this.getConfiguration(this.options));
        return api;
    }
    getDiagnosticSignaturesApi() {
        const api = new appstoreconnect_70.DiagnosticSignaturesApi(this.getConfiguration(this.options));
        return api;
    }
    getEndUserLicenseAgreementsApi() {
        const api = new appstoreconnect_71.EndUserLicenseAgreementsApi(this.getConfiguration(this.options));
        return api;
    }
    getFinanceReportsApi() {
        const api = new appstoreconnect_72.FinanceReportsApi(this.getConfiguration(this.options));
        return api;
    }
    getGameCenterEnabledVersionsApi() {
        const api = new appstoreconnect_73.GameCenterEnabledVersionsApi(this.getConfiguration(this.options));
        return api;
    }
    getInAppPurchaseAppStoreReviewScreenshotsApi() {
        const api = new appstoreconnect_74.InAppPurchaseAppStoreReviewScreenshotsApi(this.getConfiguration(this.options));
        return api;
    }
    getInAppPurchaseAvailabilitiesApi() {
        const api = new appstoreconnect_75.InAppPurchaseAvailabilitiesApi(this.getConfiguration(this.options));
        return api;
    }
    getInAppPurchaseContentsApi() {
        const api = new appstoreconnect_76.InAppPurchaseContentsApi(this.getConfiguration(this.options));
        return api;
    }
    getInAppPurchaseLocalizationsApi() {
        const api = new appstoreconnect_77.InAppPurchaseLocalizationsApi(this.getConfiguration(this.options));
        return api;
    }
    getInAppPurchasePriceSchedulesApi() {
        const api = new appstoreconnect_78.InAppPurchasePriceSchedulesApi(this.getConfiguration(this.options));
        return api;
    }
    getInAppPurchaseSubmissionsApi() {
        const api = new appstoreconnect_79.InAppPurchaseSubmissionsApi(this.getConfiguration(this.options));
        return api;
    }
    getInAppPurchasesApi() {
        const api = new appstoreconnect_80.InAppPurchasesApi(this.getConfiguration(this.options));
        return api;
    }
    getPreReleaseVersionsApi() {
        const api = new appstoreconnect_81.PreReleaseVersionsApi(this.getConfiguration(this.options));
        return api;
    }
    getProfilesApi() {
        const api = new appstoreconnect_82.ProfilesApi(this.getConfiguration(this.options));
        return api;
    }
    getPromotedPurchaseImagesApi() {
        const api = new appstoreconnect_83.PromotedPurchaseImagesApi(this.getConfiguration(this.options));
        return api;
    }
    getPromotedPurchasesApi() {
        const api = new appstoreconnect_84.PromotedPurchasesApi(this.getConfiguration(this.options));
        return api;
    }
    getReviewSubmissionItemsApi() {
        const api = new appstoreconnect_85.ReviewSubmissionItemsApi(this.getConfiguration(this.options));
        return api;
    }
    getReviewSubmissionsApi() {
        const api = new appstoreconnect_86.ReviewSubmissionsApi(this.getConfiguration(this.options));
        return api;
    }
    getRoutingAppCoveragesApi() {
        const api = new appstoreconnect_87.RoutingAppCoveragesApi(this.getConfiguration(this.options));
        return api;
    }
    getSalesReportsApi() {
        const api = new appstoreconnect_88.SalesReportsApi(this.getConfiguration(this.options));
        return api;
    }
    getSandboxTestersApi() {
        const api = new appstoreconnect_89.SandboxTestersApi(this.getConfiguration(this.options));
        return api;
    }
    getSandboxTestersClearPurchaseHistoryRequestApi() {
        const api = new appstoreconnect_90.SandboxTestersClearPurchaseHistoryRequestApi(this.getConfiguration(this.options));
        return api;
    }
    getScmGitReferencesApi() {
        const api = new appstoreconnect_91.ScmGitReferencesApi(this.getConfiguration(this.options));
        return api;
    }
    getScmProvidersApi() {
        const api = new appstoreconnect_92.ScmProvidersApi(this.getConfiguration(this.options));
        return api;
    }
    getScmPullRequestsApi() {
        const api = new appstoreconnect_93.ScmPullRequestsApi(this.getConfiguration(this.options));
        return api;
    }
    getScmRepositoriesApi() {
        const api = new appstoreconnect_94.ScmRepositoriesApi(this.getConfiguration(this.options));
        return api;
    }
    getSubscriptionAppStoreReviewScreenshotsApi() {
        const api = new appstoreconnect_95.SubscriptionAppStoreReviewScreenshotsApi(this.getConfiguration(this.options));
        return api;
    }
    getSubscriptionAvailabilitiesApi() {
        const api = new appstoreconnect_96.SubscriptionAvailabilitiesApi(this.getConfiguration(this.options));
        return api;
    }
    getSubscriptionGracePeriodsApi() {
        const api = new appstoreconnect_97.SubscriptionGracePeriodsApi(this.getConfiguration(this.options));
        return api;
    }
    getSubscriptionGroupLocalizationsApi() {
        const api = new appstoreconnect_98.SubscriptionGroupLocalizationsApi(this.getConfiguration(this.options));
        return api;
    }
    getSubscriptionGroupSubmissionsApi() {
        const api = new appstoreconnect_99.SubscriptionGroupSubmissionsApi(this.getConfiguration(this.options));
        return api;
    }
    getSubscriptionGroupsApi() {
        const api = new appstoreconnect_100.SubscriptionGroupsApi(this.getConfiguration(this.options));
        return api;
    }
    getSubscriptionIntroductoryOffersApi() {
        const api = new appstoreconnect_101.SubscriptionIntroductoryOffersApi(this.getConfiguration(this.options));
        return api;
    }
    getSubscriptionLocalizationsApi() {
        const api = new appstoreconnect_102.SubscriptionLocalizationsApi(this.getConfiguration(this.options));
        return api;
    }
    getSubscriptionOfferCodeCustomCodesApi() {
        const api = new appstoreconnect_103.SubscriptionOfferCodeCustomCodesApi(this.getConfiguration(this.options));
        return api;
    }
    getSubscriptionOfferCodeOneTimeUseCodesApi() {
        const api = new appstoreconnect_104.SubscriptionOfferCodeOneTimeUseCodesApi(this.getConfiguration(this.options));
        return api;
    }
    getSubscriptionOfferCodesApi() {
        const api = new appstoreconnect_105.SubscriptionOfferCodesApi(this.getConfiguration(this.options));
        return api;
    }
    getSubscriptionPricePointsApi() {
        const api = new appstoreconnect_106.SubscriptionPricePointsApi(this.getConfiguration(this.options));
        return api;
    }
    getSubscriptionPricesApi() {
        const api = new appstoreconnect_107.SubscriptionPricesApi(this.getConfiguration(this.options));
        return api;
    }
    getSubscriptionPromotionalOffersApi() {
        const api = new appstoreconnect_108.SubscriptionPromotionalOffersApi(this.getConfiguration(this.options));
        return api;
    }
    getSubscriptionSubmissionsApi() {
        const api = new appstoreconnect_109.SubscriptionSubmissionsApi(this.getConfiguration(this.options));
        return api;
    }
    getSubscriptionsApi() {
        const api = new appstoreconnect_110.SubscriptionsApi(this.getConfiguration(this.options));
        return api;
    }
    getTerritoriesApi() {
        const api = new appstoreconnect_111.TerritoriesApi(this.getConfiguration(this.options));
        return api;
    }
    getUserInvitationsApi() {
        const api = new appstoreconnect_112.UserInvitationsApi(this.getConfiguration(this.options));
        return api;
    }
    getUsersApi() {
        const api = new appstoreconnect_113.UsersApi(this.getConfiguration(this.options));
        return api;
    }
}
exports.AppStoreConnectClient = AppStoreConnectClient;
//# sourceMappingURL=client.js.map