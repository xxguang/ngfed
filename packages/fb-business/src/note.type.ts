// Omit
type T001 = Omit<{ a: 1; b: 2 }, 'a'>;
const t1: T001 = { b: 2 };

// &
type T002 = { a: 1; b: 2 } & { a: 1; c: 3 };
const t2: T002 = { a: 1, b: 2, c: 3 };

type T003 = Record<'a' | 'b', number>;
const t3: T003 = { a: 1, b: 2 };

type T004 = Partial<Record<'a' | 'b', number>>;
const t4: T004 = { a: 1 };
