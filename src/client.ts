import { SignOptions, sign } from "jsonwebtoken"
import { Configuration } from "./appstoreconnect";
import { AgeRatingDeclarationsApi } from './appstoreconnect';
import { AppAvailabilitiesApi } from "./appstoreconnect";
import { AppCategoriesApi } from "./appstoreconnect";
import { AppClipAdvancedExperienceImagesApi } from "./appstoreconnect";
import { AppClipAdvancedExperiencesApi } from "./appstoreconnect";
import { AppClipAppStoreReviewDetailsApi } from "./appstoreconnect";
import { AppClipDefaultExperienceLocalizationsApi } from "./appstoreconnect";
import { AppClipDefaultExperiencesApi } from "./appstoreconnect";
import { AppClipHeaderImagesApi } from "./appstoreconnect";
import { AppClipsApi } from "./appstoreconnect";
import { AppCustomProductPageLocalizationsApi } from "./appstoreconnect";
import { AppCustomProductPageVersionsApi } from "./appstoreconnect";
import { AppCustomProductPagesApi } from "./appstoreconnect";
import { AppEncryptionDeclarationDocumentsApi } from "./appstoreconnect";
import { AppEncryptionDeclarationsApi } from "./appstoreconnect";
import { AppEventLocalizationsApi } from "./appstoreconnect";
import { AppEventScreenshotsApi } from "./appstoreconnect";
import { AppEventVideoClipsApi } from "./appstoreconnect";
import { AppEventsApi } from "./appstoreconnect";
import { AppInfoLocalizationsApi } from "./appstoreconnect";
import { AppInfosApi } from "./appstoreconnect";
import { AppPreOrdersApi } from "./appstoreconnect";
import { AppPreviewSetsApi } from "./appstoreconnect";
import { AppPreviewsApi } from "./appstoreconnect";
import { AppPricePointsApi } from "./appstoreconnect";
import { AppPriceSchedulesApi } from "./appstoreconnect";
import { AppScreenshotSetsApi } from "./appstoreconnect";
import { AppScreenshotsApi } from "./appstoreconnect";
import { AppStoreReviewAttachmentsApi } from "./appstoreconnect";
import { AppStoreReviewDetailsApi } from "./appstoreconnect";
import { AppStoreVersionExperimentTreatmentLocalizationsApi } from "./appstoreconnect";
import { AppStoreVersionExperimentTreatmentsApi } from "./appstoreconnect";
import { AppStoreVersionExperimentsApi } from "./appstoreconnect";
import { AppStoreVersionLocalizationsApi } from "./appstoreconnect";
import { AppStoreVersionPhasedReleasesApi } from "./appstoreconnect";
import { AppStoreVersionPromotionsApi } from "./appstoreconnect";
import { AppStoreVersionReleaseRequestsApi } from "./appstoreconnect";
import { AppStoreVersionsApi } from "./appstoreconnect";
import { AppsApi } from "./appstoreconnect";
import { BetaAppClipInvocationLocalizationsApi } from "./appstoreconnect";
import { BetaAppClipInvocationsApi } from "./appstoreconnect";
import { BetaAppLocalizationsApi } from "./appstoreconnect";
import { BetaAppReviewDetailsApi } from "./appstoreconnect";
import { BetaAppReviewSubmissionsApi } from "./appstoreconnect";
import { BetaBuildLocalizationsApi } from "./appstoreconnect";
import { BetaGroupsApi } from "./appstoreconnect";
import { BetaLicenseAgreementsApi } from "./appstoreconnect";
import { BetaTesterInvitationsApi } from "./appstoreconnect";
import { BetaTestersApi } from "./appstoreconnect";
import { BuildBetaDetailsApi } from "./appstoreconnect";
import { BuildBetaNotificationsApi } from "./appstoreconnect";
import { BuildBundlesApi } from "./appstoreconnect";
import { BuildsApi } from "./appstoreconnect";
import { BundleIdCapabilitiesApi } from "./appstoreconnect";
import { BundleIdsApi } from "./appstoreconnect";
import { CertificatesApi } from "./appstoreconnect";
import { CiArtifactsApi } from "./appstoreconnect";
import { CiBuildActionsApi } from "./appstoreconnect";
import { CiBuildRunsApi } from "./appstoreconnect";
import { CiIssuesApi } from "./appstoreconnect";
import { CiMacOsVersionsApi } from "./appstoreconnect";
import { CiProductsApi } from "./appstoreconnect";
import { CiTestResultsApi } from "./appstoreconnect";
import { CiWorkflowsApi } from "./appstoreconnect";
import { CiXcodeVersionsApi } from "./appstoreconnect";
import { CustomerReviewResponsesApi } from "./appstoreconnect";
import { CustomerReviewsApi } from "./appstoreconnect";
import { DevicesApi } from "./appstoreconnect";
import { DiagnosticSignaturesApi } from "./appstoreconnect";
import { EndUserLicenseAgreementsApi } from "./appstoreconnect";
import { FinanceReportsApi } from "./appstoreconnect";
import { GameCenterEnabledVersionsApi } from "./appstoreconnect";
import { InAppPurchaseAppStoreReviewScreenshotsApi } from "./appstoreconnect";
import { InAppPurchaseAvailabilitiesApi } from "./appstoreconnect";
import { InAppPurchaseContentsApi } from "./appstoreconnect";
import { InAppPurchaseLocalizationsApi } from "./appstoreconnect";
import { InAppPurchasePriceSchedulesApi } from "./appstoreconnect";
import { InAppPurchaseSubmissionsApi } from "./appstoreconnect";
import { InAppPurchasesApi } from "./appstoreconnect";
import { PreReleaseVersionsApi } from "./appstoreconnect";
import { ProfilesApi } from "./appstoreconnect";
import { PromotedPurchaseImagesApi } from "./appstoreconnect";
import { PromotedPurchasesApi } from "./appstoreconnect";
import { ReviewSubmissionItemsApi } from "./appstoreconnect";
import { ReviewSubmissionsApi } from "./appstoreconnect";
import { RoutingAppCoveragesApi } from "./appstoreconnect";
import { SalesReportsApi } from "./appstoreconnect";
import { SandboxTestersApi } from "./appstoreconnect";
import { SandboxTestersClearPurchaseHistoryRequestApi } from "./appstoreconnect";
import { ScmGitReferencesApi } from "./appstoreconnect";
import { ScmProvidersApi } from "./appstoreconnect";
import { ScmPullRequestsApi } from "./appstoreconnect";
import { ScmRepositoriesApi } from "./appstoreconnect";
import { SubscriptionAppStoreReviewScreenshotsApi } from "./appstoreconnect";
import { SubscriptionAvailabilitiesApi } from "./appstoreconnect";
import { SubscriptionGracePeriodsApi } from "./appstoreconnect";
import { SubscriptionGroupLocalizationsApi } from "./appstoreconnect";
import { SubscriptionGroupSubmissionsApi } from "./appstoreconnect";
import { SubscriptionGroupsApi } from "./appstoreconnect";
import { SubscriptionIntroductoryOffersApi } from "./appstoreconnect";
import { SubscriptionLocalizationsApi } from "./appstoreconnect";
import { SubscriptionOfferCodeCustomCodesApi } from "./appstoreconnect";
import { SubscriptionOfferCodeOneTimeUseCodesApi } from "./appstoreconnect";
import { SubscriptionOfferCodesApi } from "./appstoreconnect";
import { SubscriptionPricePointsApi } from "./appstoreconnect";
import { SubscriptionPricesApi } from "./appstoreconnect";
import { SubscriptionPromotionalOffersApi } from "./appstoreconnect";
import { SubscriptionSubmissionsApi } from "./appstoreconnect";
import { SubscriptionsApi } from "./appstoreconnect";
import { TerritoriesApi } from "./appstoreconnect";
import { UserInvitationsApi } from "./appstoreconnect";
import { UsersApi } from "./appstoreconnect";

