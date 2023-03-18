export interface ConvertOptions {
  src: string;
  out: string;
}

export function readOptionsFromConfig(configPath: string): ConvertOptions {
  const configFileContent = require(configPath);

  const src = configFileContent.src;
  const out = configFileContent.out;

  if (!src || !out) {
    throw new Error('Both "src" and "out" must be specified in the config file.');
  }

  return { src, out };
}
