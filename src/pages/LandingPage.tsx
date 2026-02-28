import { CONSTANTS } from '../config/constants';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900">{CONSTANTS.APP_NAME}</h1>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-16 text-center space-y-8">
        <h2 className="text-5xl font-bold text-gray-900">Cashless Payments for Any Device</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Scan a QR code, pay instantly, and activate devices like laundry machines, vending
          machines, and more. No cash needed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <a
            href="#"
            className="px-8 py-4 bg-black text-white rounded-xl text-lg font-medium hover:bg-gray-800 transition"
          >
            Download for iOS
          </a>
          <a
            href="#"
            className="px-8 py-4 bg-green-600 text-white rounded-xl text-lg font-medium hover:bg-green-700 transition"
          >
            Download for Android
          </a>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
          {[
            { title: 'Scan', desc: `Point your camera at the QR code on any ${CONSTANTS.APP_NAME}-enabled device.` },
            { title: 'Pay', desc: 'Securely pay with your card. No cash, no coins, no hassle.' },
            { title: 'Activate', desc: 'The device starts automatically. Track time remaining in the app.' },
          ].map(f => (
            <div key={f.title} className="p-6 bg-white rounded-xl shadow-sm border">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </section>
      </main>
      <footer className="max-w-4xl mx-auto px-4 py-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} {CONSTANTS.APP_NAME}
      </footer>
    </div>
  );
}
