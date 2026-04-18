"use client";

import { Row, Text } from "@once-ui-system/core";
import { useEffect, useState } from "react";
import styles from "./InternshipBanner.module.scss";

const STORAGE_KEY = "internship-banner-dismissed-at";
const DISMISS_DURATION_MS = 7 * 24 * 60 * 60 * 1000;

export function InternshipBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const storedValue = window.localStorage.getItem(STORAGE_KEY);
    const dismissedAt = storedValue ? Number.parseInt(storedValue, 10) : Number.NaN;
    const shouldShow = Number.isNaN(dismissedAt) || Date.now() - dismissedAt > DISMISS_DURATION_MS;

    setIsVisible(shouldShow);
  }, []);

  const handleDismiss = () => {
    window.localStorage.setItem(STORAGE_KEY, Date.now().toString());
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Row
      className={styles.banner}
      background="brand-strong"
      radius="m"
      paddingX="16"
      paddingY="8"
      horizontal="between"
      vertical="center"
      gap="16"
      marginBottom="24"
    >
      <Text variant="body-default-s" style={{ color: "white" }}>
        Currently seeking Summer 2026 PM / APM / TPM internships
      </Text>
      <button
        aria-label="Dismiss internship banner"
        className={styles.closeButton}
        onClick={handleDismiss}
        type="button"
      >
        X
      </button>
    </Row>
  );
}
