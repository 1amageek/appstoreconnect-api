import * as jwt from "jsonwebtoken"
import { SignOptions } from "jsonwebtoken"
import { HttpBearerAuth } from "./api"
import { AgeRatingDeclarationsApi } from './api';
import { AppAvailabilitiesApi } from './api';
import { AppCategoriesApi } from './api';
import { AppClipAdvancedExperienceImagesApi } from './api';
import { AppClipAdvancedExperiencesApi } from './api';
import { AppClipAppStoreReviewDetailsApi } from './api';
import { AppClipDefaultExperienceLocalizationsApi } from './api';
import { AppClipDefaultExperiencesApi } from './api';
import { AppClipHeaderImagesApi } from './api';
import { AppClipsApi } from './api';
import { AppCustomProductPageLocalizationsApi } from './api';
import { AppCustomProductPageVersionsApi } from './api';
import { AppCustomProductPagesApi } from './api';
import { AppEncryptionDeclarationDocumentsApi } from './api';
import { AppEncryptionDeclarationsApi } from './api';
import { AppEventLocalizationsApi } from './api';
import { AppEventScreenshotsApi } from './api';
import { AppEventVideoClipsApi } from './api';
import { AppEventsApi } from './api';
import { AppInfoLocalizationsApi } from './api';
import { AppInfosApi } from './api';
import { AppPreOrdersApi } from './api';
import { AppPreviewSetsApi } from './api';
import { AppPreviewsApi } from './api';
import { AppPricePointsApi } from './api';
import { AppPriceSchedulesApi } from './api';
import { AppScreenshotSetsApi } from './api';
import { AppScreenshotsApi } from './api';
import { AppStoreReviewAttachmentsApi } from './api';
import { AppStoreReviewDetailsApi } from './api';
import { AppStoreVersionExperimentTreatmentLocalizationsApi } from './api';
import { AppStoreVersionExperimentTreatmentsApi } from './api';
import { AppStoreVersionExperimentsApi } from './api';
import { AppStoreVersionLocalizationsApi } from './api';
import { AppStoreVersionPhasedReleasesApi } from './api';
import { AppStoreVersionPromotionsApi } from './api';
import { AppStoreVersionReleaseRequestsApi } from './api';
import { AppStoreVersionsApi } from './api';
import { AppsApi } from './api';
import { BetaAppClipInvocationLocalizationsApi } from './api';
import { BetaAppClipInvocationsApi } from './api';
import { BetaAppLocalizationsApi } from './api';
import { BetaAppReviewDetailsApi } from './api';
import { BetaAppReviewSubmissionsApi } from './api';
import { BetaBuildLocalizationsApi } from './api';
import { BetaGroupsApi } from './api';
import { BetaLicenseAgreementsApi } from './api';
import { BetaTesterInvitationsApi } from './api';
import { BetaTestersApi } from './api';
import { BuildBetaDetailsApi } from './api';
import { BuildBetaNotificationsApi } from './api';
import { BuildBundlesApi } from './api';
import { BuildsApi } from './api';
import { BundleIdCapabilitiesApi } from './api';
import { BundleIdsApi } from './api';
import { CertificatesApi } from './api';
import { CiArtifactsApi } from './api';
import { CiBuildActionsApi } from './api';
import { CiBuildRunsApi } from './api';
import { CiIssuesApi } from './api';
import { CiMacOsVersionsApi } from './api';
import { CiProductsApi } from './api';
import { CiTestResultsApi } from './api';
import { CiWorkflowsApi } from './api';
import { CiXcodeVersionsApi } from './api';
import { CustomerReviewResponsesApi } from './api';
import { CustomerReviewsApi } from './api';
import { DevicesApi } from './api';
import { DiagnosticSignaturesApi } from './api';
import { EndUserLicenseAgreementsApi } from './api';
import { FinanceReportsApi } from './api';
import { GameCenterEnabledVersionsApi } from './api';
import { InAppPurchaseAppStoreReviewScreenshotsApi } from './api';
import { InAppPurchaseAvailabilitiesApi } from './api';
import { InAppPurchaseContentsApi } from './api';
import { InAppPurchaseLocalizationsApi } from './api';
import { InAppPurchasePriceSchedulesApi } from './api';
import { InAppPurchaseSubmissionsApi } from './api';
import { InAppPurchasesApi } from './api';
import { PreReleaseVersionsApi } from './api';
import { ProfilesApi } from './api';
import { PromotedPurchaseImagesApi } from './api';
import { PromotedPurchasesApi } from './api';
import { ReviewSubmissionItemsApi } from './api';
import { ReviewSubmissionsApi } from './api';
import { RoutingAppCoveragesApi } from './api';
import { SalesReportsApi } from './api';
import { SandboxTestersApi } from './api';
import { SandboxTestersClearPurchaseHistoryRequestApi } from './api';
import { ScmGitReferencesApi } from './api';
import { ScmProvidersApi } from './api';
import { ScmPullRequestsApi } from './api';
import { ScmRepositoriesApi } from './api';
import { SubscriptionAppStoreReviewScreenshotsApi } from './api';
import { SubscriptionAvailabilitiesApi } from './api';
import { SubscriptionGracePeriodsApi } from './api';
import { SubscriptionGroupLocalizationsApi } from './api';
import { SubscriptionGroupSubmissionsApi } from './api';
import { SubscriptionGroupsApi } from './api';
import { SubscriptionIntroductoryOffersApi } from './api';
import { SubscriptionLocalizationsApi } from './api';
import { SubscriptionOfferCodeCustomCodesApi } from './api';
import { SubscriptionOfferCodeOneTimeUseCodesApi } from './api';
import { SubscriptionOfferCodesApi } from './api';
import { SubscriptionPricePointsApi } from './api';
import { SubscriptionPricesApi } from './api';
import { SubscriptionPromotionalOffersApi } from './api';
import { SubscriptionSubmissionsApi } from './api';
import { SubscriptionsApi } from './api';
import { TerritoriesApi } from './api';
import { UserInvitationsApi } from './api';
import { UsersApi } from './api';

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
  private auth: HttpBearerAuth

  constructor(options: AppStoreConnectClientOptions, basePath?: string) {
    this.options = options;
    this.basePath = basePath
    this.auth = new HttpBearerAuth()
    this.updateBearerToken(options)
  }

  updateBearerToken(options: AppStoreConnectClientOptions) {
    const token = this.createBearerToken(options);
    this.auth.accessToken = token;
  }

  createBearerToken(options: AppStoreConnectClientOptions): string {
    if (options.bearerToken) {
      return options.bearerToken;
    }
    const expirationTime = options.expirationTime || 600;
    const payload = {
      iss: options.issuerId,
      exp: Math.floor(Date.now() / 1000) + expirationTime,
    };
    const signOptions: SignOptions = {
      algorithm: "ES256",
      expiresIn: expirationTime,
      issuer: options.issuerId,
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
    return jwt.sign(payload, options.privateKey as string, signOptions);
  }

  getAgeRatingDeclarationsApi(): AgeRatingDeclarationsApi {
    const api = new AgeRatingDeclarationsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getAppAvailabilitiesApi(): AppAvailabilitiesApi {
    const api = new AppAvailabilitiesApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getAppCategoriesApi(): AppCategoriesApi {
    const api = new AppCategoriesApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getAppClipAdvancedExperienceImagesApi(): AppClipAdvancedExperienceImagesApi {
    const api = new AppClipAdvancedExperienceImagesApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getAppClipAdvancedExperiencesApi(): AppClipAdvancedExperiencesApi {
    const api = new AppClipAdvancedExperiencesApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getAppClipAppStoreReviewDetailsApi(): AppClipAppStoreReviewDetailsApi {
    const api = new AppClipAppStoreReviewDetailsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getAppClipDefaultExperienceLocalizationsApi(): AppClipDefaultExperienceLocalizationsApi {
    const api = new AppClipDefaultExperienceLocalizationsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getAppClipDefaultExperiencesApi(): AppClipDefaultExperiencesApi {
    const api = new AppClipDefaultExperiencesApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getAppClipHeaderImagesApi(): AppClipHeaderImagesApi {
    const api = new AppClipHeaderImagesApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getAppClipsApi(): AppClipsApi {
    const api = new AppClipsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getAppCustomProductPageLocalizationsApi(): AppCustomProductPageLocalizationsApi {
    const api = new AppCustomProductPageLocalizationsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getAppCustomProductPageVersionsApi(): AppCustomProductPageVersionsApi {
    const api = new AppCustomProductPageVersionsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getAppCustomProductPagesApi(): AppCustomProductPagesApi {
    const api = new AppCustomProductPagesApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getAppEncryptionDeclarationDocumentsApi(): AppEncryptionDeclarationDocumentsApi {
    const api = new AppEncryptionDeclarationDocumentsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getAppEncryptionDeclarationsApi(): AppEncryptionDeclarationsApi {
    const api = new AppEncryptionDeclarationsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getAppEventLocalizationsApi(): AppEventLocalizationsApi {
    const api = new AppEventLocalizationsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getAppEventScreenshotsApi(): AppEventScreenshotsApi {
    const api = new AppEventScreenshotsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getAppEventVideoClipsApi(): AppEventVideoClipsApi {
    const api = new AppEventVideoClipsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getAppEventsApi(): AppEventsApi {
    const api = new AppEventsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getAppInfoLocalizationsApi(): AppInfoLocalizationsApi {
    const api = new AppInfoLocalizationsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getAppInfosApi(): AppInfosApi {
    const api = new AppInfosApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getAppPreOrdersApi(): AppPreOrdersApi {
    const api = new AppPreOrdersApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getAppPreviewSetsApi(): AppPreviewSetsApi {
    const api = new AppPreviewSetsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getAppPreviewsApi(): AppPreviewsApi {
    const api = new AppPreviewsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getAppPricePointsApi(): AppPricePointsApi {
    const api = new AppPricePointsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getAppPriceSchedulesApi(): AppPriceSchedulesApi {
    const api = new AppPriceSchedulesApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getAppScreenshotSetsApi(): AppScreenshotSetsApi {
    const api = new AppScreenshotSetsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getAppScreenshotsApi(): AppScreenshotsApi {
    const api = new AppScreenshotsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getAppStoreReviewAttachmentsApi(): AppStoreReviewAttachmentsApi {
    const api = new AppStoreReviewAttachmentsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getAppStoreReviewDetailsApi(): AppStoreReviewDetailsApi {
    const api = new AppStoreReviewDetailsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getAppStoreVersionExperimentTreatmentLocalizationsApi(): AppStoreVersionExperimentTreatmentLocalizationsApi {
    const api = new AppStoreVersionExperimentTreatmentLocalizationsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getAppStoreVersionExperimentTreatmentsApi(): AppStoreVersionExperimentTreatmentsApi {
    const api = new AppStoreVersionExperimentTreatmentsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getAppStoreVersionExperimentsApi(): AppStoreVersionExperimentsApi {
    const api = new AppStoreVersionExperimentsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getAppStoreVersionLocalizationsApi(): AppStoreVersionLocalizationsApi {
    const api = new AppStoreVersionLocalizationsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getAppStoreVersionPhasedReleasesApi(): AppStoreVersionPhasedReleasesApi {
    const api = new AppStoreVersionPhasedReleasesApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getAppStoreVersionPromotionsApi(): AppStoreVersionPromotionsApi {
    const api = new AppStoreVersionPromotionsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getAppStoreVersionReleaseRequestsApi(): AppStoreVersionReleaseRequestsApi {
    const api = new AppStoreVersionReleaseRequestsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getAppStoreVersionsApi(): AppStoreVersionsApi {
    const api = new AppStoreVersionsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getAppsApi(): AppsApi {
    const api = new AppsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getBetaAppClipInvocationLocalizationsApi(): BetaAppClipInvocationLocalizationsApi {
    const api = new BetaAppClipInvocationLocalizationsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getBetaAppClipInvocationsApi(): BetaAppClipInvocationsApi {
    const api = new BetaAppClipInvocationsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getBetaAppLocalizationsApi(): BetaAppLocalizationsApi {
    const api = new BetaAppLocalizationsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getBetaAppReviewDetailsApi(): BetaAppReviewDetailsApi {
    const api = new BetaAppReviewDetailsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getBetaAppReviewSubmissionsApi(): BetaAppReviewSubmissionsApi {
    const api = new BetaAppReviewSubmissionsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getBetaBuildLocalizationsApi(): BetaBuildLocalizationsApi {
    const api = new BetaBuildLocalizationsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getBetaGroupsApi(): BetaGroupsApi {
    const api = new BetaGroupsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getBetaLicenseAgreementsApi(): BetaLicenseAgreementsApi {
    const api = new BetaLicenseAgreementsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getBetaTesterInvitationsApi(): BetaTesterInvitationsApi {
    const api = new BetaTesterInvitationsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getBetaTestersApi(): BetaTestersApi {
    const api = new BetaTestersApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getBuildBetaDetailsApi(): BuildBetaDetailsApi {
    const api = new BuildBetaDetailsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getBuildBetaNotificationsApi(): BuildBetaNotificationsApi {
    const api = new BuildBetaNotificationsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getBuildBundlesApi(): BuildBundlesApi {
    const api = new BuildBundlesApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getBuildsApi(): BuildsApi {
    const api = new BuildsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getBundleIdCapabilitiesApi(): BundleIdCapabilitiesApi {
    const api = new BundleIdCapabilitiesApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getBundleIdsApi(): BundleIdsApi {
    const api = new BundleIdsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getCertificatesApi(): CertificatesApi {
    const api = new CertificatesApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getCiArtifactsApi(): CiArtifactsApi {
    const api = new CiArtifactsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getCiBuildActionsApi(): CiBuildActionsApi {
    const api = new CiBuildActionsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getCiBuildRunsApi(): CiBuildRunsApi {
    const api = new CiBuildRunsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getCiIssuesApi(): CiIssuesApi {
    const api = new CiIssuesApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getCiMacOsVersionsApi(): CiMacOsVersionsApi {
    const api = new CiMacOsVersionsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getCiProductsApi(): CiProductsApi {
    const api = new CiProductsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getCiTestResultsApi(): CiTestResultsApi {
    const api = new CiTestResultsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getCiWorkflowsApi(): CiWorkflowsApi {
    const api = new CiWorkflowsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getCiXcodeVersionsApi(): CiXcodeVersionsApi {
    const api = new CiXcodeVersionsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getCustomerReviewResponsesApi(): CustomerReviewResponsesApi {
    const api = new CustomerReviewResponsesApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getCustomerReviewsApi(): CustomerReviewsApi {
    const api = new CustomerReviewsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getDevicesApi(): DevicesApi {
    const api = new DevicesApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getDiagnosticSignaturesApi(): DiagnosticSignaturesApi {
    const api = new DiagnosticSignaturesApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getEndUserLicenseAgreementsApi(): EndUserLicenseAgreementsApi {
    const api = new EndUserLicenseAgreementsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getFinanceReportsApi(): FinanceReportsApi {
    const api = new FinanceReportsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getGameCenterEnabledVersionsApi(): GameCenterEnabledVersionsApi {
    const api = new GameCenterEnabledVersionsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getInAppPurchaseAppStoreReviewScreenshotsApi(): InAppPurchaseAppStoreReviewScreenshotsApi {
    const api = new InAppPurchaseAppStoreReviewScreenshotsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getInAppPurchaseAvailabilitiesApi(): InAppPurchaseAvailabilitiesApi {
    const api = new InAppPurchaseAvailabilitiesApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getInAppPurchaseContentsApi(): InAppPurchaseContentsApi {
    const api = new InAppPurchaseContentsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getInAppPurchaseLocalizationsApi(): InAppPurchaseLocalizationsApi {
    const api = new InAppPurchaseLocalizationsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getInAppPurchasePriceSchedulesApi(): InAppPurchasePriceSchedulesApi {
    const api = new InAppPurchasePriceSchedulesApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getInAppPurchaseSubmissionsApi(): InAppPurchaseSubmissionsApi {
    const api = new InAppPurchaseSubmissionsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getInAppPurchasesApi(): InAppPurchasesApi {
    const api = new InAppPurchasesApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getPreReleaseVersionsApi(): PreReleaseVersionsApi {
    const api = new PreReleaseVersionsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getProfilesApi(): ProfilesApi {
    const api = new ProfilesApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getPromotedPurchaseImagesApi(): PromotedPurchaseImagesApi {
    const api = new PromotedPurchaseImagesApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getPromotedPurchasesApi(): PromotedPurchasesApi {
    const api = new PromotedPurchasesApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getReviewSubmissionItemsApi(): ReviewSubmissionItemsApi {
    const api = new ReviewSubmissionItemsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getReviewSubmissionsApi(): ReviewSubmissionsApi {
    const api = new ReviewSubmissionsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getRoutingAppCoveragesApi(): RoutingAppCoveragesApi {
    const api = new RoutingAppCoveragesApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getSalesReportsApi(): SalesReportsApi {
    const api = new SalesReportsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getSandboxTestersApi(): SandboxTestersApi {
    const api = new SandboxTestersApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getSandboxTestersClearPurchaseHistoryRequestApi(): SandboxTestersClearPurchaseHistoryRequestApi {
    const api = new SandboxTestersClearPurchaseHistoryRequestApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getScmGitReferencesApi(): ScmGitReferencesApi {
    const api = new ScmGitReferencesApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getScmProvidersApi(): ScmProvidersApi {
    const api = new ScmProvidersApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getScmPullRequestsApi(): ScmPullRequestsApi {
    const api = new ScmPullRequestsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getScmRepositoriesApi(): ScmRepositoriesApi {
    const api = new ScmRepositoriesApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getSubscriptionAppStoreReviewScreenshotsApi(): SubscriptionAppStoreReviewScreenshotsApi {
    const api = new SubscriptionAppStoreReviewScreenshotsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getSubscriptionAvailabilitiesApi(): SubscriptionAvailabilitiesApi {
    const api = new SubscriptionAvailabilitiesApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getSubscriptionGracePeriodsApi(): SubscriptionGracePeriodsApi {
    const api = new SubscriptionGracePeriodsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getSubscriptionGroupLocalizationsApi(): SubscriptionGroupLocalizationsApi {
    const api = new SubscriptionGroupLocalizationsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getSubscriptionGroupSubmissionsApi(): SubscriptionGroupSubmissionsApi {
    const api = new SubscriptionGroupSubmissionsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getSubscriptionGroupsApi(): SubscriptionGroupsApi {
    const api = new SubscriptionGroupsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getSubscriptionIntroductoryOffersApi(): SubscriptionIntroductoryOffersApi {
    const api = new SubscriptionIntroductoryOffersApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getSubscriptionLocalizationsApi(): SubscriptionLocalizationsApi {
    const api = new SubscriptionLocalizationsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getSubscriptionOfferCodeCustomCodesApi(): SubscriptionOfferCodeCustomCodesApi {
    const api = new SubscriptionOfferCodeCustomCodesApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getSubscriptionOfferCodeOneTimeUseCodesApi(): SubscriptionOfferCodeOneTimeUseCodesApi {
    const api = new SubscriptionOfferCodeOneTimeUseCodesApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getSubscriptionOfferCodesApi(): SubscriptionOfferCodesApi {
    const api = new SubscriptionOfferCodesApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getSubscriptionPricePointsApi(): SubscriptionPricePointsApi {
    const api = new SubscriptionPricePointsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getSubscriptionPricesApi(): SubscriptionPricesApi {
    const api = new SubscriptionPricesApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getSubscriptionPromotionalOffersApi(): SubscriptionPromotionalOffersApi {
    const api = new SubscriptionPromotionalOffersApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getSubscriptionSubmissionsApi(): SubscriptionSubmissionsApi {
    const api = new SubscriptionSubmissionsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getSubscriptionsApi(): SubscriptionsApi {
    const api = new SubscriptionsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getTerritoriesApi(): TerritoriesApi {
    const api = new TerritoriesApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getUserInvitationsApi(): UserInvitationsApi {
    const api = new UserInvitationsApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
  getUsersApi(): UsersApi {
    const api = new UsersApi(this.basePath)
    api.setDefaultAuthentication({ auth: this.auth })
    return api
  }
}
