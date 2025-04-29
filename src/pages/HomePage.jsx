const HeartSoulSection = () => {
    return (
      <section className="bg-gradient-to-br from-white to-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Makkah & Madina — The Heart and Soul of Islam
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-12">
            If <span className="font-semibold text-gray-800">Makkah</span> is the <span className="italic text-red-600">Heart</span> of Islam, where the message began, then <span className="font-semibold text-gray-800">Madina</span> is the <span className="italic text-green-600">Soul</span>, where it blossomed with peace, love, and unity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white rounded-2xl shadow p-6  border border-gray-200">
              <h3 className="text-4xl font-semibold text-gray-700 mb-2">🕋 Makkah – The Heart</h3>
              <ul className="text-gray-600 space-y-2 text-2xl">
                <li>✨ Birthplace of Prophet Muhammad (PBUH)</li>
                <li>📖 Where the first revelation was received</li>
                <li>🏛️ Home of the Kaaba – Qibla for all Muslims</li>
                <li>🕋 Center of Hajj and Tawheed</li>
              </ul>
            </div>
            {window.scrollTo(0, 0)}

            <div className="bg-white rounded-2xl shadow p-6 border border-gray-200">
              <h3 className="text-4xl font-semibold text-gray-700 mb-2"><a href="https://emojis.com/emoji/madinah-i4UOVk7H8Xo" target="_blank"></a>Madina – The Soul</h3>
              <ul className="text-gray-600 space-y-2 text-2xl">
                <li>🌇 City of the Prophet’s Hijrah (migration)</li>
                <li>🕌 Home of Masjid an-Nabawi</li>
                <li>❤️ Symbol of peace, mercy, and unity</li>
                <li>🌹 Final resting place of Prophet Muhammad (PBUH)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  };
  export default HeartSoulSection;