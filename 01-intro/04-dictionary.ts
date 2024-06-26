interface Preferences {
  volume: number;
  subtitles: boolean;
}

interface ChannelPreferences {
  bbc1: Preferences;
  bbc2: Preferences;
  bbcNews: Preferences;
  bbcParliament: Preferences;
  // ...
}

type Channels = "bbc1" | "bbc2" | "bbcNews";

interface ChannelPreferencesDict {
  [channel: string]: Preferences;
}

const preferenceMap = new Map<Channels, Preferences>();

// preferenceMap.has()
