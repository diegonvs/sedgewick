interface IUnionFind {
  // Adds a connection between p and q
  union(p: number, q: number): void;

  // are p and q in the same component?
  connected(p: number, q: number): boolean;

  // number of the components
  count(): number;
}

export default class UnionFind implements IUnionFind {
  private size_: number;

  /**
   * Initializes the UnionFind with N objects (from 0 to `size` - 1)
   */
  constructor(size: number) {
    this.size_ = size;
  }

  get size(): number {
    return this.size_;
  }

  set size(newSize: number) {
    this.size_ = newSize;
  }

  union(p: number, q: number): void {
    console.log('p, q from union function: ', [p, q]);
  }

  connected(p: number, q: number): boolean {
    console.log('p, q from connected function: ', [p, q]);
    return true;
  }

  count(): number {
    return -1;
  }
}
