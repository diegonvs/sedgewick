interface IQuickUnion {
  root(i: number): number;
  connected(p: number, q: number): boolean;
  union(p: number, q: number): void;
}

export default class QuickUnion implements IQuickUnion {
  private id_: number[];

  constructor(size: number) {
    this.id_ = [...Array(size).keys()];
  }

  /**
   * Chase parent pointers until reach root
   * (depth of i array accesses)
   */
  root(i: number): number {
    while (i !== this.id_[i]) {
      i = this.id_[i];
    }
    return i;
  }

  /**
   * Check if `p` and `q` have the same root
   * (depth of `p` and `q` array accesses)
   */
  connected(p: number, q: number): boolean {
    return this.root(p) === this.root(q);
  }

  /**
   * change root of `p` to point to root of `q`
   * (depth of `p` and `q` array accesses)
   */
  union(p: number, q: number) {
    const i = this.root(p);
    const j = this.root(q);
    this.id_[i] = j;
  }

  get id(): number[] {
    return this.id_;
  }
}
