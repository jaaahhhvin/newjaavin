"use client";

// app/page.tsx

export default function Home() {
  const handlePronounce = () => {
    const utterance = new SpeechSynthesisUtterance("JAV-in");
    utterance.rate = 0.8;

    // Try to use a male voice
    const voices = window.speechSynthesis.getVoices();
    const maleVoice = voices.find(voice =>
      voice.name.includes('Male') ||
      voice.name.includes('male') ||
      voice.name.includes('David') ||
      voice.name.includes('Daniel')
    );

    if (maleVoice) {
      utterance.voice = maleVoice;
    }

    window.speechSynthesis.speak(utterance);
  };

  const links = [
    { label: "email", href: "mailto:hi@jaavin.ca" },
    { label: "resume", href: "/Jaavin_Mohanakumar_Resume.pdf" },
    { label: "github", href: "https://github.com/UnloadingGnat" },
    { label: "linkedin", href: "https://linkedin.com/in/jaavin" },
  ];

  const sections: Array<{
    title: string;
    items: Array<{ label: string; desc: string; href?: string }>;
  }> = [
    {
      title: "Experience",
      items: [
        {
          label: "IPEX (Software Engineering Intern, 2024)",
          desc: "Built C# machine-alert monitoring; reduced failure response time by 30%.",
        },
        {
          label: "IPEX (Software Engineering Intern, 2023)",
          desc: "Shipped .NET file transfer service; cut downtime from 14% to 2%.",
        },
      ],
    },
    {
      title: "Selected Projects",
      items: [
        {
          label: "JPEG RTL Image Decompressor",
          desc: "IDCT + 10-tap FIR + YUV→RGB at 50 MHz; 88.89% multiplier utilization.",
        },
        {
          label: "Real-Time 3D LiDAR Mapping",
          desc: "MSP432 + ToF + stepper scanning; Python/Open3D live point-cloud visualization.",
        },
        {
          label: "WIFOM? (Assistive device for visually impaired)",
          desc: "Dual ESP32-CAM + cloud ML; audio/haptics alerts under $40 with <2s latency.",
        },
        {
          label: "MeGPT (AI SaaS)",
          desc: "Launched product site; reached 2.2K visitors in 24 hours and featured on mcmaster news.",
        },
      ],
    },
    {
      title: "Student Design Teams",
      items: [
        {
          label: "McMaster Rocketry (Controls PM)",
          desc: "Led a 15-person controls team; integrated avionics, telemetry, and data acquisition systems.",
        },
        {
          label: "FRC 1325 (Software Co-Lead)",
          desc: "Autonomous + vision control in Java; awarded excellence in engineering at Worlds.",
        },
      ],
    },
    {
      title: "Skills",
      items: [
        {
          label: "Hardware / RTL",
          desc: "Verilog/SystemVerilog, FPGA/ASIC, timing closure, DSP-style datapaths.",
        },
        {
          label: "Software / Tools",
          desc: "C/C++/C#/Python, Quartus/ModelSim, Linux, Git, lab instrumentation.",
        },
        {
          label: "Interfaces",
          desc: "I2C, SPI, CAN, UART, USB2, VGA, TCP/UDP/DHCP, AXI, FIFO, PCIe.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-black dark:text-zinc-50">
      <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
        {/* Header */}
        <header className="text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start gap-2">
            <a
              href="/Jaavin_Mohanakumar_Resume.pdf"
              className="inline-block"
              target="_blank"
              rel="noreferrer"
            >
              <h1 className="text-3xl font-semibold tracking-tight">
                jaavin mohanakumar
              </h1>
            </a>
            <button
              onClick={handlePronounce}
              className="group flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors"
              aria-label="Pronounce name"
            >
              <span className="text-xs">/ˈdʒævɪn/</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
              </svg>
            </button>
          </div>

          <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            computer engineering @ mcmaster (apr 2027) · high-performance hardware + software systems
          </p>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-900 dark:text-zinc-100 italic">
            interested in computer architecture, and skilled in using c/c++,
            systemverilog, java and various scripting languages in that context.
            honest and open collaborator, with leadership experience and a
            passion for lifelong learning.
          </p>

          <nav className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm sm:justify-start">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-zinc-800 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-500 dark:text-zinc-200 dark:decoration-zinc-700 dark:hover:decoration-zinc-400"
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </header>

        {/* Sections */}
        <section className="mt-14 space-y-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-semibold tracking-tight">
                {section.title}
              </h2>

              <ul className="mt-4 space-y-3">
                {section.items.map((it) => (
                  <li key={it.label} className="leading-7">
                    <span className="font-medium text-zinc-900 dark:text-zinc-100">
                      {it.href ? (
                        <a
                          href={it.href}
                          target="_blank"
                          rel="noreferrer"
                          className="underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-500 dark:decoration-zinc-700 dark:hover:decoration-zinc-400"
                        >
                          {it.label}
                        </a>
                      ) : (
                        it.label
                      )}
                    </span>
                    <span className="text-zinc-600 dark:text-zinc-400">
                      {": "}
                      {it.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="mt-16 text-sm text-zinc-500 dark:text-zinc-500">
          <p>{new Date().getFullYear()} © Jaavin Mohanakumar</p>
        </footer>
      </main>
    </div>
  );
}