interface AppStoreConnectClientOptions {
  issuerId?: string;
  privateKeyId?: string;
  privateKey?: string;
  bearerToken?: string;
  expirationTime?: number;
}

export class AppStoreConnectClient {
  private options: AppStoreConnectClientOptions
  private basePath?: string
  private bearerTokenGeneratedAt: number
  constructor(options: AppStoreConnectClientOptions, basePath?: string) {
    this.options = options;
    this.basePath = basePath
    this.bearerTokenGeneratedAt = 0
  }

  getConfiguration(options: AppStoreConnectClientOptions) {
    const expirationTime = options.expirationTime ?? 600
    const hasExpired = this.bearerTokenGeneratedAt && (Date.now() - this.bearerTokenGeneratedAt) > (1000 * expirationTime);
    if (hasExpired) {
      options.bearerToken = undefined
    }
    const accessToken = this.createBearerToken(options);
    return new Configuration({ accessToken })
  }

  createBearerToken(options: AppStoreConnectClientOptions): string {
    if (options.bearerToken) {
      return options.bearerToken;
    }
    const now = Date.now()
    const expirationTime = options.expirationTime || 600;
    const payload = {
      iss: options.issuerId,
      exp: Math.floor(now / 1000) + expirationTime,
    };
    const signOptions: SignOptions = {
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
    this.bearerTokenGeneratedAt = now
    return sign(payload, options.privateKey!, signOptions);
  }

  getAgeRatingDeclarationsApi(): AgeRatingDeclarationsApi {
    const api = new AgeRatingDeclarationsApi(this.getConfiguration(this.options))
    return api
  }
  getAppAvailabilitiesApi(): AppAvailabilitiesApi {
    const api = new AppAvailabilitiesApi(this.getConfiguration(this.options))
    return api
  }
  getAppCategoriesApi(): AppCategoriesApi {
    const api = new AppCategoriesApi(this.getConfiguration(this.options))
    return api
  }
  getAppClipAdvancedExperienceImagesApi(): AppClipAdvancedExperienceImagesApi {
    const api = new AppClipAdvancedExperienceImagesApi(this.getConfiguration(this.options))
    return api
  }
  getAppClipAdvancedExperiencesApi(): AppClipAdvancedExperiencesApi {
    const api = new AppClipAdvancedExperiencesApi(this.getConfiguration(this.options))
    return api
  }
  getAppClipAppStoreReviewDetailsApi(): AppClipAppStoreReviewDetailsApi {
    const api = new AppClipAppStoreReviewDetailsApi(this.getConfiguration(this.options))
    return api
  }
  getAppClipDefaultExperienceLocalizationsApi(): AppClipDefaultExperienceLocalizationsApi {
    const api = new AppClipDefaultExperienceLocalizationsApi(this.getConfiguration(this.options))
    return api
  }
  getAppClipDefaultExperiencesApi(): AppClipDefaultExperiencesApi {
    const api = new AppClipDefaultExperiencesApi(this.getConfiguration(this.options))
    return api
  }
  getAppClipHeaderImagesApi(): AppClipHeaderImagesApi {
    const api = new AppClipHeaderImagesApi(this.getConfiguration(this.options))
    return api
  }
  getAppClipsApi(): AppClipsApi {
    const api = new AppClipsApi(this.getConfiguration(this.options))
    return api
  }
  getAppCustomProductPageLocalizationsApi(): AppCustomProductPageLocalizationsApi {
    const api = new AppCustomProductPageLocalizationsApi(this.getConfiguration(this.options))
    return api
  }
  getAppCustomProductPageVersionsApi(): AppCustomProductPageVersionsApi {
    const api = new AppCustomProductPageVersionsApi(this.getConfiguration(this.options))
    return api
  }
  getAppCustomProductPagesApi(): AppCustomProductPagesApi {
    const api = new AppCustomProductPagesApi(this.getConfiguration(this.options))
    return api
  }
  getAppEncryptionDeclarationDocumentsApi(): AppEncryptionDeclarationDocumentsApi {
    const api = new AppEncryptionDeclarationDocumentsApi(this.getConfiguration(this.options))
    return api
  }
  getAppEncryptionDeclarationsApi(): AppEncryptionDeclarationsApi {
    const api = new AppEncryptionDeclarationsApi(this.getConfiguration(this.options))
    return api
  }
  getAppEventLocalizationsApi(): AppEventLocalizationsApi {
    const api = new AppEventLocalizationsApi(this.getConfiguration(this.options))
    return api
  }
  getAppEventScreenshotsApi(): AppEventScreenshotsApi {
    const api = new AppEventScreenshotsApi(this.getConfiguration(this.options))
    return api
  }
  getAppEventVideoClipsApi(): AppEventVideoClipsApi {
    const api = new AppEventVideoClipsApi(this.getConfiguration(this.options))
    return api
  }
  getAppEventsApi(): AppEventsApi {
    const api = new AppEventsApi(this.getConfiguration(this.options))
    return api
  }
  getAppInfoLocalizationsApi(): AppInfoLocalizationsApi {
    const api = new AppInfoLocalizationsApi(this.getConfiguration(this.options))
    return api
  }
  getAppInfosApi(): AppInfosApi {
    const api = new AppInfosApi(this.getConfiguration(this.options))
    return api
  }
  getAppPreOrdersApi(): AppPreOrdersApi {
    const api = new AppPreOrdersApi(this.getConfiguration(this.options))
    return api
  }
  getAppPreviewSetsApi(): AppPreviewSetsApi {
    const api = new AppPreviewSetsApi(this.getConfiguration(this.options))
    return api
  }
  getAppPreviewsApi(): AppPreviewsApi {
    const api = new AppPreviewsApi(this.getConfiguration(this.options))
    return api
  }
  getAppPricePointsApi(): AppPricePointsApi {
    const api = new AppPricePointsApi(this.getConfiguration(this.options))
    return api
  }
  getAppPriceSchedulesApi(): AppPriceSchedulesApi {
    const api = new AppPriceSchedulesApi(this.getConfiguration(this.options))
    return api
  }
  getAppScreenshotSetsApi(): AppScreenshotSetsApi {
    const api = new AppScreenshotSetsApi(this.getConfiguration(this.options))
    return api
  }
  getAppScreenshotsApi(): AppScreenshotsApi {
    const api = new AppScreenshotsApi(this.getConfiguration(this.options))
    return api
  }
  getAppStoreReviewAttachmentsApi(): AppStoreReviewAttachmentsApi {
    const api = new AppStoreReviewAttachmentsApi(this.getConfiguration(this.options))
    return api
  }
  getAppStoreReviewDetailsApi(): AppStoreReviewDetailsApi {
    const api = new AppStoreReviewDetailsApi(this.getConfiguration(this.options))
    return api
  }
  getAppStoreVersionExperimentTreatmentLocalizationsApi(): AppStoreVersionExperimentTreatmentLocalizationsApi {
    const api = new AppStoreVersionExperimentTreatmentLocalizationsApi(this.getConfiguration(this.options))
    return api
  }
  getAppStoreVersionExperimentTreatmentsApi(): AppStoreVersionExperimentTreatmentsApi {
    const api = new AppStoreVersionExperimentTreatmentsApi(this.getConfiguration(this.options))
    return api
  }
  getAppStoreVersionExperimentsApi(): AppStoreVersionExperimentsApi {
    const api = new AppStoreVersionExperimentsApi(this.getConfiguration(this.options))
    return api
  }
  getAppStoreVersionLocalizationsApi(): AppStoreVersionLocalizationsApi {
    const api = new AppStoreVersionLocalizationsApi(this.getConfiguration(this.options))
    return api
  }
  getAppStoreVersionPhasedReleasesApi(): AppStoreVersionPhasedReleasesApi {
    const api = new AppStoreVersionPhasedReleasesApi(this.getConfiguration(this.options))
    return api
  }
  getAppStoreVersionPromotionsApi(): AppStoreVersionPromotionsApi {
    const api = new AppStoreVersionPromotionsApi(this.getConfiguration(this.options))
    return api
  }
  getAppStoreVersionReleaseRequestsApi(): AppStoreVersionReleaseRequestsApi {
    const api = new AppStoreVersionReleaseRequestsApi(this.getConfiguration(this.options))
    return api
  }
  getAppStoreVersionsApi(): AppStoreVersionsApi {
    const api = new AppStoreVersionsApi(this.getConfiguration(this.options))
    return api
  }
  getAppsApi(): AppsApi {
    const api = new AppsApi(this.getConfiguration(this.options))
    return api
  }
  getBetaAppClipInvocationLocalizationsApi(): BetaAppClipInvocationLocalizationsApi {
    const api = new BetaAppClipInvocationLocalizationsApi(this.getConfiguration(this.options))
    return api
  }
  getBetaAppClipInvocationsApi(): BetaAppClipInvocationsApi {
    const api = new BetaAppClipInvocationsApi(this.getConfiguration(this.options))
    return api
  }
  getBetaAppLocalizationsApi(): BetaAppLocalizationsApi {
    const api = new BetaAppLocalizationsApi(this.getConfiguration(this.options))
    return api
  }
  getBetaAppReviewDetailsApi(): BetaAppReviewDetailsApi {
    const api = new BetaAppReviewDetailsApi(this.getConfiguration(this.options))
    return api
  }
  getBetaAppReviewSubmissionsApi(): BetaAppReviewSubmissionsApi {
    const api = new BetaAppReviewSubmissionsApi(this.getConfiguration(this.options))
    return api
  }
  getBetaBuildLocalizationsApi(): BetaBuildLocalizationsApi {
    const api = new BetaBuildLocalizationsApi(this.getConfiguration(this.options))
    return api
  }
  getBetaGroupsApi(): BetaGroupsApi {
    const api = new BetaGroupsApi(this.getConfiguration(this.options))
    return api
  }
  getBetaLicenseAgreementsApi(): BetaLicenseAgreementsApi {
    const api = new BetaLicenseAgreementsApi(this.getConfiguration(this.options))
    return api
  }
  getBetaTesterInvitationsApi(): BetaTesterInvitationsApi {
    const api = new BetaTesterInvitationsApi(this.getConfiguration(this.options))
    return api
  }
  getBetaTestersApi(): BetaTestersApi {
    const api = new BetaTestersApi(this.getConfiguration(this.options))
    return api
  }
  getBuildBetaDetailsApi(): BuildBetaDetailsApi {
    const api = new BuildBetaDetailsApi(this.getConfiguration(this.options))
    return api
  }
  getBuildBetaNotificationsApi(): BuildBetaNotificationsApi {
    const api = new BuildBetaNotificationsApi(this.getConfiguration(this.options))
    return api
  }
  getBuildBundlesApi(): BuildBundlesApi {
    const api = new BuildBundlesApi(this.getConfiguration(this.options))
    return api
  }
  getBuildsApi(): BuildsApi {
    const api = new BuildsApi(this.getConfiguration(this.options))
    return api
  }
  getBundleIdCapabilitiesApi(): BundleIdCapabilitiesApi {
    const api = new BundleIdCapabilitiesApi(this.getConfiguration(this.options))
    return api
  }
  getBundleIdsApi(): BundleIdsApi {
    const api = new BundleIdsApi(this.getConfiguration(this.options))
    return api
  }
  getCertificatesApi(): CertificatesApi {
    const api = new CertificatesApi(this.getConfiguration(this.options))
    return api
  }
  getCiArtifactsApi(): CiArtifactsApi {
    const api = new CiArtifactsApi(this.getConfiguration(this.options))
    return api
  }
  getCiBuildActionsApi(): CiBuildActionsApi {
    const api = new CiBuildActionsApi(this.getConfiguration(this.options))
    return api
  }
  getCiBuildRunsApi(): CiBuildRunsApi {
    const api = new CiBuildRunsApi(this.getConfiguration(this.options))
    return api
  }
  getCiIssuesApi(): CiIssuesApi {
    const api = new CiIssuesApi(this.getConfiguration(this.options))
    return api
  }
  getCiMacOsVersionsApi(): CiMacOsVersionsApi {
    const api = new CiMacOsVersionsApi(this.getConfiguration(this.options))
    return api
  }
  getCiProductsApi(): CiProductsApi {
    const api = new CiProductsApi(this.getConfiguration(this.options))
    return api
  }
  getCiTestResultsApi(): CiTestResultsApi {
    const api = new CiTestResultsApi(this.getConfiguration(this.options))
    return api
  }
  getCiWorkflowsApi(): CiWorkflowsApi {
    const api = new CiWorkflowsApi(this.getConfiguration(this.options))
    return api
  }
  getCiXcodeVersionsApi(): CiXcodeVersionsApi {
    const api = new CiXcodeVersionsApi(this.getConfiguration(this.options))
    return api
  }
  getCustomerReviewResponsesApi(): CustomerReviewResponsesApi {
    const api = new CustomerReviewResponsesApi(this.getConfiguration(this.options))
    return api
  }
  getCustomerReviewsApi(): CustomerReviewsApi {
    const api = new CustomerReviewsApi(this.getConfiguration(this.options))
    return api
  }
  getDevicesApi(): DevicesApi {
    const api = new DevicesApi(this.getConfiguration(this.options))
    return api
  }
  getDiagnosticSignaturesApi(): DiagnosticSignaturesApi {
    const api = new DiagnosticSignaturesApi(this.getConfiguration(this.options))
    return api
  }
  getEndUserLicenseAgreementsApi(): EndUserLicenseAgreementsApi {
    const api = new EndUserLicenseAgreementsApi(this.getConfiguration(this.options))
    return api
  }
  getFinanceReportsApi(): FinanceReportsApi {
    const api = new FinanceReportsApi(this.getConfiguration(this.options))
    return api
  }
  getGameCenterEnabledVersionsApi(): GameCenterEnabledVersionsApi {
    const api = new GameCenterEnabledVersionsApi(this.getConfiguration(this.options))
    return api
  }
  getInAppPurchaseAppStoreReviewScreenshotsApi(): InAppPurchaseAppStoreReviewScreenshotsApi {
    const api = new InAppPurchaseAppStoreReviewScreenshotsApi(this.getConfiguration(this.options))
    return api
  }
  getInAppPurchaseAvailabilitiesApi(): InAppPurchaseAvailabilitiesApi {
    const api = new InAppPurchaseAvailabilitiesApi(this.getConfiguration(this.options))
    return api
  }
  getInAppPurchaseContentsApi(): InAppPurchaseContentsApi {
    const api = new InAppPurchaseContentsApi(this.getConfiguration(this.options))
    return api
  }
  getInAppPurchaseLocalizationsApi(): InAppPurchaseLocalizationsApi {
    const api = new InAppPurchaseLocalizationsApi(this.getConfiguration(this.options))
    return api
  }
  getInAppPurchasePriceSchedulesApi(): InAppPurchasePriceSchedulesApi {
    const api = new InAppPurchasePriceSchedulesApi(this.getConfiguration(this.options))
    return api
  }
  getInAppPurchaseSubmissionsApi(): InAppPurchaseSubmissionsApi {
    const api = new InAppPurchaseSubmissionsApi(this.getConfiguration(this.options))
    return api
  }
  getInAppPurchasesApi(): InAppPurchasesApi {
    const api = new InAppPurchasesApi(this.getConfiguration(this.options))
    return api
  }
  getPreReleaseVersionsApi(): PreReleaseVersionsApi {
    const api = new PreReleaseVersionsApi(this.getConfiguration(this.options))
    return api
  }
  getProfilesApi(): ProfilesApi {
    const api = new ProfilesApi(this.getConfiguration(this.options))
    return api
  }
  getPromotedPurchaseImagesApi(): PromotedPurchaseImagesApi {
    const api = new PromotedPurchaseImagesApi(this.getConfiguration(this.options))
    return api
  }
  getPromotedPurchasesApi(): PromotedPurchasesApi {
    const api = new PromotedPurchasesApi(this.getConfiguration(this.options))
    return api
  }
  getReviewSubmissionItemsApi(): ReviewSubmissionItemsApi {
    const api = new ReviewSubmissionItemsApi(this.getConfiguration(this.options))
    return api
  }
  getReviewSubmissionsApi(): ReviewSubmissionsApi {
    const api = new ReviewSubmissionsApi(this.getConfiguration(this.options))
    return api
  }
  getRoutingAppCoveragesApi(): RoutingAppCoveragesApi {
    const api = new RoutingAppCoveragesApi(this.getConfiguration(this.options))
    return api
  }
  getSalesReportsApi(): SalesReportsApi {
    const api = new SalesReportsApi(this.getConfiguration(this.options))
    return api
  }
  getSandboxTestersApi(): SandboxTestersApi {
    const api = new SandboxTestersApi(this.getConfiguration(this.options))
    return api
  }
  getSandboxTestersClearPurchaseHistoryRequestApi(): SandboxTestersClearPurchaseHistoryRequestApi {
    const api = new SandboxTestersClearPurchaseHistoryRequestApi(this.getConfiguration(this.options))
    return api
  }
  getScmGitReferencesApi(): ScmGitReferencesApi {
    const api = new ScmGitReferencesApi(this.getConfiguration(this.options))
    return api
  }
  getScmProvidersApi(): ScmProvidersApi {
    const api = new ScmProvidersApi(this.getConfiguration(this.options))
    return api
  }
  getScmPullRequestsApi(): ScmPullRequestsApi {
    const api = new ScmPullRequestsApi(this.getConfiguration(this.options))
    return api
  }
  getScmRepositoriesApi(): ScmRepositoriesApi {
    const api = new ScmRepositoriesApi(this.getConfiguration(this.options))
    return api
  }
  getSubscriptionAppStoreReviewScreenshotsApi(): SubscriptionAppStoreReviewScreenshotsApi {
    const api = new SubscriptionAppStoreReviewScreenshotsApi(this.getConfiguration(this.options))
    return api
  }
  getSubscriptionAvailabilitiesApi(): SubscriptionAvailabilitiesApi {
    const api = new SubscriptionAvailabilitiesApi(this.getConfiguration(this.options))
    return api
  }
  getSubscriptionGracePeriodsApi(): SubscriptionGracePeriodsApi {
    const api = new SubscriptionGracePeriodsApi(this.getConfiguration(this.options))
    return api
  }
  getSubscriptionGroupLocalizationsApi(): SubscriptionGroupLocalizationsApi {
    const api = new SubscriptionGroupLocalizationsApi(this.getConfiguration(this.options))
    return api
  }
  getSubscriptionGroupSubmissionsApi(): SubscriptionGroupSubmissionsApi {
    const api = new SubscriptionGroupSubmissionsApi(this.getConfiguration(this.options))
    return api
  }
  getSubscriptionGroupsApi(): SubscriptionGroupsApi {
    const api = new SubscriptionGroupsApi(this.getConfiguration(this.options))
    return api
  }
  getSubscriptionIntroductoryOffersApi(): SubscriptionIntroductoryOffersApi {
    const api = new SubscriptionIntroductoryOffersApi(this.getConfiguration(this.options))
    return api
  }
  getSubscriptionLocalizationsApi(): SubscriptionLocalizationsApi {
    const api = new SubscriptionLocalizationsApi(this.getConfiguration(this.options))
    return api
  }
  getSubscriptionOfferCodeCustomCodesApi(): SubscriptionOfferCodeCustomCodesApi {
    const api = new SubscriptionOfferCodeCustomCodesApi(this.getConfiguration(this.options))
    return api
  }
  getSubscriptionOfferCodeOneTimeUseCodesApi(): SubscriptionOfferCodeOneTimeUseCodesApi {
    const api = new SubscriptionOfferCodeOneTimeUseCodesApi(this.getConfiguration(this.options))
    return api
  }
  getSubscriptionOfferCodesApi(): SubscriptionOfferCodesApi {
    const api = new SubscriptionOfferCodesApi(this.getConfiguration(this.options))
    return api
  }
  getSubscriptionPricePointsApi(): SubscriptionPricePointsApi {
    const api = new SubscriptionPricePointsApi(this.getConfiguration(this.options))
    return api
  }
  getSubscriptionPricesApi(): SubscriptionPricesApi {
    const api = new SubscriptionPricesApi(this.getConfiguration(this.options))
    return api
  }
  getSubscriptionPromotionalOffersApi(): SubscriptionPromotionalOffersApi {
    const api = new SubscriptionPromotionalOffersApi(this.getConfiguration(this.options))
    return api
  }
  getSubscriptionSubmissionsApi(): SubscriptionSubmissionsApi {
    const api = new SubscriptionSubmissionsApi(this.getConfiguration(this.options))
    return api
  }
  getSubscriptionsApi(): SubscriptionsApi {
    const api = new SubscriptionsApi(this.getConfiguration(this.options))
    return api
  }
  getTerritoriesApi(): TerritoriesApi {
    const api = new TerritoriesApi(this.getConfiguration(this.options))
    return api
  }
  getUserInvitationsApi(): UserInvitationsApi {
    const api = new UserInvitationsApi(this.getConfiguration(this.options))
    return api
  }
  getUsersApi(): UsersApi {
    const api = new UsersApi(this.getConfiguration(this.options))
    return api
  }
}
