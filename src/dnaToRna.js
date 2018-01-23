const subStr = (s, start, count) => {
  if (start < 0 || count < 0) return '';
  if (s.length === 0 ) return '';
  if (start + count > s.length) return '';
  
  let result = '';
  for (let i = start; i < start + count; i++) {
    result += s[i];
  };
  return result;
};

const dnaToRna = (dna) => {
  const count = dna.length;
  if (count === 0) return '';
  else {
    const nextchar = dnaToRna(subStr(dna, 1, count - 1));

    if (nextchar === null) return null;
    else {
      switch (dna[0]) {
        case 'G': return 'C' + nextchar;
        case 'C': return 'G' + nextchar;
        case 'T': return 'A' + nextchar;
        case 'A': return 'U' + nextchar;
        default : return null; 
      };
    };
  };
};

export default dnaToRna;