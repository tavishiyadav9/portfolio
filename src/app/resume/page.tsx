import { Column, Button, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";

const resumePath = "/resume.pdf";

export async function generateMetadata() {
  return Meta.generate({
    title: `Resume – ${person.name}`,
    description: `Resume for ${person.name}.`,
    baseURL,
    path: "/resume",
    image: "/og.png",
  });
}

export default function ResumePage() {
  return (
    <Column maxWidth="m" fillWidth gap="24" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/resume"
        title={`Resume – ${person.name}`}
        description={`Resume for ${person.name}.`}
        image="/og.png"
      />
      <Column gap="12" horizontal="center" align="center">
        <Heading variant="heading-strong-xl">Resume</Heading>
        <Text onBackground="neutral-weak" align="center">
          View Tavishi Yadav&apos;s resume inline or download the PDF directly.
        </Text>
        <Button href={resumePath} prefixIcon="document">
          Download PDF
        </Button>
      </Column>
      <iframe
        src={resumePath}
        title="Tavishi Yadav resume"
        style={{
          width: "100%",
          minHeight: "72vh",
          border: "1px solid var(--neutral-alpha-weak)",
          borderRadius: "1rem",
          background: "white",
        }}
      />
    </Column>
  );
}
