import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Tavishi",
  lastName: "Yadav",
  name: "Tavishi Yadav",
  role: "Product manager in progress",
  avatar: "/headshot.jpg",
  email: "tavishiyadav.pro@gmail.com",
  location: "America/New_York",
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Thoughts on product, AI systems, and operator-built tooling.</>,
};

const social: Social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/tavishiyadav",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/og.png",
  label: "Home",
  title: "Tavishi Yadav — Product Manager",
  description:
    "Cornell M.Eng student, ex-Freshworks engineer. Building AI-powered product tools. Seeking Summer 2026 PM / APM / TPM internships.",
  headline: <>Product manager in progress.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong>Automated Job Application Pipeline</strong>
        <Line background="brand-alpha-strong" vert height="20" />
        <Text onBackground="brand-medium">Flagship project</Text>
      </Row>
    ),
    href: "/work/automated-job-application-pipeline",
  },
  subline: (
    <>
      Cornell M.Eng student, ex-Freshworks engineer, 4.5 years of production SaaS
      experience. Building AI tools while I job hunt. Seeking PM / APM / TPM internships
      for Summer 2026.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description:
    "Freshworks engineer turned Cornell M.Eng student building toward product management in AI, SaaS, and B2B.",
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "About",
    description: (
      <>
        <Text as="p" variant="body-default-l">
          I spent 4.5 years at Freshworks as a Software Engineer — Test, embedded in the
          Freshservice product team. As a Senior Engineer, I led a 9-person cross-functional
          group delivering Contextual Collaboration and DevOps Change Management features to
          200+ enterprise customers — work that accelerated customer issue resolution by 40%.
          I also rebuilt our automated test infrastructure, cutting regression time from 3
          days to 4 hours.
        </Text>
        <Text as="p" variant="body-default-l">
          Working with product managers on 15+ feature launches, I kept gravitating toward
          the questions they owned: why we were building something, who it was for, how we'd
          measure success. The engineering work felt well-scoped; the product work felt like
          where the hard, interesting problems lived. So I made the leap.
        </Text>
        <Text as="p" variant="body-default-l">
          I'm now at Cornell, pursuing an M.Eng in Engineering Management (GPA 3.96,
          graduating Dec 2026), with coursework spanning product management, AI systems, and
          applied analytics. Outside class, I build: an Agentic AI Healthcare Agent with
          Cornell Johnson DTI for Oracle, and a job application pipeline that automates
          discovery, scoring, and packet generation — the same system that surfaced this
          role.
        </Text>
        <Text as="p" variant="body-default-l">
          I'm looking for Summer 2026 PM, APM, or TPM internships where engineering depth
          meets product thinking — ideally at AI/SaaS/B2B companies at Series A–C stage.
          Authorized to work in the US with sponsorship.
        </Text>
      </>
    ),
  },
  work: {
    display: true,
    title: "Experience",
    experiences: [
      {
        company: "Freshworks",
        timeframe: "2020 - 2025",
        role: "Senior Software Engineer — Test, Freshservice",
        achievements: [
          <>
            Led a 9-person cross-functional group delivering Contextual Collaboration and
            DevOps Change Management features to 200+ enterprise customers.
          </>,
          <>
            Shipped product work that accelerated customer issue resolution by 40%.
          </>,
          <>
            Rebuilt the automated test infrastructure and cut regression time from 3 days to
            4 hours.
          </>,
          <>
            Partnered with product managers across 15+ feature launches and developed the
            product instincts that prompted the shift from engineering to PM.
          </>,
        ],
        images: [],
      },
      {
        company: "Cornell Johnson DTI × Oracle",
        timeframe: "2026",
        role: "AI Technical Lead",
        achievements: [
          <>
            Leading the technical architecture for an agentic AI healthcare-adjacent system
            built through Cornell's Digital Technology Immersion program.
          </>,
          <>
            Translating product requirements into agent design, tool specifications, and
            knowledge-base decisions with OCI Generative AI as the deployment surface.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Cornell University",
        description: (
          <>
            M.Eng in Engineering Management, GPA 3.96, graduating December 2026. Coursework
            spans product management, AI systems, and applied analytics.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Focus Areas",
    skills: [
      {
        title: "Product + AI Systems",
        description: (
          <>
            Building AI-powered workflows with a product lens, from problem framing and
            scoring logic to grounded generation and operator-facing tooling.
          </>
        ),
        tags: [
          { name: "Product Strategy" },
          { name: "Agentic AI" },
          { name: "B2B SaaS" },
        ],
        images: [],
      },
      {
        title: "Technical Depth",
        description: (
          <>
            Comfortable moving between engineering detail and product judgment across
            automation pipelines, analytics, and enterprise systems.
          </>
        ),
        tags: [
          { name: "Python" },
          { name: "Analytics" },
          { name: "Systems Thinking" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing",
  description: `Writing on product, AI systems, and lessons from building as ${person.name}.`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: "Projects",
  description: `Selected product, strategy, and AI systems work by ${person.name}.`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: `Gallery by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
