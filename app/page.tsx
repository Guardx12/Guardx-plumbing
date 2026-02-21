import Image from "next/image";
import Link from "next/link";
import { Container, ButtonLink, Pill } from "@/components/ui";
import {
  ArrowLeftIcon,
  MapPinIcon,
  PhoneIcon,
  ShieldCheckIcon,
  StarIcon,
  HammerIcon,
} from "@/components/icons";

const AREAS = [
  "Brighton",
  "Hove",
  "Worthing",
  "Shoreham‑by‑Sea",
  "Portslade",
  "Lancing",
  "Burgess Hill",
  "Haywards Heath",
] as const;

const SERVICES = [
  {
    title: "Emergency Plumbing",
    desc: "Fast response for leaks, burst pipes and blocked drains — clear pricing, no surprises.",
  },
  {
    title: "Boilers & Heating",
    desc: "Boiler installs, servicing and breakdowns. Gas Safe compliant work with tidy finishes.",
  },
  {
    title: "Bathroom Plumbing",
    desc: "Taps, showers, toilets and full bathroom pipework — installed properly and built to last.",
  },
  {
    title: "Leak Detection",
    desc: "Trace hidden leaks quickly and minimise damage. Photos and advice provided as standard.",
  },
  {
    title: "Pipework & Repairs",
    desc: "Copper & plastic pipework, valves and fittings — clean installs and reliable repairs.",
  },
  {
    title: "Blocked Drains",
    desc: "Sinks, baths and external drains cleared efficiently with preventative guidance.",
  },
] as const;

const REVIEWS = [
  {
    title: "Customer Review",
    body: "Quick to respond and very professional. Explained everything clearly and fixed the leak the same day.",
  },
  {
    title: "Customer Review",
    body: "Arrived on time, worked neatly and the quote matched the invoice. Would definitely use again.",
  },
  {
    title: "Customer Review",
    body: "Great communication from start to finish. The new tap and pipework look spotless — top workmanship.",
  },
] as const;

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-brand-900 text-white shadow-soft">
        <span className="text-sm font-black tracking-tight">CP</span>
      </div>
      <div className="leading-tight">
        <div className="text-sm font-extrabold tracking-tight text-slate-950">
          Coastal Plumbing &amp; Heating
        </div>
        <div className="text-xs font-medium text-slate-600">
          Emergency Plumbing • Boilers • Bathrooms
        </div>
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-2 text-xs">
          <div className="flex items-center gap-2 text-slate-600">
            <MapPinIcon className="h-4 w-4 text-accent-700" />
            Covering Brighton &amp; West/East Sussex
          </div>
          <div className="flex items-center gap-2">
            <PhoneIcon className="h-4 w-4 text-accent-700" />
            <a className="font-semibold text-slate-900 hover:underline" href="tel:01234567890">
              01234 567 890
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur">
      <TopBar />
      <Container>
        <div className="flex items-center justify-between py-4">
          <LogoMark />
          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 md:flex">
            <a className="hover:text-slate-950" href="#services">Services</a>
            <a className="hover:text-slate-950" href="#work">Our Work</a>
            <a className="hover:text-slate-950" href="#areas">Areas</a>
            <a className="hover:text-slate-950" href="#reviews">Reviews</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://guardxnetwork.com/examples"
              className="hidden items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 md:inline-flex"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              Back to examples
            </a>
            <ButtonLink href="tel:01234567890" variant="primary">
              <PhoneIcon className="h-4 w-4" />
              Call now
            </ButtonLink>
          </div>
        </div>
      </Container>
    </header>
  );
}

