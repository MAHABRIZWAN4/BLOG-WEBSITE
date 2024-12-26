---
slug: z-ai-agent
title: AI-AGENT BLOG
description:  Explore how AI agents are transforming industries with automation and smart decision-making. 
date: 26-12-2024
author: Mahab Rizwan
image: /ai-agent.webp
---

# AI Agents Simplified

Artificial Intelligence (AI) agents have revolutionized the way we interact with technology. From personal assistants like Siri and Alexa to recommendation engines on Netflix, AI agents are everywhere. But how do they actually work? Let’s dive into the world of AI agents, step by step, in a simple way with real-life examples and some code snippets.

## What is an AI Agent?
An AI agent is a program that perceives its environment, makes decisions, and acts to achieve specific goals. Imagine a robot vacuum cleaner. It scans your house (perceives the environment), avoids obstacles (makes decisions), and cleans the floor (acts).

### Key Components of an AI Agent:
1. **Perception:** Collecting data from the environment using sensors or input.
   - Example: A chatbot reading your typed question.

2. **Decision-making:** Analyzing data to determine the next action.
   - Example: Choosing the most relevant response to your query.

3. **Action:** Taking a step based on the decision.
   - Example: Displaying a reply or performing a task.

Here’s a simple analogy: 
- **Perception:** You see a traffic signal.
- **Decision-making:** Red light? Stop. Green light? Go.
- **Action:** Driving your car accordingly.

## Types of AI Agents

### 1. **Reactive Agents:**
These agents make decisions based only on the current situation. They don’t remember past interactions. 
- **Example:** Your thermostat turning on the heater when the temperature drops below a set level.

#### Code Example:
```c showLineNumbers 
function thermostat(currentTemp, desiredTemp) {
  if (currentTemp < desiredTemp) {
    return "Turn on Heater";
  } else {
    return "Turn off Heater";
  }
}

console.log(thermostat(18, 22)); // Output: Turn on Heater
```

### 2. **Model-based Agents:**
These agents consider both the current state and past experiences. They use memory to improve their actions.
- **Example:** A self-driving car remembering the layout of a road.

#### Code Example:
```c showLineNumbers 
let memory = [];

function selfDrivingCar(currentState, action) {
  memory.push(currentState);
  if (action === "obstacle") {
    return "Steer away";
  } else {
    return "Keep driving";
  }
}

console.log(selfDrivingCar("clear road", "drive"));
console.log(selfDrivingCar("obstacle ahead", "obstacle"));
```

### 3. **Goal-based Agents:**
These agents focus on achieving specific goals and make decisions accordingly. 
- **Example:** Google Maps suggesting the fastest route to your destination.

#### Code Example:
```c showLineNumbers 
function googleMaps(currentLocation, destination) {
  const routes = ["Route A", "Route B", "Route C"];
  // Simulate shortest path calculation
  const shortestRoute = routes[Math.floor(Math.random() * routes.length)];
  return `Shortest route from ${currentLocation} to ${destination} is ${shortestRoute}`;
}

console.log(googleMaps("Home", "Office"));
```

## Daily Life Examples of AI Agents
1. **Smart Assistants:** Siri, Alexa, and Google Assistant answer questions and perform tasks.
2. **Recommendation Systems:** Netflix suggests movies based on your viewing history.
3. **Healthcare:** AI systems analyze patient data to assist doctors in diagnosis.
4. **E-commerce:** Amazon’s chatbots assist in finding products or resolving issues.

## Building Your Own AI Agent
Creating an AI agent doesn’t have to be complex. Let’s make a simple chatbot that greets users based on the time of day.

### Code Example:
```c showLineNumbers 
function greetingAgent(name) {
  const currentHour = new Date().getHours();
  let greeting;

  if (currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  return `${greeting}, ${name}! How can I assist you today?`;
}

console.log(greetingAgent("Mahab"));
```

## Why Learn AI Agents with Sanity?
Sanity is a platform that makes creating and managing content-driven applications a breeze. Combining AI agents with Sanity allows developers to build intelligent, dynamic, and user-friendly systems. For instance, an e-commerce site can dynamically suggest products based on user behavior.

## Conclusion
AI agents are everywhere, simplifying tasks and improving user experiences. Whether it’s a simple chatbot or a complex self-driving car, understanding the basics helps you appreciate their value and even create your own! Start small, experiment, and keep learning. Remember, even the smartest AI agent started with a few lines of code.
