import { AppStoreConnectClient } from "./client"

const client = new AppStoreConnectClient({
  issuerId: "e51c72d5-1b85-4849-88b4-221743d14dd6",
  privateKeyId: "6DZSVNFMMD",
  privateKey: `-----BEGIN PRIVATE KEY-----\nMIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgaG8eJVpmXE4XtqRh\nxMNIDm1sEYBSzKUkLCe7LJYalJ6gCgYIKoZIzj0DAQehRANCAASAlVdVtf4iwWxO\nec/tCFwU+8/kSIbx/g/wkNhAgP3yV3X43dg0UX+0UL3REo9TqcZLU3cnMemRpL54\nDNRk4GM1\n-----END PRIVATE KEY-----`
})

const main = async () => {
  const resourceID = "1611581708"
  const bundleID = "inc.stamp.too.debug.Clip"
  try {
    const response = await client.getAppsApi().appsAppClipsGetToManyRelated({ id: resourceID, filterBundleId: [bundleID] })
    console.log(JSON.stringify(response, null, 2))
  } catch (error) {
    console.log(error)
  }
  // console.log(response.response)
}

main()