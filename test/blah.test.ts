import { QuickFind, QuickUnion, UnionFind } from '../src';

describe('Sedgewick', () => {
  describe.skip('Union Find', () => {
    it('initializes property', () => {
      const UF = new UnionFind(3);
      expect(UF.size).toBe(3);
    });
    it('checks if two components are connected or not', () => {
      const SIZE = 10;

      type Union = [number, number];

      const stdin: Array<[boolean, Union]> = [
        [true, [4, 3]],
        [true, [3, 8]],
        [true, [6, 5]],
        [true, [9, 4]],
        [true, [2, 1]],
        [false, [8, 9]],
        [true, [5, 0]],
        [true, [7, 2]],
        [true, [6, 1]],
        [false, [1, 0]],
        [false, [6, 7]],
      ];

      const uf = new UnionFind(SIZE);

      stdin.forEach(([booleanValue, tuple]) => {
        console.log(tuple, booleanValue);

        if (!uf.connected.apply(this, tuple)) {
          uf.union.apply(this, tuple);
        }

        expect(uf.connected.apply(this, tuple)).toBe(booleanValue);
      });
    });
  });

  describe.skip('QuickFind', () => {
    it('initializes property', () => {
      const qf = new QuickFind(3);
      expect(qf).toBeDefined();
    });

    it('sandbox', () => {
      const qf = new QuickFind(3);

      qf.union(1, 2);

      console.table(qf.id);
      console.log('connected? ', qf.connected(1, 2));

      const set: [number, number] = [3, 2];

      qf.union.apply(this, set);

      console.table(qf.id);
      console.log('connected? ', qf.connected.apply(this, set));
    });
  });

  describe('QuickUnion', () => {
    it('initializes property', () => {
      const qu = new QuickUnion(10);

      const identity = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

      // Identity and Quick Union are the same
      expect(qu.id).toStrictEqual(identity);
    });

    it.skip('sandbox', () => {
      const qu = new QuickUnion(10);

      qu.union(3, 4);

      console.table(qu.id);
    });
  });
});
