import { Row, IconButton, SmartLink, Text } from "@once-ui-system/core";
import { CopyEmailButton } from "./CopyEmailButton";
import { person, social } from "@/resources";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const linkedIn = social.find((item) => item.name === "LinkedIn");

  return (
    <Row as="footer" fillWidth padding="8" horizontal="center" s={{ direction: "column" }}>
      <Row
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="between"
        vertical="center"
        s={{
          direction: "column",
          horizontal: "center",
          align: "center",
        }}
      >
        <Text variant="body-default-s" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">© {currentYear} /</Text>
          <Text paddingX="4">{person.name}</Text>
          <Text onBackground="neutral-weak">
            {/* Usage of this template requires attribution. Please don't remove the link to Once UI unless you have a Pro license. */}
            / Build your portfolio with{" "}
            <SmartLink href="https://once-ui.com/products/magic-portfolio">Once UI</SmartLink>
          </Text>
        </Text>
        <Row gap="12" wrap horizontal="center" vertical="center">
          {linkedIn?.link && (
            <IconButton
              href={linkedIn.link}
              icon="linkedin"
              tooltip="LinkedIn"
              size="s"
              variant="ghost"
            />
          )}
          <Row gap="8" vertical="center" className={styles.contactRow}>
            <SmartLink href={`mailto:${person.email}`}>{person.email}</SmartLink>
            <CopyEmailButton email={person.email} />
          </Row>
        </Row>
      </Row>
      <Row height="80" hide s={{ hide: false }} />
    </Row>
  );
};
