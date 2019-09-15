const Query = {
  dogs(parent, args, cxt, info) {
    return [{ name: 'Snickers' }, { name: 'Butts' }];
  },
};

module.exports = Query;
