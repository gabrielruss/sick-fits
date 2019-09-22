const Mutation = {
  async createItem(parent, args, ctx, info) {
    const item = await ctx.prisma.createItem(
      {
        ...args,
      },
      info
    );

    return item;
  },
};

module.exports = Mutation;
