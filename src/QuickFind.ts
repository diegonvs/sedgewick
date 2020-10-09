interface IQuickFind {
  connected(p: number, q: number): boolean;
  union(p: number, q: number): void;
}

export default class QuickFind implements IQuickFind {
  private id_: number[];

  constructor(size: number) {
    this.id_ = [...Array(size).keys()];
  }

  connected(p: number, q: number): boolean {
    return this.id_[p] === this.id_[q];
  }

  union(p: number, q: number) {
    const pId = this.id_[p];
    const qId = this.id_[q];

    for (let index = 0; index < this.id_.length; index++) {
      if (this.id_[index] === pId) {
        this.id_[index] = qId;
      }
    }
  }

  get id(): number[] {
    return this.id_;
  }
}
