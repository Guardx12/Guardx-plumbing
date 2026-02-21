import Image from "next/image";
import Link from "next/link";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>;
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
      {children}
    </span>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="text-2xl font-extrabold tracking-tight text-ink">{value}</div>
      <div className="mt-1 text-sm text-slate-600">{label}</div>
    </div>
  );
}

function SectionHeading({ kicker, title, subtitle }: { kicker: string; title: string; subtitle: string }) {
  return (
    <div className="max-w-2xl">
      <div className="text-sm font-semibold uppercase tracking-wider text-brand-700">{kicker}</div>
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">{title}</h2>
      <p className="mt-3 text-slate-600">{subtitle}</p>
    </div>
  );
}

function StarRow() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            viewBox="0 0 20 20"
            className="h-4 w-4 fill-brand-500"
            aria-hidden="true"
          >
            <path d="M10 14.8l-5.6 3 1.1-6.3L.9 6.9l6.3-.9L10 .4l2.8 5.6 6.3.9-4.6 4.5 1.1 6.3z" />
          </svg>
        ))}
      </div>
      <span className="text-sm font-semibold text-slate-800">5.0</span>
      <span className="text-sm text-slate-600">• 120+ recent jobs</span>
    </div>
  );
}

function TrustPill({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm ring-1 ring-slate-200">
      <span className="h-2 w-2 rounded-full bg-brand-500" />
      {label}
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-ink text-white shadow-sm">
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M7 2h10v2H7V2Zm2 5h6v2H9V7Zm-3 7a6 6 0 0 1 6-6h0a6 6 0 1 1-6 6Zm6-4a4 4 0 1 0 4 4 4 4 0 0 0-4-4Z"
                />
              </svg>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-extrabold tracking-tight text-ink">Coastal Plumbing & Heating</div>
              <div className="text-xs text-slate-600">Emergency & Domestic Plumbing</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 md:flex">
            <a href="#services" className="hover:text-ink">Services</a>
            <a href="#work" className="hover:text-ink">Our Work</a>
            <a href="#areas" className="hover:text-ink">Areas</a>
            <a href="#reviews" className="hover:text-ink">Reviews</a>
            <a href="#contact" className="hover:text-ink">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="https://guardxnetwork.com/examples"
              className="hidden rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 md:inline-flex"
            >
              ← Back to examples
            </Link>
            <a
              href="tel:+447700900000"
              className="inline-flex items-center justify-center rounded-xl bg-brand-600 px-4 py-2 text-sm font-bold text-white shadow-soft hover:bg-brand-700"
            >
              Call now
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}

function LogoRow() {
  const logos = ["Google", "Facebook", "Instagram", "Trustpilot"];
  return (
    <div className="mt-6 flex flex-wrap items-center gap-3">
      {logos.map((l) => (
        <TrustPill key={l} label={l} />
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <Nav />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero.jpg"
              alt="Professional plumber at work"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/55 to-ink/15" />
          </div>

          <Container>
            <div className="relative py-14 sm:py-20">
              <div className="flex flex-wrap gap-2">
                <Badge>Same‑day call‑outs</Badge>
                <Badge>Fixed‑price quotes</Badge>
                <Badge>Clean & tidy</Badge>
              </div>

              <div className="mt-6 max-w-2xl">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
                  Fast, tidy plumbing — done properly.
                </h1>
                <p className="mt-4 text-lg text-white/90">
                  Emergency repairs, leak detection, installations and servicing across West Sussex. Friendly,
                  professional, and on time — with workmanship you can trust.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-xl bg-brand-500 px-6 py-3 text-base font-extrabold text-ink shadow-soft hover:bg-brand-400"
                  >
                    Get a quote
                  </a>
                  <a
                    href="tel:+447700900000"
                    className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-base font-bold text-white ring-1 ring-white/25 backdrop-blur hover:bg-white/15"
                  >
                    Call 24/7: 07700 900000
                  </a>
                </div>

                <div className="mt-8 flex flex-col gap-3">
                  <StarRow />
                  <div className="text-sm text-white/80">
                    Fully insured • Gas Safe partners available • VAT receipts on request
                  </div>
                </div>

                <LogoRow />
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <Stat label="Average response time" value="60 mins" />
                <Stat label="Jobs completed (last 12 months)" value="1,200+" />
                <Stat label="Warranty on workmanship" value="12 months" />
              </div>
            </div>
          </Container>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-16 sm:py-20">
          <Container>
            <SectionHeading
              kicker="What we do"
              title="Plumbing services that homeowners actually want"
              subtitle="Clear comms, tidy work, transparent pricing. From urgent repairs to planned installs."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                ["Emergency leaks", "Burst pipes, leaks, water shut‑offs and fast repairs."],
                ["Boiler & heating support", "Partnered boiler servicing, radiator issues and upgrades."],
                ["Bathroom installations", "Taps, toilets, showers and full bathroom plumbing."],
                ["Kitchen plumbing", "Sinks, waste, dishwashers and under‑sink fixes."],
                ["Blocked drains", "Unblocking, tracing issues and preventative maintenance."],
                ["Water pressure fixes", "Diagnose and resolve pressure and flow problems."],
              ].map(([t, d]) => (
                <div key={t} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-soft">
                  <div className="flex items-start justify-between gap-4">
                    <div className="text-lg font-extrabold text-ink">{t}</div>
                    <div className="h-10 w-10 rounded-xl bg-brand-50 ring-1 ring-brand-100 grid place-items-center">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 text-brand-700" aria-hidden="true">
                        <path
                          fill="currentColor"
                          d="M12 2a5 5 0 0 0-5 5v2H6a2 2 0 0 0-2 2v7a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-7a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm3 7H9V7a3 3 0 1 1 6 0v2Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="mt-3 text-slate-600">{d}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ACCREDITATIONS */}
        <section className="border-y border-slate-200 bg-slate-50 py-14">
          <Container>
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <SectionHeading
                  kicker="Peace of mind"
                  title="Accredited, insured, and safety-first"
                  subtitle="You’re inviting a tradesperson into your home — we take that seriously."
                />
              </div>
              <div className="lg:col-span-7">
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    ["Public liability insured", "Up to £2M cover (example)."],
                    ["DBS checked staff", "Available on request (example)."],
                    ["Clear pricing", "No surprise add‑ons — we explain options first."],
                    ["Workmanship warranty", "Written warranty for added confidence."],
                  ].map(([t, d]) => (
                    <div key={t} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                      <div className="font-extrabold text-ink">{t}</div>
                      <div className="mt-1 text-sm text-slate-600">{d}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* GALLERY */}
        <section id="work" className="py-16 sm:py-20">
          <Container>
            <SectionHeading
              kicker="Recent work"
              title="Quality you can see"
              subtitle="A few examples of tidy installs and repairs from recent jobs."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
                  <Image
                    src="/images/gallery-1.webp"
                    alt="Copper pipe installation"
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="grid gap-6 lg:col-span-5">
                <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
                  <Image
                    src="/images/gallery-2.webp"
                    alt="Faucet repair"
                    width={900}
                    height={650}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
                  <Image
                    src="/images/gallery-3.avif"
                    alt="Plumber working on pipework"
                    width={900}
                    height={650}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <div className="text-sm font-semibold text-slate-600">Specialisms</div>
                  <div className="mt-1 font-extrabold text-ink">Leaks • Installs • Heating support</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-600">Typical call‑out</div>
                  <div className="mt-1 font-extrabold text-ink">Same day where possible</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-600">Payment options</div>
                  <div className="mt-1 font-extrabold text-ink">Card • Bank transfer • Invoice</div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* AREAS */}
        <section id="areas" className="bg-ink py-16 sm:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <SectionHeading
                  kicker="Areas served"
                  title="West Sussex & surrounding"
                  subtitle="We cover coastal and inland areas with rapid response where possible."
                />
                <p className="mt-4 text-white/80">
                  If you’re not sure whether we cover your postcode, just call — we’ll tell you straight away.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="grid gap-3 sm:grid-cols-2">
                  {["Worthing", "Brighton", "Shoreham", "Littlehampton", "Chichester", "Horsham", "Bognor Regis", "Arundel"].map(
                    (a) => (
                      <div key={a} className="rounded-2xl bg-white/5 px-5 py-4 ring-1 ring-white/10">
                        <div className="font-extrabold text-white">{a}</div>
                        <div className="text-sm text-white/70">Emergency & domestic plumbing</div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* REVIEWS */}
        <section id="reviews" className="py-16 sm:py-20">
          <Container>
            <SectionHeading
              kicker="Reviews"
              title="Consistently 5‑star service"
              subtitle="Generic placeholder reviews (no fake names) — just showing the layout and credibility feel."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                "Customer Review — quick response, tidy work, explained everything clearly.",
                "Customer Review — arrived on time, fixed the leak fast, great communication.",
                "Customer Review — professional install, neat finish, would recommend.",
              ].map((r, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <StarRow />
                  <p className="mt-4 text-slate-700">{r}</p>
                  <div className="mt-4 text-sm font-semibold text-slate-500">Customer Review</div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CONTACT CTA */}
        <section id="contact" className="border-t border-slate-200 bg-slate-50 py-16">
          <Container>
            <div className="grid gap-8 rounded-3xl bg-white p-8 shadow-soft ring-1 ring-slate-200 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <h3 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                  Need a plumber today?
                </h3>
                <p className="mt-3 text-slate-600">
                  Call for a quick answer and a clear quote. If it’s urgent, we’ll prioritise you.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:col-span-5 lg:items-end">
                <a
                  href="tel:+447700900000"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-ink px-6 py-3 text-base font-extrabold text-white shadow-soft hover:bg-slate-900 sm:w-auto"
                >
                  Call 24/7: 07700 900000
                </a>
                <a
                  href="#services"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-brand-600 px-6 py-3 text-base font-extrabold text-white shadow-soft hover:bg-brand-700 sm:w-auto"
                >
                  View services
                </a>
                <div className="text-xs text-slate-500">Demo site • CTAs are placeholders</div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-10">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="font-extrabold text-ink">Coastal Plumbing & Heating</div>
              <div className="mt-1 text-sm text-slate-600">
                Emergency & domestic plumbing • West Sussex
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-600">
              <a href="#services" className="hover:text-ink">Services</a>
              <a href="#work" className="hover:text-ink">Our Work</a>
              <a href="#areas" className="hover:text-ink">Areas</a>
              <a href="#reviews" className="hover:text-ink">Reviews</a>
            </div>
          </div>
          <div className="mt-6 text-xs text-slate-500">
            Demo showroom homepage • Built as an example site
          </div>
        </Container>
      </footer>
    </div>
  );
}
