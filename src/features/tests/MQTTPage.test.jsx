import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "../../App";

describe('MQTT tests', () => {
  test("App should open on connection screen", async () => {
    render(<App />);
  
    expect(
      screen.getByText("Connection")
    ).toBeInTheDocument();
  });

  test("User should be able to connect to a the broker and subscribe and publish messages", async () => {
    render(<App />);

    // CONNECT TO BROKER
    const hostnameInput = screen.getByTestId("hostname");
    const usernameInput = screen.getByTestId("username");
    const passwordInput = screen.getByTestId("password");

    fireEvent.change(hostnameInput, { target: { value: "b5b1e756ff474e18a00f1d8dcb610f0e.s2.eu.hivemq.cloud" } });
    fireEvent.change(usernameInput, { target: { value: "test_user" } });
    fireEvent.change(passwordInput, { target: { value: "P@ssword123" } });

    const connectButton = screen.getByText("Connect");

    fireEvent.click(connectButton)

    expect(await waitFor(() => screen.findByText("Broker connected successfully"), { timeout: 8000 })).toBeInTheDocument();
    expect(
        screen.getByText("Subscriptions")
      ).toBeInTheDocument();
      expect(
        screen.getByText("Messages")
      ).toBeInTheDocument();

    // SUBSCRIBE TO TOPICS
    const subscriptionInput = screen.getByTestId("subscription-topic");
    fireEvent.change(subscriptionInput, { target: { value: "topic_1" } });

    fireEvent.click(screen.getByText("Subscribe"));
    expect(await waitFor(() => screen.getByText("topic_1"))).toBeInTheDocument();

    // PUBLISH MESSAGE WITH TOPIC
    const messageTopicInput = screen.getByTestId("message-topic");
    const messageTextInput = screen.getByTestId("message");

    fireEvent.change(messageTopicInput, { target: { value: "topic_1" } });
    fireEvent.change(messageTextInput, { target: { value: "message 1" } });

    fireEvent.click(screen.getByText("Publish message"));

    expect(await waitFor(() => screen.getByText("topic_1"))).toBeInTheDocument();
    expect(await waitFor(() => screen.getByText("message 1"))).toBeInTheDocument();

  }, 10000);
  
})
