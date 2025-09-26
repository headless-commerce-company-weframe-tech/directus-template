import { InvalidPayloadError } from '@directus/errors';
export default ({ filter }, { services }) => {
	const { ItemsService } = services;
	filter("Follow.items.create", async (paylaod, meta, { schema, accountability }) => {
		const FollowCollection = new ItemsService("Follow", {
			schema,
		});
		const followObjects = await FollowCollection.readByQuery({
			meta: "*",
			filter: {
				whom: {
					_eq: paylaod['whom'],
				},
				user_created: {
					_eq: accountability['user'],
				},
			},
		});
		console.log("***************************** followObjects found: ", followObjects.length);
		if (followObjects.length > 0) {
			throw new InvalidPayloadError("You already follow this user");
		} else {
			return paylaod;
		}
	});
};
