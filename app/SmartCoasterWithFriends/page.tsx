/* eslint-disable @next/next/no-img-element */
import { Metadata, NextPage } from "next/types";
import styles from "./page.module.css";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Smart Coaster With Friends",
};

export default function SmartCoasterWithFriends() {
  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h1>Smart Coaster With Friends</h1>
      </div>
      <div className={styles.imageContainer}>
        <img
          className={styles.articleImage}
          src="/smartCoasterWithFriends.webp" // Adjust this path
          alt="Systems Architecture Concept"
        />
      </div>

      <div className={styles.linkContainer}>
        <a
          href="https://github.com/David-Waite/Smart-Coaster-With-Friends"
          target="_blank"
          className={styles.link}
        >
          View on GitHub
        </a>
      </div>

      <div className={styles.article}>
        <h2>Overview</h2>
        <p>
          The Smart Coaster with Friends is an IoT-enabled device designed to
          track water consumption and provide timely hydration reminders. It
          integrates with Discord, allowing friends to motivate each other. This
          project was developed in a IoT class and was driven by the personal
          goal of encouraging better hydration habits.
        </p>
        <h2>System Functionality</h2>
        <p>
          The Smart Coaster with Friends system offers a set of features
          designed to encourage consistent hydration and facilitate social
          interaction. Each smart coaster functions as follows:
        </p>
        <h3>Core Coaster Actions</h3>
        <ul>
          <li>
            Placing a water bottle on the coaster registers a new drink. Upon
            lifting the cup and placing it back down lighter, a sip is
            registered. A heavier weight detected upon placement registers a new
            drink.
          </li>
          <li>Each time a sip is taken, a drinking timer activates.</li>
          <li>
            An RGB light fades from green to red to indicate the status of the
            timer.
          </li>
          <li>A tune plays to alert the user when the timer is up.</li>
          <li>
            The brightness of the RGB light can be controlled by a dial
            (potentiometer).
          </li>
          <li>A push button on the system allows for individual actions:</li>
          <ul>
            <li>
              Single Press: If its&apos;s the first press after the device is
              ready, it starts a new tracking session, resetting the total
              consumed, starting a new session, and resetting the reminder light
              to green. If a cup is already on the scale, this action registers
              a new cup, corrects a mistaken sip recording (by reverting the
              last sip), and sets the current weight as the new starting weight
              for a full cup.
            </li>
            <li>
              Double Press: This action resets the total consumption, starts a
              new session, and resets the reminder cycle.
            </li>
            <li>
              Long Press: This action instructs the scale to re-tare itself.
            </li>
          </ul>
        </ul>

        <h3>Discord Integration</h3>
        <div className={styles.imageContainer}>
          <img
            className={styles.articleImage}
            src="/discord.webp" // Adjust this path
            alt="Systems Architecture Concept"
          />
        </div>
        <ul>
          <li>
            Each coaster is registered as a separate unit and connected to a
            shared Discord server.
          </li>
          <li>
            Devices send notifications to the Discord channel regarding status
            or action updates, such as when a user starts the device or a
            session, starts a new drink, takes a sip (including sip amount and
            total amount), or when the buzzer is active.
          </li>
          <li>
            The Discord server can also be used to control the individual timer
            and buzzer of each coaster. Proposed commands include setting the
            drinking timer length and muting or unmuting the buzzer
          </li>
          <li>
            This setup enables friends to update their device settings, monitor
            their friends&apos;s drinking habits, engage in conversations about
            water consumption, or even unmute someone&apos;s buzzer to provide a
            friendly nudge—all from a centralized location.
          </li>
        </ul>
        <h3>Flask Web Server (for local debugging):</h3>
        <ul>
          <li>
            A Flask web server provides a local graphical interface for
            debugging and monitoring each device. It allows for updating
            settings and well as hosting two pages:
            <ul>
              <li>
                index: periodically calls the data endpoint to display the most
                up-to-date system information
                <div className={styles.imageContainer}>
                  <img
                    className={styles.articleImage}
                    src="/flaskDebugPage.webp" // Adjust this path
                    alt="Systems Architecture Concept"
                  />
                </div>
              </li>
              <li>
                history: Shows a breakdown of pass sessions{" "}
                <div className={styles.imageContainer}>
                  <img
                    className={styles.articleImage}
                    src="/flaskHistroyPage.webp" // Adjust this path
                    alt="Systems Architecture Concept"
                  />
                </div>
              </li>
            </ul>
          </li>
        </ul>

        <h3>ThingsBoard Integration</h3>
        <div className={styles.imageContainer}>
          <img
            className={styles.articleImage}
            src="/thingsboard.webp" // Adjust this path
            alt="Systems Architecture Concept"
          />
        </div>
        <ul>
          <li>
            All devices are connected to a ThingsBoard cloud platform for
            monitoring hardware telemetry data. This allowed for real-time
            monitoring of system properties for debugging purposes and as an
            assignment requirement, without flooding the Discord channel with
            unnecessary notifications
          </li>
        </ul>
        <h2>System Architecture & Design</h2>
        <p>
          The system was design so that each unit, integrating both front-end
          and back-end components with a robust data-fetching mechanism through
          and various communication protocols.
        </p>
        <h3>Architecture Diagram</h3>
        <div className={styles.imageContainer}>
          <img
            className={styles.articleImage}
            src="/ArduinoBlockDiagram.webp" // Adjust this path
            alt="Systems Architecture Concept"
          />
        </div>

        <h3>Multi-layered IoT Architecture</h3>
        <p>
          The system&apos;s architecture came together through an iterative
          process, integrating its physical and software components to enable
          data reporting to ThingsBoard and communication through various
          protocols
        </p>
        <ul>
          <li>
            <strong>Physical Layer:</strong> This layer is composed of the
            fundamental hardware components for the four smart coasters that
            were made. This includes the Arduino, a 5Kg load cell used for
            accurate weight measurement, a user input button, a potentiometer
            for brightness control, an RGB LED, and a buzzer for feedback.
          </li>
          <li>
            <strong>Edge Computing Layer:</strong> Each coaster has a Raspberry
            Pi connected through this layer, running Raspberry Pi software on a
            virtual machine using Debian. The Raspberry Pi is responsible for
            immediate data collection, running the core logic, and managing the
            states of the local device.
          </li>
          <li>
            <strong>Network/Communication Layer</strong>: This layer is
            responsible for the communication between the Serial from the
            Arduino to the Raspberry Pi, then the MQTT protocol between the
            Raspberry Pi and the Cloud, and then HTTPS from the Raspberry Pi to
            the Discord API.
          </li>
          <li>
            <strong>Cloud/Application Layer:</strong> ThingsBoard.io was
            utilized to serve as the cloud layer for monitoring and visualizing
            device telemetry data. Its primary role in this system was for
            debugging and fulfilling assignment requirements. The Discord API
            facilitates crucial bidirectional communication for notification
            services and bot interaction.
          </li>
        </ul>
        <h3>Key Components (Hardware):</h3>
        <ul>
          <li>
            <strong>Load Cell and HX711 Amplifier:</strong> The 5KG Load cell
            Beam and HX711 Amplifier are connected, with the amplifier
            converting the analog signal from the load cell to digital. The
            assembly involved soldering the amplifier to the wire connections,
            extending wires using soldering and heat shrink, and then connecting
            to the load cell and breadboard. Finally, the load cell was
            calibrated using the HX711 library.
          </li>
          <li>
            <strong>Potentiometer:</strong> A 10K potentiometer with three
            terminal resistors, providing an analog voltage from 0 to 5V, used
            for brightness control of the RGB LED.
          </li>
          <li>
            <strong>Push Button:</strong> A digital sensor for each smart
            coaster, detecting whether it is high or low (pressed or released).
            The main purpose was to allow a user to perform operations such as
            taring the weight sensor, resetting, restarting, or initiating the
            weight sensor.
          </li>
          <li>
            <strong>RGB LED:</strong> Displays the current timer state, fading
            from green to red.
          </li>
          <li>
            <strong>Passive Buzzer:</strong> Used to play a song or tune when
            the timer is up, chosen over an active buzzer to allow for custom
            tunes.
          </li>
        </ul>
      </div>
    </div>
  );
}
