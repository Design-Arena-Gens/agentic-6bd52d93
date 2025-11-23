import Image from "next/image";

const features = [
  {
    title: "Smart Flow Control",
    description:
      "Adaptive variable-speed drive automatically calibrates output to match dynamic demand in real time.",
  },
  {
    title: "Industrial-Grade Durability",
    description:
      "Marine-grade stainless steel housing, IP68 sealed electronics, and a 10,000-hour ceramic shaft.",
  },
  {
    title: "Predictive Maintenance",
    description:
      "Onboard sensors stream vibration, pressure, and temperature data to your dashboard for proactive alerts.",
  },
];

const specs = [
  { label: "Max Flow Rate", value: "4800 L/min" },
  { label: "Head Pressure", value: "82 m" },
  { label: "Energy Savings", value: "33% vs. fixed-speed" },
  { label: "Warranty", value: "5 years industrial" },
];

const industries = [
  "Municipal water systems",
  "Agricultural irrigation",
  "HVAC & chillers",
  "Process cooling",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.35),transparent_55%)]" />
        <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-10 lg:px-8">
          <div className="flex items-center gap-3">
            <Image
              src="/aquapulse-logo.svg"
              alt="AquaPulse logo"
              width={44}
              height={44}
              priority
            />
            <div>
              <span className="text-sm font-medium uppercase tracking-widest text-sky-200">
                AquaPulse
              </span>
              <p className="text-lg font-semibold text-slate-100">
                HydroMax Series
              </p>
            </div>
          </div>
          <div className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
            <a className="transition hover:text-white" href="#features">
              Features
            </a>
            <a className="transition hover:text-white" href="#specs">
              Specifications
            </a>
            <a className="transition hover:text-white" href="#industries">
              Industries
            </a>
            <a className="transition hover:text-white" href="#contact">
              Support
            </a>
          </div>
          <a
            className="hidden rounded-full bg-sky-400 px-5 py-2 text-sm font-semibold text-slate-950 shadow-[0_10px_30px_rgba(56,189,248,0.35)] transition hover:bg-sky-300 md:inline-flex"
            href="#contact"
          >
            Request A Quote
          </a>
        </header>

        <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 lg:px-8">
          <section className="grid gap-12 lg:grid-cols-[1.15fr_minmax(0,1fr)]">
            <div className="flex flex-col gap-10">
              <div className="inline-flex items-center gap-2 self-start rounded-full border border-slate-700/70 bg-slate-900/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-300 shadow-[0_8px_35px_rgba(15,23,42,0.55)]">
                Next-Generation Water Movement
              </div>
              <h1 className="text-balance text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Deliver reliable, energy-smart flow with HydroMax intelligent
                water pumps.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-200">
                Engineered for mission-critical uptime, HydroMax pumps unite
                premium materials, smart telemetry, and effortless maintenance.
                Keep production running and conserve energy with a plug-in system
                that pays for itself in under 18 months.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_10px_30px_rgba(56,189,248,0.35)] transition hover:bg-sky-300"
                >
                  Schedule A Demo
                </a>
                <a
                  href="#specs"
                  className="inline-flex items-center justify-center rounded-full border border-sky-400/70 px-6 py-3 text-sm font-semibold text-sky-200 transition hover:border-sky-300 hover:text-sky-100"
                >
                  Download Spec Sheet
                </a>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {specs.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.45)]"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                      {item.label}
                    </p>
                    <p className="mt-4 text-2xl font-semibold text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative isolate">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 opacity-90 blur-3xl" />
              <div className="relative rounded-3xl border border-slate-800/60 bg-slate-950/60 p-8 shadow-[0_25px_60px_rgba(8,47,73,0.45)] backdrop-blur">
                <div className="mx-auto flex max-w-md flex-col items-center text-center">
                  <Image
                    src="/hydromax-illustration.svg"
                    alt="HydroMax pump illustration"
                    width={380}
                    height={320}
                    className="h-auto w-full"
                    priority
                  />
                  <div className="mt-8 grid w-full gap-4 text-left text-sm text-slate-200">
                    <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 px-5 py-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
                        Active Monitoring
                      </p>
                      <p className="mt-2">
                        Edge analytics engine with LTE + LoRaWAN connectivity for
                        remote alarms and cloud insights.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 px-5 py-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                        Efficiency Score
                      </p>
                      <p className="mt-2">
                        Smart drive optimizes pump curves, yielding up to 33%
                        energy savings without compromising flow.
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 flex w-full items-center justify-between rounded-2xl border border-slate-800/60 bg-slate-900/60 px-6 py-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                        Live Status
                      </p>
                      <p className="mt-1 text-lg font-semibold text-white">
                        Running at 68% load
                      </p>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-emerald-400/15 px-4 py-1 text-xs font-semibold text-emerald-200">
                      Optimal
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="features" className="grid gap-10 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="relative rounded-3xl border border-slate-800/70 bg-gradient-to-br from-slate-900/80 via-slate-950/70 to-slate-950/95 p-8 shadow-[0_20px_45px_rgba(15,23,42,0.45)] transition hover:border-sky-400/60"
              >
                <div className="pointer-events-none absolute -top-16 right-10 h-32 w-32 rounded-full bg-gradient-to-tr from-sky-400/50 via-transparent to-transparent blur-2xl" />
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </section>

          <section
            id="specs"
            className="relative overflow-hidden rounded-[2.75rem] border border-slate-800/80 bg-slate-900/60 px-8 py-12 shadow-[0_30px_80px_rgba(8,47,73,0.4)]"
          >
            <div className="pointer-events-none absolute -top-56 -left-20 h-96 w-96 rounded-full bg-gradient-to-br from-sky-400/40 via-transparent to-transparent blur-3xl" />
            <div className="pointer-events-none absolute -bottom-56 -right-20 h-96 w-96 rounded-full bg-gradient-to-br from-emerald-400/30 via-transparent to-transparent blur-3xl" />
            <div className="grid gap-12 lg:grid-cols-[1.2fr_minmax(0,1fr)]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">
                  Engineered For Demanding Environments
                </p>
                <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                  Built to outperform traditional centrifugal pumps.
                </h2>
                <p className="mt-5 text-base text-slate-300">
                  HydroMax integrates smart sealing, whisper-quiet operation, and
                  a modular cartridge design. Swap impellers in minutes, monitor
                  pumps remotely, and keep operations lean even under fluctuating
                  loads.
                </p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-800/70 bg-slate-950/60 p-6">
                    <p className="text-sm font-semibold text-white">
                      Chemical & UV resistant
                    </p>
                    <p className="mt-2 text-sm text-slate-300">
                      EPDM elastomers and titanium fasteners withstand corrosive
                      water treatment processes.
                    </p>
                  </div>
                  <div className="rounded-3xl border border-slate-800/70 bg-slate-950/60 p-6">
                    <p className="text-sm font-semibold text-white">
                      Ultra-quiet operation
                    </p>
                    <p className="mt-2 text-sm text-slate-300">
                      Acoustic dampening reduces vibration to &lt;45 dB at 70% load
                      for comfort-critical facilities.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Motor Output", value: "18.5 kW, IE5 permanent magnet" },
                  { label: "Operating Range", value: "Ambient -20 °C to 60 °C" },
                  { label: "Connectivity", value: "Modbus TCP, OPC-UA, REST API" },
                  { label: "Footprint", value: "620 x 410 mm skid mount" },
                  { label: "Ingress Protection", value: "IP68 sealed electronics" },
                  { label: "Compliance", value: "NSF/ANSI 61, ISO 9906 Grade 1" },
                ].map((spec) => (
                  <div
                    key={spec.label}
                    className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                      {spec.label}
                    </p>
                    <p className="mt-3 text-base font-semibold text-white">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section
            id="industries"
            className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_1.1fr]"
          >
            <div className="rounded-3xl border border-slate-800/60 bg-slate-950/70 p-8 shadow-[0_25px_60px_rgba(8,47,73,0.4)]">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">
                Trusted Across Sectors
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white">
                Proven reliability in the harshest water ecosystems.
              </h2>
              <p className="mt-5 text-base text-slate-300">
                Deploy HydroMax in distributed pumping networks, retrofit aging
                infrastructure, or upgrade energy-intensive systems. Our
                engineers provide commissioning support, digital twinning, and
                compliance documentation tailored to your industry.
              </p>
              <ul className="mt-8 grid gap-4 text-sm text-slate-200">
                {industries.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-slate-800/70 bg-slate-900/70 px-4 py-3"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-sky-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-800/60 bg-gradient-to-br from-slate-900/80 to-slate-950/90 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300">
                  Sustainability
                </p>
                <p className="mt-4 text-lg font-semibold text-white">
                  38% lower CO₂ footprint across lifecycle.
                </p>
                <p className="mt-3 text-sm text-slate-300">
                  High-efficiency motors, recyclable casing, and intelligent load
                  balancing reduce emissions without sacrificing output.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-800/60 bg-gradient-to-br from-slate-900/80 to-slate-950/90 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-300">
                  Remote Support
                </p>
                <p className="mt-4 text-lg font-semibold text-white">
                  24/7 monitoring with guaranteed 30-minute response.
                </p>
                <p className="mt-3 text-sm text-slate-300">
                  Our command center supervises performance trends and dispatches
                  service teams before issues impact uptime.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-800/60 bg-gradient-to-br from-slate-900/80 to-slate-950/90 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-purple-300">
                  Seamless Integration
                </p>
                <p className="mt-4 text-lg font-semibold text-white">
                  Works with existing SCADA & BMS systems.
                </p>
                <p className="mt-3 text-sm text-slate-300">
                  Certified connectors, open APIs, and MQTT-ready gateways speed
                  up retrofits and new deployments alike.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-800/60 bg-gradient-to-br from-slate-900/80 to-slate-950/90 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
                  TotalCare Service
                </p>
                <p className="mt-4 text-lg font-semibold text-white">
                  Predictive maintenance subscription.
                </p>
                <p className="mt-3 text-sm text-slate-300">
                  Monthly health reports, spare parts logistics, and onsite
                  audits keep your pumping systems always-on.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-800/70 bg-gradient-to-r from-slate-950 via-slate-900/80 to-slate-950 px-8 py-12 shadow-[0_25px_60px_rgba(8,47,73,0.4)]">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">
                  Customer Confidence
                </p>
                <h2 className="mt-4 text-3xl font-bold text-white">
                  “HydroMax pumps cut our energy bill by a third while giving us
                  real-time visibility we never had before.”
                </h2>
                <p className="mt-4 text-sm font-medium text-slate-300">
                  — Taylor Morgan, Plant Operations Director, BlueRiver Utilities
                </p>
              </div>
              <div className="rounded-3xl border border-slate-800/60 bg-slate-950/70 p-8 text-sm text-slate-200">
                <p className="font-semibold text-white">Deployment Snapshot</p>
                <ul className="mt-4 grid gap-3">
                  <li className="flex items-center justify-between">
                    <span>Networked pumps</span>
                    <span className="font-semibold text-sky-200">24</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Annual savings</span>
                    <span className="font-semibold text-sky-200">$112k</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Downtime reduction</span>
                    <span className="font-semibold text-sky-200">-68%</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section
            id="contact"
            className="relative overflow-hidden rounded-3xl border border-slate-800/60 bg-gradient-to-br from-sky-500/10 via-slate-950 to-slate-950 px-8 py-12 shadow-[0_30px_80px_rgba(8,47,73,0.5)]"
          >
            <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-sky-400/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 left-12 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl" />
            <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-100">
                  Ready To Modernize
                </p>
                <h2 className="mt-4 text-3xl font-bold text-white">
                  Speak with a HydroMax engineer and design your pumping system.
                </h2>
                <p className="mt-4 text-base text-slate-200">
                  Share your flow requirements, existing infrastructure, and
                  timeline. Our experts will deliver a tailored performance model
                  and ROI roadmap within 48 hours.
                </p>
              </div>
              <div className="flex flex-col gap-4 text-sm font-medium text-slate-200">
                <a
                  className="inline-flex items-center gap-3 rounded-2xl border border-slate-800/60 bg-slate-950/80 px-6 py-4 transition hover:border-sky-400/60"
                  href="mailto:sales@aquapulse.io"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-300" />
                  sales@aquapulse.io
                </a>
                <a
                  className="inline-flex items-center gap-3 rounded-2xl border border-slate-800/60 bg-slate-950/80 px-6 py-4 transition hover:border-sky-400/60"
                  href="tel:+18005551234"
                >
                  <span className="h-2 w-2 rounded-full bg-sky-300" />
                  +1 (800) 555-1234
                </a>
                <p className="rounded-2xl border border-slate-800/60 bg-slate-950/80 px-6 py-4 text-xs uppercase tracking-[0.3em] text-slate-400">
                  Global logistics · Onsite commissioning · Remote analytics
                </p>
              </div>
            </div>
          </section>
        </main>

        <footer className="mx-auto mt-16 w-full max-w-6xl px-6 pb-12 text-xs text-slate-500 lg:px-8">
          <div className="flex flex-col gap-4 border-t border-slate-800/70 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} AquaPulse Technologies. All rights reserved.</p>
            <div className="flex gap-6">
              <a className="transition hover:text-slate-200" href="#">
                Privacy
              </a>
              <a className="transition hover:text-slate-200" href="#">
                Warranty
              </a>
              <a className="transition hover:text-slate-200" href="#">
                Certifications
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
