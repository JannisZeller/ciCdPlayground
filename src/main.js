import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Jannis Zeller",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["automation"],
    // Which CI/CD tools do you use in your project?
    tools: "None",
    // What do you want to learn in this workshop?
    expectations: ["First introduction", "Preparations for first project"],
  },
});
