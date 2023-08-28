/**
 * Loads a string from storage.
 *
 * @param key The key to fetch.
 */
function loadString(key: string): string | null {
  return localStorage.getItem(key);
}

/**
 * Saves a string to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
async function saveString(key: string, value: string): Promise<boolean> {
  try {
    await localStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

/**
 * Loads something from storage and runs it thru JSON.parse.
 *
 * @param key The key to fetch.
 */
async function load(key: string): Promise<any | null> {
  try {
    const almostThere = await localStorage.getItem(key);
    if (!almostThere) {
      return null;
    }
    return JSON.parse(almostThere);
  } catch {
    return null;
  }
}

/**
 * Saves an object to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
async function save(key: string, value: any): Promise<boolean> {
  try {
    await localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

/**
 * Removes something from storage.
 *
 * @param key The key to kill.
 */
async function remove(key: string): Promise<void> {
  await localStorage.removeItem(key);
}

/**
 * Burn it all to the ground.
 */
async function clear(): Promise<void> {
  await localStorage.clear();
}

export const storage = {
  load,
  save,
  loadString,
  saveString,
  remove,
  clear,
};
