import { query } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
	args: {},
	handler: async (ctx) => {
		return await ctx.db.query("monsters").collect();
	},
});

export const getSingleMonster = query({
	args: { id: v.id("monsters") },
	handler: async (ctx, args) => {
		const monster = await ctx.db.get(args.id);
		if (monster === null) {
			return null;
		}
		return { monster };
	},
});
