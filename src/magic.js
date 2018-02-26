const wrapped = (previousAcc = 0) => {
  const summ = (args) => args.reduce((acc, v) => acc + v, previousAcc);

  const magic = (...args) => wrapped(summ(args));

  magic.valueOf = () => previousAcc;

  return magic;
}

export default (...args) => wrapped(0)(...args);