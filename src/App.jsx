import { useEffect, useMemo, useRef, useState } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "team", label: "Team" },
  { id: "services", label: "Services" },
  { id: "cars", label: "Our Facility" },
  { id: "booking", label: "Booking" },
  { id: "contact", label: "Contact" },
];

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const heroCopy =
  "PENTAGON is a Miami-area dealership concept built on affordability, fairness, and disciplined growth across sales, service, financing, and long-term customer care.";

const metrics = [
  {
    title: "Miami Expansion",
    description: "Planned for the Fort Lauderdale and Miami market with strong visibility and demand.",
  },
  {
    title: "3 Public Levels",
    description: "Entry, premium, and luxury spaces supported by a dedicated basement service level.",
  },
  {
    title: "$10M Capital Plan",
    description: "Startup budget structured around inventory, operations, staffing, and controlled expansion.",
  },
];

const stories = [
  {
    index: "01",
    title: "Mission and values",
    paragraphs: [
      "PENTAGON is built around three core virtues: affordability, fairness, and diligence. The goal is to keep products and services high quality while maintaining prices the team would be willing to pay themselves.",
      "The company also treats employee success as part of business success, tying long-term growth to fair pay, loyalty, and disciplined day-to-day work.",
    ],
  },
  {
    index: "02",
    title: "Corporate structure",
    delay: 80,
    paragraphs: [
      "The business is structured as a corporation so it can operate as its own legal entity, protect shareholder assets, and scale through financing partnerships, fleet programs, and supplier relationships.",
      "Sales, service, financing, and inventory are organized under one roof, giving the dealership a multifunctional operating model instead of a single-purpose showroom.",
    ],
  },
  {
    index: "03",
    title: "Market position",
    delay: 160,
    accent: true,
    paragraphs: [
      "The plan targets the Miami and Fort Lauderdale area because of stronger demand, higher visibility, active road traffic, and a broader customer base than a heavily taxed Canadian launch would offer.",
      "PENTAGON is positioned as a transparent, hybrid dealership experience: in-person retail, digital communication, flexible financing, and future-ready growth into EV and charging infrastructure.",
    ],
  },
];

