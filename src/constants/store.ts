import type { Store } from "@/types/store";

export const STORE_FILE_NAME = "store.json";

export const STORE_DEFAULT_VALUES: Store = {
	app: {
		autoStart: false,
	},
	appearance: {
		theme: "system",
	},
	update: {
		auto: false,
	},
};
