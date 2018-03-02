export const Zero = m => x => x;

export const Succ = f => g => n => g(f(g)(n));

