import alertsAudio from '~/_data/alerts-audio.json';

export interface AudioSource {
  readonly src?: string;
}

export type AudioSourceFiles = Partial<Record<string, AudioSource>>;

export default alertsAudio as unknown as AudioSourceFiles;
