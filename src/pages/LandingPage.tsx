import { AppFooterForHomePage } from '@sudobility/building_blocks';
import { ui } from '@sudobility/design';
import { CONSTANTS } from '../config/constants';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="max-w-4xl mx-auto px-4 py-8">
        <h1 className={ui.text.h1}>{CONSTANTS.APP_NAME}</h1>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-16 text-center space-y-8">
        <h2 className={ui.text.display}>Cashless Payments for Any Device</h2>
        <p className={`${ui.text.lead} max-w-2xl mx-auto`}>
          Scan a QR code, pay instantly, and activate devices like laundry machines, vending
          machines, and more. No cash needed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <a
            href="#"
            className={`px-8 py-4 bg-black text-white rounded-xl text-lg font-medium hover:bg-gray-800 ${ui.transition.fast}`}
          >
            Download for iOS
          </a>
          <a
            href="#"
            className={`px-8 py-4 rounded-xl text-lg font-medium bg-green-600 text-white hover:bg-green-700 ${ui.transition.fast}`}
          >
            Download for Android
          </a>
        </div>
        <section className={ui.layout.gridLg + ' pt-16'}>
          {[
            { title: 'Scan', desc: `Point your camera at the QR code on any ${CONSTANTS.APP_NAME}-enabled device.` },
            { title: 'Pay', desc: 'Securely pay with your card. No cash, no coins, no hassle.' },
            { title: 'Activate', desc: 'The device starts automatically. Track time remaining in the app.' },
          ].map(f => (
            <div key={f.title} className={ui.card.bordered}>
              <h3 className={`${ui.text.h4} mb-2`}>{f.title}</h3>
              <p className={ui.text.body}>{f.desc}</p>
            </div>
          ))}
        </section>
      </main>
      <AppFooterForHomePage
        logo={{ appName: CONSTANTS.APP_NAME }}
        linkSections={[]}
        companyName={CONSTANTS.COMPANY_NAME}
        companyUrl={`https://${CONSTANTS.APP_DOMAIN}`}
      />
    </div>
  );
}
