const elem = document.getElementById("headline");

if (elem) {
  elem;
} else {
  elem;
}

if (!elem) throw new Error("Couldn't find element.");

elem.innerHTML;

function contains(text: string, search: string | RegExp) {
  if (search instanceof RegExp) {
    return Boolean(search.exec(text));
  }

  return text.includes(search);
}

interface Apple {
  isGoodForBaking: boolean;
}

interface Orange {
  numOfSegments: number;
}

function pickFruit(fruit: Apple | Orange) {
  if ("isGoodForBaking" in fruit) {
    return fruit;
  } else {
    return fruit;
  }
  fruit;
}

// Discriminated Union
interface UploadEvent {
  type: "upload";
  filename: string;
  contents: string;
}

interface DownloadEvent {
  type: "download";
  filename: string;
}

type AppEvent = UploadEvent | DownloadEvent;

function handleEvent(e: AppEvent) {
  if ("contents" in e) {
    e;
  } else {
    e;
  }

  switch (e.type) {
    case "download":
      e;
      break;
    case "upload":
      e;
      break;
    default:
      e;
  }
  e;
}