function TrustRow() {
  return (
    <div className="rounded-3xl bg-brand-950 px-6 py-5 text-white shadow-soft md:px-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-4">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15">
            <ShieldCheckIcon className="h-6 w-6 text-accent-300" />
          </div>
          <div>
            <div className="text-sm font-extrabold tracking-tight">Trusted, tidy, and properly qualified</div>
            <div className="text-xs text-white/80">
              Gas Safe Registered • Fully insured • Clear quotes before work starts
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-white/90">
          {["Google", "Facebook", "Instagram", "Checkatrade", "Trustpilot"].map((label) => (
            <span key={label} className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15">
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
      <Container>
        <div className="py-10 md:py-14">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <Pill className="bg-accent-50 text-accent-800 ring-accent-200">
                <StarIcon className="h-4 w-4 text-accent-600" />
                5.0 rated service • Same‑day appointments
              </Pill>

              <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
                Reliable plumbing &amp; heating — done properly, first time.
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
                From urgent leaks to boiler servicing, we deliver clean workmanship, clear communication and
                fair pricing across Sussex. Photos and guidance included as standard.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <ButtonLink href="tel:01234567890" variant="primary">
                  <PhoneIcon className="h-4 w-4" />
                  Call for a quote
                </ButtonLink>
                <ButtonLink href="#quote" variant="secondary">
                  Get an estimate
                </ButtonLink>
              </div>

              <div className="mt-6 grid max-w-xl grid-cols-2 gap-3 text-sm text-slate-700 md:grid-cols-3">
                <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200 shadow-soft">
                  <div className="text-xs font-semibold text-slate-500">Response</div>
                  <div className="mt-1 font-extrabold">Fast call‑outs</div>
                </div>
                <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200 shadow-soft">
                  <div className="text-xs font-semibold text-slate-500">Workmanship</div>
                  <div className="mt-1 font-extrabold">Neat &amp; tidy</div>
                </div>
                <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200 shadow-soft">
                  <div className="text-xs font-semibold text-slate-500">Cover</div>
                  <div className="mt-1 font-extrabold">Fully insured</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl ring-1 ring-slate-200 shadow-soft">
                <Image
                  src="/images/hero.jpg"
                  alt="Plumber speaking with homeowners in a modern kitchen"
                  width={1200}
                  height={900}
                  priority
                  className="h-[420px] w-full object-cover md:h-[520px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/55 via-brand-950/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/15">
                      Gas Safe Registered
                    </span>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/15">
                      Boiler servicing
                    </span>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/15">
                      Emergency repairs
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <TrustRow />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-white py-12 md:py-16">
      <Container>
        <div className="flex flex-col gap-2">
          <Pill className="bg-brand-50 text-brand-800 ring-brand-200">
            <HammerIcon className="h-4 w-4 text-brand-700" />
            Services
          </Pill>
          <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
            Everything you need — from leaks to boilers.
          </h2>
          <p className="max-w-2xl text-slate-600">
            Transparent quotes, tidy workmanship and practical advice. We treat your home like it’s our own.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.title} className="rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200 shadow-soft">
              <div className="text-lg font-extrabold tracking-tight text-slate-950">{s.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>

        <div id="quote" className="mt-10 rounded-3xl bg-brand-950 p-7 text-white shadow-soft md:p-9">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <div className="text-2xl font-black tracking-tight">Need a plumber today?</div>
              <p className="mt-2 text-sm text-white/80">
                Call now for availability and a clear quote. No pushy sales — just straight answers.
              </p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <ButtonLink href="tel:01234567890" variant="primary">
                <PhoneIcon className="h-4 w-4" />
                Speak to a plumber
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Gallery() {
  return (
    <section id="work" className="bg-gradient-to-b from-white to-brand-50 py-12 md:py-16">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <Pill className="bg-accent-50 text-accent-800 ring-accent-200">Recent work</Pill>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              Clean installs. Neat repairs. Real results.
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              A quick look at the type of plumbing and heating work we carry out across Sussex.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-12">
          <div className="relative overflow-hidden rounded-3xl ring-1 ring-slate-200 shadow-soft md:col-span-7">
            <Image
              src="/images/gallery-1.jpg"
              alt="Copper pipework installation"
              width={1200}
              height={900}
              className="h-[340px] w-full object-cover md:h-[460px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5">
              <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/15">
                Pipework &amp; valves
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:col-span-5">
            {[
              { src: "/images/gallery-2.jpg", label: "Under‑sink repairs" },
              { src: "/images/gallery-3.jpg", label: "Call‑outs &amp; maintenance" },
            ].map((item) => (
              <div key={item.src} className="relative overflow-hidden rounded-3xl ring-1 ring-slate-200 shadow-soft">
                <Image
                  src={item.src}
                  alt={item.label}
                  width={900}
                  height={700}
                  className="h-[220px] w-full object-cover md:h-[220px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/45 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/15">
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Areas() {
  return (
    <section id="areas" className="bg-white py-12 md:py-16">
      <Container>
        <div className="grid gap-8 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <Pill className="bg-brand-50 text-brand-800 ring-brand-200">
              <MapPinIcon className="h-4 w-4 text-brand-700" />
              Areas served
            </Pill>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              Local to Sussex. Easy to book.
            </h2>
            <p className="mt-3 text-slate-600">
              We’re based locally and cover the surrounding towns with reliable appointments and clear communication.
            </p>

            <div className="mt-6 rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200 shadow-soft">
              <div className="text-sm font-extrabold text-slate-950">What you can expect</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>• Clear quote before work starts</li>
                <li>• Tidy workmanship &amp; respect for your home</li>
                <li>• Advice to prevent repeat problems</li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="grid gap-3 sm:grid-cols-2">
              {AREAS.map((a) => (
                <div key={a} className="rounded-2xl bg-white p-4 ring-1 ring-slate-200 shadow-soft">
                  <div className="text-sm font-semibold text-slate-900">{a}</div>
                  <div className="mt-1 text-xs text-slate-600">Call‑outs &amp; appointments</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="bg-gradient-to-b from-white to-slate-50 py-12 md:py-16">
      <Container>
        <div className="flex flex-col gap-2">
          <Pill className="bg-accent-50 text-accent-800 ring-accent-200">
            <StarIcon className="h-4 w-4 text-accent-600" />
            Reviews
          </Pill>
          <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
            Rated 5‑star by local homeowners.
          </h2>
          <p className="max-w-2xl text-slate-600">
            A few example reviews to show how the service feels in real life.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <div key={i} className="rounded-3xl bg-white p-6 ring-1 ring-slate-200 shadow-soft">
              <div className="flex items-center gap-1 text-accent-500" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <StarIcon key={idx} className="h-4 w-4" />
                ))}
              </div>
              <div className="mt-3 text-sm font-extrabold text-slate-950">{r.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{r.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container>
        <div className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-brand-900 text-white shadow-soft">
              <span className="text-sm font-black tracking-tight">CP</span>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-extrabold tracking-tight text-slate-950">
                Coastal Plumbing &amp; Heating
              </div>
              <div className="text-xs font-medium text-slate-600">
                Emergency plumbing • Boilers • Bathrooms
              </div>
            </div>
          </div>

          <div className="text-sm text-slate-600">
            <span className="font-semibold text-slate-900">Call:</span>{" "}
            <a className="hover:underline" href="tel:01234567890">
              01234 567 890
            </a>{" "}
            • <span className="font-semibold text-slate-900">Email:</span>{" "}
            <a className="hover:underline" href="mailto:hello@example.com">
              hello@example.com
            </a>
          </div>
        </div>

        <div className="pb-10 text-xs text-slate-500">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>© {new Date().getFullYear()} Coastal Plumbing &amp; Heating. All rights reserved.</div>
            <div className="text-slate-400">
              Demo site for GuardX showroom examples.
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Areas />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}