const teamMembers = [
  {
    name: "Andre",
    role: "CEO",
    description: "Sets the mission, growth direction, and leadership standards for the dealership.",
    photos: [
      {
        src: asset("assets/images/team-profiles/ceo.jpg"),
        alt: "CEO department portrait",
      },
    ],
    details: [
      "Andre leads the executive summary, mission, and long-term expansion logic behind the company.",
      "His focus is affordable pricing, employee support, disciplined scaling, and future transportation readiness without abandoning traditional automotive demand.",
    ],
  },
  {
    name: "Dasha",
    role: "Administration",
    description: "Keeps operations organized, documented, and aligned with the dealership structure.",
    delay: 40,
    photos: [
      {
        src: asset("assets/images/team-profiles/administration.jpg"),
        alt: "Administration department portrait",
      },
    ],
    details: [
      "Administration supports legal registration, documentation, internal coordination, and operational flow across departments.",
      "This role helps turn a complex dealership model into a manageable structure for staff, suppliers, and customers.",
    ],
  },
  {
    name: "Sophia",
    role: "Law",
    description: "Protects the business through compliance, corporate structure, and legal clarity.",
    delay: 80,
    photos: [
      {
        src: asset("assets/images/team-profiles/law.jpg"),
        alt: "Law department portrait",
      },
    ],
    details: [
      "The legal function covers labour, safety, environmental, and corporate regulations tied to the dealership model.",
      "It also supports the corporation structure, shareholder protection, and the legal discipline required for expansion, licensing, and contracts.",
    ],
  },
  {
    name: "Sofia & Evolet",
    role: "HR",
    description: "Shapes hiring, retention, development, and workplace support across the company.",
    delay: 120,
    photos: [
      {
        src: asset("assets/images/team-profiles/hr-1.jpg"),
        alt: "Human resources portrait one",
      },
      {
        src: asset("assets/images/team-profiles/hr-2.jpg"),
        alt: "Human resources portrait two",
      },
    ],
    details: [
      "HR is responsible for recruitment, training, employee relations, scheduling, performance management, payroll support, and workplace compliance.",
      "The department is also central to safety oversight and helps maintain a productive, fair, and stable workplace culture.",
    ],
  },
  {
    name: "Vlad, Nick, Ruben",
    role: "Accounting",
    description: "Controls the budget, liabilities, equity, and financial planning behind the launch.",
    delay: 160,
    details: [
      "Accounting manages the $10,000,000 capital plan, startup costs, fixed versus variable expenses, and reserve planning.",
      "The team also supports funding requirements, break-even logic, asset planning, liabilities, equity tracking, and long-term financial stability.",
    ],
  },
  {
    name: "Dima",
    role: "Warehouse",
    description: "Runs inventory flow, supplier coordination, and facility-level operating logic.",
    delay: 200,
    photos: [
      {
        src: asset("assets/images/team-profiles/warehouse.jpg"),
        alt: "Warehouse department portrait",
      },
    ],
    details: [
      "Warehouse operations support large inventory capacity, customer parking, future expansion, and real-time vehicle tracking.",
      "This department connects digital tools, barcode or RFID systems, supplier coordination, and vehicle readiness across the site.",
    ],
  },
  {
    name: "Ruben & Alex",
    role: "Sales",
    description: "Lead pricing, retail conversion, CRM communication, and hybrid online-offline selling.",
    details: [
      "Sales strategy is built on trust through transparency, market-based pricing, and fast inventory turnover.",
      "The team also supports omnichannel selling, balancing physical showroom interactions with digital lead handling and follow-up.",
    ],
  },
  {
    name: "Raadin & Kai",
    role: "Service",
    description: "Handle maintenance, diagnostics, repairs, and after-sale support with a quality-first approach.",
    delay: 40,
    photos: [
      {
        src: asset("assets/images/team-profiles/service.jpg"),
        alt: "Service department portrait",
      },
    ],
    details: [
      "The service department covers maintenance, repairs, diagnostics, customer updates, vehicle history, and appointment scheduling.",
      "Its USP is honest communication, OEM-focused quality, and a long-term customer relationship after the sale.",
    ],
  },
  {
    name: "Maya, Oleg, Vadim",
    role: "Marketing",
    description: "Own location strategy, outreach, social visibility, and customer-facing promotion.",
    delay: 80,
    photos: [
      {
        src: asset("assets/images/team-profiles/marketing.jpg"),
        alt: "Marketing department portrait",
      },
    ],
    details: [
      "Marketing is centered on the Miami-area launch, local accessibility, community relevance, and strong digital promotion.",
      "The team uses social content, the website, incentives, and location messaging to drive awareness and repeat engagement.",
    ],
  },
  {
    name: "David",
    role: "Customer Service",
    description: "Owns first impressions, communication flow, and post-visit follow-up.",
    delay: 120,
    photos: [
      {
        src: asset("assets/images/team-profiles/customer_service.jpg"),
        alt: "Customer service department portrait",
      },
    ],
    details: [
      "Customer service welcomes visitors, understands needs, routes them to the right department, and follows up after visits.",
      "This role also supports trust through clear communication, transparent expectations, and consistent responsiveness.",
    ],
  },
];

const services = [
  {
    number: "01",
    title: "Vehicle Sales",
    description:
      "Automobile sales across entry, premium, and luxury segments with transparent pricing and hybrid retail support.",
  },
  {
    number: "02",
    title: "Financing & Fleet",
    description:
      "Fleet incentives, financing coordination, and partnership-ready purchasing pathways for businesses and corporations.",
    delay: 40,
  },
  {
    number: "03",
    title: "Maintenance & Repair",
    description: "Maintenance, diagnostics, repairs, and long-term vehicle support built around quality and trust.",
    delay: 80,
  },
  {
    number: "04",
    title: "Trade-In & Appraisal",
    description:
      "Structured intake, appraisal flow, and resale support for customers entering or upgrading their ownership cycle.",
    delay: 120,
  },
  {
    number: "05",
    title: "Customer Retention",
    description:
      "CRM-driven communication through calls, email, text, and follow-up support after the visit or sale.",
    delay: 160,
  },
];

