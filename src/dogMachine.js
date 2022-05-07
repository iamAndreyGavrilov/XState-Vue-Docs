import { createMachine } from "xstate";

const promiseMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QBED2UB0BBA7gQwGswMBlAGzDAAcBPAYgBlUBXCAAgDtUBLAYzESgqqWNwAu3VB0EgAHogBMAFgCcGAOwAOBZoAMmgGwBWFUoDM6swYA0IGogC0Cs0owmFRgwpUGDSgyoK6gC+wbZomLiExABCYFBQ3BxQdADi3ABuYGwAKgBOYHhiMsKiElIy8ggAjNWaGGYuCjrq-ko6+rb2CA4WZhhKdZ5Gmj4GZtUGoeHo2PhEdABieGRksGx4sBTUJSLiktJIco5tDTrauiqmWppmXY4G1eoN5uqmmiOGBiFhIBHYW0oVEYLHYADkePxdmUDpVHEYFBhrkpdKjrtUfAobHZHJpzAMzEZCR5-FcjD8ZpFAdQ6CQALZgVbrABmqFQEGh+wqRyqDmqZl0Gl0RPUjwM2jq43uPTeRiRjysfk0H10WNCvy4EDgMn+USIpG2tE55UOoCqjUFRl0b18RmG6iCSmlvSJGFGLiURKMSnaAWmf1meuIJF4eAKHKOpS5puOPXJbu8noUqN0nrMyidOJ61QU1SR-mt3v55LMH39uvmsXiiWSxthPMQtwwWOcujqymtAqMzoFz2tpj6rW0paU5cDlbr3LNuLz2lMCJTaeUzp9BgGqs01W97sCorHVMNk5jvKU2gwk1Rvi0BmtnedeLUKkJhN85gm4v3R7hcd0a4vv++Qxb0sZ1AkRFQMQddpWkJEZ1WCIA */
  createMachine({
    id: "Dog",
    initial: "Awake",
    states: {
      Awake: {
        initial: "Begging",
        states: {
          Sleepy: {
            on: {
              "Loud noice": {
                target: "Scared",
              },
            },
          },
          Scared: {},
          Begging: {
            on: {
              "Give Treat": {
                target: "Begging",
                internal: false,
              },
            },
          },
        },
        on: {
          "Falls asleep": {
            target: "Asleep",
          },
        },
      },
      Asleep: {
        on: {
          "Loud Noice": {
            target: "#Dog.Awake.Scared",
          },
          "Smells food": {
            target: "#Dog.Awake.Sleepy",
          },
        },
      },
    },
  });

const machine =
  /** @xstate-layout N4IgpgJg5mDOIC5QHcCGAbA1gOjQSwBc8A7KAYnTFQDcwACACwHsBbMRUABydkLyeIcQAD0QBaAIwAWAKzYADAHYAHBImKATBPkA2RTICcUgDQgAnog0bsOgMwqDuqfPkGDGzQF9PptFmwCdKh0fphkMAR0AEaoAMaYjKzsSCDcvEQCQqIIkjI62BIGOsoymrYaBrYyEqYWCBryEtgGMkpt6lYGEsrePiDETBBwQqG4qHykQml8mSnZYra28gV6yq46Og0bOrWIEvkS9srHS7ZSjrbu3r4YOIHBoVM8M4JziLbYyiqyis6KZR4pIpdggJBoPjIpM55DJLgZ-osJNcQKNQnQwMQhhAnul+K9QPMzlJsJCNMoNFJCrCpLZlCClstzoZYYodJCZF9kY8UtMMviROJbMUSVIyRSqWdaSCxHlPpttBUtLC1LZep4gA */
  createMachine({
    initial: "waiting",
    states: {
      waiting: {
        on: {
          "leave home": {
            target: "on a walk",
          },
        },
      },
      "on a walk": {
        on: {
          "get back home": {
            target: "walk ended",
          },
        },
      },
      "walk ended": {
        type: "final",
      },
    },
    id: "walk",
  });

const machine2 =
  /** @xstate-layout N4IgpgJg5mDOIC5QGECGAbdACAtqgxgBYCWAdmAHQCyx+ATgPYAOhD51ArgC6QDEAqqRzcwiUEwaxiXYmzEgAHogC0AJgCcANgqbVAZgAsAdk3qAHKoCsmzXoA0IAJ4rLlinoAMqswYCMRvV9zXz1NAF8whzRMXAISdhp6ZlZ2QWEeCF4qEXkJKRk5JEUVPXVVCnVrD0t9AKMjfwMHZwRlV3cvMyMPM1MA80sIqIxsPCIySgA1YggwBgoAZVYAd1IyKCwANxm53gAJHa2dhlzJaVlSeSUEDTMKI1VjDw89M18LAOaXN09vPwCgm9QkMQNFRnEJhRprN5gcIOsjjDeEsGMtEXNTvkLldEL5fOVVKoTK9epZPG8zF9Wu1fj5-IFgsCQaQGLN4EUwbFxglaIwWGxKNkMpjzoVQNdlIFyppLMZVDLQs9XEYqWpCe5AnpyeojGZrEzhjExvFBbzkgKKGkRBARQVLkUJXp1SFLFoXmUGjYqXiDBQNMZfK78VotCDOcbIYk+SlREU8qL7eKVH5tJVNNVanp6o1VRofoHuvT1B4DOYwyMuSaocdFis1qQNtsYbbsQ7cQ97nL9JYzL3ZZSnCpCeUtSFGqWbB5fOFIqCKxH2NC5hQ4Qimxi42c7TibgZyh4dUT6g0S0YDJpvb5ff6GkGNKZrOWjRDF8cW2Lighe36ibZewqeneXNKncQNNF7DQejJGdDXBblY3ELdWyTVoDAMDwKiqGosyzBoz1VUI7k8Z4Hh7LwDCdAwIgiIA */
  createMachine({
    type: "parallel",
    states: {
      Microphone: {
        initial: "Muted",
        states: {
          Muted: {
            on: {
              Unmute: {
                target: "Unmuted",
              },
            },
          },
          Unmuted: {
            on: {
              Mute: {
                target: "Muted",
              },
            },
          },
        },
      },
      Video: {
        initial: "Showning video",
        states: {
          "Showning video": {
            on: {
              "Hide video": {
                target: "Hiding video",
              },
            },
          },
          "Hiding video": {
            on: {
              "Show video": {
                target: "Showning video",
              },
            },
          },
        },
      },
    },
    id: "Call machine",
  });

export default { promiseMachine, machine, machine2 };
