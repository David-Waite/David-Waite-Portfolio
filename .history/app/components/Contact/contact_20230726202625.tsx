"use client";

import { FormEvent, useState } from "react";
import styles from "./contact.module.css";
import { useSearchParams } from "next/navigation";
export const Contact = () => {
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<string>("idle");
  const [disabled, setDisabled] = useState<boolean>(false);
  const searchParams = useSearchParams();

  const onContactFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const formData: { [key: string]: string } = {};
    const elements = e.currentTarget.elements as unknown as Array<
      HTMLInputElement | HTMLTextAreaElement | HTMLButtonElement
    >;

    Array.from(elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    await fetch("/contact/send", {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((res) => {
        setMessage(res.message);
        setStatus(res.status);
        setDisabled(res.message.length > 0);
      });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Shoot me a message</h1>
      <p className={styles.tagline}>
        Get in touch and I&apos;ll get back to you as soon as I can.
      </p>

      <form onSubmit={onContactFormSubmit}>
        {message.length > 0 ? (
          <div
            className={`paragraph ${styles.alert} ${
              status ? styles.alertSuccess : styles.alertError
            }`}
          >
            <span>{message}</span>
          </div>
        ) : null}
        <div className={styles.topForm}>
          <div className={styles.inputCon}>
            <label htmlFor="name">
              <span>Full Name*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              disabled={disabled}
            />
          </div>
          <div className={styles.inputCon}>
            <label htmlFor="email">
              <span>Email Address *</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              disabled={disabled}
            />
          </div>
        </div>

        <div className={`${styles.message} ${styles.inputCon}`}>
          <label htmlFor="message">
            <span>Message*</span>
          </label>
          <textarea
            rows={3}
            name="message"
            id="message"
            required
            disabled={disabled}
          ></textarea>
        </div>

        <button
          type="submit"
          className={`${styles.button} ${
            status === "idle"
              ? styles.idle
              : status === "loading"
              ? styles.btnLoading
              : status === "error"
              ? styles.btnError
              : styles.btnSent
          }`}
          disabled={disabled}
        >
          {status === "idle"
            ? "Submit"
            : status === "loading"
            ? styles.btnLoading
            : status === "error"
            ? "Error"
            : "Sent"}
        </button>
      </form>
    </div>
  );
};