const cars = [
  {
    name: "Entry & Premium Level",
    image: asset("assets/images/business-plan/image4.png"),
    alt: "Floor plan showing the entry and premium showroom level",
    fit: "contain",
    description:
      "The main public level separates first-time and premium buyers around a shared reception and direct service access.",
    chips: ["Toyota / Honda / Hyundai", "Shared reception"],
  },
  {
    name: "Basement Services Level",
    image: asset("assets/images/business-plan/image11.png"),
    alt: "Floor plan showing the basement services level",
    fit: "contain",
    description:
      "The lower level is dedicated to service access, technical operations, support space, and after-sales functionality.",
    chips: ["Service access", "Technical support"],
    delay: 60,
  },
  {
    name: "Luxury Level",
    image: asset("assets/images/business-plan/image12.png"),
    alt: "Floor plan showing the luxury showroom level",
    fit: "contain",
    description:
      "The upper level is reserved for luxury presentation, private consultations, and halo inventory positioning.",
    chips: ["Luxury inventory", "Private consultations"],
    delay: 120,
  },
  {
    name: "Site & Access",
    image: asset("assets/images/business-plan/image2.png"),
    alt: "Aerial rendering of the dealership site in the Miami area",
    fit: "cover",
    description:
      "The dealership concept is planned around visibility, parking capacity, surrounding density, and future growth.",
    chips: ["Miami visibility", "Expansion ready"],
    delay: 180,
  },
];

const contactDetails = [
  { label: "Our location", value: "Fort Lauderdale / Miami, Florida" },
  { label: "About our Business", value: "Corporation with sales, service, financing, and inventory" },
  { label: "Capital", value: "$10,000,000 startup budget with reserve funding" },
  { label: "Administrator phone", value: "+1 437 665 1488" },
];

const serviceOptions = [
  "Vehicle Sales",
  "Financing & Fleet",
  "Maintenance & Repair",
  "Trade-In & Appraisal",
  "Customer Retention",
  "Showroom Visit",
];

