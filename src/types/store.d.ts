export type Theme = "system" | "light" | "dark";

export interface Store extends Record<string, unknown> {
	app: {
		autoStart: boolean;
	};

	appearance: {
		theme: Theme;
	};

	update: {
		auto: boolean;
	};
}
