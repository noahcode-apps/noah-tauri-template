import { STORE_FILE_NAME } from "@/constants/store";
import { sep } from "@tauri-apps/api/path";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs));
}

export const joinPath = (...paths: string[]): string => {
	const normalizedPaths = paths.map((path) =>
		path.endsWith(sep()) ? path.slice(0, -1) : path,
	);
	return normalizedPaths.join(sep());
};

export const isDev = (): boolean => import.meta.env.DEV;

export const storeFileName = (): string => {
	return isDev() ? `dev.${STORE_FILE_NAME}` : STORE_FILE_NAME;
};