function SectionHeading({ eyebrow, title, description, left = false, delay = 0 }) {
  return (
    <div
      className={`section-heading${left ? " section-heading--left" : ""}`}
      data-reveal=""
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [typedLength, setTypedLength] = useState(0);
  const [toastMessage, setToastMessage] = useState("");
  const [loaderHidden, setLoaderHidden] = useState(false);
  const [bookingMinDate, setBookingMinDate] = useState("");
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);
  const cursorGlowRef = useRef(null);
  const scrollProgressRef = useRef(null);
  const toastTimerRef = useRef(null);

  const typedHeroCopy = useMemo(
    () => heroCopy.slice(0, typedLength),
    [typedLength],
  );

  const showToast = (message) => {
    setToastMessage(message);
    window.clearTimeout(toastTimerRef.current);
    toastTimerRef.current = window.setTimeout(() => {
      setToastMessage("");
    }, 2800);
  };

  useEffect(() => {
    const loaderTimeout = window.setTimeout(() => {
      setLoaderHidden(true);
    }, 950);

    let typingIntervalId;
    const typingStarter = window.setTimeout(() => {
      let currentLength = 0;
      typingIntervalId = window.setInterval(() => {
        currentLength += 1;
        setTypedLength(currentLength);

        if (currentLength >= heroCopy.length) {
          window.clearInterval(typingIntervalId);
        }
      }, 18);
    }, 500);

    const today = new Date();
    today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
    setBookingMinDate(today.toISOString().split("T")[0]);

    return () => {
      window.clearTimeout(loaderTimeout);
      window.clearTimeout(typingStarter);
      window.clearInterval(typingIntervalId);
      window.clearTimeout(toastTimerRef.current);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedTeamMember(null);
      }
    };

    document.body.classList.toggle("team-modal-open", Boolean(selectedTeamMember));
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.classList.remove("team-modal-open");
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedTeamMember]);

  useEffect(() => {
    const revealItems = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => {
        const section = document.getElementById(id);
        return section ? { id, section } : null;
      })
      .filter(Boolean);

    const handleScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;

      if (scrollProgressRef.current) {
        scrollProgressRef.current.style.width = `${ratio}%`;
      }

      const parallaxItems = document.querySelectorAll("[data-parallax]");
      parallaxItems.forEach((item, index) => {
        const offset = Math.min(window.scrollY * 0.08 * (index + 1), 30);
        item.style.transform = `translateY(${offset}px)`;
      });

      const trigger = window.scrollY + window.innerHeight * 0.26;
      let nextActiveSection = "home";

      sections.forEach(({ id, section }) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (trigger >= top && trigger < bottom) {
          nextActiveSection = id;
        }
      });

      setActiveSection((current) =>
        current === nextActiveSection ? current : nextActiveSection,
      );
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!cursorGlowRef.current) {
        return;
      }

      cursorGlowRef.current.style.left = `${event.clientX}px`;
      cursorGlowRef.current.style.top = `${event.clientY}px`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleFormSubmit = (event, variant) => {
    event.preventDefault();
    showToast(
      variant === "booking"
        ? "Booking request captured. This is a premium placeholder flow without backend."
        : "Message captured. This contact form is a premium placeholder without backend.",
    );
    event.currentTarget.reset();
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div
        className={`loader${loaderHidden ? " is-hidden" : ""}`}
        aria-hidden="true"
      >
        <div className="loader__glow"></div>
        <img className="loader__mark" src={asset("assets/pentagon-mark.svg")} alt="" />
        <p className="loader__text">PENTAGON</p>
      </div>

      <div className="bg-noise"></div>
      <div className="cursor-glow" ref={cursorGlowRef}></div>
      <div className="scroll-progress" ref={scrollProgressRef}></div>

      <header className="site-header" id="top">
        <div className="container header__inner">
          <a className="brand" href="#home" aria-label="PENTAGON home">
            <img className="brand__mark" src={asset("assets/pentagon-mark.svg")} alt="" />
            <span className="brand__text">PENTAGON</span>
          </a>

          <button
            className={`menu-toggle${menuOpen ? " is-active" : ""}`}
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span></span>
            <span></span>
          </button>

          <nav className={`site-nav${menuOpen ? " is-open" : ""}`}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? "is-active" : ""}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section
          className="hero"
          id="home"
          style={{
            "--hero-backdrop-image": `url(${asset("assets/images/business-plan/image2.png")})`,
          }}
        >
          <div className="hero__backdrop"></div>
          <div className="hero__grid container">
            <div className="hero__content" data-reveal="">
              <h1 className="hero__title">
                <span className="hero__brand">PENTAGON</span>
                <span className="hero__headline">
                  Affordable, fair, and future-ready dealership growth.
                </span>
              </h1>
              <p className="hero__lead">{typedHeroCopy}</p>

              <div className="hero__actions">
                <a className="button button--primary" href="#cars">
                  Explore
                </a>
                <a className="button button--ghost" href="#booking">
                  Book a Service
                </a>
              </div>

              <div className="hero__metrics">
                {metrics.map((metric) => (
                  <article key={metric.title} className="metric glass-panel">
                    <strong>{metric.title}</strong>
                    <span>{metric.description}</span>
                  </article>
                ))}
              </div>
            </div>

              <div
              className="hero__visual"
              data-reveal=""
              style={{ "--reveal-delay": "120ms" }}
            >
              <div className="hero-card" data-parallax="">
                <div className="hero-card__media">
                  <img
                    src={asset("assets/images/business-plan/image2.png")}
                    alt="Aerial view of the planned dealership location in the Miami area"
                  />
                </div>
                <div className="hero-card__overlay glass-panel">
                  <span>Miami launch strategy</span>
                  <strong>
                    Three showroom levels, integrated service operations, and room for long-term expansion.
                  </strong>
                </div>
              </div>
              <div className="hero-card hero-card--small glass-panel">
                <span>Growth plan</span>
                <p>
                  Launch in a high-demand South Florida market, build trust with transparent pricing, and scale into new locations over time.
                </p>
              </div>
            </div>
          </div>

          <div className="hero__scroll">
            <span></span>
            <p>Scroll to discover</p>
          </div>
        </section>

        <section className="section section--overview">
          <div className="container">
            <SectionHeading
              eyebrow="About PENTAGON"
              title="A corporation designed to combine pricing discipline, customer care, and scalable operations."
            />

            <div className="overview-grid">
              {stories.map((story) => (
                <article
                  key={story.index}
                  className={`story-card${story.accent ? " story-card--accent" : " glass-panel"}`}
                  data-reveal=""
                  style={{ "--reveal-delay": `${story.delay ?? 0}ms` }}
                >
                  <span className="story-card__index">{story.index}</span>
                  <h3>{story.title}</h3>
                  {story.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="team">
          <div className="container">
            <div className="team-layout">
              <SectionHeading
                eyebrow="Team"
                title="Democratic leadership keeps every department connected to execution."
                description="The operating model relies on shared communication between management, HR, legal, accounting, warehouse, sales, service, customer care, marketing, and race operations."
                left
              />

              <div
                className="team-showcase glass-panel"
                data-reveal=""
                style={{ "--reveal-delay": "80ms" }}
              >
                <img
                  src={asset("assets/images/business-plan/image3.png")}
                  alt="Organizational chart showing the democratic leadership structure"
                />
                <div className="team-showcase__copy">
                  <span>Organization model</span>
                  <strong>Shared leadership, shared accountability, and constant cross-department input.</strong>
                </div>
              </div>

              <div className="team-grid">
                {teamMembers.map((member) => (
                  <button
                    key={`${member.name}-${member.role}`}
                    className="team-card team-card--button glass-panel"
                    type="button"
                    data-reveal=""
                    style={{ "--reveal-delay": `${member.delay ?? 0}ms` }}
                    onClick={() => setSelectedTeamMember(member)}
                  >
                    <span>{member.name}</span>
                    <h3>{member.role}</h3>
                    <p>{member.description}</p>
                    <strong className="team-card__cta">View profile</strong>
                  </button>
                ))}
              </div>
            </div>

            <div className="detail-banner glass-panel" data-reveal="">
              <img
                src={asset("assets/images/business-plan/image1.png")}
                alt="Worker satisfaction analysis chart for the dealership company"
              />
              <div className="detail-banner__copy">
                <span>Workforce insight</span>
                <h3>
                  Employee satisfaction averages 78.5%, with strongest scores in leadership and HR support.
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <SectionHeading
              eyebrow="Services"
              title="Sales, financing, service, and retention work as one connected operating system."
            />

            <div className="services-grid">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="service-card glass-panel"
                  data-reveal=""
                  style={{ "--reveal-delay": `${service.delay ?? 0}ms` }}
                >
                  <span>{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>

            <div className="service-stage glass-panel" data-reveal="">
              <div className="service-stage__copy">
                <span>Service workflow</span>
                <h3>The basement level is dedicated to maintenance flow, diagnostics, repairs, and support access.</h3>
                <p>
                  Appointments, inspections, repair execution, billing, and vehicle return are all planned as a single after-sales process designed to protect trust and long-term retention.
                </p>
              </div>
              <img
                src={asset("assets/images/business-plan/image11.png")}
                alt="Floor plan showing the basement services level"
              />
            </div>
          </div>
        </section>

        <section className="section" id="cars">
          <div className="container">
            <SectionHeading
              eyebrow="Our Facility"
              title="The facility is organized around clear customer segments, service flow, and premium presentation."
            />

            <div className="cars-grid">
              {cars.map((car) => (
                <article
                  key={car.name}
                  className="car-card glass-panel"
                  data-reveal=""
                  style={{ "--reveal-delay": `${car.delay ?? 0}ms` }}
                >
                  <div className="car-card__media">
                    <img
                      src={car.image}
                      alt={car.alt}
                      style={{
                        objectFit: car.fit,
                        background:
                          car.fit === "contain" ? "rgba(255, 255, 255, 0.98)" : undefined,
                      }}
                    />
                  </div>
                  <div className="car-card__body">
                    <h3>{car.name}</h3>
                    <p>{car.description}</p>
                    <div className="chip-row">
                      {car.chips.map((chip) => (
                        <span key={chip}>{chip}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="detail-banner glass-panel" data-reveal="">
              <img
                src={asset("assets/images/business-plan/image12.png")}
                alt="Floor plan showing the luxury level layout"
              />
              <div className="detail-banner__copy">
                <span>Showroom strategy</span>
                <h3>
                  Three distinct levels help PENTAGON serve affordable retail, premium buyers, and luxury clients without mixing the experience.
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--booking" id="booking">
          <div className="container booking-grid">
            <div className="booking-copy glass-panel" data-reveal="">
              <span className="eyebrow">Booking</span>
              <h2 className="booking-copy__title">
                Request a showroom visit, fleet consultation, or service planning call.
              </h2>
              <p>
                Use this placeholder request flow for a retail appointment, business purchasing conversation, financing discussion, or after-sales service coordination.
              </p>
            </div>

            <form
              className="form glass-panel"
              data-reveal=""
              style={{ "--reveal-delay": "80ms" }}
              onSubmit={(event) => handleFormSubmit(event, "booking")}
            >
              <div className="form__group">
                <label htmlFor="booking-name">Name</label>
                <input
                  id="booking-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form__group">
                <label htmlFor="service-type">Service Type</label>
                <select id="service-type" name="service" defaultValue={serviceOptions[0]}>
                  {serviceOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="form__group">
                <label htmlFor="booking-date">Date</label>
                <input
                  id="booking-date"
                  name="date"
                  type="date"
                  min={bookingMinDate}
                  required
                />
              </div>
              <div className="form__group">
                <label htmlFor="booking-message">Message</label>
                <textarea
                  id="booking-message"
                  name="message"
                  rows="4"
                  placeholder="Additional notes"
                ></textarea>
              </div>
              <button className="button button--primary" type="submit">
                Book Now
              </button>
            </form>
          </div>
        </section>

        <section className="section section--contact-info" id="contact">
          <div className="container contact-stack">
            <SectionHeading
              eyebrow="Contact"
              title="Miami growth, transparent operations, and a dealership model built to scale."
              description="PENTAGON combines sales, service, financing, inventory, and customer support inside one corporation-ready structure designed for long-term expansion."
              left
            />

            <div
              className="contact-copy"
              data-reveal=""
              style={{ "--reveal-delay": "80ms" }}
            >
              <p>
                The business plan is based on a launch in the Fort Lauderdale and Miami area, followed by gradual brand expansion once the dealership builds recognition, cash flow, and operational stability.
              </p>
              <p>
                Environmental responsibility, fair treatment, legal compliance, and disciplined budgeting are treated as operating requirements rather than optional branding language.
              </p>
              <p>
                For more detailed guidance, the relevant department can provide specific information based on your request, whether it concerns sales, service, financing, administration, or operations.
              </p>
            </div>

            <div
              className="contact-lines"
              data-reveal=""
              style={{ "--reveal-delay": "120ms" }}
            >
              {contactDetails.map((detail) => (
                <div key={detail.label} className="contact-line">
                  <span>{detail.label}</span>
                  <strong>{detail.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer__inner">
          <div>
            <strong>PENTAGON</strong>
            <p>
              Premium automotive presence for private clients, fleets, and
              enthusiasts.
            </p>
          </div>
          <a href="#top">Back to top</a>
        </div>
      </footer>

      <div
        className={`toast${toastMessage ? " is-visible" : ""}`}
        role="status"
        aria-live="polite"
      >
        {toastMessage}
      </div>

      {selectedTeamMember ? (
        <div
          className="team-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="team-modal-title"
          onClick={() => setSelectedTeamMember(null)}
        >
          <div
            className="team-modal__dialog glass-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="team-modal__close"
              type="button"
              aria-label="Close profile"
              onClick={() => setSelectedTeamMember(null)}
            >
              Close
            </button>

            <span className="eyebrow">Team profile</span>
            <h3 id="team-modal-title">{selectedTeamMember.name}</h3>
            <p className="team-modal__role">{selectedTeamMember.role}</p>
            <div className="team-modal__content">
              {selectedTeamMember.photos?.length ? (
                <div
                  className={`team-modal__gallery${
                    selectedTeamMember.photos.length > 1 ? " team-modal__gallery--stacked" : ""
                  }`}
                >
                  {selectedTeamMember.photos.map((photo) => (
                    <div key={photo.src} className="team-modal__media glass-panel">
                      <img src={photo.src} alt={photo.alt} />
                    </div>
                  ))}
                </div>
              ) : null}

              <div className="team-modal__copy">
                <p className="team-modal__lead">{selectedTeamMember.description}</p>

                <div className="team-modal__body">
                  {selectedTeamMember.details.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default App;
