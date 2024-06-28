type World = "world" | "BBC" | "Sky"; // string
type Hello = "Hello" | "Bonjour";
type Goodbye = "Goodbye" | "Au revoir";
type Greeting = Hello | Goodbye;

type Salutation = `${Greeting} ${World}`;

type subsite = "sport" | "news" | "iplayer";
type allowed_urls = `https://${subsite}.bbc.co.uk/`;
