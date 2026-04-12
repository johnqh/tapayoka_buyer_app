// Stub for @sudobility/di_web - not used by this landing page
import React from 'react';

export const InfoBanner: React.FC = () => null;
export const initialize = () => {};
export const initializeWeb = () => {};
export const initializeFirebaseService = () => {};
export const registerServiceWorker = () => {};
export const unregisterServiceWorker = () => {};
export const getFirebaseService = () => ({
  analytics: {
    isSupported: () => false,
    logEvent: () => {},
    setUserId: () => {},
  },
});
const noop = () => {};
const noopAnalytics = {
  trackEvent: noop,
  trackPageView: noop,
  trackButtonClick: noop,
  trackLinkClick: noop,
  trackError: noop,
  trackScreenView: noop,
  isEnabled: () => false,
  setUserId: noop,
  setUserProperties: noop,
};
export const getAnalyticsService = () => noopAnalytics;
export const initializeFirebaseAnalytics = () => noopAnalytics;
export const resetAnalyticsService = noop;
