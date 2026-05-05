const benefits = ['Быстро', 'Надежно', 'Казань']

function App() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-4 py-10 sm:py-16">
        <header className="space-y-4 text-center sm:text-left">
          <p className="inline-block rounded-full bg-orange-500/20 px-3 py-1 text-sm font-medium text-orange-300">
            Логистический сервис
          </p>
          <h1 className="text-3xl font-bold leading-tight sm:text-5xl">РуБик. Доставка логистика</h1>
          <p className="max-w-2xl text-slate-300">
            Помогаем бизнесу и частным клиентам быстро организовать доставку по Казани и за ее пределами.
          </p>
          <button
            type="button"
            className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-400"
          >
            Оставить заявку
          </button>
        </header>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 sm:p-8">
          <h2 className="mb-4 text-xl font-semibold">Заявка</h2>
          <form className="grid gap-4">
            <label className="grid gap-1">
              <span className="text-sm text-slate-300">Имя</span>
              <input
                type="text"
                placeholder="Ваше имя"
                className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 outline-none ring-orange-500 focus:ring-2"
              />
            </label>
            <label className="grid gap-1">
              <span className="text-sm text-slate-300">Телефон</span>
              <input
                type="tel"
                placeholder="+7 (___) ___-__-__"
                className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 outline-none ring-orange-500 focus:ring-2"
              />
            </label>
            <label className="grid gap-1">
              <span className="text-sm text-slate-300">Комментарий</span>
              <textarea
                rows="4"
                placeholder="Опишите задачу"
                className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 outline-none ring-orange-500 focus:ring-2"
              />
            </label>
            <button
              type="submit"
              className="mt-2 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-400"
            >
              Оставить заявку
            </button>
          </form>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold">Преимущества</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {benefits.map((item) => (
              <article key={item} className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-center font-medium">
                {item}
              </article>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-3 sm:flex-row">
          <a
            href="https://wa.me/79000000000"
            className="flex-1 rounded-xl bg-emerald-500 px-5 py-3 text-center font-semibold text-white transition hover:bg-emerald-400"
          >
            WhatsApp
          </a>
          <a
            href="https://t.me/username"
            className="flex-1 rounded-xl bg-sky-500 px-5 py-3 text-center font-semibold text-white transition hover:bg-sky-400"
          >
            Telegram
          </a>
        </section>
      </section>
    </main>
  )
}

export default App
