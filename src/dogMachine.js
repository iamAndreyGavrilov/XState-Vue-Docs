import { createMachine } from "xstate";

const promiseMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QBED2UB0BBA7gQwGswMBlAGzDAAcBPAYgBlUBXCAAgDtUBLAYzESgqqWNwAu3VB0EgAHogBMAFgCcGAOwAOBZoAMmgGwBWFUoDM6swYA0IGogC0Cs0owmFRgwpUGDSgyoK6gC+wbZomLiExABCYFBQ3BxQdADi3ABuYGwAKgBOYHhiMsKiElIy8ggqmhoAjJqeut4qRpZmtvYIDhZqZnUeSuoGdQ1KdUqh4ejY+ER0AGJ4ZGSwbHiwFNQlIuKS0khyjv6uZjrauiqmWpoddo4j6hguvUqNmoYGIWEgEdiblCojBY7AAcjx+DsyvtKo4jAoMNclLoUdc6j4FDZ7t1NOYMOYjGZ4UZ-Fc2lNfjMsADqHQSABbMArNYAM1QqAgUL2FUOVQcdTMug0ukJwzqBm0DQMdy6DnUrURIysfg+RmaBlCPy4EDgMj+USIpC2tC55QOoCqZkFbl08t8Rk8bSCSk6jiJZgwmhULiUhJJSkxKgp+rmxBIvDwBU5h1K3PNR26bU93l9ChRul9ZyULux-IUdUR-ltJIFbTMjWDVNDGDiCSSUFNMN5iFuGExzl0DWUtsFRld3UFT1tpgsFjezlxlciocbPItjk0Be0pnh6czyn7DlTzwG0pUl29w8mP31NKos-jfPHGHFKN8WgMtp7m9xam9ft85n6EqnF9hid0Awb0fQCvkMJ9LE3QIEXfK03gFHxVE1YIgA */
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
  /** @xstate-layout N4IgpgJg5mDOIC5QGECGAbdACAtqgxgBYCWAdmAHQCyx+ATgPYAOhD51ArgC6QDEAqqRzcwiUEwaxiXYmzEgAHogC0AJgDMARgqaALAFZ1ADnUBOAAxGAbLqMAaEAE8VR7QHZTR-W+tXN5qw8AXyCHNExcAhJ2GnpmVnZBYR4IXioReQkpGTkkRRV1VTcKXTcPfVNVU09DUodnBGVXCg9rczLPI1UbELCMbDwiMkoANWIIMAYKAGVWAHdSMigsADdxyd4ACXXV9YZMyWlZUnklBHUbClVzItN1A28Hq3qXdxqfKz8A4NCQcIGosMKGMJlNthAlrtQbxZgw5lDJgdssdTohNGUWuZvFo7pVurpdC9Gs1Wt5fP5AqYQr9SAwJvA8v9IkMYrRGCw2JR0ikkUdcqAzmpSjo3J91PcrNcjG51EShUYKF03N8ulZTLoqr0-v1mdEuWz4pyKEkRBBeTkTnlBap9FYKFYyYEtNLPLKnIhpS1PKYfK6jCYsVqmYM9dQDRzyOaUVaCvptKVypVql57m45YVtErzAYrOZ1KLXG4gzqQ0CQZMZvNFqRlmtQVH+fkEBoFaobVpPpKyupLHLVLZFUUsbp89LdIFixFS+xy2DxpC64i8lk+ZaBYge8VvIZlUYCaYHTKiZ7Wj6jH6A6pJwCWaM9g2103NIZMdjNLi2zZCe7GhnB8qM30IC3GuKxr11YYH1RX83H0EoOgqKoalTdN1X-LEblFGoqWpIA */
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
