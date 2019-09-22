const Query = {
  async items(parents, args, ctx, info) {
    const items = await ctx.prisma.items();
    return items;
  },
};

module.exports = Query;
