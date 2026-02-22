import Image from "next/image";

const trust = [
  { name: "Google", note: "4.9/5" },
  { name: "Facebook", note: "Highly rated" },
  { name: "Checkatrade", note: "Vetted & approved" },
  { name: "Trustpilot", note: "Excellent" },
];

const services = [
  { title: "Emergency Plumbing", desc: "Rapid response for leaks, bursts, blockages and no hot water." },
  { title: "Boiler Repairs", desc: "Diagnostics, repairs and safety checks — clear pricing before we start." },
  { title: "Boiler Installation", desc: "Like-for-like swaps and upgrades, installed to manufacturer standards." },
  { title: "Bathrooms", desc: "Taps, toilets, showers and full bathroom plumbing — finished neatly." },
  { title: "Pipework & Leaks", desc: "Trace & access, pipe repairs, isolation valves and pressure issues." },
  { title: "Maintenance Plans", desc: "Annual servicing, landlord checks and priority call-outs available." },
];

const areas = ["Worthing", "Brighton", "Littlehampton", "Chichester", "Horsham", "Shoreham-by-Sea"];

const reviews = [
  { quote: "Customer Review", detail: "Fast response, tidy work, and explained everything clearly." },
  { quote: "Customer Review", detail: "Arrived on time, fixed the leak quickly — very professional." },
  { quote: "Customer Review", detail: "Great communication and quality workmanship. Would use again." },
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-sm text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

function StarRow() {
  return (
    <div className="flex items-center gap-1 text-amber-500" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-current" aria-hidden="true">
          <path d="M10 15.27l-5.18 3.06 1.64-5.81L1.5 8.97l6-.48L10 3l2.5 5.49 6 .48-4.96 3.55 1.64 5.81z" />
        </svg>
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Top bar */}
      <div className="bg-ink text-white">
        <div className="container flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/80">24/7 emergency plumbers • Fully insured • Workmanship guaranteed</p>
          <div className="flex items-center gap-3 text-sm">
            <a href="#" className="text-white/90 hover:text-white">← Back to examples</a>
            <span className="hidden text-white/30 sm:inline">|</span>
            <a href="tel:+447000000000" className="font-semibold hover:underline">Call: 07000 000000</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600 text-white shadow-soft">
              <span className="text-lg font-black">CP</span>
            </div>
            <div className="leading-tight">
              <p className="font-extrabold tracking-tight text-slate-900">Coastal Plumbing &amp; Heating</p>
              <p className="text-xs text-slate-500">Worthing • Brighton • Chichester</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#work" className="hover:text-slate-900">Our Work</a>
            <a href="#areas" className="hover:text-slate-900">Areas</a>
            <a href="#reviews" className="hover:text-slate-900">Reviews</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#quote"
              className="hidden rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 sm:inline-flex"
            >
              Get a quote
            </a>
            <a
              href="tel:+447000000000"
              className="inline-flex rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-soft hover:bg-brand-700"
            >
              Call now
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Professional plumber working in a modern home"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/20" />
        </div>

        <div className="relative">
          <div className="container py-14 sm:py-20">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge>
                    <span className="mr-2 inline-flex h-2 w-2 rounded-full bg-brand-400" />
                    Same‑day appointments
                  </Badge>
                  <Badge>
                    <StarRow />
                    <span className="ml-2">4.9 average rating</span>
                  </Badge>
                  <Badge>Transparent pricing</Badge>
                </div>

                <h1 className="mt-6 text-balance text-4xl font-black tracking-tight text-white sm:text-5xl">
                  Emergency plumbers &amp; heating engineers — fast, tidy, and guaranteed.
                </h1>
                <p className="mt-5 max-w-2xl text-pretty text-lg text-white/80">
                  From leaks and blockages to boiler repairs and installations, we deliver agency‑grade service: clear
                  communication, clean workmanship, and dependable results.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#quote"
                    className="inline-flex items-center justify-center rounded-2xl bg-brand-500 px-6 py-3 text-base font-bold text-white shadow-soft hover:bg-brand-600"
                  >
                    Get a fixed quote
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-6 py-3 text-base font-semibold text-white hover:bg-white/15"
                  >
                    View services
                  </a>
                </div>

                <div className="mt-10 grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur sm:grid-cols-4">
                  {trust.map((t) => (
                    <div key={t.name} className="rounded-2xl bg-white/5 p-4">
                      <p className="font-semibold text-white">{t.name}</p>
                      <p className="text-sm text-white/70">{t.note}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div id="quote" className="rounded-3xl bg-white p-6 shadow-soft">
                  <p className="text-sm font-semibold text-brand-700">Free, no‑pressure quote</p>
                  <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900">
                    Tell us what you need — we’ll call back quickly.
                  </h2>
                  <div className="mt-5 grid gap-3">
                    <div className="rounded-2xl border border-slate-200 bg-slate-25 p-4">
                      <p className="text-sm font-semibold text-slate-900">Emergency call‑out</p>
                      <p className="text-sm text-slate-600">Leaking pipe, blocked drain, no hot water</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-25 p-4">
                      <p className="text-sm font-semibold text-slate-900">Boilers &amp; heating</p>
                      <p className="text-sm text-slate-600">Repairs, servicing, installs &amp; safety checks</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-25 p-4">
                      <p className="text-sm font-semibold text-slate-900">Bathrooms</p>
                      <p className="text-sm text-slate-600">Taps, toilets, showers and pipework upgrades</p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="tel:+447000000000"
                      className="inline-flex flex-1 items-center justify-center rounded-2xl bg-ink px-5 py-3 text-sm font-bold text-white hover:bg-black"
                    >
                      Call now
                    </a>
                    <a
                      href="#services"
                      className="inline-flex flex-1 items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-900 hover:bg-slate-50"
                    >
                      Get pricing
                    </a>
                  </div>

                  <p className="mt-4 text-xs text-slate-500">
                    Demo website: buttons are placeholders. No forms collect data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="border-b border-slate-200 bg-white">
        <div className="container py-10">
          <div className="grid items-center gap-6 md:grid-cols-12">
            <div className="md:col-span-5">
              <h3 className="text-xl font-black tracking-tight text-slate-900">Trusted, qualified &amp; insured</h3>
              <p className="mt-2 text-slate-600">
                Our engineers are experienced, fully insured, and committed to clean, safe workmanship.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {["Gas Safe (demo)", "City & Guilds (demo)", "Public Liability (demo)", "Workmanship Guarantee"].map((x) => (
                  <div key={x} className="rounded-2xl border border-slate-200 bg-slate-25 p-4 text-sm font-semibold text-slate-800">
                    {x}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-slate-25">
        <div className="container py-16">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold text-brand-700">Services</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">Everything you need — done properly</h2>
              <p className="mt-2 max-w-2xl text-slate-600">
                High‑quality plumbing and heating with tidy finishes and clear communication from start to finish.
              </p>
            </div>
            <a
              href="#quote"
              className="inline-flex w-fit items-center justify-center rounded-2xl bg-brand-600 px-6 py-3 text-sm font-bold text-white shadow-soft hover:bg-brand-700"
            >
              Get a quote
            </a>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft">
                <div className="mb-4 h-11 w-11 rounded-2xl bg-brand-50 ring-1 ring-brand-100 grid place-items-center">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-600" />
                </div>
                <h3 className="text-lg font-extrabold tracking-tight text-slate-900">{s.title}</h3>
                <p className="mt-2 text-slate-600">{s.desc}</p>
                <p className="mt-5 text-sm font-semibold text-brand-700">Learn more →</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work / Gallery */}
      <section id="work" className="bg-white">
        <div className="container py-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="text-sm font-semibold text-brand-700">Our work</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">Clean installs. Neat repairs.</h2>
              <p className="mt-3 text-slate-600">
                A few examples of recent jobs — copper pipework upgrades, tap repairs, and under‑sink fixes.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  "Protective coverings & tidy finish",
                  "Upfront pricing and clear timelines",
                  "Parts & labour warranty on work completed",
                ].map((b) => (
                  <div key={b} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-25 p-4">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-600" />
                    <p className="text-sm font-semibold text-slate-800">{b}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
                  <Image src="/images/gallery-1.avif" alt="Plumber working on copper pipework" width={900} height={700} className="h-full w-full object-cover" />
                </div>
                <div className="grid gap-4">
                  <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
                    <Image src="/images/gallery-2.webp" alt="Faucet repair" width={900} height={700} className="h-full w-full object-cover" />
                  </div>
                  <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
                    <Image src="/images/gallery-3.webp" alt="Plumber at sink" width={900} height={700} className="h-full w-full object-cover" />
                  </div>
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-500">Images provided for demo purposes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section id="areas" className="bg-slate-25">
        <div className="container py-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="text-sm font-semibold text-brand-700">Areas served</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">Local plumbers across Sussex</h2>
              <p className="mt-3 text-slate-600">
                Based locally with quick response times for emergency and planned work.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-3 sm:grid-cols-2">
                {areas.map((a) => (
                  <div key={a} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-800 shadow-sm">
                    {a}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="bg-white">
        <div className="container py-16">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold text-brand-700">Reviews</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">What customers say</h2>
              <div className="mt-3 flex items-center gap-3">
                <StarRow />
                <p className="text-sm font-semibold text-slate-700">5.0 (demo rating)</p>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-25 px-4 py-3 text-sm text-slate-700">
              
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reviews.map((r, idx) => (
              <figure key={idx} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <blockquote className="text-lg font-semibold text-slate-900">“{r.quote}”</blockquote>
                <p className="mt-3 text-slate-600">{r.detail}</p>
                <figcaption className="mt-6 text-sm font-semibold text-slate-700">Verified customer</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink">
        <div className="container py-14">
          <div className="grid gap-8 rounded-3xl bg-gradient-to-r from-brand-700 to-brand-500 p-10 text-white shadow-soft lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <h2 className="text-3xl font-black tracking-tight">Need a plumber today?</h2>
              <p className="mt-2 text-white/90">
                Call now for rapid help — or request a quote for planned work. Clean, clear, professional service.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <a
                href="tel:+447000000000"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-6 py-3 text-base font-black text-ink shadow-sm hover:bg-white/90 sm:w-auto"
              >
                Call 07000 000000
              </a>
              <p className="mt-2 text-xs text-white/80">Demo site — buttons are placeholders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="container py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600 text-white">
                <span className="text-lg font-black">CP</span>
              </div>
              <div>
                <p className="font-extrabold tracking-tight text-slate-900">Coastal Plumbing &amp; Heating</p>
                <p className="text-sm text-slate-600">Emergency plumbing • Heating • Installations</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <a href="#services" className="hover:text-slate-900">Services</a>
              <a href="#work" className="hover:text-slate-900">Our work</a>
              <a href="#reviews" className="hover:text-slate-900">Reviews</a>
              <a href="#quote" className="hover:text-slate-900">Quote</a>
            </div>
          </div>
          <p className="mt-6 text-xs text-slate-500">
            This is a GuardX showroom example website (demo). No customer data is collected.
          </p>
        </div>
      </footer>
    </main>
  );
}
