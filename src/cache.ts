// src/cache.ts
import NodeCache from 'node-cache';

class Cache {
  private cache: NodeCache;

  constructor() {
    this.cache = new NodeCache();
  }

  set(key: string, value: any): boolean {
    return this.cache.set(key, value);
  }

  get(key: string): string | undefined {
    return this.cache.get(key);
  }

  public delete(key: string): void {
    this.cache.del(key);
  }

  public clear(): void {
    this.cache.flushAll();
  }
}

export default Cache;
