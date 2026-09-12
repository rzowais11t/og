/**
 * Preloads Cal.com embed API in the background (e.g. on navigation hover)
 * to eliminate cold-start delay when visiting the contact page,
 * without bundling @calcom/embed-react into the initial landing page bundle.
 */
export async function preloadCal() {
  if (typeof window !== 'undefined') {
    try {
      const { getCalApi } = await import("@calcom/embed-react");
      getCalApi({ namespace: 'audit' }).catch(() => {});
    } catch {
      // Ignore network / preload failures
    }
  }
}

